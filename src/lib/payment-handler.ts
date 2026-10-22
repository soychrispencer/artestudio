import { NextRequest, NextResponse } from 'next/server'
import { getOnlinePlan, withIVA } from '@/lib/checkout-pricing'
import type { SubscriptionPlan } from '@/lib/subscriptions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (!Array.isArray(body.items) || !body.items.length || body.items.length > 6) throw new Error('Selecciona un servicio del catálogo.')
    const ids = new Set<string>()
    const plans: SubscriptionPlan[] = body.items.map((item: { id?: string; quantity?: number }) => {
      const plan = getOnlinePlan(String(item.id ?? ''))
      if (!plan || item.quantity !== 1 || ids.has(plan.id)) throw new Error('Servicio no disponible para compra online. Solicita una propuesta.')
      ids.add(plan.id)
      return plan
    })
    const hybrid = plans.some(p => p.setup > 0)
    if (hybrid && plans.some(p => p.setup === 0)) throw new Error('La web y el contenido tienen fechas distintas. Contrátalos por separado o solicita una propuesta combinada.')
    const customer = body.customer ?? {}
    const email = typeof customer.email === 'string' ? customer.email.trim() : ''
    const orderId = typeof body.orderId === 'string' ? body.orderId.trim() : ''
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^AS-[a-zA-Z0-9-]{1,100}$/.test(orderId)) throw new Error('Revisa tu correo y vuelve a iniciar la contratación.')
    const token = process.env.MERCADOPAGO_ACCESS_TOKEN || process.env.MERCADO_PAGO_ACCESS_TOKEN
    if (!token) return NextResponse.json({ error: 'Pago no disponible. Contáctanos para contratar.' }, { status: 503 })
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'
    const setupNet = plans.reduce((sum,p) => sum + p.setup, 0)
    const monthlyNet = plans.reduce((sum,p) => sum + p.monthly, 0)
    const continuation = body.checkoutMode === 'subscription' && hybrid
    if (!continuation && body.termsAccepted !== true) throw new Error('Confirma el alcance y las condiciones antes de continuar.')
    let startDate: string | undefined
    if (continuation) {
      const paymentId = String(body.paymentId ?? '')
      if (!/^\d{1,30}$/.test(paymentId)) throw new Error('Falta verificar el pago de implementación. Contáctanos para coordinar la activación.')
      const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, { headers, cache: 'no-store' })
      if (!paymentResponse.ok) throw new Error('No pudimos verificar el pago de implementación.')
      const payment = await paymentResponse.json()
      const paidIds = payment.metadata?.plan_ids
      if (payment.status !== 'approved' || payment.external_reference !== orderId || payment.transaction_amount !== withIVA(setupNet) || payment.currency_id !== 'CLP' || String(payment.metadata?.customer_email ?? '').toLowerCase() !== email.toLowerCase() || !Array.isArray(paidIds) || paidIds.length !== plans.length || plans.some(p => !paidIds.includes(p.id))) throw new Error('El pago no coincide con esta contratación. Contacta a Artestudio antes de activar la mensualidad.')
      const approvedAt = new Date(payment.date_approved)
      if (!Number.isFinite(approvedAt.getTime())) throw new Error('No pudimos confirmar la fecha del pago.')
      approvedAt.setUTCDate(approvedAt.getUTCDate() + 30)
      if (approvedAt.getTime() <= Date.now()) throw new Error('El plazo de activación requiere coordinación. Contáctanos para definir el inicio sin cobros retroactivos.')
      startDate = approvedAt.toISOString()
    }
    const recurring = !hybrid || continuation
    const payload = recurring ? {
      reason: plans.map(p => p.name).join(' + ').slice(0,100), external_reference: orderId, payer_email: email,
      auto_recurring: { frequency: 1, frequency_type: 'months', transaction_amount: withIVA(monthlyNet), currency_id: 'CLP', ...(startDate ? { start_date: startDate } : {}) },
      back_url: `${siteUrl}/success`, status: 'pending',
    } : {
      items: [{ title: `Implementación: ${plans.map(p => p.name).join(' + ')}`, quantity: 1, unit_price: withIVA(setupNet), currency_id: 'CLP' }],
      payer: { email }, external_reference: orderId,
      metadata: { plan_ids: plans.map(p => p.id), customer_email: email, setup_net: setupNet, monthly_net: monthlyNet, iva_rate: 19 },
      back_urls: { success: `${siteUrl}/pago-exito?orderId=${encodeURIComponent(orderId)}`, failure: `${siteUrl}/failure`, pending: `${siteUrl}/pending` }, auto_return: 'approved',
    }
    const response = await fetch(`https://api.mercadopago.com/${recurring ? 'preapproval' : 'checkout/preferences'}`, { method: 'POST', headers, body: JSON.stringify(payload) })
    if (!response.ok) return NextResponse.json({ error: 'No pudimos iniciar el pago. Intenta nuevamente o contáctanos.' }, { status: 502 })
    const result = await response.json()
    return NextResponse.json({ id: result.id, init_point: result.init_point, sandbox_init_point: result.sandbox_init_point })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'No pudimos procesar la contratación.' }, { status: 400 })
  }
}

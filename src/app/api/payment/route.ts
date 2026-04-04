import { NextRequest, NextResponse } from 'next/server'

const MAX_PRICE = 50_000_000
const MIN_QUANTITY = 1
const MAX_QUANTITY = 10
const MAX_TITLE_LENGTH = 200

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const itemsInput = Array.isArray(body.items) ? body.items : [{
      title: body.title,
      price: body.price,
      quantity: body.quantity,
    }]

    const customer = body.customer ?? {}
    const orderId = typeof body.orderId === 'string' ? body.orderId.trim() : ''

    if (!itemsInput.length) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    // Desglosar montos para decidir entre Pago Único o Suscripción
    let totalSetup = 0
    let totalMonthly = 0
    const titles: string[] = []

    const items = itemsInput.map((item: any) => {
      const titleStr = String(item.title ?? '').trim()
      if (titleStr.length === 0 || titleStr.length > MAX_TITLE_LENGTH) {
        throw new Error(`El título debe tener entre 1 y ${MAX_TITLE_LENGTH} caracteres`)
      }
      titles.push(titleStr)

      const setupNum = Number(item.setup ?? item.price ?? 0)
      const monthlyNum = Number(item.monthly ?? 0)
      const quantityNum = Math.floor(Number(item.quantity ?? 1))

      if (Number.isNaN(setupNum) || setupNum < 0 || setupNum > MAX_PRICE) {
        throw new Error('Monto de setup inválido')
      }
      if (Number.isNaN(monthlyNum) || monthlyNum < 0 || monthlyNum > MAX_PRICE) {
        throw new Error('Monto mensual inválido')
      }
      if (Number.isNaN(quantityNum) || quantityNum < MIN_QUANTITY || quantityNum > MAX_QUANTITY) {
        throw new Error(`Cantidad debe estar entre ${MIN_QUANTITY} y ${MAX_QUANTITY}`)
      }

      totalSetup += setupNum * quantityNum
      totalMonthly += monthlyNum * quantityNum

      return {
        title: titleStr,
        quantity: quantityNum,
        unit_price: setupNum + monthlyNum, // Para reporte básico
        setup: setupNum,
        monthly: monthlyNum,
      }
    })

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!accessToken) {
      return NextResponse.json({ error: 'MercadoPago no configurado' }, { status: 500 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const email = typeof customer.email === 'string' ? customer.email.trim() : ''

    // ─────────────────────────────────────────────
    // CASO A: SUSCRIPCIÓN (Si hay cobro mensual)
    // ─────────────────────────────────────────────
    if (totalMonthly > 0) {
      const preapprovalBody = {
        reason: titles.join(' + ').substring(0, 100),
        external_reference: orderId,
        payer_email: email || 'test_user_123@testuser.com', // fallback sandbox
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: totalMonthly,
          currency_id: 'CLP',
        },
        back_url: siteUrl,
        status: 'pending',
        setup_fee: totalSetup > 0 ? totalSetup : undefined,
      }

      const resp = await fetch('https://api.mercadopago.com/preapproval', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preapprovalBody),
      })

      if (!resp.ok) {
        const errorData = await resp.json()
        console.error('MercadoPago Preapproval Error:', errorData)
        return NextResponse.json({ error: 'Error al crear la suscripción' }, { status: 502 })
      }

      const subscription = await resp.json()
      return NextResponse.json({
        init_point: subscription.init_point || subscription.sandbox_init_point,
        id: subscription.id,
      })
    }

    // ─────────────────────────────────────────────
    // CASO B: PAGO ÚNICO (Sin mensualidad)
    // ─────────────────────────────────────────────
    const preferenceBody: Record<string, unknown> = {
      items: items.map((i: any) => ({
        title: i.title,
        quantity: i.quantity,
        unit_price: i.setup,
      })),
      external_reference: orderId,
    }

    const name = typeof customer.name === 'string' ? customer.name.trim() : ''
    const phone = typeof customer.phone === 'string' ? customer.phone.trim() : ''

    if (email || name || phone) {
      const [firstName, ...rest] = name.split(' ').filter(Boolean)
      const surname = rest.join(' ')
      preferenceBody.payer = {
        email: email || undefined,
        name: firstName || undefined,
        surname: surname || undefined,
        phone: phone ? { number: phone.replace(/[^0-9]/g, '') } : undefined,
      }
    }

    if (siteUrl.startsWith('https://')) {
      preferenceBody.back_urls = {
        success: `${siteUrl}/success`,
        failure: `${siteUrl}/failure`,
        pending: `${siteUrl}/pending`,
      }
      preferenceBody.auto_return = 'approved'
    }

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceBody),
    })

    if (!resp.ok) {
      const errorBody = await resp.text()
      console.error('MercadoPago Preference error:', errorBody)
      return NextResponse.json({ error: 'Error al crear preferencia de pago' }, { status: 502 })
    }

    const preference = await resp.json()
    return NextResponse.json(preference)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al procesar el pago'
    console.error('Error en API de pagos:', error)
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}

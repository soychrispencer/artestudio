'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { Check, CreditCard, Loader2, BrandWhatsapp } from 'tabler-icons-react'
import { useSearchParams } from 'next/navigation'
import { withIVA } from '@/lib/checkout-pricing'
import { formatPrice } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'

function PagoExitoContent() {
  const params = useSearchParams()
  const paymentId = params.get('payment_id') ?? params.get('collection_id')
  const [order, setOrder] = useState<any>(null)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const stored = window.localStorage.getItem('last_order')
    if (stored) {
      try {
        setOrder(JSON.parse(stored))
      } catch (err) {
        console.error('Error al leer orden:', err)
      }
    }
  }, [])

  const handleActivateSubscription = async () => {
    if (!order || isSubscribing) return
    setIsSubscribing(true)
    setError('')

    try {
      const subscriptionItems = order.items.map((it: any) => ({
        ...it,
        setup: it.setup,
      }))

      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: subscriptionItems,
          customer: order.buyer,
          orderId: order.orderId,
          checkoutMode: 'subscription',
          paymentId,
        }),
      })

      const data = await res.json()
      if (data.init_point || data.sandbox_init_point) {
        window.location.href = data.init_point ?? data.sandbox_init_point
      } else {
        throw new Error(data.error || 'No se pudo generar el link de suscripción')
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Error al activar la suscripción mensual.')
    } finally {
      setIsSubscribing(false)
    }
  }

  if (!order) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Procesando tu pedido...</h1>
        <p>Si ya pagaste, revisa tu email o contáctanos por WhatsApp.</p>
      </div>
    )
  }

  const hasMonthly = order.items?.some((it: any) => it.monthly > 0)
  const monthlyAmount =
    order.monthlyTotal ??
    order.items?.reduce(
      (acc: number, it: any) => acc + (it.monthly ?? 0) * (it.quantity || 1),
      0
    ) ??
    0
  const setupAmount =
    order.setupTotal ??
    order.items?.reduce(
      (acc: number, it: any) => acc + (it.setup ?? 0) * (it.quantity || 1),
      0
    ) ??
    0

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
          <Check size={40} className="text-white" />
        </div>

        <h1 className="text-4xl font-bold text-ink mb-4">
          Continúa tu contratación
        </h1>
        <p className="text-xl text-muted-light mb-4">
          Implementación: {formatPrice(withIVA(setupAmount))} con IVA. Verificaremos el pago con MercadoPago antes de autorizar la mensualidad.
        </p>
        <p className="text-sm text-muted mb-10">
          Si el pago fue aprobado, puedes autorizar el servicio mensual. Si está pendiente, espera su confirmación.
        </p>

        {hasMonthly && (
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-10 text-left">
            <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
              <CreditCard className="text-primary" />
              Paso 2: Activar servicio mensual
            </h2>
            <p className="text-muted-light mb-6">
              La operación web cuesta {formatPrice(withIVA(monthlyAmount))}/mes con IVA — hosting, SSL, soporte y
              mantención técnica. El primer cobro se programa 30 días después del pago aprobado de implementación:
            </p>

            <button
              onClick={handleActivateSubscription}
              disabled={isSubscribing || !paymentId}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-lg  disabled:opacity-50"
            >
              {isSubscribing ? (
                <>
                  <Loader2 className="animate-spin" />
                  Generando link seguro...
                </>
              ) : (
                `Autorizar mensualidad — ${formatPrice(withIVA(monthlyAmount))}/mes con IVA`
              )}
            </button>

            {!paymentId && <p className="text-sm mt-4">No hay una referencia de pago verificable en este enlace. Contáctanos para coordinar la activación.</p>}
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

            <p className="text-xs text-muted mt-6 text-center leading-relaxed">
              * El primer cobro será 30 días después del pago aprobado de implementación, no hoy. Permanencia mínima de 3 meses. Puedes
              gestionar la suscripción desde tu panel de Mercado Pago.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
          >
            <BrandWhatsapp size={20} />
            Notificar por WhatsApp
          </a>
          <Link
            href="/"
            className="px-6 py-3 border border-line text-muted-light rounded-xl hover:bg-field transition-all"
          >
            Volver al Inicio
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default function PagoExitoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Cargando...</div>}>
        <PagoExitoContent />
      </Suspense>
    </main>
  )
}

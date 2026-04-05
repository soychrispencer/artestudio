'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, Suspense } from 'react'
import { Check, CreditCard, Loader2, BrandWhatsapp } from 'tabler-icons-react'
import { formatPrice } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'

function PagoExitoContent() {
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
      // Llamamos a la API pero con setup 0 para todos los items
      // Esto forzará que la API cree una suscripción (Preapproval) pura
      const subscriptionItems = order.items.map((it: any) => ({
        ...it,
        setup: 0, // Ya se pagó en el paso anterior
        // El monthly se mantiene igual
      }))

      // Calculamos la fecha de inicio para 30 días en el futuro
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 30)
      const startDate = futureDate.toISOString()

      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: subscriptionItems,
          customer: order.buyer,
          orderId: `SUB-${order.orderId || Date.now()}`,
          startDate, // Hacemos que la suscripción empiece en 30 días
        }),
      })

      const data = await res.json()
      if (data.init_point || data.sandbox_init_point) {
        // Redirigir al flujo de suscripción
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
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Pago Inicial Confirmado! 🏁
        </h1>
        <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-10">
          Hemos recibido el pago de tu Setup y el primer mes de servicio.
        </p>

        {hasMonthly && (
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-10 text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CreditCard className="text-primary" />
              Paso Final: Activar Mensualidad Automática
            </h2>
            <p className="text-gray-700 dark:text-dark-text-secondary mb-6">
              Para asegurar la continuidad de tu servicio y automatizar los cobros de los meses siguientes ({formatPrice(order.items.reduce((acc: number, it: any) => acc + (it.monthly * (it.quantity || 1)), 0))} /mes), debes activar tu suscripción ahora:
            </p>

            <button
              onClick={handleActivateSubscription}
              disabled={isSubscribing}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-primary/20 disabled:opacity-50"
            >
              {isSubscribing ? (
                <>
                  <Loader2 className="animate-spin" />
                  Generando link seguro...
                </>
              ) : (
                'Activar Cobro Automático Mensual'
              )}
            </button>
            
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
            
            <p className="text-xs text-gray-500 dark:text-dark-text-secondary mt-6 text-center leading-relaxed">
              * El primer cargo automático se realizará en 30 días. Puedes cancelar cuando quieras desde tu panel de Mercado Pago.
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
          <a
            href="/"
            className="px-6 py-3 border border-gray-200 dark:border-dark-bg-tertiary text-gray-700 dark:text-dark-text-secondary rounded-xl hover:bg-gray-50 dark:hover:bg-dark-bg-secondary transition-all"
          >
            Volver al Inicio
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function PagoExitoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Cargando...</div>}>
        <PagoExitoContent />
      </Suspense>
    </main>
  )
}

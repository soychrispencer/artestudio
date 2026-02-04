'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'tabler-icons-react'
import { formatPrice } from '@/lib/utils'

interface Service {
  id: number
  icon: any
  title: string
  description: string
  price: string
  oldPrice?: string
  ctaText: string
  badge?: string
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  const handleMercadoPagoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Aquí se puede configurar el link de MercadoPago
    // Por ahora, redirigimos a WhatsApp para coordinar el pago
    ;(async () => {
      try {
        const res = await fetch('/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: service.title, price: service.price, quantity: 1 }),
        })
        const data = await res.json()
        if (data.init_point || data.sandbox_init_point) {
          window.location.href = data.init_point ?? data.sandbox_init_point
          return
        }
      } catch (err) {
        console.error(err)
      }

      const message = encodeURIComponent(
        `Hola, me interesa el servicio: ${service.title}. Valor: ${formatPrice(service.price as any)}`
      )
      window.open(`https://wa.me/56938744230?text=${message}`, '_blank')
    })()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className="glass dark:glass-dark p-6 rounded-xl h-full flex flex-col transition-smooth border border-gray-200 dark:border-white/10 hover-glow">
        {/* Badge */}
        {service.badge && (
          <div className="absolute -top-3 -right-3 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
            {service.badge}
          </div>
        )}

        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-dark-bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/10 dark:group-hover:bg-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-6 flex-grow">
          {service.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">{formatPrice(service.price)}</span>
            {service.oldPrice && (
              <span className="text-sm text-gray-500 dark:text-dark-text-secondary line-through">
                {formatPrice(service.oldPrice as any)}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1">
            precio en pesos chilenos
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleMercadoPagoClick}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:shadow-lg transition-smooth group/btn"
        >
          <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          {service.ctaText}
        </button>

        {/* Decorative Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  )
}

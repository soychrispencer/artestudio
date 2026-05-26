'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import { COMPLEMENT_SERVICES } from '@/lib/entry-offers'
import { trackEvent } from '@/lib/analytics'

export function ComplementServicesSection() {
  return (
    <section id="complementos" className="py-20 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary text-sm mb-4 uppercase tracking-wide border border-gray-200 dark:border-dark-bg-tertiary">
            Después de tu web
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Servicios complementarios
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-xl mx-auto">
            Cuando tu sitio esté listo, podemos ayudarte con contenido, marca y presencia en redes.
          </p>
        </motion.div>

        <div className="text-center mb-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver catálogo completo de servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPLEMENT_SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={svc.href}
                onClick={() => trackEvent('complement_service_click', { service: svc.title })}
                className="group block h-full rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50 dark:bg-dark-bg-secondary p-5 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="text-2xl block mb-3">{svc.emoji}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-3">{svc.desc}</p>
                <p className="text-sm font-bold text-primary mb-3">{svc.from}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-dark-text-secondary group-hover:text-primary">
                  Ver servicio
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComplementServicesSection

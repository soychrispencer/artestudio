'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Stars } from 'tabler-icons-react'
import { trackEvent } from '@/lib/analytics'

export function HomePlansTeaser() {
  return (
    <section id="planes" className="py-16 bg-gray-50 dark:bg-dark-bg-secondary border-y border-gray-100 dark:border-dark-bg-tertiary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Stars className="w-3.5 h-3.5" />
            Más opciones
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            ¿Necesitas comparar niveles por servicio?
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
            Web, branding, redes, diseño, video y packs completos — cada uno con planes Starter, Growth y Scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/precios"
              onClick={() => trackEvent('home_teaser_precios')}
              className="btn-whatsapp px-6 py-3"
            >
              Ver todos los precios
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/servicios"
              onClick={() => trackEvent('home_teaser_servicios')}
              className="btn-outline px-6 py-3"
            >
              Explorar servicios
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

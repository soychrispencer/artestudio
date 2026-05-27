'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'tabler-icons-react'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_INFO } from '@/lib/constants'
import { LANDING_EXPRESS_WHATSAPP, WEB_PRO_WHATSAPP } from '@/lib/entry-offers'
import { SECTION_IDS } from '@/lib/navigation'

export function HeroSection() {
  const whatsappExpress = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(LANDING_EXPRESS_WHATSAPP)}`
  const whatsappWeb = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WEB_PRO_WHATSAPP)}`

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id={SECTION_IDS.inicio}
      className="scroll-mt-20 relative min-h-[calc(100vh-4rem)] flex items-center bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-dark-bg-tertiary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-dark-text-secondary mb-4">
            Web y presencia digital · Chile
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-gray-900 dark:text-white mb-5">
            Tu web lista para{' '}
            <span className="text-gradient-primary">conseguir clientes</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-8 max-w-xl">
            Una sola página para elegir oferta, comparar precios y contactarnos. Sin saltar entre menús.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                trackEvent('hero_cta_click', { target: 'ofertas' })
                scrollTo(SECTION_IDS.ofertas)
              }}
              className="btn-whatsapp px-6 py-3.5 text-base justify-center"
            >
              Ver ofertas
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                trackEvent('hero_cta_click', { target: 'precios' })
                scrollTo(SECTION_IDS.precios)
              }}
              className="btn-outline px-6 py-3.5 text-base justify-center"
            >
              Comparar precios
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            <a
              href={whatsappExpress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
              onClick={() => trackEvent('hero_whatsapp')}
            >
              WhatsApp directo
            </a>
            {' · '}
            <a
              href={whatsappWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Web a medida
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

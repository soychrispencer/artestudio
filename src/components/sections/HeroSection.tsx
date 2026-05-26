'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp, ArrowRight, Bolt } from 'tabler-icons-react'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_INFO } from '@/lib/constants'
import { LANDING_EXPRESS_WHATSAPP, WEB_PRO_WHATSAPP } from '@/lib/entry-offers'

const TRUST_BADGES = [
  'Setup + mensual claros',
  'Ideal para emprendedores y negocios locales',
  'Respuesta rápida por WhatsApp',
]

export function HeroSection() {
  const whatsappExpress = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(LANDING_EXPRESS_WHATSAPP)}`
  const whatsappWeb = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(WEB_PRO_WHATSAPP)}`

  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-dark-bg min-h-[88vh] flex items-center">
      <div className="absolute inset-0 ai-grid opacity-50 dark:opacity-20" />
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-dark-bg-secondary/80 text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-dark-text-secondary mb-6">
            <Bolt className="w-4 h-4 text-primary" />
            Web y presencia digital · Chile
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-gray-900 dark:text-white mb-6">
            Tu web lista para{' '}
            <span className="text-gradient-primary">conseguir clientes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Landing pages y sitios web con IA para emprendedores, profesionales y negocios que quieren vender más online.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-gray-600 dark:text-dark-text-secondary">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-bg-secondary border border-gray-200/80 dark:border-white/10">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/landing-express"
              onClick={() => trackEvent('hero_cta_click', { target: 'landing_express' })}
              className="btn-whatsapp px-8 py-4 text-base"
            >
              <span>Quiero una landing express</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href={whatsappWeb}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('hero_cta_click', { target: 'web_completa' })}
              className="btn-outline px-8 py-4 text-base"
            >
              <BrandWhatsapp className="w-5 h-5" />
              <span>Necesito una web más completa</span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-dark-text-secondary">
            ¿Prefieres ir directo?{' '}
            <Link
              href={whatsappExpress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
              onClick={() => trackEvent('hero_whatsapp_inline')}
            >
              Escríbenos por WhatsApp
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

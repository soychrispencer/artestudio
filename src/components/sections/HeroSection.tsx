'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp, ArrowRight, Star, CircleCheck } from 'tabler-icons-react'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_INFO } from '@/lib/constants'

const TRUST_BADGES = [
  'Soporte mensual incluido',
  'Sin contrato mínimo',
  'Precio claro y directo',
]

const SERVICES_GRID = [
  {
    emoji: '🌐',
    title: 'Web & Tienda',
    desc: 'Landing, sitio corporativo o eCommerce',
    from: 'Desde $14.990/mes',
  },
  {
    emoji: '🎨',
    title: 'Marca & Logo',
    desc: 'Identidad visual profesional',
    from: 'Desde $149.990',
  },
  {
    emoji: '📱',
    title: 'Redes Sociales',
    desc: 'Gestión, contenido y comunidad',
    from: 'Desde $89.990/mes',
  },
  {
    emoji: '🎬',
    title: 'Video & Audio',
    desc: 'Reels, podcast, mastering',
    from: 'Desde $35.000',
  },
  {
    emoji: '📄',
    title: 'Diseño Gráfico',
    desc: 'Flyers, presentaciones, papelería',
    from: 'Desde $55.000',
  },
  {
    emoji: '⭐',
    title: 'Pack Completo',
    desc: 'Marca + Web + Redes',
    from: 'Desde $49.990/mes',
  },
]

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Artestudio, quiero saber más sobre sus servicios.')}`

  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-dark-bg min-h-[92vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 ai-grid opacity-50 dark:opacity-20" />
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-[-80px] right-10 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">

        {/* ── TOP: Message ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-dark-bg-secondary/80 text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-dark-text-secondary mb-6">
            <Star className="w-4 h-4 text-primary fill-primary/30" />
            Estudio Creativo y Tecnológico · Chile
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 dark:text-white mb-6">
            Todo lo que tu negocio necesita{' '}
            <span className="text-gradient-primary">para crecer en digital</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Marca, web, redes sociales, video y diseño — con un equipo que te acompaña mes a mes. Sin complicaciones.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-dark-text-secondary"
              >
                <CircleCheck className="w-4 h-4 text-primary" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#planes"
              onClick={() => trackEvent('hero_cta_click', { target: 'planes' })}
              className="btn-whatsapp px-8 py-4 text-base"
            >
              <span>Ver servicios y precios</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('hero_cta_click', { target: 'whatsapp' })}
              className="btn-outline px-8 py-4 text-base"
            >
              <BrandWhatsapp className="w-5 h-5" />
              <span>Hablar por WhatsApp</span>
            </Link>
          </div>
        </motion.div>

        {/* ── BOTTOM: Service grid (puertas de entrada) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {SERVICES_GRID.map((svc) => (
            <Link
              key={svc.title}
              href="#planes"
              onClick={() => trackEvent('hero_service_card_click', { service: svc.title })}
              className="group rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-dark-bg-secondary/60 p-4 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="text-2xl md:text-3xl block mb-2">{svc.emoji}</span>
              <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                {svc.title}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-dark-text-secondary mb-2 leading-tight">
                {svc.desc}
              </p>
              <p className="text-[11px] font-bold text-primary">{svc.from}</p>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection

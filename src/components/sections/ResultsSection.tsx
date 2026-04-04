'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp, ArrowRight, TrendingUp, Shield, Headset, Calendar } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'
import { trackEvent } from '@/lib/analytics'

const METRICS = [
  {
    icon: TrendingUp,
    label: 'Clientes con presencia activa',
    value: '20+',
    note: 'Negocios que ya trabajan con nosotros',
  },
  {
    icon: Calendar,
    label: 'Años en el mercado',
    value: '6+',
    note: 'Desde 2019 construyendo marcas digitales',
  },
  {
    icon: Shield,
    label: 'Soporte incluido en todos los planes',
    value: '100%',
    note: 'No pagas extra por soporte técnico',
  },
  {
    icon: Headset,
    label: 'Tiempo de respuesta',
    value: '≤48h',
    note: 'SLA garantizado en planes Pro y Pro+',
  },
]

export function ResultsSection() {
  const whatsapp = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola Artestudio, quiero una propuesta para mi negocio.')}`

  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-dark-bg">
      <div className="absolute inset-0 ai-grid opacity-20 dark:opacity-10" />
      <div className="absolute -top-20 left-14 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-14 h-72 w-72 rounded-full bg-primary/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
            <Shield className="w-4 h-4" />
            Por qué Artestudio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            No solo te hacemos la web.
            <span className="text-gradient-primary"> Te acompañamos.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            La diferencia está en el después: soporte, actualizaciones y mejoras continuas con un solo pago mensual fijo.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {METRICS.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary mb-2">
                  {m.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{m.value}</p>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">{m.note}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
              Siguiente paso
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Elige tu plan y arrancamos esta semana
            </h3>
            <p className="text-gray-500 dark:text-dark-text-secondary text-sm mt-1">
              Sin reuniones largas. Sin propuestas interminables. Un plan, un precio, un equipo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="#planes"
              onClick={() => trackEvent('results_cta_click', { target: 'planes' })}
              className="btn-whatsapp px-6 py-3"
            >
              <ArrowRight className="w-5 h-5" />
              Ver planes
            </Link>
            <Link
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('results_cta_click', { target: 'whatsapp' })}
              className="btn-outline px-6 py-3"
            >
              <BrandWhatsapp className="w-5 h-5" />
              WhatsApp directo
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

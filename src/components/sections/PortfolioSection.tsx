'use client'

import { motion } from 'framer-motion'
import { BrandBehance, CircleCheck } from 'tabler-icons-react'
import { SOCIAL_LINKS } from '@/lib/constants'
import { PageSection } from '@/components/ui/PageSection'
import { SECTION_IDS } from '@/lib/navigation'
import { trackEvent } from '@/lib/analytics'

const STEPS = [
  {
    title: 'Briefing',
    text: 'Objetivos, tono y referencias desde el día uno.',
  },
  {
    title: 'Diseño y revisiones',
    text: 'Rondas claras, sin reuniones eternas.',
  },
  {
    title: 'Entrega',
    text: 'Archivos listos para usar y publicar.',
  },
  {
    title: 'Soporte',
    text: 'Continuidad técnica en planes con mensualidad.',
  },
]

export function PortfolioSection() {
  const scrollToContact = () => {
    document.getElementById(SECTION_IDS.contacto)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageSection
      id={SECTION_IDS.nosotros}
      eyebrow="Paso 4"
      title="Cómo trabajamos"
      description="Proceso directo. Sabes qué esperar en cada etapa."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl border border-gray-200/80 dark:border-dark-bg-tertiary p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary">{step.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={SOCIAL_LINKS.behance}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('trust_cta_click', { target: 'behance' })}
          className="btn-outline px-5 py-3 text-sm justify-center"
        >
          <BrandBehance className="w-5 h-5" />
          Ver Behance
        </a>
        <button
          type="button"
          onClick={() => {
            trackEvent('trust_cta_click', { target: 'contacto' })
            scrollToContact()
          }}
          className="btn-whatsapp px-5 py-3 text-sm justify-center"
        >
          <CircleCheck className="w-5 h-5" />
          Pedir propuesta
        </button>
      </div>
    </PageSection>
  )
}

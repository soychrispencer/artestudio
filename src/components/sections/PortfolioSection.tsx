'use client'

import { motion } from 'framer-motion'
import { BrandBehance, CircleCheck } from 'tabler-icons-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export function PortfolioSection() {
  const principles = [
    {
      id: 1,
      title: 'Briefing con dirección',
      text: 'Definimos objetivos, tono y referencias para avanzar con claridad desde el día uno.',
    },
    {
      id: 2,
      title: 'Iteraciones enfocadas',
      text: 'Rondas de revisión definidas para cuidar la calidad sin perder velocidad.',
    },
    {
      id: 3,
      title: 'Entrega usable',
      text: 'Archivos editables, guías y formatos listos para que puedas operar sin fricción.',
    },
    {
      id: 4,
      title: 'Estrategia aplicada',
      text: 'Cada pieza responde a una meta concreta: posicionamiento, conversión o comunidad.',
    },
  ]

  return (
    <section id="confianza" className="py-28 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary font-medium text-xs mb-4 uppercase tracking-[0.2em] border border-gray-200 dark:border-dark-bg-tertiary">
            Confianza creativa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Confianza y proceso
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Un método claro, entregables profesionales y comunicación directa para que sepas qué esperar.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <a
            href={SOCIAL_LINKS.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3"
          >
            <BrandBehance className="w-5 h-5" />
            Ver trabajos en Behance
          </a>
        </div>

        {/* Principles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border border-gray-200/80 dark:border-dark-bg-tertiary shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <CircleCheck className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed">
                {principle.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

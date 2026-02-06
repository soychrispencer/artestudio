'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30 dark:opacity-20" />
      <div className="absolute -top-20 right-10 h-60 w-60 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-[-120px] left-10 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary font-medium text-xs mb-4 uppercase tracking-[0.2em] border border-gray-200 dark:border-dark-bg-tertiary">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Hablemos de tu próximo salto creativo
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Respuestas rápidas y estrategia clara desde el primer mensaje. Creatividad y tecnología para resultados reales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Hola%20artestudio%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 group"
            >
              <BrandWhatsapp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Escribir por WhatsApp</span>
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-600 dark:text-dark-text-secondary">
            o escríbenos a{' '}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

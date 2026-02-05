'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-dark-bg relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary font-medium text-sm mb-4 uppercase tracking-wide border border-gray-200 dark:border-dark-bg-tertiary">Contacto</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hagamos realidad tu proyecto
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y comencemos a trabajar juntos. Estamos disponibles a través de WhatsApp, email o nuestras redes sociales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Hola%20artestudio%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:shadow-lg transition-all duration-300 group"
            >
              <BrandWhatsapp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Escribir por WhatsApp</span>
            </Link>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary transition-all duration-300 border border-gray-200 dark:border-dark-bg-tertiary"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

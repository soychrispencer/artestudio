'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp, BrandInstagram, BrandTiktok, BrandFacebook } from 'tabler-icons-react'

export function ContactSection() {
  const socialLinks = [
    {
      icon: BrandWhatsapp,
      href: 'https://wa.me/56938744230?text=Hola%20artestudio%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios',
      label: 'WhatsApp',
      color: 'hover:text-green-500',
    },
    {
      icon: BrandInstagram,
      href: 'https://instagram.com/artestudio.cl',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: BrandTiktok,
      href: 'https://tiktok.com/@artestudio.cl',
      label: 'TikTok',
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      icon: BrandFacebook,
      href: 'https://facebook.com/artestudio.cl',
      label: 'Facebook',
      color: 'hover:text-blue-500',
    },
  ]

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="https://wa.me/56938744230?text=Hola%20artestudio%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:shadow-lg transition-all duration-300 group"
            >
              <BrandWhatsapp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Escribir por WhatsApp</span>
            </Link>
            <a
              href="mailto:hola@artestudio.cl"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary transition-all duration-300 border border-gray-200 dark:border-dark-bg-tertiary"
            >
              hola@artestudio.cl
            </a>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-8 uppercase tracking-wide font-medium">
              O síguenos en nuestras redes
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-dark-bg-secondary flex items-center justify-center text-gray-700 dark:text-dark-text-secondary transition-smooth ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 glass dark:glass-dark rounded-xl border border-gray-200 dark:border-white/10">
            <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">
              ¿Tienes dudas?
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">
              +56 9 3874 4230 • info@artestudio.cl
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

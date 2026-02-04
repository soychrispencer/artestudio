'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { BrandWhatsapp } from 'tabler-icons-react'
import { FORM_LIMITS } from '@/lib/constants'

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    setFormError('')
    setFormState('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()

      if (!res.ok) {
        setFormError(data.error || 'Error al enviar')
        setFormState('error')
        return
      }
      setFormState('success')
      form.reset()
    } catch {
      setFormError('Error de conexión. Intenta de nuevo.')
      setFormState('error')
    }
  }

  const socialLinks = [
    {
      icon: BrandWhatsapp,
      href: 'https://wa.me/56938744230?text=Hola%20artestudio%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios',
      label: 'WhatsApp',
      color: 'hover:text-green-500',
    },
    {
      icon: BrandWhatsapp,
      href: 'https://instagram.com/artestudio.cl',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: BrandWhatsapp,
      href: 'https://tiktok.com/@artestudio.cl',
      label: 'TikTok',
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      icon: BrandWhatsapp,
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 p-6 glass dark:glass-dark rounded-xl border border-gray-200 dark:border-white/10 space-y-4 text-left max-w-lg mx-auto"
          >
            <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-4">
              Envíanos un mensaje
            </h3>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                Nombre
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={FORM_LIMITS.maxNameLength}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tu nombre"
                disabled={formState === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={FORM_LIMITS.maxEmailLength}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="tu@email.com"
                disabled={formState === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                maxLength={FORM_LIMITS.maxMessageLength}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                placeholder="¿En qué podemos ayudarte?"
                disabled={formState === 'loading'}
              />
            </div>
            {formState === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                Mensaje enviado. Te contactaremos pronto.
              </p>
            )}
            {formState === 'error' && formError && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {formError}
              </p>
            )}
            <button
              type="submit"
              disabled={formState === 'loading'}
              className="w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-60 transition-smooth"
            >
              {formState === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 p-6 glass dark:glass-dark rounded-xl border border-gray-200 dark:border-white/10 max-w-lg mx-auto">
            <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">
              ¿Tienes dudas?
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">
              +56 9 3874 4230 • hola@artestudio.cl
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

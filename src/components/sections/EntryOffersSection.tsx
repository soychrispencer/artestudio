'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, BrandWhatsapp, ArrowRight } from 'tabler-icons-react'
import {
  ENTRY_OFFERS,
  MONTHLY_MODEL_DISCLAIMER,
} from '@/lib/entry-offers'
import { CONTACT_INFO } from '@/lib/constants'
import { trackEvent } from '@/lib/analytics'

function openWhatsApp(message: string) {
  const phone = CONTACT_INFO.whatsapp.replace(/\D/g, '')
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
}

export function EntryOffersSection() {
  return (
    <section id="ofertas" className="relative py-24 md:py-28 bg-gray-50 dark:bg-dark-bg-secondary overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-10 dark:opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-dark-text-secondary font-medium text-sm mb-4 uppercase tracking-wide border border-gray-200 dark:border-dark-bg-tertiary">
            Elige tu punto de partida
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tres formas de empezar
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Una oferta clara para cada etapa. Sin mezclar landing express con web corporativa o ecommerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ENTRY_OFFERS.map((offer, idx) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`flex flex-col rounded-3xl border p-6 md:p-8 bg-white dark:bg-dark-bg ${
                offer.featured
                  ? 'border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20 lg:scale-[1.02]'
                  : 'border-gray-200 dark:border-dark-bg-tertiary'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-3xl">{offer.emoji}</span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${
                    offer.featured
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary'
                  }`}
                >
                  {offer.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{offer.title}</h3>
              <p className="text-lg font-semibold text-primary mb-1">{offer.priceLine}</p>
              {'priceNote' in offer && offer.priceNote && (
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-4">{offer.priceNote}</p>
              )}

              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-dark-text-secondary mt-4 mb-2">
                Ideal para
              </p>
              <ul className="space-y-1.5 mb-5 text-sm text-gray-600 dark:text-dark-text-secondary">
                {offer.idealFor.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>

              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-dark-text-secondary mb-2">
                Incluye
              </p>
              <ul className="space-y-2 mb-4 flex-grow">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-dark-text-secondary">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {offer.excludes.length > 0 && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-dark-text-secondary mb-2">
                    No incluye
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {offer.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-500 dark:text-dark-text-secondary">
                        <X className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-dark-bg-tertiary">
                <Link
                  href={offer.href}
                  onClick={() => trackEvent('entry_offer_cta', { offer: offer.id, type: 'page' })}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    offer.featured
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90'
                  }`}
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('entry_offer_cta', { offer: offer.id, type: 'whatsapp' })
                    openWhatsApp(offer.whatsappMessage)
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-dark-text-secondary hover:text-primary transition-colors"
                >
                  <BrandWhatsapp className="w-4 h-4" />
                  Cotizar por WhatsApp
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8"
        >
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Cómo funciona el plan mensual
          </p>
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            {MONTHLY_MODEL_DISCLAIMER}
          </p>
          <p className="text-xs text-gray-400 dark:text-dark-text-secondary mt-3">
            Puedes cancelar la mensualidad con 30 días de aviso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EntryOffersSection

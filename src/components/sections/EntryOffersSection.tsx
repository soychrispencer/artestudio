'use client'

import { motion } from 'framer-motion'
import { Check, BrandWhatsapp } from 'tabler-icons-react'
import { ENTRY_OFFERS, MONTHLY_MODEL_DISCLAIMER } from '@/lib/entry-offers'
import { CONTACT_INFO } from '@/lib/constants'
import { PageSection } from '@/components/ui/PageSection'
import { SECTION_IDS } from '@/lib/navigation'
import { trackEvent } from '@/lib/analytics'

function openWhatsApp(message: string) {
  const phone = CONTACT_INFO.whatsapp.replace(/\D/g, '')
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
}

export function EntryOffersSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageSection
      id={SECTION_IDS.ofertas}
      eyebrow="Paso 1"
      title="Elige cómo quieres empezar"
      description="Tres caminos claros. La Landing Express es la más rápida; web completa y ecommerce tienen más alcance."
      muted
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
        {ENTRY_OFFERS.map((offer, idx) => (
          <motion.article
            key={offer.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className={`flex flex-col rounded-2xl border p-6 ${
              offer.featured
                ? 'border-primary bg-white dark:bg-dark-bg shadow-lg shadow-primary/5'
                : 'border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg'
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{offer.badge}</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{offer.title}</h3>
            <p className="text-lg font-semibold text-primary mb-4">{offer.priceLine}</p>
            {'priceNote' in offer && offer.priceNote && (
              <p className="text-xs text-gray-500 mb-4 -mt-2">{offer.priceNote}</p>
            )}

            <ul className="space-y-2 mb-6 flex-grow text-sm text-gray-600 dark:text-dark-text-secondary">
              {offer.includes.slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 mt-auto">
              <button
                type="button"
                onClick={() => {
                  trackEvent('entry_offer_cta', { offer: offer.id })
                  if (offer.id === 'landing-express') {
                    openWhatsApp(offer.whatsappMessage)
                  } else {
                    scrollTo(SECTION_IDS.precios)
                  }
                }}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
                  offer.featured
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90'
                }`}
              >
                {offer.cta}
              </button>
              <button
                type="button"
                onClick={() => {
                  trackEvent('entry_offer_whatsapp', { offer: offer.id })
                  openWhatsApp(offer.whatsappMessage)
                }}
                className="inline-flex items-center justify-center gap-2 py-2 text-sm text-gray-500 hover:text-primary"
              >
                <BrandWhatsapp className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-5 text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed">
        <p className="font-medium text-gray-900 dark:text-white mb-2">Plan mensual</p>
        {MONTHLY_MODEL_DISCLAIMER}
      </div>
    </PageSection>
  )
}

export default EntryOffersSection

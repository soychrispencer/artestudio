'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, BrandWhatsapp, ArrowRight, Stars } from 'tabler-icons-react'
import {
  SERVICE_VERTICALS,
  type ServiceVertical,
  type PricingPlan,
} from '@/lib/pricing'
import { formatPrice } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_INFO } from '@/lib/constants'
import { useCart as useCartFromProvider } from '@/components/cart/CartProvider'

// ── Helpers ──────────────────────────────────

function openWhatsApp(message: string) {
  const phone = CONTACT_INFO.whatsapp.replace(/\D/g, '')
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
}

// ── Plan Card ────────────────────────────────

function PlanCard({ plan, vertical, activeConfig }: { plan: PricingPlan; vertical: ServiceVertical; activeConfig: any }) {
  const { addItem, openCart } = useCartFromProvider()
  const [expanded, setExpanded] = useState(false)
  const hasMonthly = plan.monthly > 0

  const handleCta = () => {
    trackEvent('pricing_cta_click', {
      tier: plan.tier,
      vertical,
      setup: plan.setup,
      monthly: plan.monthly,
    })
    openWhatsApp(plan.whatsappMessage)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative flex flex-col rounded-3xl border overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${
        plan.recommended
          ? 'border-primary shadow-primary/20 shadow-xl bg-white dark:bg-dark-bg ring-2 ring-primary/30'
          : 'border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-5 right-5 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-widest z-10">
          {plan.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-grow">
        {/* Tier */}
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
          Plan {plan.name}
        </p>

        {/* Short desc */}
        <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-6 min-h-[40px]">
          {plan.shortDesc}
        </p>

        {/* Price block */}
        <div className="mb-6 space-y-1">
          {plan.originalSetup && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold line-through text-gray-400 dark:text-gray-600">
                {formatPrice(plan.originalSetup)}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
                50% OFF
              </span>
            </div>
          )}
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatPrice(plan.setup)}
            </span>
            <span className="text-sm text-gray-500 dark:text-dark-text-secondary mb-1">
              {hasMonthly ? 'pago inicial' : 'pago único'}
            </span>
          </div>
          {hasMonthly && (
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-primary">
                + {formatPrice(plan.monthly)}
              </span>
              <span className="text-sm text-gray-500 dark:text-dark-text-secondary">/mes</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-dark-bg-tertiary mb-5" />

        {/* Highlights */}
        <ul className="space-y-3 mb-5 flex-grow">
          {plan.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </span>
              <span className="text-sm text-gray-700 dark:text-dark-text-secondary">{h}</span>
            </li>
          ))}
        </ul>

        {/* Expand */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-primary font-semibold mb-5 text-left hover:underline"
        >
          {expanded ? '− Ver menos' : '+ Ver todo lo que incluye'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mb-5 overflow-hidden"
            >
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA Group */}
        <div className="flex flex-col gap-2 mt-auto">
          <button
            onClick={() => {
              addItem({
                id: `${vertical}-${plan.tier}`,
                title: `${vertical === 'pack' ? 'Pack' : ''} ${plan.name} (${activeConfig.label})`,
                setup: plan.setup,
                monthly: plan.monthly,
                quantity: 1,
              })
              openCart()
              trackEvent('pricing_cart_add', { tier: plan.tier, vertical })
            }}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              plan.recommended
                ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]'
                : 'border border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10'
            }`}
          >
            <span>Contratar en línea</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCta}
            className="w-full py-2.5 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 text-gray-500 hover:text-primary transition-colors"
          >
            <BrandWhatsapp className="w-4 h-4" />
            Hablar con experto
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────

export function PricingSection() {
  const [activeVertical, setActiveVertical] = useState<ServiceVertical>('pack')

  const activeConfig = SERVICE_VERTICALS.find((v) => v.id === activeVertical)!

  return (
    <section id="planes" className="relative py-24 md:py-32 bg-gray-50 dark:bg-dark-bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 ai-grid opacity-10 dark:opacity-5" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/30 bg-primary/10 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
            <Stars className="w-4 h-4" />
            Servicios y Planes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
            ¿Qué necesitas{' '}
            <span className="text-gradient-primary">para crecer?</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Elige tu servicio, compara 3 opciones claras y avanza con un equipo que te acompaña.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {SERVICE_VERTICALS.map((v) => {
            const isActive = v.id === activeVertical
            const isPack = v.id === 'pack'
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setActiveVertical(v.id)
                  trackEvent('pricing_tab_click', { tab: v.id })
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                    : isPack
                    ? 'bg-white dark:bg-dark-bg border-primary/30 text-primary hover:bg-primary/5'
                    : 'bg-white dark:bg-dark-bg border-gray-200 dark:border-dark-bg-tertiary text-gray-700 dark:text-dark-text-secondary hover:border-primary/40 hover:text-primary'
                }`}
              >
                <span className="text-base">{v.emoji}</span>
                <span className="hidden sm:inline">{v.label}</span>
                <span className="sm:hidden text-xs">{v.label.split(' ')[0]}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Active vertical info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical + '-info'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-10"
          >
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
              {activeConfig.description}
            </p>
            <span className="inline-block mt-2 text-[11px] uppercase tracking-[0.2em] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {activeConfig.billingLabel}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeConfig.plans.map((plan) => (
              <PlanCard key={plan.tier} plan={plan} vertical={activeVertical} activeConfig={activeConfig} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Platform badges for Web */}
        {activeVertical === 'web' && activeConfig.variants && (
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-xs text-gray-400 dark:text-dark-text-secondary mr-2 self-center">
              Plataformas:
            </span>
            {activeConfig.variants.map((v) => (
              <span
                key={v.id}
                className="inline-flex items-center rounded-full border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-1 text-xs font-medium text-gray-600 dark:text-dark-text-secondary"
              >
                {v.label}
              </span>
            ))}
          </motion.div>
        )}

        {/* Trust line */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-400 dark:text-dark-text-secondary">
            💳 Precios en CLP · Sin letra chica · Puedes cancelar la mensualidad con 30 días de aviso
          </p>
        </motion.div>

        {/* Pack Highlight Banner (when not on pack tab) */}
        {activeVertical !== 'pack' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl border border-primary/30 bg-primary/5 dark:bg-primary/10 p-6 md:p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">
              ⭐ ¿Necesitas más de un servicio?
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Pack &quot;Presencia Digital&quot;: Marca + Web + Redes con ahorro real
            </h3>
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-4 max-w-xl mx-auto">
              Combinamos branding, web y redes sociales en un solo paquete con descuento. El camino más rápido para arrancar o renovar tu negocio.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveVertical('pack')
                trackEvent('pricing_pack_highlight_click')
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
            >
              <Stars className="w-4 h-4" />
              Ver Packs Completos
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PricingSection

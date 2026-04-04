'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Check, BrandWhatsapp, ShoppingCart } from 'tabler-icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { getRelatedServices, ServiceDetail } from '@/lib/services'
import { formatPrice } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'
import { useCart } from '@/components/cart/CartProvider'
import { siShopify, siWoocommerce, siWordpress } from 'simple-icons/icons'
import { trackEvent } from '@/lib/analytics'

function openWhatsApp(message: string) {
  const phoneNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

interface ServicePageProps {
  service: ServiceDetail
}

const BILLING_MODEL_LABEL: Record<ServiceDetail['billingModel'], string> = {
  unitario: 'Servicio unitario',
  mensual: 'Servicio mensual',
  proyecto: 'Proyecto cerrado',
  desde: 'Proyecto desde',
}

function PlanCard({ plan, service }: { plan: any; service: ServiceDetail }) {
  const { addItem, openCart } = useCart()
  const isRecommended = plan.recommended === true
  const discountPercent = plan.oldPrice
    ? Math.round((1 - plan.price / plan.oldPrice) * 100)
    : 0
  const showPromo = discountPercent >= 50
  const summaryCount = plan.features.length > 3 ? 3 : plan.features.length
  const summaryItems = Array.isArray(plan.summary) && plan.summary.length > 0
    ? plan.summary
    : plan.features.slice(0, summaryCount)
  const detailItems = plan.features.slice(summaryItems.length)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col h-full rounded-2xl border overflow-hidden hover:shadow-xl transition-shadow ${
        isRecommended
          ? 'border-primary bg-primary/5 dark:bg-primary/10 ring-2 ring-primary/20'
          : 'border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Recomendado
        </div>
      )}
      {showPromo && (
        <div className="absolute top-4 left-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/30">
          Promo 50%
        </div>
      )}

      <div className="relative flex flex-col h-full p-8">
        {/* Plan Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary mb-2">
              Plan
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            {plan.oldPrice && (
              <div className="mt-3 text-sm text-gray-500 dark:text-dark-text-secondary">
                <span className="line-through">{formatPrice(plan.oldPrice)}</span>
                <span className="ml-2 text-primary font-semibold">
                  Ahorra {formatPrice(plan.oldPrice - plan.price)}
                </span>
              </div>
            )}
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50 dark:bg-dark-bg-secondary px-4 py-3 text-right min-w-[140px]">
            <div className="text-2xl font-bold text-primary">{formatPrice(plan.price)}</div>
            <div className="text-xs text-gray-500 dark:text-dark-text-secondary">
              CLP
              {plan.billing === 'mensual' && (
                <span className="ml-1">
                  <span className="hidden sm:inline">/mensual</span>
                  <span className="sm:hidden">/mes</span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50/80 dark:bg-dark-bg-secondary/80 p-5 mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
            Resumen
          </p>
          <div className="mt-3 space-y-2">
            {summaryItems.map((feature: string, featureIdx: number) => (
              <div key={featureIdx} className="flex items-start gap-3">
                <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-dark-text-secondary">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        {detailItems.length > 0 && (
          <div className="flex-grow mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary mb-4">
              Incluye
            </p>
            <div className="space-y-3">
              {detailItems.map((feature: string, featureIdx: number) => (
                <div key={featureIdx} className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-dark-text-secondary">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={() => {
            trackEvent('service_plan_add_to_cart', {
              service_slug: service.slug,
              plan: plan.name,
              value: plan.price,
              billing: plan.billing ?? 'one_time',
            })
            addItem({
              id: `${service.id}-${plan.name}`,
              title: `${service.title} - ${plan.name}`,
              price: plan.price,
              quantity: 1,
              billing: plan.billing,
            })
            openCart()
          }}
          className="w-full py-3 px-6 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all bg-primary text-white hover:bg-primary-dark inline-flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Contratar plan
        </button>
      </div>
    </motion.div>
  )
}

function AddonCard({ addon }: { addon: any }) {
  const { addItem, openCart } = useCart()
  const discountPercent = addon.oldPrice
    ? Math.round((1 - addon.price / addon.oldPrice) * 100)
    : 0
  const badgeLabel = discountPercent >= 50 ? 'Promo 50%' : addon.badge
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 flex flex-col gap-4">
      <div>
        {badgeLabel && (
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            {badgeLabel}
          </span>
        )}
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
          {addon.name}
        </h4>
        {addon.description && (
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-2">
            {addon.description}
          </p>
        )}
      </div>
      <div className="flex items-end gap-2 flex-wrap">
        <span className="text-2xl font-bold text-primary">{formatPrice(addon.price)}</span>
        <span className="text-sm text-gray-500 dark:text-dark-text-secondary">CLP</span>
        {addon.billing === 'mensual' && (
          <span className="text-xs text-gray-500 dark:text-dark-text-secondary">/mes</span>
        )}
        {addon.oldPrice && (
          <span className="text-xs text-gray-500 line-through">
            {formatPrice(addon.oldPrice)}
          </span>
        )}
      </div>
      <button
        onClick={() => {
          trackEvent('service_addon_add_to_cart', {
            addon: addon.name,
            value: addon.price,
            billing: addon.billing ?? 'one_time',
          })
          addItem({
            id: `addon-${addon.name}`,
            title: addon.name,
            price: addon.price,
            quantity: 1,
            billing: addon.billing,
          })
          openCart()
        }}
        className="btn-outline px-4 py-2 w-full inline-flex items-center justify-center gap-2"
      >
        <ShoppingCart size={16} />
        Contratar complemento
      </button>
    </div>
  )
}

function PlatformBadge({
  label,
  icon,
}: {
  label: string
  icon: { path: string; hex: string }
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary px-3 py-2 bg-white/80 dark:bg-dark-bg-secondary/80">
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        style={{ color: `#${icon.hex}` }}
        aria-label={label}
      >
        <path d={icon.path} />
      </svg>
      <span className="text-sm font-medium text-gray-700 dark:text-dark-text-secondary">{label}</span>
    </div>
  )
}

function TextBadge({ label, letter }: { label: string; letter: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary px-3 py-2 bg-white/80 dark:bg-dark-bg-secondary/80">
      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
        {letter}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-dark-text-secondary">{label}</span>
    </div>
  )
}

const WEB_COMPARISON_ROWS = [
  {
    label: 'Objetivo',
    express: 'Lanzar rápido y profesional',
    growth: 'Escalar conversiones y rendimiento (Pro/Pro+)',
  },
  {
    label: 'Alcance',
    express: 'Landing o micrositio',
    growth: 'Sitio corporativo (Pro) o eCommerce completo (Pro+)',
  },
  {
    label: 'Analítica',
    express: 'Base de medición',
    growth: 'Eventos y métricas de conversión',
  },
  {
    label: 'Evolución',
    express: 'Validar propuesta',
    growth: 'Optimizar resultados mensualmente',
  },
]

const WEB_INTEGRATIONS = [
  'Webpay / Flow / Mercado Pago',
  'Starken / Chilexpress',
  'WhatsApp Business',
  'Google Analytics + Tag Manager',
  'Meta Pixel',
  'Email marketing',
]

const WEB_SCOPE_INCLUDED = [
  'Diseño responsive + implementación técnica',
  'Estructura enfocada en conversión',
  'Capacitación de autogestión',
  'Soporte de lanzamiento según plan',
]

const WEB_SCOPE_NOT_INCLUDED = [
  'Inversión de pauta publicitaria',
  'Costos de hosting, dominio o apps de terceros',
  'Carga masiva fuera del alcance contratado',
]

export function ServicePage({ service }: ServicePageProps) {
  const { addItem, openCart } = useCart()
  const serviceDiscountPercent = service.oldPrice
    ? Math.round((1 - service.price / service.oldPrice) * 100)
    : 0
  const relatedServices = getRelatedServices(service).slice(0, 3)
  const unitPlans = (service.plans ?? []).filter((p) => p.name.includes('Unitario'))
  const comboPlans = (service.plans ?? []).filter((p) => p.name.includes('Combo'))
  const adminPlans = (service.plans ?? []).filter((p) => p.name.includes('Administración'))
  const designPlans = (service.plans ?? []).filter(
    (p) => p.name.includes('Diseños') && !p.name.includes('Combo') && !p.name.includes('Unitario')
  )
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="absolute inset-0 ai-grid opacity-35 dark:opacity-20 -z-10" />
        <div className="absolute -top-24 right-10 h-60 w-60 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-160px] left-10 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-8 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight size={20} />
            <span className="font-semibold text-gray-900 dark:text-white">{service.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{service.subtitle}</p>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {service.family}
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-dark-bg-tertiary bg-white/80 dark:bg-dark-bg-secondary/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 dark:text-dark-text-secondary">
                {BILLING_MODEL_LABEL[service.billingModel]}
              </span>
            </div>

            {/* CTA Buttons - primary para acción principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackEvent('service_primary_cta_click', { service_slug: service.slug, target: 'whatsapp' })
                  openWhatsApp(`Hola, me interesa el servicio de ${service.title}`)
                }}
                className="btn-whatsapp px-8 py-4"
              >
                <BrandWhatsapp size={20} />
                {service.cta}
              </button>
              <a
                href="#pricing"
                className="btn-outline px-8 py-4"
              >
                Ver Detalles
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            ¿Por qué elegir este servicio?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            {service.supportImage && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square"
              >
                <Image
                  src={service.supportImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 dark:text-dark-text-secondary mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              {(service.id === 3 || service.id === 10) && (
                <div className="mb-8 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] font-semibold text-amber-700 dark:text-amber-300 mb-2">
                    Aclaración importante
                  </p>
                  {service.id === 3 ? (
                    <p className="text-sm text-gray-700 dark:text-dark-text-secondary">
                      Este servicio es para piezas editoriales/corporativas. Si buscas posts, animaciones o reels para Instagram/TikTok/Facebook, visita{' '}
                      <Link href="/servicio/diseno-redes" className="font-semibold text-primary hover:underline">
                        Diseños Unitarios para Redes
                      </Link>
                      .
                    </p>
                  ) : (
                    <p className="text-sm text-gray-700 dark:text-dark-text-secondary">
                      Este servicio es solo para contenido de redes sociales. Si necesitas flyers, catálogos o presentaciones, visita{' '}
                      <Link href="/servicio/diseno-grafico" className="font-semibold text-primary hover:underline">
                        Diseño Gráfico Editorial y Corporativo
                      </Link>
                      .
                    </p>
                  )}
                </div>
              )}
              {service.id === 5 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  <PlatformBadge label="WordPress" icon={siWordpress} />
                  <PlatformBadge label="Shopify" icon={siShopify} />
                  <PlatformBadge label="WooCommerce" icon={siWoocommerce} />
                  <TextBadge label="Jumpseller" letter="J" />
                </div>
              )}

              {/* Why Choose Us Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whyChooseUs.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-bg-secondary border border-gray-100 dark:border-dark-bg-tertiary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-800 dark:text-dark-text text-sm">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Nuestro Proceso
            </h2>
            <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
              Trabajamos de manera estratégica y estructurada para garantizar excelentes resultados
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Step number */}
                <div className="absolute -top-6 left-0 w-12 h-12 bg-gray-800 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center text-white font-bold text-lg border border-gray-600 dark:border-dark-bg-tertiary">
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="pt-8 p-6 rounded-xl bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-bg-tertiary h-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-10 top-1/2 transform -translate-y-1/2">
                    <ChevronRight size={32} className="text-gray-400 dark:text-gray-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Qué Incluye?
            </h2>
            <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
              Todo lo que necesitas para obtener resultados excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Plans Grid */}
          {service.plans && service.plans.length > 0 && (
            <div className="mb-20">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Nuestros Planes
                </h2>
                <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
                  {service.id === 1 
                    ? 'Comienza por un combo (Redes Esencial, Redes Pro o Redes Pro+) y escala por etapas'
                    : 'Elige el plan que mejor se adapte a tus necesidades'
                  }
                </p>
              </motion.div>

              {service.id === 5 && (
                <div className="mb-16 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    <article className="rounded-2xl border border-sky-200 dark:border-sky-900/40 bg-sky-50 dark:bg-sky-900/10 p-6">
                      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-700 dark:text-sky-300 mb-3">
                        Plan Esencial
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Web Esencial
                      </h3>
                      <p className="text-gray-700 dark:text-dark-text-secondary">
                        Para salir al mercado con velocidad, estructura profesional y autoadministración.
                      </p>
                    </article>
                    <article className="rounded-2xl border border-primary/30 dark:border-primary/40 bg-primary/10 p-6">
                      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">
                        Plan Pro
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Web Pro
                      </h3>
                      <p className="text-gray-700 dark:text-dark-text-secondary">
                        Para marcas que necesitan crecer con analítica, optimización y mejoras continuas.
                      </p>
                    </article>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary overflow-x-auto bg-white dark:bg-dark-bg"
                  >
                    <div className="min-w-[680px]">
                      <div className="grid grid-cols-3 bg-gray-100 dark:bg-dark-bg-secondary text-xs uppercase tracking-[0.2em] font-semibold text-gray-600 dark:text-dark-text-secondary">
                        <div className="px-4 py-3">Criterio</div>
                        <div className="px-4 py-3">Web Esencial</div>
                        <div className="px-4 py-3">Web Pro / Web Pro+</div>
                      </div>
                      {WEB_COMPARISON_ROWS.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-3 border-t border-gray-100 dark:border-dark-bg-tertiary text-sm"
                        >
                          <div className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{row.label}</div>
                          <div className="px-4 py-3 text-gray-700 dark:text-dark-text-secondary">{row.express}</div>
                          <div className="px-4 py-3 text-gray-700 dark:text-dark-text-secondary">{row.growth}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                  >
                    <article className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        Integraciones Chile
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {WEB_INTEGRATIONS.map((item) => (
                          <span
                            key={item}
                            className="inline-flex rounded-full border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50 dark:bg-dark-bg-secondary px-3 py-1 text-xs font-semibold text-gray-700 dark:text-dark-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                    <article className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        Incluye siempre
                      </h4>
                      <div className="space-y-2">
                        {WEB_SCOPE_INCLUDED.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-dark-text-secondary">
                            <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                    <article className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        No incluye
                      </h4>
                      <div className="space-y-2 mb-4">
                        {WEB_SCOPE_NOT_INCLUDED.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-dark-text-secondary">
                            <span className="mt-0.5 text-gray-500">-</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      {service.addons && service.addons.length > 0 && (
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-2">
                            Continuidad recomendada
                          </p>
                          <div className="space-y-1">
                            {service.addons
                              .filter((addon) => addon.billing === 'mensual')
                              .slice(0, 3)
                              .map((addon) => (
                                <p key={addon.name} className="text-sm text-gray-700 dark:text-dark-text-secondary">
                                  {addon.name}: <span className="font-semibold">{formatPrice(addon.price)}/mes</span>
                                </p>
                              ))}
                          </div>
                          <Link
                            href="/servicio/mantencion-web"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                          >
                            Ver planes completos de mantención
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      )}
                    </article>
                  </motion.div>
                </div>
              )}

              {/* Redes Sociales: Admin/Diseños/Combo Structure */}
              {service.id === 1 && (
                <>
                  {comboPlans.length > 0 && (
                    <div className="mb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          Planes combo recomendados
                        </h3>
                        <p className="text-gray-700 dark:text-dark-text-secondary">
                          La forma más simple de elegir: Redes Esencial, Redes Pro o Redes Pro+ con gestión + diseño integrados.
                        </p>
                      </motion.div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {comboPlans.map((plan, idx) => (
                          <PlanCard key={idx} plan={plan} service={service} />
                        ))}
                      </div>
                    </div>
                  )}

                  {unitPlans.length > 0 && (
                    <div className="mb-16">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        Diseño y edición por pieza
                      </motion.h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        {unitPlans.map((plan, idx) => (
                          <PlanCard key={idx} plan={plan} service={service} />
                        ))}
                      </div>
                    </div>
                  )}

                  {adminPlans.length > 0 && (
                    <div className="mb-16">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        Solo administración mensual
                      </motion.h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {adminPlans.map((plan, idx) => (
                          <PlanCard key={idx} plan={plan} service={service} />
                        ))}
                      </div>
                    </div>
                  )}

                  {designPlans.length > 0 && (
                    <div className="mb-16">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        Packs de diseño mensual
                      </motion.h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {designPlans.map((plan, idx) => (
                          <PlanCard key={idx} plan={plan} service={service} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Other Services: Simple Plan Structure */}
              {service.id !== 1 && service.id !== 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {service.plans.map((plan, idx) => (
                    <PlanCard key={idx} plan={plan} service={service} />
                  ))}
                </div>
              )}

              {service.id === 4 && (
                <>
                  <div className="mb-14">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      🎬 Edición por pieza
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                      {service.plans.filter(p => !p.name.includes('Pack mensual')).map((plan, idx) => (
                        <PlanCard key={idx} plan={plan} service={service} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      📦 Packs mensuales con descuento
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                      {service.plans.filter(p => p.name.includes('Pack mensual')).map((plan, idx) => (
                        <PlanCard key={idx} plan={plan} service={service} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {service.addons && service.addons.length > 0 && (
                <div className="mt-16">
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Complementos disponibles
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary">
                      Suma servicios adicionales a tu compra en una sola transacción.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {service.addons.map((addon, idx) => (
                      <AddonCard key={idx} addon={addon} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pricing Section - Only show if no plans */}
          {(!service.plans || service.plans.length === 0) && (
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Inversión
                </h2>

                {/* Price Card */}
                <div className="mt-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-dark-bg dark:to-dark-bg-secondary border-2 border-purple-200 dark:border-purple-900">
                  {serviceDiscountPercent >= 50 && (
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                      Promo 50%
                    </div>
                  )}
                  {service.pricePrefix === 'desde' && (
                    <div className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                      Desde
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    {service.oldPrice && (
                      <span className="text-2xl text-gray-500 line-through">
                        {formatPrice(service.oldPrice)}
                      </span>
                    )}
                    <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-dark-text-secondary mb-8">
                    {service.pricePrefix === 'desde' || service.billingModel === 'desde'
                      ? 'Valor referencial de partida. La propuesta final se define según alcance.'
                      : 'Inversión única. Sin cargos ocultos.'}
                  </p>

                  {service.oldPrice && (
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-8 dark:bg-primary/20">
                      ¡Ahorra {formatPrice((service.oldPrice ?? 0) - service.price)}!
                    </div>
                  )}

                  <button
                    onClick={() => {
                      if (service.pricePrefix === 'desde' || service.billingModel === 'desde') {
                        trackEvent('service_primary_cta_click', { service_slug: service.slug, target: 'proposal' })
                        openWhatsApp(service.whatsappMessage ?? `Hola, quiero cotizar el servicio ${service.title}`)
                        return
                      }
                      trackEvent('service_primary_cta_click', { service_slug: service.slug, target: 'add_to_cart', value: service.price })
                      addItem({
                        id: `${service.id}-${service.title}`,
                        title: service.title,
                        price: service.price,
                        quantity: 1,
                      })
                      openCart()
                    }}
                    className="w-full py-4 px-6 bg-gradient-primary text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
                  >
                    {service.pricePrefix === 'desde' || service.billingModel === 'desde'
                      ? 'Solicitar propuesta'
                      : 'Contratar servicio'}
                  </button>

                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-4">
                    Respuesta garantizada en menos de 24 horas
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                También te puede interesar
              </h2>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Complementos recomendados para potenciar resultados con este servicio.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/servicio/${related.slug}`}
                  onClick={() =>
                    trackEvent('service_related_click', {
                      from_service_slug: service.slug,
                      to_service_slug: related.slug,
                    })
                  }
                  className="group rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 hover:shadow-lg transition-all"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                    {related.family}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-4">
                    {related.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    Ver servicio
                    <ChevronRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <motion.details
                key={idx}
                className="group p-6 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <summary className="flex items-start justify-between font-bold text-gray-900 dark:text-white text-lg">
                  {item.question}
                  <ChevronRight
                    size={24}
                    className="text-gray-400 group-open:text-purple-600 group-open:rotate-90 transition-all flex-shrink-0"
                  />
                </summary>
                <p className="mt-4 text-gray-600 dark:text-dark-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

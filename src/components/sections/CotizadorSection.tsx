'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BrandInstagram,
  BrandWhatsapp,
  Brush,
  Calculator,
  Code,
  Minus,
  Music,
  Plus,
  ShoppingCart,
  Stars,
  Target,
} from 'tabler-icons-react'
import { useCart } from '@/components/cart/CartProvider'
import { CONTACT_INFO } from '@/lib/constants'
import { formatPrice, openWhatsApp } from '@/lib/utils'

type QuoteFamily =
  | 'Redes Sociales'
  | 'Diseño & Branding'
  | 'Producción Audiovisual'
  | 'Web & Desarrollo'

type QuoteItem = {
  id: string
  title: string
  description: string
  price: number
  billing: 'one_time' | 'mensual'
  family: QuoteFamily
  icon: React.ComponentType<{ className?: string }>
}

type GoalOption = {
  id: 'vender' | 'posicionamiento' | 'automatizar'
  label: string
  description: string
  recommendedItems: string[]
}

const SITUATION_OPTIONS = [
  'Soy nuevo (sin marca ni web)',
  'Ya tengo base y quiero crecer',
  'Necesito servicios específicos',
] as const

const NEED_OPTIONS = [
  'Identidad visual',
  'Sitio web',
  'Redes sociales',
  'Contenido (video/audio)',
  'Plataforma/App',
] as const

const CHANNEL_OPTIONS = ['Solo uno', 'Dos o tres', 'Todo integrado'] as const

const BUDGET_OPTIONS = ['Hasta $200k', '$200k-$500k', '+$500k', 'Proyecto único'] as const

const GOAL_OPTIONS: GoalOption[] = [
  {
    id: 'vender',
    label: 'Vender más',
    description: 'Aumentar conversiones con contenido + web optimizada.',
    recommendedItems: ['combo-redes-pro', 'sitio-corporativo', 'mantencion-pro'],
  },
  {
    id: 'posicionamiento',
    label: 'Posicionar marca',
    description: 'Fortalecer identidad y constancia en canales digitales.',
    recommendedItems: ['branding-completa', 'pack-redes-lanzamiento', 'combo-redes-pro'],
  },
  {
    id: 'automatizar',
    label: 'Automatizar operación',
    description: 'Reducir tareas manuales con flujos y plataformas propias.',
    recommendedItems: ['starter-dev', 'soporte-pro-dev', 'landing-start'],
  },
]

const QUOTE_CATALOG: QuoteItem[] = [
  {
    id: 'diseno-estatico',
    title: 'Diseño estático unitario',
    description: 'Post, historia o banner listo para publicar.',
    price: 29000,
    billing: 'one_time',
    family: 'Redes Sociales',
    icon: Brush,
  },
  {
    id: 'diseno-dinamico',
    title: 'Diseño animado unitario',
    description: 'Motion corto para anuncios y campañas.',
    price: 59000,
    billing: 'one_time',
    family: 'Redes Sociales',
    icon: Stars,
  },
  {
    id: 'reel-grafico',
    title: 'Reel gráfico unitario',
    description: 'Motion de 30-45s sin grabación.',
    price: 89000,
    billing: 'one_time',
    family: 'Redes Sociales',
    icon: BrandInstagram,
  },
  {
    id: 'pack-redes-lanzamiento',
    title: 'Pack Lanzamiento Redes',
    description: '2 estáticos + 1 animado + 1 reel gráfico.',
    price: 219000,
    billing: 'one_time',
    family: 'Redes Sociales',
    icon: BrandInstagram,
  },
  {
    id: 'combo-redes-esencial',
    title: 'Combo Redes Esencial',
    description: 'Gestión + diseño integrado para empezar.',
    price: 127500,
    billing: 'mensual',
    family: 'Redes Sociales',
    icon: BrandInstagram,
  },
  {
    id: 'combo-redes-pro',
    title: 'Combo Redes Pro',
    description: 'Plan recomendado para pymes en crecimiento.',
    price: 289000,
    billing: 'mensual',
    family: 'Redes Sociales',
    icon: BrandInstagram,
  },
  {
    id: 'combo-redes-full',
    title: 'Combo Redes Full',
    description: 'Operación intensiva para marcas con volumen.',
    price: 485000,
    billing: 'mensual',
    family: 'Redes Sociales',
    icon: BrandInstagram,
  },
  {
    id: 'branding-esencial',
    title: 'Branding Esencial',
    description: 'Base de identidad visual para lanzar marca.',
    price: 250000,
    billing: 'one_time',
    family: 'Diseño & Branding',
    icon: Stars,
  },
  {
    id: 'branding-completa',
    title: 'Branding Completa',
    description: 'Sistema visual robusto con aplicaciones.',
    price: 490000,
    billing: 'one_time',
    family: 'Diseño & Branding',
    icon: Stars,
  },
  {
    id: 'pack-diseno-12',
    title: 'Pack Diseño Editorial',
    description: 'Presentación + piezas comerciales fuera de redes.',
    price: 260000,
    billing: 'one_time',
    family: 'Diseño & Branding',
    icon: Brush,
  },
  {
    id: 'podcast-audio',
    title: 'Edición y mezcla de audio',
    description: 'Limpieza, nivelación y master base por episodio.',
    price: 99000,
    billing: 'one_time',
    family: 'Producción Audiovisual',
    icon: Music,
  },
  {
    id: 'mastering-track',
    title: 'Mastering por track',
    description: 'Entrega final optimizada para plataformas.',
    price: 45000,
    billing: 'one_time',
    family: 'Producción Audiovisual',
    icon: Music,
  },
  {
    id: 'pack-audio-completo',
    title: 'Pack Audio Completo',
    description: 'Edición + Mastering con descuento.',
    price: 135000,
    billing: 'one_time',
    family: 'Producción Audiovisual',
    icon: Music,
  },
  {
    id: 'landing-start',
    title: 'Landing Start',
    description: 'Sitio de entrada para captar leads o ventas.',
    price: 249990,
    billing: 'one_time',
    family: 'Web & Desarrollo',
    icon: Target,
  },
  {
    id: 'sitio-corporativo',
    title: 'Sitio corporativo',
    description: 'Web profesional para negocio en crecimiento.',
    price: 490000,
    billing: 'one_time',
    family: 'Web & Desarrollo',
    icon: Target,
  },
  {
    id: 'mantencion-pro',
    title: 'Mantención Web Pro',
    description: 'Soporte técnico + contenido mensual.',
    price: 89990,
    billing: 'mensual',
    family: 'Web & Desarrollo',
    icon: Target,
  },
  {
    id: 'mantencion-full',
    title: 'Mantención + Gestión',
    description: 'Administración activa y mejoras mensuales.',
    price: 149990,
    billing: 'mensual',
    family: 'Web & Desarrollo',
    icon: Target,
  },
  {
    id: 'starter-dev',
    title: 'Starter Desarrollo',
    description: 'Primer módulo funcional para validar negocio.',
    price: 490000,
    billing: 'one_time',
    family: 'Web & Desarrollo',
    icon: Code,
  },
  {
    id: 'plataforma-dev',
    title: 'Plataforma Desarrollo',
    description: 'Portal o app web con módulos principales.',
    price: 1200000,
    billing: 'one_time',
    family: 'Web & Desarrollo',
    icon: Code,
  },
  {
    id: 'saas-dev',
    title: 'SaaS / Enterprise',
    description: 'Arquitectura escalable e integraciones complejas.',
    price: 3500000,
    billing: 'one_time',
    family: 'Web & Desarrollo',
    icon: Code,
  },
  {
    id: 'soporte-basico-dev',
    title: 'Soporte Desarrollo Básico',
    description: 'Mantenimiento y tickets con SLA 48h.',
    price: 149990,
    billing: 'mensual',
    family: 'Web & Desarrollo',
    icon: Code,
  },
  {
    id: 'soporte-pro-dev',
    title: 'Soporte Desarrollo Pro',
    description: 'Incluye mejoras menores y monitoreo continuo.',
    price: 299990,
    billing: 'mensual',
    family: 'Web & Desarrollo',
    icon: Code,
  },
  {
    id: 'soporte-dedicado-dev',
    title: 'Soporte Desarrollo Dedicado',
    description: '8-10h mensuales asignadas a evolución técnica.',
    price: 590000,
    billing: 'mensual',
    family: 'Web & Desarrollo',
    icon: Code,
  },
]

const FAMILY_ORDER: QuoteFamily[] = [
  'Redes Sociales',
  'Diseño & Branding',
  'Producción Audiovisual',
  'Web & Desarrollo',
]

export function CotizadorSection() {
  const [goal, setGoal] = useState<GoalOption['id']>('vender')
  const [situation, setSituation] = useState<(typeof SITUATION_OPTIONS)[number]>(SITUATION_OPTIONS[0])
  const [need, setNeed] = useState<(typeof NEED_OPTIONS)[number]>(NEED_OPTIONS[0])
  const [channels, setChannels] = useState<(typeof CHANNEL_OPTIONS)[number]>(CHANNEL_OPTIONS[0])
  const [budget, setBudget] = useState<(typeof BUDGET_OPTIONS)[number]>(BUDGET_OPTIONS[0])
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const { addItem, openCart } = useCart()

  const activeGoal = GOAL_OPTIONS.find((option) => option.id === goal) ?? GOAL_OPTIONS[0]
  const selectedItems = useMemo(
    () =>
      QUOTE_CATALOG
        .map((item) => ({
          ...item,
          quantity: quantities[item.id] ?? 0,
        }))
        .filter((item) => item.quantity > 0),
    [quantities]
  )

  const oneTimeSubtotal = useMemo(
    () =>
      selectedItems
        .filter((item) => item.billing === 'one_time')
        .reduce((acc, item) => acc + item.price * item.quantity, 0),
    [selectedItems]
  )

  const monthlySubtotal = useMemo(
    () =>
      selectedItems
        .filter((item) => item.billing === 'mensual')
        .reduce((acc, item) => acc + item.price * item.quantity, 0),
    [selectedItems]
  )

  const oneTimeItemCount = selectedItems
    .filter((item) => item.billing === 'one_time')
    .reduce((acc, item) => acc + item.quantity, 0)
  const monthlyItemCount = selectedItems
    .filter((item) => item.billing === 'mensual')
    .reduce((acc, item) => acc + item.quantity, 0)

  const oneTimeDiscount = oneTimeItemCount >= 3 ? Math.round(oneTimeSubtotal * 0.1) : 0
  const monthlyDiscount = monthlyItemCount >= 2 ? Math.round(monthlySubtotal * 0.08) : 0

  const oneTimeTotal = oneTimeSubtotal - oneTimeDiscount
  const monthlyTotal = monthlySubtotal - monthlyDiscount

  const handleQuantity = (itemId: string, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, Math.min(10, (prev[itemId] ?? 0) + delta))
      return { ...prev, [itemId]: next }
    })
  }

  const addPackToCart = () => {
    if (selectedItems.length === 0) return

    selectedItems.forEach((item) => {
      addItem({
        id: `cotizador-${item.id}`,
        title: `Cotizador - ${item.title}`,
        price: item.price,
        quantity: item.quantity,
        billing: item.billing === 'mensual' ? 'mensual' : undefined,
      })
    })
    openCart()
  }

  const sendToWhatsApp = () => {
    if (selectedItems.length === 0) return

    const lines = selectedItems.map(
      (item) =>
        `- ${item.title} x${item.quantity} (${item.billing === 'mensual' ? 'mensual' : 'único'})`
    )

    const message = [
      'Hola Artestudio, quiero cotizar este pack:',
      `Situación: ${situation}`,
      `Necesidad principal: ${need}`,
      `Canales/plataformas: ${channels}`,
      `Presupuesto referencial: ${budget}`,
      '',
      ...lines,
      '',
      `Pago único estimado: ${formatPrice(oneTimeTotal)}`,
      `Mensual estimado: ${formatPrice(monthlyTotal)}`,
      `Objetivo: ${activeGoal.label}`,
    ].join('\n')

    openWhatsApp(CONTACT_INFO.whatsapp, message)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0 ai-grid opacity-25 dark:opacity-15" />
        <div className="absolute -top-24 right-20 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-130px] left-8 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Calculator className="w-4 h-4" />
              Cotizador Online
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Construye tu pack ideal
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Selecciona servicios, ajusta cantidades y obtiene un estimado de pago
              único y mensual para avanzar con claridad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
            <div className="space-y-8">
              <section className="rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  1) Elige tu objetivo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {GOAL_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setGoal(option.id)}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        goal === option.id
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-200 dark:border-dark-bg-tertiary hover:border-primary/40'
                      }`}
                    >
                      <p className="text-sm uppercase tracking-[0.15em] text-primary font-semibold">
                        Objetivo
                      </p>
                      <p className="mt-2 font-bold text-gray-900 dark:text-white">{option.label}</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  2) Diagnóstico rápido
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                    ¿Qué describe mejor tu situación?
                    <select
                      value={situation}
                      onChange={(e) => setSituation(e.target.value as (typeof SITUATION_OPTIONS)[number])}
                      className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    >
                      {SITUATION_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                    ¿Qué necesitas principalmente?
                    <select
                      value={need}
                      onChange={(e) => setNeed(e.target.value as (typeof NEED_OPTIONS)[number])}
                      className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    >
                      {NEED_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                    ¿Cuántos canales/plataformas?
                    <select
                      value={channels}
                      onChange={(e) => setChannels(e.target.value as (typeof CHANNEL_OPTIONS)[number])}
                      className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    >
                      {CHANNEL_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                    Presupuesto de referencia
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value as (typeof BUDGET_OPTIONS)[number])}
                      className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    >
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </section>

              {FAMILY_ORDER.map((family) => {
                const items = QUOTE_CATALOG.filter((item) => item.family === family)
                return (
                  <section
                    key={family}
                    className="rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8"
                  >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">{family}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {items.map((item) => {
                        const quantity = quantities[item.id] ?? 0
                        const isRecommended = activeGoal.recommendedItems.includes(item.id)
                        const Icon = item.icon

                        return (
                          <article
                            key={item.id}
                            className={`rounded-2xl border p-4 transition-colors ${
                              quantity > 0
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 dark:border-dark-bg-tertiary'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-1">
                                    {item.description}
                                  </p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="inline-flex rounded-full bg-gray-100 dark:bg-dark-bg-secondary px-3 py-1 text-xs font-semibold text-gray-700 dark:text-dark-text-secondary">
                                      {item.billing === 'mensual' ? 'Mensual' : 'Pago único'}
                                    </span>
                                    {isRecommended && (
                                      <span className="inline-flex rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                                        Recomendado
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-primary">{formatPrice(item.price)}</p>
                                {item.billing === 'mensual' && (
                                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">/mes</p>
                                )}
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => handleQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary inline-flex items-center justify-center text-gray-700 dark:text-dark-text-secondary"
                                aria-label={`Disminuir ${item.title}`}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="min-w-[24px] text-center font-semibold text-gray-900 dark:text-white">
                                {quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary inline-flex items-center justify-center text-gray-700 dark:text-dark-text-secondary"
                                aria-label={`Aumentar ${item.title}`}
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </div>

            <aside className="xl:sticky xl:top-24 rounded-3xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                3) Resumen estimado
              </h2>

              {selectedItems.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-200 dark:border-dark-bg-tertiary p-5 text-sm text-gray-600 dark:text-dark-text-secondary">
                  Aún no has agregado servicios. Selecciona cantidades para armar tu propuesta.
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex justify-between gap-2 text-sm">
                      <span className="text-gray-700 dark:text-dark-text-secondary">
                        {item.title} x{item.quantity}
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="my-6 h-px bg-gray-200 dark:bg-dark-bg-tertiary" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700 dark:text-dark-text-secondary">
                  <span>Subtotal pago único</span>
                  <span>{formatPrice(oneTimeSubtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-dark-text-secondary">
                  <span>Descuento combo pago único</span>
                  <span>-{formatPrice(oneTimeDiscount)}</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-dark-text-secondary">
                  <span>Subtotal mensual</span>
                  <span>{formatPrice(monthlySubtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-dark-text-secondary">
                  <span>Descuento combo mensual</span>
                  <span>-{formatPrice(monthlyDiscount)}</span>
                </div>
              </div>

              <div className="my-6 h-px bg-gray-200 dark:bg-dark-bg-tertiary" />

              <div className="space-y-3">
                <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                  <span>Pago único estimado</span>
                  <span>{formatPrice(oneTimeTotal)}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                  <span>Mensual estimado</span>
                  <span>{formatPrice(monthlyTotal)}</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-500 dark:text-dark-text-secondary">
                Descuentos automáticos: 10% en pago único desde 3 ítems y 8% mensual
                desde 2 servicios recurrentes.
              </p>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  disabled={selectedItems.length === 0}
                  className="w-full btn-whatsapp px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <BrandWhatsapp className="w-4 h-4" />
                  Enviar resumen por WhatsApp
                </button>
                <button
                  type="button"
                  onClick={addPackToCart}
                  disabled={selectedItems.length === 0}
                  className="w-full btn-outline px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Agregar pack al carrito
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

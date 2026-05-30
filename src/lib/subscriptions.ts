/**
 * Catálogo de planes — beneficios para el cliente
 */

export type SubscriptionPlan = {
  id: string
  name: string
  tagline: string
  idealFor: string
  category?: 'core' | 'social'
  setup: number
  monthly: number
  regularMonthly?: number
  priceNote?: string
  delivery: string
  featured?: boolean
  badge?: string
  includes: readonly string[]
  excludes?: readonly string[]
}

export type SubscriptionAddon = {
  id: string
  name: string
  description: string
  setup: number
  monthly: number
}

export const MIN_COMMITMENT_MONTHS = 3

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-esencial',
    name: 'Plan Esencial',
    tagline: 'Tu landing lista en 48 hrs · Potenciado con IA',
    idealFor: 'Emprendedores y pymes que necesitan una página simple y efectiva.',
    category: 'core',
    setup: 74_990,
    monthly: 9_990,
    delivery: '48 horas hábiles desde que apruebas el briefing.',
    includes: [
      '1 página tipo onepage con hasta 5 secciones',
      'Diseño responsive (se ve bien en celular)',
      'Botón directo a WhatsApp',
      'Formulario de contacto o link externo',
      'SEO on-page básico (títulos, descripciones, estructura)',
      'Hosting incluido en el plan mensual',
      'Mantenimiento técnico básico',
      'Soporte básico por WhatsApp',
      'Potenciado con IA para optimización',
    ],
    excludes: [
      'eCommerce',
      'Carga de productos',
      'Nuevas páginas adicionales',
      'Rediseños completos',
      'Automatizaciones avanzadas',
      'Gestión de redes sociales',
    ],
  },
  {
    id: 'plan-pro',
    name: 'Plan Pro',
    tagline: 'Sitio web corporativo · Potenciado con IA',
    idealFor: 'Negocios que necesitan un sitio profesional con múltiples páginas.',
    setup: 199_990,
    monthly: 19_990,
    delivery: 'Web lista en 1 semana.',
    featured: true,
    badge: 'Más popular',
    includes: [
      'Sitio web de hasta 10 páginas',
      'Diseño responsive profesional',
      'Google Analytics + Meta Pixel configurados',
      'SEO on-page básico (títulos, descripciones, estructura)',
      'Hosting incluido en el plan mensual',
      'Mantenimiento técnico básico',
      'Soporte prioritario por WhatsApp',
      'Potenciado con IA para optimización',
    ],
    excludes: [
      'eCommerce o tienda online',
      'Automatizaciones avanzadas',
      'Gestión de redes sociales',
    ],
  },
  {
    id: 'plan-pro-plus',
    name: 'Plan Pro+ / Ecommerce',
    tagline: 'Tienda online completa · Potenciado con IA',
    idealFor: 'Negocios que necesitan vender online o tienen necesidades avanzadas.',
    setup: 299_990,
    monthly: 29_990,
    delivery: 'Se define según alcance después del diagnóstico inicial.',
    includes: [
      'Tienda online hasta 50 productos',
      'Integración de pagos (Webpay, Flow, MercadoPago, Transbank, Kiphu, Multicaja)',
      'Configuración de despacho (Starken, Chilexpress, Bluexpress)',
      'Google Analytics 4 + Tag Manager',
      'SEO técnico completo',
      'Hosting incluido en el plan mensual',
      'Mantenimiento técnico básico',
      'Soporte premium por WhatsApp',
      'Potenciado con IA para optimización',
    ],
    excludes: [
      'Gestión de redes sociales',
      'Automatizaciones avanzadas (se cotizan aparte)',
    ],
  },
]

export const SUBSCRIPTION_ADDONS: SubscriptionAddon[] = [
  {
    id: 'addon-ia-pro',
    name: 'Automatización bajo evaluación',
    description: 'Revisamos si conviene automatizar respuestas, formularios o procesos simples.',
    setup: 29_990,
    monthly: 49_990,
  },
  {
    id: 'addon-redes-extra',
    name: 'Más publicaciones en redes',
    description:
      '+8 publicaciones diseñadas al mes (feed y stories). Ideal si ya tienes plan y necesitas más volumen; para empezar con web + redes, Crecimiento suele convenir más.',
    setup: 29_990,
    monthly: 59_990,
  },
  {
    id: 'addon-web-extra',
    name: 'Más páginas en tu sitio',
    description: 'Hasta 4 páginas extra (servicios, equipo, blog, etc.).',
    setup: 39_990,
    monthly: 9_990,
  },
]

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function firstPayment(plan: { setup: number; monthly: number }): number {
  return plan.setup + plan.monthly
}

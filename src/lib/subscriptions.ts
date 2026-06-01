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
  originalSetup?: number
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
    name: 'Esencial',
    tagline: 'Tu landing lista en 48 hrs',
    idealFor: 'Emprendedores y pymes que necesitan una página simple y efectiva.',
    category: 'core',
    setup: 74_990,
    originalSetup: 149_990,
    monthly: 9_990,
    delivery: '48 horas hábiles desde que apruebas el briefing.',
    badge: '50% OFF',
    includes: [
      '1 página One Page hasta 5 secciones',
      'Diseño responsive (adaptado a móvil)',
      'Botón directo a WhatsApp',
      'Formulario de contacto o link externo',
      'SEO on-page básico (títulos, descripciones, estructura)',
      'Dominio incluido (.cl o .com)',
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
    name: 'Pro',
    tagline: 'Sitio web corporativo',
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
      'Dominio incluido (.cl o .com)',
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
    name: 'Pro+ / Ecommerce',
    tagline: 'Tienda online completa',
    idealFor: 'Negocios que necesitan vender online o tienen necesidades avanzadas.',
    setup: 299_990,
    monthly: 29_990,
    delivery: 'Se define según alcance después del diagnóstico inicial.',
    includes: [
      'Tienda online hasta 50 productos',
      'Integración de pagos (Chile e Internacionales)',
      'Configuración de despacho (Starken, Chilexpress, Bluexpress)',
      'Google Analytics 4 + Tag Manager',
      'SEO técnico completo',
      'Dominio incluido (.cl o .com)',
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

export const CRECE_PLAN: SubscriptionPlan = {
  id: 'plan-crece',
  name: 'Crece',
  tagline: 'Landing page + redes sociales',
  idealFor: 'Negocios que quieren captar clientes con una página clara y contenido activo en redes.',
  category: 'social',
  setup: 149_990,
  originalSetup: 249_990,
  monthly: 99_990,
  delivery: 'Landing en 48 horas hábiles y primer pack de redes durante la primera semana.',
  badge: 'Pack web + redes',
  includes: [
    'Landing page One Page enfocada en conversión',
    'Botón directo a WhatsApp o formulario de contacto',
    'SEO on-page básico para la landing',
    'Bio/perfil de Instagram optimizado',
    '8 contenidos mensuales para redes sociales',
    '1 reel o video corto incluido al mes',
    'Calendario mensual de publicaciones',
    'Diseño visual coherente entre landing y redes',
    'Hosting, mantenimiento y soporte básico',
  ],
  excludes: [
    'Pauta publicitaria pagada',
    'Community management avanzado',
    'eCommerce o tienda online',
  ],
}

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
    monthly: 79_990,
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

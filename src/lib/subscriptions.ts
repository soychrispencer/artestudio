/**
 * Catálogo de suscripciones — precios en CLP (números para checkout)
 */

export type SubscriptionPlan = {
  id: string
  name: string
  tagline: string
  setup: number
  monthly: number
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

/** Permanencia mínima en meses */
export const MIN_COMMITMENT_MONTHS = 3

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-presencia',
    name: 'Presencia',
    tagline: 'Landing + hosting para captar clientes',
    setup: 74_990,
    monthly: 19_990,
    includes: [
      'Landing de 1 página orientada a conversión',
      'Textos con apoyo de IA (tú apruebas)',
      'Hosting y dominio el primer año',
      'Botón WhatsApp o formulario',
      '1 ajuste menor al mes',
    ],
    excludes: ['Redes sociales', 'eCommerce', 'Agente IA'],
  },
  {
    id: 'plan-crecimiento',
    name: 'Crecimiento',
    tagline: 'Web + redes con equipo mensual',
    setup: 149_990,
    monthly: 89_990,
    featured: true,
    badge: 'Más elegido',
    includes: [
      'Sitio web hasta 6 páginas',
      'Google Analytics + Meta Pixel',
      '12 publicaciones/mes (IG y/o Facebook)',
      'Diseño gráfico para redes',
      'Informe mensual de resultados',
      'Soporte prioritario WhatsApp',
    ],
  },
  {
    id: 'plan-escala',
    name: 'Escala',
    tagline: 'Presencia completa + IA y tienda',
    setup: 249_990,
    monthly: 139_990,
    includes: [
      'Todo lo del plan Crecimiento',
      'Tienda online o catálogo con checkout',
      'Agente IA en WhatsApp o web (base)',
      'Automatizaciones simples (formularios, alertas)',
      'SEO on-page mensual',
      'Soporte prioritario 24h hábiles',
    ],
  },
]

export const SUBSCRIPTION_ADDONS: SubscriptionAddon[] = [
  {
    id: 'addon-ia-pro',
    name: 'Agente IA Pro',
    description: 'Chatbot entrenado con tu negocio: cotiza, responde y capta leads 24/7.',
    setup: 29_990,
    monthly: 49_990,
  },
  {
    id: 'addon-redes-extra',
    name: 'Pack redes extra',
    description: '+8 publicaciones al mes y stories con diseño.',
    setup: 0,
    monthly: 29_990,
  },
  {
    id: 'addon-web-extra',
    name: 'Páginas extra',
    description: 'Hasta 4 páginas adicionales en tu sitio.',
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

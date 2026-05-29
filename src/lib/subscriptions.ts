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
    id: 'plan-inicio',
    name: 'Inicio',
    tagline: 'Presencia básica y funcional rápido',
    idealFor: 'Quien necesita presencia básica y funcional rápido.',
    category: 'core',
    setup: 74_990,
    monthly: 14_990,
    delivery: '48 horas hábiles desde que apruebas el briefing.',
    includes: [
      'Landing de una página diseñada a medida',
      'Copy base asistido con herramientas digitales (tú revisas y apruebas)',
      'Hosting, seguridad y soporte mientras el plan esté activo',
      'Botón WhatsApp o formulario de contacto',
      'Diseño responsive (se ve bien en celular)',
      '1 ajuste por mes',
      'Soporte por WhatsApp',
    ],
    excludes: [
      'Gestión de redes sociales',
      'Páginas adicionales',
      'eCommerce',
      'Automatizaciones avanzadas',
      'Cambios ilimitados',
    ],
  },
  {
    id: 'plan-crecer',
    name: 'Crecer',
    tagline: 'Web + contenido mensual para mantener tu negocio activo',
    idealFor: 'Quien quiere una presencia digital completa para vender mejor.',
    setup: 199_990,
    monthly: 89_990,
    delivery: 'Web lista en 1 semana. Redes activas en 5 días hábiles.',
    featured: true,
    badge: 'El más elegido',
    includes: [
      'Sitio web de hasta 5 páginas',
      'Google Analytics + Meta Pixel configurados',
      'SEO on-page básico (títulos, descripciones, estructura)',
      '8 contenidos mensuales reutilizables para redes',
      '1 video o reel de hasta 60 segundos al mes',
      '7 piezas estáticas mensuales',
      'Diseño de piezas gráficas mensuales',
      'Copy estratégico para cada publicación',
      'Informe de resultados mensual',
      'Soporte prioritario por WhatsApp',
    ],
    excludes: [
      'eCommerce o tienda online',
      'Automatizaciones avanzadas',
      'Publicidad pagada (pauta)',
    ],
  },
  {
    id: 'plan-pro-ia',
    name: 'Pro',
    tagline: 'Escala, plataforma avanzada y procesos digitales',
    idealFor: 'Negocios que quieren escalar o tienen necesidades avanzadas.',
    setup: 349_990,
    monthly: 149_990,
    delivery: 'Se define según alcance después del diagnóstico inicial.',
    includes: [
      'Todo el plan Crecer',
      'Implementación base de eCommerce o plataforma avanzada según alcance',
      'Automatizaciones simples de ventas o atención al cliente',
      'Estrategia digital mensual 1:1 (videollamada mensual)',
      'Evaluación de soluciones con IA si el proyecto lo permite',
      'Soporte premium por WhatsApp',
    ],
    excludes: [
      'Catálogos grandes o carga masiva de productos',
      'Migraciones masivas desde otras plataformas',
      'Integraciones complejas o desarrollo a medida',
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

/**
 * Catálogo de planes — beneficios para el cliente
 */

export type SubscriptionPlan = {
  id: string
  name: string
  tagline: string
  idealFor: string
  category?: 'core' | 'social' | 'video'
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
    name: 'Landing Express',
    tagline: 'Ideal para comenzar.',
    idealFor: 'Emprendedores y pymes que necesitan una landing para empezar.',
    category: 'core',
    setup: 74_990,
    monthly: 9_990,
    delivery: '48 horas hábiles desde que apruebas el briefing.',
    includes: [
      'Hosting',
      'SSL',
      'Soporte',
      'Mantenimiento técnico',
      'Dominio conectado',
    ],
  },
]

export const CRECE_PLAN: SubscriptionPlan = {
  id: 'plan-landing-redes',
  name: 'Landing + Redes',
  tagline: 'Landing page + redes sociales',
  idealFor: 'Negocios que quieren captar clientes con una página clara y contenido activo en redes.',
  category: 'social',
  setup: 149_990,
  originalSetup: 249_990,
  monthly: 119_990,
  delivery: 'Landing en 48 horas hábiles y primer pack de redes durante la primera semana.',
  badge: 'Pack web + redes',
  includes: [
    'Landing page One Page enfocada en conversión',
    'Botón directo a WhatsApp o formulario de contacto',
    'SEO on-page básico para la landing',
    '12 contenidos mensuales para redes sociales',
    'Historias, posts, carruseles y reels según calendario',
    'Hasta 2 reels o videos cortos de 60 segundos al mes',
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

export const SOCIAL_MEDIA_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-redes-esencial',
    name: 'Redes Esencial',
    tagline: '12 contenidos mensuales',
    idealFor: 'Negocios que necesitan presencia constante sin contratar una web.',
    category: 'social',
    setup: 0,
    monthly: 89_990,
    delivery: 'Primer calendario y línea visual durante la primera semana.',
    badge: 'Entrada redes',
    includes: [
      '12 contenidos mensuales',
      'Historias, posts, carruseles y reels según calendario',
      'Hasta 2 reels o videos cortos de 60 segundos al mes',
      'Diseño de piezas estáticas',
      'Copy para cada publicación',
      'Calendario mensual de contenido',
      'Publicación o entrega lista para publicar',
      'Reporte simple mensual',
    ],
    excludes: [
      'Pauta publicitaria pagada',
      'Grabación presencial',
      'Community management avanzado',
      'Revisión de streams completos',
    ],
  },
  {
    id: 'plan-redes-pro',
    name: 'Redes Pro',
    tagline: 'Contenido mensual con más volumen',
    idealFor: 'Marcas que necesitan publicar más seguido y reutilizar contenido en varias plataformas.',
    category: 'social',
    setup: 0,
    monthly: 149_990,
    delivery: 'Primer calendario y planificación durante la primera semana.',
    featured: true,
    badge: 'Más completo',
    includes: [
      '20 contenidos mensuales',
      'Adaptación para Instagram, TikTok, Facebook, LinkedIn o YouTube Shorts',
      'Hasta 4 reels o videos cortos de 60 segundos al mes',
      'Piezas estáticas, carruseles e historias',
      'Copy estratégico para cada publicación',
      'Calendario mensual y orden de publicación',
      'Diseño de línea visual para el mes',
      'Reporte mensual con próximos ajustes',
    ],
    excludes: [
      'Pauta publicitaria pagada',
      'Grabación presencial',
      'Edición de videos largos',
      'Revisión de streams completos',
    ],
  },
  CRECE_PLAN,
]

export const VIDEO_EDITING_PLAN: SubscriptionPlan = {
  id: 'plan-video-mensual',
  name: 'Video mensual',
  tagline: '4 reels + 2 videos YouTube',
  idealFor: 'Creadores o negocios que ya tienen material grabado y necesitan editarlo cada mes.',
  category: 'video',
  setup: 0,
  monthly: 120_000,
  delivery: 'Primera tanda durante la primera semana desde que recibimos el material marcado.',
  badge: 'Contenido video',
  includes: [
    '4 reels, shorts o TikToks verticales',
    '2 videos largos para YouTube de 10 a 12 minutos',
    'Cortes, ritmo, zooms y limpieza básica',
    'Subtítulos en partes clave',
    'Música o efectos simples',
    '1 corrección puntual por video',
    'Formato final listo para publicar',
  ],
  excludes: [
    'Revisar streams completos para buscar clips',
    'Videos largos sobre 12 minutos',
    'Motion graphics avanzado',
    'Miniaturas, guiones o grabación',
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

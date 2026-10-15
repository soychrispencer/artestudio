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
  monthlyIncludes?: readonly string[]
  footnote?: string
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
    tagline: 'Tu página profesional, lista para recibir clientes.',
    idealFor: 'Emprendedores y pymes que necesitan una landing para empezar.',
    category: 'core',
    setup: 74_990,
    monthly: 9_990,
    delivery: '48 horas hábiles desde que apruebas el briefing.',
    includes: [
      'Diseño personalizado one-page',
      'Hasta 7 secciones',
      'Adaptación móvil',
      'Botón WhatsApp',
      'Formulario de contacto',
      'SEO básico',
      'Publicación',
      'Dominio .cl primer año',
    ],
    monthlyIncludes: [
      'Hosting',
      'SSL',
      'Soporte',
      'Mantención técnica',
      'Actualizaciones menores',
      'Dominio conectado',
    ],
    footnote:
      'Dominio .cl incluido por 1 año. Sujeto a disponibilidad y registrado a nombre del cliente. Renovaciones posteriores no incluidas.',
    excludes: ['Renovación de dominio desde el segundo año', 'eCommerce', 'Pauta publicitaria'],
  },
]

export const CRECE_PLAN: SubscriptionPlan = {
  id: 'plan-landing-redes',
  name: 'Landing + Redes',
  tagline: 'Landing Express + Redes Esencial, en un solo plan.',
  idealFor: 'Negocios que necesitan página de entrada y contenido mensual desde el día uno.',
  category: 'social',
  setup: 74_990,
  monthly: 94_990,
  delivery: 'Landing según briefing; primer calendario de redes en la primera semana.',
  badge: 'Pack',
  includes: [
    'Landing Express (one-page, WhatsApp, formulario, SEO básico, publicación)',
    'Dominio .cl el primer año, sujeto a disponibilidad',
    'Plan Redes Esencial: 8 contenidos mensuales',
    'Calendario y línea visual del mes',
    'Hosting, SSL, soporte y mantención de la landing',
  ],
  excludes: [
    'Pauta publicitaria',
    'eCommerce',
    'Renovación de dominio desde el segundo año',
  ],
}

export const SOCIAL_MEDIA_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-redes-esencial',
    name: 'Redes Esencial',
    tagline: '8 contenidos mensuales (2 por semana)',
    idealFor: 'Negocios que necesitan presencia constante y profesional sin pagar una agencia tradicional.',
    category: 'social',
    setup: 0,
    monthly: 89_990,
    delivery: 'Primer calendario y línea visual durante la primera semana.',
    badge: 'Entrada redes',
    includes: [
      '8 contenidos mensuales (2 por semana)',
      '6 posts estáticos o carruseles diseñados',
      'Hasta 2 reels o videos cortos al mes (con material propio)',
      'Diseño de piezas con línea visual del mes',
      'Copy persuasivo y hashtags para cada publicación',
      'Calendario mensual de contenido',
      'Programación y publicación automática',
      'Reporte simple mensual de rendimiento',
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
    tagline: '12 contenidos mensuales con estrategia (3 por semana)',
    idealFor: 'Marcas que necesitan mayor autoridad, más video y alcance en varias plataformas.',
    category: 'social',
    setup: 0,
    monthly: 189_990,
    delivery: 'Primer calendario y planificación durante la primera semana.',
    featured: true,
    badge: 'Más completo',
    includes: [
      '12 contenidos mensuales (3 por semana)',
      '8 posts, carruseles de autoridad e historias',
      'Hasta 4 reels editados con subtítulos y ritmo',
      'Adaptación para Instagram, TikTok, Facebook, LinkedIn o YouTube Shorts',
      'Copywriting estratégico para cada publicación',
      'Calendario quincenal y orden de publicación',
      'Diseño de línea visual para el mes',
      'Reporte mensual con reunión y próximos ajustes',
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

export const VIDEO_PACK_4: SubscriptionPlan = {
  id: 'plan-video-pack-4',
  name: 'Edición Pack 4',
  tagline: '4 Reels mensuales listos para publicar',
  idealFor: 'Negocios o creadores que graban su contenido y necesitan 1 video editado por semana.',
  category: 'video',
  setup: 0,
  monthly: 59_990,
  delivery: 'Entrega semanal continua a partir de la recepción del material.',
  badge: 'Entrada video',
  includes: [
    '4 Reels, TikToks o Shorts verticales (9:16)',
    'Cortes de pausas, errores y ritmo dinámico',
    'Subtítulos dinámicos en pantalla',
    'Música en tendencia libre de derechos',
    'Ajustes básicos de audio y color',
    'Portada simple optimizada',
    '1 ronda de cambios menores por video',
  ],
  excludes: [
    'Material bruto superior a 3 minutos por Reel',
    'Grabación presencial o redacción de guiones',
    'Publicación en redes o community management',
    'Motion graphics avanzado o efectos 3D',
  ],
}

export const VIDEO_PACK_8: SubscriptionPlan = {
  id: 'plan-video-pack-8',
  name: 'Edición Pack 8',
  tagline: '8 Reels mensuales (2 por semana)',
  idealFor: 'Marcas y profesionales con ritmo constante de grabación que buscan delegar la edición.',
  category: 'video',
  setup: 0,
  monthly: 109_990,
  delivery: 'Entrega de 2 videos por semana desde la recepción del material.',
  featured: true,
  badge: 'Más pedido',
  includes: [
    '8 Reels, TikToks o Shorts verticales (9:16)',
    'Cortes de pausas, errores y ritmo dinámico',
    'Subtítulos dinámicos con estilo',
    'Música en tendencia libre de derechos',
    'Ajustes básicos de audio y color',
    'Adaptación para Instagram, TikTok y Shorts',
    'Portadas simples para cada video',
    '1 ronda de cambios menores por video',
  ],
  excludes: [
    'Material bruto superior a 3 minutos por Reel',
    'Grabación presencial o guiones',
    'Publicación y gestión de cuenta',
    'Búsqueda de clips en directos o podcasts largos',
  ],
}

export const VIDEO_YOUTUBE_PLAN: SubscriptionPlan = {
  id: 'plan-video-youtube',
  name: 'Video Largo + Reels',
  tagline: '4 reels + 2 videos YouTube/Podcast',
  idealFor: 'Creadores o negocios que producen contenido largo y quieren reciclarlo en vertical.',
  category: 'video',
  setup: 0,
  monthly: 120_000,
  delivery: 'Primera tanda durante la primera semana desde la entrega de brutos.',
  badge: 'YouTube + Redes',
  includes: [
    '4 reels, shorts o TikToks verticales',
    '2 videos largos para YouTube/Podcast (hasta 10-12 min)',
    'Cortes, ritmo, zooms y limpieza de audio',
    'Subtítulos en partes clave',
    'Música y efectos sonoros',
    'Miniaturas/portadas para los videos',
    '1 corrección puntual por video',
  ],
  excludes: [
    'Revisar streams completos de más de 30 minutos',
    'Videos largos sobre 12 minutos',
    'Motion graphics avanzado',
    'Grabación presencial',
  ],
}

export const VIDEO_EDITING_PLAN: SubscriptionPlan = VIDEO_PACK_8

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

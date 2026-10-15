import {
  CRECE_PLAN,
  SOCIAL_MEDIA_PLANS,
  SUBSCRIPTION_PLANS,
  VIDEO_PACK_4,
  VIDEO_PACK_8,
  VIDEO_YOUTUBE_PLAN,
  formatCLP,
  type SubscriptionPlan,
} from '@/lib/subscriptions'
import { WA_LINKS } from '@/lib/site'

export type ServiceCategoryId = 'web' | 'contenido' | 'ads' | 'ia' | 'packs' | 'crecimiento'
export type ServiceFamily = 'unit' | 'pack' | 'system'

export type ServiceCta =
  | {
      kind: 'buy'
      plan: SubscriptionPlan
    }
  | {
      kind: 'quote'
      href: string
      label?: string
    }

export type ServiceItem = {
  id: string
  slug: string
  href: string
  categoryId: ServiceCategoryId
  title: string
  description: string
  headline: string
  problem: string
  priceLabel: string
  billingNote?: string
  includes: readonly string[]
  monthlyIncludes?: readonly string[]
  footnote?: string
  featured?: boolean
  cta: ServiceCta
}

export type ServiceCategory = {
  id: ServiceCategoryId
  family: ServiceFamily
  label: string
  href: string
  title: string
  prompt: string
  subtitle: string
  items: ServiceItem[]
}

export const SERVICE_CATEGORY_IDS: ServiceCategoryId[] = [
  'web',
  'contenido',
  'ads',
  'ia',
  'packs',
  'crecimiento',
]

export const SERVICE_FAMILIES: { id: ServiceFamily; title: string; intro: string }[] = [
  {
    id: 'unit',
    title: 'Por unidad',
    intro: 'Un servicio, un precio de entrada. Lo combinas después si hace falta.',
  },
  {
    id: 'pack',
    title: 'Packs',
    intro: 'Dos piezas que suelen contratarse juntas, con un solo plan.',
  },
  {
    id: 'system',
    title: 'Sistema',
    intro: 'Cuando web, contenido, ads e IA tienen que trabajar conectados.',
  },
]

function buyFromPlan(plan: SubscriptionPlan): ServiceCta {
  return { kind: 'buy', plan }
}

function priceFromPlan(plan: SubscriptionPlan): { priceLabel: string; billingNote: string } {
  if (plan.setup > 0 && plan.monthly > 0) {
    return {
      priceLabel: `${formatCLP(plan.setup)} + IVA`,
      billingNote: `Luego ${formatCLP(plan.monthly)} + IVA / mes`,
    }
  }
  if (plan.setup > 0) {
    return {
      priceLabel: `${formatCLP(plan.setup)} + IVA`,
      billingNote: 'Pago único',
    }
  }
  return {
    priceLabel: `${formatCLP(plan.monthly)} + IVA / mes`,
    billingNote: 'Plan mensual',
  }
}

function quoteFrom(amount: number, billingNote: string) {
  return {
    priceLabel: `Desde ${formatCLP(amount)} + IVA`,
    billingNote,
  }
}

function serviceHref(slug: string) {
  return `/servicios/${slug}`
}

const landingExpress = SUBSCRIPTION_PLANS[0]
const redesEsencial = SOCIAL_MEDIA_PLANS.find((p) => p.id === 'plan-redes-esencial')!
const redesPro = SOCIAL_MEDIA_PLANS.find((p) => p.id === 'plan-redes-pro')!

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'web',
    family: 'unit',
    label: 'Web & Tienda',
    href: '/servicios#web',
    title: 'Web',
    prompt: '¿Necesitas una página o tienda?',
    subtitle: 'La entrada es Landing Express. Separamos sitios corporativos de tiendas online.',
    items: [
      {
        id: landingExpress.id,
        slug: 'landing-express',
        href: serviceHref('landing-express'),
        categoryId: 'web',
        title: landingExpress.name,
        description: landingExpress.tagline,
        headline: 'Tu página profesional, lista para recibir clientes.',
        problem:
          'Si no hay un lugar simple donde explicar la oferta y pedir contacto, cada anuncio se pierde.',
        ...priceFromPlan(landingExpress),
        includes: landingExpress.includes,
        monthlyIncludes: landingExpress.monthlyIncludes,
        footnote: landingExpress.footnote,
        featured: true,
        cta: buyFromPlan(landingExpress),
      },
      {
        id: 'sitio-web',
        slug: 'sitio-web',
        href: serviceHref('sitio-web'),
        categoryId: 'web',
        title: 'Web Corporativa',
        description: 'Sitio institucional con múltiples páginas, estructura y analítica.',
        headline: 'Cuando una sola página ya no alcanza para mostrar tu empresa.',
        problem:
          'El negocio creció: necesitas servicios, equipo, casos de éxito y rutas claras de contacto.',
        ...quoteFrom(349_990, 'Pago único o setup + cuotas'),
        includes: ['Arquitectura de contenidos', 'Hasta 8-10 páginas', 'Diseño responsive', 'SEO on-page base', 'Publicación y capacitación'],
        cta: { kind: 'quote', href: WA_LINKS.web, label: 'Cotizar web corporativa' },
      },
      {
        id: 'ecommerce',
        slug: 'ecommerce',
        href: serviceHref('ecommerce'),
        categoryId: 'web',
        title: 'Tienda eCommerce',
        description: 'Ventas online con Shopify, WooCommerce o Jumpseller.',
        headline: 'Vende tus productos 24/7 con pagos y envíos automatizados.',
        problem: 'Gestionar ventas por mensaje manual colapsa la operación y no escala.',
        ...quoteFrom(489_990, 'Pago único o implementación según catálogo'),
        includes: ['Configuración de tienda', 'Pasarelas de pago (Webpay, MercadoPago)', 'Integración de despachos', 'Carga inicial de productos', 'Capacitación'],
        cta: { kind: 'quote', href: WA_LINKS.web, label: 'Cotizar tienda eCommerce' },
      },
      {
        id: 'optimizacion-web',
        slug: 'optimizacion-web',
        href: serviceHref('optimizacion-web'),
        categoryId: 'web',
        title: 'Optimización Web & Analítica',
        description: 'Velocidad, medición (GA4/GTM/Pixel) y conversión para tu web actual.',
        headline: 'Puesta a punto técnica para que tu web cargue rápido y mida cada contacto.',
        problem: 'Tu sitio existe, pero carga lento, no sabes si los anuncios funcionan o no convierte visitas en clientes.',
        ...quoteFrom(180_000, 'Pago único · Sprint 5–7 días (Setup analítica base desde $89.990)'),
        includes: [
          'Optimización de velocidad y Core Web Vitals (móvil y desktop)',
          'Setup GA4 + Google Tag Manager + Meta Pixel / API Conversiones',
          'Tracking de eventos (clics a WhatsApp, envíos de formulario)',
          'Mejoras de conversión (CTAs móviles y botón flotante)',
          'SEO técnico, sitemap XML y Google Search Console',
        ],
        cta: { kind: 'quote', href: WA_LINKS.mantencion, label: 'Cotizar optimización' },
      },
      {
        id: 'funnels',
        slug: 'funnels',
        href: serviceHref('funnels'),
        categoryId: 'web',
        title: 'Funnel de conversión',
        description: 'Secuencia de páginas, captura y seguimiento para no perder el lead.',
        headline: 'De la visita al WhatsApp o al pago, con un camino claro.',
        problem: 'Tienes tráfico, pero el contacto se cae entre el anuncio, la web y el chat.',
        ...quoteFrom(220_000, 'Pago único · según pasos del funnel'),
        includes: [
          'Mapa del funnel',
          'Landing o páginas de paso',
          'Formulario o WhatsApp',
          'Eventos de medición',
        ],
        cta: { kind: 'quote', href: WA_LINKS.funnels, label: 'Cotizar funnel' },
      },
      {
        id: 'mantencion-web',
        slug: 'mantencion-web',
        href: serviceHref('mantencion-web'),
        categoryId: 'web',
        title: 'Mantención & Soporte Web',
        description: 'Continuidad técnica, hosting, backups y cambios de contenido mensuales.',
        headline: 'Hosting, seguridad y horas de cambios para que tu web no quede abandonada.',
        problem: 'Sin mantención técnica el sitio envejece, se rompe, o pierdes horas intentando cambiar fotos y precios tú mismo.',
        ...quoteFrom(9_990, 'Mensual · Base $9.990 · Activa $49.990 · eCommerce $89.990'),
        includes: [
          'Hosting de alta velocidad + Certificado SSL',
          'Backups automáticos y actualizaciones de seguridad',
          'Horas de cambios mensuales (fotos, textos, banners y productos)',
          'Monitoreo de caídas y soporte prioritario WhatsApp',
        ],
        cta: { kind: 'quote', href: WA_LINKS.hosting, label: 'Cotizar mantención' },
      },
    ],
  },
  {
    id: 'contenido',
    family: 'unit',
    label: 'Contenido & Video',
    href: '/servicios#contenido',
    title: 'Contenido & Video',
    prompt: '¿Necesitas contenido o edición?',
    subtitle: 'Edición de Reels desde $59.990. Gestión de redes desde $89.990 al mes.',
    items: [
      {
        id: VIDEO_PACK_8.id,
        slug: 'edicion-reels-8',
        href: serviceHref('edicion-reels-8'),
        categoryId: 'contenido',
        title: VIDEO_PACK_8.name,
        description: VIDEO_PACK_8.tagline,
        headline: 'Tú grabas. Nosotros editamos 8 Reels al mes.',
        problem: 'Sabes qué decir y grabas con tu celular, pero no tienes tiempo de editar.',
        ...priceFromPlan(VIDEO_PACK_8),
        includes: VIDEO_PACK_8.includes,
        featured: true,
        cta: buyFromPlan(VIDEO_PACK_8),
      },
      {
        id: VIDEO_PACK_4.id,
        slug: 'edicion-reels-4',
        href: serviceHref('edicion-reels-4'),
        categoryId: 'contenido',
        title: VIDEO_PACK_4.name,
        description: VIDEO_PACK_4.tagline,
        headline: '4 Reels editados al mes, 1 por semana.',
        problem: 'Para empezar a publicar con consistencia sin pagar una gestión completa.',
        ...priceFromPlan(VIDEO_PACK_4),
        includes: VIDEO_PACK_4.includes,
        cta: buyFromPlan(VIDEO_PACK_4),
      },
      {
        id: redesEsencial.id,
        slug: 'redes-esencial',
        href: serviceHref('redes-esencial'),
        categoryId: 'contenido',
        title: redesEsencial.name,
        description: redesEsencial.tagline,
        headline: '8 contenidos al mes (2 por semana), sin improvisar.',
        problem: 'Si publicas a ratos, las redes no traen consultas. Nos encargamos de diseñar, redactar y publicar.',
        ...priceFromPlan(redesEsencial),
        includes: redesEsencial.includes,
        cta: buyFromPlan(redesEsencial),
      },
      {
        id: redesPro.id,
        slug: 'redes-pro',
        href: serviceHref('redes-pro'),
        categoryId: 'contenido',
        title: redesPro.name,
        description: redesPro.tagline,
        headline: '12 contenidos al mes (3 por semana) con estrategia y 4 reels.',
        problem: 'El plan esencial se queda corto cuando hay que publicar más seguido y abarcar múltiples redes.',
        ...priceFromPlan(redesPro),
        includes: redesPro.includes,
        cta: buyFromPlan(redesPro),
      },
      {
        id: VIDEO_YOUTUBE_PLAN.id,
        slug: 'video-mensual',
        href: serviceHref('video-mensual'),
        categoryId: 'contenido',
        title: VIDEO_YOUTUBE_PLAN.name,
        description: VIDEO_YOUTUBE_PLAN.tagline,
        headline: 'Video largo para YouTube o Podcast + recortes en Reels.',
        problem: 'Generas videos largos o entrevistas pero nadie los edita ni los recicla en formato vertical.',
        ...priceFromPlan(VIDEO_YOUTUBE_PLAN),
        includes: VIDEO_YOUTUBE_PLAN.includes,
        cta: buyFromPlan(VIDEO_YOUTUBE_PLAN),
      },
      {
        id: 'branding',
        slug: 'branding',
        href: serviceHref('branding'),
        categoryId: 'contenido',
        title: 'Branding & Identidad',
        description: 'Identidad visual para que tu marca se reconozca y genere confianza.',
        headline: 'Criterio visual profesional, no piezas sueltas.',
        problem: 'Cada pieza se ve distinta y la marca no transmite la solidez de tu servicio.',
        ...quoteFrom(260_000, 'Pago único · identidad visual, versiones y manual'),
        includes: ['Logotipo y versiones', 'Paleta y tipografías', 'Mini manual de uso', 'Archivos finales'],
        cta: { kind: 'quote', href: WA_LINKS.branding, label: 'Cotizar branding' },
      },
    ],
  },
  {
    id: 'ads',
    family: 'unit',
    label: 'Ads',
    href: '/servicios#ads',
    title: 'Ads',
    prompt: '¿Necesitas publicidad?',
    subtitle: 'Gestión con precio de entrada. La inversión en medios es aparte.',
    items: [
      {
        id: 'meta-ads',
        slug: 'meta-ads',
        href: serviceHref('meta-ads'),
        categoryId: 'ads',
        title: 'Meta Ads',
        description: 'Facebook e Instagram orientados a consultas y ventas.',
        headline: 'Pauta en Meta, con medición.',
        problem: 'El orgánico no alcanza: falta audiencia, creatividad y seguimiento.',
        ...quoteFrom(190_000, 'Mensual · pauta aparte · hasta $1.5M de inversión'),
        includes: ['Estrategia y audiencias', 'Creatividades', 'Optimización y reporte'],
        featured: true,
        cta: { kind: 'quote', href: WA_LINKS.metaAds, label: 'Cotizar Meta Ads' },
      },
      {
        id: 'google-ads',
        slug: 'google-ads',
        href: serviceHref('google-ads'),
        categoryId: 'ads',
        title: 'Google Ads',
        description: 'Búsqueda y performance cuando ya te buscan.',
        headline: 'Aparece en el momento de la intención.',
        problem: 'Sin campañas estructuradas, esa búsqueda se la lleva otro.',
        ...quoteFrom(190_000, 'Mensual · pauta aparte · hasta $1.5M de inversión'),
        includes: ['Keywords y estructura', 'Tracking de conversiones', 'Reportería'],
        cta: { kind: 'quote', href: WA_LINKS.googleAds, label: 'Cotizar Google Ads' },
      },
      {
        id: 'seo',
        slug: 'seo',
        href: serviceHref('seo'),
        categoryId: 'ads',
        title: 'SEO',
        description: 'Tráfico orgánico para no depender solo de la pauta.',
        headline: 'Un activo que no se apaga al cortar ads.',
        problem: 'Cada mes empiezas de cero si solo pagas pauta.',
        ...quoteFrom(149_990, 'Mensual · auditoría técnica y contenidos'),
        includes: ['Auditoría técnica', 'On-page y contenidos', 'Seguimiento'],
        cta: { kind: 'quote', href: WA_LINKS.seo, label: 'Cotizar SEO' },
      },
      {
        id: 'plan-medios',
        slug: 'plan-medios',
        href: serviceHref('plan-medios'),
        categoryId: 'ads',
        title: 'Plan de medios',
        description: 'Meta, Google u otras: un ciclo mensual con KPIs.',
        headline: 'Medios con plan, no campañas sueltas.',
        problem: 'Sin tracking ni ciclo, la pauta es gasto sin aprendizaje.',
        ...quoteFrom(280_000, 'Mensual · Meta + Google Ads estructurados'),
        includes: ['Plan y KPIs', 'GTM / GA4 / píxeles', 'Optimización y reporte'],
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar propuesta' },
      },
    ],
  },
  {
    id: 'ia',
    family: 'unit',
    label: 'IA',
    href: '/servicios#ia',
    title: 'IA',
    prompt: '¿Necesitas IA o automatizar?',
    subtitle: 'Usamos IA en el trabajo diario y armamos proyectos a medida. El alcance lo definimos contigo.',
    items: [
      {
        id: 'ia-whatsapp',
        slug: 'ia-whatsapp',
        href: serviceHref('ia-whatsapp'),
        categoryId: 'ia',
        title: 'Agente de Calificación y Ventas WhatsApp',
        description: 'Clasificación de prospectos, respuestas inteligentes y seguimiento en WhatsApp 24/7.',
        headline: 'Atiende y califica clientes en piloto automático con el criterio de tu negocio.',
        problem: 'Se pierden prospectos por tardar horas en contestar o por atender consultas no calificadas.',
        ...quoteFrom(280_000, 'Setup profesional · operación según flujo'),
        includes: [
          'Diagnóstico del flujo comercial',
          'Agente con instrucciones y contexto del negocio',
          'Integración WhatsApp Business / API',
          'Handoff inteligente a ejecutivo humano',
          'Ajustes y entrenamiento inicial',
        ],
        featured: true,
        cta: { kind: 'quote', href: WA_LINKS.automatizacionIa, label: 'Evaluar IA en WhatsApp' },
      },
      {
        id: 'automatizaciones-ia',
        slug: 'automatizaciones-ia',
        href: serviceHref('automatizaciones-ia'),
        categoryId: 'ia',
        title: 'Automatizaciones',
        description: 'Procesos repetitivos: formularios, CRM, avisos, reportes.',
        headline: 'Que la operación no dependa de copiar y pegar.',
        problem: 'El equipo pierde horas en tareas que una integración puede hacer.',
        ...quoteFrom(240_000, 'Pago único o setup + mensual, según proceso'),
        includes: ['Diagnóstico de procesos', 'Integraciones', 'Prueba controlada', 'Documentación simple'],
        cta: { kind: 'quote', href: WA_LINKS.automatizacion, label: 'Evaluar automatización' },
      },
      {
        id: 'proyecto-ia',
        slug: 'proyecto-ia',
        href: serviceHref('proyecto-ia'),
        categoryId: 'ia',
        title: 'Proyecto con IA',
        description: 'Herramientas, agentes o productos internos. El abanico es amplio: lo acotamos en diagnóstico.',
        headline: 'IA aplicada a tu caso, no un pack genérico.',
        problem: 'Hay una oportunidad con IA, pero no un producto de catálogo que calce.',
        priceLabel: 'Cotizar',
        billingNote: 'Diagnóstico primero · alcance y precio después',
        includes: [
          'Caso de uso y límites',
          'Prototipo o implementación',
          'Datos y criterios de negocio',
          'Entrega usable, no una demo suelta',
        ],
        cta: { kind: 'quote', href: WA_LINKS.automatizacionIa, label: 'Proponer un proyecto IA' },
      },
    ],
  },
  {
    id: 'packs',
    family: 'pack',
    label: 'Packs',
    href: '/servicios#packs',
    title: 'Packs',
    prompt: '¿Quieres un pack listo?',
    subtitle: 'Landing + redes en un solo plan. Entrada web $74.990, contenido desde el piso de Redes Esencial.',
    items: [
      {
        id: CRECE_PLAN.id,
        slug: 'landing-redes',
        href: serviceHref('landing-redes'),
        categoryId: 'packs',
        title: CRECE_PLAN.name,
        description: CRECE_PLAN.tagline,
        headline: 'Página de entrada + contenido mensual, juntos.',
        problem: 'Web sin contenido, o contenido sin destino, deja el embudo a medias.',
        ...priceFromPlan(CRECE_PLAN),
        includes: CRECE_PLAN.includes,
        featured: true,
        cta: buyFromPlan(CRECE_PLAN),
      },
    ],
  },
  {
    id: 'crecimiento',
    family: 'system',
    label: 'Sistema',
    href: '/servicios#crecimiento',
    title: 'Sistema',
    prompt: '¿Necesitas que todo trabaje junto?',
    subtitle: 'Diseñamos e implementamos el sistema: web, contenido, ads, medición e IA.',
    items: [
      {
        id: 'sistema-crecimiento',
        slug: 'sistema-crecimiento',
        href: serviceHref('sistema-crecimiento'),
        categoryId: 'crecimiento',
        title: 'Sistema de Crecimiento',
        description: 'Arquitectura e implementación conectada, a la medida del negocio.',
        headline: 'Piezas que se hablan entre sí.',
        problem: 'Contratar web, ads y herramientas por separado suele dejar un sistema roto.',
        priceLabel: 'Cotizar',
        billingNote: 'Diagnóstico · propuesta según alcance',
        includes: [
          'Diagnóstico de negocio',
          'Arquitectura del sistema',
          'Implementación conectada',
          'Medición y mejora',
        ],
        featured: true,
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar diagnóstico' },
      },
      {
        id: 'proyecto-estrategico',
        slug: 'proyecto-estrategico',
        href: serviceHref('proyecto-estrategico'),
        categoryId: 'crecimiento',
        title: 'Proyecto multi-marca',
        description: 'Varias marcas o funnels, una dirección.',
        headline: 'Sin duplicar esfuerzo ni mezclar el mensaje.',
        problem: 'Más de una marca o funnel, sin un criterio común.',
        priceLabel: 'Cotizar',
        billingNote: 'Propuesta a medida',
        includes: ['Diagnóstico por marca', 'Plan de medios', 'Web y conversión', 'Reportería'],
        cta: { kind: 'quote', href: WA_LINKS.reunion, label: 'Agendar reunión' },
      },
    ],
  },
]

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.items)

export const FEATURED_SERVICES: ServiceItem[] = ALL_SERVICES.filter((s) => s.featured)

export const HOME_SERVICE_CATEGORIES: ServiceCategory[] = SERVICE_CATEGORIES.filter(
  (c) => c.id !== 'packs',
)

export function getServiceCategory(id: ServiceCategoryId): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.id === id)
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug)
}

export function isServiceCategoryId(value: string): value is ServiceCategoryId {
  return (SERVICE_CATEGORY_IDS as string[]).includes(value)
}

export const SERVICE_HUB = {
  label: 'Servicios',
  title: '¿Qué necesitas ahora?',
  subtitle:
    'Por unidad, en pack, o como sistema. Si no estás seguro, agenda 15 minutos y te orientamos.',
} as const

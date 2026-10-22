import { SERVICE_CONDITIONS, CUSTOM_CONDITIONS } from './service-conditions'
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

export type ServiceCategoryId = 'web' | 'contenido' | 'marca' | 'ads' | 'ia' | 'packs' | 'crecimiento'
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

export type ServicePreviewImage = {
  src: string
  alt: string
  caption?: string
  tag?: string
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
  savingsNote?: string
  badge?: string
  previewImage?: ServicePreviewImage
  includes: readonly string[]
  monthlyIncludes?: readonly string[]
  footnote?: string
  conditions?: import('./service-conditions').CommercialConditions
  featured?: boolean
  relatedSlugs?: readonly string[]
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
  startingPriceLabel?: string
  items: ServiceItem[]
}

export const SERVICE_CATEGORY_IDS: ServiceCategoryId[] = [
  'web',
  'contenido',
  'marca',
  'ads',
  'ia',
  'packs',
  'crecimiento',
]

export const SERVICE_FAMILIES: { id: ServiceFamily; title: string; intro: string }[] = [
  {
    id: 'pack',
    title: 'Soluciones combinadas',
    intro: 'Servicios coordinados para una necesidad concreta, con alcance definido.',
  },
  {
    id: 'unit',
    title: 'Servicios para tu negocio',
    intro: 'Un servicio específico para la necesidad puntual de tu negocio hoy.',
  },
  {
    id: 'system',
    title: 'Sistema completo',
    intro: 'Cuando web, contenido, ads e IA tienen que trabajar conectados.',
  },
]

function buyFromPlan(plan: SubscriptionPlan): ServiceCta {
  return { kind: 'buy', plan }
}

function priceFromPlan(plan: SubscriptionPlan): {
  priceLabel: string
  billingNote: string
  footnote?: string
} {
  const base = plan.footnote ? { footnote: plan.footnote } : {}
  if (plan.setup > 0 && plan.monthly > 0) {
    return {
      priceLabel: `${formatCLP(plan.setup)} + IVA`,
      billingNote: `Luego ${formatCLP(plan.monthly)} + IVA / mes`,
      ...base,
    }
  }
  if (plan.setup > 0) {
    return {
      priceLabel: `${formatCLP(plan.setup)} + IVA`,
      billingNote: 'Pago único',
      ...base,
    }
  }
  return {
    priceLabel: `${formatCLP(plan.monthly)} + IVA / mes`,
    billingNote: 'Plan mensual',
    ...base,
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

const BASE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'web',
    family: 'unit',
    label: 'Páginas web y tiendas',
    href: '/servicios#web',
    title: 'Páginas web y tiendas',
    prompt: '¿Necesitas una página o tienda?',
    subtitle: 'Una página para empezar, un sitio para tu empresa o una tienda para vender. También rediseño y migración.',
    startingPriceLabel: 'Desde $74.990 + IVA',
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
        previewImage: {
          src: '/images/casos/quiral.png',
          alt: 'Página web Express diseñada por Artestudio',
          tag: 'Caso Real · quiralproyectos.cl',
          caption: 'Diseño responsive de una sola página, estética editorial boutique, optimización para móviles y botón directo a WhatsApp.',
        },
        relatedSlugs: ['correo-corporativo', 'edicion-reels-4', 'meta-ads', 'pack-lanzamiento'],
        cta: buyFromPlan(landingExpress),
      },
      {
        id: 'sitio-web',
        slug: 'sitio-web',
        href: serviceHref('sitio-web'),
        categoryId: 'web',
        title: 'Sitio web corporativo',
        description: 'Sitio institucional con múltiples páginas, estructura y analítica.',
        headline: 'Cuando una sola página ya no alcanza para mostrar tu empresa.',
        problem:
          'El negocio creció: necesitas servicios, equipo, casos de éxito y rutas claras de contacto.',
        ...quoteFrom(349_990, 'Pago único o setup + cuotas'),
        includes: ['Arquitectura de contenidos', 'Hasta 8 páginas', 'Diseño responsive', 'SEO on-page base', 'Publicación y capacitación'],
        previewImage: {
          src: '/images/casos/tradicional360.png',
          alt: 'Sitio Web Corporativo diseñado por Artestudio',
          tag: 'Caso Real · tradicional360.cl',
          caption: 'Sitio multi-página estructurado con arquitectura de contenidos institucional, páginas de servicios y capturas de prospectos.',
        },
        relatedSlugs: ['correo-corporativo', 'dossier-comercial', 'optimizacion-web', 'pack-autoridad'],
        cta: { kind: 'quote', href: WA_LINKS.web, label: 'Cotizar web corporativa' },
      },
      {
        id: 'ecommerce',
        slug: 'ecommerce',
        href: serviceHref('ecommerce'),
        categoryId: 'web',
        title: 'Tienda online',
        description: 'Ventas online con Shopify, WooCommerce o Jumpseller.',
        headline: 'Vende tus productos 24/7 con pagos y envíos automatizados.',
        problem: 'Gestionar ventas por mensaje manual colapsa la operación y no escala.',
        ...quoteFrom(489_990, 'Pago único o implementación según catálogo'),
        includes: ['Configuración de tienda', 'Pasarelas de pago (Webpay, MercadoPago)', 'Integración de despachos', 'Carga inicial de hasta 20 productos simples', 'Capacitación'],
        previewImage: {
          src: '/images/services/desarrollo-web.png',
          alt: 'Tienda online eCommerce por Artestudio',
          tag: 'Shopify / Jumpseller / WooCommerce',
          caption: 'Catálogo de productos sincronizado, pasarela Webpay/Mercado Pago y flujo de checkout automatizado 24/7.',
        },
        relatedSlugs: ['meta-ads', 'optimizacion-web', 'ia-whatsapp'],
        cta: { kind: 'quote', href: WA_LINKS.web, label: 'Cotizar tienda eCommerce' },
      },
      {
        id: 'optimizacion-web',
        slug: 'optimizacion-web',
        href: serviceHref('optimizacion-web'),
        categoryId: 'web',
        title: 'Optimización web y medición',
        description: 'Velocidad, medición (GA4/GTM/Pixel) y conversión para tu web actual.',
        headline: 'Puesta a punto técnica para que tu web cargue rápido y mida cada contacto.',
        problem: 'Tu sitio existe, pero carga lento, no sabes si los anuncios funcionan o no convierte visitas en clientes.',
        ...quoteFrom(180_000, 'Pago único · sprint de 5–7 días hábiles · alcance según diagnóstico'),
        includes: [
          'Optimización de velocidad y Core Web Vitals (móvil y desktop)',
          'Configuración GA4 + Google Tag Manager; Meta Pixel según alcance',
          'Tracking de eventos (clics a WhatsApp, envíos de formulario)',
          'Mejoras de conversión (CTAs móviles y botón flotante)',
          'SEO técnico, sitemap XML y Google Search Console',
        ],
        previewImage: {
          src: '/images/services/actualizaciones-web.png',
          alt: 'Optimización Web y Analítica por Artestudio',
          tag: 'Velocidad & Tracking GA4',
          caption: 'Puesta a punto de Core Web Vitals, medición precisa de conversiones y eventos configurados en Google Tag Manager.',
        },
        relatedSlugs: ['sitio-web', 'meta-ads', 'google-ads'],
        cta: { kind: 'quote', href: WA_LINKS.mantencion, label: 'Cotizar optimización' },
      },
      {
        id: 'funnels',
        slug: 'funnels',
        href: serviceHref('funnels'),
        categoryId: 'web',
        title: 'Embudo de captación',
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
        previewImage: {
          src: '/images/casos/tradicional360.png',
          alt: 'Embudo de conversión por Artestudio',
          tag: 'Funnel Paso a Paso',
          caption: 'Secuencia interactiva de captura, calificación y derivación a WhatsApp o pasarela de pago sin fricciones.',
        },
        relatedSlugs: ['quiz-calificador', 'meta-ads', 'ia-whatsapp'],
        cta: { kind: 'quote', href: WA_LINKS.funnels, label: 'Cotizar funnel' },
      },
      {
        id: 'correo-corporativo',
        slug: 'correo-corporativo',
        href: serviceHref('correo-corporativo'),
        categoryId: 'web',
        title: 'Configuración de correo corporativo',
        description: 'Cuentas @tuempresa.cl en Google Workspace o Microsoft 365 con DNS antifraude.',
        headline: 'Tu correo con el dominio de tu empresa y autenticación correctamente configurada.',
        problem: 'Los correos gratuitos generan desconfianza y los servidores básicos terminan bloqueados por los filtros de correo.',
        ...quoteFrom(69_990, 'Pago único · hasta 5 cuentas (suscripción Workspace aparte)'),
        includes: [
          'Configuración de dominio en Google Workspace o Microsoft 365',
          'Creación de buzones y alias corporativos (@tuempresa.cl)',
          'Autenticación DNS: SPF, DKIM y DMARC',
          'Plantilla de firma digital corporativa unificada',
          'Sincronización en computadores (Outlook/Gmail) y celulares',
        ],
        previewImage: {
          src: '/images/services/actualizaciones-web.png',
          alt: 'Setup de Correo Corporativo y Google Workspace',
          tag: 'Google Workspace / Microsoft 365',
          caption: 'Autenticación SPF, DKIM y DMARC verificada para mejorar la autenticación y entregabilidad.',
        },
        relatedSlugs: ['landing-express', 'sitio-web', 'dossier-comercial'],
        cta: { kind: 'quote', href: WA_LINKS.correo, label: 'Cotizar Correo Corporativo' },
      },
      {
        id: 'quiz-calificador',
        slug: 'quiz-calificador',
        href: serviceHref('quiz-calificador'),
        categoryId: 'web',
        title: 'Formulario de diagnóstico y calificación',
        description: 'Embudo interactivo de 4 a 6 preguntas con radar o diagnóstico que filtra prospectos antes de la reunión.',
        headline: 'Califica consultas por presupuesto, necesidad y plazo antes de una reunión.',
        problem: 'Tu equipo pierde horas en reuniones con curiosos o prospectos que no son tu cliente ideal.',
        ...quoteFrom(220_000, 'Pago único · diseño interactivo y enrutamiento'),
        includes: [
          'Diseño interactivo tipo radar o etapas (como Tradicional360 o Método Construye)',
          '4 a 6 preguntas estratégicas de filtro comercial',
          'Cálculo de resultado y diagnóstico personalizado en tiempo real',
          'Enrutamiento a WhatsApp o CRM con mensaje y datos precargados',
          'Integración de analítica y eventos de conversión',
        ],
        previewImage: {
          src: '/images/casos/tradicional360.png',
          alt: 'Quiz interactivo calificador de prospectos',
          tag: 'Calificador Interactivo',
          caption: 'Filtro previo que diagnostica al cliente y lo deriva a tu equipo comercial con sus datos y presupuesto ya ordenados.',
        },
        relatedSlugs: ['landing-express', 'sitio-web', 'meta-ads', 'sistema-crecimiento'],
        cta: { kind: 'quote', href: WA_LINKS.quiz, label: 'Cotizar Quiz Calificador' },
      },
      {
        id: 'mantencion-web',
        slug: 'mantencion-web',
        href: serviceHref('mantencion-web'),
        categoryId: 'web',
        title: 'Soporte y mantención web',
        description: 'Hosting, respaldos, mantención técnica y soporte; productos, catálogo y contenido se cotizan aparte.',
        headline: 'Mantén tu web disponible y recibe apoyo técnico cuando lo necesites.',
        problem: 'Sin mantención técnica el sitio puede acumular errores, quedar desactualizado o volverse vulnerable.',
        ...quoteFrom(5_990, 'Mensual · planes de hosting y soporte técnico más abajo'),
        includes: [
          'Hosting + certificado SSL',
          'Respaldo semanal y mantención técnica básica',
          'Ajustes técnicos menores según el nivel contratado',
          'Soporte en horario hábil, según el nivel contratado',
        ],
        previewImage: {
          src: '/images/services/actualizaciones-web.png',
          alt: 'Mantención y soporte técnico web por Artestudio',
          tag: 'Continuidad Técnica & Hosting',
          caption: 'Hosting, respaldos semanales y soporte técnico según el nivel contratado.',
        },
        relatedSlugs: ['sitio-web', 'correo-corporativo'],
        cta: { kind: 'quote', href: WA_LINKS.hosting, label: 'Cotizar mantención' },
      },
    ],
  },
  {
    id: 'contenido',
    family: 'unit',
    label: 'Contenido y redes sociales',
    href: '/servicios#contenido',
    title: 'Contenido y redes sociales',
    prompt: '¿Necesitas contenido o edición?',
    subtitle: 'Edición de Reels desde $59.990. Gestión de redes desde $89.990 al mes.',
    startingPriceLabel: 'Desde $59.990 + IVA / mes',
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
        badge: VIDEO_PACK_8.badge,
        includes: VIDEO_PACK_8.includes,
        footnote: VIDEO_PACK_8.footnote,
        featured: true,
        previewImage: {
          src: '/images/services/edicion-video.png',
          alt: 'Edición de Reels y video vertical por Artestudio',
          tag: '8 Reels Mensuales · 9:16',
          caption: 'Edición dinámica con subtítulos animados, ganchos de retención y música en tendencia para Instagram y TikTok.',
        },
        relatedSlugs: ['meta-ads', 'landing-express', 'dossier-comercial'],
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
        footnote: VIDEO_PACK_4.footnote,
        previewImage: {
          src: '/images/services/edicion-video.png',
          alt: 'Edición de Reels Pack 4 por Artestudio',
          tag: '4 Reels Mensuales · 1 por Semana',
          caption: '1 reel semanal editado con ganchos, subtítulos y ritmo optimizado para mantener presencia constante.',
        },
        relatedSlugs: ['meta-ads', 'landing-express'],
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
        previewImage: {
          src: '/images/services/redes-sociales.png',
          alt: 'Gestión de Redes Esencial por Artestudio',
          tag: '8 Contenidos Mensuales',
          caption: 'Diseño gráfico editorial, carruseles educativos y redacción estratégica con publicación programada.',
        },
        relatedSlugs: ['landing-express', 'edicion-reels-4', 'meta-ads'],
        cta: buyFromPlan(redesEsencial),
      },
      {
        id: redesPro.id,
        slug: 'redes-pro',
        href: serviceHref('redes-pro'),
        categoryId: 'contenido',
        title: redesPro.name,
        description: redesPro.tagline,
        headline: '12 contenidos mensuales con estrategia (incluye hasta 4 reels).',
        problem: 'El plan esencial se queda corto cuando hay que publicar más seguido y abarcar múltiples redes.',
        ...priceFromPlan(redesPro),
        includes: redesPro.includes,
        previewImage: {
          src: '/images/services/redes-sociales.png',
          alt: 'Gestión de Redes Pro por Artestudio',
          tag: '12 Contenidos (inc. 4 Reels)',
          caption: 'Estrategia integral multiplataforma: 12 contenidos al mes que incluyen hasta 4 reels con subtítulos y ritmo.',
        },
        relatedSlugs: ['meta-ads', 'sitio-web', 'ia-whatsapp'],
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
        previewImage: {
          src: '/images/services/edicion-video.png',
          alt: 'Edición de video largo para YouTube y Podcast',
          tag: 'YouTube + Podcast + Reels',
          caption: 'Edición horizontal y clips verticales; cámaras, duración y material se revisan antes de cotizar.',
        },
        relatedSlugs: ['edicion-reels-8', 'branding'],
        cta: buyFromPlan(VIDEO_YOUTUBE_PLAN),
      },
      {
        id: 'branding',
        slug: 'branding',
        href: serviceHref('branding'),
        categoryId: 'contenido',
        title: 'Identidad visual de marca',
        description: 'Identidad visual para que tu marca se reconozca y genere confianza.',
        headline: 'Criterio visual profesional, no piezas sueltas.',
        problem: 'Cada pieza se ve distinta y la marca no transmite la solidez de tu servicio.',
        ...quoteFrom(260_000, 'Pago único · identidad visual, versiones y manual'),
        includes: ['Logotipo y versiones', 'Paleta y tipografías', 'Mini manual de uso', 'Archivos finales'],
        previewImage: {
          src: '/images/services/branding-identidad.png',
          alt: 'Identidad visual y branding por Artestudio',
          tag: 'Sistema de Marca & Guía de Estilo',
          caption: 'Logotipo en todas sus versiones vectoriales, paleta cromática, fuentes tipográficas y manual de uso.',
        },
        relatedSlugs: ['sitio-web', 'dossier-comercial', 'pack-autoridad'],
        cta: { kind: 'quote', href: WA_LINKS.branding, label: 'Cotizar branding' },
      },
      {
        id: 'dossier-comercial',
        slug: 'dossier-comercial',
        href: serviceHref('dossier-comercial'),
        categoryId: 'contenido',
        title: 'Presentación comercial',
        description: 'Presentación corporativa interactiva en PDF (10 diapositivas) con la identidad de tu marca y botones directos a WhatsApp.',
        headline: 'Tus propuestas comerciales al nivel de una empresa de primer nivel.',
        problem: 'Tu oferta necesita una estructura clara y una presentación consistente con tu marca.',
        ...quoteFrom(149_990, 'Pago único · 10 diapositivas interactivas'),
        includes: [
          'Estructura comercial: Problema, Solución, Metodología, Casos y Tarifas',
          'Diseño editorial alineado a la identidad de tu marca',
          'Botones interactivos directos a WhatsApp, llamada o web',
          'Formato PDF liviano optimizado para envío por chat o correo',
          'Archivos editables o reutilizables para futuras cotizaciones',
        ],
        previewImage: {
          src: '/images/services/diseno-grafico.png',
          alt: 'Dossier Comercial B2B por Artestudio',
          tag: 'Presentación B2B Interactiva',
          caption: 'Documento comercial interactivo de 10 a 12 láminas con botones de contacto, casos y estructura persuasiva.',
        },
        relatedSlugs: ['branding', 'sitio-web', 'pack-autoridad'],
        cta: { kind: 'quote', href: WA_LINKS.dossier, label: 'Cotizar Dossier Comercial' },
      },
    ],
  },
  {
    id: 'ads',
    family: 'unit',
    label: 'Publicidad y posicionamiento',
    href: '/servicios#ads',
    title: 'Publicidad y posicionamiento',
    prompt: '¿Necesitas publicidad?',
    subtitle: 'Gestión con precio de entrada. La inversión en medios es aparte.',
    items: [
      {
        id: 'meta-ads',
        slug: 'meta-ads',
        href: serviceHref('meta-ads'),
        categoryId: 'ads',
        title: 'Gestión de Instagram y Facebook Ads',
        description: 'Facebook e Instagram orientados a consultas y ventas.',
        headline: 'Pauta en Meta, con medición.',
        problem: 'El orgánico no alcanza: falta audiencia, creatividad y seguimiento.',
        ...quoteFrom(190_000, 'Mensual · pauta aparte · hasta $1.5M de inversión'),
        includes: ['Estrategia y audiencias', 'Creatividades', 'Optimización y reporte'],
        featured: true,
        previewImage: {
          src: '/images/hero-clientes-online.png',
          alt: 'Campañas de Meta Ads por Artestudio',
          tag: 'Meta Ads · Instagram & Facebook',
          caption: 'Estructura de campañas segmentadas por dolor e intención de compra, con creatividades probadas y medición de conversiones.',
        },
        relatedSlugs: ['landing-express', 'quiz-calificador', 'edicion-reels-8'],
        cta: { kind: 'quote', href: WA_LINKS.metaAds, label: 'Cotizar Meta Ads' },
      },
      {
        id: 'google-ads',
        slug: 'google-ads',
        href: serviceHref('google-ads'),
        categoryId: 'ads',
        title: 'Gestión de Google Ads',
        description: 'Búsqueda y performance cuando ya te buscan.',
        headline: 'Aparece en el momento de la intención.',
        problem: 'Sin campañas estructuradas, esa búsqueda se la lleva otro.',
        ...quoteFrom(190_000, 'Mensual · pauta aparte · hasta $1.5M de inversión'),
        includes: ['Keywords y estructura', 'Tracking de conversiones', 'Reportería'],
        previewImage: {
          src: '/images/hero-clientes-online.png',
          alt: 'Campañas de Google Ads por Artestudio',
          tag: 'Google Ads · Búsqueda con Intención',
          caption: 'Campañas en la red de búsqueda optimizadas para aparecer cuando el cliente está buscando activamente tu servicio.',
        },
        relatedSlugs: ['landing-express', 'optimizacion-web', 'plan-medios'],
        cta: { kind: 'quote', href: WA_LINKS.googleAds, label: 'Cotizar Google Ads' },
      },
      {
        id: 'seo',
        slug: 'seo',
        href: serviceHref('seo'),
        categoryId: 'ads',
        title: 'Posicionamiento en Google · SEO',
        description: 'Tráfico orgánico para no depender solo de la pauta.',
        headline: 'Un activo que no se apaga al cortar ads.',
        problem: 'Cada mes empiezas de cero si solo pagas pauta.',
        ...quoteFrom(149_990, 'Mensual · auditoría técnica y contenidos'),
        includes: ['Auditoría técnica', 'On-page y contenidos', 'Seguimiento'],
        previewImage: {
          src: '/images/services/actualizaciones-web.png',
          alt: 'Estrategia SEO y posicionamiento orgánico',
          tag: 'SEO Orgánico & Contenidos',
          caption: 'Auditoría técnica, optimización on-page y arquitectura de palabras clave para captar visitas sin pagar por clic.',
        },
        relatedSlugs: ['sitio-web', 'optimizacion-web'],
        cta: { kind: 'quote', href: WA_LINKS.seo, label: 'Cotizar SEO' },
      },
      {
        id: 'plan-medios',
        slug: 'plan-medios',
        href: serviceHref('plan-medios'),
        categoryId: 'ads',
        title: 'Gestión de Google Ads + Meta Ads',
        description: 'Meta, Google u otras: un ciclo mensual con KPIs.',
        headline: 'Medios con plan, no campañas sueltas.',
        problem: 'Sin tracking ni ciclo, la pauta es gasto sin aprendizaje.',
        ...quoteFrom(280_000, 'Mensual · Meta + Google Ads estructurados'),
        includes: ['Plan y KPIs', 'GTM / GA4 / píxeles', 'Optimización y reporte'],
        previewImage: {
          src: '/images/hero-clientes-online.png',
          alt: 'Plan de medios y pauta digital',
          tag: 'Meta + Google Ads',
          caption: 'Estrategia integral de medios digitales con asignación de presupuesto y seguimiento de CAC y ROAS.',
        },
        relatedSlugs: ['landing-express', 'sitio-web', 'sistema-crecimiento'],
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar propuesta' },
      },
    ],
  },
  {
    id: 'ia',
    family: 'unit',
    label: 'Automatización e IA',
    href: '/servicios#ia',
    title: 'Automatización e IA',
    prompt: '¿Necesitas IA o automatizar?',
    subtitle: 'Usamos IA en el trabajo diario y armamos proyectos a medida. El alcance lo definimos contigo.',
    items: [
      {
        id: 'ia-whatsapp',
        slug: 'ia-whatsapp',
        href: serviceHref('ia-whatsapp'),
        categoryId: 'ia',
        title: 'Asistente de WhatsApp con IA',
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
        previewImage: {
          src: '/images/services/aplicaciones-ia.png',
          alt: 'Agente de IA y calificación en WhatsApp por Artestudio',
          tag: 'Agente IA 24/7 · WhatsApp API',
          caption: 'Flujo conversacional inteligente entrenado con los datos de tu empresa, calificación automática y handoff a humanos.',
        },
        relatedSlugs: ['landing-express', 'agenda-cobros', 'automatizaciones-ia'],
        cta: { kind: 'quote', href: WA_LINKS.automatizacionIa, label: 'Evaluar IA en WhatsApp' },
      },
      {
        id: 'automatizaciones-ia',
        slug: 'automatizaciones-ia',
        href: serviceHref('automatizaciones-ia'),
        categoryId: 'ia',
        title: 'Automatización de procesos',
        description: 'Procesos repetitivos: formularios, CRM, avisos, reportes.',
        headline: 'Que la operación no dependa de copiar y pegar.',
        problem: 'El equipo pierde horas en tareas que una integración puede hacer.',
        ...quoteFrom(240_000, 'Pago único o setup + mensual, según proceso'),
        includes: ['Diagnóstico de procesos', 'Integraciones', 'Prueba controlada', 'Documentación simple'],
        previewImage: {
          src: '/images/services/aplicaciones-ia.png',
          alt: 'Automatizaciones de procesos comerciales con IA',
          tag: 'Workflows & Integraciones',
          caption: 'Integración fluida entre formularios, CRM, bases de datos y avisos en tiempo real para eliminar fricción operativa.',
        },
        relatedSlugs: ['agenda-cobros', 'ia-whatsapp', 'sistema-crecimiento'],
        cta: { kind: 'quote', href: WA_LINKS.automatizacion, label: 'Evaluar automatización' },
      },
      {
        id: 'agenda-cobros',
        slug: 'agenda-cobros',
        href: serviceHref('agenda-cobros'),
        categoryId: 'ia',
        title: 'Reservas y cobros online',
        description: 'Página autónoma de reservas con pasarela de pago obligatoria (Webpay/MercadoPago) y recordatorios automáticos.',
        headline: 'Cobra por adelantado y llena tu agenda sin coordinar horas por chat.',
        problem: 'Horas perdidas coordinando citas por WhatsApp y cancelaciones de última hora que te dejan sin ingresos.',
        ...quoteFrom(240_000, 'Pago único o setup + pasarela de pago'),
        includes: [
          'Página de reserva personalizada con horarios y servicios disponibles',
          'Cobro anticipado obligatorio (Webpay, Tarjetas de Débito/Crédito)',
          'Sincronización bidireccional con Google Calendar o Outlook',
          'Recordatorios automáticos por correo o WhatsApp para evitar no-shows',
          'Capacitación de uso y gestión de bloqueos de horario',
        ],
        previewImage: {
          src: '/images/proceso-web-soporte.png',
          alt: 'Sistema de agenda y cobros online 24/7',
          tag: 'Reserva & Cobro Anticipado',
          caption: 'Página de reservas conectada a Webpay y Google Calendar para asegurar el pago antes de cada sesión.',
        },
        relatedSlugs: ['landing-express', 'ia-whatsapp', 'automatizaciones-ia'],
        cta: { kind: 'quote', href: WA_LINKS.agenda, label: 'Cotizar Sistema de Agenda' },
      },
      {
        id: 'proyecto-ia',
        slug: 'proyecto-ia',
        href: serviceHref('proyecto-ia'),
        categoryId: 'ia',
        title: 'Desarrollo con IA a medida',
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
        previewImage: {
          src: '/images/services/aplicaciones-ia.png',
          alt: 'Proyectos a medida con Inteligencia Artificial',
          tag: 'IA a Medida · LLMs & Agentes',
          caption: 'Desarrollo de asistentes internos, procesamiento de documentos y herramientas a medida para tu equipo.',
        },
        relatedSlugs: ['automatizaciones-ia', 'sistema-crecimiento'],
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
    subtitle: 'Tres combinaciones para coordinar web, contenido, marca o campañas en un mismo proyecto.',
    items: [
      {
        id: 'pack-lanzamiento',
        slug: 'pack-lanzamiento',
        href: serviceHref('pack-lanzamiento'),
        categoryId: 'packs',
        title: 'Web + Activación de campañas',
        description: 'Tu página lista para convertir + campaña activa en Google o Meta Ads desde la primera semana.',
        headline: 'Página de alta conversión + tráfico calificado desde el día uno.',
        problem: 'Una web sin anuncios no recibe visitas; y anuncios sin una web optimizada queman el presupuesto.',
        ...quoteFrom(199_990, 'Implementación inicial · anuncios y gestión mensual aparte'),
        badge: 'Recomendado',
        includes: [
          'Página web Express (one-page, hasta 7 secciones, WhatsApp, dominio .cl 1er año)',
          'Setup de campaña en Google Ads o Meta Ads con segmentación inicial',
          'Configuración técnica de GA4, Google Tag Manager y Meta Pixel / API',
          'Pruebas de conversión y tracking de clics a WhatsApp',
          '1 mes de soporte y optimizaciones técnicas iniciales',
        ],
        featured: true,
        previewImage: {
          src: '/images/casos/quiral.png',
          alt: 'Pack Lanzamiento: Web más Pauta Ads por Artestudio',
          tag: 'Pack Lanzamiento · Web + Ads',
          caption: 'Página web Express lista para recibir tráfico desde el primer día, conectada con campañas activas en Meta o Google Ads.',
        },
        relatedSlugs: ['edicion-reels-4', 'correo-corporativo', 'ia-whatsapp'],
        cta: { kind: 'quote', href: WA_LINKS.packLanzamiento, label: 'Cotizar Pack Lanzamiento' },
      },
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
        badge: 'Pack Continuo',
        savingsNote: 'Página web Express + Redes Esencial con hosting y mantención incluidos',
        includes: CRECE_PLAN.includes,
        footnote: CRECE_PLAN.footnote,
        featured: true,
        previewImage: {
          src: '/images/contenido-redes.png',
          alt: 'Pack Landing más Redes Sociales por Artestudio',
          tag: 'Pack Continuo · Web + Contenido',
          caption: 'Página web siempre optimizada y redes sociales activas mes a mes con diseño editorial y soporte técnico incluido.',
        },
        relatedSlugs: ['meta-ads', 'google-ads', 'correo-corporativo'],
        cta: buyFromPlan(CRECE_PLAN),
      },
      {
        id: 'pack-autoridad',
        slug: 'pack-autoridad',
        href: serviceHref('pack-autoridad'),
        categoryId: 'packs',
        title: 'Marca + Web para empresas',
        description: 'Identidad visual completa, sitio web corporativo y dossier interactivo para cerrar clientes de ticket alto.',
        headline: 'Posicionamiento institucional sólido para empresas que venden confianza.',
        problem: 'Vender servicios de alto valor con una imagen amateur o propuestas en Word te obliga a competir por precio.',
        ...quoteFrom(549_990, 'Desde este valor · alcance y precio final por propuesta'),
        badge: 'Empresas & B2B',
        includes: [
          'Branding & Identidad visual (logo, versiones, paleta, tipografías y manual)',
          'Sitio Web Corporativo (hasta 8 páginas, diseño responsive, SEO on-page)',
          'Dossier Comercial / Presentación B2B interactiva en PDF (10 diapositivas)',
          'Setup de correos corporativos en Google Workspace (hasta 5 cuentas)',
        ],
        previewImage: {
          src: '/images/casos/atria.png',
          alt: 'Pack Autoridad B2B: Marca más Web por Artestudio',
          tag: 'Pack Autoridad B2B · Caso Atria',
          caption: 'Identidad visual integral, sitio web corporativo de alta gama, dossier comercial interactivo y Google Workspace.',
        },
        relatedSlugs: ['quiz-calificador', 'plan-medios', 'sistema-crecimiento'],
        cta: { kind: 'quote', href: WA_LINKS.packAutoridad, label: 'Cotizar Pack Autoridad' },
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
        title: 'Plan integral de crecimiento',
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
        previewImage: {
          src: '/images/proceso-web-soporte.png',
          alt: 'Sistema de crecimiento integral por Artestudio',
          tag: 'Sistema Completo Conectado',
          caption: 'Arquitectura completa donde web, publicidad, analítica, CRM y automatizaciones trabajan integrados.',
        },
        relatedSlugs: ['quiz-calificador', 'ia-whatsapp', 'proyecto-estrategico'],
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar diagnóstico' },
      },
      {
        id: 'proyecto-estrategico',
        slug: 'proyecto-estrategico',
        href: serviceHref('proyecto-estrategico'),
        categoryId: 'crecimiento',
        title: 'Gestión para varias marcas',
        description: 'Varias marcas o funnels, una dirección.',
        headline: 'Sin duplicar esfuerzo ni mezclar el mensaje.',
        problem: 'Más de una marca o funnel, sin un criterio común.',
        priceLabel: 'Cotizar',
        billingNote: 'Propuesta a medida',
        includes: ['Diagnóstico por marca', 'Plan de medios', 'Web y conversión', 'Reportería'],
        previewImage: {
          src: '/images/proceso-web-soporte.png',
          alt: 'Proyecto multi-marca por Artestudio',
          tag: 'Estrategia Multi-Marca',
          caption: 'Dirección unificada para negocios con múltiples líneas de servicio, productos o marcas comerciales.',
        },
        relatedSlugs: ['sistema-crecimiento', 'plan-medios'],
        cta: { kind: 'quote', href: WA_LINKS.reunion, label: 'Agendar reunión' },
      },
    ],
  },
]

const contentCategory = BASE_CATEGORIES.find(c => c.id === 'contenido')!
const brandItems = contentCategory.items.filter(i => ['branding', 'dossier-comercial'].includes(i.slug))
contentCategory.items = contentCategory.items.filter(i => !brandItems.includes(i))
const brandCategory: ServiceCategory = { id: 'marca', family: 'unit', label: 'Marca y diseño', href: '/servicios#marca', title: 'Marca y diseño', prompt: '¿Tu marca necesita una identidad consistente?', subtitle: 'Identidad visual y presentaciones; aplicaciones y plantillas para llevar tu marca a cada pieza.', items: brandItems }
const categoryOrder = ['web', 'contenido', 'marca', 'ads', 'ia', 'packs', 'crecimiento']
export const SERVICE_CATEGORIES: ServiceCategory[] = [...BASE_CATEGORIES, brandCategory].sort((a,b) => categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id))
const additionalServices = [
  { categoryId: 'web' as const, slug: 'rediseno-migracion', title: 'Rediseño y migración web', description: 'Actualiza o traslada tu sitio conservando contenido y rutas importantes.', scope: ['Inventario del sitio actual, respaldo y propuesta de rediseño o traslado.', 'Cantidad de páginas, contenido a migrar, redirecciones y puesta en marcha definidos antes de contratar.'], excludes: ['Dominio, hosting, licencias y reconstrucción de funcionalidades no incluidas en la propuesta.', 'Garantía de mantener posiciones o tráfico durante una migración.'] },
  { categoryId: 'marca' as const, slug: 'plantillas-marca', title: 'Aplicaciones de marca y plantillas', description: 'Lleva tu identidad a presentaciones, redes y piezas de uso diario.', scope: ['Diseño a partir de una identidad visual existente.', 'Propuesta con número de plantillas, tamaños, formatos editables y aplicaciones acordadas.'], excludes: ['Rediseño de logotipo, gestión de redes, impresión y licencias de fuentes o plataformas.', 'Adaptaciones ilimitadas y contenidos nuevos fuera del paquete aprobado.'] },
  { categoryId: 'ads' as const, slug: 'seo-local', title: 'Google Business Profile y SEO local', description: 'Ordena la presencia de tu negocio en Google para una ciudad o zona de atención.', scope: ['Auditoría y optimización de un perfil y una ubicación: datos, categorías, servicios y enlaces.', 'Accesos, verificación disponible, contenido y seguimiento acordados por propuesta.'], excludes: ['Garantía de verificación, recuperación de perfiles suspendidos o primeras posiciones.', 'Publicidad, atención de reseñas y gestión mensual salvo contratación expresa.'] },
]
for (const extra of additionalServices) {
  SERVICE_CATEGORIES.find(category => category.id === extra.categoryId)!.items.push({
    id: extra.slug, slug: extra.slug, href: serviceHref(extra.slug), categoryId: extra.categoryId,
    title: extra.title, description: extra.description, headline: extra.description, problem: extra.description,
    priceLabel: 'Cotizar', billingNote: 'Alcance y precio final antes de contratar', includes: extra.scope,
    conditions: { scope: extra.scope, excludes: extra.excludes, delivery: 'Calendario acordado tras revisar materiales, accesos y alcance.', revisions: '2 rondas consolidadas sobre el alcance aprobado.' },
    cta: { kind: 'quote', href: WA_LINKS.reunion, label: 'Solicitar propuesta' },
  })
}
contentCategory.items.sort((a,b) => ['edicion-reels-4','edicion-reels-8','redes-esencial','redes-pro','video-mensual'].indexOf(a.slug) - ['edicion-reels-4','edicion-reels-8','redes-esencial','redes-pro','video-mensual'].indexOf(b.slug))
for (const category of SERVICE_CATEGORIES) {
  for (const item of category.items) {
    item.categoryId = category.id
    item.conditions = item.conditions ?? SERVICE_CONDITIONS[item.slug] ?? (item.cta.kind === 'buy' ? {
      scope: [item.cta.plan.idealFor, 'El cliente aporta textos, imágenes y grabaciones con autorización de uso.'],
      excludes: [...(item.cta.plan.excludes ?? [])], delivery: item.cta.plan.delivery,
      revisions: item.cta.plan.setup > 0 ? '2 rondas consolidadas de ajustes del diseño; nuevas secciones se cotizan.' : 'Una ronda de ajustes menores por pieza o entrega, según calendario. Nuevos conceptos o grabaciones se cotizan.',
    } : CUSTOM_CONDITIONS)
    if (item.cta.kind === 'quote') item.includes = item.conditions.scope
    if (item.cta.kind === 'quote') item.cta = { ...item.cta, href: 'https://wa.me/56938733230?text=' + encodeURIComponent('Hola Artestudio, quiero una propuesta para ' + item.title + '. Mi negocio es: ') }
    if (item.slug === 'mantencion-web') { item.description = 'Hosting, respaldos y mantención técnica; productos, catálogo y contenido se cotizan aparte.'; item.headline = 'Planes claros de hosting y soporte técnico para mantener tu web funcionando.' }
    if (item.slug === 'pack-lanzamiento') { item.description = 'Una página web y activación inicial de una campaña. Inversión publicitaria y gestión mensual aparte.'; item.headline = 'Tu web y la primera campaña, coordinadas desde el inicio.' }
    if (item.slug === 'pack-autoridad') { item.description = 'Identidad visual, web corporativa, presentación y configuración de correo, con alcance confirmado por propuesta.'; item.headline = 'Una identidad consistente para presentar tu empresa.' }
    if (item.slug === 'plan-medios') item.description = 'Gestión mensual de Google y Meta con alcance conjunto; inversión en anuncios aparte.'
    if (item.slug === 'video-mensual') {
      item.priceLabel = 'Desde $120.000 + IVA / mes'
      item.billingNote = 'Propuesta tras revisar duración, cámaras y material'
      item.cta = { kind: 'quote', href: WA_LINKS.reunion, label: 'Cotizar edición de video' }
    }
    if (item.slug === 'landing-redes') item.cta = { kind: 'quote', href: WA_LINKS.reunion, label: 'Coordinar web y redes' }
    if (item.cta.kind === 'quote') {
      item.includes = item.conditions.scope
      item.cta = { ...item.cta, href: 'https://wa.me/56938733230?text=' + encodeURIComponent('Hola Artestudio, quiero una propuesta para ' + item.title + '. Mi negocio es: ') }
    }
    // Only use project imagery as proof where the asset actually shows the deliverable.
    if (item.slug !== 'landing-express') item.previewImage = undefined
  }
}

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.items)

export const FEATURED_SERVICES: ServiceItem[] = ALL_SERVICES.filter((s) => s.featured)

export const HOME_SERVICE_CATEGORIES: ServiceCategory[] = SERVICE_CATEGORIES.filter(
  (c) => c.family === 'unit',
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
    'Elige lo que necesita tu negocio: web, contenido, marca, publicidad o automatización. Si no estás seguro, te orientamos en una reunión de 15 minutos.',
} as const

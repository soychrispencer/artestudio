/**
 * Ofertas de entrada — jerarquía comercial del home
 */

export const MONTHLY_MODEL_DISCLAIMER =
  'El setup cubre la creación inicial de tu landing o sitio. El plan mensual cubre hosting, soporte básico, continuidad técnica y 1 modificación menor al mes. Nuevas secciones, rediseños, ecommerce, carga de productos, campañas o administración de contenido se cotizan aparte.'

export const LANDING_EXPRESS_WHATSAPP =
  'Hola Artestudio, quiero la Landing Express ($74.990 setup + $14.990/mes). ¿Podemos hablar?'

export const WEB_PRO_WHATSAPP =
  'Hola Artestudio, necesito una web más completa (pago único o plan personalizado). ¿Me orientan?'

export const ECOMMERCE_WHATSAPP =
  'Hola Artestudio, necesito cotizar ecommerce o una plataforma avanzada.'

export const ENTRY_OFFERS = [
  {
    id: 'landing-express',
    badge: 'Entrada rápida',
    emoji: '⚡',
    title: 'Landing Express',
    priceLine: 'Desde $74.990 setup + $14.990/mes',
    idealFor: [
      'Talleres y servicios locales',
      'Profesionales independientes',
      'Campañas y promociones',
      'WhatsApp y links de compra',
    ],
    includes: [
      'Landing de una página',
      'Textos base asistidos con herramientas digitales',
      'Diseño responsive',
      'Botón WhatsApp o link de compra',
      'Hosting incluido',
      'Soporte básico',
      '1 modificación menor mensual (no acumulable)',
    ],
    excludes: [
      'eCommerce y catálogo de productos',
      'Redes sociales y campañas',
      'Rediseños completos',
      'Nuevas páginas',
      'Administración constante de contenido',
    ],
    cta: 'Contratar landing express',
    whatsappMessage: LANDING_EXPRESS_WHATSAPP,
    featured: true,
  },
  {
    id: 'web-profesional',
    badge: 'Más completo',
    emoji: '🌐',
    title: 'Web Profesional',
    priceLine: 'Pago único desde $249.990',
    priceNote: 'También disponible con setup + mensual según alcance.',
    idealFor: [
      'Empresas y marcas personales',
      'Negocios que necesitan más secciones',
      'Mayor autoridad y estructura',
    ],
    includes: [
      'Sitio corporativo o micrositio amplio',
      'Arquitectura de contenidos',
      'SEO on-page según plan',
      'Capacitación para autogestión',
      'Mantención opcional desde $59.990/mes',
    ],
    excludes: [
      'No es la oferta express de una sola página',
      'eCommerce completo → ver plan Pro+',
    ],
    cta: 'Ver planes web',
    whatsappMessage: WEB_PRO_WHATSAPP,
    featured: false,
  },
  {
    id: 'ecommerce',
    badge: 'Consultivo',
    emoji: '🛒',
    title: 'eCommerce y plataformas',
    priceLine: 'Desde cotización',
    priceNote: 'Web Pro+ eCommerce desde $790.000 · Desarrollo a medida según alcance.',
    idealFor: [
      'Tiendas online',
      'Catálogos grandes',
      'Integraciones y automatizaciones',
    ],
    includes: [
      'Shopify, WooCommerce, WordPress o a medida',
      'Flujo de compra y pagos',
      'Estrategia según volumen y operación',
    ],
    excludes: [],
    cta: 'Cotizar ecommerce',
    whatsappMessage: ECOMMERCE_WHATSAPP,
    featured: false,
  },
] as const

export const COMPLEMENT_SERVICES = [
  {
    emoji: '📱',
    title: 'Redes sociales',
    desc: 'Gestión, contenido y comunidad',
    from: 'Desde $89.990/mes',
    href: '/servicio/redes-sociales',
  },
  {
    emoji: '🎨',
    title: 'Branding',
    desc: 'Identidad visual y manual de marca',
    from: 'Desde $149.990',
    href: '/servicio/branding',
  },
  {
    emoji: '📄',
    title: 'Diseño gráfico',
    desc: 'Flyers, presentaciones, papelería',
    from: 'Desde $55.000',
    href: '/servicio/diseno-grafico',
  },
  {
    emoji: '🎬',
    title: 'Video y audio',
    desc: 'Reels, podcast, mastering',
    from: 'Desde $35.000',
    href: '/servicio/edicion-video',
  },
] as const

/**
 * Ofertas de entrada — jerarquía comercial del home
 */

export const MONTHLY_MODEL_DISCLAIMER =
  'El setup cubre la creación inicial de tu landing o sitio. El plan mensual cubre hosting, soporte básico, continuidad técnica y 1 modificación menor al mes. Nuevas secciones, rediseños, ecommerce, carga de productos, campañas o administración de contenido se cotizan aparte.'

export const LANDING_EXPRESS_WHATSAPP =
  'Hola Artestudio, quiero la Landing Express ($74.990 setup + $9.990/mes). ¿Podemos hablar?'

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
    priceLine: '$74.990 + IVA · luego $9.990 + IVA/mes',
    idealFor: [
      'Talleres y servicios locales',
      'Profesionales independientes',
      'Campañas y promociones',
      'WhatsApp y links de compra',
    ],
    includes: [
      'Diseño personalizado one-page',
      'Hasta 7 secciones',
      'Adaptación móvil',
      'Botón WhatsApp y formulario',
      'SEO básico y publicación',
      'Dominio .cl el primer año',
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
    title: 'Web Corporativa',
    priceLine: 'Desde $349.990',
    priceNote: 'Pago único o setup + mensual con soporte prioritario.',
    idealFor: [
      'Empresas y marcas personales',
      'Negocios que necesitan más secciones',
      'Mayor autoridad y estructura',
    ],
    includes: [
      'Sitio corporativo o institucional hasta 10 páginas',
      'Arquitectura de contenidos y conversión',
      'SEO on-page y Google Analytics 4',
      'Capacitación para autogestión',
      'Mantención opcional continua',
    ],
    excludes: [
      'No es la oferta express de una sola página',
      'eCommerce con pasarela de pagos → ver tienda online',
    ],
    cta: 'Ver planes web',
    whatsappMessage: WEB_PRO_WHATSAPP,
    featured: false,
  },
  {
    id: 'ecommerce',
    badge: 'Ventas Online',
    emoji: '🛒',
    title: 'eCommerce y Tiendas',
    priceLine: 'Desde $489.990',
    priceNote: 'Shopify, WooCommerce, Jumpseller o desarrollo a medida.',
    idealFor: [
      'Tiendas online',
      'Catálogos con catálogo y stock',
      'Integración con pagos y envíos',
    ],
    includes: [
      'Shopify, WooCommerce o Jumpseller',
      'Integración Webpay, Flow, MercadoPago y despachos',
      'Automatización de carrito abandonado',
      'Capacitación completa de operación',
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
    href: '/servicios#contenido',
  },
  {
    emoji: '🎬',
    title: 'Edición de Reels',
    desc: 'Tú grabas, nosotros editamos',
    from: 'Packs desde $59.990/mes',
    href: '/servicios#contenido',
  },
  {
    emoji: '🎨',
    title: 'Branding',
    desc: 'Identidad visual y manual de marca',
    from: 'Desde $260.000',
    href: '/servicios#contenido',
  },
  {
    emoji: '📄',
    title: 'Diseño gráfico',
    desc: 'Flyers, presentaciones, papelería',
    from: 'Desde $55.000',
    href: '/servicios#contenido',
  },
] as const

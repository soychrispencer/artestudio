/**
 * Copy orientado al CLIENTE — Sistemas de crecimiento
 */

export const WA_NUMBER = '56938733230'

export const CONTACT = {
  whatsapp: '+569 3873 3230',
  email: 'contacto@artestudio.cl',
  instagram: 'https://instagram.com/artestudio.cl',
  behance: 'https://www.behance.net/soychrispencer',
} as const

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WA_LINKS = {
  general: waLink('Hola Artestudio, quiero hacer crecer mi negocio. Mi negocio es de '),
  asesoria: waLink('Hola Artestudio, tengo dudas antes de contratar. Mi negocio es '),
  diagnostico: waLink('Hola Artestudio, quiero solicitar un diagnóstico de crecimiento. Mi negocio es de '),
  reunion: waLink('Hola Artestudio, quiero agendar una reunión para hablar de mi negocio. Mi negocio es de '),
  planInicio: waLink('Hola Artestudio, quiero el plan Landing Express. Mi negocio es de '),
  planCrecer: waLink('Hola Artestudio, quiero el Sistema de Crecimiento. Mi negocio es de '),
  planPro: waLink('Hola Artestudio, quiero el plan Empresa. Mi negocio es de '),
  planCrece: waLink('Hola Artestudio, quiero el Plan Crece con landing page + redes sociales. Mi negocio es de '),
  redes: waLink('Hola Artestudio, quiero cotizar gestión de redes sociales. Mi negocio es de '),
  video: waLink('Hola Artestudio, quiero cotizar edición de video / Reels. Mi negocio es de '),
  web: waLink('Hola Artestudio, quiero cotizar diseño web / ecommerce. Mi negocio es de '),
  landing: waLink('Hola Artestudio, quiero cotizar una landing page. Mi negocio es de '),
  googleAds: waLink('Hola Artestudio, quiero cotizar Google Ads. Mi negocio es de '),
  metaAds: waLink('Hola Artestudio, quiero cotizar Meta Ads. Mi negocio es de '),
  seo: waLink('Hola Artestudio, quiero cotizar SEO. Mi negocio es de '),
  hosting: waLink('Hola Artestudio, quiero cotizar hosting. Mi negocio es de '),
  funnels: waLink('Hola Artestudio, quiero cotizar funnels de conversión. Mi negocio es de '),
  analitica: waLink('Hola Artestudio, quiero cotizar analítica y medición. Mi negocio es de '),
  automatizacionIa: waLink('Hola Artestudio, quiero evaluar automatizaciones o IA para mi negocio. Mi negocio es de '),
  diseno: waLink('Hola Artestudio, quiero cotizar diseño gráfico. Mi negocio es de '),
  branding: waLink('Hola Artestudio, quiero cotizar branding. Mi negocio es de '),
  mantencion: waLink('Hola Artestudio, quiero cotizar mantención web.'),
  automatizacion: waLink('Hola Artestudio, quiero cotizar automatizaciones. Mi negocio es de '),
} as const

export const SECTION_IDS = {
  inicio: 'inicio',
  estudio: 'estudio',
  trabajo: 'trabajo',
  servicios: 'servicios-home',
  problemas: 'problemas',
  solucion: 'solucion',
  metodologia: 'metodologia',
  puertas: 'puertas',
  /** @deprecated moved to /servicios */
  soluciones: 'soluciones',
  /** @deprecated moved to /servicios */
  planes: 'planes',
  prueba: 'prueba',
  /** @deprecated moved to /servicios */
  serviciosIndividuales: 'servicios-individuales',
  faq: 'faq',
  contacto: 'contacto',
} as const

export const NAV_LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: `/#${SECTION_IDS.contacto}` },
] as const

export const FOOTER_SOLUTIONS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Landing Express', href: '/servicios/landing-express' },
  { label: 'Edición de Reels', href: '/servicios/edicion-reels-8' },
  { label: 'Redes Sociales', href: '/servicios/redes-esencial' },
  { label: 'IA y automatización', href: '/servicios#ia' },
  { label: 'Sistema de Crecimiento', href: '/servicios/sistema-crecimiento' },
] as const

/** Plataformas y herramientas (A→Z). */
export const FOOTER_TOOLS = [
  { label: 'Adobe', href: 'https://www.adobe.com/creativecloud.html', slug: 'adobe' },
  { label: 'ChatGPT', href: 'https://chatgpt.com/', slug: 'chatgpt' },
  { label: 'Claude', href: 'https://claude.ai/', slug: 'claude' },
  { label: 'Cursor', href: 'https://cursor.com/', slug: 'cursor' },
  { label: 'Gemini', href: 'https://gemini.google.com/', slug: 'gemini' },
  { label: 'Google Ads', href: 'https://ads.google.com/', slug: 'googleads' },
  { label: 'JumpSeller', href: 'https://jumpseller.com/', slug: 'jumpseller' },
  { label: 'Meta Ads', href: 'https://www.facebook.com/business/ads', slug: 'meta' },
  { label: 'Pro Tools', href: 'https://www.avid.com/pro-tools', slug: 'avid' },
  { label: 'Shopify', href: 'https://www.shopify.com/', slug: 'shopify' },
  { label: 'TikTok Ads', href: 'https://ads.tiktok.com/', slug: 'tiktok' },
  { label: 'WooCommerce', href: 'https://woocommerce.com/', slug: 'woocommerce' },
  { label: 'WordPress', href: 'https://wordpress.org/', slug: 'wordpress' },
  { label: 'YouTube Ads', href: 'https://www.youtube.com/ads/', slug: 'youtube' },
] as const

export const HERO = {
  badge: 'Estrategia · Tecnología · Crecimiento',
  titleAccent: 'Sistemas',
  titleLines: ['que hacen crecer', 'tu negocio.'],
  subtitle:
    'Landing desde $74.990, edición de Reels desde $59.990, redes desde $89.990 o un sistema completo que conecta tus ventas.',
  cta: 'Ver servicios',
  ctaSecondary: 'Agendar reunión',
  ringText: 'Estrategia · Tecnología · Crecimiento · ',
  statValue: '2019',
  statLabel: 'Estudio en Chile',
  image: '/images/hero-clientes-online.png',
  imageAlt: 'Artestudio: sistemas de crecimiento aplicados a un negocio real',
} as const

export const HOME_HUB = {
  label: 'El estudio',
  title: 'Un centro para crear, conectar y crecer.',
  items: [
    {
      id: 'agencia',
      label: 'Agencia',
      title: 'Sistemas de crecimiento',
      text: 'Web, ads, CRM y medición diseñados para trabajar juntos.',
      href: '/servicios/sistema-crecimiento',
      image: '/images/proceso-web-soporte.png',
    },
    {
      id: 'laboratorio',
      label: 'Laboratorio',
      title: 'IA y automatizaciones',
      text: 'Agentes, WhatsApp y procesos que no dependen de ti.',
      href: '/servicios/automatizaciones-ia',
      image: '/images/services/aplicaciones-ia.png',
    },
    {
      id: 'creaciones',
      label: 'Creaciones',
      title: 'Diseño y contenido',
      text: 'Identidad, piezas y trabajo publicado en Behance.',
      href: CONTACT.behance,
      external: true,
      image: '/images/services/branding-identidad.png',
    },
    {
      id: 'servicios',
      label: 'Servicios',
      title: 'Packs y proyectos',
      text: 'Compra online lo que tiene precio, o cotiza lo a medida.',
      href: '/servicios',
      image: '/images/services/desarrollo-web.png',
    },
  ],
} as const

export const HOME_WORKS = {
  label: 'Trabajos',
  title: 'Piezas reales, publicadas.',
  intro:
    'Selección visual del estudio. El portafolio completo —casos, marcas y piezas— está en Behance.',
  featuredTag: 'Portafolio',
  featuredTitle: 'Trabajo publicado en Behance',
  moreLabel: 'Ver portafolio en Behance',
  highlights: [
    'Web, landings y sistemas',
    'Identidad y contenido',
    'Ads y campañas',
  ],
  items: [
    {
      title: 'Presencia digital',
      tag: 'Web',
      href: CONTACT.behance,
      image: '/images/services/desarrollo-web.png',
    },
    {
      title: 'Contenido en circulación',
      tag: 'Editorial',
      href: CONTACT.behance,
      image: '/images/contenido-redes.png',
    },
    {
      title: 'Identidad visual',
      tag: 'Marca',
      href: CONTACT.behance,
      image: '/images/services/branding-identidad.png',
    },
    {
      title: 'Campañas y piezas',
      tag: 'Ads',
      href: CONTACT.behance,
      image: '/images/services/redes-sociales.png',
    },
  ],
} as const

export const HOME_EXPERTISE = {
  label: 'Servicios',
  title: '¿Qué necesitas ahora?',
  intro: 'Unidad, pack o sistema. La IA entra cuando aporta, no como adorno.',
  images: {
    web: '/images/services/desarrollo-web.png',
    contenido: '/images/contenido-redes.png',
    ads: '/images/services/redes-sociales.png',
    ia: '/images/services/aplicaciones-ia.png',
    packs: '/images/contenido-redes.png',
    crecimiento: '/images/proceso-web-soporte.png',
  } as const,
} as const

export const HOME_MARQUEE = ['Estrategia', 'Tecnología', 'Crecimiento'] as const

export const HOME_STATS = {
  label: 'Artestudio',
  items: [
    { value: 2019, suffix: '', label: 'Origen' },
    { value: 7, suffix: '+', label: 'Años' },
    { value: 100, suffix: '%', label: 'Remoto en Chile' },
  ],
} as const

export const PROBLEMAS = {
  label: 'El contraste',
  title: 'Elegir estudio es difícil porque pocos entregan un',
  titleAccent: 'sistema',
  intro: 'Comparamos lo habitual en el mercado con cómo trabajamos.',
  leftLabel: 'Improvisar',
  rightLabel: 'Construir',
  items: [
    'Inviertes en publicidad pero no vendes más.',
    'Tienes web o redes, pero casi nadie te contacta.',
    'Todo depende de responder WhatsApp manualmente.',
    'Herramientas sueltas, sin un proceso claro.',
  ],
  construir: [
    'Publicidad que alimenta un sistema, no una urgencia.',
    'Web y canales que convierten contacto en proceso.',
    'Operación medible, conectada y menos manual.',
    'Una base que puedes mejorar sin partir de cero.',
  ],
  closing: 'No necesitas más herramientas.',
  closingAccent: 'Necesitas un sistema.',
  image: '/images/contenido-redes.png',
} as const

export const HOME_PRUEBA = {
  ctaTitle: 'Conversemos 15 minutos',
  ctaText: 'Sin presión. Te orientamos al servicio correcto.',
  cta: 'Agendar reunión',
  ctaNote: 'Una llamada corta, por WhatsApp.',
  statValue: '2019',
  statLabel: 'Estudio en Chile',
  statNote: '100% remoto',
  processLabel: 'Cómo avanzamos',
  processTitle: 'Claro, acotado y conectado',
  processSteps: ['Entendemos qué necesitas hoy', 'Definimos una propuesta y alcance', 'Implementamos y medimos lo que sigue'],
  processNote: 'Puedes empezar con una pieza o con una solución completa.',
  industriesLabel: 'Con quiénes trabajamos',
  industries: ['Comercio', 'Servicios', 'Profesionales', 'Educación', 'Marcas online'],
} as const

export const SOLUCION = {
  title: 'Diseñamos un Sistema de Crecimiento para tu empresa.',
  text: 'Conectamos publicidad, página web, analítica, automatizaciones e inteligencia artificial para que todo trabaje junto.',
  highlight: 'No implementamos herramientas.',
  highlightAccent: 'Diseñamos sistemas completos.',
} as const

export const METODOLOGIA = {
  label: 'Cómo avanzamos',
  title: 'De la idea al sistema.',
  titleAccent: 'sistema',
  note: 'Así ordenamos un proyecto de Artestudio: diagnóstico comercial, propuesta y operación. No es el Método Construye — esa guía vive aparte.',
  image: '/images/proceso-web-soporte.png',
  steps: [
    { title: 'Idea', description: 'Claridad de problema, oferta y destino.', icon: 'search' },
    {
      title: 'Fundamentos',
      description: 'Piezas claras y repetibles, sin improvisar cada día.',
      icon: 'blueprint',
    },
    {
      title: 'Construcción',
      description: 'Web, contenido, ads e inteligencia trabajando juntas.',
      icon: 'code',
    },
    { title: 'Sistema', description: 'Medición, mejora y una operación que no depende del apuro.', icon: 'chart' },
  ],
} as const

export const SOLUCIONES = {
  label: 'El sistema',
  title: 'Todo conectado en un solo sistema',
  subtitle:
    'Estas son las piezas que conectamos. No las vendemos sueltas como catálogo: las diseñamos para que trabajen juntas.',
  items: [
    {
      title: 'Landing Pages',
      description: 'Convierte más visitas en oportunidades de negocio.',
      price: 'Desde $74.990',
      image: '/images/services/actualizaciones-web.png',
    },
    {
      title: 'Sitios Web',
      description: 'Presencia profesional lista para escalar.',
      price: 'Cotizar',
      image: '/images/services/desarrollo-web.png',
    },
    {
      title: 'Publicidad Digital',
      description: 'Meta Ads y Google Ads con enfoque en resultados.',
      price: 'Cotizar',
      image: '/images/services/redes-sociales.png',
    },
    {
      title: 'Automatizaciones',
      description:
        'Automatizamos procesos para que tu empresa crezca sin aumentar la carga de trabajo.',
      price: 'Cotizar',
      image: '/images/services/aplicaciones-ia.png',
    },
    {
      title: 'Agentes IA',
      description: 'Atienden, clasifican leads y dan seguimiento.',
      price: 'Cotizar',
      image: '/images/services/aplicaciones-ia.png',
    },
    {
      title: 'Analítica',
      description: 'GA4, Pixel y dashboards para decidir con datos.',
      price: 'Cotizar',
      image: '/images/services/diseno-grafico.png',
    },
  ],
} as const

export const PLANES_INTRO = {
  label: 'Planes',
  title: 'Elige cómo quieres empezar',
  subtitle: 'Desde una landing para comenzar hasta un sistema completo.',
} as const

export const PRICING_UI = {
  setupLabel: 'Setup',
  monthlyLabel: 'Hosting',
  monthlySuffix: ' mensual',
  commitmentShort: 'Hosting, SSL, soporte y mantenimiento',
  includesLabel: 'Incluye',
  excludesLabel: 'No incluye',
  deliveryLabel: 'Tiempo de entrega',
  footnote: 'Precios en CLP · Setup en pago único y hosting en suscripción mensual (2 pasos en MercadoPago).',
} as const

export const GROWTH_PLANS = [
  {
    id: 'plan-sistema-crecimiento',
    name: 'Sistema de Crecimiento',
    tagline: 'El sistema completo según tu negocio.',
    priceMain: 'Cotización',
    priceSub: 'Personalizada según alcance',
    featured: true,
    badge: 'Más completo',
    includesLabel: 'Puede incluir',
    includes: [
      'Landing o sitio web',
      'Meta Ads y Google Ads',
      'CRM y WhatsApp',
      'Automatizaciones e IA',
      'Analítica y funnels',
    ],
    cta: 'Solicitar diagnóstico',
    ctaHref: WA_LINKS.diagnostico,
  },
  {
    id: 'plan-empresa',
    name: 'Empresa',
    tagline: 'Para negocios que necesitan una estrategia integral.',
    priceMain: 'A medida',
    priceSub: 'Diagnóstico y propuesta custom',
    includesLabel: 'Incluye',
    includes: [
      'Diagnóstico de negocio',
      'Arquitectura del sistema',
      'Implementación completa',
      'Optimización continua',
      'Soporte prioritario',
    ],
    cta: 'Agenda una reunión',
    ctaHref: WA_LINKS.reunion,
  },
] as const

export const CASOS_DE_USO = {
  label: 'Casos de uso',
  title: 'Sistemas diseñados para tu industria',
  subtitle: 'Cada negocio es distinto. Estos son algunos escenarios donde diseñamos sistemas de crecimiento.',
  industries: [
    { name: 'Veterinaria', flow: ['Meta Ads', 'Landing', 'WhatsApp', 'CRM', 'Reserva'] },
    { name: 'Inmobiliaria', flow: ['Google Ads', 'Landing', 'Formulario', 'CRM', 'Visita'] },
    { name: 'Clínica', flow: ['Google Ads', 'Web', 'WhatsApp', 'Agenda', 'Seguimiento'] },
    { name: 'Automotora', flow: ['Meta Ads', 'Landing', 'WhatsApp', 'CRM', 'Test drive'] },
    { name: 'Restaurante', flow: ['Meta Ads', 'Landing', 'Reservas', 'WhatsApp', 'Fidelización'] },
    { name: 'Empresa de Servicios', flow: ['Google Ads', 'Web', 'Formulario', 'CRM', 'Cotización'] },
    { name: 'Centro Médico', flow: ['Google Ads', 'Web', 'WhatsApp', 'Agenda', 'Recordatorio'] },
    { name: 'Constructora', flow: ['Meta Ads', 'Landing', 'Formulario', 'CRM', 'Propuesta'] },
  ],
} as const

export const IA_SECTION = {
  label: 'Inteligencia Artificial',
  title: 'Inteligencia Artificial aplicada a tu negocio',
  text: 'No usamos IA por moda. La utilizamos para reducir tiempos, automatizar procesos y mejorar la atención de tus clientes.',
  cards: [
  { title: 'Agentes IA', description: 'Atienden y responden consultas 24/7.' },
  { title: 'Automatización de WhatsApp', description: 'Respuestas y seguimientos sin intervención manual.' },
  { title: 'Seguimientos automáticos', description: 'Nunca pierdas un lead por falta de seguimiento.' },
  { title: 'Clasificación de clientes', description: 'Prioriza oportunidades según intención de compra.' },
  { title: 'Respuestas inteligentes', description: 'Respuestas contextuales basadas en tu negocio.' },
  ],
} as const

export const POR_QUE_ARTESTUDIO = {
  label: 'Por qué Artestudio',
  title: 'Por qué Artestudio',
  cards: [
    { title: 'No vendemos herramientas.', description: 'Construimos sistemas.' },
    { title: 'Todo queda conectado.', description: 'Publicidad, web, CRM y automatizaciones trabajando juntas.' },
    { title: 'Todo se puede medir.', description: 'Datos claros para tomar decisiones.' },
    { title: 'Pensado para escalar.', description: 'Crece sin rehacer todo desde cero.' },
    { title: 'Tecnología moderna.', description: 'IA, automatizaciones y analítica de última generación.' },
    { title: 'Sin plantillas.', description: 'Cada sistema se diseña para tu negocio.' },
  ],
} as const

export const PROCESO = {
  label: 'Proceso',
  title: 'Cómo funciona',
  steps: METODOLOGIA.steps.map((s) => ({ title: s.title, description: s.description })),
} as const

export const PRUEBA_SOCIAL = {
  label: 'Trabajo real',
  title: 'Trabajo real. Sin inventar.',
  honest: 'Preferimos mostrarte proyectos reales antes que reseñas inventadas.',
  behanceLabel: 'Ver portafolio en Behance',
  instagramLabel: 'Ver proyectos en Instagram',
} as const

export const INDIVIDUAL_SERVICES_INTRO = {
  label: 'Servicios puntuales',
  title: '¿Ya sabes lo que necesitas?',
  subtitle:
    'Si no buscas el sistema completo, contrata piezas sueltas: web, ads, branding, SEO u hosting.',
} as const

export const INDIVIDUAL_SERVICES = [
  {
    icon: '💻',
    title: 'Diseño Web',
    description: 'Sitios corporativos y profesionales preparados para crecer.',
    image: '/images/services/desarrollo-web.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según proyecto',
    contactCta: { label: 'Cotizar', href: WA_LINKS.web },
  },
  {
    icon: '📱',
    title: 'Redes Sociales',
    description: 'Contenido mensual para mantener tu marca activa.',
    image: '/images/services/redes-sociales.png',
    priceFrom: 'Desde $89.990/mes',
    paymentLabel: 'Suscripción mensual',
    subscription: {
      id: 'plan-redes-esencial',
      title: 'Redes Esencial — Artestudio',
      setup: 0,
      monthly: 89_990,
      cta: 'Cotizar',
      note: '12 contenidos mensuales.',
    },
    contactCta: { label: 'Cotizar', href: WA_LINKS.redes },
  },
  {
    icon: '🎨',
    title: 'Branding',
    description: 'Identidad visual profesional para tu marca.',
    image: '/images/services/branding-identidad.png',
    priceFrom: 'Desde $149.990',
    paymentLabel: 'Pago único',
    contactCta: { label: 'Cotizar', href: WA_LINKS.branding },
  },
  {
    icon: '📊',
    title: 'Google Ads',
    description: 'Campañas orientadas a resultados medibles.',
    image: '/images/services/diseno-grafico.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según inversión',
    contactCta: { label: 'Cotizar', href: WA_LINKS.googleAds },
  },
  {
    icon: '📣',
    title: 'Meta Ads',
    description: 'Publicidad en Facebook e Instagram con enfoque en conversión.',
    image: '/images/services/redes-sociales.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según inversión',
    contactCta: { label: 'Cotizar', href: WA_LINKS.metaAds },
  },
  {
    icon: '🔍',
    title: 'SEO',
    description: 'Posicionamiento orgánico para atraer clientes sin pauta.',
    image: '/images/services/desarrollo-web.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según alcance',
    contactCta: { label: 'Cotizar', href: WA_LINKS.seo },
  },
  {
    icon: '🌐',
    title: 'Hosting',
    description: 'Infraestructura confiable para tu presencia digital.',
    image: '/images/services/actualizaciones-web.png',
    priceFrom: 'Desde $9.990/mes',
    paymentLabel: 'Mensual',
    contactCta: { label: 'Cotizar', href: WA_LINKS.hosting },
  },
  {
    icon: '⚡',
    title: 'Automatizaciones',
    description: 'Elimina tareas repetitivas y conecta tus herramientas.',
    image: '/images/services/aplicaciones-ia.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según proyecto',
    contactCta: { label: 'Cotizar', href: WA_LINKS.automatizacion },
  },
  {
    icon: '🤖',
    title: 'IA',
    description: 'Agentes inteligentes, chatbots y soluciones con IA.',
    image: '/images/services/aplicaciones-ia.png',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según proyecto',
    contactCta: { label: 'Cotizar', href: WA_LINKS.automatizacionIa },
  },
] as const

export const FAQ_ITEMS = [
  {
    q: '¿Qué es un Sistema de Crecimiento?',
    a: 'Es la combinación de publicidad, página web, analítica, automatizaciones e IA trabajando juntas para atraer, convertir y retener clientes de forma predecible. No vendemos herramientas sueltas: diseñamos el sistema completo.',
  },
  {
    q: '¿Puedo empezar solo con una landing?',
    a: 'Sí. Landing Express cuesta $74.990 + IVA por única vez e incluye diseño one-page, publicación y un dominio .cl durante el primer año. Después mantienes hosting, SSL, soporte y mantención técnica por $9.990 + IVA al mes.',
  },
  {
    q: '¿Qué incluye el pago mensual de Landing Express?',
    a: 'Hosting, SSL, soporte y mantención técnica para que tu página siga funcionando. El dominio .cl está incluido el primer año, sujeto a disponibilidad y registrado a nombre del cliente; su renovación posterior no está incluida.',
  },
  {
    q: '¿Trabajan con IA?',
    a: 'Sí. La usamos en el trabajo diario y también armamos proyectos a medida: WhatsApp, automatizaciones, agentes o herramientas internas. El alcance no es un pack cerrado: primero diagnosticamos y después cotizamos.',
  },
  {
    q: '¿Hacen funnels?',
    a: 'Sí. Un funnel acota el camino de la visita al contacto o al pago (páginas de paso, captura y medición). Parte desde $149.990 + IVA, según cuántos pasos necesites.',
  },
  {
    q: '¿Trabajan fuera de Santiago?',
    a: 'Sí. Trabajamos 100% remoto con clientes en todo Chile.',
  },
] as const

export const CTA_FINAL = {
  title: '¿Listo para dejar de improvisar?',
  subtitle: 'Hablemos sobre tu negocio y diseñemos el sistema adecuado para hacerlo crecer.',
  primary: 'Agendar reunión',
  note: 'Atención directa por WhatsApp · Lunes a viernes 9–19h',
  location: '📍 Atendemos todo Chile de forma remota',
} as const

export const BRAND = {
  tagline: 'Estrategia · Tecnología · Crecimiento',
  description:
    'Diseñamos sistemas de crecimiento que integran estrategia, tecnología e inteligencia artificial para atraer clientes, automatizar procesos y escalar empresas.',
} as const

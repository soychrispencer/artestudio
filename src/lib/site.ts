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
  video: waLink('Hola Artestudio, quiero cotizar edición de video. Mi negocio/canal es de '),
  web: waLink('Hola Artestudio, quiero cotizar diseño web. Mi negocio es de '),
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
  problemas: 'problemas',
  solucion: 'solucion',
  metodologia: 'metodologia',
  soluciones: 'soluciones',
  planes: 'planes',
  prueba: 'prueba',
  serviciosIndividuales: 'servicios-individuales',
  faq: 'faq',
  contacto: 'contacto',
} as const

export const NAV_LINKS = [
  { label: 'Soluciones', href: `#${SECTION_IDS.soluciones}` },
  { label: 'Metodología', href: `#${SECTION_IDS.metodologia}` },
  { label: 'Planes', href: `#${SECTION_IDS.planes}` },
  { label: 'Servicios', href: `#${SECTION_IDS.serviciosIndividuales}` },
  { label: 'Contacto', href: `#${SECTION_IDS.contacto}` },
] as const

export const FOOTER_SOLUTIONS = [
  { label: 'Sistema de Crecimiento', href: `#${SECTION_IDS.planes}` },
  { label: 'Landing Pages', href: `#${SECTION_IDS.soluciones}` },
  { label: 'Sitios Web', href: `#${SECTION_IDS.soluciones}` },
  { label: 'Automatizaciones', href: `#${SECTION_IDS.soluciones}` },
  { label: 'Agentes IA', href: `#${SECTION_IDS.soluciones}` },
  { label: 'Analítica', href: `#${SECTION_IDS.soluciones}` },
] as const

/** Plataformas y herramientas que también manejamos en proyectos. */
export const FOOTER_TOOLS = [
  { label: 'Shopify', href: 'https://www.shopify.com/' },
  { label: 'JumpSeller', href: 'https://jumpseller.com/' },
  { label: 'WordPress', href: 'https://wordpress.org/' },
  { label: 'WooCommerce', href: 'https://woocommerce.com/' },
  { label: 'Adobe Creative Cloud', href: 'https://www.adobe.com/creativecloud.html' },
  { label: 'Avid Pro Tools', href: 'https://www.avid.com/pro-tools' },
  { label: 'Meta Ads', href: 'https://www.facebook.com/business/ads' },
  { label: 'Google Ads', href: 'https://ads.google.com/' },
] as const

export const HERO = {
  badge: 'Estudio de crecimiento digital · Chile',
  title: 'Sistemas que hacen crecer tu negocio.',
  subtitle:
    'Publicidad, web, IA y automatizaciones conectadas para atraer clientes y convertir oportunidades.',
  cta: 'Quiero hacer crecer mi negocio',
  ctaSecondary: 'Ver cómo funciona',
  trust: [
    'Atención directa por WhatsApp',
    'Todo medible y conectado',
  ],
} as const

export const PROBLEMAS = {
  title: '¿Te suena familiar?',
  items: [
    'Inviertes en publicidad pero no vendes más.',
    'Tienes web o redes, pero casi nadie te contacta.',
    'Todo depende de responder WhatsApp manualmente.',
  ],
  closing: 'No necesitas más herramientas.',
  closingAccent: 'Necesitas un sistema.',
  image: '/images/contenido-redes.png',
} as const

export const SOLUCION = {
  title: 'Diseñamos un Sistema de Crecimiento para tu empresa.',
  text: 'Conectamos publicidad, página web, analítica, automatizaciones e inteligencia artificial para que todo trabaje junto.',
  highlight: 'No implementamos herramientas.',
  highlightAccent: 'Diseñamos sistemas completos.',
} as const

export const METODOLOGIA = {
  label: 'Metodología',
  title: 'Artestudio Growth System™',
  image: '/images/proceso-web-soporte.png',
  steps: [
    { title: 'Diagnóstico', description: 'Entendemos tu negocio.', icon: 'search' },
    { title: 'Arquitectura', description: 'Diseñamos el sistema.', icon: 'blueprint' },
    { title: 'Implementación', description: 'Web, ads y automatizaciones.', icon: 'code' },
    { title: 'Optimización', description: 'Mejoramos con datos.', icon: 'chart' },
    { title: 'Escalamiento', description: 'Seguimos creciendo contigo.', icon: 'rocket' },
  ],
} as const

export const SOLUCIONES = {
  label: 'Soluciones',
  title: 'Todo conectado en un solo sistema',
  subtitle: 'No vendemos herramientas sueltas. Diseñamos piezas que trabajan juntas.',
  items: [
    {
      title: 'Landing Pages',
      description: 'Convierte visitas en oportunidades.',
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
      description: 'WhatsApp, CRM y procesos sin tareas repetitivas.',
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
  label: 'Servicios individuales',
  title: '¿Ya sabes lo que necesitas?',
  subtitle: 'Servicios puntuales que puedes contratar solos o sumar a tu plan.',
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
    a: 'Sí. El plan Landing Express incluye el diseño de tu landing (pago único de $74.990) y hosting mensual ($9.990/mes). El pago online se hace en 2 pasos: primero el setup, luego activas la suscripción de hosting en MercadoPago.',
  },
  {
    q: '¿Qué incluye el pago mensual de Landing Express?',
    a: 'Hosting, SSL, soporte y mantenimiento técnico para que tu página siga funcionando. El diseño de la landing se cobra una sola vez en el primer paso del checkout.',
  },
  {
    q: '¿Trabajan con IA?',
    a: 'Sí. Utilizamos IA para agentes de atención, automatización de WhatsApp, clasificación de leads y seguimientos automáticos. Siempre con un propósito claro: reducir tiempos y mejorar resultados.',
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
  tagline: 'Estudio de crecimiento digital',
  description:
    'Diseñamos sistemas inteligentes de crecimiento para empresas. Publicidad, web, IA y automatizaciones trabajando como un solo sistema.',
} as const

/**
 * Copy orientado al CLIENTE — conversión
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
  general: waLink('Hola Artestudio, quiero empezar. Mi negocio es de '),
  asesoria: waLink('Hola Artestudio, tengo dudas antes de contratar. Mi negocio es '),
  planInicio: waLink('Hola Artestudio, quiero el plan Inicio. Mi negocio es de '),
  planCrecer: waLink('Hola Artestudio, quiero el plan Crecer. Mi negocio es de '),
  planPro: waLink('Hola Artestudio, quiero el plan Pro. Mi negocio es de '),
  redes: waLink('Hola Artestudio, quiero cotizar gestión de redes sociales. Mi negocio es de '),
  web: waLink('Hola Artestudio, quiero cotizar diseño web. Mi negocio es de '),
  automatizacionIa: waLink('Hola Artestudio, quiero evaluar automatizaciones o IA para mi negocio. Mi negocio es de '),
  diseno: waLink('Hola Artestudio, quiero cotizar diseño gráfico. Mi negocio es de '),
  mantencion: waLink('Hola Artestudio, quiero cotizar mantención web.'),
  automatizacion: waLink('Hola Artestudio, quiero cotizar automatizaciones. Mi negocio es de '),
} as const

export const SECTION_IDS = {
  inicio: 'inicio',
  planes: 'planes',
  serviciosIndividuales: 'servicios-individuales',
  proceso: 'proceso',
  prueba: 'prueba',
  faq: 'faq',
  contacto: 'contacto',
} as const

export const NAV_LINKS = [
  { label: 'Planes', href: `#${SECTION_IDS.planes}` },
  { label: 'Servicios', href: `#${SECTION_IDS.serviciosIndividuales}` },
  { label: 'Cómo funciona', href: `#${SECTION_IDS.proceso}` },
  { label: 'Contacto', href: `#${SECTION_IDS.contacto}` },
] as const

export const HERO = {
  badge: 'Diseño web profesional · Chile',
  title: 'Tu landing lista en 48 hrs',
  titleAccent: 'Desde $74.990',
  subtitle:
    'Incluye: hosting, mantenimiento y soporte para que tu web siga funcionando correctamente.',
  cta: 'Quiero mi landing',
  ctaSecondary: 'Ver planes',
  trust: [
    'Atención directa por WhatsApp',
    'Entrega en 48 horas hábiles',
  ],
} as const

export const PROBLEMAS = {
  title: '¿Te pasa algo de esto?',
  subtitle: 'Si te reconoces, no estás solo. La mayoría llega por aquí.',
  items: [
    {
      emoji: '😶',
      title: 'Tienes negocio, pero poca gente te escribe',
      description:
        'Instagram o boca a boca no alcanzan. Necesitas una página clara que explique qué haces y un botón para contactarte al tiro.',
    },
    {
      emoji: '📱',
      title: 'Redes abandonadas o sin orden',
      description:
        'Publicas cuando puedes. Sin calendario ni diseño, da la impresión de que el negocio está quieto.',
    },
    {
      emoji: '⏳',
      title: 'No tienes tiempo para web, diseño y tecnología',
      description:
        'Quieres enfocarte en vender y atender. Un equipo que lo haga por ti cada mes cambia el juego.',
    },
  ],
} as const

export const PLANES_INTRO = {
  label: 'Planes web',
  title: 'Elige tu plan según tu etapa',
  subtitle: 'Tres opciones claras. Pago único por diseño + mensualidad pequeña para hosting y soporte.',
  note: 'El pago mensual cubre hosting, mantenimiento técnico básico y soporte.',
} as const

export const PRICING_UI = {
  setupLabel: 'Pago único por diseño',
  monthlyLabel: 'Mensualidad',
  monthlySuffix: '/mes',
  commitmentShort: 'Hosting, mantenimiento y soporte',
  includesLabel: 'Incluye',
  excludesLabel: 'No incluye',
  deliveryLabel: 'Tiempo de entrega',
  footnote: 'Precios en CLP · Pago por tarjeta vía MercadoPago · El pago mensual cubre hosting, mantenimiento técnico básico y soporte.',
} as const

export const PLAN_CTA_LABELS = {
  'plan-esencial': 'Quiero plan Esencial',
  'plan-pro': 'Quiero plan Pro',
  'plan-pro-plus': 'Quiero plan Pro+',
} as const

export const PLAN_WA_LINKS = {
  'plan-esencial': WA_LINKS.web,
  'plan-pro': WA_LINKS.web,
  'plan-pro-plus': WA_LINKS.web,
} as const

export const AI_ADDON = {
  title: 'Automatización o IA para tu negocio',
  price: 'bajo evaluación',
  description:
    'Si necesitas automatizar respuestas, formularios o procesos, revisamos el alcance antes de prometer una solución.',
  cta: 'Evaluar automatización',
} as const

export const INDIVIDUAL_SERVICES_INTRO = {
  label: 'Servicios individuales',
  title: '¿Ya sabes lo que necesitas?',
  subtitle:
    'También trabajamos servicios individuales para clientes que necesitan algo puntual o quieren empezar por un área específica. Pueden combinarse con cualquier plan o contratarse solos.',
} as const

export const INDIVIDUAL_SERVICES = [
  {
    icon: '📱',
    title: 'Redes sociales',
    description:
      'Gestión mensual de contenido para crecer con consistencia en Instagram, TikTok y Facebook.',
    image:
      'https://images.pexels.com/photos/2077990/pexels-photo-2077990.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Desde $49.990/mes',
    paymentLabel: 'Suscripción mensual',
    priceNote: 'Ideal para mantener tu marca activa cada mes.',
    subscription: {
      id: 'plan-redes-suscripcion',
      title: 'Redes sociales — Suscripción',
      setup: 0,
      monthly: 49_990,
      cta: 'Suscribirme a redes',
      note: 'Incluye 8 contenidos mensuales.',
    },
    contactCta: {
      label: 'Cotizar redes avanzadas',
      href: WA_LINKS.redes,
    },
  },
  {
    icon: '🎨',
    title: 'Branding e Identidad Visual',
    description: 'Logo profesional, paleta de colores y manual de marca para lanzar tu negocio.',
    image:
      'https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Desde $149.990',
    paymentLabel: 'Pago único',
    priceNote: 'Para identidad visual base.',
    contactCta: {
      label: 'Cotizar branding completo',
      href: WA_LINKS.diseno,
    },
  },
  {
    icon: '🖼️',
    title: 'Diseño gráfico',
    description: 'Flyers, presentaciones, menús y material visual para marketing impreso y digital.',
    image:
      'https://images.pexels.com/photos/7484736/pexels-photo-7484736.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según alcance',
    priceNote: 'Para piezas editoriales y corporativas.',
    contactCta: {
      label: 'Cotizar diseño gráfico',
      href: WA_LINKS.diseno,
    },
  },
  {
    icon: '💻',
    title: 'Desarrollo web a medida',
    description: 'Sitios corporativos, aplicaciones web y plataformas para profesionales y empresas.',
    image:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según proyecto',
    priceNote: 'Para desarrollos personalizados.',
    contactCta: {
      label: 'Cotizar desarrollo web',
      href: WA_LINKS.web,
    },
  },
  {
    icon: '🤖',
    title: 'Aplicaciones IA',
    description: 'Automatizaciones, chatbots y soluciones con inteligencia artificial para tu negocio.',
    image:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Cotizar',
    paymentLabel: 'Según proyecto',
    priceNote: 'Para soluciones personalizadas.',
    contactCta: {
      label: 'Cotizar aplicación IA',
      href: WA_LINKS.automatizacionIa,
    },
  },
  {
    icon: '🔧',
    title: 'Actualizaciones',
    description: 'Mantenimientos, modificaciones y actualizaciones web de los planes y proyectos que tenemos. De modificaciones menores a completas.',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Desde $29.990',
    paymentLabel: 'Por proyecto',
    priceNote: 'Dependiendo del contenido requerido.',
    price: 29_990,
    buyLabel: 'Pagar ahora',
    contactCta: {
      label: 'Cotizar actualización',
      href: WA_LINKS.web,
    },
  },
] as const

export const PROCESO = {
  label: 'Proceso',
  title: 'Cómo funciona',
  steps: [
    {
      title: 'Conversas con nosotros',
      description: '30 minutos por WhatsApp o videollamada. Entendemos tu negocio y elegimos el camino correcto.',
    },
    {
      title: 'Activas tu plan o servicio',
      description: 'Pagas la activación y al siguiente día hábil ya estamos trabajando.',
    },
    {
      title: 'Revisas y apruebas',
      description: 'Tú tienes la última palabra en todo. Sin sorpresas.',
    },
    {
      title: 'Mantienes tu web activa',
      description: 'Hosting, mantenimiento técnico y soporte básico para que tu presencia online siga funcionando.',
    },
  ],
} as const

export const PRUEBA_SOCIAL = {
  label: 'Trabajo real',
  title: 'Trabajo real. Sin inventar.',
  honest:
    'Preferimos mostrarte proyectos reales antes que reseñas inventadas.',
  behanceLabel: 'Ver portafolio en Behance',
  instagramLabel: 'Ver proyectos en Instagram',
} as const

export const FAQ_ITEMS = [
  {
    q: '¿Qué incluye el pago mensual?',
    a: 'El pago mensual cubre hosting, mantenimiento técnico básico y soporte para que tu web siga funcionando correctamente. Es como el servicio de luz o internet: pagas por mantener el servicio activo y funcionando.',
  },
  {
    q: '¿Puedo contratar solo redes sociales sin una web?',
    a: 'Sí. Puedes contratar Redes Sociales por $49.990/mes: 8 contenidos mensuales, con 1 video o reel de hasta 60 segundos y 7 piezas estáticas. También puedes sumar una web después si lo necesitas.',
  },
  {
    q: '¿Puedo empezar con la Landing y subir después?',
    a: 'Sí. Si necesitas más adelante un sitio más completo, podemos escalar tu landing a una Web Profesional o Web Avanzada.',
  },
  {
    q: '¿Trabajan con IA o automatizaciones?',
    a: 'Sí, ofrecemos soluciones de IA y automatizaciones bajo evaluación. Primero revisamos qué quieres automatizar, qué información tienes disponible y si conviene resolverlo con IA, formularios u otra herramienta más simple.',
  },
  {
    q: '¿Trabajan fuera de Santiago?',
    a: 'Sí. Trabajamos 100% remoto con clientes en todo Chile.',
  },
] as const

export const CTA_FINAL = {
  title: '¿Listo para tener tu landing?',
  subtitle: 'Tu página lista en 48 horas. Pago único desde $74.990 + $9.990/mes.',
  primary: 'Cotizar por WhatsApp',
  note: 'Atención directa por WhatsApp · Lunes a viernes 9–19h',
  location: '📍 Atendemos todo Chile de forma remota',
} as const

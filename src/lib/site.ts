/**
 * Copy orientado al CLIENTE — conversión
 */

import { MIN_COMMITMENT_MONTHS } from './subscriptions'

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
  badge: 'Web, contenido y soporte digital · Chile',
  title: 'Consigue más clientes por internet.',
  titleAccent: 'Web, contenido y soporte para vender mejor.',
  subtitle:
    'Creamos una presencia online clara para que te encuentren, te escriban y confíen en tu negocio.',
  cta: 'Quiero un plan completo',
  ctaSecondary: 'Solo necesito un servicio',
  trust: [
    'Atención directa por WhatsApp',
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
  label: 'Planes principales',
  title: 'Elige tu plan según tu etapa',
  subtitle: 'Tres caminos claros para partir, crecer o escalar.',
  note: '',
} as const

export const PRICING_UI = {
  setupLabel: 'Creación inicial incluida',
  monthlyLabel: 'Mensualidad',
  monthlySuffix: '/mes',
  commitmentShort: `Mínimo ${MIN_COMMITMENT_MONTHS} meses`,
  includesLabel: 'Incluye',
  excludesLabel: 'No incluye',
  deliveryLabel: 'Tiempo de entrega',
  footnote: `Precios en CLP · Pago por tarjeta vía MercadoPago.`,
} as const

export const PLAN_CTA_LABELS = {
  'plan-inicio': 'Quiero el plan Inicio',
  'plan-crecer': 'Quiero el plan Crecer',
  'plan-pro-ia': 'Quiero el plan Pro',
} as const

export const PLAN_WA_LINKS = {
  'plan-inicio': WA_LINKS.planInicio,
  'plan-crecer': WA_LINKS.planCrecer,
  'plan-pro-ia': WA_LINKS.planPro,
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
    'Contrata un servicio puntual o cotiza algo más elaborado.',
} as const

export const INDIVIDUAL_SERVICES = [
  {
    icon: '🌐',
    title: 'Diseño web / Landing',
    description: 'Landing base para presentar tu negocio, explicar tu oferta y recibir contactos.',
    image:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 249_990,
    priceFrom: 'Desde $249.990',
    paymentLabel: 'Pago único',
    buyLabel: 'Pagar landing base',
    priceNote: 'Pago único, sin mensualidad ni permanencia.',
    contactCta: {
      label: 'Cotizar sitio completo',
      href: WA_LINKS.web,
    },
  },
  {
    icon: '📱',
    title: 'Redes sociales',
    description:
      'Gestión mensual de 8 contenidos reutilizables: 1 video o reel de hasta 60 segundos y 7 piezas estáticas.',
    image:
      'https://images.pexels.com/photos/2077990/pexels-photo-2077990.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Desde $49.990/mes',
    paymentLabel: 'Suscripción mensual',
    subscription: {
      id: 'plan-redes-suscripcion',
      title: 'Redes sociales — Suscripción',
      setup: 0,
      monthly: 49_990,
      cta: 'Suscribirme a redes',
    },
    contactCta: {
      label: 'Cotizar redes avanzadas',
      href: WA_LINKS.redes,
    },
  },
  {
    icon: '🎨',
    title: 'Diseño gráfico',
    description: 'Diseño puntual para marca, piezas comerciales o material visual que necesitas resolver rápido.',
    image:
      'https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 59_990,
    priceFrom: 'Desde $59.990',
    paymentLabel: 'Pago único',
    buyLabel: 'Pagar diseño base',
    contactCta: {
      label: 'Cotizar branding',
      href: WA_LINKS.diseno,
    },
  },
  {
    icon: '🛠️',
    title: 'Mantención web',
    description: 'Actualizaciones, cambios, seguridad y soporte para tu sitio existente.',
    image:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    priceFrom: 'Desde $49.990/mes',
    paymentLabel: 'Suscripción mensual',
    subscription: {
      id: 'plan-mantencion-suscripcion',
      title: 'Mantención web — Suscripción',
      setup: 0,
      monthly: 49_990,
      cta: 'Contratar mantención',
    },
    contactCta: {
      label: 'Cotizar soporte avanzado',
      href: WA_LINKS.mantencion,
    },
  },
  {
    icon: '⚡',
    title: 'Automatizaciones',
    description: 'Automatización simple para ordenar formularios, avisos, tareas o procesos repetitivos.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 89_990,
    priceFrom: 'Desde $89.990',
    paymentLabel: 'Pago único',
    buyLabel: 'Pagar automatización simple',
    contactCta: {
      label: 'Cotizar proyecto mayor',
      href: WA_LINKS.automatizacion,
    },
  },
  {
    icon: '🧩',
    title: 'IA aplicada',
    description: 'Diagnóstico para evaluar si conviene usar IA en respuestas, procesos o atención al cliente.',
    image:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 49_990,
    priceFrom: 'Diagnóstico desde $49.990',
    paymentLabel: 'Pago único',
    buyLabel: 'Pagar diagnóstico IA',
    priceNote: 'Define alcance y viabilidad.',
    contactCta: {
      label: 'Cotizar implementación',
      href: WA_LINKS.automatizacionIa,
    },
  },
] as const

export const PROCESO = {
  label: 'Proceso',
  title: 'Cómo funciona',
  steps: [
    {
      title: 'Conversas con nosotros',
      description: 'Entendemos tu negocio y elegimos el camino correcto.',
    },
    {
      title: 'Activas tu plan o servicio',
      description: 'Pagas online y empezamos al siguiente día hábil.',
    },
    {
      title: 'Revisas y apruebas',
      description: 'Tú apruebas antes de publicar.',
    },
    {
      title: 'Creces cada mes',
      description: 'Mantenemos tu presencia digital activa.',
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
    q: `¿Qué significa la permanencia mínima de ${MIN_COMMITMENT_MONTHS} meses?`,
    a: `La creación inicial está incluida, por eso pedimos mantener el plan activo al menos ${MIN_COMMITMENT_MONTHS} meses. Después puedes cancelar con aviso previo.`,
  },
  {
    q: '¿Puedo contratar solo redes sociales sin una web?',
    a: 'Sí. Puedes contratar redes por $49.990/mes y sumar web después si lo necesitas.',
  },
  {
    q: '¿Puedo empezar con el plan Inicio y subir después?',
    a: 'Sí. Puedes subir a Crecer o Pro cuando tu negocio lo necesite.',
  },
  {
    q: '¿Trabajan con IA o automatizaciones?',
    a: 'Sí, pero primero revisamos alcance y viabilidad para no prometer de más.',
  },
  {
    q: '¿Trabajan fuera de Santiago?',
    a: 'Sí. Trabajamos 100% remoto con clientes en todo Chile.',
  },
] as const

export const CTA_FINAL = {
  title: '¿Listo para tener más clientes?',
  subtitle: 'Una conversación de 30 minutos puede cambiar la dirección de tu negocio. Sin compromiso.',
  primary: 'Hablar por WhatsApp',
  note: 'Atención directa por WhatsApp · Lunes a viernes 9–19h',
  location: '📍 Atendemos todo Chile de forma remota',
} as const

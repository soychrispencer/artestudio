/**
 * Copy y navegación — estrategia: suscripción mensual + checkout en sitio
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
  general: waLink('Hola Artestudio, tengo una consulta antes de contratar un plan.'),
  asesoria: waLink('Hola Artestudio, necesito asesoría para elegir el plan correcto.'),
} as const

export const SECTION_IDS = {
  inicio: 'inicio',
  planes: 'planes',
  propiedad: 'propiedad',
  addons: 'addons',
  proceso: 'proceso',
  prueba: 'prueba',
  faq: 'faq',
  contacto: 'contacto',
} as const

export const NAV_LINKS = [
  { label: 'Planes', href: `#${SECTION_IDS.planes}` },
  { label: 'Tu propiedad', href: `#${SECTION_IDS.propiedad}` },
  { label: 'Proceso', href: `#${SECTION_IDS.proceso}` },
  { label: 'Contacto', href: `#${SECTION_IDS.contacto}` },
] as const

export const HERO = {
  title: 'Un plan mensual. Web, redes e IA trabajando por tu negocio.',
  highlight: 'Paga en línea. Sin ir y venir por cobros.',
  subtitle:
    'Activas con un pago inicial, después un monto fijo cada mes. Nosotros diseñamos, publicamos y mejoramos tu presencia digital.',
  cta: 'Ver planes y contratar',
  trust: [
    'Pago seguro con MercadoPago',
    `${MIN_COMMITMENT_MONTHS} meses mínimo · después el sitio es tuyo`,
    'Mensualidad automática, sin facturas manuales',
  ],
} as const

export const PLANES_INTRO = {
  title: 'Elige tu plan mensual',
  subtitle:
    'El primer pago incluye activación + tu primer mes. La mensualidad se cobra automático en MercadoPago.',
  note: `Permanencia mínima ${MIN_COMMITMENT_MONTHS} meses. Luego puedes cancelar el plan mensual con 30 días de aviso y quedarte con todo lo entregado.`,
} as const

export const PROPIEDAD = {
  title: `Después de ${MIN_COMMITMENT_MONTHS} meses, tu web y diseños son tuyos`,
  paragraphs: [
    `Los primeros ${MIN_COMMITMENT_MONTHS} meses son el tiempo mínimo para construir, publicar y medir resultados. En ese período trabajamos juntos con el plan activo.`,
    'Al cumplir los 3 meses, te entregamos los archivos, accesos y propiedad de lo creado (sitio, piezas de diseño y contenido según tu plan). El dominio y hosting quedan a tu nombre.',
    'Si quieres seguir, mantienes el plan mensual con el mismo equipo. Si prefieres irte, te llevas tu proyecto. Sin devoluciones del setup: es trabajo real ya ejecutado.',
  ],
  bullets: [
    'No es alquiler eterno de tu web',
    'Entrega documentada al cumplir el período',
    'Puedes migrar a otro proveedor con todo lo tuyo',
  ],
} as const

export const PROCESO = [
  'Eliges plan y pagas en línea (MercadoPago)',
  'En 24–48h arrancamos con brief por WhatsApp',
  'Revisas y apruebas cada entrega',
  'Cada mes: contenido, mejoras y reporte según tu plan',
] as const

export const PRUEBA_SOCIAL = {
  honest:
    'Trabajo real, sin reseñas inventadas. Mira proyectos y conversa con nosotros antes de pagar.',
  behanceLabel: 'Portafolio en Behance',
  instagramLabel: 'Proyectos en Instagram',
} as const

export const FAQ_ITEMS = [
  {
    q: '¿Cómo funciona el pago?',
    a: 'Contratas en esta web con MercadoPago. El primer cobro es activación + primer mes. Los meses siguientes se debitan automáticamente según tu plan.',
  },
  {
    q: `¿Qué pasa después de los ${MIN_COMMITMENT_MONTHS} meses?`,
    a: 'Te entregamos tu sitio y diseños: eres dueño de lo creado. Puedes seguir con nosotros pagando el plan mensual, o cancelar con 30 días de aviso y llevarte todo.',
  },
  {
    q: '¿Puedo cancelar antes de los 3 meses?',
    a: 'La permanencia mínima es de 3 meses por el trabajo de activación. Si necesitas salir antes, conversamos tu caso; no prometemos devolución del setup porque el trabajo ya está en marcha.',
  },
  {
    q: '¿Puedo sumar el agente IA después?',
    a: 'Sí. Puedes agregar el complemento de Agente IA Pro desde esta misma página o al subir de plan.',
  },
  {
    q: '¿Trabajan en todo Chile?',
    a: 'Sí, 100% remoto. Brief, revisiones y soporte por WhatsApp y videollamada.',
  },
] as const

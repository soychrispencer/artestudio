/**
 * Configuración central del sitio — rediseño 2026
 */

export const WA_NUMBER = '56938733230'

export const CONTACT = {
  whatsapp: '+569 3873 3230',
  email: 'hola@artestudio.cl',
  instagram: 'https://instagram.com/artestudio.cl',
  behance: 'https://www.behance.net/soychrispencer',
} as const

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

export const WA_LINKS = {
  inicio: waLink('Hola Artestudio, quiero el plan Inicio.'),
  crecer: waLink('Hola Artestudio, quiero el plan Crecer.'),
  pro: waLink('Hola Artestudio, quiero el plan Pro.'),
  general: waLink('Hola Artestudio, quiero hablar de mi proyecto.'),
  puntual: waLink('Hola Artestudio, tengo un proyecto puntual y quiero cotizar.'),
} as const

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const PLANS = [
  {
    id: 'inicio',
    name: 'Inicio',
    setup: '$74.990',
    setupNote: 'pago único',
    monthly: '$14.990',
    featured: false,
    includes: [
      'Landing de 1 página',
      'Hosting incluido',
      'Botón WhatsApp',
      '1 revisión al mes',
      'Soporte por WhatsApp',
    ],
    excludes: ['Redes sociales', 'Apps con IA'],
    cta: 'Quiero plan Inicio',
    wa: WA_LINKS.inicio,
    variant: 'outline' as const,
  },
  {
    id: 'crecer',
    name: 'Crecer',
    setup: '$149.990',
    setupNote: 'pago único',
    monthly: '$89.990',
    featured: true,
    badge: 'Más popular',
    includes: [
      'Todo lo del plan Inicio',
      'Sitio de hasta 5 páginas',
      'Analytics básico',
      '12 publicaciones/mes en redes',
      'Diseño gráfico para redes',
      'Copy para publicaciones',
      'Informe mensual',
    ],
    excludes: [] as string[],
    cta: 'Quiero plan Crecer',
    wa: WA_LINKS.crecer,
    variant: 'primary' as const,
  },
  {
    id: 'pro',
    name: 'Pro',
    setup: '$249.990+',
    setupNote: 'pago único',
    monthly: '$149.990',
    featured: false,
    includes: [
      'Todo lo del plan Crecer',
      'eCommerce o tienda online',
      'Chatbot / agente con IA',
      'Automatizaciones',
      'SEO mensual',
      'Soporte prioritario 24h',
    ],
    excludes: [] as string[],
    cta: 'Quiero plan Pro',
    wa: WA_LINKS.pro,
    variant: 'outline' as const,
  },
] as const

export const SERVICIOS = [
  {
    id: 'servicio-web',
    num: '01',
    icon: '🌐',
    title: 'Diseño web que convierte',
    description:
      'Landings y sitios pensados para captar clientes, no solo para verse bonitos.',
    features: [
      'Diseño responsive',
      'Optimizado para móvil',
      'WhatsApp y formularios',
      'Hosting y soporte incluido',
    ],
  },
  {
    id: 'servicio-redes',
    num: '02',
    icon: '📱',
    title: 'Redes sociales con estrategia',
    description:
      'Contenido constante, diseño coherente y reportes que muestran avance real.',
    features: [
      'Calendario editorial',
      'Diseño de publicaciones',
      'Copy y hashtags',
      'Informe mensual',
    ],
  },
  {
    id: 'servicio-ia',
    num: '03',
    icon: '🤖',
    title: 'Apps y automatizaciones con IA',
    description:
      'Chatbots, flujos automáticos y herramientas que ahorran tiempo a tu negocio.',
    features: [
      'Agentes de atención',
      'Integraciones con WhatsApp',
      'Automatización de tareas',
      'Dashboards simples',
    ],
  },
] as const

export const PROBLEMAS = [
  {
    emoji: '😴',
    title: 'Web que existe pero no vende',
    description:
      'Tienes página, pero no genera consultas ni ventas. Falta enfoque en conversión.',
  },
  {
    emoji: '📉',
    title: 'Redes sociales sin estrategia',
    description:
      'Publicas cuando puedes, sin calendario ni objetivos. Tu audiencia no crece.',
  },
  {
    emoji: '🤖',
    title: 'Perdiendo terreno frente a la IA',
    description:
      'Tu competencia automatiza atención y contenido. Tú sigues haciendo todo manual.',
  },
] as const

export const PROCESO = [
  {
    step: 1,
    title: 'Conversación inicial',
    description: '30 min por WhatsApp para entender tu negocio y recomendar el plan ideal.',
  },
  {
    step: 2,
    title: 'Activación rápida',
    description: 'Arrancamos en 24–48 horas hábiles con brief y acceso a lo necesario.',
  },
  {
    step: 3,
    title: 'Entrega y revisión',
    description: 'Te mostramos avances. Tú apruebas antes de publicar.',
  },
  {
    step: 4,
    title: 'Crecimiento mensual',
    description: 'Reportes, mejoras y soporte continuo mes a mes.',
  },
] as const

export const TESTIMONIOS = [
  {
    name: 'Camila R.',
    company: 'Estudio de yoga',
    initial: 'C',
    text: 'En dos semanas tenía mi landing lista y empecé a recibir consultas por WhatsApp. El plan mensual me da tranquilidad.',
    stars: 5,
  },
  {
    name: 'Diego M.',
    company: 'Taller mecánico',
    initial: 'D',
    text: 'Antes no teníamos presencia digital. Ahora tenemos web, redes activas y un chatbot que responde fuera de horario.',
    stars: 5,
  },
  {
    name: 'Valentina S.',
    company: 'Consultora independiente',
    initial: 'V',
    text: 'Lo que más valoro es la claridad: un precio fijo al mes, sin sorpresas ni contratos eternos.',
    stars: 5,
  },
] as const

export const FAQ_ITEMS = [
  {
    q: '¿Qué pasa si quiero cancelar el plan mensual?',
    a: 'Puedes cancelar con 30 días de aviso. No hay multas ni permanencia mínima. Tu web y archivos te quedan según lo acordado en el plan.',
  },
  {
    q: '¿Puedo empezar solo con web y agregar redes después?',
    a: 'Sí. Muchos clientes empiezan con el plan Inicio y suben a Crecer cuando quieren sumar redes y más contenido.',
  },
  {
    q: '¿Qué es exactamente una "app con IA"?',
    a: 'Puede ser un chatbot en tu web o WhatsApp, respuestas automáticas a preguntas frecuentes, o flujos que conectan formularios con tu email o CRM. Lo adaptamos a tu operación.',
  },
  {
    q: '¿Cuánto tiempo toma tener mi web lista?',
    a: 'Una landing express suele estar lista en 24–48 horas hábiles. Sitios de 5 páginas o más dependen del contenido, pero el plan Crecer arranca en la primera semana.',
  },
] as const

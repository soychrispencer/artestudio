/**
 * Contenido y enlaces — estrategia comercial Artestudio
 * Identidad visual: no modificar aquí (morado + Inter en CSS)
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
  landing: waLink(
    'Hola Artestudio, quiero la Landing Express. Tengo un negocio de '
  ),
  crecimiento: waLink(
    'Hola Artestudio, me interesa el Plan Crecimiento. Tengo un negocio de '
  ),
  ia: waLink('Hola Artestudio, me interesa el agente IA para mi negocio.'),
  general: waLink('Hola Artestudio, quiero hablar de mi proyecto.'),
} as const

export const SECTION_IDS = {
  inicio: 'inicio',
  caminos: 'caminos',
  landingExpress: 'landing-express',
  planCrecimiento: 'plan-crecimiento',
  tresMeses: 'tres-meses',
  proceso: 'proceso',
  prueba: 'prueba',
  faq: 'faq',
  contacto: 'contacto',
} as const

export const NAV_LINKS = [
  { label: 'Cómo empezar', href: `#${SECTION_IDS.caminos}` },
  { label: 'Landing Express', href: `#${SECTION_IDS.landingExpress}` },
  { label: 'Plan Crecimiento', href: `#${SECTION_IDS.planCrecimiento}` },
  { label: 'Contacto', href: `#${SECTION_IDS.contacto}` },
] as const

export const HERO_TRUST = [
  '+40 proyectos en Chile',
  'Respuesta en menos de 2 horas',
  '3 meses mínimo o te devolvemos el setup',
] as const

export const CAMINOS = [
  {
    id: 'rapido',
    anchor: SECTION_IDS.landingExpress,
    icon: '🚀',
    title: 'Quiero estar en internet esta semana',
    description:
      'Una landing page lista en 48 horas. Con tu info, fotos y botón de contacto. Sin complicaciones.',
    cta: 'Esto es lo que necesito →',
  },
  {
    id: 'serio',
    anchor: SECTION_IDS.planCrecimiento,
    icon: '📈',
    title: 'Quiero una presencia digital que genere clientes',
    description:
      'Web completa + redes sociales activas + estrategia. Un equipo que trabaja tu negocio todos los meses.',
    cta: 'Esto es lo que necesito →',
  },
] as const

export const LANDING_EXPRESS = {
  setupToday: '$74.990',
  setupLabel: 'hoy para empezar',
  monthly: '$19.990',
  includes: [
    'Landing de una página diseñada a medida',
    'Textos asistidos con IA (tú revisas y apruebas)',
    'Hosting + dominio el primer año',
    'Botón de WhatsApp o formulario de contacto',
    '1 ajuste mensual incluido',
  ],
  guarantee:
    'Si en 3 meses no estás conforme con los resultados, te devolvemos el setup. Sin preguntas.',
  permanencia: 'Permanencia mínima de 3 meses. Después cancelas con 30 días de aviso.',
  cta: 'Quiero mi landing express',
} as const

export const PLAN_CRECIMIENTO = {
  framing:
    'No contratas un sitio web. Contratas un equipo que piensa en tu negocio todos los meses: estrategia, contenido, optimización y resultados.',
  setup: '$199.990',
  setupLabel: 'de activación',
  monthly: 'desde $89.990',
  monthlyNote: '/mes (mínimo 3 meses)',
  includes: [
    'Sitio web hasta 6 páginas (diseñado para convertir)',
    'Google Analytics + Meta Pixel instalados',
    'Gestión de Instagram y/o Facebook (12 publicaciones/mes)',
    'Diseño de piezas gráficas mensuales',
    'Informe de resultados cada mes',
    'Soporte prioritario por WhatsApp',
  ],
  addon: {
    title: 'Agente IA para tu negocio',
    price: 'desde $49.990/mes adicional',
    description:
      'Chatbot que atiende clientes, responde consultas y genera leads en WhatsApp o tu web.',
  },
  cta: 'Quiero hablar de esto',
} as const

export const TRES_MESES_COPY = {
  title: '¿Por qué hay permanencia de 3 meses?',
  paragraphs: [
    'Porque los resultados digitales no aparecen de un día para otro.',
    'Una landing necesita tráfico para convertir. Las redes necesitan constancia para crecer. Google necesita tiempo para posicionar.',
    '3 meses es el mínimo real para ver si algo funciona.',
    'Si al tercer mes no estás conforme, te devolvemos el setup y te ayudamos a migrar todo. Sin dramas.',
  ],
} as const

export const PROCESO = [
  'Conversas con nosotros — 30 min por WhatsApp o videollamada',
  'Activas tu plan — pagas el setup y empezamos en 24h',
  'Revisas y apruebas — tú tienes la última palabra',
  'Creces cada mes — reportes, mejoras y estrategia continua',
] as const

export const PRUEBA_SOCIAL = {
  honest:
    'Somos una agencia joven y honesta. Preferimos mostrarte trabajo real que inventar reseñas.',
  behanceLabel: 'Ver portafolio en Behance',
  instagramLabel: 'Ver proyectos en Instagram',
} as const

export const FAQ_ITEMS = [
  {
    q: '¿Qué pasa si cancelo antes de los 3 meses?',
    a: 'Pierdes el setup, pero te entregamos todos los archivos y accesos. No te dejamos colgado.',
  },
  {
    q: '¿Puedo empezar con la landing y después subir al plan Crecimiento?',
    a: 'Sí. El setup de landing se descuenta del setup del plan Crecimiento si subes dentro de los primeros 6 meses.',
  },
  {
    q: '¿Qué es el "agente IA" que mencionan?',
    a: 'Un chatbot entrenado con la info de tu negocio que responde preguntas, cotiza y capta leads en WhatsApp o tu web, solo.',
  },
  {
    q: '¿Trabajan fuera de Santiago?',
    a: 'Sí. Trabajamos 100% remoto con clientes en todo Chile.',
  },
] as const

/**
 * Constantes y configuraciones para artestudio.cl
 */

// Información de contacto
export const CONTACT_INFO = {
  whatsapp: '+56938733230',
  email: 'contacto@artestudio.cl',
  phone: '+569 3873 3230',
  address: 'Chile',
} as const

// Redes sociales
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/artestudio.cl',
  tiktok: 'https://tiktok.com/@artestudio.cl',
  facebook: 'https://facebook.com/artestudio.cl',
  linkedin: 'https://linkedin.com/company/artestudio-cl',
  behance: 'https://www.behance.net/soychrispencer',
} as const

// Colores de la marca
export const BRAND_COLORS = {
  primary: '#8325fd',
  primaryDark: '#6b1dc9',
  primaryLight: '#a855ff',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const

// Tiempos de animación (en ms)
export const ANIMATION_DURATION = {
  fast: 300,
  normal: 500,
  slow: 800,
  slower: 1200,
} as const

// Precios de servicios (en pesos chilenos)
export const SERVICE_PRICES = {
  socialMedia: 127500, // Plan combo Esencial
  branding: 250000,
  graphic: 55000,
  socialDesign: 29000, // Diseño unitario para redes
  videoEditing: 35000,
  webDesign: 249990, // Landing Start
  webDesignPro: 490000, // Sitio corporativo
  webMaintenance: 49990,
  development: 490000,
  developmentPlatform: 1200000,
  developmentEnterprise: 3500000,
  fullDigitalPresence: 619000,
  audioEdition: 99000,
  mastering: 45000,
  audioPack: 135000,
} as const

// Mensajes predefinidos de WhatsApp
export const WHATSAPP_MESSAGES = {
  landingExpress: 'Hola Artestudio, quiero la Landing Express ($74.990 setup + $14.990/mes). ¿Podemos hablar?',
  webCompleta: 'Hola Artestudio, necesito una web más completa (pago único o plan personalizado). ¿Me orientan?',
  quote: 'Hola artestudio, me interesa cotizar un proyecto de diseño 🎨',
  service: (service: string) =>
    `Hola artestudio, me interesa el servicio de ${service} 🎯`,
  general: 'Hola artestudio, tengo una consulta sobre tus servicios 💬',
} as const

// URLs de APIs (si se usan)
export const API_URLS = {
  mercadoPago: 'https://api.mercadopago.com',
  payments: '/api/payment',
  contact: '/api/contact',
} as const

// Validaciones
export const VALIDATION = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex: /^[0-9+\-\s()]+$/,
  urlRegex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  minPasswordLength: 8,
} as const

// Breakpoints de responsive
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Anclas one-page (ver src/lib/navigation.ts)
export const ROUTES = {
  home: '/',
  inicio: '/#inicio',
  offers: '/#ofertas',
  pricing: '/#precios',
  catalog: '/#servicios',
  about: '/#nosotros',
  contact: '/#contacto',
  admin: '/admin',
  notFound: '/404',
} as const

// Datos de la meta información
export const SITE_CONFIG = {
  name: 'Artestudio',
  title: 'Artestudio — Sistemas de crecimiento para empresas | Chile',
  description:
    'Diseñamos sistemas de crecimiento que integran estrategia, tecnología e inteligencia artificial para atraer clientes, automatizar procesos y escalar empresas.',
  url: 'https://artestudio.cl',
  ogImage: 'https://artestudio.cl/og-image.png',
  twitterHandle: '@artestudio_cl',
  locale: 'es-CL',
} as const

// Palabras clave SEO
export const SEO_KEYWORDS = [
  'sistema de crecimiento Chile',
  'estrategia tecnología crecimiento',
  'automatizaciones empresas Chile',
  'IA para negocios Chile',
  'landing page Chile',
  'Google Ads Chile',
  'Meta Ads Chile',
  'TikTok Ads Chile',
  'diseño web Chile',
  'Shopify Chile',
  'JumpSeller Chile',
  'WordPress Chile',
  'WooCommerce Chile',
  'Claude ChatGPT Gemini Cursor',
  'artestudio',
] as const

// Duración de las notificaciones (toast, alerts, etc)
export const NOTIFICATION_DURATION = {
  short: 2000,
  normal: 4000,
  long: 6000,
} as const

// Límites de los formularios
export const FORM_LIMITS = {
  maxNameLength: 100,
  maxEmailLength: 255,
  maxMessageLength: 5000,
  maxFileSize: 10 * 1024 * 1024, // 10MB
} as const

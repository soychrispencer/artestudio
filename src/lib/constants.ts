/**
 * Constantes y configuraciones para artestudio.cl
 */

// Información de contacto
export const CONTACT_INFO = {
  whatsapp: '+56938744230',
  email: 'hola@artestudio.cl',
  phone: '+56 9 3874 4230',
  address: 'Chile',
} as const

// Redes sociales
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/artestudio.cl',
  tiktok: 'https://tiktok.com/@artestudio.cl',
  facebook: 'https://facebook.com/artestudio.cl',
  linkedin: 'https://linkedin.com/company/artestudio-cl',
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
  socialMedia: 150000,
  branding: 500000,
  graphic: 100000,
  socialDesign: 75000,
  webDesign: 800000,
  webDesignDiscount: 400000, // 50% descuento en febrero
  audioEdition: 200000,
  mastering: 300000,
} as const

// Mensajes predefinidos de WhatsApp
export const WHATSAPP_MESSAGES = {
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

// Rutas de la aplicación
export const ROUTES = {
  home: '/',
  services: '/#services',
  portfolio: '/#portfolio',
  testimonials: '/#testimonials',
  contact: '/#contact',
  admin: '/admin',
  notFound: '/404',
} as const

// Datos de la meta información
export const SITE_CONFIG = {
  name: 'artestudio.cl',
  title: 'artestudio.cl - Transformación Digital y Creativa',
  description:
    'Servicios de diseño gráfico, web, branding, redes sociales y audio profesional. Transformamos tu marca con soluciones creativas de clase mundial.',
  url: 'https://artestudio.cl',
  ogImage: 'https://artestudio.cl/og-image.png',
  twitterHandle: '@artestudio_cl',
  locale: 'es-CL',
} as const

// Palabras clave SEO
export const SEO_KEYWORDS = [
  'diseño web',
  'diseño gráfico',
  'branding',
  'redes sociales',
  'audio profesional',
  'diseño digital',
  'agencia de diseño',
  'marketing digital',
  'Chile',
  'servicios creativos',
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

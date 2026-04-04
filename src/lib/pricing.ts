/**
 * Nueva estructura de precios Artestudio.cl — V2
 * Cubre TODAS las verticales del negocio
 * Modelo mixto: Setup + Mensual (donde aplica) / Pago único (donde corresponde)
 */

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export type ServiceVertical =
  | 'web'
  | 'branding'
  | 'redes'
  | 'video'
  | 'diseno'
  | 'pack'

export type PlanTier = 'esencial' | 'pro' | 'proplus'

export interface PricingPlan {
  tier: PlanTier
  name: string
  badge?: string
  recommended?: boolean
  /** Pago inicial / único */
  setup: number
  /** Mensual recurrente (0 = no aplica) */
  monthly: number
  shortDesc: string
  /** 3-4 puntos clave siempre visibles */
  highlights: string[]
  /** Lista completa expandible */
  features: string[]
  cta: string
  whatsappMessage: string
}

export interface ServiceVerticalConfig {
  id: ServiceVertical
  label: string
  emoji: string
  description: string
  /** Tipo de cobro principal del servicio */
  billingLabel: string
  plans: PricingPlan[]
  /** Sub-opciones o variantes (ej: plataformas para web, tipos de video, etc.) */
  variants?: {
    id: string
    label: string
    description: string
  }[]
}

// ─────────────────────────────────────────────
// 🌐 WEB & ECOMMERCE
// ─────────────────────────────────────────────

const webPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 149990,
    monthly: 14990,
    shortDesc: 'Landing o tienda básica lista en días. Soporte mensual incluido.',
    highlights: [
      'Landing page o Shopify/Jumpseller básico',
      'Diseño responsive + CTA WhatsApp',
      'Hasta 20 productos (si eCommerce)',
      'Soporte técnico mensual (SLA 72h)',
    ],
    features: [
      'WordPress, Shopify o Jumpseller según tu negocio',
      'Diseño responsive profesional',
      'Formulario de contacto + WhatsApp integrado',
      'SEO técnico inicial',
      'Capacitación para operar tu sitio',
      'Backups automáticos y actualizaciones de seguridad',
      'Soporte técnico mensual incluido',
    ],
    cta: 'Empezar con Esencial',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Esencial Web ($149.990 setup + $14.990/mes). ¿Podemos hablar?',
  },
  {
    tier: 'pro',
    name: 'Pro',
    badge: 'Más popular',
    recommended: true,
    setup: 249990,
    monthly: 24990,
    shortDesc: 'Sitio profesional con analítica y optimización. Soporte prioritario.',
    highlights: [
      'Sitio hasta 10 páginas o WooCommerce',
      'Google Analytics + Meta Pixel',
      'SEO on-page + estructura de conversión',
      'Soporte prioritario + mejoras mensuales',
    ],
    features: [
      'WordPress, WooCommerce o Shopify personalizado',
      'Hasta 60 productos (si eCommerce)',
      'Integración de pagos: Webpay, Flow, MercadoPago',
      'Despacho: Starken, Chilexpress (si aplica)',
      'Google Analytics 4 + Meta Pixel configurados',
      'SEO técnico y on-page',
      'Carrito abandonado + email automático (si eCommerce)',
      'Capacitación completa del equipo',
      'Soporte prioritario mensual (SLA 48h)',
      'Reporte mensual de rendimiento',
    ],
    cta: 'Quiero el plan Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro Web ($249.990 setup + $24.990/mes). ¿Cuándo podemos hablar?',
  },
  {
    tier: 'proplus',
    name: 'Pro+',
    setup: 349990,
    monthly: 34990,
    shortDesc: 'Web o eCommerce avanzado con automatizaciones y CRO mensual.',
    highlights: [
      'Tienda avanzada o sitio hasta 15 páginas',
      'Automatizaciones de email y retención',
      'CRO mensual + analítica avanzada',
      'Acompañamiento estratégico incluido',
    ],
    features: [
      'Arquitectura escalable y diseño premium',
      'Hasta 200 productos + carga masiva (si eCommerce)',
      'Todos los medios de pago y despacho integrados',
      'Automatizaciones: carrito, bienvenida, reactivación',
      'Google Analytics 4 + Tag Manager avanzado',
      'SEO técnico completo + estructura de URLs',
      'CRO mensual: mejoras de conversión continuas',
      'Blog activo con SEO por artículo (si aplica)',
      'Soporte VIP (SLA 24h)',
      'Reunión estratégica mensual',
    ],
    cta: 'Activar Pro+',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro+ Web ($349.990 setup + $34.990/mes).',
  },
]

// ─────────────────────────────────────────────
// 🎨 BRANDING & LOGO
// ─────────────────────────────────────────────

const brandingPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 149990,
    monthly: 0,
    shortDesc: 'Logo profesional + identidad visual base para lanzar tu marca.',
    highlights: [
      'Logo con 2 rutas de diseño',
      'Paleta de colores + tipografías',
      'Mini manual de marca',
      '2 rondas de revisión',
    ],
    features: [
      'Logo profesional con 2 propuestas creativas',
      'Versiones: principal, horizontal, ícono',
      'Paleta de colores primaria y secundaria',
      'Selección de tipografías corporativas',
      'Mini manual de uso (1 página)',
      'Archivos finales: AI, SVG, PNG, PDF',
      '2 rondas de revisión',
    ],
    cta: 'Crear mi Logo',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Esencial de Branding ($149.990). Quiero crear mi logo.',
  },
  {
    tier: 'pro',
    name: 'Pro',
    badge: 'Más popular',
    recommended: true,
    setup: 249990,
    monthly: 0,
    shortDesc: 'Sistema visual completo, robusto y listo para usar en todo canal.',
    highlights: [
      'Logo + sistema de variantes',
      'Manual de marca extendido',
      'Aplicaciones: papelería + redes',
      '3 rondas de revisión',
    ],
    features: [
      'Logo principal + secundarios + símbolo',
      'Sistema de variantes (horizontal, vertical, ícono)',
      'Paleta extendida con usos por contexto',
      'Tipografías corporativas + alternativas web',
      'Manual de marca extendido (6-8 páginas)',
      'Aplicaciones de marca: tarjeta, firma email, avatar redes',
      'Lineamientos de voz y tono visual',
      'Archivos editables + formatos de uso',
      '3 rondas de revisión',
    ],
    cta: 'Quiero Branding Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro de Branding ($249.990). Necesito una identidad visual completa.',
  },
  {
    tier: 'proplus',
    name: 'Pro+',
    setup: 399990,
    monthly: 0,
    shortDesc: 'Brandbook completo para equipos, campañas y expansión de marca.',
    highlights: [
      'Brandbook extendido profesional',
      'Papelería corporativa completa',
      'Templates para redes sociales',
      'Guía de voz, tono y estilo de contenido',
    ],
    features: [
      'Sistema de marca integral (logo + variantes + patrones)',
      'Brandbook extendido (12-16 páginas)',
      'Papelería: tarjeta, hoja membretada, carpeta, firma',
      'Templates para Instagram/Facebook (6 layouts)',
      'Guía de voz, tono y personalidad de marca',
      'Aplicaciones: packaging básico, señalética (si aplica)',
      'Entrega de assets organizados por canal',
      '4 rondas de revisión',
    ],
    cta: 'Activar Branding Pro+',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro+ de Branding ($399.990).',
  },
]

// ─────────────────────────────────────────────
// 📱 REDES SOCIALES
// ─────────────────────────────────────────────

const redesPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 49990,
    monthly: 89990,
    shortDesc: 'Gestión + contenido básico para empezar a crecer con consistencia.',
    highlights: [
      '8 posts + 3 historias + 1 reel al mes',
      'Community management básico',
      'Programación y calendarización',
      'Reporte mensual de rendimiento',
    ],
    features: [
      'Diagnóstico de marca y audiencia inicial',
      'Estrategia y calendario mensual de contenido',
      '8 posts estáticos diseñados',
      '3 historias diseñadas',
      '1 reel gráfico (motion/animado)',
      'Community management básico (respuestas)',
      'Programación de publicaciones',
      'Reporte mensual con métricas clave',
      '2 rondas de ajustes por pieza',
    ],
    cta: 'Activar Redes Esencial',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Esencial de Redes Sociales ($49.990 setup + $89.990/mes).',
  },
  {
    tier: 'pro',
    name: 'Pro',
    badge: 'Más popular',
    recommended: true,
    setup: 49990,
    monthly: 189990,
    shortDesc: 'Gestión profesional con estrategia, contenido y optimización continua.',
    highlights: [
      '12 posts + 6 historias + 2 reels al mes',
      'Copy estratégico + calendario quincenal',
      'Community management profesional',
      'Reporte quincenal + optimizaciones',
    ],
    features: [
      'Diagnóstico de marca y competencia',
      'Estrategia y calendario quincenal de contenido',
      '12 posts diseñados (estáticos + animados)',
      '6 historias diseñadas',
      '2 reels gráficos o animados',
      'Copy estratégico por publicación',
      'Community management profesional',
      'Hashtags y horarios optimizados',
      'Reporte quincenal con insights',
      'Integración con campañas pagadas (si aplica)',
    ],
    cta: 'Quiero Redes Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro de Redes Sociales ($49.990 setup + $189.990/mes).',
  },
  {
    tier: 'proplus',
    name: 'Pro+',
    setup: 49990,
    monthly: 349990,
    shortDesc: 'Operación intensiva para marcas que necesitan presencia fuerte y constante.',
    highlights: [
      '20 posts + historias diarias + 4 reels',
      'Acompañamiento estratégico mensual',
      'Gestión de ads orgánicos de apoyo',
      'Reporte semanal + mesa de crecimiento',
    ],
    features: [
      'Estrategia mensual con reunión de planificación',
      '20 posts diseñados (mix formatos)',
      'Historias frecuentes/diarias',
      '4 reels gráficos o con material propio',
      'Community management intensivo',
      'Coordinación de contenido con campañas',
      'Gestión de pauta orgánica de apoyo',
      'Reporte semanal con KPIs',
      'Mesa de crecimiento y priorización',
      'Acompañamiento estratégico continuo',
    ],
    cta: 'Activar Redes Pro+',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Pro+ de Redes Sociales ($49.990 setup + $349.990/mes).',
  },
]

// ─────────────────────────────────────────────
// 🎬 PRODUCCIÓN AUDIOVISUAL
// ─────────────────────────────────────────────

const videoPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 35000,
    monthly: 0,
    shortDesc: 'Video corto o edición de audio. Ideal para Reels, TikTok o podcast.',
    highlights: [
      'Video Reel/TikTok hasta 60s: $35.000',
      'Edición de audio podcast: $99.000',
      'Mastering 1 track: $45.000',
      'Pack mensual 4 videos: $125.000/mes',
    ],
    features: [
      'Video corto hasta 60s (9:16) — $35.000',
      'Corte dinámico + corrección de color básica',
      'Limpieza y nivelación de audio',
      'Música libre de derechos (si aplica)',
      'Edición de audio/podcast corto — $99.000',
      'Mastering 1 track — $45.000',
      '1 ronda de revisión por pieza',
      'Entrega optimizada para plataforma',
    ],
    cta: 'Cotizar Video Esencial',
    whatsappMessage:
      'Hola Artestudio, me interesa edición de video/audio. ¿Me pueden orientar con opciones?',
  },
  {
    tier: 'pro',
    name: 'Pro',
    badge: 'Más pedido',
    recommended: true,
    setup: 69000,
    monthly: 0,
    shortDesc: 'Video social con subtítulos y motion. Audio con mezcla extendida.',
    highlights: [
      'Video social hasta 90s: $69.000',
      'Subtítulos + motion graphics',
      'Edición de audio extendida: $149.000',
      'Pack mensual 8 videos: $235.000/mes',
    ],
    features: [
      'Video social hasta 90s — $69.000',
      'Subtítulos animados incluidos',
      'Títulos y motion graphics simples',
      'Corrección de color y audio mejorada',
      '1 formato adicional (1:1 o 16:9)',
      'Edición de audio extendida — $149.000',
      'Mastering EP (3 tracks) — $119.000',
      '2 rondas de revisión',
    ],
    cta: 'Cotizar Video Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa el servicio Pro de Video/Audio. ¿Cuáles son las opciones?',
  },
  {
    tier: 'proplus',
    name: 'Pro+',
    setup: 160000,
    monthly: 0,
    shortDesc: 'Producción completa: video largo, podcast, mastering de álbum.',
    highlights: [
      'Video podcast/educativo hasta 30min: $160.000',
      'Edición multicámara + intro/outro',
      'Mastering álbum (8 tracks): $279.000',
      'Pack mensual 12 videos: $330.000/mes',
    ],
    features: [
      'Video largo hasta 30 minutos — $160.000',
      'Edición multicámara (si aplica)',
      'Limpieza de audio profesional',
      'Intro/Outro + lower thirds',
      '1 versión larga + 2 cortes cortos (shorts)',
      'Audio Pro+ (edición avanzada) — $229.000',
      'Mastering álbum hasta 8 tracks — $279.000',
      'Pack edición + mastering — $135.000',
      '2 rondas de revisión',
    ],
    cta: 'Cotizar Producción Pro+',
    whatsappMessage:
      'Hola Artestudio, me interesa producción audiovisual Pro+. Quiero cotizar mi proyecto.',
  },
]

// ─────────────────────────────────────────────
// 📄 DISEÑO GRÁFICO CORPORATIVO
// ─────────────────────────────────────────────

const disenoPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 55000,
    monthly: 0,
    shortDesc: 'Pieza impresa o digital lista para publicar o imprimir.',
    highlights: [
      'Flyer, afiche o banner: $55.000',
      'Formato listo para imprenta (PDF/X)',
      '2 rondas de revisión',
      'Entrega digital + para impresión',
    ],
    features: [
      '1 pieza gráfica (flyer, afiche, banner)',
      'Sangrado y márgenes seguros para impresión',
      'Formato PDF/X listo para imprenta',
      'Versión digital optimizada',
      '2 rondas de revisión',
    ],
    cta: 'Pedir Diseño Esencial',
    whatsappMessage:
      'Hola Artestudio, necesito un diseño gráfico (flyer/afiche). ¿Me cuentan más?',
  },
  {
    tier: 'pro',
    name: 'Pro',
    badge: 'Más pedido',
    recommended: true,
    setup: 90000,
    monthly: 0,
    shortDesc: 'Presentación, pitch deck o menú con diseño editorial profesional.',
    highlights: [
      'Presentación/pitch hasta 10 láminas: $90.000',
      'Menú o carta comercial: $90.000',
      'Diseño editorial coherente',
      'Entrega PDF + editable',
    ],
    features: [
      'Presentación comercial hasta 10 láminas',
      'O menú/carta comercial hasta 4 secciones',
      'Diseño editorial con jerarquía visual',
      'Versión para pantalla + impresión',
      'Entrega PDF + archivo editable',
      '1 ronda de revisión',
    ],
    cta: 'Pedir Diseño Pro',
    whatsappMessage:
      'Hola Artestudio, necesito una presentación/menú profesional. ¿Cuánto cuesta?',
  },
  {
    tier: 'proplus',
    name: 'Pro+',
    setup: 290000,
    monthly: 0,
    shortDesc: 'Pack corporativo completo: flyer + presentación + papelería.',
    highlights: [
      'Pack completo: flyer + presentación + papelería',
      'Línea visual integrada y coherente',
      'Archivos editables y finales',
      '2 rondas de revisión',
    ],
    features: [
      'Flyer/afiche diseñado',
      'Presentación comercial completa',
      'Papelería: tarjeta + hoja membretada + firma email',
      'Línea visual integrada para todas las piezas',
      'Archivos editables (AI/PSD) + formatos finales',
      'Preparación para imprenta incluida',
      '2 rondas de revisión',
    ],
    cta: 'Pedir Pack Corporativo',
    whatsappMessage:
      'Hola Artestudio, me interesa el pack corporativo de diseño ($290.000). ¿Podemos hablar?',
  },
]

// ─────────────────────────────────────────────
// ⭐ PACK COMPLETO "PRESENCIA DIGITAL"
// ─────────────────────────────────────────────

const packPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Starter',
    setup: 349990,
    monthly: 49990,
    shortDesc: 'Todo para arrancar: marca, web y redes en un solo paquete.',
    highlights: [
      'Branding Esencial incluido',
      'Web Esencial incluida',
      'Redes Esencial (1er mes incluido)',
      'Ahorro de $49.970 vs contratar por separado',
    ],
    features: [
      'Logo profesional + paleta + mini manual',
      'Landing o tienda básica (WordPress/Shopify/Jumpseller)',
      'Gestión de redes: 8 posts + 3 historias + 1 reel',
      'Community management básico',
      'Google Analytics configurado',
      'Soporte técnico web mensual',
      'Coordinación integral de todas las piezas',
      'Setup de redes y web en paralelo',
    ],
    cta: 'Arrancar con Starter',
    whatsappMessage:
      'Hola Artestudio, me interesa el Pack Starter "Presencia Digital" ($349.990 setup + $49.990/mes). ¡Quiero arrancar!',
  },
  {
    tier: 'pro',
    name: 'Growth',
    badge: 'Mejor valor',
    recommended: true,
    setup: 549990,
    monthly: 89990,
    shortDesc: 'Marca sólida, web profesional y redes con estrategia. El combo ganador.',
    highlights: [
      'Branding Pro completo',
      'Web Pro (sitio o eCommerce)',
      'Redes Pro (gestión + estrategia)',
      'Ahorro de $139.970 vs por separado',
    ],
    features: [
      'Sistema visual completo + manual de marca',
      'Sitio profesional o eCommerce hasta 60 productos',
      'Gestión de redes: 12 posts + 6 historias + 2 reels',
      'Copy estratégico + calendario quincenal',
      'Community management profesional',
      'Google Analytics + Meta Pixel configurados',
      'SEO on-page en web',
      'Reportes quincenales',
      'Soporte prioritario web (SLA 48h)',
      'Coordinación estratégica unificada',
    ],
    cta: 'Elegir Growth',
    whatsappMessage:
      'Hola Artestudio, me interesa el Pack Growth "Presencia Digital" ($549.990 setup + $89.990/mes). ¿Cuándo empezamos?',
  },
  {
    tier: 'proplus',
    name: 'Scale',
    setup: 799990,
    monthly: 149990,
    shortDesc: 'La experiencia premium para marcas que quieren dominar su mercado.',
    highlights: [
      'Branding Pro+ con brandbook',
      'Web Pro+ con CRO y automatizaciones',
      'Redes Pro+ con acompañamiento estratégico',
      'Ahorro de $199.980 vs por separado',
    ],
    features: [
      'Brandbook extendido + papelería + templates redes',
      'Web avanzada con automatizaciones y CRO mensual',
      'Gestión de redes: 20 posts + historias diarias + 4 reels',
      'Acompañamiento estratégico semanal',
      'Community management intensivo',
      'Analytics avanzado + Tag Manager',
      'SEO completo + contenido mensual para blog',
      'Mesa de crecimiento y priorización',
      'Soporte VIP (SLA 24h)',
      'Reunión estratégica mensual del equipo',
    ],
    cta: 'Ir a Scale',
    whatsappMessage:
      'Hola Artestudio, me interesa el Pack Scale "Presencia Digital" ($799.990 setup + $149.990/mes). Quiero la experiencia completa.',
  },
]

// ─────────────────────────────────────────────
// CONFIGURACIÓN DE VERTICALES
// ─────────────────────────────────────────────

export const SERVICE_VERTICALS: ServiceVerticalConfig[] = [
  {
    id: 'pack',
    label: 'Pack Completo',
    emoji: '⭐',
    description: 'Marca + web + redes en un solo paquete con el mejor precio',
    billingLabel: 'Setup + Mensual',
    plans: packPlans,
  },
  {
    id: 'web',
    label: 'Web & Tienda',
    emoji: '🌐',
    description: 'Landing, sitio corporativo o eCommerce con soporte mensual incluido',
    billingLabel: 'Setup + Mensual',
    plans: webPlans,
    variants: [
      { id: 'wordpress', label: 'WordPress', description: 'El CMS más flexible' },
      { id: 'shopify', label: 'Shopify', description: 'eCommerce SaaS líder' },
      { id: 'jumpseller', label: 'Jumpseller', description: 'eCommerce chileno' },
      { id: 'woocommerce', label: 'WooCommerce', description: 'Tienda en WordPress' },
      { id: 'custom', label: 'A medida', description: 'Desarrollo personalizado' },
    ],
  },
  {
    id: 'branding',
    label: 'Marca & Logo',
    emoji: '🎨',
    description: 'Identidad visual profesional que hace memorable a tu negocio',
    billingLabel: 'Pago único',
    plans: brandingPlans,
  },
  {
    id: 'redes',
    label: 'Redes Sociales',
    emoji: '📱',
    description: 'Gestión, contenido y comunidad para crecer con consistencia',
    billingLabel: 'Setup + Mensual',
    plans: redesPlans,
  },
  {
    id: 'video',
    label: 'Video & Audio',
    emoji: '🎬',
    description: 'Edición de video, Reels, podcast, mastering profesional',
    billingLabel: 'Por pieza o pack mensual',
    plans: videoPlans,
  },
  {
    id: 'diseno',
    label: 'Diseño Gráfico',
    emoji: '📄',
    description: 'Flyers, presentaciones, catálogos y papelería corporativa',
    billingLabel: 'Por pieza o pack',
    plans: disenoPlans,
  },
]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export function getVerticalById(id: ServiceVertical): ServiceVerticalConfig | undefined {
  return SERVICE_VERTICALS.find((v) => v.id === id)
}

export function getTierLabel(tier: PlanTier): string {
  const labels: Record<PlanTier, string> = {
    esencial: 'Esencial',
    pro: 'Pro',
    proplus: 'Pro+',
  }
  return labels[tier]
}

export function formatMonthlyLabel(monthly: number): string {
  if (monthly === 0) return 'Pago único'
  return `+ $${monthly.toLocaleString('es-CL')}/mes`
}

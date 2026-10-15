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
  /** Pago inicial / único antiguo (para mostrar tachado) */
  originalSetup?: number
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
    name: 'Landing Express',
    originalSetup: 149990,
    setup: 74990,
    monthly: 9990,
    shortDesc: 'Landing Express: one-page de alta conversión, WhatsApp y hosting. Setup + mensual.',
    highlights: [
      'Landing page one-page (hasta 7 secciones)',
      'Diseño responsive + botón WhatsApp y formulario',
      'Dominio .cl primer año + hosting y SSL',
      'Soporte técnico mensual continuo',
    ],
    features: [
      'WordPress o landing a medida',
      'Diseño responsive enfocado en conversión',
      'Formulario de contacto + WhatsApp integrado',
      'SEO técnico inicial',
      'Dominio .cl por 1 año incluido',
      'Hosting de alta velocidad + SSL',
      'Soporte técnico y mantención mensual',
    ],
    cta: 'Empezar con Landing Express',
    whatsappMessage:
      'Hola Artestudio, me interesa el plan Landing Express ($74.990 setup + $9.990/mes). ¿Podemos hablar?',
  },
  {
    tier: 'pro',
    name: 'Web Corporativa',
    badge: 'Más popular',
    recommended: true,
    originalSetup: 249990,
    setup: 149990,
    monthly: 24990,
    shortDesc: 'Sitio corporativo profesional con múltiples páginas, analítica y estructura.',
    highlights: [
      'Sitio institucional hasta 8-10 páginas',
      'Google Analytics 4 + Meta Pixel configurados',
      'SEO on-page + arquitectura de conversión',
      'Soporte prioritario mensual (SLA 48h)',
    ],
    features: [
      'WordPress o arquitectura moderna personalizada',
      'Hasta 10 páginas de contenido estructurado',
      'Formularios avanzados y llamadas a la acción',
      'Google Analytics 4 + Meta Pixel configurados',
      'SEO técnico y optimización de velocidad',
      'Capacitación completa para autogestión',
      'Soporte prioritario mensual',
      'Reporte de rendimiento y estado técnico',
    ],
    cta: 'Cotizar Web Corporativa',
    whatsappMessage:
      'Hola Artestudio, me interesa la Web Corporativa (desde $349.990). ¿Cuándo podemos hablar?',
  },
  {
    tier: 'proplus',
    name: 'eCommerce & Tienda',
    originalSetup: 599990,
    setup: 489990,
    monthly: 34990,
    shortDesc: 'Tienda online completa con catálogo, pasarelas de pago y logística.',
    highlights: [
      'Tienda Shopify, WooCommerce o Jumpseller',
      'Hasta 60 productos configurados + medios de pago',
      'Integración Webpay, Flow, MercadoPago y despachos',
      'Automatizaciones de carrito abandonado y correos',
    ],
    features: [
      'Shopify, WooCommerce o Jumpseller según tu negocio',
      'Configuración de pasarelas de pago chilenas e internacionales',
      'Integración logística (Starken, Chilexpress, etc.)',
      'Automatizaciones: carrito abandonado y bienvenida',
      'Google Analytics 4 + Pixel de eCommerce con eventos',
      'Capacitación para gestión de catálogo e inventario',
      'Soporte prioritario y mantención continua',
    ],
    cta: 'Cotizar eCommerce',
    whatsappMessage:
      'Hola Artestudio, me interesa cotizar una tienda eCommerce (desde $489.990).',
  },
]

// ─────────────────────────────────────────────
// 🎨 BRANDING & LOGO
// ─────────────────────────────────────────────

const brandingPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Esencial',
    setup: 260000,
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
      'Hola Artestudio, me interesa el plan Esencial de Branding ($260.000). Quiero crear mi logo.',
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
// 📱 REDES SOCIALES & CONTENIDO
// ─────────────────────────────────────────────

const redesPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Presencia',
    setup: 0,
    monthly: 89990,
    shortDesc: 'Gestión + contenido mensual para mantener tu marca activa y profesional.',
    highlights: [
      '8 piezas de contenido mensual (2 por semana)',
      'Hasta 2 Reels o videos cortos',
      'Calendario, copys y diseño de línea visual',
      'Programación y reporte mensual',
    ],
    features: [
      'Diagnóstico de marca y audiencia inicial',
      'Estrategia y calendario mensual de publicaciones',
      '6 posts estáticos / carruseles diseñados',
      'Hasta 2 Reels con material del cliente',
      'Redacción de copies persuasivos y hashtags',
      'Programación y publicación ordenada',
      'Reporte mensual con métricas clave',
      '1 ronda de ajustes por pieza',
    ],
    cta: 'Activar Plan Presencia',
    whatsappMessage:
      'Hola Artestudio, me interesa el Plan Presencia de Redes ($89.990/mes).',
  },
  {
    tier: 'pro',
    name: 'Contenido Pro',
    badge: 'Más popular',
    recommended: true,
    setup: 0,
    monthly: 189990,
    shortDesc: 'Mayor estrategia, autoridad y video para marcas que buscan destacar.',
    highlights: [
      '12 piezas de contenido al mes (3 por semana)',
      'Hasta 4 Reels con edición dinámica',
      'Calendario quincenal + copywriting avanzado',
      'Optimización continua y reporte con reunión',
    ],
    features: [
      'Estrategia y calendario quincenal de contenido',
      '8 posts, carruseles de autoridad e historias',
      'Hasta 4 Reels con edición y subtítulos dinámicos',
      'Copywriting estratégico para cada publicación',
      'Hashtags, horarios y formatos optimizados',
      'Adaptación para Instagram, TikTok y LinkedIn',
      'Reporte mensual con optimizaciones sugeridas',
      'Reunión mensual de alineación',
    ],
    cta: 'Quiero Contenido Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa el Plan Contenido Pro de Redes ($189.990/mes).',
  },
  {
    tier: 'proplus',
    name: 'Captación & Growth',
    setup: 49990,
    monthly: 249990,
    shortDesc: 'Campañas de publicidad digital orientadas a captación de prospectos y ventas.',
    highlights: [
      'Gestión de Meta Ads y/o Google Ads',
      'Embudos de conversión y landing conectada',
      'Medición con GA4, Pixel y eventos de conversión',
      'Optimización semanal de pauta y leads',
    ],
    features: [
      'Estrategia de captación y mapa de embudo',
      'Diseño y copy de creatividades para anuncios',
      'Segmentación de audiencias y remarketing',
      'Configuración de Pixel, API de conversiones y GA4',
      'Integración con WhatsApp y formularios',
      'Optimización semanal de presupuesto y coste por lead',
      'Reporte quincenal con KPIs de negocio',
      'Acompañamiento estratégico continuo',
    ],
    cta: 'Cotizar Captación',
    whatsappMessage:
      'Hola Artestudio, me interesa el servicio de Captación & Growth ($249.990/mes + pauta).',
  },
]

// ─────────────────────────────────────────────
// 🎬 EDICIÓN DE VIDEO & AUDIO
// ─────────────────────────────────────────────

const videoPlans: PricingPlan[] = [
  {
    tier: 'esencial',
    name: 'Pack Edición 4',
    setup: 0,
    monthly: 59990,
    shortDesc: 'Tú grabas, nosotros editamos. 4 Reels mensuales listos para publicar.',
    highlights: [
      '4 Reels verticales (9:16) al mes: $59.990',
      'Reel individual suelto: $15.000',
      'Cortes de pausas y ritmo dinámico',
      'Subtítulos dinámicos + música + portada',
    ],
    features: [
      '4 Reels o TikToks verticales por mes (1 por semana)',
      'Cortes de errores, silencios y ritmo ágil',
      'Subtítulos dinámicos integrados',
      'Música en tendencia libre de derechos',
      'Ajustes básicos de audio y corrección de color',
      'Portada simple para cada video',
      'Hasta 3 minutos de material bruto por video',
      '1 ronda de ajustes por pieza',
    ],
    cta: 'Pedir Pack Edición 4',
    whatsappMessage:
      'Hola Artestudio, me interesa el Pack 4 de Edición de Reels ($59.990/mes).',
  },
  {
    tier: 'pro',
    name: 'Pack Edición 8',
    badge: 'Más pedido',
    recommended: true,
    setup: 0,
    monthly: 109990,
    shortDesc: '8 Reels mensuales (2 por semana) con edición ágil y portadas listas.',
    highlights: [
      '8 Reels verticales (9:16) al mes: $109.990',
      'Subtítulos con estilo + efectos de ritmo',
      'Adaptación Instagram / TikTok / Shorts',
      'Portadas optimizadas para cada video',
    ],
    features: [
      '8 Reels o TikToks verticales por mes (2 por semana)',
      'Edición dinámica con zooms, cortes y ritmo',
      'Subtítulos dinámicos con resaltado de palabras',
      'Música en tendencia y sound effects básicos',
      'Adaptación de formato para IG Reels, TikTok y YouTube Shorts',
      'Portadas listas para publicar en feed',
      'Hasta 3 minutos de bruto por video',
      '1 ronda de revisión por video',
    ],
    cta: 'Pedir Pack Edición 8',
    whatsappMessage:
      'Hola Artestudio, me interesa el Pack 8 de Edición de Reels ($109.990/mes).',
  },
  {
    tier: 'proplus',
    name: 'Video Largo / Pro',
    setup: 0,
    monthly: 120000,
    shortDesc: 'YouTube, podcast, edición multicámara o proyectos audiovisuales avanzados.',
    highlights: [
      'Pack 4 Reels + 2 Videos YouTube: $120.000/mes',
      'Edición avanzada por pieza: desde $25.000',
      'Video largo / podcast hasta 12-15 min',
      'Edición de audio y mastering profesional',
    ],
    features: [
      'Edición de video largo para YouTube o podcast (hasta 12 min)',
      'Recortes verticales (Shorts/Reels) extraídos del video largo',
      'Limpieza y nivelación de audio profesional',
      'Intro, outro, tercios inferiores y miniaturas',
      'Edición avanzada con B-roll y motion graphics (cotización según complejidad)',
      '2 rondas de revisión',
    ],
    cta: 'Cotizar Video Pro',
    whatsappMessage:
      'Hola Artestudio, me interesa cotizar edición de video largo / proyectos Pro.',
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
      'Soporte prioritario',
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
    id: 'web',
    label: 'Web & Tienda',
    emoji: '🌐',
    description: 'Landing express (setup + mensual) o planes web pago único según alcance',
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
    id: 'pack',
    label: 'Pack Completo',
    emoji: '⭐',
    description: 'Marca + web + redes en un solo paquete (upsell cuando ya tienes web)',
    billingLabel: 'Setup + Mensual',
    plans: packPlans,
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

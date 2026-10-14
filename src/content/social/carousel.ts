/**
 * Copy de carrusel. El diseño vive en componentes, no en una imagen.
 * Límites: kicker 32, title 36, body 88, quote 70 caracteres.
 */
export type SocialSlideKind = 'cover' | 'point' | 'quote' | 'cta'
export type SocialTheme = 'paper' | 'ink'
export type SocialVisual = 'cover' | 'gemini' | 'lock' | 'claude' | 'quote'

export type SocialSlide = {
  kind: SocialSlideKind
  theme?: SocialTheme
  visual?: SocialVisual
  kicker?: string
  title?: string
  titleAccent?: string
  body?: string
  quote?: string
  credit?: string
  index?: string
  cta?: string
}

export type SocialCarousel = {
  id: string
  brand: string
  accent: string
  format: 'post' | 'story'
  logo?: string
  slides: SocialSlide[]
}

const LOGO_ARTESTUDIO = '/construye/assets/brand/artestudio-logo-dark.png'

export const CAROUSEL_SISTEMAS: SocialCarousel = {
  id: 'tres-senales',
  brand: 'Artestudio',
  accent: '#3f3a8c',
  format: 'post',
  logo: LOGO_ARTESTUDIO,
  slides: [
    {
      kind: 'cover',
      kicker: 'Sistema de crecimiento',
      title: '3 señales',
      titleAccent: 'de que improvisas.',
    },
    {
      kind: 'point',
      index: '01',
      title: 'Ads que no venden',
      body: 'Gastas en publicidad y el anuncio no aterriza en una página que convierte.',
    },
    {
      kind: 'point',
      index: '02',
      title: 'Presencia sin contacto',
      body: 'Tienes web o redes. Casi nadie escribe. No hay un destino claro.',
    },
    {
      kind: 'point',
      index: '03',
      title: 'Todo es WhatsApp',
      body: 'Si dejas de responder, se cae la operación. Es urgencia, no sistema.',
    },
    {
      kind: 'quote',
      quote: 'No más herramientas sueltas. Necesitas un sistema.',
    },
    {
      kind: 'cta',
      kicker: 'Artestudio',
      title: '15 minutos. Sin presión.',
      body: 'Te orientamos al servicio correcto.',
      cta: 'artestudio.cl',
    },
  ],
}

/** Campaña SimpleAgenda · Dejá WhatsApp (brief 2026-08). */
export const CAROUSEL_AGENDA: SocialCarousel = {
  id: 'deja-whatsapp',
  brand: 'SimpleAgenda',
  accent: '#0F766E',
  format: 'post',
  slides: [
    {
      kind: 'cover',
      theme: 'ink',
      kicker: 'Agenda online',
      title: 'Dejá',
      titleAccent: 'de coordinar citas por WhatsApp.',
    },
    {
      kind: 'point',
      index: '01',
      title: 'El chat no escala',
      body: 'Confirmás, reagendás y cobrás por mensaje. Se pierde el hilo.',
    },
    {
      kind: 'point',
      index: '02',
      title: 'Un solo lugar',
      body: 'Citas, clientes y pagos juntos. Sin comisión por reserva.',
    },
    {
      kind: 'quote',
      quote: 'Listo en 5 minutos. Sin tarjeta.',
    },
    {
      kind: 'cta',
      theme: 'ink',
      kicker: 'SimpleAgenda',
      title: 'Probar 30 días gratis.',
      body: 'Sin tarjeta. Sin comisión por cita.',
      cta: 'simpleagenda.app',
    },
  ],
}

/** Briefing IA · semana 13–19 ago 2026 (hechos públicos). */
export const CAROUSEL_IA_SEMANA: SocialCarousel = {
  id: 'ia-esta-semana',
  brand: 'Artestudio',
  accent: '#3f3a8c',
  format: 'post',
  logo: LOGO_ARTESTUDIO,
  slides: [
    {
      kind: 'cover',
      theme: 'ink',
      visual: 'cover',
      kicker: '13–19 agosto',
      title: 'IA',
      titleAccent: 'esta semana.',
    },
    {
      kind: 'point',
      visual: 'gemini',
      index: '01',
      title: 'Gemini más barato',
      body: 'Google lanzó Gemini 3.7 Flash el 13. Más rápido y a mitad de precio.',
    },
    {
      kind: 'point',
      theme: 'ink',
      visual: 'lock',
      index: '02',
      title: 'OpenAI pausa',
      body: 'Dos semanas sin el entrenamiento frontier. Motivo: ciberseguridad.',
    },
    {
      kind: 'point',
      visual: 'claude',
      index: '03',
      title: 'Sonnet no sube',
      body: 'Claude Sonnet 5 mantiene el precio de lanzamiento. No sube en septiembre.',
    },
    {
      kind: 'quote',
      quote: 'La herramienta cambia. El sistema, no.',
    },
    {
      kind: 'cta',
      theme: 'ink',
      visual: 'cover',
      kicker: 'Diagnóstico',
      title: '15 minutos. Sin presión.',
      body: 'Cómo usar IA en tu negocio, sin improvisar.',
      cta: 'artestudio.cl',
    },
  ],
}

export const SOCIAL_PACKS = {
  sistemas: CAROUSEL_SISTEMAS,
  agenda: CAROUSEL_AGENDA,
  ia: CAROUSEL_IA_SEMANA,
} as const

export type SocialPackId = keyof typeof SOCIAL_PACKS

import {
  CRECE_PLAN,
  SOCIAL_MEDIA_PLANS,
  SUBSCRIPTION_PLANS,
  VIDEO_EDITING_PLAN,
  formatCLP,
  type SubscriptionPlan,
} from '@/lib/subscriptions'
import { WA_LINKS } from '@/lib/site'

export type ServiceCategoryId = 'web' | 'contenido' | 'ads' | 'crecimiento'

export type ServiceCta =
  | {
      kind: 'buy'
      plan: SubscriptionPlan
    }
  | {
      kind: 'quote'
      href: string
      label?: string
    }

export type ServiceItem = {
  id: string
  title: string
  description: string
  priceLabel: string
  billingNote?: string
  highlights?: readonly string[]
  cta: ServiceCta
}

export type ServiceCategory = {
  id: ServiceCategoryId
  label: string
  href: string
  title: string
  subtitle: string
  items: ServiceItem[]
}

function buyFromPlan(plan: SubscriptionPlan): ServiceCta {
  return { kind: 'buy', plan }
}

function priceFromPlan(plan: SubscriptionPlan): { priceLabel: string; billingNote: string } {
  if (plan.setup > 0 && plan.monthly > 0) {
    return {
      priceLabel: `${formatCLP(plan.setup)} setup`,
      billingNote: `+ ${formatCLP(plan.monthly)} / mes`,
    }
  }
  if (plan.setup > 0) {
    return {
      priceLabel: formatCLP(plan.setup),
      billingNote: 'Pago único',
    }
  }
  return {
    priceLabel: `${formatCLP(plan.monthly)} / mes`,
    billingNote: 'Suscripción mensual',
  }
}

const landingExpress = SUBSCRIPTION_PLANS[0]
const redesEsencial = SOCIAL_MEDIA_PLANS.find((p) => p.id === 'plan-redes-esencial')!
const redesPro = SOCIAL_MEDIA_PLANS.find((p) => p.id === 'plan-redes-pro')!

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'web',
    label: 'Web',
    href: '/servicios/web',
    title: 'Web y presencia digital',
    subtitle: 'Landings, sitios y base técnica para convertir y medir.',
    items: [
      {
        id: landingExpress.id,
        title: landingExpress.name,
        description: landingExpress.tagline,
        ...priceFromPlan(landingExpress),
        highlights: landingExpress.includes.slice(0, 4),
        cta: buyFromPlan(landingExpress),
      },
      {
        id: 'sitio-web',
        title: 'Sitio web a medida',
        description: 'Presencia profesional multi-página, lista para escalar con tu negocio.',
        priceLabel: 'Cotizar',
        billingNote: 'Según alcance',
        highlights: ['Arquitectura de contenidos', 'Diseño responsive', 'SEO on-page base'],
        cta: { kind: 'quote', href: WA_LINKS.web, label: 'Cotizar sitio' },
      },
      {
        id: 'optimizacion-web',
        title: 'Optimización web',
        description:
          'Medición, CTAs, SEO técnico y UX sobre tu sitio actual (modelo tipo auditoría + implementación).',
        priceLabel: 'Desde $180.000',
        billingNote: 'Pago único · 5–7 días hábiles',
        highlights: ['GA4, GTM y píxeles', 'Optimización de conversión', 'SEO técnico y velocidad'],
        cta: { kind: 'quote', href: WA_LINKS.mantencion, label: 'Cotizar optimización' },
      },
      {
        id: 'hosting',
        title: 'Hosting y mantención',
        description: 'Infraestructura, SSL, soporte y mantención técnica mensual.',
        priceLabel: 'Desde $9.990 / mes',
        billingNote: 'Mensual',
        highlights: ['Hosting + SSL', 'Soporte técnico', 'Mantención base'],
        cta: { kind: 'quote', href: WA_LINKS.hosting, label: 'Cotizar hosting' },
      },
    ],
  },
  {
    id: 'contenido',
    label: 'Contenido',
    href: '/servicios/contenido',
    title: 'Contenido y producción',
    subtitle: 'Redes, edición de audio/video/Reels y packs listos para publicar.',
    items: [
      {
        id: redesEsencial.id,
        title: redesEsencial.name,
        description: redesEsencial.tagline,
        ...priceFromPlan(redesEsencial),
        highlights: redesEsencial.includes.slice(0, 4),
        cta: buyFromPlan(redesEsencial),
      },
      {
        id: redesPro.id,
        title: redesPro.name,
        description: redesPro.tagline,
        ...priceFromPlan(redesPro),
        highlights: redesPro.includes.slice(0, 4),
        cta: buyFromPlan(redesPro),
      },
      {
        id: CRECE_PLAN.id,
        title: CRECE_PLAN.name,
        description: CRECE_PLAN.tagline,
        ...priceFromPlan(CRECE_PLAN),
        highlights: CRECE_PLAN.includes.slice(0, 4),
        cta: buyFromPlan(CRECE_PLAN),
      },
      {
        id: VIDEO_EDITING_PLAN.id,
        title: 'Edición de audio, video y Reels',
        description:
          'Producción editorial mensual: reels/shorts, videos largos y limpieza de audio a partir de tu material.',
        ...priceFromPlan(VIDEO_EDITING_PLAN),
        highlights: [
          '4 reels / shorts / TikToks',
          '2 videos YouTube 10–12 min',
          'Subtítulos en partes clave',
          'Formato listo para publicar',
        ],
        cta: buyFromPlan(VIDEO_EDITING_PLAN),
      },
      {
        id: 'branding',
        title: 'Branding',
        description: 'Identidad visual profesional para tu marca.',
        priceLabel: 'Desde $149.990',
        billingNote: 'Pago único',
        highlights: ['Identidad', 'Aplicaciones base', 'Lineamientos de uso'],
        cta: { kind: 'quote', href: WA_LINKS.branding, label: 'Cotizar branding' },
      },
    ],
  },
  {
    id: 'ads',
    label: 'Ads',
    href: '/servicios/ads',
    title: 'Ads y adquisición',
    subtitle: 'Pauta y SEO con foco en contactos calificados. La inversión en medios es aparte.',
    items: [
      {
        id: 'meta-ads',
        title: 'Meta Ads',
        description: 'Campañas en Facebook e Instagram orientadas a conversión.',
        priceLabel: 'Cotizar',
        billingNote: 'Gestión + inversión en medios',
        highlights: ['Estrategia y audiencias', 'Creatividades', 'Optimización continua'],
        cta: { kind: 'quote', href: WA_LINKS.metaAds, label: 'Cotizar Meta Ads' },
      },
      {
        id: 'google-ads',
        title: 'Google Ads',
        description: 'Búsqueda y campañas de performance con medición clara.',
        priceLabel: 'Cotizar',
        billingNote: 'Gestión + inversión en medios',
        highlights: ['Keywords y estructura', 'Tracking de conversiones', 'Reportería'],
        cta: { kind: 'quote', href: WA_LINKS.googleAds, label: 'Cotizar Google Ads' },
      },
      {
        id: 'seo',
        title: 'SEO',
        description: 'Posicionamiento orgánico para atraer clientes sin pauta.',
        priceLabel: 'Cotizar',
        billingNote: 'Según alcance',
        highlights: ['Auditoría técnica', 'Contenido y on-page', 'Seguimiento'],
        cta: { kind: 'quote', href: WA_LINKS.seo, label: 'Cotizar SEO' },
      },
      {
        id: 'plan-medios',
        title: 'Plan de medios mensual',
        description:
          'Estrategia, tracking, gestión de campañas y reportería en ciclo mensual (modelo B2B/B2C).',
        priceLabel: 'Cotizar',
        billingNote: 'Setup + fee mensual',
        highlights: ['Plan de medios y KPIs', 'GTM / GA4 / píxeles', 'Reporte y optimización'],
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar propuesta' },
      },
    ],
  },
  {
    id: 'crecimiento',
    label: 'Crecimiento',
    href: '/servicios/crecimiento',
    title: 'Sistema de crecimiento',
    subtitle: 'Proyectos a medida: diagnóstico, arquitectura e implementación conectada.',
    items: [
      {
        id: 'sistema-crecimiento',
        title: 'Sistema de Crecimiento',
        description:
          'Diseñamos e implementamos el sistema completo según tu negocio: web, ads, CRM, automatizaciones y analítica.',
        priceLabel: 'Cotización',
        billingNote: 'Personalizada según alcance',
        highlights: [
          'Diagnóstico de negocio',
          'Arquitectura del sistema',
          'Implementación conectada',
          'Medición y optimización',
        ],
        cta: { kind: 'quote', href: WA_LINKS.diagnostico, label: 'Solicitar diagnóstico' },
      },
      {
        id: 'proyecto-estrategico',
        title: 'Proyecto estratégico multi-marca',
        description:
          'Para empresas con varias marcas o funnels (como Cunatex + Industrial Nano): dirección, medios y web alineados.',
        priceLabel: 'Cotización',
        billingNote: 'Propuesta a medida',
        highlights: ['Diagnóstico por marca', 'Plan de medios', 'Web y conversión', 'Reportería'],
        cta: { kind: 'quote', href: WA_LINKS.reunion, label: 'Agendar reunión' },
      },
      {
        id: 'automatizaciones-ia',
        title: 'Automatizaciones e IA',
        description: 'Evaluamos e implementamos automatizaciones reales sobre tu operación.',
        priceLabel: 'Cotizar',
        billingNote: 'Según proceso',
        highlights: ['Diagnóstico de procesos', 'Integraciones', 'Agentes y flujos'],
        cta: { kind: 'quote', href: WA_LINKS.automatizacionIa, label: 'Evaluar automatización' },
      },
    ],
  },
]

export function getServiceCategory(id: ServiceCategoryId): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.id === id)
}

export const SERVICE_HUB = {
  label: 'Servicios',
  title: 'Elige cómo quieres trabajar con nosotros',
  subtitle:
    'Si ya sabes qué necesitas, entra a una categoría y compra o cotiza. Si no, vuelve al sistema y agenda una reunión.',
} as const

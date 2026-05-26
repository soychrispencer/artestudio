/**
 * Mapa de navegación: home → catálogo → páginas de detalle
 */

export type ServiceNavGroup = 'entrada' | 'web' | 'marca' | 'redes' | 'creativo' | 'tecnico'

export interface ServiceNavItem {
  slug: string
  title: string
  shortDesc: string
  from?: string
  group: ServiceNavGroup
}

export const SERVICE_NAV_GROUPS: { id: ServiceNavGroup; label: string; description: string }[] = [
  {
    id: 'entrada',
    label: 'Empieza aquí',
    description: 'La oferta más rápida para captar clientes online.',
  },
  {
    id: 'web',
    label: 'Web y tiendas',
    description: 'Sitios profesionales, ecommerce y plataformas.',
  },
  {
    id: 'marca',
    label: 'Marca',
    description: 'Identidad visual y branding.',
  },
  {
    id: 'redes',
    label: 'Redes sociales',
    description: 'Contenido, gestión y comunidad.',
  },
  {
    id: 'creativo',
    label: 'Diseño y audiovisual',
    description: 'Piezas gráficas, video y audio.',
  },
  {
    id: 'tecnico',
    label: 'Técnico y packs',
    description: 'Desarrollo, mantención e integrales.',
  },
]

export const SERVICE_CATALOG: ServiceNavItem[] = [
  {
    slug: '_landing-express',
    title: 'Landing Express IA',
    shortDesc: 'Setup + mensual · 24–48 hrs',
    from: '$74.990 + $14.990/mes',
    group: 'entrada',
  },
  {
    slug: 'diseno-web',
    title: 'Diseño Web y eCommerce',
    shortDesc: 'Web Esencial, Pro y Pro+',
    from: 'Desde $249.990',
    group: 'web',
  },
  {
    slug: 'mantencion-web',
    title: 'Mantención Web',
    shortDesc: 'Soporte técnico y administración',
    from: 'Desde $59.990/mes',
    group: 'web',
  },
  {
    slug: 'desarrollo-y-plataformas',
    title: 'Desarrollo y Plataformas',
    shortDesc: 'Apps y sistemas a medida',
    from: 'Desde cotización',
    group: 'web',
  },
  {
    slug: 'branding',
    title: 'Branding',
    shortDesc: 'Identidad visual completa',
    from: 'Desde $149.990',
    group: 'marca',
  },
  {
    slug: 'redes-sociales',
    title: 'Redes Sociales',
    shortDesc: 'Gestión y contenido mensual',
    from: 'Desde $89.990/mes',
    group: 'redes',
  },
  {
    slug: 'diseno-redes',
    title: 'Diseño para Redes',
    shortDesc: 'Piezas y packs sin gestión full',
    group: 'redes',
  },
  {
    slug: 'diseno-grafico',
    title: 'Diseño Gráfico',
    shortDesc: 'Flyers, presentaciones, papelería',
    from: 'Desde $55.000',
    group: 'creativo',
  },
  {
    slug: 'edicion-video',
    title: 'Edición de Video',
    shortDesc: 'Reels, TikTok, Shorts',
    from: 'Desde $35.000',
    group: 'creativo',
  },
  {
    slug: 'edicion-audio',
    title: 'Edición de Audio',
    shortDesc: 'Podcast, spots, voz',
    group: 'creativo',
  },
  {
    slug: 'mastering',
    title: 'Mastering',
    shortDesc: 'Calidad final para lanzamiento',
    group: 'creativo',
  },
  {
    slug: 'presencia-digital-completa',
    title: 'Presencia Digital Completa',
    shortDesc: 'Marca + web + redes integral',
    group: 'tecnico',
  },
]

export function getServiceHref(item: ServiceNavItem): string {
  if (item.slug === '_landing-express') return '/landing-express'
  return `/servicio/${item.slug}`
}

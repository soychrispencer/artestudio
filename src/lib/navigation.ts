/**
 * Sitio one-page: todas las secciones viven en `/` con anclas.
 * Las rutas /precios, /servicios y /landing-express redirigen al ancla correspondiente.
 */

export type NavLink = {
  id: string
  label: string
  href: string
}

export const SECTION_IDS = {
  inicio: 'inicio',
  ofertas: 'ofertas',
  precios: 'precios',
  servicios: 'servicios',
  nosotros: 'nosotros',
  contacto: 'contacto',
} as const

/** Menú principal — solo anclas en la misma página */
export const MAIN_NAV: NavLink[] = [
  { id: SECTION_IDS.ofertas, label: 'Ofertas', href: '#ofertas' },
  { id: SECTION_IDS.precios, label: 'Precios', href: '#precios' },
  { id: SECTION_IDS.servicios, label: 'Servicios', href: '#servicios' },
  { id: SECTION_IDS.nosotros, label: 'Proceso', href: '#nosotros' },
  { id: SECTION_IDS.contacto, label: 'Contacto', href: '#contacto' },
]

export const FOOTER_NAV: NavLink[] = [
  { id: SECTION_IDS.inicio, label: 'Inicio', href: '#inicio' },
  { id: SECTION_IDS.ofertas, label: 'Ofertas web', href: '#ofertas' },
  { id: SECTION_IDS.precios, label: 'Precios', href: '#precios' },
  { id: SECTION_IDS.servicios, label: 'Servicios', href: '#servicios' },
  { id: SECTION_IDS.nosotros, label: 'Cómo trabajamos', href: '#nosotros' },
  { id: SECTION_IDS.contacto, label: 'Contacto', href: '#contacto' },
]

export const FOOTER_SERVICES: NavLink[] = [
  { id: 'diseno-web', label: 'Diseño web', href: '/servicio/diseno-web' },
  { id: 'redes', label: 'Redes sociales', href: '/servicio/redes-sociales' },
  { id: 'branding', label: 'Branding', href: '/servicio/branding' },
  { id: 'video', label: 'Video y audio', href: '/servicio/edicion-video' },
]

export function isHashLink(href: string): boolean {
  return href.startsWith('#') || href.startsWith('/#')
}

/** Enlace a sección desde cualquier ruta (ej. /servicio/x → /#precios) */
export function sectionHref(sectionId: string): string {
  return `/#${sectionId}`
}

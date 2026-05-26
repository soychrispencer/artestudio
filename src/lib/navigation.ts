/**
 * Mapa único del sitio — una sola fuente para menús y rutas.
 *
 * Estructura:
 *   /              → embudo (ofertas + por qué + contacto)
 *   /landing-express → producto para anuncios
 *   /precios       → comparador de planes (tabs)
 *   /servicios     → índice de todos los servicios
 *   /servicio/*    → detalle y compra por servicio
 */

export type NavLink = {
  label: string
  href: string
  /** Solo enlaces del home con hash */
  isAnchor?: boolean
}

/** Menú principal (header) */
export const MAIN_NAV: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Ofertas', href: '/#ofertas', isAnchor: true },
  { label: 'Precios', href: '/precios' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/#contacto', isAnchor: true },
]

/** Footer — navegación */
export const FOOTER_NAV: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Landing Express', href: '/landing-express' },
  { label: 'Ofertas web', href: '/#ofertas', isAnchor: true },
  { label: 'Precios y planes', href: '/precios' },
  { label: 'Todos los servicios', href: '/servicios' },
  { label: 'Cómo trabajamos', href: '/#nosotros', isAnchor: true },
  { label: 'Contacto', href: '/#contacto', isAnchor: true },
]

/** Servicios destacados en footer */
export const FOOTER_SERVICES: NavLink[] = [
  { label: 'Diseño web', href: '/servicio/diseno-web' },
  { label: 'Redes sociales', href: '/servicio/redes-sociales' },
  { label: 'Branding', href: '/servicio/branding' },
  { label: 'Video y audio', href: '/servicio/edicion-video' },
]

export function isHashLink(href: string): boolean {
  return href.startsWith('#') || href.startsWith('/#')
}

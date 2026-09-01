/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      // Canonical: www → apex (coincide con NEXT_PUBLIC_SITE_URL)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.artestudio.cl' }],
        destination: 'https://artestudio.cl/:path*',
        permanent: true,
      },
      // Atajos de marketing / Redes sociales: Guía gratuita
      { source: '/guia-gratuita', destination: '/construye/metodo-construye-guia-practica-01.pdf', permanent: false },
      { source: '/guia', destination: '/guia-gratuita', permanent: false },
      { source: '/descargar-guia', destination: '/guia-gratuita', permanent: false },
      { source: '/descarga-guia', destination: '/guia-gratuita', permanent: false },
      // Rutas antiguas: el catálogo vive en /servicios.
      { source: '/precios', destination: '/servicios', permanent: false },
      { source: '/landing-express', destination: '/servicios/landing-express', permanent: false },
      { source: '/plan-crecimiento', destination: '/servicios/sistema-crecimiento', permanent: false },
      { source: '/servicio/edicion-audio', destination: '/', permanent: true },
      { source: '/servicio/mastering', destination: '/', permanent: true },
      { source: '/servicio/edicion-video', destination: '/', permanent: false },
      { source: '/servicio/:slug', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig

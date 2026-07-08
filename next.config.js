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
      { source: '/precios', destination: '/#planes', permanent: false },
      { source: '/servicios', destination: '/#planes', permanent: false },
      { source: '/landing-express', destination: '/#planes', permanent: false },
      { source: '/plan-crecimiento', destination: '/#planes', permanent: false },
      { source: '/servicio/edicion-audio', destination: '/', permanent: true },
      { source: '/servicio/mastering', destination: '/', permanent: true },
      { source: '/servicio/edicion-video', destination: '/', permanent: false },
      { source: '/servicio/:slug', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig

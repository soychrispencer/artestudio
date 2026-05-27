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
      { source: '/precios', destination: '/#plan-crecimiento', permanent: false },
      { source: '/servicios', destination: '/#caminos', permanent: false },
      { source: '/landing-express', destination: '/#landing-express', permanent: false },
      { source: '/plan-crecimiento', destination: '/#plan-crecimiento', permanent: false },
      { source: '/servicio/edicion-audio', destination: '/', permanent: true },
      { source: '/servicio/mastering', destination: '/', permanent: true },
      { source: '/servicio/edicion-video', destination: '/', permanent: false },
      { source: '/servicio/:slug', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProviderWrapper } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'

export const metadata: Metadata = {
  title: 'artestudio.cl - Transformación Digital y Creativa',
  description:
    'Servicios de diseño gráfico, web, branding, redes sociales y audio profesional. Transformamos tu marca con soluciones creativas de clase mundial.',
  keywords: [
    'diseño web',
    'diseño gráfico',
    'branding',
    'redes sociales',
    'audio profesional',
    'diseño digital',
    'Chile',
  ],
  authors: [{ name: 'artestudio.cl' }],
  metadataBase: new URL(siteUrl),
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: 'artestudio.cl',
    title: 'artestudio.cl - Transformación Digital y Creativa',
    description:
      'Servicios de diseño gráfico, web, branding, redes sociales y audio profesional.',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: 'artestudio.cl' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'artestudio.cl - Transformación Digital y Creativa',
    description: 'Servicios de diseño gráfico, web, branding, redes sociales y audio profesional.',
    images: [`${siteUrl}/og-image.png`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-dark-bg`}>
        <ThemeProviderWrapper>
          <JsonLd />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/globals.css'
import { ThemeProviderWrapper } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

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
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://artestudio.cl',
    siteName: 'artestudio.cl',
    title: 'artestudio.cl - Transformación Digital y Creativa',
    description:
      'Servicios de diseño gráfico, web, branding, redes sociales y audio profesional.',
  },
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-dark-bg`}>
        <ThemeProviderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProviderWrapper } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { CartProvider } from '@/components/cart/CartProvider'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'
const gaId = process.env.NEXT_PUBLIC_GA_ID

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
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        <GoogleAnalytics gaId={gaId} />
        <ThemeProviderWrapper>
          <CartProvider>
            <JsonLd />
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </CartProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

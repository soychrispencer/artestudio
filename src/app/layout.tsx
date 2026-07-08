import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { HashScrollOnLoad } from '@/components/layout/HashScrollOnLoad'
import JsonLd from '@/components/seo/JsonLd'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CartProvider } from '@/components/cart/CartProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'
const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Artestudio — Sistemas de crecimiento para empresas | Chile',
  description:
    'Diseñamos sistemas inteligentes de crecimiento: publicidad, web, IA y automatizaciones trabajando como un solo sistema para atraer y convertir clientes.',
  keywords: [
    'sistema de crecimiento Chile',
    'estudio de crecimiento digital',
    'automatizaciones empresas Chile',
    'IA para negocios Chile',
    'landing page Chile',
    'Google Ads Chile',
    'Meta Ads Chile',
  ],
  authors: [{ name: 'Artestudio' }],
  metadataBase: new URL(siteUrl),
  robots: 'index, follow',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Artestudio — Sistemas de crecimiento para empresas',
    description: 'Diseñamos sistemas inteligentes de crecimiento para empresas en Chile.',
    url: siteUrl,
    siteName: 'Artestudio',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: 'Artestudio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artestudio — Sistemas de crecimiento para empresas',
    description: 'Diseñamos sistemas inteligentes de crecimiento para empresas en Chile.',
    images: [`${siteUrl}/og-image.png`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-bg text-[var(--text)] antialiased">
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
        <JsonLd />
        <CartProvider>
          <HashScrollOnLoad />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  )
}

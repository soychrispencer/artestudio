import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { HashScrollOnLoad } from '@/components/layout/HashScrollOnLoad'
import JsonLd from '@/components/seo/JsonLd'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'
const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Artestudio — Tu equipo digital mensual en Chile',
  description:
    'Web, redes sociales y apps con IA por mensualidad fija. Sin contratos largos. Para emprendedores y pymes en Chile.',
  keywords: [
    'diseño web Chile',
    'agencia digital Chile',
    'redes sociales Chile',
    'apps IA Chile',
    'agencia mensual',
  ],
  authors: [{ name: 'Artestudio' }],
  metadataBase: new URL(siteUrl),
  robots: 'index, follow',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Artestudio — Tu equipo digital mensual en Chile',
    description: 'Web, redes y apps con IA que generan clientes todos los meses.',
    url: siteUrl,
    siteName: 'Artestudio',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: 'Artestudio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artestudio — Tu equipo digital mensual en Chile',
    description: 'Web, redes y apps con IA que generan clientes todos los meses.',
    images: [`${siteUrl}/og-image.png`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05080F',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-bg text-[var(--text)] antialiased">
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
        <HashScrollOnLoad />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

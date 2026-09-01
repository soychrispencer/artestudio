import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { ConstruyeChrome } from '@/components/construye/ConstruyeChrome'
import styles from '@/components/construye/construye.module.css'

const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl').replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Método Construye',
  description:
    'Construye, no improvises. Diagnostica tu negocio en minutos y descarga la Guía práctica 01 gratis.',
  alternates: {
    canonical: '/construye',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: `${siteUrl}/construye`,
    siteName: 'Artestudio',
    title: 'Método Construye — Diagnóstico y Guía práctica',
    description:
      'Construye, no improvises. Diagnostica tu negocio en minutos y descarga la Guía práctica 01 gratis.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Método Construye',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Método Construye — Diagnóstico y Guía práctica',
    description:
      'Construye, no improvises. Diagnostica tu negocio en minutos y descarga la Guía práctica 01 gratis.',
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function ConstruyeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.construye} ${instrument.variable} ${styles.construyeShell}`}>
      <ConstruyeChrome>{children}</ConstruyeChrome>
    </div>
  )
}

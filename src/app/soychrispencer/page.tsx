import type { Metadata } from 'next'
import { SoyChrisSpencerHub } from '@/components/soychrispencer/LinkHubPage'
import { soychrispencerConfig } from '@/content/soychrispencer.config'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artestudio.cl').replace(/\/$/, '')
const profileUrl = `${siteUrl}/soychrispencer`

export const metadata: Metadata = {
  title: soychrispencerConfig.metadata.title,
  description: soychrispencerConfig.metadata.description,
  alternates: {
    canonical: '/soychrispencer',
  },
  openGraph: {
    type: 'profile',
    locale: 'es_CL',
    url: profileUrl,
    siteName: 'Artestudio',
    title: soychrispencerConfig.metadata.title,
    description: soychrispencerConfig.metadata.description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Chris Spencer | Creatividad, estrategia y negocio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: soychrispencerConfig.metadata.title,
    description: soychrispencerConfig.metadata.description,
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function SoyChrisSpencerPage() {
  return <SoyChrisSpencerHub />
}


import { CONTACT_INFO, SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'
import { FAQ_ITEMS } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: 'Artestudio',
      legalName: 'Artestudio',
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
        addressLocality: 'Chile',
      },
      sameAs: Object.values(SOCIAL_LINKS),
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logos/Logo-Light.png`,
      },
      image: SITE_CONFIG.ogImage,
      knowsAbout: [
        'Estrategia, tecnología y crecimiento',
        'Shopify',
        'JumpSeller',
        'WordPress',
        'WooCommerce',
        'Google Ads',
        'Meta Ads',
        'TikTok Ads',
        'YouTube Ads',
        'Claude',
        'ChatGPT',
        'Gemini',
        'Cursor',
        'Adobe Creative Cloud',
        'Avid Pro Tools',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_CONFIG.url}/#service`,
      name: 'Artestudio',
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      provider: { '@id': `${SITE_CONFIG.url}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      serviceType: [
        'Estrategia, tecnología y crecimiento',
        'Landing pages',
        'Diseño web',
        'Publicidad digital',
        'Automatizaciones',
        'Inteligencia artificial para negocios',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: 'Artestudio',
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      inLanguage: SITE_CONFIG.locale,
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_CONFIG.url}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as a raw string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

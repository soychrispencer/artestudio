import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
        addressLocality: CONTACT_INFO.address,
      },
      sameAs: Object.values(SOCIAL_LINKS),
      logo: SITE_CONFIG.ogImage,
    },
    {
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      inLanguage: SITE_CONFIG.locale,
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

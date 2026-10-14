import { MetadataRoute } from 'next'
import { ALL_SERVICES } from '@/content/services-catalog'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...ALL_SERVICES.map((service) => ({
      url: `${baseUrl}${service.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/construye`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${baseUrl}/construye/diagnostico`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${baseUrl}/construye/guia`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${baseUrl}/soychrispencer`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}

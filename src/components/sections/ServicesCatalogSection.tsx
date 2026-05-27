'use client'

import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import { PageSection } from '@/components/ui/PageSection'
import {
  SERVICE_CATALOG,
  SERVICE_NAV_GROUPS,
  getServiceHref,
} from '@/lib/service-navigation'
import { trackEvent } from '@/lib/analytics'

export function ServicesCatalogSection() {
  return (
    <PageSection
      id="servicios"
      eyebrow="Paso 3"
      title="Todo lo que hacemos"
      description="Elige un servicio para ver planes, precios y contratar en línea."
      muted
    >
      <div className="space-y-12">
        {SERVICE_NAV_GROUPS.map((group) => {
          const items = SERVICE_CATALOG.filter((s) => s.group === group.id)
          if (items.length === 0) return null

          return (
            <div key={group.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-dark-text-secondary mb-4">
                {group.label}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={getServiceHref(item)}
                      onClick={() => trackEvent('catalog_service_click', { slug: item.slug })}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-5 py-4 hover:border-primary/30 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors truncate">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-dark-text-secondary truncate">
                          {item.shortDesc}
                          {item.from ? ` · ${item.from}` : ''}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </PageSection>
  )
}

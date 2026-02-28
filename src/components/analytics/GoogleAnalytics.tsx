'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

type GoogleAnalyticsProps = {
  gaId?: string
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.toString()

  useEffect(() => {
    if (!gaId || typeof window.gtag !== 'function') {
      return
    }

    const pagePath = query ? `${pathname}?${query}` : pathname
    window.gtag('config', gaId, { page_path: pagePath })
  }, [gaId, pathname, query])

  return null
}

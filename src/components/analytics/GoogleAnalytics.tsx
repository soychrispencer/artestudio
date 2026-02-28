'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

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

  useEffect(() => {
    if (!gaId || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('config', gaId, { page_path: pathname })
  }, [gaId, pathname])

  return null
}

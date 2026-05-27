'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Al cargar /#seccion (o tras redirect), hace scroll suave al ancla */
export function HashScrollOnLoad() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)

    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}

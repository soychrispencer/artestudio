'use client'

import { useEffect } from 'react'

/** Redirige rutas legacy al one-page con ancla */
export function AnchorRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    const target = hash.startsWith('#') ? hash : `#${hash}`
    window.location.replace(`/${target}`)
  }, [hash])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg">
      <p className="text-sm text-gray-500">Redirigiendo…</p>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'tabler-icons-react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 280)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200/80 bg-white/90 text-gray-700 shadow-lg backdrop-blur transition-all hover:border-primary/60 hover:text-primary dark:border-white/10 dark:bg-dark-bg-secondary/90 dark:text-dark-text"
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

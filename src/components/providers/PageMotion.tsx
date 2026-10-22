'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Adds one restrained, accessible entrance rhythm to page sections and selected content groups. */
export function PageMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const main = document.querySelector('main')
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!main || reduceMotion.matches || !('IntersectionObserver' in window)) return

    const targets = new Set<HTMLElement>()
    main.querySelectorAll<HTMLElement>('section').forEach(section => targets.add(section))

    main.querySelectorAll<HTMLElement>('[data-motion-stagger]').forEach(group => {
      Array.from(group.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement) || child.hidden) return
        child.style.setProperty('--motion-delay', `${Math.min(index * 65, 260)}ms`)
        targets.add(child)
      })
    })

    root.dataset.pageMotion = 'ready'

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const target = entry.target as HTMLElement
        target.dataset.scrollMotion = 'visible'
        observer.unobserve(target)
      })
    }, { threshold: 0.04, rootMargin: '0px 0px -5% 0px' })

    targets.forEach(target => {
      target.dataset.scrollMotion = 'pending'
      const bounds = target.getBoundingClientRect()
      if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
        target.dataset.scrollMotion = 'visible'
      } else {
        observer.observe(target)
      }
    })

    return () => {
      observer.disconnect()
      targets.forEach(target => {
        delete target.dataset.scrollMotion
        target.style.removeProperty('--motion-delay')
      })
      delete root.dataset.pageMotion
    }
  }, [pathname])

  return null
}

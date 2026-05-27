'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, WA_LINKS } from '@/lib/site'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname.startsWith('/soychrispencer')) return null

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(5,8,15,0.85)] backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button type="button" onClick={scrollTop} className="flex-shrink-0" aria-label="Artestudio inicio">
          <Image
            src="/logos/Logo-Light.png"
            alt="Artestudio"
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-light hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={WA_LINKS.general} external variant="primary" className="!py-2.5 !px-5 !text-sm">
          Hablar por WhatsApp
        </Button>
      </div>
    </header>
  )
}

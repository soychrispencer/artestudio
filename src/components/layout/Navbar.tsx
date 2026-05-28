'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart } from 'tabler-icons-react'
import { NAV_LINKS, WA_LINKS } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

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
          ? 'bg-[rgba(15,15,15,0.9)] backdrop-blur-xl border-b border-[var(--border)]'
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              trackEvent('header_cart_click')
              openCart()
            }}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-card text-[var(--text)] transition-colors hover:border-primary/60"
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 min-w-[18px] h-[18px] rounded-full bg-primary px-1 text-[10px] font-bold text-white flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Button href={WA_LINKS.general} external variant="primary" className="!py-2.5 !px-5 !text-sm">
            Quiero empezar
          </Button>
        </div>
      </div>
    </header>
  )
}

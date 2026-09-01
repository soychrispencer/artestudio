'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart } from 'tabler-icons-react'
import { NAV_LINKS, WA_LINKS } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(true)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const hero = document.getElementById('inicio')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setOverDark(entry.boundingClientRect.bottom > 72),
      { threshold: [0, 0.05, 0.1, 0.25, 0.5, 1] },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [isHome])

  if (pathname.startsWith('/soychrispencer') || pathname.startsWith('/construye')) return null

  const darkNav = isHome && overDark

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkNav
          ? scrolled
            ? 'scrim-ink backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
          : scrolled || !isHome
            ? 'scrim-paper backdrop-blur-md border-b border-line'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0" aria-label="Artestudio inicio">
          <Image
            src={darkNav ? '/logos/Logo-Light.png' : '/logos/Logo-Dark.png'}
            alt="Artestudio"
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/servicios'
                ? pathname.startsWith('/servicios')
                : link.href === '/construye'
                  ? pathname.startsWith('/construye')
                  : isHome && link.href.startsWith('/#')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  darkNav
                    ? 'text-white/55 hover:text-white'
                    : active
                      ? 'text-[var(--text)] font-semibold'
                      : 'text-muted hover:text-[var(--text)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              trackEvent('header_cart_click')
              openCart()
            }}
            className={`relative inline-flex h-10 w-10 items-center justify-center rounded-[10px] border transition-colors ${
              darkNav
                ? 'border-white/15 bg-white/5 text-white hover:border-white/40'
                : 'border-[var(--border)] bg-surface text-[var(--text)] hover:border-[var(--ink)]'
            }`}
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 min-w-[18px] h-[18px] rounded-full bg-primary px-1 text-[10px] font-bold text-white flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Button
            href={WA_LINKS.reunion}
            external
            variant="primary"
            className={`!py-2.5 !px-5 !text-sm ${
              darkNav
                ? '!bg-[var(--paper)] !text-[var(--ink)] !border-[var(--paper)] hover:!bg-white'
                : ''
            }`}
          >
            Agendar reunión
          </Button>
        </div>
      </div>
    </header>
  )
}

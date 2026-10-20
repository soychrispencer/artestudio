'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu2, X } from 'tabler-icons-react'
import { NAV_LINKS, WA_LINKS } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  if (
    pathname.startsWith('/soychrispencer') ||
    pathname.startsWith('/construye') ||
    pathname.startsWith('/dev')
  )
    return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-[#0c0c0c]/95 backdrop-blur-md border-line shadow-sm' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Artestudio inicio">
          <Image
            src="/logos/Logo-Dark.png"
            alt="Artestudio"
            width={120}
            height={32}
            className="brand-logo-light h-[30px] sm:h-8 w-auto object-contain"
            priority
          />
          <Image
            src="/logos/Logo-Light.png"
            alt="Artestudio"
            width={120}
            height={32}
            className="brand-logo-dark h-[30px] sm:h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = link.href === '/servicios' && pathname.startsWith('/servicios')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active
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
          <ThemeToggle />
          {cartCount > 0 && (
            <button
              type="button"
              onClick={() => {
                trackEvent('header_cart_click')
                openCart()
              }}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--border)] bg-surface text-[var(--text)] hover:border-[var(--ink)] transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -right-1 -top-1 min-w-[18px] h-[18px] rounded-full bg-[var(--ink)] px-1 text-[10px] font-bold text-[var(--button-text)] flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}
          <Button
            href={WA_LINKS.reunion}
            external
            variant="primary"
            className="!py-2.5 !px-5 !text-sm hidden sm:inline-flex"
          >
            Agendar reunión
          </Button>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--border)] bg-surface text-[var(--text)]"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav className="md:hidden border-t border-line bg-surface px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-[10px] px-3 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--field)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

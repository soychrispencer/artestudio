'use client'

import { CONTACT_INFO } from '@/lib/constants'
import { MAIN_NAV, SECTION_IDS, sectionHref } from '@/lib/navigation'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { BrandWhatsapp, Menu2, ShoppingCart, X } from 'tabler-icons-react'
import { openWhatsApp } from '@/lib/utils'
import Image from 'next/image'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string>(SECTION_IDS.inicio)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const isPersonalHub = pathname.startsWith('/soychrispencer')
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const ids = [SECTION_IDS.inicio, ...MAIN_NAV.map((n) => n.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  const goToSection = useCallback(
    (sectionId: string) => {
      setMenuOpen(false)
      if (isHome) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = sectionHref(sectionId)
      }
    },
    [isHome]
  )

  if (isPersonalHub) return null

  const navLinkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      isHome && activeId === id
        ? 'text-primary'
        : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-white'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10'
          : 'bg-white/70 dark:bg-dark-bg/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            type="button"
            onClick={() => goToSection(SECTION_IDS.inicio)}
            className="flex-shrink-0 flex items-center h-10"
            aria-label="Ir al inicio"
          >
            <Image
              src="/logos/Logo-Dark.png"
              alt="artestudio"
              height={28}
              width={110}
              className="h-7 w-auto object-contain block dark:hidden"
              priority
            />
            <Image
              src="/logos/Logo-Light.png"
              alt="artestudio"
              height={28}
              width={110}
              className="h-7 w-auto object-contain hidden dark:block"
              priority
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className={navLinkClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle isScrolled={scrolled} />
            <button
              type="button"
              onClick={() => {
                trackEvent('header_cart_click')
                openCart()
              }}
              className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-dark-text-secondary hover:border-primary/40 transition-colors"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                trackEvent('header_cta_click', { target: 'whatsapp' })
                openWhatsApp(CONTACT_INFO.whatsapp, 'Hola, quiero información sobre sus servicios.')
              }}
              className="hidden sm:inline-flex btn-whatsapp px-4 py-2 text-sm h-9"
            >
              <BrandWhatsapp className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 pt-1 flex flex-col gap-1 border-t border-gray-100 dark:border-dark-bg-tertiary mt-1">
            {MAIN_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isHome && activeId === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 dark:text-dark-text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                openWhatsApp(CONTACT_INFO.whatsapp, 'Hola, quiero información.')
              }}
              className="btn-whatsapp mt-2 w-full py-2.5 text-sm"
            >
              <BrandWhatsapp className="w-4 h-4" />
              WhatsApp
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { CONTACT_INFO, ROUTES } from '@/lib/constants'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useState, useEffect, type MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import { BrandWhatsapp, Menu2, ShoppingCart, X } from 'tabler-icons-react'
import { openWhatsApp } from '@/lib/utils'
import Image from 'next/image'
import { useCart } from '@/components/cart/CartProvider'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: ROUTES.home },
    { label: 'Servicios', href: ROUTES.services },
    { label: 'Confianza', href: ROUTES.trust },
    { label: 'Contacto', href: ROUTES.contact },
  ]

  const handleHomeClick = (event: MouseEvent) => {
    if (pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-dark-bg/80 border-b border-gray-200/60 dark:border-white/10 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center h-12 min-w-[100px]">
            <div className="h-6 sm:h-8 w-auto flex items-center justify-center relative">
              <Image
                src="/logos/Logo-Dark.png"
                alt="artestudio"
                height={32}
                width={120}
                className="h-6 sm:h-8 w-auto object-contain transition-all duration-300 block dark:hidden"
                priority
              />
              <Image
                src="/logos/Logo-Light.png"
                alt="artestudio"
                height={32}
                width={120}
                className="h-6 sm:h-8 w-auto object-contain transition-all duration-300 hidden dark:block"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 px-6 py-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-dark-bg-secondary/70 backdrop-blur-md">
            {navItems.map((item) =>
              (item.href.startsWith('#') || item.href.startsWith('/#')) ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={item.label === 'Inicio' ? handleHomeClick : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary'
                      : 'text-gray-700 dark:text-dark-text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={item.label === 'Inicio' ? handleHomeClick : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary'
                      : 'text-gray-700 dark:text-dark-text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 h-16">
            <ThemeToggle isScrolled={scrolled} />
            <button
              onClick={openCart}
              className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors border ${
                scrolled
                  ? 'bg-gray-100 dark:bg-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary border-gray-200 dark:border-white/10'
                  : 'bg-white/80 dark:bg-dark-bg-secondary/80 hover:bg-white dark:hover:bg-dark-bg-tertiary border-gray-200/60 dark:border-white/10'
              }`}
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() =>
                openWhatsApp(
                  CONTACT_INFO.whatsapp,
                  'Hola, quiero más información sobre sus servicios.'
                )
              }
              className="hidden sm:inline-flex btn-whatsapp px-6 py-2.5 h-10"
            >
              <BrandWhatsapp className="w-4 h-4" />
              Contacto
            </button>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                scrolled
                  ? 'bg-gray-100 dark:bg-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary'
                  : 'bg-white/80 dark:bg-dark-bg-secondary/80 hover:bg-white dark:hover:bg-dark-bg-tertiary border border-gray-200/60 dark:border-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            className={`md:hidden pb-4 space-y-2 ${
              scrolled
                ? 'bg-white dark:bg-dark-bg'
                : 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) =>
              (item.href.startsWith('#') || item.href.startsWith('/#')) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-xl transition-smooth ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                      : 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                  }`}
                  onClick={item.label === 'Inicio' ? handleHomeClick : () => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-xl transition-smooth ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                      : 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                  }`}
                  onClick={item.label === 'Inicio' ? handleHomeClick : () => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              onClick={() =>
                openWhatsApp(
                  CONTACT_INFO.whatsapp,
                  'Hola, quiero más información sobre sus servicios.'
                )
              }
              className="btn-whatsapp w-full px-4 py-2"
            >
              <BrandWhatsapp className="w-4 h-4" />
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

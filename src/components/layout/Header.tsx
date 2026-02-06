'use client'

import Link from 'next/link'
import { CONTACT_INFO, ROUTES } from '@/lib/constants'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu2, X } from 'tabler-icons-react'
import { MessageCircle } from 'tabler-icons-react'
import { openWhatsApp } from '@/lib/utils'
import Image from 'next/image'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const themeForLogo = resolvedTheme ?? 'light'
  const useLightLogo = !scrolled || themeForLogo === 'dark'

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
    { label: 'Portfolio', href: ROUTES.portfolio },
    { label: 'Testimonios', href: ROUTES.testimonials },
    { label: 'Contacto', href: ROUTES.contact },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'backdrop-blur-md bg-white/95 dark:bg-dark-bg-secondary/95 border-gray-100 dark:border-dark-bg-tertiary shadow-soft' 
        : 'bg-white/0 dark:bg-dark-bg-secondary/0 border-transparent shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo: en hero (no scrolled) siempre claro; al hacer scroll según tema para que se vea en móvil */}
          <Link href="/" className="flex-shrink-0 flex items-center h-12 min-w-[100px]">
            <div className="h-6 sm:h-8 w-auto flex items-center justify-center relative" suppressHydrationWarning>
              <Image
                src={useLightLogo ? '/logos/Logo-Light.png' : '/logos/Logo-Dark.png'}
                alt="artestudio"
                height={32}
                width={120}
                className="h-6 sm:h-8 w-auto object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              (item.href.startsWith('#') || item.href.startsWith('/#')) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled 
                      ? 'text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled 
                      ? 'text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary'
                      : 'text-white/90 hover:text-white'
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
              onClick={() =>
                openWhatsApp(
                  CONTACT_INFO.whatsapp,
                  'Hola, quiero más información sobre sus servicios.'
                )
              }
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 h-10 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'
                  : 'bg-white/20 border border-white/50 text-white hover:bg-white/30'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Contacto
            </button>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                scrolled
                  ? 'bg-gray-100 dark:bg-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary'
                  : 'bg-white/20 hover:bg-white/30 border border-white/30'
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
          <nav id="mobile-nav" className={`md:hidden pb-4 space-y-2 ${
            scrolled 
              ? 'bg-white dark:bg-dark-bg' 
              : 'bg-white/10 backdrop-blur-md'
          }`}>
            {navItems.map((item) =>
              (item.href.startsWith('#') || item.href.startsWith('/#')) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-smooth ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                      : 'text-white/90 hover:bg-white/20'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-smooth ${
                    scrolled
                      ? 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary'
                      : 'text-white/90 hover:bg-white/20'
                  }`}
                  onClick={() => setMenuOpen(false)}
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
              className={`w-full px-4 py-2 rounded-lg font-semibold transition-all ${
                scrolled
                  ? 'bg-primary text-white'
                  : 'bg-white/20 border border-white/50 text-white hover:bg-white/30'
              }`}
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

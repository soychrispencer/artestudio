'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo } from 'react'
import { useTheme } from 'next-themes'
import { BrandInstagram, BrandTiktok, BrandFacebook, BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'

function BrandLogo() {
  const { resolvedTheme, theme } = useTheme()
  const isDark = useMemo(() => {
    const activeTheme = resolvedTheme ?? theme
    return activeTheme === 'dark'
  }, [resolvedTheme, theme])

  return (
    <div className="flex items-center gap-3 mb-4">
      {isDark ? (
        <Image src="/logos/Logo-Light.png" alt="artestudio" width={140} height={36} className="w-auto h-9 object-contain" />
      ) : (
        <Image src="/logos/Logo-Dark.png" alt="artestudio" width={140} height={36} className="w-auto h-9 object-contain" />
      )}
    </div>
  )
}

export function Footer() {
  const socialLinks = [
    { icon: BrandInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: BrandTiktok, href: SOCIAL_LINKS.tiktok, label: 'TikTok' },
    { icon: BrandFacebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  ]

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gray-50 dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-dark-bg-tertiary"
    >
      <div className="absolute inset-0 ai-grid opacity-20 dark:opacity-15" />
      <div className="absolute -top-24 right-16 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-120px] left-10 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-gray-200/70 dark:border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-dark-text-secondary">
                  Listos para crear
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Elevemos tu marca con creatividad y tecnología
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">
                  Trabajamos con artistas, emprendedores y negocios que buscan diferenciarse con una agencia moderna.
                </p>
              </div>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Hola%20artestudio%2C%20quiero%20hablar%20sobre%20mi%20proyecto`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 py-3"
              >
                <BrandWhatsapp className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <BrandLogo />
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed">
              Agencia creativa y tecnológica para impulsar tu marca con estrategia y diseño.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-dark-text uppercase text-xs tracking-[0.2em]">Navegación</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-dark-text-secondary">
              <li>
                <Link href="#home" className="hover:text-primary transition-smooth">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-smooth">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#confianza" className="hover:text-primary transition-smooth">
                  Confianza
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-dark-text uppercase text-xs tracking-[0.2em]">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-dark-text-secondary">
              <li><a href="#services" className="hover:text-primary transition-smooth">Redes Sociales</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Branding</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Diseño Web</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Audio Profesional</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-dark-text uppercase text-xs tracking-[0.2em]">Contacto</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary uppercase tracking-wide mb-1">Teléfono</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 dark:text-dark-text font-semibold hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary uppercase tracking-wide mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-700 dark:text-dark-text font-semibold hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-dark-bg-tertiary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-bg-tertiary pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
            © 2026 <span className="font-semibold text-gray-900 dark:text-dark-text">Artestudio</span> - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

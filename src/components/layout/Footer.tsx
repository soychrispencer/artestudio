'use client'

import { usePathname } from 'next/navigation'
import { BRAND, CONTACT, FOOTER_SOLUTIONS, FOOTER_TOOLS, NAV_LINKS, WA_LINKS } from '@/lib/site'
import { BrandInstagram, BrandWhatsapp, Mail } from 'tabler-icons-react'

export function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/soychrispencer')) return null

  return (
    <footer className="border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <p className="text-lg font-bold text-[var(--text)] mb-1">Artestudio</p>
            <p className="text-xs text-primary mb-3">{BRAND.tagline}</p>
            <p className="text-sm text-muted-light leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Soluciones</p>
            <ul className="space-y-2">
              {FOOTER_SOLUTIONS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-light hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Navegación</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-light hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Contacto</p>
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text)] hover:text-primary mb-2 transition-colors"
            >
              <BrandWhatsapp className="w-4 h-4" />
              {CONTACT.whatsapp}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-sm text-muted-light hover:text-primary mb-3 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-light hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <BrandInstagram className="w-4 h-4" />
              @artestudio.cl
            </a>
          </div>
        </div>

        <div className="mb-10 pt-8 border-t border-[var(--border)]">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            También trabajamos con
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_TOOLS.map((tool) => (
              <li key={tool.label}>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-light hover:text-primary transition-colors"
                >
                  {tool.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
          <p>© 2019 - {new Date().getFullYear()} Artestudio · Chile</p>
          <a href={CONTACT.behance} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Behance
          </a>
        </div>
      </div>
    </footer>
  )
}

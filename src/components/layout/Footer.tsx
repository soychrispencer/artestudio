'use client'

import Image from 'next/image'
import { BrandInstagram, BrandTiktok, BrandFacebook, BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { FOOTER_NAV, FOOTER_SERVICES, sectionHref } from '@/lib/navigation'
import { usePathname } from 'next/navigation'

function BrandLogo() {
  return (
    <div className="flex items-center mb-4">
      <Image
        src="/logos/Logo-Dark.png"
        alt="artestudio"
        width={120}
        height={32}
        className="h-8 w-auto object-contain block dark:hidden"
      />
      <Image
        src="/logos/Logo-Light.png"
        alt="artestudio"
        width={120}
        height={32}
        className="h-8 w-auto object-contain hidden dark:block"
      />
    </div>
  )
}

export function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith('/soychrispencer')) {
    return null
  }

  const socialLinks = [
    { icon: BrandInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: BrandTiktok, href: SOCIAL_LINKS.tiktok, label: 'TikTok' },
    { icon: BrandFacebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-dark-bg-tertiary bg-neutral-50 dark:bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <BrandLogo />
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed">
              Agencia creativa y tecnológica en Chile.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Secciones
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-dark-text-secondary">
              {FOOTER_NAV.map((item) => (
                <li key={item.id}>
                  <a href={sectionHref(item.id)} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contratar
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-dark-text-secondary">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contacto
            </h3>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary block mb-2"
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary block mb-4"
            >
              {CONTACT_INFO.email}
            </a>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-dark-bg-tertiary flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Artestudio</p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-4 py-2 text-sm"
          >
            <BrandWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

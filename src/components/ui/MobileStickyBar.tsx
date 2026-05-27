'use client'

import { usePathname } from 'next/navigation'
import { BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'
import { LANDING_EXPRESS_WHATSAPP } from '@/lib/entry-offers'
import { SECTION_IDS } from '@/lib/navigation'
import { trackEvent } from '@/lib/analytics'

const HIDE_ON = ['/soychrispencer', '/success', '/failure', '/pending', '/pago-exito']

export function MobileStickyBar() {
  const pathname = usePathname()
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(LANDING_EXPRESS_WHATSAPP)}`

  if (HIDE_ON.some((p) => pathname.startsWith(p))) {
    return null
  }

  const scrollTo = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-gray-200 dark:border-dark-bg-tertiary bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md px-4 py-3"
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <button
          type="button"
          onClick={() => {
            trackEvent('sticky_cta', { target: 'ofertas' })
            scrollTo(SECTION_IDS.ofertas)
          }}
          className="flex-1 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
        >
          Ofertas
        </button>
        <button
          type="button"
          onClick={() => {
            trackEvent('sticky_cta', { target: 'contacto' })
            scrollTo(SECTION_IDS.contacto)
          }}
          className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary text-sm font-semibold"
        >
          Contacto
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('sticky_cta', { target: 'whatsapp' })}
          className="inline-flex items-center justify-center w-12 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900"
          aria-label="WhatsApp"
        >
          <BrandWhatsapp className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

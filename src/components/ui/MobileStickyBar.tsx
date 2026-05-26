'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'
import { LANDING_EXPRESS_WHATSAPP } from '@/lib/entry-offers'
import { trackEvent } from '@/lib/analytics'

const HIDE_ON = ['/soychrispencer', '/success', '/failure', '/pending', '/pago-exito']

export function MobileStickyBar() {
  const pathname = usePathname()
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(LANDING_EXPRESS_WHATSAPP)}`

  if (HIDE_ON.some((p) => pathname.startsWith(p))) {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-gray-200 dark:border-dark-bg-tertiary bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md px-4 py-3 safe-area-pb"
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex gap-3 max-w-lg mx-auto">
        <Link
          href="/landing-express"
          onClick={() => trackEvent('sticky_cta', { target: 'landing_express' })}
          className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
        >
          Landing express
        </Link>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('sticky_cta', { target: 'whatsapp' })}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900"
          aria-label="WhatsApp"
        >
          <BrandWhatsapp className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}

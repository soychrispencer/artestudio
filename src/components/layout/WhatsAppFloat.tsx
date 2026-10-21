'use client'

import { usePathname } from 'next/navigation'
import { BrandWhatsapp } from 'tabler-icons-react'
import { WA_LINKS } from '@/lib/site'

export function WhatsAppFloat() {
  const pathname = usePathname()
  if (
    pathname === '/' ||
    pathname.startsWith('/soychrispencer') ||
    pathname.startsWith('/construye') ||
    pathname.startsWith('/dev')
  )
    return null

  return (
    <a
      href={WA_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full border border-black/15 bg-[#c8ff00] text-[#111210] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <BrandWhatsapp className="w-7 h-7" />
    </a>
  )
}

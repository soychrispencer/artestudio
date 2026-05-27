'use client'

import { usePathname } from 'next/navigation'
import { BrandWhatsapp } from 'tabler-icons-react'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'

const HIDE_ON = ['/soychrispencer', '/success', '/failure', '/pending', '/pago-exito']

export function MobileStickyBar() {
  const pathname = usePathname()

  if (HIDE_ON.some((p) => pathname.startsWith(p))) {
    return null
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-[var(--border)] bg-[rgba(15,15,15,0.95)] backdrop-blur-md px-4 py-3"
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <button
          type="button"
          onClick={() => scrollTo(SECTION_IDS.caminos)}
          className="flex-1 py-3 rounded-xl border border-[var(--border)] text-sm font-semibold text-[var(--text)]"
        >
          Cómo empezar
        </button>
        <a
          href={WA_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 rounded-xl bg-[#25D366] text-white"
          aria-label="WhatsApp"
        >
          <BrandWhatsapp className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

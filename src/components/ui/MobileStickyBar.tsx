'use client'

import { usePathname } from 'next/navigation'
import { ShoppingCart, BrandWhatsapp } from 'tabler-icons-react'
import { useCart } from '@/components/cart/CartProvider'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'

const HIDE_ON = ['/soychrispencer', '/success', '/failure', '/pending', '/pago-exito']

export function MobileStickyBar() {
  const pathname = usePathname()
  const { openCart, items } = useCart()
  const count = items.length

  if (HIDE_ON.some((p) => pathname.startsWith(p))) {
    return null
  }

  const scrollToPlanes = () => {
    document.getElementById(SECTION_IDS.planes)?.scrollIntoView({ behavior: 'smooth' })
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
          onClick={scrollToPlanes}
          className="flex-1 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
        >
          Ver planes
        </button>
        <button
          type="button"
          onClick={openCart}
          className="relative py-3 px-4 rounded-xl border border-[var(--border)] text-sm font-semibold"
        >
          <ShoppingCart className="w-5 h-5 mx-auto" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center">
              {count}
            </span>
          )}
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

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, BrandWhatsapp } from 'tabler-icons-react'
import { useCart } from '@/components/cart/CartProvider'
import { WA_LINKS } from '@/lib/site'

const HIDE_ON = ['/soychrispencer', '/construye', '/success', '/failure', '/pending', '/pago-exito']

export function MobileStickyBar() {
  const pathname = usePathname()
  const { openCart, items } = useCart()
  const count = items.length

  if (HIDE_ON.some((p) => pathname.startsWith(p))) {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-line bg-[color-mix(in_srgb,var(--paper)_96%,transparent)] backdrop-blur-md px-4 py-3"
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <Link
          href="/servicios"
          className="flex-1 py-3 rounded-[10px] bg-[var(--ink)] text-white text-sm font-semibold text-center"
        >
          Ver servicios
        </Link>
        <button
          type="button"
          onClick={openCart}
          className="relative py-3 px-4 rounded-[10px] border border-[var(--border)] bg-surface text-sm font-semibold text-[var(--text)]"
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
          className="inline-flex items-center justify-center w-12 rounded-[10px] bg-[#25D366] text-white"
          aria-label="WhatsApp"
        >
          <BrandWhatsapp className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

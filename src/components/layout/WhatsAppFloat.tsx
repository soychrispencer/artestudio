import { BrandWhatsapp } from 'tabler-icons-react'
import { WA_LINKS } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform"
    >
      <BrandWhatsapp className="w-7 h-7" />
    </a>
  )
}

import { BrandBehance, BrandInstagram } from 'tabler-icons-react'
import { CONTACT, PRUEBA_SOCIAL, SECTION_IDS } from '@/lib/site'

export function PruebaSocial() {
  return (
    <section id={SECTION_IDS.prueba} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
        <p className="section-label">Confianza</p>
        <p className="text-lg text-muted-light leading-relaxed mb-8">{PRUEBA_SOCIAL.honest}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CONTACT.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 text-sm justify-center"
          >
            <BrandBehance className="w-5 h-5" />
            {PRUEBA_SOCIAL.behanceLabel}
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 text-sm justify-center"
          >
            <BrandInstagram className="w-5 h-5" />
            {PRUEBA_SOCIAL.instagramLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

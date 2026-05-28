import Image from 'next/image'
import { BrandBehance, BrandInstagram } from 'tabler-icons-react'
import { CONTACT, PRUEBA_SOCIAL, SECTION_IDS } from '@/lib/site'

export function PruebaSocial() {
  return (
    <section id={SECTION_IDS.prueba} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
          <div>
            <p className="section-label">{PRUEBA_SOCIAL.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">{PRUEBA_SOCIAL.title}</h2>
            <p className="text-muted-light leading-relaxed mb-8 max-w-xl">{PRUEBA_SOCIAL.honest}</p>
            <div className="flex flex-col sm:flex-row gap-3">
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
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
            <Image
              src="/images/contenido-redes.png"
              alt="Producción de contenido digital para proyectos reales"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

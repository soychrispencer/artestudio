import Image from 'next/image'
import { Check } from 'tabler-icons-react'
import { PROBLEMAS, SECTION_IDS } from '@/lib/site'

export function Problemas() {
  return (
    <section id={SECTION_IDS.problemas} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8">
              {PROBLEMAS.title}
            </h2>

            <ul className="space-y-4 mb-10">
              {PROBLEMAS.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted-light">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl text-muted-light">{PROBLEMAS.closing}</p>
            <p className="text-xl font-bold text-gradient-primary">{PROBLEMAS.closingAccent}</p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
            <Image
              src={PROBLEMAS.image}
              alt="Contenido y captación digital para negocios"
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

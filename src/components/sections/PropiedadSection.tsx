import { Check } from 'tabler-icons-react'
import { PROPIEDAD, SECTION_IDS } from '@/lib/site'

export function PropiedadSection() {
  return (
    <section id={SECTION_IDS.propiedad} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-label">Transparencia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">{PROPIEDAD.title}</h2>
            <div className="space-y-4 text-muted-light leading-relaxed">
              {PROPIEDAD.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {PROPIEDAD.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 rounded-2xl border border-[var(--border)] bg-card p-4 text-sm text-[var(--text)]"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { SECTION_IDS, TRES_MESES_COPY } from '@/lib/site'

export function PorQueTresMeses() {
  return (
    <section id={SECTION_IDS.tresMeses} className="scroll-mt-20 py-16 md:py-20 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            {TRES_MESES_COPY.title}
          </h2>
          <div className="space-y-4 text-muted-light leading-relaxed">
            {TRES_MESES_COPY.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

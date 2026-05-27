import { PROCESO, SECTION_IDS } from '@/lib/site'

export function Proceso() {
  return (
    <section id={SECTION_IDS.proceso} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Cómo funciona</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-12">De la compra al crecimiento</h2>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          {PROCESO.map((line, idx) => (
            <li key={line} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-dim text-primary font-bold text-sm flex items-center justify-center">
                {idx + 1}
              </span>
              <p className="text-sm text-muted-light leading-relaxed pt-1.5">{line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

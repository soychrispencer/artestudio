import Image from 'next/image'
import { METODOLOGIA, SECTION_IDS } from '@/lib/site'

export function Metodologia() {
  return (
    <section id={SECTION_IDS.metodologia} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface relative overflow-hidden">
      <div className="absolute inset-0 glow-accent opacity-40 pointer-events-none" />

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label">{METODOLOGIA.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">{METODOLOGIA.title}</h2>
        </div>

        <div className="relative mb-12">
          <div
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
            {METODOLOGIA.steps.map((step, idx) => (
              <li key={step.title} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-accent)] bg-[var(--bg)] text-lg font-bold text-primary shadow-[0_0_24px_rgba(131,37,253,0.12)]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-sm font-semibold text-[var(--text)] mb-1">{step.title}</h3>
                <p className="text-xs text-muted-light leading-relaxed px-1">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative aspect-[21/9] md:aspect-[2.8/1] overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
          <Image
            src={METODOLOGIA.image}
            alt="Metodología para diseñar sistemas de crecimiento"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,15,0.55)] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { METODOLOGIA, SECTION_IDS } from '@/lib/site'

export function Metodologia() {
  return (
    <section
      id={SECTION_IDS.metodologia}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <p className="section-label">{METODOLOGIA.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
            {METODOLOGIA.title.replace('™', '')}
            <span className="font-display text-primary">™</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 mb-14">
          {METODOLOGIA.steps.map((step, idx) => (
            <li key={step.title} className="relative">
              <p className="giant-num mb-3" aria-hidden>
                {String(idx + 1).padStart(2, '0')}
              </p>
              <div className="border-t-2 border-[var(--ink)] pt-4">
                <h3 className="text-base font-bold text-[var(--text)] mb-1">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative aspect-[21/9] md:aspect-[2.8/1] overflow-hidden rounded-2xl border border-[var(--border)] bg-card shadow-medium">
          <Image
            src={METODOLOGIA.image}
            alt="Metodología para diseñar sistemas de crecimiento"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { PROCESO, SECTION_IDS } from '@/lib/site'

export function Proceso() {
  return (
    <section id={SECTION_IDS.metodologia} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-8 items-center mb-12">
          <div>
            <p className="section-label">{PROCESO.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">{PROCESO.title}</h2>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
            <Image
              src="/images/proceso-web-soporte.png"
              alt="Flujo de trabajo para crear, revisar y mantener una presencia digital"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESO.steps.map((step, idx) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-dim text-primary font-bold text-sm flex items-center justify-center">
                {idx + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-sm font-semibold text-[var(--text)] mb-1">{step.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

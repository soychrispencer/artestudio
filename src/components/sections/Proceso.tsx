import { ArrowRight } from 'tabler-icons-react'
import { PROCESO } from '@/lib/site'

export function Proceso() {
  return (
    <section id="proceso" className="scroll-mt-20 py-16 md:py-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Cómo funciona</p>
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-[var(--text)] mb-12">
          De la conversación al crecimiento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-start">
          {PROCESO.map((step, idx) => (
            <div key={step.step} className="flex md:flex-col items-start md:items-stretch gap-4">
              <article className="flex-1 rounded-2xl card-base p-5">
                <span className="inline-flex w-8 h-8 rounded-lg bg-accent-dim text-accent font-syne font-bold text-sm items-center justify-center mb-3">
                  {step.step}
                </span>
                <h3 className="font-syne font-semibold text-[var(--text)] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed">{step.description}</p>
              </article>
              {idx < PROCESO.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-muted flex-shrink-0 self-center mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

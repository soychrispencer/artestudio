'use client'

import { CAMINOS, SECTION_IDS } from '@/lib/site'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function DosCaminos() {
  return (
    <section id={SECTION_IDS.caminos} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Elige tu camino</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-10 max-w-xl">
          ¿Cuánto necesitas para empezar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAMINOS.map((camino) => (
            <button
              key={camino.id}
              type="button"
              onClick={() => scrollTo(camino.anchor)}
              className="group text-left rounded-3xl p-6 md:p-8 card-base border-2 border-transparent hover:border-primary/50 hover:shadow-[0_0_40px_rgba(131,37,253,0.12)] transition-all duration-300"
            >
              <span className="text-3xl mb-4 block" aria-hidden>
                {camino.icon}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                {camino.id === 'rapido' ? 'Empezar rápido' : 'Crecer en serio'}
              </p>
              <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-primary transition-colors">
                {camino.title}
              </h3>
              <p className="text-sm text-muted-light leading-relaxed mb-5">{camino.description}</p>
              <span className="text-sm font-semibold text-primary group-hover:underline">
                {camino.cta}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

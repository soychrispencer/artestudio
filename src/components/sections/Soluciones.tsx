import { SOLUCIONES, SECTION_IDS } from '@/lib/site'

export function Soluciones() {
  return (
    <section
      id={SECTION_IDS.soluciones}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">{SOLUCIONES.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)] mb-4">
            Todo conectado en un{' '}
            <span className="font-display text-primary">solo sistema</span>
          </h2>
          <p className="text-muted leading-relaxed">{SOLUCIONES.subtitle}</p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-12">
          {SOLUCIONES.items.map((item, idx) => (
            <li key={item.title} className="border-t-2 border-[var(--ink)] pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-2">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="hazlo max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary mb-3">
            La diferencia
          </p>
          <p className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
            No son servicios sueltos.{' '}
            <span className="font-display text-primary text-[1.05em]">
              Son piezas de un sistema.
            </span>
          </p>
          <p className="mt-3 text-muted leading-relaxed max-w-xl">
            Cada pieza se diseña para trabajar con las demás: captación, conversión, operación y
            medición en un solo flujo.
          </p>
        </div>
      </div>
    </section>
  )
}

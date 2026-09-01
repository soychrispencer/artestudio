import { PROBLEMAS, SOLUCION, SECTION_IDS } from '@/lib/site'

export function Problemas() {
  return (
    <section
      id={SECTION_IDS.problemas}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Diagnóstico rápido</p>
        <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)] mb-4 max-w-2xl">
          {PROBLEMAS.title}
        </h2>
        <p className="text-muted leading-relaxed max-w-xl mb-10">
          Si esto te suena, no necesitas más herramientas sueltas: necesitas un sistema.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          <div className="compare compare-muted">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-4">
              Improvisar
            </p>
            <ul className="space-y-3">
              {PROBLEMAS.items.map((item) => (
                <li key={item} className="text-[0.95rem] leading-relaxed text-muted-light pl-4 relative">
                  <span className="absolute left-0 opacity-50">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="compare compare-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-2)] mb-4">
              Construir
            </p>
            <ul className="space-y-3 text-[0.95rem] leading-relaxed on-ink-strong">
              <li className="pl-4 relative">
                <span className="absolute left-0 opacity-70">–</span>
                Publicidad que alimenta un sistema, no una urgencia.
              </li>
              <li className="pl-4 relative">
                <span className="absolute left-0 opacity-70">–</span>
                Web y canales que convierten contacto en proceso.
              </li>
              <li className="pl-4 relative">
                <span className="absolute left-0 opacity-70">–</span>
                Operación medible, conectada y menos manual.
              </li>
            </ul>
          </div>
        </div>

        <div className="hazlo max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary mb-3">En la práctica</p>
          <p className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
            {PROBLEMAS.closing}{' '}
            <span className="font-display text-primary text-[1.05em]">{PROBLEMAS.closingAccent}</span>
          </p>
          <p className="mt-3 text-muted leading-relaxed max-w-xl">
            {SOLUCION.text}
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { SECTION_IDS } from '@/lib/site'

export function HomePuertas() {
  return (
    <section
      id={SECTION_IDS.puertas}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Siguiente paso</p>
        <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)] mb-10 max-w-2xl">
          ¿Cómo quieres{' '}
          <span className="font-display text-primary">continuar</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/servicios"
            className="card-base rounded-xl p-7 hover:border-[var(--ink)] transition-colors group"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">
              Ya sé qué necesito
            </p>
            <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)] group-hover:text-primary transition-colors">
              Ver servicios
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Web, contenido, ads y packs con precio. Compra online o cotiza lo a medida.
            </p>
            <p className="mt-5 text-sm font-semibold text-[var(--text)]">Ir a servicios →</p>
          </Link>

          <a
            href={`#${SECTION_IDS.contacto}`}
            className="card-base rounded-xl p-7 hover:border-[var(--ink)] transition-colors group"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">
              Prefiero conversar
            </p>
            <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)] group-hover:text-primary transition-colors">
              Hablar con alguien
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Cuéntanos tu negocio y te orientamos al siguiente paso sin compromiso.
            </p>
            <p className="mt-5 text-sm font-semibold text-[var(--text)]">Ir a contacto →</p>
          </a>
        </div>
      </div>
    </section>
  )
}

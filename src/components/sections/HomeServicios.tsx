import Link from 'next/link'
import { SERVICE_CATEGORIES } from '@/content/services-catalog'
import { SECTION_IDS } from '@/lib/site'

export function HomeServicios() {
  return (
    <section
      id={SECTION_IDS.servicios}
      className="scroll-mt-20 py-16 md:py-24 bg-[var(--bg)] border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="section-label">Catálogo</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)] mb-4">
            Elige una categoría
            <br />
            <span className="font-display text-primary">y entra</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Cuatro puertas. Sin mezclar metodologías: ves precios, compras online o cotizas lo a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group rounded-xl border border-[var(--border)] bg-surface p-6 md:p-7 hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {String(idx + 1).padStart(2, '0')} · {cat.label}
                </p>
                <span className="text-sm font-semibold text-muted group-hover:text-[var(--text)] transition-colors">
                  →
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{cat.subtitle}</p>
              <p className="mt-5 text-sm font-semibold text-[var(--text)]">
                Ver {cat.label.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          ¿Quieres ver todo junto?{' '}
          <Link href="/servicios" className="font-semibold text-[var(--text)] hover:text-primary">
            Ir al hub de servicios
          </Link>
        </p>
      </div>
    </section>
  )
}

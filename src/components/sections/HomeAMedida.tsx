import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { WA_LINKS } from '@/lib/site'

export function HomeAMedida() {
  return (
    <section className="py-16 md:py-20 bg-surface border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <p className="section-label">Proyectos a medida</p>
            <h2 className="display-xl text-3xl md:text-4xl text-[var(--text)] mb-4">
              Si tu negocio necesita un{' '}
              <span className="font-display text-primary">sistema completo</span>
            </h2>
            <p className="text-muted leading-relaxed max-w-xl">
              Diagnóstico, arquitectura e implementación conectada (web, ads, medición,
              automatizaciones). No es un pack de catálogo: es un proyecto.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Button href={WA_LINKS.reunion} external className="px-6 py-3.5 justify-center">
              Agendar reunión
            </Button>
            <Link
              href="/servicios/crecimiento"
              className="btn-outline px-6 py-3.5 text-sm font-semibold justify-center"
            >
              Ver crecimiento
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

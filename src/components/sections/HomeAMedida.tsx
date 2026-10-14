import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { WA_LINKS } from '@/lib/site'

export function HomeAMedida() {
  return (
    <section className="py-12 md:py-16 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-2">
              ¿Necesitas un sistema completo?
            </h2>
            <p className="text-muted leading-relaxed">
              Diagnóstico, arquitectura e implementación conectada. No es un pack: es un proyecto a
              medida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href={WA_LINKS.reunion} external className="px-5 py-3 justify-center">
              Agendar reunión
            </Button>
            <Link
              href="/servicios/sistema-crecimiento"
              className="btn-outline px-5 py-3 text-sm font-semibold justify-center"
            >
              Sistema de Crecimiento
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import { PLANS, WA_LINKS } from '@/lib/site'
import { PlanCard } from '@/components/ui/PlanCard'

export function Planes() {
  return (
    <section id="planes" className="scroll-mt-20 py-16 md:py-24 bg-surface border-y border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Precios claros</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
          Planes mensuales
        </h2>
        <p className="text-muted-light max-w-xl mb-12">
          Setup único para arrancar + mensualidad fija. Elige el nivel según tu etapa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch mb-10">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="text-center text-xs text-muted mb-4">
          💳 Precios en CLP · Pago por transferencia o tarjeta · Cancelas con 30 días de aviso · Sin letra chica
        </p>
        <p className="text-center text-sm text-muted-light">
          ¿Solo un proyecto puntual?{' '}
          <a
            href={WA_LINKS.puntual}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Cotiza aquí →
          </a>
        </p>
      </div>
    </section>
  )
}

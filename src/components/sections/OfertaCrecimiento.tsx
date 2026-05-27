import { Check, Plus } from 'tabler-icons-react'
import { Button } from '@/components/ui/Button'
import { PLAN_CRECIMIENTO, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function OfertaCrecimiento() {
  return (
    <section
      id={SECTION_IDS.planCrecimiento}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Crecer en serio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">Plan Crecimiento</h2>
          <p className="text-lg text-muted-light mb-6">
            Tu equipo digital trabajando todos los meses.
          </p>

          <p className="text-muted-light leading-relaxed mb-8">{PLAN_CRECIMIENTO.framing}</p>

          <div className="rounded-2xl border border-[var(--border)] bg-card p-6 md:p-8 mb-8">
            <p className="text-4xl md:text-5xl font-bold text-[var(--text)]">
              {PLAN_CRECIMIENTO.setup}
              <span className="block text-base font-normal text-muted mt-1">
                {PLAN_CRECIMIENTO.setupLabel}
              </span>
            </p>
            <p className="text-2xl font-bold text-primary mt-4">
              + {PLAN_CRECIMIENTO.monthly}
              <span className="text-base font-normal text-muted"> {PLAN_CRECIMIENTO.monthlyNote}</span>
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {PLAN_CRECIMIENTO.includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-muted-light">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-dashed border-primary/40 bg-card/50 p-5 mb-8">
            <div className="flex items-start gap-2 mb-2">
              <Plus className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-[var(--text)]">
                {PLAN_CRECIMIENTO.addon.title}{' '}
                <span className="text-primary font-normal">→ {PLAN_CRECIMIENTO.addon.price}</span>
              </p>
            </div>
            <p className="text-sm text-muted-light pl-6">{PLAN_CRECIMIENTO.addon.description}</p>
            <a
              href={WA_LINKS.ia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-primary font-semibold mt-3 pl-6 hover:underline"
            >
              Consultar agente IA →
            </a>
          </div>

          <Button href={WA_LINKS.crecimiento} external className="w-full sm:w-auto">
            {PLAN_CRECIMIENTO.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

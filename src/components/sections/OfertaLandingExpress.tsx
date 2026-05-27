import { Check } from 'tabler-icons-react'
import { Button } from '@/components/ui/Button'
import { LANDING_EXPRESS, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function OfertaLandingExpress() {
  return (
    <section
      id={SECTION_IDS.landingExpress}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Empezar rápido</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
            Landing Express IA
          </h2>
          <p className="text-lg text-muted-light mb-8">Tu web lista en 48 horas hábiles.</p>

          <div className="rounded-2xl border border-[var(--border)] bg-card p-6 md:p-8 mb-8">
            <p className="text-4xl md:text-5xl font-bold text-[var(--text)]">
              {LANDING_EXPRESS.setupToday}
              <span className="block text-base font-normal text-muted mt-1">
                {LANDING_EXPRESS.setupLabel}
              </span>
            </p>
            <p className="text-2xl font-bold text-primary mt-4">
              + {LANDING_EXPRESS.monthly}
              <span className="text-base font-normal text-muted">/mes después (mínimo 3 meses)</span>
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {LANDING_EXPRESS.includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-muted-light">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-primary/30 bg-accent-dim p-5 mb-8">
            <p className="text-sm text-[var(--text)] leading-relaxed">{LANDING_EXPRESS.guarantee}</p>
          </div>

          <Button href={WA_LINKS.landing} external className="w-full sm:w-auto mb-4">
            {LANDING_EXPRESS.cta}
          </Button>

          <p className="text-xs text-muted">* {LANDING_EXPRESS.permanencia}</p>
        </div>
      </div>
    </section>
  )
}

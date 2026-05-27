import { Check } from 'tabler-icons-react'
import { Button } from '@/components/ui/Button'
import { HERO_TRUST, SECTION_IDS } from '@/lib/site'

export function Hero() {
  return (
    <section id={SECTION_IDS.inicio} className="relative scroll-mt-20 min-h-[88vh] flex items-center glow-accent overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          <h1 className="fade-up fade-up-d1 text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.08] text-[var(--text)] mb-6">
            Tu negocio merece clientes.
            <br />
            <span className="text-gradient-primary">No solo una web bonita.</span>
          </h1>

          <p className="fade-up fade-up-d2 text-lg text-muted-light leading-relaxed mb-10 max-w-2xl">
            Diseñamos tu presencia digital para que la gente te encuentre, te entienda y te contacte.
            Sin tecnicismos, sin sorpresas.
          </p>

          <div className="fade-up fade-up-d3 mb-10">
            <Button href={`#${SECTION_IDS.caminos}`} className="text-base px-8 py-3.5">
              Ver cómo funciona
            </Button>
          </div>

          <ul className="fade-up fade-up-d4 space-y-2.5 border-t border-[var(--border)] pt-8">
            {HERO_TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-light">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { Check } from 'tabler-icons-react'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS } from '@/lib/site'

export function Hero() {
  return (
    <section id={SECTION_IDS.inicio} className="relative scroll-mt-20 min-h-[88vh] flex items-center glow-accent overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          <h1 className="fade-up fade-up-d1 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-[var(--text)] mb-4">
            {HERO.title}
          </h1>
          <p className="fade-up fade-up-d2 text-2xl md:text-3xl font-semibold text-gradient-primary mb-6">
            {HERO.highlight}
          </p>

          <p className="fade-up fade-up-d3 text-lg text-muted-light leading-relaxed mb-10 max-w-2xl">
            {HERO.subtitle}
          </p>

          <div className="fade-up fade-up-d4 mb-10">
            <Button href={`#${SECTION_IDS.planes}`} className="text-base px-8 py-3.5">
              {HERO.cta}
            </Button>
          </div>

          <ul className="fade-up fade-up-d5 space-y-2.5 border-t border-[var(--border)] pt-8">
            {HERO.trust.map((item) => (
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

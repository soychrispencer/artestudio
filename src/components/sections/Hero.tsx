import Image from 'next/image'
import { Check } from 'tabler-icons-react'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS } from '@/lib/site'

export function Hero() {
  return (
    <section id={SECTION_IDS.inicio} className="relative scroll-mt-20 min-h-[90vh] flex items-center glow-accent overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
          <p className="fade-up fade-up-d1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-accent)] bg-accent-dim text-xs font-medium text-primary mb-6">
            {HERO.badge}
          </p>

          <h1 className="fade-up fade-up-d2 text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-bold leading-[1.08] text-[var(--text)] mb-5">
            {HERO.title}
          </h1>

          <p className="fade-up fade-up-d3 text-lg text-muted-light leading-relaxed mb-8 max-w-xl">
            <span className="font-semibold text-gradient-primary">{HERO.titleAccent}</span>{' '}
            {HERO.subtitle}
          </p>

          <ul className="fade-up fade-up-d4 flex flex-col sm:flex-row gap-2.5 mb-9">
            {HERO.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-light">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="fade-up fade-up-d5 flex flex-col sm:flex-row gap-3">
            <Button href={`#${SECTION_IDS.planes}`} className="text-sm sm:text-base px-6 py-3.5 justify-center whitespace-nowrap">
              {HERO.cta}
            </Button>
            <Button
              href={`#${SECTION_IDS.serviciosIndividuales}`}
              variant="outline"
              className="text-sm sm:text-base px-6 py-3.5 justify-center whitespace-nowrap"
            >
              {HERO.ctaSecondary}
            </Button>
          </div>
          </div>

          <div className="fade-up fade-up-d4 relative">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/hero-clientes-online.png"
                alt="Emprendedora revisando su presencia digital y consultas online"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,15,15,0.1)] via-transparent to-[rgba(131,37,253,0.08)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

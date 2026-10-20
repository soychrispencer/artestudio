'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 420], [0, reduce ? 0 : 36])

  return (
    <section id={SECTION_IDS.inicio} className="relative overflow-hidden bg-[var(--bg)] pt-16">
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.85fr)] lg:gap-14 lg:min-h-[calc(100svh-4rem)] lg:items-center">
        {/* Left Column: Typographic Value Proposition */}
        <div className="py-16 md:py-24 lg:py-20">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {HERO.badge}
          </p>
          <h1 className="max-w-[11ch] text-[clamp(2.8rem,6vw,4.75rem)] font-extrabold tracking-[-0.055em] leading-[0.94] text-[var(--text)] mb-6">
            <span className="block font-display text-[1.08em] text-[var(--text)] italic">
              {HERO.titleAccent}
            </span>
            {HERO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-8">
            {HERO.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/servicios" className="px-6 py-3.5">
              {HERO.cta}
            </Button>
            <Button href={WA_LINKS.reunion} variant="outline" external className="px-6 py-3.5">
              {HERO.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Right Column: Framed Studio Showcase (Opción B) */}
        <div className="relative h-[25rem] mb-12 sm:h-[31rem] lg:h-[min(72vh,42rem)] lg:mb-0">
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--field)] shadow-xl shadow-black/5 dark:shadow-black/35 group">
            <motion.div style={{ y: imageY }} className="absolute inset-0 -top-8 -bottom-8">
              <Image
                src={HERO.image}
                alt={HERO.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[72%_center] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </motion.div>

            {/* Subtle bottom gradient to ground the floating badge */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

            {/* Floating studio badge inside the frame */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto p-3.5 sm:px-4 sm:py-3 rounded-xl bg-white/95 dark:bg-[#141414]/90 backdrop-blur-md border border-[var(--border)] shadow-lg flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                Sistemas aplicados a un negocio real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, reduce ? 0 : 50])

  return (
    <section
      id={SECTION_IDS.inicio}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--bg)]"
    >
      {/* Full-bleed background image with directional gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-12 -bottom-12">
          <Image
            src={HERO.image}
            alt={HERO.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] opacity-45 dark:opacity-35"
          />
        </motion.div>

        {/* Directional gradient mask to guarantee razor-sharp text readability in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/95 to-transparent md:via-[var(--bg)]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/50" />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {HERO.badge}
          </p>
          <h1 className="max-w-[12ch] text-[clamp(2.8rem,6vw,5rem)] font-extrabold tracking-[-0.055em] leading-[0.94] text-[var(--text)] mb-6">
            <span className="block font-display text-[1.08em] text-[var(--text)] italic">
              {HERO.titleAccent}
            </span>
            {HERO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
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
      </div>
    </section>
  )
}

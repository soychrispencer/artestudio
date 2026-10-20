'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, reduce ? 0 : 36])

  return (
    <section
      id={SECTION_IDS.inicio}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--bg)]"
    >
      {/* Split-Bleed Image: anchors to the right, 100% crisp & unwashed */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[56%] xl:w-[52%] pointer-events-none overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-10 -bottom-10">
          <Image
            src={HERO.image}
            alt={HERO.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover object-[70%_center] opacity-90 lg:opacity-100"
          />
        </motion.div>

        {/* Horizontal transition gradient: only softens the left seam into the canvas */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 lg:w-60 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-transparent" />

        {/* Mobile vertical gradient: smoothly fades image behind text on small screens */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-transparent via-[var(--bg)]/85 to-[var(--bg)]" />

        {/* Top gradient for perfect navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[var(--bg)]/80 via-[var(--bg)]/30 to-transparent" />

        {/* Bottom edge gradient connecting to stats section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      {/* Hero Typography & CTAs (Left-aligned over solid pure canvas) */}
      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-xl xl:max-w-2xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {HERO.badge}
          </p>
          <h1 className="max-w-[12ch] text-[clamp(2.8rem,6vw,4.85rem)] font-extrabold tracking-[-0.055em] leading-[0.94] text-[var(--text)] mb-6">
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
      </div>
    </section>
  )
}

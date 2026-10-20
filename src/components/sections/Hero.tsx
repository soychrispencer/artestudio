'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 50])

  return (
    <section
      id={SECTION_IDS.inicio}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#080808] text-white selection:bg-white selection:text-black"
    >
      {/* Background Image: Full-bleed cinematic backdrop with unwashed contrast (Opción C) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-12 -bottom-12">
          <Image
            src={HERO.image}
            alt={HERO.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[68%_center] opacity-50 sm:opacity-60 lg:opacity-70"
          />
        </motion.div>

        {/* Left-to-right horizontal dark gradient: gives pristine contrast to text */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/92 via-48% to-transparent" />

        {/* Mobile / Tablet vertical dark gradient */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#080808]/95 via-[#080808]/80 via-50% to-[#080808]" />

        {/* Top edge gradient: ensures navbar links and logo always have supreme contrast */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#080808] via-[#080808]/60 to-transparent" />

        {/* Bottom edge gradient: smooth architectural grounding into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />

        {/* Subtle cinematic radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_25%,#080808_90%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-300">
              {HERO.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-[13ch] text-[clamp(2.9rem,6.2vw,5.1rem)] font-extrabold tracking-[-0.055em] leading-[0.93] text-white mb-6">
            <span className="block font-display text-[1.08em] text-neutral-200 italic font-normal">
              {HERO.titleAccent}
            </span>
            {HERO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-xl text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-8">
            {HERO.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={WA_LINKS.reunion}
              external
              variant="primary"
              className="!bg-white !text-neutral-950 !border-white hover:!bg-neutral-200 shadow-xl shadow-black/40"
            >
              {HERO.ctaSecondary}
            </Button>
            <Button
              href={`/#${SECTION_IDS.servicios}`}
              variant="outline"
              className="!border-white/20 !text-white hover:!bg-white/10 hover:!border-white/40 !bg-transparent backdrop-blur-sm"
            >
              {HERO.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Right Studio Metadata Tag (Desktop) */}
      <div className="hidden lg:flex absolute bottom-8 right-8 z-10 items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[11px] tracking-wider uppercase font-medium text-neutral-400 pointer-events-none">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Sistemas aplicados a un negocio real
      </div>
    </section>
  )
}

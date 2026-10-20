'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HERO, SECTION_IDS, WA_LINKS } from '@/lib/site'
import { StudioSculpture } from '@/components/sculpture/StudioSculpture'

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 420], [0, reduce ? 0 : 36])
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d')

  return (
    <section id={SECTION_IDS.inicio} className="relative overflow-hidden bg-[var(--bg)] pt-16">
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.8fr)] lg:gap-16 lg:min-h-[calc(100svh-4rem)] lg:items-center">
        <div className="py-16 md:py-24 lg:py-20">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {HERO.badge}
          </p>
          <h1 className="max-w-[10ch] text-[clamp(2.8rem,6vw,4.75rem)] font-extrabold tracking-[-0.055em] leading-[0.94] text-[var(--text)] mb-6">
            <span className="block font-display text-[1.08em] text-[var(--text)] italic">{HERO.titleAccent}</span>
            {HERO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-md mb-8">{HERO.subtitle}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/servicios" className="px-6 py-3.5">
              {HERO.cta}
            </Button>
            <Button href={WA_LINKS.reunion} variant="outline" external className="px-6 py-3.5">
              {HERO.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="relative h-[26rem] mb-12 sm:h-[32rem] lg:h-[min(72vh,44rem)] lg:mb-0">
          {/* View mode toggle switch */}
          <div className="absolute top-4 right-4 z-20 flex items-center p-1 rounded-full bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold transition-all ${
                viewMode === '3d'
                  ? 'bg-[var(--ink)] text-[var(--paper)] shadow-sm'
                  : 'text-muted hover:text-[var(--text)]'
              }`}
            >
              3D Core
            </button>
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold transition-all ${
                viewMode === 'photo'
                  ? 'bg-[var(--ink)] text-[var(--paper)] shadow-sm'
                  : 'text-muted hover:text-[var(--text)]'
              }`}
            >
              Foto
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === '3d' ? (
              <motion.div
                key="3d"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <StudioSculpture />
              </motion.div>
            ) : (
              <motion.div
                key="photo"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative overflow-hidden rounded-2xl bg-[var(--field)] border border-[var(--border)]"
              >
                <motion.div style={{ y: imageY }} className="absolute inset-0 -top-6 -bottom-6">
                  <Image
                    src={HERO.image}
                    alt={HERO.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover object-[72%_center]"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

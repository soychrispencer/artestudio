'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { METODOLOGIA, SECTION_IDS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function Metodologia() {
  const [active, setActive] = useState(0)

  return (
    <section
      id={SECTION_IDS.metodologia}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-10 md:mb-12">
          <p className="section-label">{METODOLOGIA.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
            De la idea al{' '}
            <span className="font-display text-[var(--accent)]">{METODOLOGIA.titleAccent}</span>.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{METODOLOGIA.note}</p>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
          {METODOLOGIA.steps.map((step, idx) => {
            const selected = idx === active
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)}
                  className={`w-full text-left rounded-xl border p-4 transition-colors ${
                    selected
                      ? 'border-[var(--accent)] bg-[var(--accent-dim)]'
                      : 'border-[var(--border)] bg-transparent hover:border-[var(--accent)]'
                  }`}
                >
                  <p
                    className={`giant-num mb-2 !text-4xl ${selected ? '!text-[var(--accent)]' : ''}`}
                    aria-hidden
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-base font-bold text-[var(--text)] mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </button>
              </li>
            )
          })}
        </ol>

        <motion.div
          key={active}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          className="relative aspect-[21/9] md:aspect-[2.8/1] overflow-hidden rounded-2xl border border-[var(--border)] bg-card"
        >
          <Image
            src={METODOLOGIA.image}
            alt="De la idea al sistema: cómo trabaja Artestudio"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

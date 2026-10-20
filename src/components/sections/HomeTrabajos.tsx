'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandBehance, Check, X, ArrowUpRight, Bolt } from 'tabler-icons-react'
import { CONTACT, HOME_WORKS, HOME_CASES, SECTION_IDS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function HomeTrabajos() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0)
  const activeCase = HOME_CASES[activeCaseIndex] || HOME_CASES[0]

  return (
    <section
      id={SECTION_IDS.trabajo}
      className="scroll-mt-20 py-16 md:py-24 bg-surface rounded-t-[2.25rem] relative z-[1] -mt-4 shadow-[0_-12px_40px_rgba(17,17,17,0.04)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-16 lg:items-end mb-10 md:mb-14">
          <div>
            <p className="section-label">{HOME_WORKS.label}</p>
            <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
              {HOME_WORKS.title}
            </h2>
          </div>
          <p className="text-muted text-base leading-relaxed lg:pb-1">
            {HOME_WORKS.intro}
          </p>
        </Reveal>

        {/* Case Studies Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {HOME_CASES.map((item, index) => {
            const isSelected = index === activeCaseIndex
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCaseIndex(index)}
                className={`shrink-0 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--ink)] text-[var(--paper)] shadow-sm'
                    : 'bg-card text-muted hover:text-[var(--text)] border border-[var(--border)]'
                }`}
              >
                <span>{item.client}</span>
              </button>
            )
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="mb-16 md:mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-10 items-center rounded-[2rem] border border-[var(--border)] bg-card p-6 md:p-10 shadow-sm"
            >
              {/* Left Column: Client Info & Antes / Sistema / Resultado */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {activeCase.category}
                  </span>
                  {activeCase.url && (
                    <a
                      href={activeCase.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[var(--text)] hover:underline opacity-80 hover:opacity-100"
                    >
                      {activeCase.urlLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl md:text-4xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-6">
                  {activeCase.client}
                </h3>

                {/* 3 Steps: Antes, Sistema, Resultado */}
                <div className="space-y-4 mb-6">
                  {/* Antes */}
                  <div className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1.5">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>El problema habitual (Antes)</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text)]">
                      {activeCase.antes}
                    </p>
                  </div>

                  {/* Sistema Artestudio */}
                  <div className="p-4 rounded-xl bg-field border border-[var(--border)]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-1.5">
                      <Bolt className="w-3.5 h-3.5 text-[var(--ink)] shrink-0" />
                      <span>El sistema implementado (Artestudio)</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text)]">
                      {activeCase.sistema}
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Qué permite el sistema (Impacto)</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-[var(--text)]">
                      {activeCase.resultado}
                    </p>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeCase.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-field text-[var(--text)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="relative group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-field aspect-[16/11] lg:aspect-[4/3] flex items-center justify-center">
                <Image
                  src={activeCase.image}
                  alt={activeCase.client}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 dark:bg-[#141414]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/10 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                      {activeCase.metric}
                    </p>
                    <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                      {activeCase.metricLabel}
                    </p>
                  </div>
                  {activeCase.url && (
                    <a
                      href={activeCase.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-black text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      Ver sitio
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Creative Portfolio & Behance Showcase */}
        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {HOME_WORKS.featuredTag}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text)]">
                {HOME_WORKS.featuredTitle}
              </h3>
            </div>
            <a
              href={CONTACT.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold w-fit"
            >
              <BrandBehance className="w-4 h-4" />
              {HOME_WORKS.moreLabel}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {HOME_WORKS.items.map((work, index) => (
              <motion.a
                key={work.title}
                href={CONTACT.behance}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block overflow-hidden rounded-2xl border border-[var(--border)] bg-card aspect-[4/3]"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs font-semibold text-white drop-shadow-sm">
                    {work.title}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

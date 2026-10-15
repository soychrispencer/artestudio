'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandWhatsapp, ArrowRight, AlertCircle, Check, Bolt } from 'tabler-icons-react'
import { HOME_DIAGNOSTICO, SECTION_IDS, waLink } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function HomeDiagnostico() {
  const [activeId, setActiveId] = useState<string>(HOME_DIAGNOSTICO.stages[1].id) // Default: Fundamentos

  const current = HOME_DIAGNOSTICO.stages.find((s) => s.id === activeId) || HOME_DIAGNOSTICO.stages[0]

  return (
    <section
      id={SECTION_IDS.diagnostico}
      className="scroll-mt-20 py-20 md:py-28 bg-[var(--surface)] border-t border-[var(--border)] relative z-[1]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-12 md:mb-16">
          <p className="section-label">{HOME_DIAGNOSTICO.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
            {HOME_DIAGNOSTICO.title}{' '}
            <span className="font-serif italic font-normal text-[var(--ink)]">
              {HOME_DIAGNOSTICO.titleAccent}
            </span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            {HOME_DIAGNOSTICO.intro}
          </p>
        </Reveal>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {HOME_DIAGNOSTICO.stages.map((stage) => {
            const isSelected = stage.id === current.id
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                className={`relative p-4 md:p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)] shadow-md'
                    : 'bg-card text-muted hover:text-[var(--text)] border-[var(--border)] hover:border-[var(--line-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${
                      isSelected ? 'text-[var(--paper)] opacity-80' : 'text-muted'
                    }`}
                  >
                    Etapa {stage.letter}
                  </span>
                  <span
                    className={`text-xs font-mono tabular-nums ${
                      isSelected ? 'text-[var(--paper)] opacity-70' : 'text-muted'
                    }`}
                  >
                    {stage.number}
                  </span>
                </div>
                <p
                  className={`text-base md:text-lg font-bold leading-tight ${
                    isSelected ? 'text-[var(--paper)]' : 'text-[var(--text)]'
                  }`}
                >
                  {stage.title}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active Stage Diagnostic Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-[var(--border)] bg-card p-6 md:p-10 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-field text-[var(--text)] border border-[var(--border)]">
                <Bolt className="w-3.5 h-3.5" />
                Diagnóstico de situación
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted">
                Etapa {current.letter} · {current.title}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text)] mb-8">
              «{current.headline}»
            </h3>

            {/* Two comparison blocks: Síntoma vs Solución */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Síntoma actual */}
              <div className="p-6 rounded-2xl bg-field border border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>El síntoma habitual</span>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[var(--text)]">
                  {current.sintoma}
                </p>
              </div>

              {/* Solución a construir */}
              <div className="p-6 rounded-2xl bg-surface border border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-3">
                  <Check className="w-4 h-4 text-[var(--ink)] shrink-0" />
                  <span>La pieza a construir</span>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[var(--text)]">
                  {current.queConstruir}
                </p>
              </div>
            </div>

            {/* Card CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(current.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl"
                >
                  <BrandWhatsapp className="w-4 h-4 text-[#25D366]" />
                  Hablar con Artestudio sobre mi etapa
                </a>
                <Link
                  href={current.solucionLink}
                  className="btn-outline inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl"
                >
                  {current.solucionLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                href={HOME_DIAGNOSTICO.fullQuizHref}
                className="text-xs font-semibold text-muted hover:text-[var(--text)] inline-flex items-center gap-1.5 transition-colors text-center sm:text-right"
              >
                {HOME_DIAGNOSTICO.fullQuizText}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

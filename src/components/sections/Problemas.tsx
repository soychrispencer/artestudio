'use client'

import { PROBLEMAS, SECTION_IDS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'
import { Check, X } from 'tabler-icons-react'

export function Problemas() {
  return (
    <section
      id={SECTION_IDS.problemas}
      className="scroll-mt-20 py-16 md:py-24 bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="section-label">{PROBLEMAS.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
            {PROBLEMAS.title}{' '}
            <span className="font-display italic text-[var(--text)]">{PROBLEMAS.titleAccent}</span>.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{PROBLEMAS.intro}</p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] grid md:grid-cols-2">
          {/* Lado izquierdo: Improvisar */}
          <div className="p-7 md:p-10 bg-[var(--compare-left-bg)] text-[var(--compare-left-text)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {PROBLEMAS.leftLabel}
                </p>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-[var(--border)] text-muted">
                  Lo habitual
                </span>
              </div>
              <ul className="space-y-4">
                {PROBLEMAS.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                    <X className="mt-1 h-4 w-4 shrink-0 text-muted opacity-60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 pt-6 border-t border-[var(--border)] text-xs text-muted">
              Resultado: Esfuerzo disperso y resultados impredecibles.
            </p>
          </div>

          {/* Lado derecho: Construir */}
          <div className="p-7 md:p-10 bg-[var(--compare-right-bg)] text-[var(--compare-right-text)] flex flex-col justify-between border-t md:border-t-0 md:border-l border-[var(--compare-right-border)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--compare-right-text)] opacity-75">
                  {PROBLEMAS.rightLabel}
                </p>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[var(--compare-right-text)]">
                  Artestudio
                </span>
              </div>
              <ul className="space-y-4">
                {PROBLEMAS.construir.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--compare-right-dot)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 pt-6 border-t border-white/15 text-xs text-[var(--compare-right-text)] opacity-75">
              Resultado: Un proceso repetible y conectado que escala tu empresa.
            </p>
          </div>
        </Reveal>

        <Reveal className="border-l-4 border-[var(--ink)] bg-surface border border-[var(--border)] px-6 py-5 rounded-r-2xl max-w-3xl mx-auto mt-8">
          <p className="text-lg md:text-xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
            {PROBLEMAS.closing}{' '}
            <span className="font-display italic text-[var(--text)] text-[1.1em]">
              {PROBLEMAS.closingAccent}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

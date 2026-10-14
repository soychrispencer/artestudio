'use client'

import { HOME_PRUEBA, WA_LINKS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function HomePrueba() {
  return (
    <section className="pb-16 md:pb-24 bg-[var(--bg)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 rounded-[1.75rem] bg-[var(--accent)] text-white p-6 md:p-8 flex flex-col justify-between min-h-[16rem]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 mb-3">
                {HOME_PRUEBA.ctaNote}
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-[-0.04em] leading-tight">
                {HOME_PRUEBA.ctaTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{HOME_PRUEBA.ctaText}</p>
            </div>
            <a
              href={WA_LINKS.reunion}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-[10px] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
            >
              {HOME_PRUEBA.cta}
            </a>
          </div>

          <div className="md:col-span-3 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 flex flex-col justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              {HOME_PRUEBA.statNote}
            </p>
            <div className="mt-6">
              <p className="text-5xl md:text-6xl font-extrabold tracking-[-0.06em] leading-none text-[var(--text)]">
                {HOME_PRUEBA.statValue}
              </p>
              <p className="mt-2 text-sm text-muted">{HOME_PRUEBA.statLabel}</p>
            </div>
          </div>

          <div className="md:col-span-4 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] mb-3">
              {HOME_PRUEBA.processLabel}
            </p>
            <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
              {HOME_PRUEBA.processTitle}
            </h3>
            <ol className="mt-4 space-y-1.5 text-sm text-muted">
              {HOME_PRUEBA.processSteps.map((step, idx) => (
                <li key={step}>
                  <span className="font-semibold text-[var(--text)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>{' '}
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-auto pt-5 text-sm font-semibold text-[var(--accent)]">
              {HOME_PRUEBA.processNote}
            </p>
          </div>

          <div className="md:col-span-12 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] shrink-0">
              {HOME_PRUEBA.industriesLabel}
            </p>
            <ul className="flex flex-wrap gap-2">
              {HOME_PRUEBA.industries.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--text)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

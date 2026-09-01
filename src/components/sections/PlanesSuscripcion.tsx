'use client'

import type { ReactNode } from 'react'
import { Check } from 'tabler-icons-react'
import { BrandWhatsapp } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import {
  GROWTH_PLANS,
  PLANES_INTRO,
  PRICING_UI,
  SECTION_IDS,
  WA_LINKS,
} from '@/lib/site'
import { SUBSCRIPTION_PLANS, formatCLP } from '@/lib/subscriptions'

function PlanCard({
  name,
  tagline,
  priceMain,
  priceSub,
  includesLabel,
  includes,
  featured,
  badge,
  footer,
}: {
  name: string
  tagline: string
  priceMain: string
  priceSub: string
  includesLabel: string
  includes: readonly string[]
  featured?: boolean
  badge?: string
  footer: ReactNode
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-xl p-6 md:p-7 ${
        featured
          ? 'compare-ink border border-transparent'
          : 'card-base'
      }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-6 px-3 py-1 rounded-[10px] text-xs font-bold uppercase tracking-wide whitespace-nowrap ${
            featured
              ? 'bg-[var(--paper)] text-[var(--ink)]'
              : 'bg-[var(--ink)] text-white'
          }`}
        >
          {badge}
        </span>
      )}

      <div className="mb-5 min-h-[4.5rem]">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.14em] mb-2 ${
            featured ? 'text-[var(--accent-2)]' : 'text-primary'
          }`}
        >
          {name}
        </p>
        <p
          className={`font-medium leading-snug ${
            featured ? 'text-[var(--paper)]' : 'text-[var(--text)]'
          }`}
        >
          {tagline}
        </p>
      </div>

      <div
        className={`mb-5 min-h-[7rem] rounded-[10px] border p-4 flex flex-col justify-center ${
          featured
            ? 'border-white/15 bg-white/5'
            : 'border-[var(--border)] bg-[var(--bg)]'
        }`}
      >
        <p
          className={`text-xs uppercase tracking-wide mb-1 ${
            featured ? 'on-ink-faint' : 'text-muted'
          }`}
        >
          {PRICING_UI.setupLabel}
        </p>
        <p
          className={`text-3xl font-extrabold tracking-[-0.03em] leading-tight ${
            featured ? 'text-[var(--paper)]' : 'text-[var(--text)]'
          }`}
        >
          {priceMain}
        </p>
        <p
          className={`text-xs mt-2 ${
            featured ? 'on-ink-faint' : 'text-muted'
          }`}
        >
          {priceSub}
        </p>
      </div>

      <div className="mb-4 flex-grow">
        <p
          className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
            featured ? 'on-ink-faint' : 'text-muted'
          }`}
        >
          {includesLabel}
        </p>
        <ul className="space-y-2">
          {includes.map((item) => (
            <li
              key={item}
              className={`flex gap-2 text-sm ${
                featured ? 'on-ink-strong' : 'text-muted-light'
              }`}
            >
              <Check
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  featured ? 'text-[var(--accent-2)]' : 'text-primary'
                }`}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mt-auto pt-4 border-t ${
          featured ? 'border-white/15' : 'border-[var(--border)]'
        }`}
      >
        {footer}
      </div>
    </article>
  )
}

export function PlanesSuscripcion() {
  const landingPlan = SUBSCRIPTION_PLANS[0]

  return (
    <section
      id={SECTION_IDS.planes}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">{PLANES_INTRO.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)] mb-4">
            Elige cómo quieres{' '}
            <span className="font-display text-primary">empezar</span>
          </h2>
          <p className="text-muted leading-relaxed">{PLANES_INTRO.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {landingPlan && (
            <PlanCard
              name={landingPlan.name}
              tagline={landingPlan.tagline}
              priceMain={formatCLP(landingPlan.setup)}
              priceSub={`${PRICING_UI.monthlyLabel} ${formatCLP(landingPlan.monthly)}${PRICING_UI.monthlySuffix}`}
              includesLabel={PRICING_UI.includesLabel}
              includes={landingPlan.includes}
              footer={
                <SubscribeButton
                  planId={landingPlan.id}
                  title={`Plan ${landingPlan.name} — Artestudio`}
                  setup={landingPlan.setup}
                  monthly={landingPlan.monthly}
                  className="px-5 py-3 text-sm w-full justify-center"
                >
                  Quiero este plan
                </SubscribeButton>
              }
            />
          )}

          {GROWTH_PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              tagline={plan.tagline}
              priceMain={plan.priceMain}
              priceSub={plan.priceSub}
              includesLabel={plan.includesLabel}
              includes={plan.includes}
              featured={'featured' in plan ? plan.featured : false}
              badge={'badge' in plan ? plan.badge : undefined}
              footer={
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold w-full rounded-[10px] transition-colors ${
                    'featured' in plan && plan.featured
                      ? 'bg-[var(--paper)] text-[var(--ink)] hover:bg-white'
                      : 'btn-whatsapp'
                  }`}
                >
                  <BrandWhatsapp className="w-4 h-4" />
                  {plan.cta}
                </a>
              }
            />
          ))}
        </div>

        <div className="hazlo mt-12 max-w-2xl">
          <p className="text-sm text-muted leading-relaxed">{PRICING_UI.footnote}</p>
          <p className="mt-3 text-sm text-[var(--text)]">
            ¿Tienes dudas?{' '}
            <a
              href={WA_LINKS.asesoria}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Escríbenos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

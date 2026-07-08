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
      className={`relative flex h-full flex-col rounded-3xl p-6 md:p-7 card-base ${
        featured ? 'border-primary/50 ring-1 ring-primary/30 z-10' : ''
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="mb-5 min-h-[4.5rem]">
        <p className="text-sm font-semibold text-primary mb-1">{name}</p>
        <p className="text-[var(--text)] font-medium leading-snug">{tagline}</p>
      </div>

      <div className="mb-5 min-h-[7.5rem] rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4 flex flex-col justify-center">
        <p className="text-xs text-muted uppercase tracking-wide mb-1">{PRICING_UI.setupLabel}</p>
        <p className="text-3xl font-bold text-primary leading-tight">{priceMain}</p>
        <p className="text-xs text-muted mt-2">{priceSub}</p>
      </div>

      <div className="mb-4 flex-grow">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">{includesLabel}</p>
        <ul className="space-y-2">
          {includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-light">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">{footer}</div>
    </article>
  )
}

export function PlanesSuscripcion() {
  const landingPlan = SUBSCRIPTION_PLANS[0]

  return (
    <section id={SECTION_IDS.planes} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">{PLANES_INTRO.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">{PLANES_INTRO.title}</h2>
          <p className="text-muted-light">{PLANES_INTRO.subtitle}</p>
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
                  className="rounded-full px-5 py-3 text-sm w-full justify-center"
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
                  className="btn-whatsapp rounded-full px-5 py-3 text-sm w-full justify-center"
                >
                  <BrandWhatsapp className="w-4 h-4" />
                  {plan.cta}
                </a>
              }
            />
          ))}
        </div>

        <div className="text-center text-xs text-muted mt-8">
          <p>{PRICING_UI.footnote}</p>
          <p className="mt-2">
            ¿Tienes dudas?{' '}
            <a
              href={WA_LINKS.asesoria}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[var(--accent-2)] transition-colors"
            >
              Escríbenos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

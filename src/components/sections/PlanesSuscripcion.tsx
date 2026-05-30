'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, X, Star } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import {
  PLANES_INTRO,
  PRICING_UI,
  SECTION_IDS,
  WA_LINKS,
} from '@/lib/site'
import { SUBSCRIPTION_PLANS, formatCLP } from '@/lib/subscriptions'

const COLLAPSED_INCLUDES = 5
const COLLAPSED_EXCLUDES = 2

export function PlanesSuscripcion() {
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({})
  const mainPlans = SUBSCRIPTION_PLANS

  return (
    <section id={SECTION_IDS.planes} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-end mb-12">
          <div>
            <p className="section-label">{PLANES_INTRO.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">{PLANES_INTRO.title}</h2>
            <p className="text-muted-light max-w-2xl mb-2">{PLANES_INTRO.subtitle}</p>
            <p className="text-sm text-muted max-w-2xl">{PLANES_INTRO.note}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
            <Image
              src="/images/contenido-redes.png"
              alt="Planificación de contenido reutilizable para redes sociales"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {mainPlans.map((plan) => {
            const isExpanded = expandedPlans[plan.id] ?? false
            const visibleIncludes = isExpanded ? plan.includes : plan.includes.slice(0, COLLAPSED_INCLUDES)
            const visibleExcludes = plan.excludes
              ? isExpanded
                ? plan.excludes
                : plan.excludes.slice(0, COLLAPSED_EXCLUDES)
              : undefined
            const hasHiddenItems =
              plan.includes.length > COLLAPSED_INCLUDES || (plan.excludes?.length ?? 0) > COLLAPSED_EXCLUDES

            return (
              <article
                key={plan.id}
                className={`relative flex h-full flex-col rounded-3xl p-6 md:p-7 card-base ${
                  plan.featured ? 'border-primary/50 ring-1 ring-primary/30 z-10' : ''
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide">
                    {plan.badge}
                  </span>
                )}

                <p className="text-sm font-semibold text-primary mb-1">{plan.name}</p>
                <p className="text-[var(--text)] font-medium mb-1">{plan.tagline}</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold bg-[#8325fd] text-white">
                    <Star className="w-3 h-3" />
                    Potenciado con IA
                  </span>
                </div>
                <p className="text-xs text-muted mb-5">Para quién: {plan.idealFor}</p>

                <div className="mb-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4">
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">{PRICING_UI.setupLabel}</p>
                  {plan.originalSetup && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted line-through">Antes {formatCLP(plan.originalSetup)}</span>
                      <span className="text-xs font-semibold text-primary">50% OFF</span>
                    </div>
                  )}
                  <p className="text-3xl font-bold text-primary">
                    {formatCLP(plan.setup)}
                  </p>
                  <p className="text-xs text-muted mt-2">
                    + {formatCLP(plan.monthly)}{PRICING_UI.monthlySuffix} · {PRICING_UI.commitmentShort}
                  </p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                    {PRICING_UI.includesLabel}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {visibleIncludes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-light">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {visibleExcludes && visibleExcludes.length > 0 && (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                        {PRICING_UI.excludesLabel}
                      </p>
                      <ul className="space-y-2">
                        {visibleExcludes.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted">
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60" />
                            <span className="opacity-85">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {hasHiddenItems && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedPlans((current) => ({
                          ...current,
                          [plan.id]: !isExpanded,
                        }))
                      }
                      className="mt-4 text-left text-sm font-semibold text-primary hover:text-[var(--accent-2)] transition-colors"
                    >
                      {isExpanded ? 'Ver menos' : 'Ver todas las características'}
                    </button>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-muted-light mb-4">
                    <span className="font-semibold text-[var(--text)]">{PRICING_UI.deliveryLabel}:</span>{' '}
                    {plan.delivery}
                  </p>
                  <SubscribeButton
                    planId={plan.id}
                    title={`Plan ${plan.name} — Artestudio`}
                    setup={plan.setup}
                    monthly={plan.monthly}
                    regularMonthly={plan.regularMonthly}
                    className="rounded-full px-5 py-3 text-sm"
                  >
                    Suscribirme al plan
                  </SubscribeButton>
                </div>
              </article>
            )
          })}
        </div>

        <div className="text-center text-xs text-muted mt-8 space-y-2">
          <p>{PRICING_UI.footnote}</p>
          <p>
            ¿Tienes dudas sobre qué plan es para ti?{' '}
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

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, X } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'
import { MIN_COMMITMENT_MONTHS, SOCIAL_MEDIA_PLANS, formatCLP } from '@/lib/subscriptions'

const COLLAPSED_INCLUDES = 5
const COLLAPSED_EXCLUDES = 2

const PLAN_IMAGES: Record<string, string> = {
  'plan-redes-esencial': '/images/services/redes-sociales.png',
  'plan-redes-pro': '/images/contenido-redes.png',
  'plan-landing-redes': '/images/hero-clientes-online.png',
}

export function PlanCrece() {
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({})

  return (
    <section
      id={SECTION_IDS.planes}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-end mb-12">
          <div>
            <p className="section-label">Planes de redes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
              Contenido mensual para mantener tu negocio activo
            </h2>
            <p className="text-muted-light max-w-2xl">
              Elige solo redes, sube de volumen o suma una landing para captar clientes desde una oferta clara.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-card p-5">
            <p className="text-sm font-semibold text-[var(--text)] mb-2">Suscripción mensual directa</p>
            <p className="text-sm text-muted-light">
              Pagas desde la web y activamos el trabajo. Permanencia mínima {MIN_COMMITMENT_MONTHS} meses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {SOCIAL_MEDIA_PLANS.map((plan) => {
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
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl card-base ${
                  plan.featured ? 'border-primary/50 ring-1 ring-primary/30 z-10' : ''
                }`}
              >
                {plan.badge && (
                  <span className="absolute left-5 top-5 z-10 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {plan.badge}
                  </span>
                )}

                <div className="relative h-44 bg-card">
                  <Image
                    src={PLAN_IMAGES[plan.id] ?? '/images/services/redes-sociales.png'}
                    alt={plan.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </div>

                <div className="flex flex-grow flex-col p-6 md:p-7">
                  <p className="text-sm font-semibold text-primary mb-1">{plan.name}</p>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">{plan.tagline}</h3>
                  <p className="min-h-[40px] text-sm text-muted-light mb-5">{plan.idealFor}</p>

                  <div className="mb-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4">
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">Suscripción mensual</p>
                    <p className="text-3xl font-bold text-primary">{formatCLP(plan.monthly)}</p>
                    <p className="text-xs text-muted mt-2">Permanencia mínima {MIN_COMMITMENT_MONTHS} meses</p>
                    {plan.setup > 0 && (
                      <p className="text-xs text-muted-light mt-2">
                        Creación inicial incluida (valor {formatCLP(plan.setup)})
                      </p>
                    )}
                  </div>

                  <div className="mb-4 flex-grow">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">Incluye</p>
                    <ul className="space-y-2 mb-5">
                      {visibleIncludes.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-muted-light">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {visibleExcludes && visibleExcludes.length > 0 && (
                      <>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">No incluye</p>
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
                      <span className="font-semibold text-[var(--text)]">Activación:</span> {plan.delivery}
                    </p>
                    <SubscribeButton
                      planId={plan.id}
                      title={`Plan ${plan.name} — Artestudio`}
                      setup={plan.setup}
                      monthly={plan.monthly}
                      className="rounded-full px-5 py-3 text-sm"
                    >
                      Suscribirme
                    </SubscribeButton>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          ¿Necesitas grabación, pauta o más volumen?{' '}
          <a
            href={WA_LINKS.redes}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-[var(--accent-2)] transition-colors"
          >
            Cotiza un plan a medida
          </a>
        </p>
      </div>
    </section>
  )
}

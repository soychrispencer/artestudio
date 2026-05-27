'use client'

import { Check, X } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { PLANES_INTRO, SECTION_IDS, WA_LINKS } from '@/lib/site'
import {
  SUBSCRIPTION_PLANS,
  firstPayment,
  formatCLP,
  MIN_COMMITMENT_MONTHS,
} from '@/lib/subscriptions'

export function PlanesSuscripcion() {
  return (
    <section id={SECTION_IDS.planes} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Planes mensuales</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">{PLANES_INTRO.title}</h2>
        <p className="text-muted-light max-w-2xl mb-2">{PLANES_INTRO.subtitle}</p>
        <p className="text-sm text-muted mb-12 max-w-2xl">{PLANES_INTRO.note}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-6 md:p-7 card-base ${
                plan.featured ? 'border-primary/50 ring-1 ring-primary/30 lg:scale-[1.02] z-10' : ''
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide">
                  {plan.badge}
                </span>
              )}

              <p className="text-sm font-semibold text-primary mb-1">Plan {plan.name}</p>
              <p className="text-muted-light text-sm mb-5">{plan.tagline}</p>

              <div className="mb-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4">
                <p className="text-xs text-muted uppercase tracking-wide mb-1">Pagas hoy</p>
                <p className="text-3xl font-bold text-[var(--text)]">{formatCLP(firstPayment(plan))}</p>
                <p className="text-xs text-muted mt-1">
                  Activación {formatCLP(plan.setup)} + mes 1 {formatCLP(plan.monthly)}
                </p>
                <p className="text-lg font-bold text-primary mt-3">
                  {formatCLP(plan.monthly)}
                  <span className="text-sm font-normal text-muted">/mes después</span>
                </p>
                <p className="text-[11px] text-muted mt-2">
                  Mínimo {MIN_COMMITMENT_MONTHS} meses · luego el proyecto es tuyo
                </p>
              </div>

              <ul className="space-y-2 mb-4 flex-grow">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-light">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
                {plan.excludes?.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-2 mt-auto pt-4 border-t border-[var(--border)]">
                <SubscribeButton
                  planId={plan.id}
                  title={`Plan ${plan.name} — Artestudio`}
                  setup={plan.setup}
                  monthly={plan.monthly}
                >
                  Contratar plan {plan.name}
                </SubscribeButton>
                <a
                  href={WA_LINKS.asesoria}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-muted-light hover:text-primary transition-colors py-1"
                >
                  Prefiero asesoría por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          Precios en CLP · Transferencia o tarjeta vía MercadoPago · Factura si la necesitas
        </p>
      </div>
    </section>
  )
}

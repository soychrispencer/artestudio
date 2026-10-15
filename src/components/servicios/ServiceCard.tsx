'use client'

import Link from 'next/link'
import { BrandWhatsapp, ArrowRight, Discount2 } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import type { ServiceItem } from '@/content/services-catalog'

export function ServiceIndexCard({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group relative flex h-full flex-col rounded-2xl border border-[var(--border)] bg-surface p-6 transition-all duration-200 hover:border-[var(--ink)] hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)] group-hover:text-[var(--ink)] transition-colors">
          {item.title}
        </h3>
        {item.badge ? (
          <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[var(--field)] text-[var(--ink)] border border-[var(--border)]">
            {item.badge}
          </span>
        ) : null}
      </div>

      <p className="mt-1 flex-1 text-sm text-muted leading-relaxed">{item.headline}</p>

      {item.savingsNote ? (
        <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--field)] text-xs font-semibold text-[var(--ink)] border border-[var(--border)]">
          <Discount2 className="w-3.5 h-3.5 shrink-0" />
          <span>{item.savingsNote}</span>
        </div>
      ) : null}

      <div className="mt-6 pt-4 border-t border-[var(--border)]">
        <p className="text-lg font-extrabold tracking-[-0.02em] text-[var(--text)]">
          {item.priceLabel}
        </p>
        {item.billingNote ? <p className="mt-1 text-xs text-muted">{item.billingNote}</p> : null}
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--text)] group-hover:underline inline-flex items-center gap-1">
          {item.cta.kind === 'buy' ? 'Ver y contratar' : 'Ver y cotizar'}
          <ArrowRight className="w-3.5 h-3.5" />
        </p>
      </div>
    </Link>
  )
}

export function ServiceCrossSellCard({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group flex flex-col justify-between p-5 rounded-xl border border-[var(--border)] bg-surface hover:border-[var(--ink)] transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            Complemento ideal
          </span>
          <span className="text-xs font-bold text-[var(--text)]">{item.priceLabel}</span>
        </div>
        <h4 className="text-base font-bold text-[var(--text)] group-hover:text-[var(--ink)] transition-colors">
          {item.title}
        </h4>
        <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">
          {item.description || item.headline}
        </p>
      </div>
      <p className="mt-4 text-xs font-semibold text-[var(--text)] group-hover:underline inline-flex items-center gap-1">
        Ver complemento <ArrowRight className="w-3 h-3" />
      </p>
    </Link>
  )
}

export function ServiceCta({
  item,
  className = '',
}: {
  item: ServiceItem
  className?: string
}) {
  if (item.cta.kind === 'buy') {
    return (
      <SubscribeButton
        planId={item.cta.plan.id}
        title={`${item.cta.plan.name} — Artestudio`}
        setup={item.cta.plan.setup}
        monthly={item.cta.plan.monthly}
        regularMonthly={item.cta.plan.regularMonthly}
        className={`justify-center ${className}`}
      >
        Comprar ahora
      </SubscribeButton>
    )
  }

  return (
    <a
      href={item.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-outline inline-flex items-center justify-center gap-2 py-3.5 text-sm ${className}`}
    >
      <BrandWhatsapp className="w-4 h-4" />
      {item.cta.label ?? 'Cotizar por WhatsApp'}
    </a>
  )
}

/** @deprecated Use ServiceIndexCard — kept name alias during migration */
export function ServiceCard({ item }: { item: ServiceItem }) {
  return <ServiceIndexCard item={item} />
}

'use client'

import Link from 'next/link'
import { BrandWhatsapp } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import type { ServiceItem } from '@/content/services-catalog'

export function ServiceIndexCard({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-surface p-6 transition-colors hover:border-[var(--ink)]"
    >
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{item.headline}</p>
      <div className="mt-6">
        <p className="text-lg font-extrabold tracking-[-0.02em] text-[var(--text)]">
          {item.priceLabel}
        </p>
        {item.billingNote ? <p className="mt-1 text-sm text-muted">{item.billingNote}</p> : null}
        <p className="mt-4 text-sm font-semibold text-[var(--text)] group-hover:underline">
          {item.cta.kind === 'buy' ? 'Ver y contratar →' : 'Ver y cotizar →'}
        </p>
      </div>
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

'use client'

import Link from 'next/link'
import { BrandWhatsapp } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import type { ServiceItem } from '@/content/services-catalog'

export function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="card-base rounded-xl p-6 flex h-full flex-col">
      <h3 className="text-lg font-bold text-[var(--text)]">{item.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-grow">{item.description}</p>

      {item.highlights && item.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {item.highlights.map((h) => (
            <li key={h} className="text-sm text-muted-light pl-3 relative">
              <span className="absolute left-0 text-primary">–</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <p className="text-lg font-extrabold tracking-[-0.02em] text-[var(--text)]">{item.priceLabel}</p>
        {item.billingNote && <p className="text-xs text-muted mt-1">{item.billingNote}</p>}

        <div className="mt-4">
          {item.cta.kind === 'buy' ? (
            <SubscribeButton
              planId={item.cta.plan.id}
              title={`${item.cta.plan.name} — Artestudio`}
              setup={item.cta.plan.setup}
              monthly={item.cta.plan.monthly}
              regularMonthly={item.cta.plan.regularMonthly}
              className="w-full justify-center"
            >
              Comprar ahora
            </SubscribeButton>
          ) : (
            <a
              href={item.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center py-3.5 text-sm"
            >
              <BrandWhatsapp className="w-4 h-4" />
              {item.cta.label ?? 'Cotizar'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function ServiceCategoryNav({ active }: { active?: string }) {
  const links = [
    { href: '/servicios', label: 'Overview' },
    { href: '/servicios/web', label: 'Web' },
    { href: '/servicios/contenido', label: 'Contenido' },
    { href: '/servicios/ads', label: 'Ads' },
    { href: '/servicios/crecimiento', label: 'Crecimiento' },
  ]

  return (
    <nav className="flex flex-wrap gap-2 mb-10" aria-label="Categorías de servicios">
      {links.map((link) => {
        const isActive = active === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-[10px] px-3.5 py-2 text-sm font-semibold border transition-colors ${
              isActive
                ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                : 'border-[var(--border)] text-muted hover:border-[var(--ink)] hover:text-[var(--text)]'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HOME_EXPERTISE, SECTION_IDS } from '@/lib/site'
import { HOME_SERVICE_CATEGORIES } from '@/content/services-catalog'
import { Reveal } from '@/components/motion/Reveal'

export function HomeServicios() {
  return (
    <section
      id={SECTION_IDS.servicios}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl mb-10">
          <p className="section-label">{HOME_EXPERTISE.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">
            {HOME_EXPERTISE.title}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{HOME_EXPERTISE.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {HOME_SERVICE_CATEGORIES.map((cat) => {
            const lead = cat.items.find((item) => item.featured) ?? cat.items[0]
            const image = HOME_EXPERTISE.images[cat.id]
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] transition-colors hover:border-[var(--ink)]"
              >
                <div className="relative h-40 overflow-hidden bg-[var(--field)]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {cat.label}
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
                    {cat.prompt}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{cat.subtitle}</p>
                  {lead ? (
                    <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                      {lead.priceLabel}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm font-semibold text-[var(--text)] group-hover:underline">
                    Ver opciones →
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

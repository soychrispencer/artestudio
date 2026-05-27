'use client'

import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { SECTION_IDS } from '@/lib/site'
import { SUBSCRIPTION_ADDONS, formatCLP } from '@/lib/subscriptions'

export function AddonsSection() {
  return (
    <section id={SECTION_IDS.addons} className="scroll-mt-20 py-16 md:py-20 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Complementos</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
          Suma a tu plan cuando lo necesites
        </h2>
        <p className="text-muted-light mb-8 max-w-xl">
          Contrátalos junto con tu plan o después. Mismo checkout en línea.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SUBSCRIPTION_ADDONS.map((addon) => (
            <article key={addon.id} className="rounded-2xl card-base p-5 flex flex-col">
              <h3 className="font-semibold text-[var(--text)] mb-2">{addon.name}</h3>
              <p className="text-sm text-muted-light mb-4 flex-grow">{addon.description}</p>
              <p className="text-sm font-bold text-primary mb-4">
                {addon.setup > 0 && (
                  <span>{formatCLP(addon.setup)} activación + </span>
                )}
                {formatCLP(addon.monthly)}/mes
              </p>
              <SubscribeButton
                planId={addon.id}
                title={addon.name}
                setup={addon.setup}
                monthly={addon.monthly}
                variant="outline"
              >
                Agregar complemento
              </SubscribeButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { BrandWhatsapp, ShoppingCart } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { useCart } from '@/components/cart/CartProvider'
import { INDIVIDUAL_SERVICES, INDIVIDUAL_SERVICES_INTRO, SECTION_IDS } from '@/lib/site'
import { trackEvent } from '@/lib/analytics'

type IndividualService = (typeof INDIVIDUAL_SERVICES)[number]
type OneTimeService = IndividualService & {
  price: number
  buyLabel?: string
}

export function ServiciosIndividuales() {
  const { addItem, clear, openCart } = useCart()

  const handleAddService = (service: OneTimeService) => {
    trackEvent('service_add_to_cart', { service: service.title, price: service.price })
    clear()
    addItem({
      id: service.title.toLowerCase().replace(/\s+/g, '-'),
      title: service.title,
      setup: service.price,
      setupWaived: 0,
      monthly: 0,
      quantity: 1,
    })
    openCart()
  }

  return (
    <section
      id={SECTION_IDS.serviciosIndividuales}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center mb-10">
          <div>
            <p className="section-label">{INDIVIDUAL_SERVICES_INTRO.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
              {INDIVIDUAL_SERVICES_INTRO.title}
            </h2>
            <p className="text-muted-light max-w-3xl">{INDIVIDUAL_SERVICES_INTRO.subtitle}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
            <Image
              src="/images/proceso-web-soporte.png"
              alt="Sitio web, soporte y seguridad para un negocio digital"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {INDIVIDUAL_SERVICES.map((service) => {
            const hasSubscription = 'subscription' in service && Boolean(service.subscription)
            const hasOneTimePrice = 'price' in service && typeof service.price === 'number'

            return (
              <article key={service.title} className="card-base rounded-2xl overflow-hidden flex h-full flex-col">
                {service.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">{service.title}</h3>
                      <p className="text-xs uppercase tracking-wide text-muted mt-1">{service.paymentLabel}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-light leading-relaxed mb-5">{service.description}</p>

                  <div className="mt-auto space-y-4">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                      <p className="text-xs uppercase tracking-wide text-muted mb-1">Contratar desde</p>
                      <p className="text-2xl font-bold text-primary">
                        {service.priceFrom}
                      </p>
                      {'priceNote' in service && service.priceNote && (
                        <p className="mt-1 text-xs text-muted-light">{service.priceNote}</p>
                      )}
                      {hasSubscription && service.subscription?.note && (
                        <p className="mt-1 text-xs text-muted-light">{service.subscription.note}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      {hasSubscription && service.subscription ? (
                      <SubscribeButton
                        planId={service.subscription.id}
                        title={service.subscription.title}
                        setup={service.subscription.setup}
                        monthly={service.subscription.monthly}
                        className="rounded-full px-5 py-2.5 text-sm"
                      >
                        {service.subscription.cta}
                      </SubscribeButton>
                      ) : hasOneTimePrice ? (
                        <button
                          type="button"
                          onClick={() => handleAddService(service)}
                          className="btn-whatsapp rounded-full px-5 py-2.5 text-sm w-full justify-center"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {'buyLabel' in service && service.buyLabel ? service.buyLabel : 'Pagar ahora'}
                        </button>
                      ) : null}

                      {'contactCta' in service && service.contactCta && (
                        <a
                          href={service.contactCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline rounded-full px-5 py-2.5 text-sm w-full justify-center"
                        >
                          <BrandWhatsapp className="w-4 h-4" />
                          {service.contactCta.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

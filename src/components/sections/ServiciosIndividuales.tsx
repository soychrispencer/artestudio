import Image from 'next/image'
import { BrandWhatsapp } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { INDIVIDUAL_SERVICES, INDIVIDUAL_SERVICES_INTRO, SECTION_IDS } from '@/lib/site'
import { formatCLP } from '@/lib/subscriptions'

export function ServiciosIndividuales() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDIVIDUAL_SERVICES.map((service) => (
            <article key={service.title} className="card-base rounded-2xl p-6 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text)]">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-light leading-relaxed flex-grow mb-5">{service.description}</p>
              {'subscription' in service ? (
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="text-xs uppercase tracking-wide text-muted mb-1">Suscripción mensual</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCLP(service.subscription.monthly)}
                      <span className="text-sm font-normal text-muted">/mes</span>
                    </p>
                    <p className="mt-1 text-xs text-muted-light">{service.subscription.note}</p>
                  </div>
                  <SubscribeButton
                    planId={service.subscription.id}
                    title={service.subscription.title}
                    setup={service.subscription.setup}
                    monthly={service.subscription.monthly}
                    className="rounded-full px-5 py-2.5 text-sm"
                  >
                    {service.subscription.cta}
                  </SubscribeButton>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline rounded-full px-5 py-2.5 text-sm w-full justify-center"
                  >
                    <BrandWhatsapp className="w-4 h-4" />
                    Consultar antes
                  </a>
                </div>
              ) : (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline rounded-full px-5 py-2.5 text-sm self-start"
                >
                  <BrandWhatsapp className="w-4 h-4" />
                  Cotizar
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

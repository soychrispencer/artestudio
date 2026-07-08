'use client'

import Image from 'next/image'
import { BrandWhatsapp } from 'tabler-icons-react'
import { INDIVIDUAL_SERVICES, INDIVIDUAL_SERVICES_INTRO, SECTION_IDS } from '@/lib/site'

export function ServiciosIndividuales() {
  return (
    <section
      id={SECTION_IDS.serviciosIndividuales}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="section-label">{INDIVIDUAL_SERVICES_INTRO.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
            {INDIVIDUAL_SERVICES_INTRO.title}
          </h2>
          <p className="text-muted-light">{INDIVIDUAL_SERVICES_INTRO.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {INDIVIDUAL_SERVICES.map((service) => (
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
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">{service.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted mt-1">{service.paymentLabel}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-light leading-relaxed mb-5 flex-grow">{service.description}</p>

                <div className="mt-auto space-y-3">
                  <p className="text-sm font-bold text-primary">{service.priceFrom}</p>
                  <a
                    href={service.contactCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline rounded-full px-5 py-2.5 text-sm w-full justify-center"
                  >
                    <BrandWhatsapp className="w-4 h-4" />
                    Cotizar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import {
  ALL_SERVICES,
  SERVICE_CATEGORY_IDS,
  getServiceBySlug,
  getServiceCategory,
  isServiceCategoryId,
} from '@/content/services-catalog'
import { ServiceCta, ServiceCrossSellCard } from '@/components/servicios/ServiceCard'
import { ServicePreviewFrame } from '@/components/servicios/ServicePreviewFrame'
import { MIN_COMMITMENT_MONTHS } from '@/lib/subscriptions'
import { withIVA } from '@/lib/checkout-pricing'
import s from '@/components/studio/StudioServices.module.css'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [
    ...ALL_SERVICES.map((service) => ({ slug: service.slug })),
    ...SERVICE_CATEGORY_IDS.map((id) => ({ slug: id })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (isServiceCategoryId(slug)) {
    const cat = getServiceCategory(slug)
    return {
      title: cat?.label ?? 'Servicios',
      alternates: { canonical: `/servicios#${slug}` },
    }
  }
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Servicios' }
  return {
    title: service.title,
    description: service.problem,
    alternates: { canonical: service.href },
    openGraph: service.previewImage
      ? {
          title: `${service.title} | Artestudio`,
          description: service.problem,
          images: [{ url: service.previewImage.src, alt: service.previewImage.alt }],
        }
      : undefined,
  }
}

export default async function ServicioLandingPage({ params }: PageProps) {
  const { slug } = await params

  if (isServiceCategoryId(slug)) {
    permanentRedirect(`/servicios#${slug}`)
  }

  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const category = getServiceCategory(service.categoryId)
  const relatedServices = (service.relatedSlugs ?? [])
    .map(getServiceBySlug)
    .filter((s): s is NonNullable<typeof s> => Boolean(s) && s?.categoryId !== 'packs')

  return (
    <div className={s.servicePage}>
      <section className={`${s.detail} pb-12 md:pb-16`}>
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-muted">
            <Link href="/servicios" className="hover:text-[var(--text)]">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text)]">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">
                {category?.label} · {service.cta.kind === 'buy' ? 'Compra online' : 'A medida'}
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">{service.headline}</p>
              <p className="text-muted mb-6">{service.description}</p>

            <aside className="h-fit mb-8 max-w-2xl rounded-xl border border-[var(--border)] bg-surface p-6">
              <p className="text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
                {service.priceLabel}
              </p>
              {service.billingNote ? (
                <p className="text-sm text-muted mt-1 mb-5">{service.billingNote}</p>
              ) : (
                <div className="mb-5" />
              )}
              {service.cta.kind === 'buy' && <div className="text-sm text-muted mb-5 space-y-2">
                <p>IVA incluido: {new Intl.NumberFormat('es-CL', {style:'currency',currency:'CLP',maximumFractionDigits:0}).format(withIVA(service.cta.plan.setup || service.cta.plan.monthly))}{service.cta.plan.setup ? ' de implementación' : ' / mes'}.</p>
                {service.cta.plan.setup > 0 && <p>Mensualidad final: {new Intl.NumberFormat('es-CL', {style:'currency',currency:'CLP',maximumFractionDigits:0}).format(withIVA(service.cta.plan.monthly))}. Primer cobro mensual: 30 días después del pago de implementación.</p>}
                <p>Permanencia mínima: {MIN_COMMITMENT_MONTHS} meses de servicio mensual. <Link href="/condiciones-servicios" className="underline">Ver condiciones, cancelación y propiedad</Link>.</p>
              </div>}
              <ServiceCta item={service} className="w-full" />
              <Link
                href="/servicios"
                className="mt-4 block text-center text-sm font-semibold text-muted hover:text-[var(--text)]"
              >
                Ver todos los servicios
              </Link>
            </aside>
              {/* Mockup Preview Deliverable */}
              {service.previewImage ? (
                <div className="mb-10 max-w-2xl">
                  <ServicePreviewFrame preview={service.previewImage} title={service.title} />
                </div>
              ) : null}

              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted mb-4">
                Qué incluye
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {service.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-[var(--text)] leading-relaxed">
                    <span className="text-muted shrink-0" aria-hidden>
                      –
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              {service.monthlyIncludes?.length ? (
                <>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted mb-4 mt-10">
                    Después, cada mes
                  </h2>
                  <ul className="space-y-3 max-w-2xl">
                    {service.monthlyIncludes.map((line) => (
                      <li key={line} className="flex gap-3 text-[var(--text)] leading-relaxed">
                        <span className="text-muted shrink-0" aria-hidden>
                          –
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {service.footnote ? (
                <p className="mt-8 max-w-2xl text-sm text-muted leading-relaxed">{service.footnote}</p>
              ) : null}

              {service.conditions && <section className="mt-10 max-w-2xl space-y-6">
                <h2 className="text-xl">Alcance y condiciones</h2>
                {service.cta.kind === 'buy' && <ul className="list-disc pl-5 space-y-2 text-muted">{service.conditions.scope.map(line => <li key={line}>{line}</li>)}</ul>}
                <h3 className="font-semibold">No incluye</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted">{service.conditions.excludes.map(line => <li key={line}>{line}</li>)}</ul>
                <p><strong>Plazos:</strong> {service.cta.kind === 'buy' ? service.cta.plan.delivery : service.conditions.delivery}</p>
                <p><strong>Revisiones:</strong> {service.conditions.revisions}</p>
                <p className="text-sm text-muted">Los valores «desde» corresponden al alcance base. Confirmamos alcance, precio final con IVA, calendario y costos externos antes de contratar. <Link href="/condiciones-servicios" className="underline">Condiciones generales</Link>.</p>
              </section>}
              {/* Cross-selling: Combina perfecto con */}
              {relatedServices.length > 0 ? (
                <div className="border-t border-[var(--border)] pt-10 mt-12">
                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Sistemas conectados
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)] mt-1">
                      Combina perfecto con:
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      Servicios que potencian los resultados de tu inversión y resuelven el siguiente paso.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {relatedServices.map((rel) => (
                      <ServiceCrossSellCard key={rel.id} item={rel} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

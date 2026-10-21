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
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

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

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-10 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">
                {category?.label} · {service.cta.kind === 'buy' ? 'Compra online' : 'A medida'}
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">{service.problem}</p>

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

            <aside className="lg:sticky lg:top-24 h-fit rounded-xl border border-[var(--border)] bg-surface p-6">
              <p className="text-2xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
                {service.priceLabel}
              </p>
              {service.billingNote ? (
                <p className="text-sm text-muted mt-1 mb-5">{service.billingNote}</p>
              ) : (
                <div className="mb-5" />
              )}
              <ServiceCta item={service} className="w-full" />
              <Link
                href="/servicios"
                className="mt-4 block text-center text-sm font-semibold text-muted hover:text-[var(--text)]"
              >
                Ver todos los servicios
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

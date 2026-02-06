import { Metadata } from 'next'
import Link from 'next/link'
import { ServicePage } from '@/components/sections/ServiceDetailPage'
import { SERVICES_DETAILS } from '@/lib/services'

interface ServicePageParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return SERVICES_DETAILS.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata(
  props: ServicePageParams
): Promise<Metadata> {
  const params = await props.params
  const service = SERVICES_DETAILS.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return {
    title: `${service.title} | artestudio.cl`,
    description: service.longDescription,
    keywords: [service.title, 'diseño', 'servicio creativo', service.subtitle],
    openGraph: {
      title: service.title,
      description: service.longDescription,
      type: 'website',
      locale: 'es_CL',
    },
  }
}

export default async function ServiceDetailPage(
  props: ServicePageParams
) {
  const params = await props.params
  const service = SERVICES_DETAILS.find((s) => s.slug === params.slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, este servicio no existe.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return <ServicePage service={service} />
}

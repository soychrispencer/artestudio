import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceCategory, type ServiceCategoryId } from '@/content/services-catalog'
import { ServiceCard, ServiceCategoryNav } from '@/components/servicios/ServiceCard'
import { WA_LINKS } from '@/lib/site'

const CATEGORY_IDS: ServiceCategoryId[] = ['web', 'contenido', 'ads', 'crecimiento']

export function generateStaticParams() {
  return CATEGORY_IDS.map((categoria) => ({ categoria }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const cat = getServiceCategory(categoria as ServiceCategoryId)
  if (!cat) return { title: 'Servicios' }
  return {
    title: cat.title,
    description: cat.subtitle,
    alternates: { canonical: cat.href },
  }
}

export default async function ServicioCategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params
  const cat = getServiceCategory(categoria as ServiceCategoryId)
  if (!cat) notFound()

  return (
    <div className="bg-[var(--bg)]">
      <section className="pt-28 pb-16 md:pb-24">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">{cat.label}</p>
          <h1 className="display-xl text-4xl md:text-5xl text-[var(--text)] max-w-3xl mb-4">
            {cat.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">{cat.subtitle}</p>
          <ServiceCategoryNav active={cat.href} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cat.items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <a
              href={WA_LINKS.reunion}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-5 py-3 text-sm justify-center"
            >
              Agendar reunión
            </a>
            <Link href="/servicios" className="btn-outline px-5 py-3 text-sm justify-center">
              ← Todas las categorías
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

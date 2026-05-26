import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import {
  SERVICE_CATALOG,
  SERVICE_NAV_GROUPS,
  getServiceHref,
} from '@/lib/service-navigation'

export const metadata: Metadata = {
  title: 'Servicios | artestudio.cl',
  description:
    'Web, branding, redes sociales, diseño gráfico, video, audio y desarrollo. Elige un servicio y ve precios en su página.',
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Link href="/" className="text-sm text-primary font-semibold hover:underline">
            ← Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            Servicios
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary">
            Cada servicio tiene su página con planes y detalle. Si recién empiezas, mira primero las{' '}
            <Link href="/#ofertas" className="text-primary font-semibold hover:underline">
              ofertas web del inicio
            </Link>{' '}
            o la{' '}
            <Link href="/landing-express" className="text-primary font-semibold hover:underline">
              Landing Express
            </Link>
            . Para comparar todos los niveles:{' '}
            <Link href="/precios" className="text-primary font-semibold hover:underline">
              tabla de precios
            </Link>
            .
          </p>
        </div>

        <div className="space-y-16">
          {SERVICE_NAV_GROUPS.map((group) => {
            const items = SERVICE_CATALOG.filter((s) => s.group === group.id)
            if (items.length === 0) return null

            return (
              <section key={group.id}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{group.label}</h2>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-6">{group.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={getServiceHref(item)}
                        className="group flex flex-col h-full rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50 dark:bg-dark-bg-secondary p-5 hover:border-primary/40 hover:shadow-md transition-all"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-2 flex-grow">
                          {item.shortDesc}
                        </p>
                        {item.from && (
                          <p className="text-sm font-bold text-primary mb-3">{item.from}</p>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-dark-text-secondary group-hover:text-primary">
                          Ver página del servicio
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_CATEGORIES, SERVICE_HUB } from '@/content/services-catalog'
import { ServiceCategoryNav } from '@/components/servicios/ServiceCard'
import { WA_LINKS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Web, contenido, ads y sistema de crecimiento. Compra packs con precio o cotiza proyectos a medida.',
  alternates: { canonical: '/servicios' },
}

export default function ServiciosPage() {
  return (
    <div className="bg-[var(--bg)]">
      <section className="pt-28 pb-16 md:pb-20 border-b border-[var(--border)]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">{SERVICE_HUB.label}</p>
          <h1 className="display-xl text-4xl md:text-5xl text-[var(--text)] max-w-3xl mb-4">
            Elige cómo quieres{' '}
            <span className="font-display text-primary">trabajar</span> con nosotros
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">{SERVICE_HUB.subtitle}</p>
          <ServiceCategoryNav active="/servicios" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="card-base rounded-xl p-6 hover:border-[var(--ink)] transition-colors group"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-3">
                  {cat.label}
                </p>
                <h2 className="text-xl font-bold text-[var(--text)] group-hover:text-primary transition-colors">
                  {cat.title}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{cat.subtitle}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--text)]">
                  Ver {cat.label.toLowerCase()} →
                </p>
              </Link>
            ))}
          </div>

          <div className="hazlo mt-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary mb-3">
              ¿No sabes por dónde empezar?
            </p>
            <p className="text-lg font-bold text-[var(--text)] mb-3">
              Agenda una reunión y diseñamos el sistema contigo.
            </p>
            <a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-5 py-3 text-sm">
              Agendar reunión
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

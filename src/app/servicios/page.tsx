import type { Metadata } from 'next'
import {
  SERVICE_CATEGORIES,
  SERVICE_FAMILIES,
  SERVICE_HUB,
} from '@/content/services-catalog'
import { WA_LINKS } from '@/lib/site'
import { ServiceIndexCard } from '@/components/servicios/ServiceCard'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Landing desde $74.990, redes desde $89.990, ads, proyectos con IA, packs o un sistema completo.',
  alternates: { canonical: '/servicios' },
}

export default function ServiciosPage() {
  return (
    <div className="bg-[var(--bg)]">
      <section className="pt-24 md:pt-28 pb-10">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-[var(--text)] mb-4">
            {SERVICE_HUB.title}
          </h1>
          <p className="text-muted text-lg max-w-xl mb-8">{SERVICE_HUB.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SERVICE_FAMILIES.map((family) => (
              <a
                key={family.id}
                href={`#${family.id}`}
                className={`rounded-2xl border px-5 py-4 transition-colors ${
                  family.id === 'pack'
                    ? 'border-[var(--ink)] bg-field hover:border-[var(--ink)] shadow-sm'
                    : family.id === 'system'
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                    : 'border-[var(--border)] bg-surface hover:border-[var(--ink)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-extrabold tracking-[-0.03em]">{family.title}</p>
                  {family.id === 'pack' && (
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[var(--ink)] text-[var(--paper)]">
                      Recomendado
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-sm ${
                    family.id === 'system' ? 'text-white/70' : 'text-muted'
                  }`}
                >
                  {family.intro}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {SERVICE_FAMILIES.map((family) => {
        const cats = SERVICE_CATEGORIES.filter((c) => c.family === family.id)
        return (
          <div key={family.id} id={family.id}>
            {cats.map((cat) => (
              <section
                key={cat.id}
                id={cat.id}
                className="scroll-mt-24 py-10 border-t border-[var(--border)]"
              >
                <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-2">
                    {family.title} · {cat.label}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
                    {cat.prompt}
                  </h2>
                  <p className="mt-2 mb-6 max-w-xl text-muted">{cat.subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.items.map((item) => (
                      <ServiceIndexCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )
      })}

      <section className="py-14 md:py-16">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-surface px-6 py-8 md:px-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <p className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)]">
                ¿No sabes cuál elegir?
              </p>
              <p className="mt-1 text-muted">15 minutos. Te decimos el servicio correcto, sin presión.</p>
            </div>
            <a
              href={WA_LINKS.reunion}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-5 py-3 text-sm w-fit shrink-0"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

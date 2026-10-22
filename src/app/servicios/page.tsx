import type { Metadata } from 'next'
import {
  SERVICE_CATEGORIES,
  SERVICE_FAMILIES,
  SERVICE_HUB,
} from '@/content/services-catalog'
import { WA_LINKS } from '@/lib/site'
import { ServiceIndexCard } from '@/components/servicios/ServiceCard'
import s from '@/components/studio/StudioServices.module.css'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Landing desde $74.990, redes desde $89.990, ads, proyectos con IA, packs o un sistema completo.',
  alternates: { canonical: '/servicios' },
}

export default function ServiciosPage() {
  return (
    <div className={s.servicePage}>
      <section className={s.catalogHero}>
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <p className={s.eyebrow}>Artestudio / Servicios</p>
          <h1>Lo que necesitas.<br /><em>Bien conectado.</em></h1>
          <p className="text-muted text-lg max-w-xl mb-8">{SERVICE_HUB.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {SERVICE_CATEGORIES.filter(c => c.family === 'unit').map(category => (
              <a key={category.id} href={`#${category.id}`} className={s.family}>
                <p>{category.label}</p><p>{category.prompt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {[...SERVICE_FAMILIES].sort((a,b) => ['unit','pack','system'].indexOf(a.id) - ['unit','pack','system'].indexOf(b.id)).map((family) => {
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
                    {cat.items.filter(item => !['correo-corporativo','optimizacion-web','funnels','quiz-calificador','mantencion-web','proyecto-ia','proyecto-estrategico','rediseno-migracion','plantillas-marca','seo-local'].includes(item.slug)).map((item) => (
                      <ServiceIndexCard key={item.id} item={item} />
                    ))}
                  </div>
                  {cat.items.some(item => ['correo-corporativo','optimizacion-web','funnels','quiz-calificador','mantencion-web','proyecto-ia','proyecto-estrategico','rediseno-migracion','plantillas-marca','seo-local'].includes(item.slug)) && <details className="mt-6 rounded-lg border border-[var(--border)] p-5"><summary className="cursor-pointer font-semibold">Complementos y soluciones a medida</summary><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">{cat.items.filter(item => ['correo-corporativo','optimizacion-web','funnels','quiz-calificador','mantencion-web','proyecto-ia','proyecto-estrategico','rediseno-migracion','plantillas-marca','seo-local'].includes(item.slug)).map(item => <ServiceIndexCard key={item.id} item={item} />)}</div></details>}
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

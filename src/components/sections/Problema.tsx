import { PROBLEMAS } from '@/lib/site'

export function Problema() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-6 md:p-10 border border-[var(--border)]">
          <p className="section-label">El problema</p>
          <h2 className="font-syne text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 max-w-xl">
            Si te identificas con alguno, podemos ayudarte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROBLEMAS.map((p) => (
              <article key={p.title} className="rounded-2xl bg-card p-5 border border-[var(--border)]">
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <h3 className="font-syne font-semibold text-[var(--text)] mb-2">{p.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

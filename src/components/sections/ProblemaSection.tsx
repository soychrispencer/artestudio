import { PROBLEMAS } from '@/lib/site'

export function ProblemaSection() {
  return (
    <section id="problema" className="scroll-mt-20 py-16 md:py-20 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="section-label">¿Te suena familiar?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">{PROBLEMAS.title}</h2>
          <p className="text-muted-light">{PROBLEMAS.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROBLEMAS.items.map((item) => (
            <article key={item.title} className="rounded-2xl card-base p-6">
              <span className="text-2xl mb-3 block" aria-hidden>
                {item.emoji}
              </span>
              <h3 className="font-semibold text-[var(--text)] mb-2">{item.title}</h3>
              <p className="text-sm text-muted-light leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

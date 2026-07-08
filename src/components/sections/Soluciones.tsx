import Image from 'next/image'
import { SOLUCIONES, SECTION_IDS } from '@/lib/site'

export function Soluciones() {
  return (
    <section id={SECTION_IDS.soluciones} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="section-label">{SOLUCIONES.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">{SOLUCIONES.title}</h2>
          <p className="text-muted-light">{SOLUCIONES.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUCIONES.items.map((item) => (
            <article
              key={item.title}
              className="card-base rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed mb-4 flex-grow">{item.description}</p>
                <p className="text-sm font-semibold text-primary">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

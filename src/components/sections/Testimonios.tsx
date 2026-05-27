import { TESTIMONIOS } from '@/lib/site'
import { TestimonioCard } from '@/components/ui/TestimonioCard'

export function Testimonios() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Clientes</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-10">
          Lo que dicen quienes ya trabajan con nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t) => (
            <TestimonioCard key={t.name} testimonio={t} />
          ))}
        </div>
        <p className="text-xs text-muted text-center mt-6">
          Testimonios de referencia — se actualizarán con casos reales.
        </p>
      </div>
    </section>
  )
}

import { SERVICIOS } from '@/lib/site'
import { ServicioCard } from '@/components/ui/ServicioCard'

export function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Qué hacemos</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
          Tres pilares, un solo equipo
        </h2>
        <p className="text-muted-light max-w-xl mb-10">
          Nos especializamos en lo que mueve tu negocio: web que convierte, redes con estrategia e IA que automatiza.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICIOS.map((s) => (
            <ServicioCard key={s.id} servicio={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

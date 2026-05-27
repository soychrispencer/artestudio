import { Button } from '@/components/ui/Button'
import { WA_LINKS } from '@/lib/site'

export function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-20 min-h-[92vh] flex items-center glow-accent overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="fade-up fade-up-d1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-primary)] bg-accent-dim text-xs font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Tu equipo digital de mensualidad fija · Chile
          </div>

          <h1 className="fade-up fade-up-d2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[var(--text)] mb-6">
            Web, redes y apps con IA que{' '}
            <span className="text-gradient-primary">generan clientes</span> todos los meses
          </h1>

          <p className="fade-up fade-up-d3 text-lg text-muted-light leading-relaxed mb-8 max-w-2xl">
            Setup único + mensualidad fija. Sin contratos largos. Un equipo que construye tu presencia digital y la mantiene creciendo.
          </p>

          <div className="fade-up fade-up-d4 flex flex-wrap gap-2 mb-8">
            {['Diseño web', 'Redes sociales', 'Apps con IA'].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-muted-light bg-surface"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="fade-up fade-up-d5 flex flex-col sm:flex-row gap-3 mb-12">
            <Button href="#planes">Ver planes mensuales</Button>
            <Button href={WA_LINKS.general} external variant="outline">
              Hablar ahora
            </Button>
          </div>

          <div className="fade-up fade-up-d6 grid grid-cols-3 gap-4 max-w-md border-t border-[var(--border)] pt-8">
            {[
              { value: '48h', label: 'Activación' },
              { value: '+40', label: 'Proyectos' },
              { value: 'Sin', label: 'Contratos largos' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-[var(--text)]">{m.value}</p>
                <p className="text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/Button'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'

export function CTAFinal() {
  return (
    <section id={SECTION_IDS.contacto} className="scroll-mt-20 band-ink py-20 md:py-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--paper)] mb-4">
            Hablemos de tu{' '}
            <span className="font-display">negocio</span>
          </h2>
          <p className="on-ink-muted text-lg leading-relaxed mb-8 max-w-lg">
            Si ya sabes qué servicio necesitas, ve al catálogo. Si quieres diseñar un sistema, agenda
            una reunión.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/servicios" className="px-7 py-3.5 justify-center">
              Ver servicios
            </Button>
            <Button
              href={WA_LINKS.reunion}
              external
              variant="outline"
              className="px-7 py-3.5 justify-center"
            >
              Agendar reunión
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

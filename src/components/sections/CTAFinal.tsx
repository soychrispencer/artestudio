import { Button } from '@/components/ui/Button'
import { CONTACT, WA_LINKS } from '@/lib/site'

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,212,161,0.07) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(124,111,255,0.07) 0%, transparent 50%)',
      }}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text)] mb-4">
          <span className="text-accent">Empieza hoy.</span>
          <br />
          Tu equipo digital te espera.
        </h2>
        <p className="text-muted-light max-w-lg mx-auto mb-8">
          Atendemos todo Chile de forma remota · Respuesta en menos de 2 horas hábiles
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={WA_LINKS.general} external>
            Hablar por WhatsApp
          </Button>
          <Button href={`mailto:${CONTACT.email}`} variant="outline">
            {CONTACT.email}
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/Button'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'

export function CTAFinal() {
  return (
    <section
      id={SECTION_IDS.contacto}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--border)] bg-surface p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="section-label">Contacto directo</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-[var(--text)] mb-3">
              ¿Listo para ordenar y hacer crecer tu negocio?
            </h2>
            <p className="text-muted leading-relaxed">
              Conversemos 15 minutos por WhatsApp. Analizamos tu situación actual y te orientamos con claridad al servicio o sistema adecuado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href={WA_LINKS.reunion} external className="px-6 py-3.5 justify-center">
              Agendar por WhatsApp
            </Button>
            <Button href="/servicios" variant="outline" className="px-6 py-3.5 justify-center">
              Explorar servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

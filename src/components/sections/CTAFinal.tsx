import { Button } from '@/components/ui/Button'
import { CTA_FINAL, SECTION_IDS, WA_LINKS } from '@/lib/site'

export function CTAFinal() {
  return (
    <section
      id={SECTION_IDS.contacto}
      className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(131,37,253,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(168,85,255,0.06) 0%, transparent 50%)',
      }}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-4 max-w-3xl mx-auto">
          {CTA_FINAL.title}
        </h2>
        <p className="text-muted-light max-w-lg mx-auto mb-8">{CTA_FINAL.subtitle}</p>
        <Button href={WA_LINKS.reunion} external className="text-base px-10 py-4">
          {CTA_FINAL.primary}
        </Button>
        <p className="text-sm text-muted mt-6">{CTA_FINAL.note}</p>
        <p className="text-sm text-muted mt-2">{CTA_FINAL.location}</p>
      </div>
    </section>
  )
}

import { FAQ_ITEMS, SECTION_IDS } from '@/lib/site'
import { FAQItem } from '@/components/ui/FAQItem'

export function FAQ() {
  return (
    <section id={SECTION_IDS.faq} className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="section-label text-center">Preguntas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8 text-center">
            Lo que más nos preguntan
          </h2>
          <div className="rounded-2xl border border-[var(--border)] bg-card px-5 md:px-7">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

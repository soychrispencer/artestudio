import { FAQ_ITEMS, SECTION_IDS } from '@/lib/site'
import { FAQItem } from '@/components/ui/FAQItem'

const HOME_FAQ = FAQ_ITEMS.slice(0, 3)

export function FAQ() {
  return (
    <section
      id={SECTION_IDS.faq}
      className="scroll-mt-20 py-16 md:py-20 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">Dudas frecuentes</p>
          <h2 className="display-xl text-3xl md:text-4xl text-[var(--text)] mb-8">
            Antes de{' '}
            <span className="font-display italic text-[var(--text)]">contratar</span>
          </h2>
          <div className="border-y border-[var(--border)]">
            {HOME_FAQ.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

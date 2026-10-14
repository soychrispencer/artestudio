'use client'

import { HOME_STATS } from '@/lib/site'
import { CountUp } from '@/components/motion/CountUp'
import { Reveal } from '@/components/motion/Reveal'

export function HomeStats() {
  return (
    <section className="py-12 md:py-16 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-label">{HOME_STATS.label}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {HOME_STATS.items.map((item) => (
              <div key={item.label} className="border-t-2 border-[var(--ink)] pt-4">
                <p className="text-4xl md:text-5xl font-extrabold tracking-[-0.05em] text-[var(--text)]">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

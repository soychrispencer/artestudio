'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HOME_HUB, SECTION_IDS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function HomeHub() {
  return (
    <section
      id={SECTION_IDS.estudio}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-surface"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 md:mb-12 max-w-2xl">
          <p className="section-label">{HOME_HUB.label}</p>
          <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">{HOME_HUB.title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {HOME_HUB.items.map((item, index) => {
            const inner = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-field">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-300 group-hover:bg-[var(--ink)]/35" />
                  <span className="absolute bottom-4 right-4 rounded-[10px] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {'external' in item && item.external ? 'Abrir' : 'Entrar'}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)] group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </>
            )

            const className =
              'group card-base overflow-hidden rounded-xl hover:border-[var(--ink)] block h-full'

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                {'external' in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

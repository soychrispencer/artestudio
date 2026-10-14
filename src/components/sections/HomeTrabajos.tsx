'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BrandBehance, Check } from 'tabler-icons-react'
import { CONTACT, HOME_WORKS, SECTION_IDS } from '@/lib/site'
import { Reveal } from '@/components/motion/Reveal'

export function HomeTrabajos() {
  const [featured, ...rest] = HOME_WORKS.items

  return (
    <section
      id={SECTION_IDS.trabajo}
      className="scroll-mt-20 py-16 md:py-24 bg-surface rounded-t-[2.25rem] relative z-[1] -mt-4 shadow-[0_-12px_40px_rgba(17,17,17,0.04)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-16 lg:items-end mb-10 md:mb-14">
          <div>
            <p className="section-label">{HOME_WORKS.label}</p>
            <h2 className="display-xl text-3xl md:text-5xl text-[var(--text)]">{HOME_WORKS.title}</h2>
          </div>
          <p className="text-muted text-base leading-relaxed lg:pb-1">{HOME_WORKS.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 lg:gap-12 lg:items-center">
          <motion.a
            href={CONTACT.behance}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative block overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-card aspect-[16/10] lg:aspect-[5/3]"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </motion.a>

          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {HOME_WORKS.featuredTag}
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-[-0.04em] text-[var(--text)]">
              {HOME_WORKS.featuredTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {HOME_WORKS.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--text)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text)]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8 inline-flex px-5 py-3 text-sm"
            >
              <BrandBehance className="w-4 h-4" />
              {HOME_WORKS.moreLabel}
            </a>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
          {rest.map((work, index) => (
            <motion.a
              key={work.title}
              href={CONTACT.behance}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block overflow-hidden rounded-2xl border border-[var(--border)] bg-card aspect-[4/3]"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

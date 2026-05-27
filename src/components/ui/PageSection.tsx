'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PageSectionProps = {
  id: string
  title: string
  description?: string
  eyebrow?: string
  children: ReactNode
  muted?: boolean
  className?: string
}

export function PageSection({
  id,
  title,
  description,
  eyebrow,
  children,
  muted = false,
  className = '',
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 border-t border-gray-100 dark:border-dark-bg-tertiary ${
        muted ? 'bg-neutral-50 dark:bg-dark-bg-secondary' : 'bg-white dark:bg-dark-bg'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-12 md:mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  )
}

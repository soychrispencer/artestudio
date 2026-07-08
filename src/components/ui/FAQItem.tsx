'use client'

import { ChevronDown } from 'tabler-icons-react'

export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[var(--border)] last:border-0">
      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-[var(--text)] pr-4">{q}</span>
        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="text-sm text-muted-light leading-relaxed pr-8 pb-5">{a}</p>
    </details>
  )
}

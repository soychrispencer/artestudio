'use client'

import { useState } from 'react'
import { ChevronDown } from 'tabler-icons-react'

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-syne font-semibold text-[var(--text)] pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-muted-light leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  )
}

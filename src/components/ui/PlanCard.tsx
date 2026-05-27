import { Check, X } from 'tabler-icons-react'
import { Button } from './Button'

type Plan = {
  id: string
  name: string
  setup: string
  setupNote: string
  monthly: string
  featured: boolean
  badge?: string
  includes: readonly string[]
  excludes: readonly string[]
  cta: string
  wa: string
  variant: 'primary' | 'outline'
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-6 md:p-7 card-base ${
        plan.featured
          ? 'border-primary/50 ring-1 ring-primary/30 md:scale-[1.03] z-10'
          : ''
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide">
          {plan.badge}
        </span>
      )}

      <p className="text-sm font-semibold text-muted mb-1">Plan {plan.name}</p>

      <div className="mb-5">
        <p className="text-3xl font-bold text-[var(--text)]">
          {plan.setup}
          <span className="text-base font-normal text-muted ml-1">{plan.setupNote}</span>
        </p>
        <p className="text-2xl font-bold text-primary mt-1">
          + {plan.monthly}
          <span className="text-sm font-normal text-muted">/mes</span>
        </p>
      </div>

      <ul className="space-y-2.5 mb-4 flex-grow">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-light">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
        {plan.excludes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60" />
            {item}
          </li>
        ))}
      </ul>

      <Button href={plan.wa} variant={plan.variant} external className="w-full">
        {plan.cta}
      </Button>
    </article>
  )
}

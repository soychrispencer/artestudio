import Link from 'next/link'
import { ArrowRight, Bolt } from 'tabler-icons-react'

export function LandingExpressBanner() {
  return (
    <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/5 dark:bg-primary/10 p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
            <Bolt className="w-4 h-4" />
            ¿Buscas algo más rápido?
          </p>
          <p className="text-sm text-gray-700 dark:text-dark-text-secondary">
            <strong className="text-gray-900 dark:text-white">Landing Express IA</strong> desde $74.990 setup + $14.990/mes.
            Una página para WhatsApp o ventas, sin el alcance de un sitio completo.
          </p>
        </div>
        <Link
          href="/landing-express"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold whitespace-nowrap hover:bg-primary-dark transition-colors"
        >
          Ver Landing Express
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

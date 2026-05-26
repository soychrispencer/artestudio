import type { Metadata } from 'next'
import Link from 'next/link'
import { PricingSection } from '@/components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Precios y planes | artestudio.cl',
  description:
    'Compara planes Starter, Growth y Scale por servicio: web, branding, redes, diseño, video y packs completos. Precios en CLP.',
}

export default function PreciosPage() {
  return (
    <>
      <div className="pt-28 pb-4 bg-gray-50 dark:bg-dark-bg-secondary border-b border-gray-200 dark:border-dark-bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-primary font-semibold hover:underline">
            ← Inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
            Precios y planes
          </h1>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl">
            Comparador por tipo de servicio. Si buscas empezar rápido, mira las{' '}
            <Link href="/#ofertas" className="text-primary font-semibold hover:underline">
              3 ofertas del inicio
            </Link>{' '}
            o la{' '}
            <Link href="/landing-express" className="text-primary font-semibold hover:underline">
              Landing Express
            </Link>
            .
          </p>
        </div>
      </div>
      <PricingSection embedded />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, BrandWhatsapp, ArrowRight, Clock } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'
import { LANDING_EXPRESS_WHATSAPP, MONTHLY_MODEL_DISCLAIMER } from '@/lib/entry-offers'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://artestudio.cl'

export const metadata: Metadata = {
  title: 'Landing Express IA en 24–48 hrs | artestudio.cl',
  description:
    'Landing page con IA desde $74.990 setup + $14.990/mes. Ideal para talleres, servicios y negocios locales. WhatsApp, hosting y soporte incluidos.',
  openGraph: {
    title: 'Landing Express IA | artestudio.cl',
    description: 'Tu landing lista para captar clientes. Setup + mensual claro.',
    url: `${siteUrl}/landing-express`,
  },
}

const INCLUDES = [
  'Landing de una página',
  'Textos base asistidos con IA',
  'Diseño responsive (móvil y desktop)',
  'Botón WhatsApp o link de compra',
  'Hosting incluido',
  'Soporte básico',
  '1 modificación menor al mes (no acumulable)',
]

const EXCLUDES = [
  'eCommerce y catálogo de productos',
  'Redes sociales y campañas pagadas',
  'Rediseños completos',
  'Nuevas páginas o secciones',
  'Administración constante de contenido',
  'Carga masiva de productos',
]

const IDEAL = [
  'Talleres y servicios a domicilio',
  'Profesionales (abogados, coaches, terapeutas)',
  'Negocios locales y emprendimientos',
  'Campañas puntuales y lanzamientos',
]

export default function LandingExpressPage() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(LANDING_EXPRESS_WHATSAPP)}`

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 ai-grid opacity-40 dark:opacity-15" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Clock className="w-4 h-4" />
            Entrega en 24–48 horas hábiles
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Landing Express <span className="text-gradient-primary">con IA</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Una página enfocada en convertir: WhatsApp, contacto o compra. Sin ecommerce, sin redes, sin sorpresas en el precio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              $74.990 <span className="text-lg font-normal text-gray-500">setup</span>
            </p>
            <p className="text-3xl md:text-4xl font-bold text-primary self-center">
              + $14.990<span className="text-lg font-normal text-gray-500">/mes</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-base"
            >
              <BrandWhatsapp className="w-5 h-5" />
              Quiero mi landing express
            </Link>
            <Link href="/#ofertas" className="btn-outline px-8 py-4 text-base">
              Ver otras opciones
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal para */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Ideal para</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {IDEAL.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-bg-tertiary text-gray-700 dark:text-dark-text-secondary"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Incluye / No incluye */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Incluye</h2>
            <ul className="space-y-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-dark-text-secondary">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No incluye</h2>
            <ul className="space-y-3">
              {EXCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500 dark:text-dark-text-secondary text-sm">
                  <X className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50 dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-dark-bg-tertiary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-8">
            {MONTHLY_MODEL_DISCLAIMER}
          </p>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-10 py-4">
            <BrandWhatsapp className="w-5 h-5" />
            Activar Landing Express
          </Link>
        </div>
      </section>
    </div>
  )
}

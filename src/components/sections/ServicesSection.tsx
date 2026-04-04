'use client'

import { motion } from 'framer-motion'
import {
  AdjustmentsHorizontal,
  ArrowRight,
  BrandInstagram,
  Brush,
  Code,
  Music,
  Palette,
  PlayerPlay,
  Stars,
  Target,
} from 'tabler-icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES_DETAILS, type ServiceDetail } from '@/lib/services'
import { formatPrice } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'

const FAMILY_ORDER: ServiceDetail['family'][] = [
  'Redes Sociales',
  'Diseño & Branding',
  'Producción Audiovisual',
  'Web & Desarrollo',
  'Packs Integrales',
]

const FAMILY_DESCRIPTION: Record<ServiceDetail['family'], string> = {
  'Redes Sociales':
    'Diseño unitario, reels y gestión mensual para crecer con consistencia.',
  'Diseño & Branding':
    'Identidad visual y piezas de alto impacto para posicionar tu marca.',
  'Producción Audiovisual':
    'Video, edición de audio y mastering para contenido profesional.',
  'Web & Desarrollo':
    'Sitios, eCommerce y plataformas a medida con enfoque en resultados.',
  'Packs Integrales':
    'Soluciones end-to-end para lanzar o escalar tu presencia digital.',
}

const MODEL_LABELS: Record<ServiceDetail['billingModel'], string> = {
  unitario: 'Unitario',
  mensual: 'Mensual',
  proyecto: 'Proyecto',
  desde: 'Desde',
}

function ServiceIcon({ serviceId }: { serviceId: number }) {
  if (serviceId === 1) return <BrandInstagram size={26} />
  if (serviceId === 2) return <Palette size={26} />
  if (serviceId === 3) return <Brush size={26} />
  if (serviceId === 4) return <PlayerPlay size={26} />
  if (serviceId === 5) return <Target size={26} />
  if (serviceId === 6) return <Code size={26} />
  if (serviceId === 7) return <Stars size={26} />
  if (serviceId === 8) return <Music size={26} />
  if (serviceId === 10) return <BrandInstagram size={26} />
  if (serviceId === 11) return <Target size={26} />
  return <AdjustmentsHorizontal size={26} />
}

function getPriceLabel(service: ServiceDetail) {
  const fromPrefix =
    service.pricePrefix === 'desde' || service.billingModel === 'desde'
      ? 'Desde '
      : ''
  const monthlySuffix = service.billingModel === 'mensual' ? '/mes' : ''
  return `${fromPrefix}${formatPrice(service.price)}${monthlySuffix}`
}

export function ServicesSection() {
  const groupedServices = FAMILY_ORDER.map((family) => ({
    family,
    services: SERVICES_DETAILS.filter((service) => service.family === family),
  })).filter((group) => group.services.length > 0)

  return (
    <section id="services" className="relative overflow-hidden py-28 bg-white dark:bg-dark-bg-secondary">
      <div className="absolute inset-0 ai-grid opacity-20 dark:opacity-10" />
      <div className="absolute top-12 right-12 h-52 w-52 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-[-100px] left-16 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-dark-bg-tertiary text-gray-600 dark:text-dark-text-secondary font-medium text-xs mb-4 uppercase tracking-[0.2em] border border-gray-200 dark:border-dark-bg-tertiary">
            Catálogo V2
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Servicios diseñados para vender mejor
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Elige por modalidad: unitario, mensual, proyecto o desarrollo desde.
            Cada servicio está pensado para complementarse y escalar por etapas.
          </p>
        </motion.div>

        <div className="space-y-16">
          {groupedServices.map((group) => (
            <div key={group.family}>
              <motion.div
                className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                    Familia de servicios
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {group.family}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary max-w-2xl">
                  {FAMILY_DESCRIPTION[group.family]}
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {group.services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="h-full"
                  >
                    <Link
                      href={`/servicio/${service.slug}`}
                      onClick={() => trackEvent('services_card_click', { service_slug: service.slug })}
                      className="group block h-full"
                    >
                      <article className="relative h-full overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                        {service.supportImage && (
                          <div className="relative h-40 overflow-hidden">
                            <Image
                              src={service.supportImage}
                              alt={service.title}
                              fill
                              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                            <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
                              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1">
                                {MODEL_LABELS[service.billingModel]}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-primary text-white text-xs font-semibold px-3 py-1">
                                {getPriceLabel(service)}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="p-7 flex flex-col h-[calc(100%-10rem)]">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/10 text-primary">
                              <ServiceIcon serviceId={service.id} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                              {group.family}
                            </span>
                          </div>

                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          {(service.id === 3 || service.id === 10) && (
                            <div className="mb-4 flex flex-wrap gap-2">
                              {service.id === 3 ? (
                                <>
                                  <span className="rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                    No redes
                                  </span>
                                  <span className="rounded-full bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                    Editorial/Impreso
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                    Solo redes
                                  </span>
                                  <span className="rounded-full bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                    Estático/Animado/Reel
                                  </span>
                                </>
                              )}
                            </div>
                          )}
                          <p className="text-sm text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-6 flex-grow">
                            {service.shortDescription}
                          </p>

                          <div className="inline-flex items-center gap-2 font-semibold text-primary">
                            Ver planes y detalles
                            <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

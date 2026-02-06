'use client'

import { motion } from 'framer-motion'
import {
  BrandInstagram,
  Palette,
  Brush,
  Music,
  AdjustmentsHorizontal,
  ArrowRight,
  Target,
  Code,
  PlayerPlay,
} from 'tabler-icons-react'
import Link from 'next/link'
import { SERVICES_DETAILS } from '@/lib/services'

export function ServicesSection() {
  const getDiscountPercent = (price?: number, oldPrice?: number) => {
    if (!price || !oldPrice || oldPrice <= price) return 0
    return Math.round((1 - price / oldPrice) * 100)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-28 bg-white dark:bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-dark-bg-tertiary text-gray-600 dark:text-dark-text-secondary font-medium text-xs mb-4 uppercase tracking-[0.2em] border border-gray-200 dark:border-dark-bg-tertiary">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Capacidades creativas aumentadas
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Combinamos estrategia, creatividad y tecnología para resultados medibles.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES_DETAILS.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group h-full"
            >
              <Link href={`/servicio/${service.slug}`}>
                <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-dark-bg border border-gray-200/80 dark:border-dark-bg-tertiary hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col">
                  {(() => {
                    const discounts = [
                      getDiscountPercent(service.price, service.oldPrice),
                      ...(service.plans ?? []).map((plan) =>
                        getDiscountPercent(plan.price, plan.oldPrice)
                      ),
                      ...(service.addons ?? []).map((addon) =>
                        getDiscountPercent(addon.price, addon.oldPrice)
                      ),
                    ]
                    const maxDiscount = Math.max(0, ...discounts)
                    if (maxDiscount <= 0) return null
                    const label = maxDiscount >= 50 ? 'Promo 50%' : 'Promo'
                    return (
                      <span className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {label}
                      </span>
                    )
                  })()}
                  {/* Icon - neutro, primary solo en hover/destacado */}
                  <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-gray-700 dark:text-dark-text bg-gray-100 dark:bg-dark-bg-tertiary flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {service.id === 1 && <BrandInstagram size={28} />}
                    {service.id === 2 && <Palette size={28} />}
                    {service.id === 3 && <Brush size={28} />}
                    {service.id === 4 && <PlayerPlay size={28} />}
                    {service.id === 5 && <Brush size={28} />}
                    {service.id === 6 && <Code size={28} />}
                    {service.id === 7 && <Target size={28} />}
                    {service.id === 8 && <Music size={28} />}
                    {service.id === 9 && <AdjustmentsHorizontal size={28} />}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-xl text-[11px] uppercase tracking-[0.15em] bg-primary/10 text-primary">
                      Tecnología aplicada
                    </span>
                    <span className="px-2.5 py-1 rounded-xl text-[11px] uppercase tracking-[0.15em] bg-gray-100 dark:bg-dark-bg-tertiary text-gray-600 dark:text-dark-text-secondary">
                      Dirección creativa
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Ver Detalles
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

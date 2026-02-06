'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Check, MessageCircle } from 'tabler-icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceDetail } from '@/lib/services'
import { formatPrice } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'

function openWhatsApp(message: string) {
  const phoneNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

interface ServicePageProps {
  service: ServiceDetail
}

function PlanCard({ plan, service, isCombo = false }: { plan: any; service: ServiceDetail; isCombo?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col h-full rounded-2xl border-2 overflow-hidden hover:shadow-xl transition-shadow ${
        isCombo
          ? 'border-primary bg-primary/5 dark:bg-primary/10 ring-2 ring-primary/20'
          : 'border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg'
      }`}
    >
      {isCombo && (
        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          Mejor Opción
        </div>
      )}

      <div className="relative flex flex-col h-full p-8">
        {/* Plan Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {plan.name}
          </h3>
          {plan.oldPrice ? (
            <div className="flex items-center justify-start gap-4 mb-2">
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(plan.oldPrice)}
              </span>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm dark:bg-primary/20 dark:text-primary">
                ¡Ahorra {formatPrice(plan.oldPrice - plan.price)}!
              </div>
            </div>
          ) : null}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl md:text-5xl font-bold text-primary">
              {formatPrice(plan.price)}
            </span>
            <span className="text-gray-600 dark:text-dark-text-secondary whitespace-nowrap">CLP</span>
          </div>
        </div>

        {/* Features List */}
        <div className="flex-grow mb-8 space-y-3">
          {plan.features.map((feature: string, featureIdx: number) => (
            <div key={featureIdx} className="flex items-start gap-3">
              <Check size={20} className="text-primary flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-dark-text-secondary">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={async () => {
            try {
              const res = await fetch('/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  title: `${service.title} - ${plan.name}`,
                  price: plan.price,
                  quantity: 1,
                }),
              })

              const data = await res.json()
              if (data.init_point || data.sandbox_init_point) {
                const redirect = data.init_point ?? data.sandbox_init_point
                window.location.href = redirect
              } else if (data.id) {
                window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${data.id}`
              } else {
                openWhatsApp(`Hola, me interesa el plan ${plan.name} de ${service.title}`)
              }
            } catch (err) {
              console.error(err)
              openWhatsApp(`Hola, me interesa el plan ${plan.name} de ${service.title}`)
            }
          }}
          className={`w-full py-3 px-6 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all ${
            isCombo
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
        >
          Contratar {plan.name}
        </button>
      </div>
    </motion.div>
  )
}

export function ServicePage({ service }: ServicePageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-neutral-900 dark:bg-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-8 text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight size={20} />
            <span className="font-semibold text-white">{service.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8">{service.subtitle}</p>

            {/* CTA Buttons - primary para acción principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openWhatsApp(`Hola, me interesa el servicio de ${service.title}`)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <MessageCircle size={20} />
                {service.cta}
              </button>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Ver Detalles
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            ¿Por qué elegir este servicio?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            {service.supportImage && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square"
              >
                <Image
                  src={service.supportImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 dark:text-dark-text-secondary mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Why Choose Us Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whyChooseUs.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-bg-secondary border border-gray-100 dark:border-dark-bg-tertiary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-800 dark:text-dark-text text-sm">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Nuestro Proceso
            </h2>
            <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
              Trabajamos de manera estratégica y estructurada para garantizar excelentes resultados
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Step number */}
                <div className="absolute -top-6 left-0 w-12 h-12 bg-gray-800 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center text-white font-bold text-lg border border-gray-600 dark:border-dark-bg-tertiary">
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="pt-8 p-6 rounded-xl bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-bg-tertiary h-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-10 top-1/2 transform -translate-y-1/2">
                    <ChevronRight size={32} className="text-gray-400 dark:text-gray-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Qué Incluye?
            </h2>
            <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
              Todo lo que necesitas para obtener resultados excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Plans Grid */}
          {service.plans && service.plans.length > 0 && (
            <div className="mb-20">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Nuestros Planes
                </h2>
                <p className="text-gray-600 dark:text-dark-text-secondary text-lg">
                  {service.id === 1 
                    ? 'Elige administración, diseños, o ambos con descuento'
                    : 'Elige el plan que mejor se adapte a tus necesidades'
                  }
                </p>
              </motion.div>

              {/* Redes Sociales: Admin/Diseños/Combo Structure */}
              {service.id === 1 && (
                <>
                  {/* Administración Section */}
                  <div className="mb-16">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      📋 Solo Administración
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.plans.filter(p => p.name.includes('Administración')).map((plan, idx) => (
                        <PlanCard key={idx} plan={plan} service={service} />
                      ))}
                    </div>
                  </div>

                  {/* Diseños Section */}
                  <div className="mb-16">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      🎨 Solo Diseños
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.plans.filter(p => p.name.includes('Diseños') && !p.name.includes('Combo')).map((plan, idx) => (
                        <PlanCard key={idx} plan={plan} service={service} />
                      ))}
                    </div>
                  </div>

                  {/* Combo Section */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-8 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        ⭐ Combo: Admin + Diseños (Ahorra 15%)
                      </h3>
                      <p className="text-gray-700 dark:text-dark-text-secondary">
                        La mejor opción: obtén administración y diseños con un descuento especial
                      </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.plans.filter(p => p.name.includes('Combo')).map((plan, idx) => (
                        <PlanCard key={idx} plan={plan} service={service} isCombo />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Other Services: Simple Plan Structure */}
              {service.id !== 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.plans.map((plan, idx) => (
                    <PlanCard key={idx} plan={plan} service={service} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Pricing Section - Only show if no plans */}
          {(!service.plans || service.plans.length === 0) && (
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Inversión
                </h2>

                {/* Price Card */}
                <div className="mt-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-dark-bg dark:to-dark-bg-secondary border-2 border-purple-200 dark:border-purple-900">
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    {service.oldPrice && (
                      <span className="text-2xl text-gray-500 line-through">
                        {formatPrice(service.oldPrice)}
                      </span>
                    )}
                    <span className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-dark-text-secondary mb-8">
                    Inversión única. Sin cargos ocultos.
                  </p>

                  {service.oldPrice && (
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-8 dark:bg-primary/20">
                      ¡Ahorra {formatPrice((service.oldPrice ?? 0) - service.price)}!
                    </div>
                  )}

                  <button
                    onClick={async () => {
                      try {
                        const res = await fetch('/api/payment', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            title: service.title,
                            price: service.price,
                            quantity: 1,
                          }),
                        })

                        const data = await res.json()
                        if (data.init_point || data.sandbox_init_point) {
                          const redirect = data.init_point ?? data.sandbox_init_point
                          window.location.href = redirect
                        } else if (data.id) {
                          window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${data.id}`
                        } else {
                          openWhatsApp(`Hola, quiero contratar el servicio de ${service.title}`)
                        }
                      } catch (err) {
                        console.error(err)
                        openWhatsApp(`Hola, quiero contratar el servicio de ${service.title}`)
                      }
                    }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-lg"
                  >
                    Contratar Ahora
                  </button>

                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-4">
                    Respuesta garantizada en menos de 24 horas
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <motion.details
                key={idx}
                className="group p-6 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <summary className="flex items-start justify-between font-bold text-gray-900 dark:text-white text-lg">
                  {item.question}
                  <ChevronRight
                    size={24}
                    className="text-gray-400 group-open:text-purple-600 group-open:rotate-90 transition-all flex-shrink-0"
                  />
                </summary>
                <p className="mt-4 text-gray-600 dark:text-dark-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-neutral-900 dark:bg-dark-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu marca?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contáctanos hoy y cuéntanos sobre tu proyecto
            </p>
            <button
              onClick={() =>
                openWhatsApp(
                  `Hola artestudio, me interesa el servicio de ${service.title}. Quiero conocer más detalles.`
                )
              }
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
            >
              <MessageCircle size={20} />
              Contactar Ahora
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

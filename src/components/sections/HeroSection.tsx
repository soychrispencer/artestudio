"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BrandWhatsapp, Stars, Palette, BrandInstagram, Code, Music } from 'tabler-icons-react'

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-dark-bg">
      <div className="absolute inset-0 ai-grid opacity-60 dark:opacity-30" />
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-10 h-72 w-72 rounded-full bg-primary/15 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-dark-bg-secondary/80 text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-dark-text-secondary">
              <Stars className="w-4 h-4 text-primary" />
              Agencia Creativa Tecnológica
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 dark:text-white">
              Artestudio crea marcas{' '}
              <span className="text-gradient-primary">más inteligentes y moderna</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-xl leading-relaxed">
              Trabajamos con artistas, emprendedores y negocios que buscan una marca sólida,
              potenciando branding, contenido y plataformas digitales con estrategia, diseño y
              herramientas inteligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/56938733230?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-4"
              >
                <span>Cotizar proyecto</span>
                <BrandWhatsapp className="w-5 h-5" />
              </Link>

              <a
                href="#services"
                className="btn-outline px-8 py-4"
              >
                <span>Explorar Servicios</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 text-sm">
              {[
                { label: 'Briefing estratégico', value: 'Dirección clara' },
                { label: 'Iteraciones ágiles', value: 'Feedback guiado' },
                { label: 'Entrega ordenada', value: 'Listo para usar' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-gray-500 dark:text-dark-text-secondary">{item.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary uppercase tracking-[0.2em]">
                  Nuestra mezcla
                </div>
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                {[
                  { icon: Palette, title: 'Identidad Visual', desc: 'Branding con dirección creativa.' },
                  { icon: BrandInstagram, title: 'Contenido Social', desc: 'Narrativas que conectan.' },
                  { icon: Code, title: 'Plataformas Web', desc: 'Sitios ágiles y modernos.' },
                  { icon: Music, title: 'Audio & Podcast', desc: 'Sonido con sello artístico.' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-dark-bg-secondary/70 p-4 space-y-2"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <p className="text-gray-900 dark:text-white font-semibold">{item.title}</p>
                      <p>{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="absolute -inset-6 rounded-3xl border border-primary/20 opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


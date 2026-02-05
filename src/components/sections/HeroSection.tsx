"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BrandWhatsapp, ArrowRight } from 'tabler-icons-react'
export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950 dark:bg-dark-bg text-white">
      {/* Subtle grid / AI-style background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Badge - minimal */}
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-gray-300 font-medium text-xs uppercase tracking-wider border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Diseño • Branding • Desarrollo
          </motion.span>

          {/* Main heading */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white" 
            style={{ letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tu Marca <br />
            <span className="text-primary">Merece Brillar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Soluciones creativas y técnicas para transformar tu negocio. Desde identidad visual hasta plataformas digitales complejas.
          </motion.p>

          {/* CTA Buttons - primary solo en principal */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="https://wa.me/56938733230?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto%20de%20dise%C3%B1o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:shadow-lg transition-all duration-300 group"
            >
              <span>Cotizar Proyecto</span>
              <BrandWhatsapp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a href="#services" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group border border-white/20">
              <span>Explorar Servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection


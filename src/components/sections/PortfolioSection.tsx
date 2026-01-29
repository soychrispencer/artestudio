'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Identidad Visual Startup Tech',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: 'Sistema de branding completo para startup de tecnología',
    },
    {
      id: 2,
      title: 'Campaña Instagram Viral',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=500&fit=crop',
      description: 'Estrategia de contenido que generó 50K seguidores en 3 meses',
    },
    {
      id: 3,
      title: 'Sitio Web Ecommerce',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
      description: 'Plataforma ecommerce moderna con integración de pagos',
    },
    {
      id: 4,
      title: 'Podcast Profesional',
      category: 'audio',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
      description: 'Edición, mezcla y mastering de podcast semanal',
    },
    {
      id: 5,
      title: 'Rediseño Corporativo',
      category: 'graphic',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: 'Papelería corporativa completa y activos digitales',
    },
    {
      id: 6,
      title: 'Estrategia de Contenido TikTok',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop',
      description: 'Estrategia que llegó a 200K reproducciones en contenido',
    },
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web' },
    { id: 'social', label: 'Social Media' },
    { id: 'graphic', label: 'Gráfico' },
    { id: 'audio', label: 'Audio' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-28 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary font-medium text-sm mb-4 uppercase tracking-wide border border-gray-200 dark:border-dark-bg-tertiary">Portafolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nuestro trabajo
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Proyectos destacados que transformaron marcas y generaron resultados reales
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-smooth ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-dark-bg-secondary text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

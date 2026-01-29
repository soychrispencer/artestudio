'use client'

import { motion } from 'framer-motion'
import { Star } from 'tabler-icons-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Pérez',
      role: 'Fundador, TechStart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'artestudio transformó nuestra marca completamente. El diseño web es increíble y las redes sociales explotan con engagement. Altamente recomendado.',
      rating: 5,
    },
    {
      id: 2,
      name: 'María García',
      role: 'CEO, Creative Agency',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'El equipo de artestudio entiende realmente lo que necesita una marca. Su trabajo es profesional, creativo y siempre supera las expectativas.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juan López',
      role: 'Podcaster, Emprendedor Digital',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'La edición y mastering de mi podcast quedó profesional al 100%. El sonido es limpio y claro. Definitivamente seguiré trabajando con ellos.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Laura Martínez',
      role: 'Gerente Marketing, E-commerce',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'Nuestras ventas aumentaron 40% después de implementar el nuevo diseño web y la estrategia de redes sociales. Excelentes resultados.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="testimonials" className="py-28 bg-gray-50 dark:bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-bg-secondary text-gray-600 dark:text-dark-text-secondary font-medium text-sm mb-4 uppercase tracking-wide border border-gray-200 dark:border-dark-bg-tertiary">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Historias de éxito de marcas transformadas por nuestro trabajo
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass dark:glass-dark p-8 rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gray-400 text-gray-400 dark:fill-gray-500 dark:text-gray-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-dark-text-secondary mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-dark-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

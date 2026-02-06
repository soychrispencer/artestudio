'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Home, Mail } from 'tabler-icons-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <Check className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¡Pago Exitoso!
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Gracias por tu compra. Tu transacción ha sido procesada correctamente.
        </motion.p>

        <motion.div
          className="bg-gray-50 dark:bg-dark-bg-secondary p-6 rounded-lg mb-8 border border-gray-200 dark:border-dark-bg-tertiary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-2">
            Pronto recibirás un email con los detalles de tu pedido
          </p>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
            Guarda tu número de transacción para futuras referencias
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg transition-smooth flex-1"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <Link
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary transition-smooth flex-1"
          >
            <Mail className="w-5 h-5" />
            Ver Email
          </Link>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 dark:text-dark-text-secondary mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          ¿Preguntas? Contáctanos por{' '}
          <Link
            href="https://wa.me/56938733230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            WhatsApp
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}

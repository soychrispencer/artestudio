'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { X, Home, MessageCircle } from 'tabler-icons-react'

export default function FailurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <X className="w-10 h-10 text-red-600 dark:text-red-400" />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Pago no realizado
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          La transacción no se completó o fue rechazada. No se ha realizado ningún cargo.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:shadow-lg transition-smooth flex-1"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <a
            href="https://wa.me/56938733230?text=Hola%2C%20tuve%20un%20problema%20con%20un%20pago"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary transition-smooth flex-1"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

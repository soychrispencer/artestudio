import Link from 'next/link'
import { Home, Search } from 'tabler-icons-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-bg-secondary flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-gray-500 dark:text-dark-text-secondary" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-3">
          Página no encontrada
        </h1>

        <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8">
          La ruta que buscas no existe o fue movida. Puedes volver al inicio o explorar nuestros servicios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg transition-smooth"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary transition-smooth"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </div>
  )
}

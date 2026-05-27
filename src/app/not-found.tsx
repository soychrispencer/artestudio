import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">404</p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-3">Página no encontrada</h1>
        <p className="text-muted-light mb-8">
          Esta ruta ya no existe. Todo está en la página principal.
        </p>
        <Link
          href="/"
          className="btn-whatsapp rounded-full px-6 py-3 text-sm"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

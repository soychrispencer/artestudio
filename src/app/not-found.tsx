import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">404</p>
        <h1 className="font-syne text-3xl font-bold text-[var(--text)] mb-3">Página no encontrada</h1>
        <p className="text-muted-light mb-8">
          Esta ruta ya no existe. Todo está en la página principal.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent text-[#05080F] px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

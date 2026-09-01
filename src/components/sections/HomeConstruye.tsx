import Link from 'next/link'

export function HomeConstruye() {
  return (
    <section className="py-14 md:py-16 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="pill-brand pill-editorial mb-3">Método Construye</p>
            <p className="text-lg md:text-xl font-bold tracking-[-0.02em] text-[var(--text)]">
              ¿Quieres claridad antes de contratar? Diagnostica tu negocio y descarga la guía gratis.
            </p>
          </div>
          <Link
            href="/construye"
            className="btn-outline px-5 py-3 text-sm font-semibold justify-center shrink-0"
          >
            Ir a Método Construye
          </Link>
        </div>
      </div>
    </section>
  )
}

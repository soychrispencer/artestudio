import { Check } from 'tabler-icons-react'

type Servicio = {
  id: string
  num: string
  icon: string
  title: string
  description: string
  features: readonly string[]
}

export function ServicioCard({ servicio }: { servicio: Servicio }) {
  return (
    <article
      id={servicio.id}
      className="group relative scroll-mt-24 rounded-3xl p-6 md:p-8 card-base overflow-hidden hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="text-5xl font-extrabold text-white/[0.04] absolute top-4 right-6 select-none">
        {servicio.num}
      </span>
      <span className="text-3xl mb-4 block">{servicio.icon}</span>
      <h3 className="text-xl font-bold text-[var(--text)] mb-2">{servicio.title}</h3>
      <p className="text-sm text-muted-light leading-relaxed mb-5">{servicio.description}</p>
      <ul className="space-y-2">
        {servicio.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-muted-light">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}

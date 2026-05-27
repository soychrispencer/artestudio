type Testimonio = {
  name: string
  company: string
  initial: string
  text: string
  stars: number
}

export function TestimonioCard({ testimonio }: { testimonio: Testimonio }) {
  return (
    <article className="rounded-3xl p-6 md:p-7 card-base h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-accent-dim border border-primary/30 flex items-center justify-center font-bold text-primary">
          {testimonio.initial}
        </div>
        <div>
          <p className="font-semibold text-[var(--text)] text-sm">{testimonio.name}</p>
          <p className="text-xs text-muted">{testimonio.company}</p>
        </div>
      </div>
      <p className="text-primary text-sm mb-3" aria-label={`${testimonio.stars} estrellas`}>
        {'★'.repeat(testimonio.stars)}
      </p>
      <p className="text-sm text-muted-light leading-relaxed italic flex-grow">
        &ldquo;{testimonio.text}&rdquo;
      </p>
    </article>
  )
}

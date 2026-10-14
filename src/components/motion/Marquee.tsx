type MarqueeProps = {
  items: readonly string[]
  className?: string
  inverted?: boolean
}

export function Marquee({ items, className = '', inverted = false }: MarqueeProps) {
  const row = [...items, ...items]

  return (
    <div
      className={`overflow-hidden ${
        inverted ? 'bg-[var(--ink)] text-[var(--paper)]' : 'bg-[var(--bg)] text-[var(--text)]'
      } ${className}`}
    >
      <div className="marquee-track py-4 md:py-5">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-6 text-sm md:text-base font-semibold tracking-[-0.02em] whitespace-nowrap"
          >
            {item}
            <span className={`text-[0.65rem] ${inverted ? 'text-white/35' : 'text-[var(--accent)]'}`} aria-hidden>
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

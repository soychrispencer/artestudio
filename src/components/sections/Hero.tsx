import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'

export function Hero() {
  return (
    <section
      id={SECTION_IDS.inicio}
      className="relative scroll-mt-20 min-h-[88svh] flex items-end overflow-hidden band-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-clientes-online.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--ink)_95%,transparent)] via-[color-mix(in_srgb,var(--ink)_84%,transparent)] to-[color-mix(in_srgb,var(--ink)_50%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_90%,transparent)] via-transparent to-[color-mix(in_srgb,var(--ink)_40%,transparent)]" />
      </div>

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="fade-up fade-up-d1 text-sm font-semibold tracking-[-0.02em] text-[var(--paper)] mb-8">
            Artestudio
          </p>

          <h1 className="fade-up fade-up-d2 display-xl text-[clamp(2.75rem,8vw,5rem)] text-[var(--paper)] mb-6">
            Servicios digitales
            <br />
            para <span className="font-display">hacer crecer</span> tu negocio.
          </h1>

          <p className="fade-up fade-up-d3 text-lg md:text-xl leading-relaxed on-ink-muted mb-10 max-w-xl">
            Web, contenido, ads y sistemas conectados. Compra packs con precio o agenda un proyecto a
            medida.
          </p>

          <div className="fade-up fade-up-d4 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button href="/servicios" className="text-sm sm:text-base px-7 py-3.5 justify-center">
              Ver servicios
            </Button>
            <a
              href={WA_LINKS.reunion}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold on-ink-soft hover:text-[var(--paper)] transition-colors"
            >
              O agendar una reunión →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

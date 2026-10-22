import Image from 'next/image'
import type { ServicePreviewImage } from '@/content/services-catalog'

interface ServicePreviewFrameProps {
  preview: ServicePreviewImage
  title: string
}

export function ServicePreviewFrame({ preview, title }: ServicePreviewFrameProps) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-surface shadow-sm transition-all duration-300 hover:border-[var(--ink)]">
      {/* Browser / Device Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--field)]">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--brand-accent)] transition-colors" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono text-muted bg-surface border border-[var(--border)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] shrink-0" />
          <span className="truncate max-w-[200px] sm:max-w-xs">
            {preview.tag ?? `artestudio.cl · ${title}`}
          </span>
        </div>

        <div className="w-12 text-right">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted hidden sm:inline">
            Preview
          </span>
        </div>
      </div>

      {/* Mockup Preview Visual */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[var(--field)]">
        <Image
          src={preview.src}
          alt={preview.alt}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Deliverable Caption Footer */}
      {preview.caption ? (
        <figcaption className="p-3.5 sm:p-4 border-t border-[var(--border)] bg-surface">
          <p className="text-xs text-muted leading-relaxed">
            <strong className="text-[var(--text)] font-semibold">Ejemplo de proyecto: </strong>
            {preview.caption}
          </p>
        </figcaption>
      ) : null}
    </figure>
  )
}

import type { Metadata } from 'next'
import { SOCIAL_PACKS, type SocialPackId } from '@/content/social/carousel'
import { SocialSlide } from '@/components/social/SocialSlide'

export const metadata: Metadata = {
  title: 'Social kit',
  robots: { index: false, follow: false },
}

const SCALE = 0.36

export default async function DevSocialPage({
  searchParams,
}: {
  searchParams: Promise<{ full?: string; slide?: string; pack?: string }>
}) {
  const { full, slide, pack: packId } = await searchParams
  const activeKey: SocialPackId = packId && packId in SOCIAL_PACKS ? (packId as SocialPackId) : 'agenda'
  const pack = SOCIAL_PACKS[activeKey]
  const scaled = full !== '1'
  const frame = pack.format === 'story' ? { w: 1080, h: 1920 } : { w: 1080, h: 1350 }
  const slideIndex = slide != null ? Number.parseInt(slide, 10) : NaN
  const slides = Number.isInteger(slideIndex)
    ? pack.slides.filter((_, i) => i === slideIndex)
    : pack.slides

  const exportSlide = full === '1' && slides.length === 1
  const qs = `pack=${activeKey}`

  if (exportSlide) {
    return (
      <div style={{ background: slides[0]?.theme === 'ink' ? '#111111' : '#fafafa' }}>
        <style>{`nextjs-portal { display: none !important; }`}</style>
        <SocialSlide slide={slides[0]} pack={pack} />
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-[#e8e8e8] px-6 py-8">
      <p className="mb-3 max-w-3xl text-sm text-[var(--muted)]">
        Kit · 1080×1350 · HTML.{' '}
        <a href="/dev/social?pack=agenda" className="text-[var(--ink)] underline">
          SimpleAgenda
        </a>
        {' · '}
        <a href="/dev/social?pack=sistemas" className="text-[var(--ink)] underline">
          Artestudio
        </a>
        {' · '}
        <a href="/dev/social?pack=ia" className="text-[var(--ink)] underline">
          IA esta semana
        </a>
        {' · '}
        {scaled ? (
          <a href={`/dev/social?${qs}&full=1`} className="underline" style={{ color: pack.accent }}>
            tamaño real
          </a>
        ) : (
          <a href={`/dev/social?${qs}`} className="underline" style={{ color: pack.accent }}>
            tablero
          </a>
        )}
      </p>
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: pack.accent }}>
        {pack.brand} · {pack.id}
      </p>
      <div className="flex flex-wrap gap-8">
        {slides.map((item, i) => (
          <div key={`${item.kind}-${i}`}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {String((Number.isInteger(slideIndex) ? slideIndex : i) + 1).padStart(2, '0')} · {item.kind}
            </p>
            <div
              className="overflow-hidden rounded-sm shadow-[0_12px_40px_rgba(17,17,17,0.12)]"
              style={
                scaled
                  ? { width: frame.w * SCALE, height: frame.h * SCALE }
                  : { width: frame.w, height: frame.h }
              }
            >
              <div
                style={
                  scaled ? { transform: `scale(${SCALE})`, transformOrigin: 'top left' } : undefined
                }
              >
                <SocialSlide slide={item} pack={pack} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

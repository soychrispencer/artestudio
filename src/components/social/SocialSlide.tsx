import type { SocialCarousel, SocialSlide as Slide, SocialVisual } from '@/content/social/carousel'

const FRAME = {
  post: { w: 1080, h: 1350 },
  story: { w: 1080, h: 1920 },
} as const

const VISUAL_SRC: Record<SocialVisual, string> = {
  cover: '/social/ornament-cover.png',
  gemini: '/social/visual-gemini.png',
  lock: '/social/visual-lock.png',
  claude: '/social/visual-claude.png',
  quote: '/social/visual-claude.png',
}

const MARK_SRC: Partial<Record<SocialVisual, string>> = {
  gemini: '/logos/brands/gemini.svg',
  claude: '/logos/brands/claude.svg',
}

export function SocialSlide({
  slide,
  pack,
}: {
  slide: Slide
  pack: SocialCarousel
}) {
  const size = FRAME[pack.format]
  const ink = slide.theme === 'ink'
  const accent = pack.accent
  const hasVisual = Boolean(slide.visual)

  return (
    <article
      className="relative shrink-0 overflow-hidden"
      style={{
        width: size.w,
        height: size.h,
        background: ink ? '#111111' : '#fafafa',
        color: ink ? '#fafafa' : '#111111',
        ['--slide-accent' as string]: accent,
      }}
    >
      <SlideOrnaments ink={ink} accent={accent} />
      {slide.visual ? <SlideVisual visual={slide.visual} ink={ink} accent={accent} /> : null}

      <span
        className="absolute left-0 top-0 z-[2] h-full w-[14px]"
        style={{ background: accent }}
        aria-hidden
      />

      <div
        className="relative z-[3] flex h-full flex-col px-[92px] py-[80px]"
        style={{ paddingRight: hasVisual ? 430 : 92 }}
      >
        <SlideBrand pack={pack} ink={ink} />

        {slide.kind === 'cover' ? (
          <>
            <p
              className="mt-10 max-w-[22ch] text-[24px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: accent }}
            >
              {slide.kicker}
            </p>
            <div className="flex flex-1 flex-col justify-end pb-4">
              <h2 className="font-display text-[104px] leading-[0.9]" style={{ color: accent }}>
                {slide.title}
              </h2>
              <p
                className="mt-5 max-w-[12ch] text-[56px] font-extrabold leading-[1.06] tracking-[-0.045em]"
                style={{ color: ink ? '#fafafa' : '#111111' }}
              >
                {slide.titleAccent}
              </p>
            </div>
          </>
        ) : null}

        {slide.kind === 'point' ? (
          <>
            <p className="mt-14 text-[26px] font-semibold uppercase tracking-[0.16em]" style={{ color: accent }}>
              {slide.index}
            </p>
            <h2 className="mt-10 max-w-[11ch] text-[64px] font-extrabold leading-[1.02] tracking-[-0.045em]">
              {slide.title}
            </h2>
            <p
              className="mt-8 max-w-[16ch] text-[30px] leading-[1.4]"
              style={{ color: ink ? '#a3a3a3' : '#737373' }}
            >
              {slide.body}
            </p>
          </>
        ) : null}

        {slide.kind === 'quote' ? (
          <>
            <p
              className="font-display mt-8 text-[200px] leading-[0.7]"
              style={{ color: accent, opacity: 0.28 }}
              aria-hidden
            >
              “
            </p>
            <p className="font-display -mt-2 max-w-[11ch] text-[64px] leading-[1.12]" style={{ color: accent }}>
              {slide.quote}
            </p>
          </>
        ) : null}

        {slide.kind === 'cta' ? (
          <>
            <p className="mt-10 text-[24px] font-semibold uppercase tracking-[0.16em]" style={{ color: accent }}>
              {slide.kicker}
            </p>
            <h2 className="mt-12 max-w-[11ch] text-[58px] font-extrabold leading-[1.04] tracking-[-0.05em]">
              {slide.title}
            </h2>
            <p className="mt-6 max-w-[16ch] text-[28px] leading-[1.35]" style={{ color: ink ? '#a3a3a3' : '#737373' }}>
              {slide.body}
            </p>
            <p
              className="mt-auto inline-flex w-fit rounded-[14px] px-10 py-5 text-[26px] font-semibold"
              style={{
                background: ink ? '#fafafa' : '#111111',
                color: ink ? '#111111' : '#ffffff',
              }}
            >
              {slide.cta}
            </p>
          </>
        ) : null}

        {slide.kind !== 'cta' ? <div className="mt-auto" /> : null}
      </div>
    </article>
  )
}

function SlideBrand({ pack, ink }: { pack: SocialCarousel; ink: boolean }) {
  if (!pack.logo) {
    return (
      <p className="text-[22px] font-semibold tracking-[0.06em]" style={{ color: ink ? '#a3a3a3' : '#737373' }}>
        {pack.brand}
      </p>
    )
  }

  return (
    <img
      src={pack.logo}
      alt={pack.brand}
      width={220}
      height={48}
      className={`h-10 w-auto object-contain object-left ${ink ? 'brightness-0 invert' : ''}`}
    />
  )
}

function SlideOrnaments({ ink, accent }: { ink: boolean; accent: string }) {
  const line = ink ? 'rgba(250,250,250,0.12)' : 'rgba(17,17,17,0.1)'

  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      <span
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(${ink ? '#ffffff' : '#111111'} 0.9px, transparent 1.1px)`,
          backgroundSize: '18px 18px',
          opacity: ink ? 0.06 : 0.05,
        }}
      />
      <span
        className="absolute -right-28 -top-28 h-[520px] w-[520px] rounded-full border-[3px]"
        style={{ borderColor: accent, opacity: 0.28 }}
      />
      <span
        className="absolute -right-4 top-16 h-[280px] w-[280px] rounded-full border"
        style={{ borderColor: accent, opacity: 0.4 }}
      />
      <span
        className="absolute right-[72px] top-[168px] h-[18px] w-[18px] rounded-full"
        style={{ background: accent }}
      />
      <span
        className="absolute bottom-[110px] right-[86px] h-[120px] w-[120px] rounded-full border"
        style={{ borderColor: line }}
      />
      <ArteMark accent={accent} className="absolute bottom-[72px] right-[56px] h-[64px] w-[64px] opacity-50" />
    </div>
  )
}

function SlideVisual({
  visual,
  ink,
  accent,
}: {
  visual: SocialVisual
  ink: boolean
  accent: string
}) {
  const mark = MARK_SRC[visual]
  const bleed = visual === 'cover'

  return (
    <div
      className="pointer-events-none absolute z-[1] overflow-hidden"
      style={
        bleed
          ? { top: 0, right: 0, bottom: 0, width: 560 }
          : { top: 220, right: 72, width: 360, height: 760, borderRadius: 28 }
      }
      aria-hidden
    >
      <img
        src={VISUAL_SRC[visual]}
        alt=""
        className="h-full w-full object-cover"
        style={
          bleed
            ? {
                maskImage: 'linear-gradient(to right, transparent 0%, black 34%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 34%)',
              }
            : undefined
        }
      />
      {!bleed ? (
        <span
          className="absolute inset-0 rounded-[28px] ring-1"
          style={{ boxShadow: `inset 0 0 0 1px ${ink ? 'rgba(250,250,250,0.12)' : 'rgba(17,17,17,0.08)'}` }}
        />
      ) : null}

      {mark || visual === 'lock' ? (
        <span
          className="absolute bottom-8 left-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: ink ? '#111111' : '#fafafa', color: accent }}
        >
          {mark ? (
            <span
              className="h-8 w-8"
              style={{
                background: accent,
                WebkitMask: `url(${mark}) center / contain no-repeat`,
                mask: `url(${mark}) center / contain no-repeat`,
              }}
            />
          ) : (
            <LockMark />
          )}
        </span>
      ) : null}
    </div>
  )
}

function ArteMark({ accent, className }: { accent: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M24 6 L42 42 H33.5 L24 22.5 L14.5 42 H6 Z" fill={accent} />
    </svg>
  )
}

function LockMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11 V8 a4 4 0 0 1 8 0 v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

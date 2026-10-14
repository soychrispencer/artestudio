import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Artestudio — Sistemas de crecimiento'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0c0c0c',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '72px 80px',
          border: '12px solid #141414',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 16,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#a3a3a3',
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
            Artestudio
          </div>
          <div
            style={{
              fontSize: 15,
              color: '#737373',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            artestudio.cl
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 3,
              backgroundColor: '#ffffff',
            }}
          />
          <h1
            style={{
              fontSize: 68,
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              maxWidth: 960,
              color: '#ffffff',
            }}
          >
            Sistemas que hacen crecer tu empresa.
          </h1>
          <p
            style={{
              fontSize: 26,
              color: '#a3a3a3',
              margin: 0,
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Estrategia, desarrollo web, automatizaciones con IA y captación comercial en Chile.
          </p>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {['Web & Landings', 'Automatizaciones & IA', 'Ads & Campañas', 'Casos Reales'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 18px',
                  borderRadius: 9999,
                  backgroundColor: '#181818',
                  border: '1px solid #2a2a2a',
                  color: '#e5e5e5',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  )
}

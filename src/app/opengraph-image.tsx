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
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          color: '#111111',
          fontFamily: 'sans-serif',
          padding: 72,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 28,
            fontSize: 18,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#737373',
            fontWeight: 600,
          }}
        >
          Artestudio
        </div>
        <div
          style={{
            width: 48,
            height: 3,
            backgroundColor: '#111111',
            marginBottom: 28,
          }}
        />
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            maxWidth: 900,
          }}
        >
          Sistemas de crecimiento para empresas
        </h1>
        <p
          style={{
            fontSize: 28,
            color: '#6b6b6b',
            marginTop: 28,
            maxWidth: 720,
          }}
        >
          Estrategia, tecnología y operación — sin improvisar.
        </p>
      </div>
    ),
    { ...size },
  )
}

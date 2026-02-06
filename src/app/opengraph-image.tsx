import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'artestudio.cl - Agencia Digital'
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f0f',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              height: 80,
              width: 80,
              borderRadius: '50%',
              backgroundColor: '#8325fd',
              marginRight: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            a
          </div>
          <h1 style={{ fontSize: 80, fontWeight: 'bold', margin: 0, letterSpacing: '-0.05em' }}>
            artestudio
          </h1>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            backgroundColor: '#18181b',
            padding: '10px 30px',
            borderRadius: 50,
          }}
        >
          Transformación Digital y Creativa
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
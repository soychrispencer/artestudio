import { NextRequest, NextResponse } from 'next/server'

// Endpoint para crear una preferencia en MercadoPago
export async function POST(request: NextRequest) {
  try {
    const { title, price, quantity } = await request.json()

    if (!title || !price || !quantity) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN || process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN

    if (!accessToken) {
      return NextResponse.json({ error: 'MercadoPago no configurado' }, { status: 500 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const body: any = {
      items: [
        {
          title,
          quantity: Number(quantity),
          unit_price: Number(price),
        },
      ],
    }

    // MercadoPago requiere back_urls https para auto_return en producción.
    // Omitir en localhost para evitar error invalid_auto_return
    if (siteUrl.startsWith('https://')) {
      body.back_urls = {
        success: `${siteUrl}/success`,
        failure: `${siteUrl}/failure`,
        pending: `${siteUrl}/pending`,
      }
      body.auto_return = 'approved'
    }

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!resp.ok) {
      const errorBody = await resp.text()
      console.error('MP error:', errorBody)
      return NextResponse.json({ error: 'Error from MercadoPago', details: errorBody }, { status: 502 })
    }

    const preference = await resp.json()

    return NextResponse.json(preference)
  } catch (error) {
    console.error('Error en API de pagos:', error)
    return NextResponse.json({ error: 'Error al procesar el pago' }, { status: 500 })
  }
}

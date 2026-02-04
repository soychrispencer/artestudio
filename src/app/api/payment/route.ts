import { NextRequest, NextResponse } from 'next/server'

const MAX_PRICE = 50_000_000
const MIN_QUANTITY = 1
const MAX_QUANTITY = 10
const MAX_TITLE_LENGTH = 200

export async function POST(request: NextRequest) {
  try {
    const { title, price, quantity } = await request.json()

    if (!title || price === undefined || price === null || !quantity) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    const titleStr = String(title).trim()
    if (titleStr.length === 0 || titleStr.length > MAX_TITLE_LENGTH) {
      return NextResponse.json(
        { error: `El título debe tener entre 1 y ${MAX_TITLE_LENGTH} caracteres` },
        { status: 400 }
      )
    }

    const priceNum = Number(price)
    if (Number.isNaN(priceNum) || priceNum <= 0 || priceNum > MAX_PRICE) {
      return NextResponse.json(
        { error: 'Precio inválido' },
        { status: 400 }
      )
    }

    const quantityNum = Math.floor(Number(quantity))
    if (Number.isNaN(quantityNum) || quantityNum < MIN_QUANTITY || quantityNum > MAX_QUANTITY) {
      return NextResponse.json(
        { error: `Cantidad debe estar entre ${MIN_QUANTITY} y ${MAX_QUANTITY}` },
        { status: 400 }
      )
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!accessToken) {
      return NextResponse.json({ error: 'MercadoPago no configurado' }, { status: 500 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const body: Record<string, unknown> = {
      items: [
        {
          title: titleStr,
          quantity: quantityNum,
          unit_price: priceNum,
        },
      ],
    }

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
      console.error('MercadoPago error:', errorBody)
      return NextResponse.json(
        { error: 'Error al procesar el pago' },
        { status: 502 }
      )
    }

    const preference = await resp.json()
    return NextResponse.json(preference)
  } catch (error) {
    console.error('Error en API de pagos:', error)
    return NextResponse.json(
      { error: 'Error al procesar el pago' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'

const MAX_PRICE = 50_000_000
const MIN_QUANTITY = 1
const MAX_QUANTITY = 10
const MAX_TITLE_LENGTH = 200

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const itemsInput = Array.isArray(body.items) ? body.items : [{
      title: body.title,
      price: body.price,
      quantity: body.quantity,
    }]

    if (!itemsInput.length) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 })
    }

    const items = itemsInput.map((item: any) => {
      const titleStr = String(item.title ?? '').trim()
      if (titleStr.length === 0 || titleStr.length > MAX_TITLE_LENGTH) {
        throw new Error(`El título debe tener entre 1 y ${MAX_TITLE_LENGTH} caracteres`)
      }

      const priceNum = Number(item.price)
      if (Number.isNaN(priceNum) || priceNum <= 0 || priceNum > MAX_PRICE) {
        throw new Error('Precio inválido')
      }

      const quantityNum = Math.floor(Number(item.quantity))
      if (Number.isNaN(quantityNum) || quantityNum < MIN_QUANTITY || quantityNum > MAX_QUANTITY) {
        throw new Error(`Cantidad debe estar entre ${MIN_QUANTITY} y ${MAX_QUANTITY}`)
      }

      return {
        title: titleStr,
        quantity: quantityNum,
        unit_price: priceNum,
      }
    })

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!accessToken) {
      return NextResponse.json({ error: 'MercadoPago no configurado' }, { status: 500 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const preferenceBody: Record<string, unknown> = {
      items,
    }

    if (siteUrl.startsWith('https://')) {
      preferenceBody.back_urls = {
        success: `${siteUrl}/success`,
        failure: `${siteUrl}/failure`,
        pending: `${siteUrl}/pending`,
      }
      preferenceBody.auto_return = 'approved'
    }

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceBody),
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
    const message = error instanceof Error ? error.message : 'Error al procesar el pago'
    console.error('Error en API de pagos:', error)
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}

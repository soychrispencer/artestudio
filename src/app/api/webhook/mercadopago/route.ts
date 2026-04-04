import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, action, data } = body

    console.log(`[MercadoPago Webhook] Type: ${type}, Action: ${action}`, data)

    // TODO: Aquí procesarías el estado de la suscripción (data.id) 
    // y actualizarías tu base de datos o enviarías un email.
    
    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

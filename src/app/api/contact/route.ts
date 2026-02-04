import { NextRequest, NextResponse } from 'next/server'
import { VALIDATION, FORM_LIMITS } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    const nameStr = String(name).trim()
    if (nameStr.length === 0 || nameStr.length > FORM_LIMITS.maxNameLength) {
      return NextResponse.json(
        { error: `El nombre debe tener entre 1 y ${FORM_LIMITS.maxNameLength} caracteres` },
        { status: 400 }
      )
    }

    const emailStr = String(email).trim().toLowerCase()
    if (!VALIDATION.emailRegex.test(emailStr) || emailStr.length > FORM_LIMITS.maxEmailLength) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    const messageStr = String(message).trim()
    if (messageStr.length === 0 || messageStr.length > FORM_LIMITS.maxMessageLength) {
      return NextResponse.json(
        { error: `El mensaje debe tener entre 1 y ${FORM_LIMITS.maxMessageLength} caracteres` },
        { status: 400 }
      )
    }

    // Log para depuración; aquí puedes integrar envío por email (Resend, Nodemailer, etc.)
    console.log('Contacto recibido:', { name: nameStr, email: emailStr, message: messageStr })

    return NextResponse.json({ success: true, message: 'Mensaje recibido. Te contactaremos pronto.' })
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}

# Configuracion Rapida

Guia corta para dejar el proyecto funcionando en local y configurar
las integraciones esenciales.

## Requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm, yarn, pnpm o bun

## Instalacion

1. Instalar dependencias
```bash
npm install
```

2. Crear `.env.local`
```env
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=
NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN=
EMAIL_USER=
EMAIL_PASSWORD=
NEXT_PUBLIC_WHATSAPP_NUMBER=+56938733230
NEXT_PUBLIC_EMAIL=info@artestudio.cl
```

3. Ejecutar en desarrollo
```bash
npm run dev
```

## Pagos (MercadoPago)

1. Crea tu cuenta en MercadoPago y obtiene credenciales.
2. Completa las variables en `.env.local`.
3. Verifica el endpoint en `src/app/api/payment/route.ts`.

## Contacto

Los links de WhatsApp y email se leen desde `src/lib/constants.ts`.
Actualiza el numero y el correo en ese archivo.

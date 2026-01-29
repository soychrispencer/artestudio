# 🚀 Guía de Configuración Final - artestudio.cl

Este documento contiene los pasos necesarios para completar la configuración y personalización del sitio web.

## ✅ Lo Que Está Listo

- ✨ Diseño ultra-moderno con glassmorphism
- 🌓 Dark/Light mode completamente funcional
- 🎬 Animaciones suaves con Framer Motion
- 📱 Diseño 100% responsive
- 🎨 Colores y tipografía personalizados
- 📧 Integración con WhatsApp
- 🏪 Estructura lista para pagos MercadoPago
- 📸 Galería de portfolio
- ⭐ Sección de testimonios

## 🔧 Configuraciones Pendientes

### 1. **Personalización de Información**

#### En `src/components/sections/ContactSection.tsx`:
- Reemplaza el número de WhatsApp `+56938744230` con tu número real
- Actualiza el email `info@artestudio.cl` con tu email

#### En `src/components/layout/Footer.tsx`:
- Actualiza los enlaces de redes sociales:
  - `instagram.com/artestudio.cl` → tu usuario de Instagram
  - `tiktok.com/@artestudio.cl` → tu usuario de TikTok
  - `facebook.com/artestudio.cl` → tu página de Facebook

#### En `src/components/sections/HeroSection.tsx`:
- Reemplaza el número de WhatsApp en el botón "Cotizar Proyecto"

### 2. **Integración de MercadoPago**

Para habilitar pagos en los servicios:

1. **Crear cuenta en MercadoPago**
   - Visita: https://www.mercadopago.com.ar
   - Registrate con tu email

2. **Obtener credenciales**
   - Ingresa a tu dashboard
   - Ve a Settings → Credenciales
   - Copia tu `Public Key` y `Access Token`

3. **Configurar en el proyecto**

   Crea un archivo `.env.local` en la raíz del proyecto:

   ```env
   NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=TU_PUBLIC_KEY_AQUI
   NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN=TU_ACCESS_TOKEN_AQUI
   ```

4. **Instalar SDK de MercadoPago**
   ```bash
   npm install @mercadopago/sdk-js
   ```

5. **Actualizar `src/components/ui/ServiceCard.tsx`**

   Reemplaza la función `handleMercadoPagoClick` con la integración real:

   ```typescript
   import { initMercadoPago, Wallet } from '@mercadopago/sdk-js'

   const handleMercadoPagoClick = async (e: React.MouseEvent) => {
     e.preventDefault()
     
     try {
       initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY || '')
       
       const response = await fetch('/api/payment', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           title: service.title,
           price: parseFloat(service.price),
           quantity: 1,
         }),
       })
       
       const preference = await response.json()
       
       const wallet = new Wallet({
         initialization: {
           preferenceId: preference.id,
         },
       })
       
       wallet.open()
     } catch (error) {
       console.error('Error:', error)
     }
   }
   ```

### 3. **Agregar Imágenes de Apoyo**

Para mejorar la sección Hero, agrega tu propia imagen o usa imágenes de Freepik/Unsplash:

En `src/components/sections/HeroSection.tsx`, reemplaza la sección de imagen con:

```typescript
<motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  <div className="relative w-full h-96 md:h-full rounded-2xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=600&h=600&fit=crop"
      alt="Creative Design Studio"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
```

### 4. **Optimizar Imágenes de Portfolio**

Reemplaza las URLs en `src/components/sections/PortfolioSection.tsx` con tus proyectos reales o imágenes de Freepik:

```typescript
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto 1',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-YOUR-ID?w=500&h=500&fit=crop',
    description: 'Descripción del proyecto',
  },
  // ... más proyectos
]
```

### 5. **Configurar Dominio Personalizado**

Si deseas que el sitio esté en tu dominio `artestudio.cl`:

1. **En Vercel (recomendado)**
   - Ve a Project Settings → Domains
   - Agrega `artestudio.cl`
   - Sigue las instrucciones de DNS
   - Apunta tus registros DNS al servidor de Vercel

2. **En otro hosting**
   - Configura el CNAME o A Records
   - Apunta al servidor donde esté deployado Next.js

### 6. **SEO y Meta Tags**

Todo ya está configurado en `src/app/layout.tsx`, pero personaliza:

```typescript
export const metadata: Metadata = {
  title: 'artestudio.cl - Tu Título Personalizado',
  description: 'Tu descripción personalizada aquí...',
  // ... más meta tags
}
```

### 7. **Agregar Favicon**

Reemplaza `public/favicon.ico` con tu logo:

1. Crea una imagen de 192x192 o 512x512px
2. Guárdala como `favicon.ico` o `favicon.png`
3. Colócala en la carpeta `public/`

### 8. **Envíos de Email (Opcional)**

Para recibir notificaciones cuando alguien presiona "Cotizar":

Instala `nodemailer`:
```bash
npm install nodemailer
```

Crea `src/app/api/contact/route.ts`:

```typescript
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, service } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@artestudio.cl',
      subject: `Nueva consulta: ${service}`,
      text: `Cliente: ${name}\nEmail: ${email}\nServicio: ${service}`,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: true }, { status: 500 })
  }
}
```

## 📱 Variables de Entorno

Crea un archivo `.env.local` con:

```env
# MercadoPago
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN=tu_access_token

# Email (opcional)
EMAIL_USER=tu_email@gmail.com
EMAIL_PASSWORD=tu_contraseña_app

# API URLs
NEXT_PUBLIC_API_URL=https://artestudio.cl
```

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opción 2: Netlify

1. Conecta tu repositorio Git
2. Build command: `npm run build`
3. Publish directory: `.next`

### Opción 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📚 Referencia de Archivos Clave

```
src/
├── app/
│   ├── layout.tsx          # Metadatos y configuración global
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navegación
│   │   └── Footer.tsx      # Pie de página
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ThemeToggle.tsx
│   │   └── ServiceCard.tsx
│   └── providers/
│       └── ThemeProvider.tsx
├── tailwind.config.ts      # Configuración de colores y temas
└── next.config.js          # Configuración de Next.js
```

## 🎨 Personalización de Colores

En `tailwind.config.ts`:

```typescript
colors: {
  primary: '#8325fd',        // Tu color principal
  'primary-dark': '#6b1dc9', // Más oscuro
  'primary-light': '#a855ff',// Más claro
}
```

## 🔗 Enlaces Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Tabler Icons](https://tabler-icons-react.vercel.app/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [MercadoPago API](https://www.mercadopago.com.ar/developers)

## 📞 Soporte

Para ayuda o preguntas sobre la configuración, contacta a:
- WhatsApp: +56 9 3874 4230
- Email: info@artestudio.cl

---

**¡Tu sitio está listo para lanzarse! 🚀**

# artestudio.cl - Sitio Web Oficial

Sitio web moderno y ultraprofesional para **artestudio.cl**, una agencia de diseño y marketing digital especializada en transformación creativa y digital de marcas.

## 🎨 Características

- **Diseño Ultra-Moderno**: Estética minimalista con glassmorphism y bordes redondeados
- **Dark/Light Mode**: Switch de tema completamente funcional con `next-themes`
- **Animaciones Suaves**: Entrada de componentes con `Framer Motion`
- **Responsivo**: Totalmente adaptable a todos los dispositivos
- **Optimizado SEO**: Metadatos completos y estructura semántica
- **Integración de Pagos**: MercadoPago listo para configurar
- **Contacto WhatsApp**: Links directos al WhatsApp de la empresa
- **Portfolio**: Galería de proyectos con filtros
- **Testimonios**: Sección de reseñas de clientes
- **Servicios**: 7 servicios profesionales con precios

## 🚀 Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework moderno
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) - Librería de animaciones
- **Iconografía**: [Tabler Icons React](https://tabler-icons-react.vercel.app/) - Iconos modernos
- **Tema**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Hosting**: Vercel, Netlify, Docker o tu servidor preferido

## 📦 Instalación Rápida

### Requisitos Previos

- Node.js 18+ (recomendado 20 LTS)
- npm, yarn, pnpm o bun

### Pasos

1. **Instalar dependencias**
```bash
npm install
```

2. **Ejecutar en desarrollo**
```bash
npm run dev
```

3. **Abrir en navegador**
```
http://localhost:3000
```

## 🔧 Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo (con hot reload)
npm run build    # Construir para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar linter ESLint
```

## 📁 Estructura del Proyecto

```
artestudio/
├── src/
│   ├── app/                          # App Router de Next.js
│   │   ├── layout.tsx               # Layout raíz con metadatos y providers
│   │   ├── page.tsx                 # Página principal
│   │   ├── globals.css              # Estilos CSS globales
│   │   ├── animations.css           # Animaciones personalizadas
│   │   └── api/
│   │       └── payment/
│   │           └── route.ts         # Endpoint para pagos (ejemplo)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navegación con dark mode
│   │   │   └── Footer.tsx           # Pie de página
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Sección hero con CTA
│   │   │   ├── ServicesSection.tsx  # Catálogo de 7 servicios
│   │   │   ├── PortfolioSection.tsx # Galería con filtros
│   │   │   ├── TestimonialsSection.tsx # Reseñas de clientes
│   │   │   └── ContactSection.tsx   # Contacto y redes sociales
│   │   ├── ui/
│   │   │   ├── ThemeToggle.tsx      # Botón cambiar tema
│   │   │   └── ServiceCard.tsx      # Tarjeta de servicio con precios
│   │   └── providers/
│   │       └── ThemeProvider.tsx    # Proveedor next-themes
│   └── lib/
│       ├── utils.ts                 # Funciones utilidad
│       └── constants.ts             # Constantes de la app
├── public/                           # Archivos estáticos
├── tailwind.config.ts               # Configuración de Tailwind
├── postcss.config.ts                # Configuración de PostCSS
├── next.config.js                   # Configuración de Next.js
├── tsconfig.json                    # Configuración de TypeScript
├── .eslintrc.json                   # Configuración de ESLint
├── .env.example                     # Variables de entorno de ejemplo
├── .gitignore                       # Archivos ignorados por Git
├── package.json                     # Dependencias del proyecto
├── README.md                        # Este archivo
├── SETUP.md                         # Guía de configuración detallada
└── ...
```

## 🎨 Personalización

### Colores
Los colores primarios se definen en `tailwind.config.ts`:
```typescript
colors: {
  primary: '#8325fd',        // Púrpura
  'primary-dark': '#6b1dc9', // Púrpura oscuro
  'primary-light': '#a855ff',// Púrpura claro
}
```

### Tipografía
Se usa **Inter** como fuente principal vía Google Fonts.
Puedes cambiarla en `src/app/layout.tsx`:
```typescript
import { Inter, Poppins, Montserrat } from 'next/font/google'
```

### Información de Contacto
Actualiza en `src/lib/constants.ts`:
```typescript
export const CONTACT_INFO = {
  whatsapp: '+56938733230',
  email: 'contacto@artestudio.cl',
  phone: '+569 3873 3230',
}
```

## 🔌 Integración de Servicios

### 1. MercadoPago (Pagos)

**Pasos:**
1. Crea cuenta en https://www.mercadopago.com
2. Obtén tus credenciales en Settings > Credenciales
3. Crea `.env.local`:
```env
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN=tu_token
```
4. Instala SDK: `npm install @mercadopago/sdk-js`
5. Integra en `src/components/ui/ServiceCard.tsx`

Ver detalles en [SETUP.md](./SETUP.md#2-integración-de-mercadopago)

### 2. WhatsApp (Contacto)

Ya está integrado. Los links están en:
- `src/components/sections/HeroSection.tsx` (CTA principal)
- `src/components/sections/ContactSection.tsx` (Sección contacto)
- `src/components/ui/ServiceCard.tsx` (Tarjetas de servicio)

Reemplaza el número `+56938733230` con el tuyo.

### 3. Redes Sociales

Actualiza los enlaces en:
- `src/lib/constants.ts` (SOCIAL_LINKS)
- `src/components/layout/Footer.tsx`
- `src/components/sections/ContactSection.tsx`

## 📊 Servicios Incluidos

1. **Administración de Redes Sociales** - $150,000
2. **Branding (Identidad Visual)** - $500,000
3. **Diseño Gráfico** - $100,000
4. **Diseño Redes Sociales** - $75,000
5. **Diseño Web** - $800,000 (50% en febrero)
6. **Edición & Mezcla de Audio** - $200,000
7. **Mastering** - $300,000

Edita en `src/components/sections/ServicesSection.tsx`

## 🌓 Dark Mode

El sitio incluye tema claro/oscuro automático:
- Se guarda la preferencia del usuario
- Respeta la configuración del sistema
- Switch manual en la navegación

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todo está optimizado para dispositivos móviles primero.

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opción 2: Netlify
1. Conecta tu repo de GitHub
2. Build: `npm run build`
3. Publish: `.next`

### Opción 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t artestudio .
docker run -p 3000:3000 artestudio
```

## 📈 Optimizaciones

✅ **SEO**: Metadatos completos, estructura semántica, Open Graph
✅ **Performance**: Imágenes optimizadas, lazy loading, code splitting
✅ **Accessibility**: ARIA labels, semantic HTML, colores accesibles
✅ **Security**: Headers de seguridad, validación de formularios

## 🔒 Variables de Entorno

Ver `.env.example` para todas las variables disponibles.

```env
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=
NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN=
EMAIL_USER=
EMAIL_PASSWORD=
NEXT_PUBLIC_WHATSAPP_NUMBER=+56938733230
NEXT_PUBLIC_EMAIL=info@artestudio.cl
```

## 📚 Documentación

- **[SETUP.md](./SETUP.md)** - Guía completa de configuración
- **[Next.js Docs](https://nextjs.org/docs)**
- **[Tailwind CSS](https://tailwindcss.com/docs)**
- **[Framer Motion](https://www.framer.com/motion/)**
- **[Tabler Icons](https://tabler-icons-react.vercel.app/)**

## 🤝 Contribuciones

Este es un proyecto privado. Para cambios, contacta a artestudio.cl

## 📝 Próximas Mejoras Sugeridas

- [ ] Academia online integrada
- [ ] Sistema de gestión de cursos
- [ ] Carrito de compra completo
- [ ] Panel de administración
- [ ] Blog integrado
- [ ] Sistema de reservas
- [ ] Chat en vivo
- [ ] Analytics avanzado
- [ ] Sistema de newsletter
- [ ] Integración con CRM

## 🎯 Checklist Post-Deployment

- [ ] Configurar dominio personalizado
- [ ] Configurar MercadoPago para producción
- [ ] Agregar favicon
- [ ] Agregar Open Graph images
- [ ] Configurar Google Analytics
- [ ] Configurar envío de emails
- [ ] Agregar portfolio real
- [ ] Actualizar testimonios
- [ ] Configurar SSL
- [ ] Hacer backup de código

## 📞 Soporte

- **WhatsApp**: +56 9 3874 4230
- **Email**: info@artestudio.cl
- **Instagram**: [@artestudio.cl](https://instagram.com/artestudio.cl)
- **TikTok**: [@artestudio.cl](https://tiktok.com/@artestudio.cl)
- **Facebook**: [artestudio.cl](https://facebook.com/artestudio.cl)

## 📜 Licencia

Todos los derechos reservados © 2026 artestudio.cl

---

**¡El sitio está listo para lanzarse en producción! 🚀**

Última actualización: 29 de enero de 2026

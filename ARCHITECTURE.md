# 📐 Arquitectura del Proyecto - artestudio.cl

## Estructura General

```
artestudio.cl/
│
├─ 📁 src/
│  ├─ 📁 app/                    # App Router de Next.js
│  │  ├─ 📄 layout.tsx           # RootLayout con metadatos
│  │  ├─ 📄 page.tsx            # Página principal
│  │  ├─ 📄 globals.css         # Estilos globales
│  │  ├─ 📄 animations.css      # Animaciones personalizadas
│  │  │
│  │  ├─ 📁 success/            # Página de éxito de pago
│  │  │  └─ 📄 page.tsx
│  │  │
│  │  └─ 📁 api/                # API Routes
│  │     └─ 📁 payment/
│  │        └─ 📄 route.ts      # Endpoint de pagos
│  │
│  ├─ 📁 components/
│  │  │
│  │  ├─ 📁 layout/             # Componentes de layout
│  │  │  ├─ 📄 Header.tsx       # Navegación + dark toggle
│  │  │  └─ 📄 Footer.tsx       # Pie de página
│  │  │
│  │  ├─ 📁 sections/           # Secciones principales
│  │  │  ├─ 📄 HeroSection.tsx        # Hero + CTA
│  │  │  ├─ 📄 ServicesSection.tsx    # 7 servicios
│  │  │  ├─ 📄 PortfolioSection.tsx   # Galería
│  │  │  ├─ 📄 TestimonialsSection.tsx # Reseñas
│  │  │  └─ 📄 ContactSection.tsx     # Contacto
│  │  │
│  │  ├─ 📁 ui/                 # Componentes reutilizables
│  │  │  ├─ 📄 ThemeToggle.tsx  # Botón dark mode
│  │  │  └─ 📄 ServiceCard.tsx  # Tarjeta de servicio
│  │  │
│  │  └─ 📁 providers/          # Providers de contexto
│  │     └─ 📄 ThemeProvider.tsx # next-themes
│  │
│  └─ 📁 lib/                   # Funciones y constantes
│     ├─ 📄 utils.ts           # Funciones utilidad
│     └─ 📄 constants.ts       # Constantes de la app
│
├─ 📁 public/                   # Archivos estáticos
│  └─ 📄 favicon.ico           # Ícono del sitio
│
├─ 📁 .github/                  # Configuración GitHub
│
├─ 📄 tailwind.config.ts       # Configuración Tailwind
├─ 📄 postcss.config.ts        # Configuración PostCSS
├─ 📄 next.config.js           # Configuración Next.js
├─ 📄 tsconfig.json            # Configuración TypeScript
├─ 📄 .eslintrc.json           # Configuración ESLint
├─ 📄 .gitignore               # Archivos ignorados Git
│
├─ 📄 package.json             # Dependencias
├─ 📄 package-lock.json        # Lock file
│
├─ 📄 README.md                # Documentación principal
├─ 📄 SETUP.md                 # Guía de configuración
├─ 📄 QUICKSTART.md            # Inicio rápido
├─ 📄 DELIVERY_SUMMARY.md      # Resumen de entrega
└─ 📄 ARCHITECTURE.md          # Este archivo
```

---

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                      USER BROWSER                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   NEXT.JS SERVER                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │             RootLayout (app/layout.tsx)              │   │
│  │  • Metadatos y SEO                                    │   │
│  │  • ThemeProvider (next-themes)                        │   │
│  │  • Estructura HTML global                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                            ↓                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │             Page (app/page.tsx)                       │   │
│  │  • Renderiza todas las secciones                      │   │
│  └──────────────────────────────────────────────────────┘   │
│    │           │             │          │          │         │
│    ↓           ↓             ↓          ↓          ↓         │
│  Hero      Services      Portfolio  Testimonials Contact    │
│  Section   Section       Section    Section      Section    │
│    │           │             │          │          │         │
│    └───────────┴─────────────┴──────────┴──────────┘         │
│                            ↓                                  │
│                   Header + Footer                             │
│                   (Siempre visible)                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   TAILWIND CSS                               │
│  • Dark/Light Mode Theme                                    │
│  • Responsive Breakpoints                                   │
│  • Animaciones con Framer Motion                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔌 Integraciones

```
┌────────────────────────────────────────────────┐
│         FRONTEND (Client-Side)                  │
│  • React + Next.js                             │
│  • Framer Motion (Animaciones)                 │
│  • Tabler Icons (Iconografía)                  │
└────────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────────┐
│         SERVICIOS EXTERNOS                      │
├────────────────────────────────────────────────┤
│  • WhatsApp API (Links directos)               │
│  • MercadoPago (Pagos)                         │
│  • Google Fonts (Tipografía)                   │
│  • Unsplash/Freepik (Imágenes)                 │
│  • Google Analytics (Métricas)                 │
└────────────────────────────────────────────────┘
```

---

## 📦 Componentes Principales

### 1. **Layout Components** (app/layout)
```
RootLayout
├── ThemeProvider
│   ├── Header
│   ├── Main (children)
│   │   └── Page
│   │       ├── HeroSection
│   │       ├── ServicesSection
│   │       ├── PortfolioSection
│   │       ├── TestimonialsSection
│   │       └── ContactSection
│   └── Footer
```

### 2. **Header Component**
```
Header
├── Logo (link a home)
├── Nav (desktop)
│   ├── Home
│   ├── Services
│   ├── Portfolio
│   ├── Testimonials
│   └── Contact
├── ThemeToggle
└── MobileMenu
    └── Nav items (mobile)
```

### 3. **Service Card Component**
```
ServiceCard
├── Icon
├── Title
├── Description
├── Price
│   ├── Current Price
│   └── Original Price (si hay descuento)
├── Badge (opcional)
└── CTA Button (Contratar/Solicitar)
```

### 4. **Page Structure**
```
Page
├── HeroSection
│   ├── Headline
│   ├── Subheadline
│   ├── CTA (WhatsApp)
│   └── Graphic
├── ServicesSection
│   └── Grid de 7 ServiceCards
├── PortfolioSection
│   ├── Filter Buttons
│   └── Portfolio Items
├── TestimonialsSection
│   └── Testimonial Cards
└── ContactSection
    ├── CTA Buttons
    └── Social Links
```

---

## 🎨 Sistema de Diseño

### Colores
```
Primary:      #8325fd (Púrpura)
Primary Dark: #6b1dc9
Primary Light: #a855ff

Dark Mode Backgrounds:
- bg: #0f0f0f
- bg-secondary: #1a1a1a
- bg-tertiary: #2a2a2a

Dark Mode Text:
- text: #ffffff
- text-secondary: #b0b0b0
```

### Tipografía
```
Sans Serif: Inter, Montserrat, Poppins
Tamaños: 
- H1: 5xl/6xl (Hero)
- H2: 4xl/5xl (Section titles)
- H3: 2xl (Cards)
- Body: base/lg
```

### Espaciado (Tailwind)
```
Padding/Margin: 4, 6, 8, 12, 16, 20, 24, 32
Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
```

---

## 🔐 Capas de Seguridad

```
┌──────────────────────────────┐
│  Entrada de Usuario          │
│  (Inputs, Links, etc)        │
└──────────────────────────────┘
            ↓
┌──────────────────────────────┐
│  Validación (Componentes)    │
│  - Validar emails            │
│  - Validar URLs              │
└──────────────────────────────┘
            ↓
┌──────────────────────────────┐
│  Next.js Security Headers    │
│  - CSP                       │
│  - X-Frame-Options           │
│  - X-Content-Type-Options    │
└──────────────────────────────┘
            ↓
┌──────────────────────────────┐
│  API Routes (/api/*)         │
│  - Validación servidor       │
│  - Manejo seguro de datos    │
└──────────────────────────────┘
```

---

## 📊 Performance Optimizations

1. **Next.js Built-in**
   - Code Splitting automático
   - Image Optimization
   - CSS Minification
   - Production Build

2. **Tailwind CSS**
   - JIT (Just-in-Time) compilation
   - PurgeCSS en producción
   - Utility-first (CSS pequeño)

3. **Framer Motion**
   - Lazy animation loading
   - GPU acceleration
   - Optimized keyframes

4. **React**
   - Component memoization
   - Lazy loading de secciones
   - Efficient re-renders

---

## 🚀 Deployment Flow

```
Local Development
        ↓
  npm run dev
        ↓
  Test & Debug
        ↓
  npm run build
        ↓
Production Build Created
        ↓
  npm start
        ↓
Deploy to Hosting
  (Vercel/Netlify/Docker)
        ↓
Production Live
```

---

## 📝 Configuración de Archivos

### package.json
```json
{
  "name": "artestudio",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.4",
    "tailwindcss": "^4.0",
    "framer-motion": "^12.29.2",
    "tabler-icons-react": "latest",
    "next-themes": "^0.4.6"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}
```

---

## 🔄 State Management

```
Contexto Global (next-themes)
├── currentTheme: 'light' | 'dark'
├── setTheme: (theme) => void
└── themes: string[]

Local Component State
├── useState (React)
├── Ejemplos:
│   ├── Header: menuOpen
│   ├── Portfolio: activeCategory
│   └── Components: animationComplete
```

---

## 🎯 SEO Architecture

```
RootLayout
├── Metadata (estático)
│   ├── title
│   ├── description
│   ├── keywords
│   ├── authors
│   └── openGraph
│
├── Metadatos en HTML
│   ├── <meta charset>
│   ├── <meta viewport>
│   ├── <meta og:*>
│   └── <link canonical>
│
└── Structured Data
    └── Schema.org (implícito)
```

---

## 📱 Responsive Breakpoints

```
Mobile First Approach:
├── xs: 320px (base)
├── sm: 640px (small devices)
├── md: 768px (tablets)
├── lg: 1024px (desktops)
├── xl: 1280px (wide screens)
└── 2xl: 1536px (ultra wide)

Componentes Responsive:
├── Header: esconde nav en mobile
├── Sections: 1 col mobile → 3 col desktop
├── Servicios: stack vertical → grid
└── Portfolio: full width → 3 columnas
```

---

**Última actualización: 29 de enero de 2026**

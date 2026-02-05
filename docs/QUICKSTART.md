# 🚀 INICIO RÁPIDO - artestudio.cl

## En 3 Pasos, Tu Sitio Funcionando

### Paso 1: Inicia el Servidor
```bash
npm run dev
```

Abre en el navegador: **http://localhost:3000**

---

### Paso 2: Personaliza Tu Información

#### Archivo: `src/lib/constants.ts`
```typescript
// Actualiza estos valores
export const CONTACT_INFO = {
  whatsapp: '+56938733230',      // Tu número de WhatsApp
  email: 'info@artestudio.cl',   // Tu email
  phone: '+56 9 3874 4230',      // Tu teléfono
}

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/artestudio.cl',
  tiktok: 'https://tiktok.com/@artestudio.cl',
  facebook: 'https://facebook.com/artestudio.cl',
}
```

---

### Paso 3: Haz Cambios (Opcional)

#### Cambiar Color Principal
Archivo: `tailwind.config.ts`
```typescript
colors: {
  primary: '#TU_COLOR_HEX',    // Ejemplo: #FF6B35
}
```

#### Cambiar Servicios y Precios
Archivo: `src/components/sections/ServicesSection.tsx`
```typescript
const services = [
  {
    title: 'Tu Servicio',
    price: '250000',
    description: 'Tu descripción aquí',
  },
  // más servicios...
]
```

---

## ✨ Características Listas Usar

### Dark Mode
Ya incluido. Solo haz clic en el botón del tema en la navegación.

### Enviar por WhatsApp
Todos los botones principales abren WhatsApp automáticamente:
- Hero CTA "Cotizar Proyecto"
- Botones de servicios
- Sección de contacto

### Portfolio
Edita en: `src/components/sections/PortfolioSection.tsx`

### Testimonios
Edita en: `src/components/sections/TestimonialsSection.tsx`

---

## 📊 Página Actual vs Cambios

| Sección | Anterior | Ahora |
|---------|----------|-------|
| Diseño | Desactualizado | Minimalista ultra-moderno |
| Mobile | No responsive | 100% responsive |
| Animaciones | Ninguna | Framer Motion suave |
| Dark Mode | No | Sí, totalmente funcional |
| Servicios | Texto plano | Tarjetas con precios y CTAs |
| Portfolio | No incluido | Galería con filtros |
| Testimonios | No incluido | Sección profesional |
| Velocidad | Lenta | Optimizada (Next.js) |
| SEO | No optimizado | Optimizado completamente |

---

## 🔗 URLs de Uso

- **Desarrollo**: http://localhost:3000
- **Producción**: https://artestudio.cl (después de desplegar)

---

## 💰 Próximos Pasos (Recomendado)

1. **Agregar MercadoPago** (5-10 min)
   - [Ver instrucciones en SETUP.md](./SETUP.md#2-integración-de-mercadopago)

2. **Desplegar a Producción** (10-15 min)
   - Opción fácil: [Vercel](https://vercel.com)
   - Opción alternativa: [Netlify](https://netlify.com)

3. **Configurar Dominio** (5 min)
   - Apuntar DNS a tu servidor
   - Configurar SSL

4. **Agregar Tu Contenido**
   - Proyectos reales en portfolio
   - Testimonios de clientes
   - Imágenes personalizadas

---

## 🎯 Comandos Útiles

```bash
# Ver el build final
npm run build

# Verificar errores
npm run lint

# Crear producción localmente
npm run build && npm start
```

---

## ❓ Preguntas Frecuentes

**P: ¿Necesito configurar algo más?**
R: No, el sitio funciona tal como está. Solo actualiza los números de teléfono y emails.

**P: ¿Cómo agrego mis propios servicios?**
R: Edita el array `services` en `ServicesSection.tsx`

**P: ¿Puedo cambiar los colores?**
R: Sí, en `tailwind.config.ts`. Solo reemplaza los códigos hex.

**P: ¿Funciona en móviles?**
R: Perfectamente. Es mobile-first.

**P: ¿Está optimizado para Google?**
R: Sí, tiene meta tags, Open Graph y estructura semántica.

---

## 📞 ¿Necesitas Ayuda?

Revisa:
- **README.md** - Documentación completa
- **SETUP.md** - Configuración paso a paso
- **DELIVERY_SUMMARY.md** - Resumen de lo incluido

---

## ✅ Checklist de Validación

- [x] Sitio carga sin errores
- [x] Dark mode funciona
- [x] WhatsApp links funcionan
- [x] Responsive en móviles
- [x] Animaciones suaves
- [x] Servicios con precios visibles
- [x] Portfolio y testimonios incluidos
- [x] SEO optimizado
- [x] Performance optimizado

---

**¡Tu sitio está listo para usarse! 🚀**

Próxima meta: **Llevarlo a producción**

# Mejoras sugeridas para artestudio.cl

Revisión del repositorio con prioridad: **alta** → **media** → **baja**.

---

## Alta prioridad

### 1. Seguridad – Token de MercadoPago

**Problema:** El API de pagos acepta `NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN`. Cualquier variable `NEXT_PUBLIC_*` se expone al cliente; el Access Token **nunca** debe ser público.

**Qué hacer:**
- En producción usar **solo** `MERCADOPAGO_ACCESS_TOKEN` (sin `NEXT_PUBLIC_`).
- En `src/app/api/payment/route.ts`: quitar el fallback a `NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN` o usarlo solo en desarrollo local si hace falta.
- En `.env.example`: documentar `MERCADOPAGO_ACCESS_TOKEN` (solo servidor) y dejar `NEXT_PUBLIC_` solo para la Public Key.

### 2. Validación en API de pagos

**Problema:** No se validan rangos de `price` ni `quantity`; un cliente malicioso podría enviar valores extremos.

**Qué hacer:**
- Validar `price` (ej. > 0 y < un tope razonable, ej. 50.000.000 CLP).
- Validar `quantity` (ej. 1–10).
- Validar que `title` tenga longitud máxima (ej. 200 caracteres).

### 3. Favicon y Open Graph

**Problema:** En `layout.tsx` se usa `<link rel="icon" href="/favicon.ico" />` pero en `public/` no hay `favicon.ico`. También se referencia `og-image.png` en `SITE_CONFIG` y no existe.

**Qué hacer:**
- Añadir `public/favicon.ico` (y opcionalmente favicon en otros tamaños).
- Añadir `public/og-image.png` (ej. 1200×630) para redes sociales.
- En `layout.tsx` metadata, asegurar `openGraph.images` con la URL de esa imagen.

### 4. Páginas de MercadoPago: failure y pending

**Problema:** La API define `back_urls` con `/success`, `/failure` y `/pending`, pero solo existe la ruta `/success`.

**Qué hacer:**
- Crear `src/app/failure/page.tsx` y `src/app/pending/page.tsx` con mensaje claro y enlace a inicio o contacto (similar a `success/page.tsx`).

### 5. Página 404 global

**Problema:** No hay `not-found.tsx`; las URLs inexistentes muestran la 404 por defecto de Next.js.

**Qué hacer:**
- Crear `src/app/not-found.tsx` con diseño coherente con la web, mensaje “Página no encontrada” y enlace a inicio.

---

## Prioridad media

### 6. Dependencia no usada: axios

**Problema:** `axios` está en `package.json` y no se usa en el código.

**Qué hacer:**
- Ejecutar `npm uninstall axios` para reducir tamaño del bundle y tiempo de build.

### 7. Variables de entorno – .env.example

**Problema:** Falta `NEXT_PUBLIC_SITE_URL` (o equivalente) que usa la API para `back_urls` en producción.

**Qué hacer:**
- Añadir en `.env.example`:  
  `NEXT_PUBLIC_SITE_URL=https://artestudio.cl`  
  y documentar que en producción debe ser la URL real del sitio.

### 8. SEO – Sitemap y robots.txt

**Problema:** No hay `sitemap.xml` ni `robots.txt` para crawlers.

**Qué hacer:**
- Añadir `src/app/sitemap.ts` que genere URLs: `/`, `/servicio/redes-sociales`, etc. (usar `SERVICES_DETAILS` para slugs).
- Añadir `src/app/robots.ts` que permita rastrear el sitio y apunte al sitemap (o un `robots.txt` estático en `public/`).

### 9. Accesibilidad

**Problema:** Pocos `aria-label` en botones/iconos; el menú móvil y algunos controles podrían mejorar para lectores de pantalla.

**Qué hacer:**
- Añadir `aria-label` a botones que solo tienen icono (ej. menú hamburguesa, toggle tema, redes en footer).
- Asegurar que el menú móvil tenga `aria-expanded` y `aria-controls` si aplica.
- Revisar contraste de textos (ya usas gris/negro/blanco; verificar en modo oscuro).

### 10. Imágenes externas – prioridad y tamaño

**Problema:** Imágenes de Unsplash/Pexels en servicios y portfolio se cargan sin `priority` ni tamaños explícitos en algunos casos.

**Qué hacer:**
- En listados, usar `loading="lazy"` (por defecto en Next/Image) y `sizes` adecuados para no cargar imágenes demasiado grandes en móvil.
- En hero o primera sección visible, usar `priority` solo en la imagen que esté above the fold.

---

## Prioridad baja

### 11. Código no usado en lib

**Problema:** En `constants.ts` y `utils.ts` hay exports que no se usan (ej. `SERVICE_PRICES`, `FORM_LIMITS`, `getBrowserName`, `copyToClipboard` en algunos flujos).

**Qué hacer:**
- Ir eliminando o comentando lo que no se use, o marcar como “utilidad futura” para no confundir a quien mantenga el proyecto.

### 12. Coolify – Dockerfile vs Nixpacks

**Problema:** En el deploy se usa Nixpacks (auto-detectado), no el `Dockerfile` del repo. Si quieres control total del build, conviene usar el Dockerfile.

**Qué hacer:**
- En Coolify, en la configuración del servicio, elegir “Dockerfile” como método de build (si está disponible) para que use tu `Dockerfile` y `output: 'standalone'`.
- Actualizar `DEPLOY.md` indicando que se puede forzar el uso del Dockerfile en Coolify.

### 13. Scripts de package.json

**Qué hacer (opcional):**
- Añadir `"typecheck": "tsc --noEmit"` para comprobar tipos sin hacer build.
- Opcional: pre-commit o CI que ejecute `npm run lint` y `npm run typecheck`.

### 14. Errores en API – no exponer detalles

**Problema:** En `route.ts` a veces se devuelve `details: errorBody` de MercadoPago al cliente.

**Qué hacer:**
- En producción, devolver solo un mensaje genérico (“Error al procesar el pago”) y guardar el detalle en logs (ya usas `console.error`; no incluir el cuerpo en la respuesta JSON).

### 15. Contacto – formulario o API

**Problema:** En `constants.ts` hay `API_URLS.contact` y en `.env.example` hay `EMAIL_*`, pero no existe ruta `/api/contact` ni formulario de contacto que envíe email.

**Qué hacer (si quieres recibir consultas por email):**
- Crear `src/app/api/contact/route.ts` que valide cuerpo, envíe email (Resend, Nodemailer, etc.) y use `EMAIL_USER` / `EMAIL_PASSWORD` o un servicio.
- Añadir en la sección de contacto un formulario (nombre, email, mensaje) que llame a esa API.

---

## Resumen rápido

| Prioridad | Tema                         | Acción principal                                      |
|----------|------------------------------|--------------------------------------------------------|
| Alta     | Token MercadoPago             | No usar NEXT_PUBLIC para Access Token; solo servidor   |
| Alta     | API payment                   | Validar price, quantity, title                        |
| Alta     | Favicon / OG                  | Añadir favicon.ico y og-image.png                     |
| Alta     | MercadoPago failure/pending   | Crear páginas /failure y /pending                     |
| Alta     | 404                           | Crear not-found.tsx                                   |
| Media    | axios                          | Desinstalar                                           |
| Media    | .env.example                   | Añadir NEXT_PUBLIC_SITE_URL                           |
| Media    | SEO                            | sitemap.ts + robots                                   |
| Media    | Accesibilidad                  | aria-labels en botones/iconos                         |
| Baja     | Código no usado                | Limpiar constants/utils                               |
| Baja     | Coolify                        | Documentar uso de Dockerfile                          |
| Baja     | typecheck                      | Script tsc --noEmit                                   |
| Baja     | API errores                    | No devolver detalles MP al cliente en producción     |
| Baja     | Contacto                      | API + formulario de contacto si lo necesitas         |

Si quieres, puedo ayudarte a implementar primero las de **alta prioridad** (cambios concretos en código y archivos).

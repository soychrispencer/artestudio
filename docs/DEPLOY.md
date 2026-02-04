# Despliegue: Git, GitHub y Coolify (VPS)

Guía para subir el proyecto a Git, GitHub y desplegarlo en tu VPS con Coolify.

---

## 1. Git (local)

Si aún no tienes repositorio inicializado:

```bash
cd c:\Users\chris\Desktop\Artestudio
git init
git add .
git commit -m "Estilo minimalista IA: negro, blanco, gris y primary para botones"
```

Si ya tienes Git y solo quieres subir cambios:

```bash
git add .
git status
git commit -m "Estilo minimalista IA y ajustes de diseño"
```

---

## 2. GitHub

### Crear el repositorio en GitHub

1. Entra a [github.com](https://github.com) y inicia sesión.
2. Clic en **New repository** (o el botón **+** → **New repository**).
3. Nombre sugerido: `artestudio` o `artestudio-web`.
4. Elige **Private** o **Public**.
5. **No** marques "Add a README" si ya tienes código local.
6. Clic en **Create repository**.

### Conectar y subir

En la carpeta del proyecto:

```bash
# Añadir el remoto (sustituye TU_USUARIO y NOMBRE_REPO por los tuyos)
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git

# Rama principal (si usas main)
git branch -M main

# Subir todo
git push -u origin main
```

Si GitHub te pide autenticación:
- **HTTPS**: usa un Personal Access Token (Settings → Developer settings → Personal access tokens) como contraseña.
- **SSH**: configura una clave SSH en GitHub y usa la URL `git@github.com:TU_USUARIO/NOMBRE_REPO.git`.

---

## 3. Coolify en tu VPS

Coolify despliega desde un repositorio Git (por ejemplo GitHub) y construye la app en el servidor.

### Requisitos

- VPS con Docker (Coolify se instala con un script).
- Repo en GitHub ya creado y con el código subido.

### Instalar Coolify en el VPS (si aún no está)

En el VPS (SSH):

```bash
curl -fsSL https://get.coolify.io | bash
```

Sigue las instrucciones en pantalla (puerto, usuario, etc.) y accede a la URL que te indique (ej: `http://TU_IP:8000`).

### Crear el proyecto en Coolify

1. **Iniciar sesión** en el panel de Coolify.
2. **Nuevo proyecto**: crea un proyecto (ej: "Artstudio").
3. **Nuevo recurso** → elige **Application** (o **Service**, según tu versión de Coolify).

### Configurar la aplicación (Next.js)

1. **Origen del código**
   - Conectar **GitHub** (autorizar Coolify si es la primera vez).
   - Seleccionar el repositorio `artestudio` (o el nombre que hayas usado).
   - Rama: `main`.

2. **Tipo de build**
   - Por defecto Coolify usa **Nixpacks** (auto-detecta Node/Next.js).
   - Para usar el **Dockerfile** del repo (build standalone optimizado), en la configuración del servicio elige **Dockerfile** como método de build. El repo ya incluye `Dockerfile` y `output: 'standalone'` en `next.config.js`.

3. **Dockerfile recomendado para Next.js** (si Coolify no detecta bien el build)

Crea en la raíz del proyecto un archivo `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

Para que funcione el `standalone`, en `next.config.js` añade:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // ... resto de tu config
}
module.exports = nextConfig
```

Luego haz commit y push del `Dockerfile` y del cambio en `next.config.js`.

4. **Variables de entorno**  
   En Coolify, en la configuración del servicio, añade las variables de `.env.example`. **Importante:**
   - `MERCADOPAGO_ACCESS_TOKEN`: token de MercadoPago **solo en servidor** (nunca usar `NEXT_PUBLIC_` para el token).
   - `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY`: clave pública para el frontend.
   - `NEXT_PUBLIC_SITE_URL`: URL del sitio en producción (ej. `https://artestudio.cl`) para back_urls de MercadoPago y metadatos OG.

5. **Puerto**
   - Puerto del contenedor: **3000** (por defecto para Next.js).

6. **Dominio (opcional)**
   - En Coolify puedes configurar un dominio (ej: `artestudio.cl`) y SSL (Let's Encrypt).

7. **Desplegar**
   - Clic en **Deploy** (o **Build and deploy**). Coolify clonará el repo, construirá la imagen y levantará el contenedor.

---

## 4. Resumen de comandos (desde tu PC)

```bash
cd c:\Users\chris\Desktop\Artestudio
git add .
git commit -m "Preparar despliegue: Dockerfile y standalone"
git push origin main
```

Luego en Coolify: **Deploy** para que reconstruya y actualice la app.

---

## 5. Próximos despliegues

Cada vez que quieras actualizar la web:

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

En Coolify, activa el **Auto Deploy** en el servicio para que, ante cada `push` a `main`, se vuelva a desplegar automáticamente.

---

Si quieres, en el siguiente paso podemos añadir el `Dockerfile` y el `output: 'standalone'` en tu `next.config.js` directamente en el repo.

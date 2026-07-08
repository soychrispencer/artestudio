# Despliegue: GitHub y Coolify

Guía operativa para **artestudio.cl**. El repo ya está conectado a Coolify; este documento explica cómo subir cambios, sincronizar credenciales y mantener las variables de producción.

---

## Resumen rápido

| Qué | Dónde |
|-----|--------|
| Repositorio | `https://github.com/soychrispencer/artestudio` · rama `main` |
| App Coolify | `soychrispencer/artestudio:main-s4kk044w4g80o4wgkw4kkoo4` |
| Dominios | `https://artestudio.cl`, `https://www.artestudio.cl` |
| Build | **Dockerfile** en la raíz (`/Dockerfile`) |
| Puerto contenedor | `3000` |
| Healthcheck | `/` |

---

## Flujo de despliegue (día a día)

### 1. Subir código

```powershell
cd C:\Users\chris\Desktop\Artestudio
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Si **Auto Deploy** está activo en Coolify, el build arranca solo. Si no, fuerza redeploy (ver sección [Scripts](#scripts-automatizados)).

### 2. Variables de entorno

Las variables `NEXT_PUBLIC_*` se **hornean en el build**. Si las cambias en Coolify necesitas **Redeploy** (no solo Restart).

### 3. Verificar producción

Abre `https://artestudio.cl` y confirma que el contenido coincide con lo que subiste.

---

## Credenciales de Coolify

El panel y el token de API viven en un archivo local **gitignored**.

### Opción A — Usar el de Simple (actual)

Copia o reutiliza `C:\Users\chris\Desktop\Simple\.env.deploy`:

```env
COOLIFY_URL=http://TU_SERVIDOR:8000
COOLIFY_API_TOKEN=tu-token-de-api
```

Los scripts de Artestudio lo leen como **fallback** si no existe `.env.deploy` en este proyecto.

### Opción B — Propio de Artestudio (recomendado a largo plazo)

```powershell
copy .env.deploy.example .env.deploy
# Edita .env.deploy con COOLIFY_URL y COOLIFY_API_TOKEN
```

El token se genera en Coolify → **Keys & Tokens** → **API tokens**.

---

## MercadoPago: de dónde salen las credenciales

| Variable | Fuente | Notas |
|----------|--------|-------|
| `MERCADOPAGO_ACCESS_TOKEN` | `Simple/services/api/.env.local` → clave `MERCADO_PAGO_ACCESS_TOKEN` | Token de empresa (live `APP_USR-`). **Nunca** `NEXT_PUBLIC_`. |
| `MERCADO_PAGO_ACCESS_TOKEN` | Mismo valor (alias) | La API de pagos acepta ambos nombres. |
| `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` | `Artestudio/.env.local` | Solo la public key va al cliente. |

**Sincronizar localmente desde Simple:**

```powershell
node scripts/sync-mp-from-simple.mjs
node scripts/verify-mp-token.mjs
```

`verify-mp-token.mjs` debe responder `ok: true` y `isLiveToken: true`.

> **Seguridad:** No commitear `.env.local`, `.env.deploy` ni tokens. Si un secreto estuvo en git, rotarlo en MercadoPago y en Coolify.

---

## Variables requeridas en Coolify

Pega o sincroniza estas variables en **Settings → Environment Variables** del servicio artestudio.

### Pagos (obligatorio para checkout)

```env
MERCADOPAGO_ACCESS_TOKEN=          # desde Simple (servidor)
MERCADO_PAGO_ACCESS_TOKEN=         # mismo valor (alias)
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY= # desde Artestudio/.env.local
NEXT_PUBLIC_SITE_URL=https://artestudio.cl
```

`NEXT_PUBLIC_SITE_URL` define los `back_urls` de MercadoPago (`/pago-exito`, `/success`, etc.).

### Contacto y redes (recomendado)

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+56938744230
NEXT_PUBLIC_EMAIL=contacto@artestudio.cl
NEXT_PUBLIC_PHONE=+56 9 3874 4230
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/artestudio.cl
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@artestudio.cl
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/artestudio.cl
```

### Analytics (opcional)

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### No definir en producción

- `NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN` — expone el token al navegador.

---

## Scripts automatizados

### `scripts/sync-mp-from-simple.mjs`

Copia el access token de MercadoPago desde Simple a `Artestudio/.env.local`.

### `scripts/verify-mp-token.mjs`

Valida el token local contra `https://api.mercadopago.com/users/me`.

### `scripts/coolify-sync-artestudio.mjs`

Audita y sincroniza variables en Coolify. Lee credenciales del panel desde `Artestudio/.env.deploy` o, si no existe, `Simple/.env.deploy`.

```powershell
# Solo auditoría (sin cambios)
node scripts/coolify-sync-artestudio.mjs

# Aplicar variables faltantes/incorrectas + redeploy si hubo cambios
node scripts/coolify-sync-artestudio.mjs --apply

# Forzar rebuild completo (útil tras cambiar NEXT_PUBLIC_* o si el sitio no actualiza)
node scripts/coolify-sync-artestudio.mjs --apply --force
```

**Flujo completo recomendado** antes de un deploy importante:

```powershell
node scripts/sync-mp-from-simple.mjs
node scripts/verify-mp-token.mjs
node scripts/coolify-sync-artestudio.mjs --apply --force
git push origin main
```

---

## Configuración del servicio en Coolify

### Build

- **Build Pack:** `Dockerfile`
- **Dockerfile location:** `/Dockerfile`
- **Puerto expuesto:** `3000`

El `Dockerfile` usa `output: 'standalone'` de Next.js (ya configurado en `next.config.js`).

### Dominio y SSL

Dominios configurados: `artestudio.cl` y `www.artestudio.cl` con Let's Encrypt.

### Auto Deploy

Actívalo en el servicio para que cada `push` a `main` dispare un nuevo build.

---

## Desarrollo local vs producción

| Variable | Local (`.env.local`) | Producción (Coolify) |
|----------|----------------------|----------------------|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | `https://artestudio.cl` |
| `MERCADOPAGO_ACCESS_TOKEN` | Mismo token de empresa | Igual |
| `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` | Desde panel MP | Igual |

Copia `.env.example` → `.env.local` para desarrollo. Los secretos reales no van al repo.

---

## Troubleshooting

### El sitio en producción muestra contenido viejo

1. Confirma que el commit está en `main`: `git log -1 --oneline`
2. Fuerza redeploy: `node scripts/coolify-sync-artestudio.mjs --apply --force`
3. Espera a que el deployment termine (`finished` en el panel de Coolify)
4. Prueba en ventana privada o con hard refresh

### MercadoPago redirige mal después del pago

Revisa que `NEXT_PUBLIC_SITE_URL` en Coolify sea exactamente `https://artestudio.cl` y haz **Redeploy**.

### Cambié una variable `NEXT_PUBLIC_*` y no se ve

Las variables públicas se compilan en el build. **Restart no alcanza** — necesitas **Redeploy** completo.

### Build falla en Coolify

- Revisa logs del deployment en el panel.
- Prueba local: `npm run build`
- Si sospechas caché de Docker: redeploy con `--force` o activa "No Cache" temporalmente en Settings → Build.

### Token de MercadoPago inválido

```powershell
node scripts/sync-mp-from-simple.mjs
node scripts/verify-mp-token.mjs
node scripts/coolify-sync-artestudio.mjs --apply --force
```

---

## Checklist post-despliegue

- [ ] `https://artestudio.cl` responde 200 y muestra el contenido nuevo
- [ ] `node scripts/coolify-sync-artestudio.mjs` reporta **0 diferencia(s)**
- [ ] `node scripts/verify-mp-token.mjs` → `ok: true`
- [ ] Checkout Landing Express: paso 1 (setup) y paso 2 (hosting) redirigen correctamente
- [ ] No existe `NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN` en Coolify

---

## Referencia: primer setup (solo si creas el servicio de cero)

1. Instalar Coolify en el VPS: `curl -fsSL https://get.coolify.io | bash`
2. Conectar GitHub → repo `soychrispencer/artestudio` → rama `main`
3. Elegir **Dockerfile** como build pack
4. Configurar dominio y variables de la sección anterior
5. Deploy inicial

Para operación habitual usa los [scripts](#scripts-automatizados) y `git push`; no hace falta repetir el setup manual.

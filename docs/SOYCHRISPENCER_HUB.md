# Micrositio `/soychrispencer`

## Archivos agregados

- `src/app/soychrispencer/page.tsx`
- `src/content/soychrispencer.config.ts`
- `src/components/soychrispencer/LinkHubPage.tsx`
- `src/components/soychrispencer/soychrispencer.module.css`
- `public/soychrispencer/avatar.png`
- `public/soychrispencer/avatar-placeholder.svg`

## Archivos ajustados

- `src/components/layout/Header.tsx`
  - Se oculta el header solo si la ruta inicia con `/soychrispencer`.
- `src/components/layout/Footer.tsx`
  - Se oculta el footer solo si la ruta inicia con `/soychrispencer`.

## Como editar contenido (sin tocar componentes)

Editar solo este archivo:

- `src/content/soychrispencer.config.ts`

Bloques principales:

- `profile`: nombre, handle y avatar.
- `hero`: titular, subtitular, chips y CTAs.
- `projects`: cards de "Que hago hoy".
- `timeline`: trayectoria editable.
- `education`: formacion academica.
- `ventures`: emprendimientos.
- `realEstate`: experiencia inmobiliaria.
- `musicHighlights`: hitos artisticos.
- `skills`: lista de habilidades.
- `socials`: redes personales.
- `contactActions`: botones grandes de contacto.
- `metadata`: SEO para `/soychrispencer`.

## Reemplazar foto/avatar

Opciones:

1. Reemplazar el archivo `public/soychrispencer/avatar.png` por una imagen real manteniendo el nombre.
2. O cambiar `profile.avatar.src` en `src/content/soychrispencer.config.ts` para apuntar a otra ruta de `public/`.
3. Si falla la carga, se usa automaticamente `profile.avatar.fallbackSrc`.

Estado actual:

- Se usa `public/soychrispencer/avatar.png` desde `profile.avatar.src`.

## CV

- Estado actual: resumen visible + boton "Ver trayectoria completa" en modal/pop-up.
- El detalle completo se mantiene publico dentro del modal (sin PDF ni descarga).
- El recorrido se edita en `timeline`, `education`, `ventures`, `realEstate` y `musicHighlights`.

## TODO pendiente

- Confirmar URL exacta de LinkedIn personal.
  - Valor actual por defecto: `https://www.linkedin.com/in/soychrispencer`
  - Actualizar en `socials` y `contactActions` dentro de `src/content/soychrispencer.config.ts`.



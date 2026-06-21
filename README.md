# PSYKE — Sitio web

Sitio web de **PSYKE SAS** · Eva Margarita Cañón Falla, psicóloga (Bogotá, Colombia).
Psicoterapia, EMDR, Cultura del Cuidado y Psicoeducación para la Vida.

Construido con **Nuxt 4** como sitio estático (SSG), listo para desplegar en
Netlify, Vercel o GitHub Pages.

---

## Requisitos

- **Node ≥ 22.12** (recomendado) o **≥ 20.19**.
- **pnpm** (recomendado) o npm.

> ⚠️ **Nota sobre Node 22.8.x:** esta versión necesita la bandera
> `--experimental-require-module` porque parte de la cadena de Nuxt usa
> `require()` sobre módulos ESM. Con Node ≥ 22.12 ya no hace falta.
> Si usas 22.8, ejecuta los comandos con:
> ```bash
> NODE_OPTIONS=--experimental-require-module pnpm run generate
> ```

## Comandos

```bash
pnpm install        # instalar dependencias
pnpm dev            # servidor de desarrollo  → http://localhost:3000
pnpm generate       # generar sitio estático  → .output/public
pnpm preview        # previsualizar el build
```

Despliegue: sube el contenido de **`.output/public`** a tu hosting estático.

---

## Estructura

```
app/
  app.vue              # shell: header, footer, FAB de WhatsApp, JSON-LD SEO
  error.vue            # página 404
  assets/css/main.css  # tokens de diseño (paleta, tipografía, animaciones)
  components/          # SiteHeader, SiteFooter, ContactForm, PageHero, etc.
  composables/         # useReveal (scroll-reveal con IntersectionObserver)
  data/site.ts         # ⭐ TODO el contenido y los datos de contacto
  pages/               # index + acerca, psicoterapia, emdr, cultura-del-cuidado,
                       #   psicoeducacion, testimonios, contacto
public/
  images/              # fotos (reemplazar placeholders)
  favicon.svg, og-image.jpg, robots.txt
```

## Cómo editar el contenido

Casi todo el texto y los datos de contacto viven en
[`app/data/site.ts`](app/data/site.ts) — edita ahí (correo, WhatsApp, servicios,
testimonios, etc.) y se actualiza en todo el sitio.

## Reemplazar imágenes y logo

Las imágenes actuales son **placeholders**. Sustituye estos archivos
(mismo nombre y proporción aproximada):

| Archivo | Uso | Proporción sugerida |
|---|---|---|
| `public/images/hero.jpg` | Imagen principal (home) | vertical 5:6 |
| `public/images/eva.jpg`  | Retrato de Eva (home + acerca) | vertical ~9:11 |
| `public/og-image.jpg`    | Imagen al compartir en redes | 1200×630 |
| `public/favicon.svg`     | Ícono del navegador | — |

El logo es un SVG en [`app/components/BrandLogo.vue`](app/components/BrandLogo.vue);
reemplázalo por el logo oficial cuando esté disponible.

## Contacto / formulario

- El botón flotante y el formulario usan **WhatsApp** (+57 304 553 2521) y correo.
- El formulario abre WhatsApp o el correo con el mensaje ya redactado
  (no requiere backend). Para recibir envíos directamente por email más adelante,
  se puede conectar un servicio como Formspree o Web3Forms en
  [`app/components/ContactForm.vue`](app/components/ContactForm.vue).

## Accesibilidad y SEO

- Idioma `es`, metadatos por página, Open Graph y JSON-LD (`ProfessionalService`).
- Respeta `prefers-reduced-motion`; contraste AA; navegación por teclado y
  enlace "saltar al contenido".

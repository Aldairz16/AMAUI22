# AMAUI — Sitio del equipo y portafolio

Página de presentación del equipo de desarrollo **AMAUI** y portafolio de
proyectos. Construida con **Next.js (App Router) + TypeScript + Tailwind CSS**,
lista para desplegar en **Vercel**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

Para verificar el build de producción:

```bash
npm run build
```

## ✏️ Cómo editar el contenido

Todo el contenido vive en la carpeta `data/` — **no necesitas tocar los
componentes**:

| Archivo             | Qué controla                                           |
| ------------------- | ------------------------------------------------------ |
| `data/team.ts`      | Integrantes: nombre, rol, bio, skills, foto y redes.   |
| `data/projects.ts`  | Proyectos del portafolio (cards + página de detalle).  |
| `data/services.ts`  | Servicios de la sección "Qué hacemos".                 |

### Fotos del equipo

1. Guarda la imagen en `public/team/` (ej. `public/team/aldair.jpg`).
2. En `data/team.ts` pon `foto: "/team/aldair.jpg"`.
   Si dejas `foto: null` se muestra un avatar con las iniciales.

### Logo del equipo (el oso 🐻)

El logo actual (`public/logo.svg` y `app/icon.svg`) es un **placeholder**.
Para usar el logo real:

- **Opción rápida:** guarda el logo como `public/logo.png` y cambia
  `"/logo.svg"` por `"/logo.png"` en `components/Navbar.tsx`.
- O sobrescribe `public/logo.svg` con tu archivo.
- Para el favicon (pestaña del navegador), reemplaza `app/icon.svg`.

### Proyectos

Cada proyecto en `data/projects.ts` tiene:

- `slug` — identificador para la URL (`/proyectos/mi-slug`).
- `titulo`, `resumen` (card) y `descripcion` (página de detalle).
- `tecnologias` — lista de tecnologías.
- `imagen` — captura en `public/` (ej. `/proyecto1.png`) o `null`.
- `deployUrl` — enlace al proyecto **desplegado** (botón "Ver proyecto").
- `repoUrl` — enlace al repositorio (opcional).

## 🎨 Cambiar el color de acento

Edita `--color-accent` en `app/globals.css` para reestilizar todo el sitio.

## 🚀 Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. Deja la configuración por defecto y
   pulsa **Deploy**.

O desde la terminal:

```bash
npm i -g vercel
vercel
```

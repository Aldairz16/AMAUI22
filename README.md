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

Ya están cargadas en `public/team/` (`aldair.jpeg`, `anderson.jpeg`, `jose.jpeg`)
y referenciadas en `data/team.ts`. Para reemplazar alguna, guarda la nueva
imagen con el mismo nombre en `public/team/` (o cambia la ruta en `foto` en
`data/team.ts`). Si pones `foto: null` se muestra un avatar con las iniciales.

### Logo del equipo (el oso 🐻)

El logo real ya está cargado en `public/logo.jpeg` (usado en el navbar) y
`app/icon.jpg` (favicon de la pestaña del navegador). Para reemplazarlo,
sobrescribe esos archivos con el mismo nombre, o cambia la ruta en
`components/Navbar.tsx`.

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

# AMAUI

Sitio de presentación del equipo de desarrollo **AMAUI** y portafolio de
proyectos. Construido con **Next.js (App Router) + TypeScript + Tailwind
CSS v4**, desplegado en **Vercel**.

- **Repositorio:** [github.com/Aldairz16/AMAUI22](https://github.com/Aldairz16/AMAUI22)
- **Producción:** desplegado en Vercel con auto-deploy en cada push a `main`
  (agrega aquí la URL pública, ej. `https://amaui22.vercel.app`)

## Equipo

| Integrante | Rol | LinkedIn |
| --- | --- | --- |
| Aldair Alexander Pacherrez Nuñez | Líder de Producto, Gestión e IA | [in/aldairpacherrez](https://www.linkedin.com/in/aldairpacherrez) |
| Jean Carlos Anderson Espinoza Sangay | Diseño UX/UI, Creatividad y Frontend | [in/anderson-espinoza](https://www.linkedin.com/in/anderson-espinoza/) |
| Jose Hurtado Rivas | Backend, Arquitectura Técnica y Escalabilidad | [in/jose-hurtado-rivas](https://www.linkedin.com/in/jose-hurtado-rivas-8150b0231/) |

## Stack técnico

- [Next.js 15](https://nextjs.org/) (App Router, React Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/postcss`)
- Contenido 100% basado en datos tipados (`data/`) — sin CMS ni base de datos

## Requisitos

- Node.js 18.18 o superior (recomendado 20+)
- npm

## Empezar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

Otros comandos útiles:

```bash
npm run build   # build de producción (lo mismo que corre Vercel)
npm run start   # sirve el build de producción localmente
npm run lint    # linting
```

## Estructura del proyecto

```
amaui/
├── app/
│   ├── layout.tsx              # Layout raíz: fuente, metadata SEO, Navbar + Footer
│   ├── page.tsx                # Home: ensambla todas las secciones
│   ├── globals.css             # Tailwind + tema de color (ver "Tema" abajo)
│   ├── icon.jpg                # Favicon
│   └── proyectos/[slug]/
│       └── page.tsx            # Página de detalle de cada proyecto
├── components/                 # Componentes de UI (no llevan contenido "quemado")
│   ├── Navbar.tsx, Footer.tsx, Eyebrow.tsx
│   ├── Hero.tsx, Services.tsx, Synergy.tsx, Contact.tsx
│   └── TeamGrid.tsx / MemberCard.tsx, ProjectsGrid.tsx / ProjectCard.tsx
├── data/                       # Todo el contenido editable del sitio
│   ├── team.ts                 # Integrantes
│   ├── projects.ts             # Proyectos del portafolio
│   ├── services.ts             # Servicios ("Qué hacemos")
│   └── synergy.ts              # Sección "Cómo trabajamos"
└── public/
    ├── logo.jpeg                # Logo del equipo (navbar)
    └── team/                    # Fotos de perfil de cada integrante
```

## ✏️ Cómo editar el contenido

Todo el contenido vive en `data/` — **no hace falta tocar los componentes**
para actualizar texto, agregar un proyecto o cambiar una foto.

| Archivo | Qué controla |
| --- | --- |
| `data/team.ts` | Integrantes: nombre, rol, bio, "aporta al equipo", foto y redes. |
| `data/projects.ts` | Proyectos del portafolio (cards del home + página de detalle). |
| `data/services.ts` | Tarjetas de la sección "Qué hacemos". |
| `data/synergy.ts` | Tabla y textos de la sección "Cómo trabajamos". |

### Agregar o editar un proyecto

En `data/projects.ts`, cada objeto acepta:

- `slug` — identificador para la URL (`/proyectos/mi-slug`), sin espacios ni tildes.
- `titulo`, `resumen` (se ve en la card) y `descripcion` (página de detalle).
- `tecnologias` — arreglo de strings.
- `imagen` — ruta en `public/` (ej. `/proyectos/foo.png`) o `null` para mostrar
  un degradado con la inicial del proyecto.
- `deployUrl` — link al proyecto **ya desplegado**. Si no está definido, el
  botón "Ver proyecto desplegado" simplemente no se muestra. Puede ser una
  URL externa o una ruta interna (ver "Demos embebidas" abajo).
- `repoUrl` — link al repositorio (opcional).
- `color` — color de marca del proyecto (hex, opcional). Tiñe los badges de
  tecnología y el degradado de fondo en su card/detalle sin afectar el tema
  del resto del sitio (así cada proyecto puede tener su propia identidad).

Actualmente hay 5 proyectos cargados: **Laboral BCP, AMAY, Perfila UTP, Come
Bien y Rukiur** (los últimos 4 son slots pendientes de detalle).

### Demos embebidas (alternativa a un deploy externo)

AMAY, por ejemplo, tiene su propio repo ([AMAY-Portafolio](https://github.com/Aldairz16/AMAY-Portafolio))
desplegado por separado en Vercel — cada push a ese repo se auto-despliega
solo, sin tocar este proyecto. Es el enfoque recomendado: cero mantenimiento
cruzado entre repos.

Si en el futuro un proyecto no tiene dónde desplegarse aparte, también se
puede alojar su build directamente dentro de este sitio (se probó con AMAY
antes de mudarlo a su propio deploy):

1. En el proyecto original, agrega un script de build con el base path donde
   vivirá (ej. `vite build --base=/proyectos/<slug>/demo/`).
2. Si usa React Router (`createBrowserRouter`), pásale
   `basename: import.meta.env.BASE_URL.replace(/\/$/, "")` (sin slash final)
   para que funcione tanto en ese subpath como en un deploy standalone en `/`.
3. Copia el `dist/` resultante a `public/proyectos/<slug>/demo/` en este repo.
4. Agrega en `next.config.mjs` → `rewrites()` dos reglas para esa ruta: una
   para el path exacto y otra `:path*` — ambas apuntando a su `index.html`
   (fallback de SPA para que las rutas internas del router también funcionen
   al recargar).
5. Pon `deployUrl: "/proyectos/<slug>/demo"` en `data/projects.ts`.

   ⚠️ Esto acopla el build de AMAUI al del otro proyecto (hay que repetir
   estos pasos manualmente cada vez que el proyecto cambie), así que solo
   úsalo si de verdad no hay forma de desplegarlo aparte.

### Fotos del equipo y logo

Las fotos viven en `public/team/*.jpeg` y se referencian desde `data/team.ts`
(campo `foto`). Si dejas `foto: null` se muestra un avatar con las iniciales
en su lugar. El logo del navbar/favicon está en `public/logo.jpeg` y
`app/icon.jpg`; para reemplazarlo, sobrescribe esos archivos o cambia la
ruta en `components/Navbar.tsx`.

## 🎨 Tema y diseño

Los colores del sitio son variables CSS definidas en `app/globals.css` dentro
de un bloque `@theme`:

```css
--color-bg, --color-surface, --color-ink, --color-muted,
--color-border, --color-accent, --color-accent-hover
```

Cambia `--color-accent` para reestilizar todos los botones y acentos del
sitio de una sola vez.

> ⚠️ **Nota sobre Tailwind v4:** para referenciar estas variables en una
> clase usa **paréntesis**, no corchetes: `bg-(--color-accent)`,
> `text-(--color-ink)`. La sintaxis con corchetes (`bg-[--color-accent]`)
> no genera una regla CSS válida en Tailwind v4 y el elemento queda
> invisible (fondo transparente) — ese fue justamente un bug que se corrigió
> en este proyecto.

## 🚀 Despliegue en Vercel

El repositorio ya está conectado a Vercel: cada push a `main` dispara un
nuevo deploy automáticamente. Para configurarlo desde cero en otro entorno:

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. Deja la configuración por defecto
   (`npm run build`, sin variables de entorno requeridas) y pulsa **Deploy**.

O desde la terminal:

```bash
npm i -g vercel
vercel        # despliegue de preview
vercel --prod # despliegue a producción
```

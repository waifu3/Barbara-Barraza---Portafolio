# CLAUDE.md — Portafolio de Bárbara Barraza

Documentación del proyecto para asistentes de IA. Explica la estructura, flujos de trabajo y convenciones clave del repositorio.

---

## Descripción General

Sitio web de portafolio personal de una sola página (SPA), construido con **React 19** y **Vite 8**. Desplegado automáticamente en **GitHub Pages** al hacer push a `main`.

---

## Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| UI | React 19 (JSX, sin TypeScript) |
| Build | Vite 8 + `@vitejs/plugin-react` |
| Estilos | Tailwind CSS v4 (vía PostCSS) |
| Animaciones | Framer Motion v12 (alias `Motion`) |
| Íconos | Lucide React (instalado, no usado aún) |
| Linter | ESLint 9 (flat config) |
| Despliegue | GitHub Actions → GitHub Pages |

---

## Estructura de Directorios

```
/
├── .github/workflows/
│   └── deploy-pages.yml      # CI/CD: build y deploy a GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── Currículum Vitae CV Bárbara Barraza.pdf  # CV descargable
├── src/
│   ├── assets/               # Imágenes y logos (barbara.png, logo3.svg, etc.)
│   ├── App.jsx               # Componente único que contiene toda la UI
│   ├── App.css               # CSS heredado del scaffold de Vite (no se usa)
│   ├── index.css             # Reset global + fuente + fondo negro
│   ├── main.jsx              # Punto de entrada React
│   ├── postcss.config.js     # Tailwind + autoprefixer
│   └── tailwind.config.js    # Config de Tailwind
├── eslint.config.js
├── index.html                # Entrada Vite (incluye CDN de Tailwind — redundante)
├── package.json
└── vite.config.js
```

---

## Comandos de Desarrollo

```bash
npm run dev       # Servidor de desarrollo con HMR (http://localhost:5173)
npm run build     # Build de producción → dist/
npm run preview   # Sirve dist/ localmente para revisar el build
npm run lint      # ESLint sobre todos los archivos JS/JSX
```

No hay tests. No existe Vitest ni Jest.

---

## Arquitectura del Código

### Componente único (`src/App.jsx`)

Toda la UI vive en un solo archivo y un solo componente llamado `PortafolioBarbaraBarra`, exportado como default e importado como `App` en `main.jsx`.

Las secciones de la página, todas definidas inline:

| Sección | ID de anchor | Descripción |
|---|---|---|
| Navbar | — | Barra fija con navegación por scroll suave y menú hamburguesa |
| Hero | `#inicio` | Nombre, título, logo animado flotante, botones CTA |
| Sobre mí | `#sobre-mi` | Bio, foto de perfil, tarjetas de especialidades y educación |
| Proyectos | `#proyectos` | Tarjetas de SPINTECH y ELECTRO-SPEED STORE con links a GitHub |
| Skills | `#skills` | Frontend / Backend / Datos + grilla de habilidades blandas |
| Contacto | `#contacto` | Email, íconos sociales, descarga de CV |
| Footer | — | Copyright |

No existen subcarpetas `components/`, `pages/`, ni `hooks/`. Todo está en `App.jsx`.

### Animaciones con Framer Motion

Framer Motion se importa como alias:
```js
import { motion as Motion } from 'framer-motion'
```

Los presets de animación están definidos como objetos planos y se "spreadian" sobre los componentes:
```js
const fadeInUp = { initial: {...}, whileInView: {...}, transition: {...}, viewport: {...} }
// Uso:
<Motion.div {...fadeInUp}>...</Motion.div>
```

### Importación de assets con URL nativa de Vite

Para imágenes que necesitan hashing correcto en build:
```js
const logo = new URL('./assets/logo3.svg', import.meta.url).href
```

### Navegación por scroll suave

```js
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  setMenuOpen(false)
}
```

---

## Estilos

- **Tailwind CSS v4** es el método principal. Prácticamente todo el estilo se aplica con clases de utilidad directamente en JSX.
- **Paleta**: fondo negro (`bg-black`), texto blanco, gradientes púrpura→cian (`from-purple-400 to-cyan-400`).
- **`src/index.css`**: reset global, fuente `'Google Sans'` (sistema), fondo negro, scroll suave.
- **`src/App.css`**: archivo heredado del scaffold de Vite, **no se usa en la app actual**. Puede ignorarse o eliminarse.
- **Nota**: `index.html` también carga Tailwind vía CDN (`cdn.tailwindcss.com`). Esto es redundante con el pipeline de PostCSS y puede causar conflictos de versión.

---

## Variables de Entorno

| Variable | Cuándo se usa | Efecto |
|---|---|---|
| `GITHUB_PAGES=true` | Durante el build de CI | Establece `base: '/Barbara-Barraza---Portafolio/'` en Vite |

No se necesita ningún archivo `.env` para desarrollo local. `import.meta.env.BASE_URL` es provisto automáticamente por Vite y se usa para construir la URL de descarga del CV.

---

## Despliegue (CI/CD)

El archivo `.github/workflows/deploy-pages.yml` maneja el despliegue automático:

1. Se activa en push a `main` o por `workflow_dispatch`
2. Ejecuta `npm ci` → `npm run build` (con `GITHUB_PAGES=true`)
3. Publica el directorio `dist/` en GitHub Pages vía `actions/deploy-pages@v4`

---

## Convenciones a Seguir

1. **Sin TypeScript**: el proyecto usa JSX puro. No agregar `.ts` ni `.tsx`.
2. **Componente único**: la arquitectura actual es un archivo monolítico. Al agregar nuevas secciones, seguir el mismo patrón inline dentro de `App.jsx`, a menos que se decida explícitamente refactorizar a componentes.
3. **Tailwind para estilos**: no crear nuevos archivos CSS; usar clases de Tailwind.
4. **Framer Motion con alias `Motion`**: mantener la convención `motion as Motion`.
5. **Contenido en español**: todo el texto de la UI está en español.
6. **Sin tests**: el proyecto no tiene suite de tests. No crear archivos de test sin pedido explícito.
7. **Assets con `new URL(..., import.meta.url).href`**: usar este patrón para imágenes en `src/assets/` que se referencien en JSX.
8. **No editar `App.css`**: es código heredado sin efecto en la UI. Ignorarlo.
9. **`lucide-react` no se usa aún**: está instalado pero ningún ícono está importado. Disponible para uso futuro.

---

## Notas de Deuda Técnica

- `App.css` contiene estilos del scaffold de Vite que no afectan la app; puede eliminarse.
- `index.html` carga Tailwind por CDN de forma redundante con el pipeline de PostCSS.
- `@types/react` y `@types/react-dom` están instalados pero no hay TypeScript configurado.
- `lucide-react` está instalado pero sin uso.

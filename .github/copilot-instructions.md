# Copilot Instructions for react-tester

Purpose
- Enable AI coding agents to be productive immediately in this Vite + React app.

Stack & entry points
- Tooling: Vite 7, React 19, ESLint 9.
- App mounts in `index.html` to the `#root` div and is bootstrapped in `src/main.jsx`.
- The root component is `src/App.jsx`; styles live in `src/index.css` and `src/App.css`.
- Assets are under `src/assets/` and public static files (including `vite.svg`) are in `public/`.

Run, build, lint
- Dev server: use `npm run dev` (Vite) and open the shown localhost URL.
- Production build: `npm run build` creates `dist/`.
- Preview build: `npm run preview` serves the built app.
- Lint: `npm run lint` (see `eslint.config.js`). The config ignores `dist/` and enforces React Hooks rules and React Fast Refresh constraints.

Architecture & patterns
- Minimal component tree:
  - `App.jsx` defines a presentational `Card` component and renders a small list.
  - Example props pattern: `<Card title="Star Wars" rating={5} isCool={true} />`.
- Keep components colocated in `src/` with `.jsx` and import CSS alongside: `import './App.css'`.
- Use React 19 conventions (no need for explicit React import in JSX, Fast Refresh enabled via Vite plugin).
- Prefer functional components and props for data flow. State management is not set up; add libraries only if needed.

ESLint conventions (see `eslint.config.js`)
- Extends `@eslint/js` recommended, `eslint-plugin-react-hooks` recommended-latest, and `eslint-plugin-react-refresh` Vite preset.
- Language: modern ES modules with JSX.
- Custom rule: `no-unused-vars` is error, but variables matching `^[A-Z_]` are ignored. Use this for intentional top-level constants.

Vite specifics
- Config in `vite.config.js` uses `@vitejs/plugin-react`.
- Static asset imports (e.g., `/vite.svg`) resolve from `public/`. Relative imports from `src` for code and `src/assets` for images.

Common tasks for agents
- Add new components in `src/`, export default, and wire them in `App.jsx` or via a router (if added later).
- When adding images, place in `src/assets/` and import: `import logo from './assets/logo.svg'` then `<img src={logo} />`.
- When changing build behavior, update `vite.config.js` and ensure `npm run build` still succeeds.
- Keep CSS imports deterministic to avoid order issues (`index.css` imported in `main.jsx`, component CSS local to components).

Testing & gaps
- No test framework configured. If you add tests, prefer `vitest` + `@testing-library/react` and wire scripts in `package.json`.

Examples from repository
- Root render: `createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)` in `src/main.jsx`.
- Simple component: `const Card = ({ title, rating, isCool }) => <div className='card'><h2>{title}</h2></div>` in `src/App.jsx`.

Gotchas
- The repo is ESM (`"type": "module"`). Use `import`/`export` syntax only.
- React Fast Refresh is enabled; avoid side effects at module scope that break HMR.
- Keep `dist/` out of commits; it's ignored by ESLint but make sure `.gitignore` excludes it if added.

Ask if needed
- If you need routing, state libraries, or testing, propose minimal changes and add dependencies with pinned versions.
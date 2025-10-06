# Repository Guidelines

## Project Structure & Module Organization
This Next.js 15 app relies on the App Router. Route segments, layouts, and server actions live in `app/`, with API endpoints under `app/api/*`. Shared UI, hooks, adapters, and contexts reside in `launchkit/` and are imported through the `@/*` alias configured in `tsconfig.json`. Markdown-driven marketing copy sits in `content/`, static assets in `public/`, and Jest specs in `__tests__/`. Update global behaviour via root-level configs such as `next.config.js`, `tailwind.config.ts`, and the Sentry instrumentation files.

## Build, Test, and Development Commands
- `pnpm install` — install dependencies (keep `pnpm-lock.yaml` in sync).
- `pnpm dev` — start the local server on `http://localhost:3000`.
- `pnpm build` / `pnpm start` — create and serve a production bundle.
- `pnpm lint` — run the Next.js ESLint suite.
- `pnpm test`, `pnpm test:watch`, `pnpm test:coverage` — execute Jest once, in watch mode, or with coverage.

## Coding Style & Naming Conventions
Follow the existing two-space indentation and favour TypeScript (`.ts`/`.tsx`) for new modules; keep JSDoc comments when JavaScript is unavoidable. Create React components as functions, organised in PascalCase directories (e.g. `launchkit/components/debug/PostHogDebug.js`). Utilities stay camelCase. Use Tailwind CSS classes for styling and append `'use client'` only when browser APIs are required. Run `pnpm lint` before committing to catch formatting and import issues early.

## Testing Guidelines
Jest is configured via `jest.config.js` with a Next-aware transformer and custom setup in `jest.setup.js`, which mocks MongoDB and bcrypt integrations. Place tests alongside peers in `__tests__/` using the `*.test.js` suffix and mirror the source module in each `describe`. Cover success and failure paths for new adapters or API handlers, and call out any intentional coverage gaps revealed by `pnpm test:coverage`.

## Commit & Pull Request Guidelines
The git history favours concise, sentence-case summaries (e.g. `Refactor Next.js configuration...`). Keep commit scopes tight and imperative. Every PR should describe the change, link related issues or release notes, and paste the latest `pnpm lint`/`pnpm test` output. Include screenshots or Looms for UI-facing work. Load secrets through `.env.local`; never commit credentials or environment overrides.

## Security & Configuration Tips
Use `launchkit/site.config.template.js` as the starting point for per-deployment settings and document non-default values in the PR. Configure new SDK keys or service credentials in `.env.local` and Vercel project settings. When adjusting telemetry, update `instrumentation.js` and the relevant `sentry.*.config.js` file so errors continue to surface in production.

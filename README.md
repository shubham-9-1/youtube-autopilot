# YouTube Autopilot

AI-powered YouTube channel management SaaS. The first milestone establishes the web app, API service, and monorepo workspace.

## Requirements

- Node.js 26 LTS (npm is included)
- Git
- VS Code (recommended)

Next.js currently requires Node.js 20.9 or newer; this project targets Node.js 26 LTS. See the official [Node.js downloads](https://nodejs.org/en/download) and [Next.js installation docs](https://nextjs.org/docs/app/getting-started/installation).

## 1. Install dependencies

From the repository root:

```bash
npm install
```

## 2. Configure local environment

Copy the API example file:

```powershell
Copy-Item apps/api/.env.example apps/api/.env
```

Copy the web example file:

```powershell
Copy-Item apps/web/.env.local.example apps/web/.env.local
```

The initial skeleton does not require secrets or a database yet.

## 3. Run both applications

```bash
npm run dev
```

- Web app: http://localhost:3000
- API health check: http://localhost:4000/api/v1/health

You can also run each service separately:

```bash
npm run dev:web
npm run dev:api
```

## Workspace commands

```bash
npm run build
npm run typecheck
npm run lint
```

## Project structure

```text
youtube-autopilot/
├── apps/
│   ├── web/                 # Next.js frontend
│   └── api/                 # Express API
├── packages/                # Shared packages (added in a later task)
├── services/                # Python AI services (added in a later task)
├── workers/                 # Background workers (added in a later task)
├── infrastructure/          # Deployment and infrastructure (added later)
├── docs/                    # Product and engineering docs
├── package.json             # npm workspace root
└── README.md
```

## Development rules

- Do not commit `.env` files, OAuth tokens, API keys, or generated media.
- Keep all tenant-owned data scoped to a workspace when database work begins.
- YouTube uploads must remain behind an explicit creator approval step.
- Keep provider integrations behind adapters so AI and media providers can be changed later.

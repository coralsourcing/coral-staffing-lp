# Coral Staffing LP

Static Vite landing page served by a Cloudflare Worker.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```

The Cloudflare Pages output directory is `dist`.
The Worker serves the Vite build from `dist` through Workers Static Assets.

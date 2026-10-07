# Vite + React app

A React single-page app built with Vite, with client-side routing, served as static files.

[![Deploy on Naijacloud](https://img.shields.io/badge/Deploy%20on-Naijacloud-008751)](https://naijacloud.com/new?template=vite-react&ref=template-vite-react)

## Deploy

Click **Deploy** above, or open <https://naijacloud.com/new?template=vite-react&ref=template-vite-react>. Naijacloud builds it from this public repo and gives you a live HTTPS address. No GitHub connection needed; you can switch the service to your own fork later.

## What's inside

- React 19, Vite 7 and TypeScript
- Two routes with React Router, and a fallback to `index.html` so a refresh on any route works
- Builds to `dist/`; Naijacloud detects Vite and serves `dist/` with nginx
- No environment variables: the app name lives in `src/config.ts`

## Run it locally

```sh
git clone https://github.com/naijacloud/template-vite-react
cd template-vite-react
npm install
npm run dev
```

## License

MIT

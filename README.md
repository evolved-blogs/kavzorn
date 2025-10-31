## Kavzorn Monorepo

pnpm workspace hosting multiple Next.js apps and a shared NestJS backend.

All frontend apps use Tailwind CSS, with a shared preset and UI package.

### Apps (frontends)

- Landing: `apps/web` → `https://kavzon.click`
- Digital Clock: `apps/digital-clock` → `https://digitalclock.kavzorn.click`
- Analog Clock: `apps/analog-clock` → `https://analog.kavzorn.click`
- Net Speed Test: `apps/netfast` → `https://netfast.kavzorn.click`
- Background Removal: `apps/bg` → `https://bg.kavzorn.click`
- Image Resize: `apps/resize` → `https://resize.kavzorn.click`
- Format Changer: `apps/format` → `https://format.kavzorn.click`

All frontends are configured for static export (Next.js `output: 'export'`) suitable for S3 + CloudFront hosting.

### Backend (shared)

- API: `backend/api` (NestJS) → deploy on EC2 behind `api.kavzorn.click` (Route53)

### Prereqs

- pnpm v9+

### Install

```bash
pnpm install
```

### Develop

```bash
# run all dev servers in parallel
pnpm dev

# or run one app
pnpm --filter @kavzorn/web dev
pnpm --filter @kavzorn/digital-clock dev
```

Tailwind is already configured per app (PostCSS + Tailwind config + `app/globals.css`). No extra setup needed. If you add a new app, copy one of the existing apps' `postcss.config.cjs`, `tailwind.config.ts`, and import `./globals.css` in `app/layout.tsx`.

### Shared styling

- `@kavzorn/tailwind-config`: Tailwind preset used by all apps. Import in `tailwind.config.ts`:

```ts
import preset from "@kavzorn/tailwind-config";
export default { presets: [preset] };
```

- `@kavzorn/ui`: Shared UI components and styles inspired by shadcn/ui.
  - Import shared styles (CSS variables/utilities) in app layout:

```ts
import "@kavzorn/ui/src/styles.css";
```

- Use components:

```tsx
import { Button } from "@kavzorn/ui";
<Button variant="outline" size="sm">
  Click
</Button>;
```

### Build

```bash
pnpm build

# single app build (outputs to apps/<name>/out)
pnpm --filter @kavzorn/web build
```

### Deploy (Frontend)

Per app (static):

1. Build → `apps/<name>/out`
2. Upload `out/` to S3 bucket for the subdomain (e.g. `digitalclock.kavzorn.click`)
3. CloudFront distribution with S3 as origin, default root object `index.html`
4. Route53 A/AAAA alias from subdomain to CloudFront

Landing `kavzon.click` follows the same S3/CloudFront setup.

### Deploy (Backend)

1. Provision EC2 (Amazon Linux or Ubuntu), Node.js LTS
2. `pnpm --filter @kavzorn/api build` and run with a process manager (pm2/systemd)
3. Expose via Nginx reverse proxy (TLS via ACM on an ALB or certbot on Nginx)
4. Route53 `api.kavzorn.click` DNS to ALB or EC2 elastic IP

### Notes

- Interlinking is added in each app to help SEO across subdomains
- If any app needs server features later, we can switch that app from static export to SSR at its own pace

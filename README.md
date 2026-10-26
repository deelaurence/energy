# JusKel Waitlist

Static waitlist landing page for [JusKel](https://juskel.co.uk). Deployed from this repo to Vercel with no build step.

## Local preview

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

Or open `index.html` directly in a browser.

## Waitlist signups

Submissions are sent to [Web3Forms](https://web3forms.com) from the browser. Use a **work email** on the form — personal domains (Gmail, Outlook, etc.) are rejected client-side.

## Previous Next.js prototype

The full Next.js MVP UI is preserved on the [`archive/next-prototype`](https://github.com/deelaurence/energy/tree/archive/next-prototype) branch.

## Vercel

If deploys still run `next build`, set **Project → Settings → Build & Deployment**:

- Framework Preset: **Other**
- Build Command: empty
- Output Directory: `.`
- Install Command: empty

`vercel.json` in this repo encodes the same static settings.

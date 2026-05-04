# Copper Trace Works Website

Static website for `Copper Trace Works`, focused on browser-based engineering calculators and a future maker-products storefront.

## Purpose
- Publish a simple, low-cost main website for `coppertraceworks.com`
- Host calculator tools for engineers, hobbyists, and makers
- Keep the future Shopify store separate at `shop.coppertraceworks.com`

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Static hosting target: Cloudflare Pages

## Project Layout
- `index.html`: homepage
- `about.html`: company overview
- `contact.html`: contact page
- `assets/style.css`: shared styling
- `calculators/index.html`: calculator landing page
- `calculators/led-resistor.html`: LED resistor calculator
- `calculators/lc-resonance.html`: LC resonance calculator
- `calculators/voltage-divider.html`: voltage divider calculator
- `AGENTS.md`: project-specific working instructions for Codex

## Local Editing
No build step is required. Edit the HTML, CSS, and JavaScript files directly.

## Run
Open `index.html` in a browser, or serve the folder with any static file server.

Example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment
Primary deployment target:
- Cloudflare Pages direct upload

### Option 1: Cloudflare Dashboard
1. Log into Cloudflare.
2. Open `Workers & Pages`.
3. Create a Pages project.
4. Choose `Direct Upload`.
5. Upload the contents of this folder as the site root.

Recommended settings:
- Project name: `copper-trace-works`
- Build command: none
- Build output directory: `.`

### Option 2: Wrangler CLI
If `wrangler` is installed and authenticated, deploy from this folder:

```bash
npx wrangler pages deploy . --project-name copper-trace-works
```

If the Pages project does not exist yet, create it first:

```bash
npx wrangler pages project create copper-trace-works --production-branch main
```

### Custom Domain
After the first successful deploy, attach:
- `coppertraceworks.com`
- `www.coppertraceworks.com`

Leave `shop.coppertraceworks.com` separate for the future storefront.

## Git Notes
This workspace currently exposes a read-only `.git` mount, so Git operations may need to use a separate Git metadata directory when working from this environment.

## Source Notes
Initial website files were unpacked from:
- `coppertraceworks-site-starter.zip`

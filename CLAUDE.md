# Copper Trace Works — Claude Quick-Launch Context

## What this is
Static engineering calculator hub at `coppertraceworks.com`. Cloudflare Pages, no build step, no backend, vanilla HTML/CSS/JS only. Will eventually link to a Shopify store at `shop.coppertraceworks.com` for merch.

## Full build plan
`/home/jimmy/.claude/plans/lets-to-together-the-floofy-pebble.md` — read this first if resuming a session. It has all locked decisions, phase-by-phase build order, cascade tool spec, algorithms, and research Q&A.

## Where we are
- Phase 1 (foundation cleanup) is next — homepage replacement + copper theme unification
- Nothing has been built yet beyond the initial site starter files

## Locked decisions (do not revisit without asking)
- **Theme:** Dark copper — `--bg:#0f1115`, `--accent:#d18a3a`, `--accent2:#f0b56b`
- **Stack:** Vanilla JS + SVG only. No React/Vue/Angular. No build step.
- **UX feel:** rftools.io patterns on the copper-dark brand
- **Old index.html SPA:** Move to `calculators/playground.html`, do not delete
- **IP2:** Skipped in cascade tool
- **Cascade color rules:** Yellow = in compression (P_in past P1dB), Red = P_in exceeds Pmax_in (damage)
- **Parts library:** Static JSON first (`assets/parts.json`), Cloudflare D1 later at ~500+ parts
- **Cascade saves:** URL hash + localStorage + JSON download

## Build order (phases)
1. Foundation cleanup — homepage + copper theme across all pages
2. RF Cascade analyzer (table-based Phase 2a, SVG canvas Phase 2b)
3. Mixer spur calculator (Henderson model)
4. Impedance matching synthesizer (L/Pi/T, closed-form)
5. LC filter synthesizer (Butterworth/Chebyshev, LP/HP/BP/BS)
5b. HP48 emulator (jsEmu48 — check license before shipping)
5c. RF component reference library (parts.json → calculators/parts.html)
6. Homepage search bar (after 8+ tools exist)
7. Deploy to Cloudflare Pages + attach coppertraceworks.com

## Key files
- `index.html` — replace with landing page (currently a 1004-line SPA, wrong)
- `assets/style.css` — rewrite with unified copper palette
- `calculators/index.html` — rebuild as category grid (Electronics / RF / Power / 3D Printing)
- `calculators/rf-cascade.html` — new, flagship RF tool
- `wrangler.jsonc` — already configured for `copper-trace-works` project, no changes needed
- `AGENTS.md` — full brand/tone/architecture spec, read this for copy and positioning decisions

## Dev server
Port 8000 is in use. Use port 8001:
```bash
python3 -m http.server 8001
```
Then open http://localhost:8001

## Positioning
> Free, modern, RF-first engineering tools — no account, no paywall, no fluff. Built by an engineer, for engineers.

Target: design engineers who bookmark it as a daily driver. Sits between hobby tools (too simple) and Keysight/AWR (too expensive). Key differentiator over rftools.io: deeper RF tools (cascade with SVG canvas, spur calc, HP48), open math (formula shown on every page), copper-dark brand.

# Copper Trace Works — Project State (Jun 28, 2026)

## Project Identity
Engineering calculator website for PCB and RF design. 18 calculators, all client-side JavaScript. No backend dependencies. Hosted on Cloudflare Pages.

## Current State
- **Production:** https://coppertraceworks.com (and www.coppertraceworks.com)
- **Test alias:** https://production.copper-trace-works.pages.dev
- **GitHub:** turbosupraman/coppertraceworks (branch: main)
- **Source (aiserver):** ~/aistuff/llmserver/landing/coppertraceworks-preview/
- **Local working copy:** /tmp/coppertraceworks-deploy/

## Deployment
```bash
# Staging (preview)
npx wrangler pages deploy . --project-name copper-trace-works --branch staging

# Production
npx wrangler pages deploy . --project-name copper-trace-works --branch main
```

Always deploy to staging first, verify, then deploy to main.

## CF Config
- Zone ID: ff01d0b44825e2f2cb4674698fa4c923
- Project: copper-trace-works
- Production branch: main
- Domains: coppertraceworks.com, www.coppertraceworks.com (CNAME → copper-trace-works.pages.dev, proxied)

## All 18 Calculators

1. LED Resistor
2. LC Resonance
3. Voltage Divider
4. Ohm's Law + Power
5. RC Cutoff
6. dBm ↔ Voltage
7. Unit Converter (dB, λ, Γ/VSWR, NF/Te)
8. Bandwidth & Max Conductor Length
9. Trace Impedance Planner (5 equation models, HFSS GCPW)
10. Diff Pair / Xtalk
11. Via Properties
12. Min Copper Spacing
13. RF Cascade Analyzer (Friis + IIP3)
14. Component Models (L/C/R with parasitics, Smith chart)
15. Radar Range
16. Pulse Droop
17. Decoupling Explorer (PDN)
18. S-Parameters (Touchstone import)
19. Fusing Current (IPC-2152 + Onderdonk)
20. Conductor Properties (DC R, L)
21. Thermal Management (IPC-2152)
22. Planar Inductors (Modified Wheeler)
23. PPM-XTAL
24. Mechanical Info (AWG wire gauge, drills)
25. Embedded Resistors (Ohmega/Ticer)
26. 4-20mA Sensor

## Trace Impedance Model Options
- Microstrip: Wheeler/Wadell, IPC-2141, Hammerstad & Jensen
- CPW/GCPW: Wadell+Hilberg (standard), HFSS corrections (Getsinger dispersion + thickness + finite-ground)
- Frequency input (ci-freq) drives dispersion in HFSS model
- Updated: model dropdown no longer disabled for CPW/GCPW (was disabled for all non-microstrip)

## Known Issues / TODOs
- GCPW cross-section SVG could use further refinement
- Custom domain SSL may need time to provision after DNS changes
- All calculators auto-run on load with default examples

## Environment
- Hermes TUI on macOS (Jimmy's Mac)
- Tailscale: aiserver=100.126.122.113, llmbox=100.94.175.121, lab-laptop=100.78.180.68
- Telegram: @JDAI2_hermes2_bot (jimmy's user ID: 5827335062, launchd service installed)
- Wrangler OAuth token: available via ~/.wrangler/config/default.toml (Pages deploy only, no DNS write)

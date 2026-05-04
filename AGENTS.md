# Copper Trace Works Project Instructions

These instructions apply to work in `/home/jimmy/aistuff/coppertraceworks/Web`.

## Project Identity
- Business name: `Copper Trace Works LLC`
- Public brand: `Copper Trace Works`
- Short mark: `CTW`
- Support email: `support@coppertraceworks.com`
- Preferred tagline: `Simple tools for engineers, hobbyists, and makers.`
- Alternate tagline: `Hobbyist electronics, calculator tools, and maker-built products.`

## Core Site Goal
The website serves two related purposes:

1. A practical calculator and tools site for engineers, electronics hobbyists, makers, RF users, and 3D printing users.
2. A future small product storefront for hobby electronics, kits, bench gadgets, and 3D-printed accessories.

The calculator site comes first. The store is secondary until products are ready.

## Tone And Positioning
- Technical
- Practical
- Clear
- Engineering-minded
- Friendly to hobbyists and working engineers

Avoid sounding like:
- A design agency
- A toy store
- A large enterprise electronics company
- A company claiming compliance or certification it has not documented

## Architecture
- Main site: `coppertraceworks.com`
- Main site alias: `www.coppertraceworks.com`
- Future store: `shop.coppertraceworks.com`
- Support email: Google Workspace at `support@coppertraceworks.com`

Host the public website on `Cloudflare Pages`.
Use `Cloudflare Pages Direct Upload` first unless the user explicitly asks for a Git-based deployment flow.

## Technical Direction
- Prefer static site architecture first
- Use `HTML`, `CSS`, and `vanilla JavaScript`
- No backend unless there is a clear reason
- No database
- No login
- No required build system
- Do not introduce React or heavier frameworks unless the user asks for them or there is a strong project reason

Calculators should run entirely in the browser.

## Navigation
Every page should use a consistent nav with:

`Copper Trace Works`

`Home | Calculators | About | Shop | Contact`

Recommended links:

```html
<a href="/">Home</a>
<a href="/calculators/">Calculators</a>
<a href="/about.html">About</a>
<a href="https://shop.coppertraceworks.com">Shop</a>
<a href="/contact.html">Contact</a>
```

If the store is not ready, use `Shop coming soon` wording where appropriate.

## Initial Site Structure
Primary pages:
- `index.html`
- `about.html`
- `contact.html`
- `calculators/index.html`
- `calculators/led-resistor.html`
- `calculators/lc-resonance.html`
- `calculators/voltage-divider.html`

Future sections may include calculators for:
- Electronics
- RF
- Power
- 3D printing
- Projects

## Initial Calculator Scope
Prioritize these calculators first:
- LED resistor
- LC resonance
- Voltage divider

Future high-value calculators include:
- Ohm's law
- RC cutoff
- dBm / watts / volts conversion
- Thermal noise / noise floor
- Free-space path loss
- Coax loss
- ADC SNR / ENOB
- Microstrip impedance
- Battery runtime
- Wire voltage drop
- 3D print cost

## Design Direction
- Dark technical theme
- Copper accent color
- Clean cards
- Responsive layout
- Readable on desktop and mobile
- Low clutter

Preferred CSS variables:

```css
:root {
  --bg: #0f1115;
  --panel: #171a21;
  --panel2: #20242d;
  --text: #f3f4f6;
  --muted: #b7bdc9;
  --line: #303642;
  --accent: #d18a3a;
  --accent2: #f0b56b;
}
```

## Starter Copy
Homepage headline:
`Simple tools for engineers, hobbyists, and makers.`

Homepage body:
`Copper Trace Works is a practical engineering and hobby electronics site: free calculator tools, project notes, and small-batch maker products.`

Homepage card themes:
- Calculator tools
- Maker products
- Project notes

About page starter copy:
`Copper Trace Works LLC is a small Alabama-based maker business focused on practical calculator tools, hobby electronics, display kits, bench gadgets, 3D-printed accessories, and engineering-minded product ideas.`

`Products and tools are intended for hobbyist, educational, and experimental use unless otherwise stated.`

Contact page starter copy:
`Email: support@coppertraceworks.com`

`For product questions, calculator corrections, or documentation requests.`

Footer text:
`© 2026 Copper Trace Works LLC. Hobbyist electronics, calculator tools, and maker-built products.`

`Products and calculators are provided for hobbyist, educational, and experimental use unless otherwise stated.`

## Safety And Compliance Language
Do not overstate certification or compliance.

Avoid claims such as:
- Certified
- FCC compliant
- CE compliant
- Industrial grade
- Medical grade
- Safety critical

Unless they are explicitly true and documented.

Preferred disclaimer language:

`Copper Trace Works products are intended for hobbyist, educational, and experimental use unless specifically stated otherwise.`

`Products sold by Copper Trace Works LLC are not intended for medical, life-safety, aviation, automotive safety-critical, emergency, or other mission-critical applications unless explicitly certified and documented for that use.`

`Some products may be kits, prototypes, maker devices, 3D-printed parts, or small-batch electronics. Customers are responsible for using products safely, following instructions, and complying with any applicable local rules or regulations.`

## Working Style Preferences
The user prefers:
- Direct, practical help
- Step-by-step instructions
- Low jargon without losing technical accuracy
- Low-cost, simple setup
- A site that stays easy to edit over time

The user is technically strong in electrical and RF engineering, but is new to website deployment and Cloudflare Pages.

## Decision Rules
When helping on this project, prioritize:

1. Getting a simple static site live.
2. Keeping the site easy to edit.
3. Avoiding unnecessary frameworks.
4. Making calculator pages accurate and useful.
5. Keeping cost low.
6. Keeping Shopify separate from the main site until products are ready.
7. Keeping product language aligned with hobbyist, educational, and experimental use.

Do not assume:
- The user wants a full React app
- Shopify should own the root domain
- A home AI server should host the production site

Use Cloudflare Pages for the public site unless the user asks to change that direction.

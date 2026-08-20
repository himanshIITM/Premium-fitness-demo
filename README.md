# Premium Fitness — Website Demo

A single-page demo website built for gym / personal training businesses. Dark, premium theme with a barbell-plate signature motif, live BMI calculator, pricing section, and a scroll-aware mobile navigation bar.

## Files

- `index.html` — page markup
- `style.css` — all styling
- `script.js` — BMI calculator + scroll-spy navigation

## Run it

No build step needed. Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Customize for a client

Search for these placeholders and swap in the real business details:

- `PREMIUM FITNESS` — brand name (header + footer logo)
- `Your Gym Location`, `Your address will appear here`, `City, State, ZIP Code` — address block
- `+1 XXX-XXX-XXXX` — phone number (appears in header and contact section, both as visible text and `tel:` links)
- `Coach 1`, `Coach 2` — trainer names and bios
- Pricing figures in the `#pricing` section

# Upclose Blokkenschema

React/Vite webapp voor een persoonlijk blokkenschema.

## Uploaden naar GitHub via de website

1. Maak een nieuwe GitHub repository aan, bijvoorbeeld `upclose-planner`.
2. Pak deze zip uit op je computer.
3. Upload **alle bestanden en mappen uit de map `upclose-planner`** naar de root van je GitHub repository.
   - Dus niet de zip zelf uploaden als eindresultaat.
   - De bestanden `package.json`, `index.html` en `vite.config.js` moeten direct in de hoofdmap van je repo staan.
4. Ga naar Vercel → Add New → Project.
5. Kies je GitHub repository.
6. Gebruik deze settings als Vercel erom vraagt:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Klik Deploy.

## Lokaal testen, optioneel

```bash
npm install
npm run dev
```

## Gedrag van de planner

- Elke bezoeker krijgt een eigen selectie via `localStorage`.
- Selecties worden niet op een centrale server opgeslagen.
- Overlap van maximaal 30 minuten wordt geel.
- Overlap van meer dan 30 minuten wordt rood en verschijnt als keuzemoment.

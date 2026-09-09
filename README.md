# marien.se — ny sajt

Portfolio-sajten för Marie Bäckström (UX/UI-designer), byggd i Next.js som ersättning för den gamla WordPress-sajten. Allt textinnehåll är migrerat från en WordPress-export (startsida, kontaktsida och 21 portfolio-projekt).

## Utveckling

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Struktur

- `src/lib/content.ts` — allt textinnehåll: projekt, citat/omdömen, kunder och kontaktuppgifter. Redigera texten här.
- `src/app/page.tsx` — startsidan (hero, projektgalleri, omdömen, kunder).
- `src/app/portfolio/[slug]/page.tsx` — enskild projektsida, genereras automatiskt från `content.ts`.
- `src/app/kontakt/page.tsx` — kontaktsidan.
- `src/components/` — UI-komponenter.

## Bilder saknas ännu

Bilderna från den gamla sajten låg på `marien.se/wp-content/uploads/...` och kunde inte hämtas automatiskt vid migreringen. Alla bildplatser visas just nu som streckade platshållare med texten "Bild saknas · filnamn.png" — filnamnet är samma som på originalsajten, för att göra det enkelt att hitta rätt bild.

Så här byter du ut en platshållare mot en riktig bild:

1. Lägg bildfilen i `public/images/` (skapa mappen om den inte finns).
2. I `src/lib/content.ts`, byt ut `coverNote` (och ev. `image`-block) mot en riktig bild genom att ersätta `<ImagePlaceholder note=... />` med Next.js `<Image src="/images/filnamn.png" ... />` i `src/components/ProjectCard.tsx`, `src/app/portfolio/[slug]/page.tsx` och `src/components/ProjectBody.tsx`.

## Deploy

Sajten är en helt statisk Next.js-app och kan driftsättas på t.ex. [Vercel](https://vercel.com/new), Netlify eller valfri Node-hosting.

```bash
npm run build
npm start
```

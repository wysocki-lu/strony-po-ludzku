#!/usr/bin/env node
// Audyt strony wg reguł skilla strony-po-ludzku. Zero zależności.
//
// Użycie: node skrypty/audyt.mjs strona.html [kolejna.html ...]
//
// Skan statyczny HTML: placeholdery, resztki angielskiego, wizualne AI-tells
// w klasach i stylach, typografia, meta, alty. BŁĄD = twarde naruszenie,
// UWAGA = do oceny człowieka. Automat nie widzi renderu: układ i kolory
// oceniaj okiem wg references/. Kod wyjścia 1 przy błędach.

import fs from 'node:fs';

const PLACEHOLDERY = [
  'lorem ipsum', 'twoja firma', 'nazwa firmy', 'company name', 'your company',
  '123 456 789', '123-456-789', '000 000 000', '111 222 333',
  'example@', 'test@test', 'email@', 'jan.kowalski@example',
];

const ANGIELSKIE_RESZTKI = [
  '>home<', '>about<', '>services<', '>contact<', '>get started<',
  '>learn more<', '>read more<', '>submit<', '>sign up<',
  'all rights reserved', 'this field is required', 'enter your email',
  'made with', 'privacy policy',
];

const FRAZESY = [
  'pasja do', 'z pasją', 'pasjonat', 'indywidualne podejście',
  'indywidualnego podejścia', 'wychodzimy naprzeciw', 'wychodząc naprzeciw',
  'najwyższa jakość', 'najwyższej jakości', 'szeroki wybór', 'szeroka gama',
  'bogata oferta', 'kompleksowa obsługa', 'kompleksowe usługi',
  'kompleksowe rozwiązania', 'gwarancja satysfakcji', 'dla każdego coś',
  'nie boimy się wyzwań', 'innowacyjne rozwiązania', 'kim jesteśmy?',
  'co nas wyróżnia', 'dlaczego my?', 'dopasowane do twoich potrzeb',
  'rozwijaj swój biznes', 'zaufali nam', 'jesteśmy z tobą na każdym kroku',
];

const FIOLETY = [
  '#6366f1', '#7c3aed', '#8b5cf6', '#a855f7', '#9333ea', '#818cf8', '#c084fc',
  'from-purple', 'to-purple', 'via-purple', 'from-violet', 'to-violet',
  'from-indigo', 'to-indigo', 'from-fuchsia',
];

const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2728}]/gu;

function tekstZHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
}

function policz(hay, needle) {
  let idx = 0;
  let ile = 0;
  while ((idx = hay.indexOf(needle, idx)) !== -1) {
    ile += 1;
    idx += needle.length;
  }
  return ile;
}

function audyt(html, nazwa) {
  const bledy = [];
  const uwagi = [];
  const dol = html.toLowerCase();
  const tekst = tekstZHtml(html);
  const tekstDol = tekst.toLowerCase();

  // Placeholdery i resztki EN.
  for (const p of PLACEHOLDERY) {
    const ile = policz(dol, p);
    if (ile) bledy.push(`placeholder "${p}": ${ile}x`);
  }
  const jestPolska = /[ąćęłńóśźż]/i.test(tekst);
  if (jestPolska) {
    for (const p of ANGIELSKIE_RESZTKI) {
      const ile = policz(dol, p);
      if (ile) bledy.push(`resztka angielskiego "${p.replace(/[<>]/g, '')}": ${ile}x`);
    }
    if (/<html[^>]*lang=["']en/.test(dol)) bledy.push('lang="en" przy polskiej treści');
  }

  // Frazesy w treści.
  for (const f of FRAZESY) {
    const ile = policz(tekstDol, f);
    if (ile) bledy.push(`frazes "${f}": ${ile}x`);
  }

  // Typografia treści.
  const emDash = (tekst.match(/—/g) ?? []).length + (tekst.match(/–/g) ?? []).length;
  if (emDash) bledy.push(`em/en-dash w treści: ${emDash}x`);

  // Emoji w nagłówkach i przyciskach.
  const naglowki = [...html.matchAll(/<(h[1-3]|button)[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => m[2]);
  const emojiWNaglowkach = naglowki.reduce((sum, h) => sum + (h.match(EMOJI_RE) ?? []).length, 0);
  if (emojiWNaglowkach) bledy.push(`emoji w nagłówkach/przyciskach: ${emojiWNaglowkach}x`);

  // Title Case w nagłówkach.
  for (const h of naglowki) {
    const czysty = tekstZHtml(h).trim();
    const slowa = czysty.split(/\s+/).filter((w) => w.length > 2 && /[a-ząćęłńóśźż]/i.test(w));
    if (slowa.length < 4) continue;
    const wielkie = slowa.filter((w) => /^[A-ZĄĆĘŁŃÓŚŹŻ]/.test(w)).length;
    if (wielkie / slowa.length >= 0.75) bledy.push(`nagłówek Title Case: "${czysty.slice(0, 50)}"`);
  }

  // H1.
  const h1 = (dol.match(/<h1[\s>]/g) ?? []).length;
  if (h1 === 0) uwagi.push('brak H1');
  if (h1 > 1) bledy.push(`więcej niż jeden H1: ${h1}`);

  // Wizualne telle w klasach/stylach.
  for (const f of FIOLETY) {
    const ile = policz(dol, f);
    if (ile) uwagi.push(`fioletowy akcent "${f}": ${ile}x (jeśli to nie kolor brandu, usuń)`);
  }
  const gradienty = policz(dol, 'linear-gradient') + policz(dol, 'bg-gradient');
  if (gradienty >= 3) uwagi.push(`gradienty: ${gradienty}x (typowy nadmiar generatora)`);
  const rounded = (dol.match(/rounded-(2xl|3xl|full)/g) ?? []).length;
  if (rounded >= 6) uwagi.push(`duże zaokrąglenia rounded-2xl/3xl/full: ${rounded}x`);
  const borderLeft = (dol.match(/border-left\s*:\s*[2-9]px\s+solid|border-l-[2-9]/g) ?? []).length;
  if (borderLeft) uwagi.push(`kolorowa lewa krawędź boxów: ${borderLeft}x (AI-tell, spłaszcz)`);
  const aos = (dol.match(/data-aos=/g) ?? []).length;
  if (aos >= 5) uwagi.push(`animacje AOS na ${aos} elementach (zostaw 1-2 albo zero)`);
  if (dol.includes('backdrop-blur') || dol.includes('backdrop-filter')) {
    uwagi.push('glassmorphism (backdrop-blur): usuń, jeśli nie wynika z brandu');
  }
  for (const font of ['poppins', 'inter', 'roboto']) {
    if (dol.includes(`family=${font}`) || dol.includes(`'${font}'`) || dol.includes(`"${font}"`)) {
      uwagi.push(`font domyślny generatorów: ${font}`);
    }
  }

  // Fake social proof.
  const liczniki = tekst.match(/\b\d{2,}[kK]?\+/g) ?? [];
  if (liczniki.length) {
    uwagi.push(`liczby-liczniki ${liczniki.slice(0, 4).join(', ')}: potwierdź każdą u właściciela firmy`);
  }

  // Meta i obrazy.
  if (!/<link[^>]+rel=["'](icon|shortcut icon)/i.test(html)) uwagi.push('brak favicon');
  if (!/<meta[^>]+name=["']description/i.test(html)) uwagi.push('brak meta description');
  if (!/<meta[^>]+property=["']og:image/i.test(html)) uwagi.push('brak og:image (podgląd linku w social/komunikatorach)');
  const zleAlty = (dol.match(/alt=["'](image|photo|img|obraz|zdjęcie|picture)?["']/g) ?? []).length;
  if (zleAlty) bledy.push(`puste lub generyczne alt: ${zleAlty}x`);
  const linkiDoNikad = (dol.match(/href=["']#["']/g) ?? []).length;
  if (linkiDoNikad >= 3) bledy.push(`linki do "#": ${linkiDoNikad}x`);

  // Sieroty: jednoliterowy spójnik ze zwykłą spacją (próbka z akapitów).
  const akapity = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => tekstZHtml(m[1]));
  let sieroty = 0;
  for (const a of akapity) sieroty += (a.match(/\s[aiouwz]\s/gi) ?? []).length;
  if (jestPolska && sieroty >= 5 && !html.includes('&nbsp;')) {
    uwagi.push(`brak twardych spacji po spójnikach (${sieroty} miejsc w akapitach): dodaj &nbsp;`);
  }

  return { nazwa, bledy, uwagi };
}

const pliki = process.argv.slice(2);
if (!pliki.length) {
  console.log('Użycie: node skrypty/audyt.mjs strona.html [kolejna.html ...]');
  process.exit(1);
}

let sumaBledow = 0;
for (const plik of pliki) {
  const { bledy, uwagi } = audyt(fs.readFileSync(plik, 'utf8'), plik);
  sumaBledow += bledy.length;
  console.log(`\n=== ${plik} [${bledy.length ? `BŁĘDY: ${bledy.length}` : 'OK'}] ===`);
  for (const b of bledy) console.log(`  BŁĄD  ${b}`);
  for (const u of uwagi) console.log(`  UWAGA ${u}`);
}
process.exit(sumaBledow > 0 ? 1 : 0);

# strony-po-ludzku

Skill dla Claude (Claude Code / claude.ai): ostateczny audyt i korekta strony internetowej zrobionej z pomocą AI, żeby wyglądała jak zaprojektowana przez człowieka. Siostrzany projekt [pisz-po-ludzku](https://github.com/wysocki-lu/pisz-po-ludzku).

## Problem

Strony z generatorów są poprawne technicznie i rozpoznawalne na pierwszy rzut oka: fioletowy gradient, hero z dwoma przyciskami, trzy karty z emoji, licznik "10k+ zadowolonych klientów", przycisk Get Started i stopka bez danych firmy. Do tego warstwa, którą widać dopiero po polsku: Title Case w nagłówkach, wiszące spójniki, frazesy o pasji i indywidualnym podejściu, wymyślone opinie.

Ten skill prowadzi audyt w sześciu warstwach (układ, styl, treść i wiarygodność, polska typografia www, detale techniczne, automat) i kończy się kontrolką 12 punktów przed oddaniem strony.

## Co wyróżnia ten audyt

- **Wiarygodność ponad kosmetykę**: każda liczba i opinia na stronie musi pochodzić od właściciela firmy. Wymyślony social proof to nie kwestia stylu, tylko wprowadzanie konsumenta w błąd.
- **Polska warstwa**: twarde spacje po jednoliterowych spójnikach (na stronie obowiązkowe, odwrotnie niż w plain-texcie), formaty dat i cen, NIP w stopce, RODO przy formularzu, polska 404.
- **Reguły z praktyki agencyjnej**, nie z teorii: zakaz kolorowej lewej krawędzi boxów, jeden mały promień zaokrągleń w całym serwisie, eyebrow microcaps do wycięcia, CTA bez słów-barier.
- **Dwa poziomy ustaleń**: BŁĄD (obiektywne naruszenie) i UWAGA (decyzja projektanta, np. gradient może być kolorem brandu).

## Automat kontrolny

```bash
node skrypty/audyt.mjs strona.html
```

Zero zależności. Statyczny skan: placeholdery, resztki angielskiego, frazesy w treści, emoji w nagłówkach, Title Case, em-dash, fioletowe akcenty, glassmorphism, nadmiar animacji, puste alty, brak favicon/meta/og, linki do "#", wiszące spójniki.

Wynik na typowej stronie z generatora: 24 błędy i 12 uwag. Wynik na stronie składanej ręcznie: 2 błędy (tak, na ręcznych stronach też coś znajduje).

## Instalacja (Claude Code)

```bash
git clone https://github.com/wysocki-lu/strony-po-ludzku ~/.claude/skills/strony-po-ludzku
```

Skill aktywuje się przy audycie i poprawkach stron. Wywołanie ręczne: `/strony-po-ludzku`. Jako zwykły markdown działa też z innymi narzędziami (Codex, Cursor, Windsurf).

## Struktura

- `SKILL.md`: proces audytu + kontrolka 12 punktów
- `references/layout.md`: sztancowe sekcje i jak je przebudować
- `references/styl.md`: wizualne AI-tells (kolory, rogi, cienie, fonty, animacje)
- `references/tresc-i-wiarygodnosc.md`: wymyślone liczby, placeholdery, resztki EN, CTA
- `references/polska-typografia-www.md`: sieroty, nagłówki, cudzysłowy, formaty
- `references/detale-techniczne.md`: meta, alty, RODO, stopka z NIP, 404
- `references/przyklady.md`: before/after
- `skrypty/audyt.mjs`: automat

## English summary

A Claude skill for the final audit of AI-built websites, so they read and look human-made. Six layers: layout (breaking the template blocks every generator repeats), visual style (no purple gradients, no transparency, max 2px border radius, large centered icons, no box-in-a-box nesting), content credibility (invented social proof is treated as a legal risk, not a style issue), Polish web typography (non-breaking spaces after single-letter conjunctions are REQUIRED on the web, the opposite of plain text), technical details and a zero-dependency HTML checker. Calibration test: 24 errors on a typical generated landing page, 2 on a hand-crafted site.

## Licencja

MIT, (c) 2026 Grzegorz Wysocki / [wysocki.lu](https://wysocki.lu)

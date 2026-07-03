---
name: strony-po-ludzku
description: Ostateczny audyt i korekta strony internetowej zrobionej z pomocą AI, żeby wyglądała jak zaprojektowana przez człowieka. Używaj po wygenerowaniu lub przed oddaniem KAŻDEJ strony/landinga: usuwa AI-tells wizualne (gradienty, sztancowe sekcje, zaokrąglenia, eyebrow), treściowe (frazesy, wymyślone liczby, placeholdery, resztki angielskiego) i techniczne (favicon, meta, alt, RODO, stopka bez danych firmy). Siostrzany skill pisz-po-ludzku.
metadata:
  author: Grzegorz Wysocki / emedia (wysocki.lu)
  language: pl
---

# Strony po ludzku

Strona wygenerowana przez AI jest zwykle poprawna technicznie i rozpoznawalna na pierwszy rzut oka: fioletowy gradient, trzy kolumny z emoji, "10k+ zadowolonych klientów" i przycisk Get Started. Ten skill to ostatnia kontrola przed oddaniem strony: przechodzisz sześć warstw, usuwasz naleciałości AI i uzupełniasz to, co odróżnia prawdziwą polską stronę firmową od wydmuszki.

Kolejność audytu: od tego, co widać z daleka, do detali.

## 1. Układ: rozbij sztance

AI składa strony z tych samych klocków: hero z dwoma przyciskami, siatka 3 ficzerów z ikonami, liczniki, pasek logotypów, testimoniale, pricing z wyróżnionym środkiem, FAQ, stopka z czterema kolumnami linków. Układ ma wynikać z treści firmy, nie z szablonu.

Szczegóły i korekty: [references/layout.md](references/layout.md)

## 2. Styl: usuń wizualne AI-tells

Fundament: pierwszy poziom treści leży na normalnym tle strony, komórki (boxy) tylko dla wyróżnień i przycisków, zakaz komórki w komórce. Strona wyraźna: bez transparentnych teł i przezroczystych linii obramowania, kolory wprost z palety, czcionki kontrastowe (biała/czarna). Zaokrąglenia maksymalnie 2 px albo wcale. Ikony duże i wyśrodkowane względem podpisu, nigdy małe dopchnięte do prawej. Do tego: fioletowe gradienty, glassmorphism, kolorowa lewa krawędź, cienie na wszystkim, fonty Inter/Poppins z domysłu, emoji jako ikony.

Szczegóły i korekty: [references/styl.md](references/styl.md)

## 3. Treść: po ludzku i bez zmyśleń

Do tekstów strony stosuje się cały skill pisz-po-ludzku (frazesy marketingowe na "O nas" to plaga). Warstwa dodatkowa dla stron: wymyślone przez AI liczby i opinie, placeholdery, resztki angielskiego, CTA.

Szczegóły: [references/tresc-i-wiarygodnosc.md](references/tresc-i-wiarygodnosc.md)

## 4. Polska typografia www

Tu jest pułapka odwrotna niż w plain-texcie: twarda spacja po jednoliterowych spójnikach (a, i, o, u, w, z) jest na stronie OBOWIĄZKOWA, żeby spójnik nie wisiał na końcu wiersza. Do tego jeden H1, hierarchia nagłówków, zakaz Title Case, konsekwentne cudzysłowy, polskie formaty dat i cen.

Szczegóły: [references/polska-typografia-www.md](references/polska-typografia-www.md)

## 5. Detale techniczne i wiarygodność

Favicon, title i meta description, og:image, opisowe alty po polsku, strona 404, formularz z RODO, polityka prywatności, stopka z pełnymi danymi firmy (nazwa, NIP, adres). Polska strona firmowa bez NIP w stopce wygląda jak wygenerowana wczoraj wieczorem.

Szczegóły: [references/detale-techniczne.md](references/detale-techniczne.md)

## 6. Automat kontrolny

```bash
node skrypty/audyt.mjs strona.html
```

Statyczny skan HTML: placeholdery, resztki angielskiego, fioletowe gradienty, emoji w nagłówkach, Title Case, em-dash, puste alty, brak favicon/og, sztancowe liczniki, frazesy marketingowe w treści. BŁĄD to twarde naruszenie, UWAGA wymaga oceny człowieka. Automat nie widzi renderu, więc warstwy 1-2 oceniasz okiem.

## Kontrolka końcowa

Przed oddaniem strony sprawdź:

1. Czy układ sekcji dało się przewidzieć przed otwarciem strony? Jeśli tak, przebuduj przynajmniej hero i kolejność sekcji pod realną firmę; przynajmniej jedna sekcja w niestandardowej formie.
2. Pierwszy poziom treści leży na normalnym tle? Komórki tylko dla wyróżnień i przycisków? Żadnej komórki w komórce (box z tekstem, a w nim box z przyciskiem)?
3. Zero transparentnych teł i przezroczystych linii obramowania; kolory wprost z palety, czcionki kontrastowe, bez wyróżniania "tłem rozjaśnionym".
4. Zaokrąglenia maksymalnie 2 px albo wcale, konsekwentnie; kolorowa krawędź z lewej strony boxa: usunięta; cień subtelny albo żaden.
5. Ikony: duże, wyśrodkowane względem podpisu. Żadnych małych ikonek dopchniętych do prawej w boxach informacyjnych. Emoji w nagłówkach i jako ikony: usunięte.
6. Jest gdzieś fioletowy/neonowy gradient, plama blur w tle albo glassmorphism bez uzasadnienia brandem? Usuń. Font to nie Inter/Poppins z domysłu?
7. Jeden H1, bezdyskusyjnie największy i wydzielony (np. podkreśleniem); hierarchia H1 > H2 > H3; żadnych mniejszych tekstów nad nagłówkami; bez Title Case.
8. Każda liczba na stronie (klienci, lata, projekty, %) jest prawdziwa i pochodzi od właściciela firmy? Jeśli nie, usuń.
9. Zero placeholderów (lorem, example@, 123 456 789, "Twoja Firma", linki do "#") i zero resztek angielskiego (Home, Get Started, All rights reserved).
10. Teksty przeszły pisz-po-ludzku (frazy, frazesy, rejestr, em-dash)?
11. Twarde spacje po jednoliterowych spójnikach w tekstach ciągłych.
12. Favicon, title, meta description, og:image, opisowe alty, polska 404, formularz przetestowany; stopka z prawdziwymi danymi kontaktowymi.

## Materiał uzupełniający

- Przykłady before/after: [references/przyklady.md](references/przyklady.md)
- Skill siostrzany do tekstów: [pisz-po-ludzku](https://github.com/wysocki-lu/pisz-po-ludzku)

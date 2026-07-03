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

Fioletowe gradienty, rozmyte plamy w tle, glassmorphism, zaokrąglenia na wszystkim, kolorowa krawędź z lewej strony boxów, cień pod każdą kartą, gradientowy tekst w nagłówkach, fonty Inter/Poppins z domysłu, emoji jako ikony.

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

1. Czy układ sekcji dało się przewidzieć przed otwarciem strony? Jeśli tak, przebuduj przynajmniej hero i kolejność sekcji pod realną firmę.
2. Jest gdzieś fioletowy/neonowy gradient, plama blur w tle albo glassmorphism bez uzasadnienia brandem? Usuń.
3. Zaokrąglenia i cienie: jeden spójny, mały promień w całym serwisie; cień subtelny albo wcale. Kolorowa krawędź z lewej strony boxa: usuń.
4. Emoji w nagłówkach albo jako ikony ficzerów? Usuń albo zamień na spójny zestaw ikon.
5. Każda liczba na stronie (klienci, lata, projekty, %) jest prawdziwa i pochodzi od właściciela firmy? Jeśli nie, usuń. Wymyślony social proof to pole minowe.
6. Zero placeholderów: lorem ipsum, example@, 123 456 789, "Twoja Firma", linki do "#".
7. Zero resztek angielskiego: Home, About, Get Started, Learn more, All rights reserved.
8. Teksty przeszły pisz-po-ludzku (frazy, frazesy, rejestr, em-dash)?
9. Jeden H1, hierarchia H1 > H2 > H3, bez eyebrow microcaps, bez Title Case.
10. Twarde spacje po jednoliterowych spójnikach w tekstach ciągłych.
11. Favicon, title, meta description, og:image, opisowe alty, polska 404.
12. Formularz: zgoda RODO + administrator danych; stopka: nazwa firmy, NIP, adres; polityka prywatności istnieje i nie jest szablonem lorem.

## Materiał uzupełniający

- Przykłady before/after: [references/przyklady.md](references/przyklady.md)
- Skill siostrzany do tekstów: [pisz-po-ludzku](https://github.com/wysocki-lu/pisz-po-ludzku)

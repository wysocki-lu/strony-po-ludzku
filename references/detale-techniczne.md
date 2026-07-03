# Detale techniczne i wiarygodność

Rzeczy, których generator nie robi, bo nie wie, że strona będzie należeć do prawdziwej firmy. Właśnie po nich odróżnia się stronę-produkt od strony-wydmuszki.

## Meta i udostępnianie

- **Title** per podstrona: "Usługa | Firma, miasto", nie "Home" ani "Vite + React".
- **Meta description** napisany po ludzku (pisz-po-ludzku obowiązuje także tu): konkret, co firma robi i dla kogo, do ~155 znaków. Nie "Witamy na naszej stronie internetowej".
- **Favicon** własny, nie domyślna ikona frameworka. Sprawdź też ikonę na iOS (apple-touch-icon).
- **og:title, og:description, og:image**: bez nich link wysłany na Messengerze, LinkedIn czy w mailu wygląda jak spam. og:image 1200x630 z logo albo zdjęciem firmy.
- `lang="pl"` w html.

## Obrazy

- **Alt opisowy po polsku** przy obrazach niosących treść ("Ekipa montująca klimatyzator na elewacji biurowca"), pusty alt="" przy czysto dekoracyjnych. Nigdy alt="image", alt="photo", alt="obraz1".
- Nazwy plików mówiące (montaz-klimatyzacji-gdansk.webp), nie IMG_20260703.jpg ani hero-final-v2.png.
- Formaty webp/avif, wymiary width/height w znacznikach (stabilność układu), lazy loading poniżej pierwszego ekranu.

## Formularze

- Formularz wysyła na prawdziwy adres firmy i ktoś to odbiera; test wysyłki przed oddaniem obowiązkowy.
- Komunikaty walidacji po polsku ("To pole jest wymagane", nie "This field is required").
- Przy formularzu zbierającym dane sprawdź z właścicielem strony kwestie zgód i polityki prywatności; generator zostawia tu zwykle lorem-szablon albo nic. To temat do potwierdzenia z firmą, nie do zgadywania.

## Stopka

Generator zostawia stopkę-wydmuszkę: "© 2023 Twoja Firma. All rights reserved." i kolumny martwych linków. Podmień na prawdziwe dane kontaktowe firmy (te same co w sekcji kontakt) i linki wyłącznie do stron, które istnieją. Zakres danych rejestrowych w stopce ustal z właścicielem strony.

## Drobiazgi, które robią różnicę

- **Strona 404 po polsku** z linkiem powrotu; domyślna 404 hostingu = wydmuszka.
- Linki do social mediów prowadzą do realnych profili; ikony bez profili usuń.
- Mapa/adres: jeśli firma przyjmuje klientów, osadzona mapa z prawdziwą lokalizacją.
- Sprawdź stronę na telefonie na realnych treściach: generator testuje na krótkim lorem, polskie wyrazy są dłuższe i łamią układy ("Zarezerwuj bezpłatną konsultację" potrafi rozsadzić przycisk).
- Wydajność: particles, AOS i cztery kroje z Google Fonts potrafią dołożyć sekundy ładowania. Po czyszczeniu stylu (patrz styl.md) zwykle spada też waga strony.

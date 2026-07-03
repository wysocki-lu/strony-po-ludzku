# Styl: wizualne AI-tells

Warstwa, po której strony z AI poznaje się z drugiego końca pokoju. Reguły pochodzą z praktyki agencyjnej (korekty realnych projektów) i z obserwacji domyślnego stylu generatorów.

## Kolory i tła

- **Fioletowe gradienty** (odcienie #6366f1, #7c3aed, #8b5cf6, #a855f7) na przyciskach, nagłówkach i tłach to najbardziej rozpoznawalny tell generatorów. Jeśli fiolet nie jest kolorem brandu, usuń.
- **Rozmyte plamy i kule gradientu** (blob, orb, mesh gradient) pływające w tle sekcji: usuń. Tło ma być tłem.
- **Ciemny motyw z neonowymi akcentami** jako domyślny, bez uzasadnienia brandem: zmień na paletę wynikającą z identyfikacji firmy.
- **Gradientowy tekst w nagłówkach** (background-clip: text): usuń, nagłówek ma być czytelny, nie efektowny.
- Paleta całego serwisu: kolory brandu + 1 akcent. Jeśli firma nie ma identyfikacji, wybierz 2 kolory i trzymaj się ich wszędzie.

## Zaokrąglenia, ramki, cienie

- **Zaokrąglenia na wszystkim** (karty, przyciski, obrazki, inputy, wszystko rounded-2xl): wybierz JEDEN mały promień (0-8 px) i stosuj konsekwentnie. Ostre albo ledwo zaokrąglone rogi wyglądają na zaprojektowane; wielkie promienie na wszystkim wyglądają na wygenerowane.
- **Kolorowa pojedyncza krawędź** (akcentowy pasek border-left na boxach, wierszach, cytatach): usuń. Elementy list mają być płaskie, separator to najwyżej 1 px linii.
- **Cień pod każdą kartą** (shadow-lg/xl na wszystkim): cień subtelny albo żaden. Flat z separatorem czytelniejszy niż podniesione wszystko.
- **Glassmorphism** (półprzezroczyste karty z backdrop-blur): usuń, chyba że cały brand jest na tym zbudowany.

## Typografia (dobór krojów)

- **Inter, Roboto, Poppins, Open Sans z domysłu**: to nie są złe kroje, ale są domyślnym wyborem każdego generatora. Poppins w polskim internecie stał się wręcz sygnaturą stron z AI. Dobierz krój z charakterem dopasowany do branży i sprawdź, czy ma polskie znaki w każdej używanej odmianie.
- Maksymalnie 2 rodziny krojów w serwisie (nagłówki + tekst).
- Hierarchia wielkości: patrz [polska-typografia-www.md](polska-typografia-www.md).

## Ikony i emoji

- **Emoji jako ikony ficzerów** (🚀 ✨ 💡 🎯 obok nagłówków kart): usuń. Emoji na stronie firmowej wyglądają jak niedokończony prototyp.
- Zestaw ikon: jeden styl (sama linia albo samo wypełnienie), jedna grubość kreski, jeden rozmiar siatki. Mieszanka ikon z trzech bibliotek to tell.

## Animacje

- **Fade-in przy scrollu na każdej sekcji** (AOS, data-aos wszędzie): usuń albo zostaw na 1-2 kluczowych elementach. Strona, w której wszystko wjeżdża, męczy i spowalnia odbiór.
- **Efekt pisania (typing), particles w tle, licznik odliczający od zera przy scrollu**: usuń. To ozdobniki bez funkcji.
- Animacja jest OK, gdy komunikuje (hover na przycisku, rozwinięcie akordeonu), nie gdy występuje.

## Zdjęcia i grafiki

- **Obrazy AI o "midjourneyowym" wyglądzie** (przesycone, idealne twarze, plastikowe światło) jako hero strony firmowej: podważają wiarygodność. Lepsze jedno prawdziwe zdjęcie firmy, zespołu albo produktu niż trzy wygenerowane.
- **Stockowe awatary przy opiniach**: usuń razem z wymyślonymi opiniami (patrz [tresc-i-wiarygodnosc.md](tresc-i-wiarygodnosc.md)).
- Mockupy urządzeń z generatora (laptop ze screenem strony na stronie): zbędna rekurencja, usuń.

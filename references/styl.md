# Styl: wizualne AI-tells

Warstwa, po której strony z AI poznaje się z drugiego końca pokoju. Reguły pochodzą z praktyki agencyjnej (korekty realnych projektów) i z obserwacji domyślnego stylu generatorów.

## Tło i warstwy: bez komórki w komórce

Generatory pakują każdy element w kartę, kartę w sekcję-kartę, a w środku jeszcze box z przyciskiem. Zasada:

- **Pierwszy poziom treści leży bezpośrednio na normalnym tle strony.** Zwykły tekst, nagłówki i akapity nie potrzebują pudełka.
- **Komórka (box, karta) tylko dla elementów wyróżnionych albo przycisków.** Wyróżnienie działa przez kontrast z treścią na gołym tle; gdy wszystko jest w komórce, nic nie jest wyróżnione.
- **Zakaz zagnieżdżania: komórka w komórce to błąd.** Nie może istnieć box z tekstem, w którym siedzi kolejny box z przyciskiem. Jeden poziom pudełka, koniec.

## Przejrzystość zamiast transparencji

- **Unikaj transparentnych teł wszędzie, gdzie się da.** Półprzezroczyste sekcje, karty z rgba(255,255,255,0.1), nakładki z opacity: strona ma być wyraźna.
- **Zakaz przezroczystych linii obramowania** (border z alfa, ledwo widoczne 10-20% linie). Obramowanie albo jest i je widać, albo go nie ma.
- **Zakaz glassmorphism** (backdrop-blur) w każdej postaci.
- **Zakaz koloru "to samo co tło, tylko jaśniejsze"** jako wyróżnika kart czy sekcji. Wyróżnienie robi się kolorem z palety albo zostawia treść na tle, nie kombinuje rozjaśnieniami.

## Kolory i czcionki: kontrast z palety, bez bajerów

- **Jasne, czytelne kolory i kontrastowe czcionki**: tekst biały na ciemnym, czarny na jasnym. Bez transparentnych czcionek, bez szarości 50% udającej elegancję na kolorowym tle.
- **Kolory wprost z palety brandu** (plus czerń/biel), bez gradientowych przejść "dla ozdoby".
- **Fioletowe gradienty** (odcienie #6366f1, #7c3aed, #8b5cf6, #a855f7) to najbardziej rozpoznawalna sygnatura generatorów. Jeśli fiolet nie jest kolorem brandu, usuń.
- **Rozmyte plamy i kule gradientu** (blob, orb, mesh) w tle sekcji: usuń. Tło ma być tłem.
- **Gradientowy tekst w nagłówkach** (background-clip: text): usuń.
- **Fonty Inter, Roboto, Poppins, Open Sans z domysłu**: domyślny wybór każdego generatora (Poppins w polskim internecie stał się wręcz sygnaturą stron z AI). Dobierz krój z charakterem, sprawdź polskie znaki, maksymalnie 2 rodziny w serwisie.

## Zaokrąglenia, ramki, cienie

- **Zaokrąglenia: maksymalnie 2 px albo wcale**, konsekwentnie w całym serwisie. Wielkie promienie (rounded-xl i wyżej) na kartach, przyciskach i obrazkach to podpis generatora; ostre rogi wyglądają na zaprojektowane.
- **Kolorowa pojedyncza krawędź** (akcentowy pasek border-left na boxach, wierszach, cytatach): usuń. Elementy list płaskie, separator to najwyżej 1 px pełnej, widocznej linii.
- **Cień pod każdą kartą** (shadow-lg/xl na wszystkim): cień subtelny albo żaden.

## Ikony

- **Ikona zawsze duża i wyśrodkowana względem swojego podpisu.** Bezwzględnie do usunięcia: małe ikonki dopchnięte do prawej krawędzi boxów informacyjnych, to jeden z najczęstszych układów generatorów.
- **Emoji jako ikony ficzerów** (🚀 ✨ 💡 obok nagłówków kart): usuń.
- Jeden styl zestawu ikon (sama linia albo samo wypełnienie), jedna grubość kreski, jeden rozmiar siatki.

## Animacje

- **Fade-in przy scrollu na każdej sekcji** (data-aos wszędzie): usuń albo zostaw na 1-2 kluczowych elementach.
- **Efekt pisania, particles, liczniki odliczające przy scrollu**: usuń. Animacja jest OK, gdy komunikuje (hover przycisku, rozwinięcie akordeonu), nie gdy występuje.

## Forma przekazu: nie zawsze to samo

Generator za każdym razem proponuje ten sam język wizualny. Człowiek testuje formy: sekcję porównawczą zamiast trzeciej siatki kart, oś czasu procesu zamiast listy, jedno mocne zdjęcie z podpisem zamiast kolażu, tabelę z konkretami zamiast "ficzerów". Przy audycie zapytaj przy każdej sekcji: czy ta treść ma lepszą, mniej standardową formę? Przynajmniej jedna sekcja na stronie powinna łamać schemat, którego spodziewa się oko po tysiącu podobnych stron.

## Zdjęcia i grafiki

- **Obrazy AI o "przesyconym" wyglądzie** (idealne twarze, plastikowe światło) jako hero strony firmowej podważają wiarygodność. Jedno prawdziwe zdjęcie firmy bije trzy wygenerowane.
- **Stockowe awatary przy opiniach**: usuń razem z wymyślonymi opiniami (patrz [tresc-i-wiarygodnosc.md](tresc-i-wiarygodnosc.md)).

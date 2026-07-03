# Treść i wiarygodność

Do wszystkich tekstów strony stosuje się skill [pisz-po-ludzku](https://github.com/wysocki-lu/pisz-po-ludzku) w całości: zakazane frazy, frazesy marketingowe ("pasja do", "indywidualne podejście", "Kim jesteśmy?"), struktury, rejestr, typografia znaków. Ta referencja opisuje warstwę dodatkową, specyficzną dla stron.

## Wymyślone liczby i opinie (najpoważniejszy problem)

Generator dopisuje social proof z powietrza: "ponad 500 zadowolonych klientów", "98% poleceń", "15 lat doświadczenia", trzy opinie z nazwiskami i awatarami. To nie jest kwestia stylu, tylko wiarygodności i prawa:

- **Każda liczba na stronie musi pochodzić od właściciela firmy.** Przy audycie zaznacz wszystkie liczby i zapytaj o każdą. Brak potwierdzenia = usunięcie, nie "zaokrąglenie".
- **Wymyślone opinie klientów to wprowadzanie konsumenta w błąd** (w Polsce narusza ustawę o przeciwdziałaniu nieuczciwym praktykom rynkowym). Prawdziwe opinie z Google z imieniem i datą, albo żadna sekcja opinii.
- **Logotypy "zaufali nam"**: tylko realni klienci i tylko za ich zgodą.
- Certyfikaty, nagrody, członkostwa: istnieją i da się je zweryfikować, albo znikają.

## Placeholdery

Do wyzerowania przed oddaniem, automat je łapie:

- lorem ipsum w dowolnej formie
- "Twoja Firma", "Nazwa Firmy", "Company Name"
- telefony 123 456 789, 000 000 000, 111 222 333
- adresy example@, test@, kontakt@twojadomena
- linki prowadzące do "#" albo pustych podstron
- data "© 2023" sprzed lat (generator wstawia rok ze swoich danych treningowych)

## Resztki angielskiego

Strona po polsku z angielskimi śladami generatora wygląda jak niedokończona:

- menu: Home, About, Services, Contact
- przyciski: Get Started, Learn More, Read More, Submit
- stopka: All rights reserved, Privacy Policy, Made with...
- atrybuty widoczne dla użytkownika: placeholder="Enter your email", alt="image"
- komunikaty formularza: "This field is required"

Sprawdź też `lang="en"` w html, title strony i meta description: generator często zostawia je po angielsku, a to one wyświetlają się w Google.

## CTA (wezwania do działania)

- Jedno główne CTA na sekcję. Trzy równorzędne przyciski to brak decyzji.
- Konkretny czasownik + co się stanie: "Zobacz cennik", "Zarezerwuj termin", "Wyślij zapytanie". Zamiast generycznych "Rozpocznij", "Dowiedz się więcej".
- Bez barier w słownictwie: klient ma rozumieć, co dostanie po kliknięciu. Formalne rzeczowniki ("memorandum", "dokumentacja ofertowa") zamieniaj na prostą zachętę ("Zobacz ofertę").
- CTA obiecuje tylko to, co naprawdę następuje. "Darmowa wycena w 24 h" wymaga procesu, który odpowiada w 24 h.

## Nazwy sekcji

- Bez pytajników o sobie: "Kim jesteśmy?", "Dlaczego my?", "Co nas wyróżnia?". Nazwij sekcję treścią: "Zespół", "Realizacje", "Proces współpracy".
- Bez eyebrow microcaps nad nagłówkami (małe UPPERCASE "O NAS" nad H2 "Poznaj nasz zespół" komunikuje to samo dwa razy).

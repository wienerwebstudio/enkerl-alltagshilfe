# Enkerl – Design-Leitfaden

Kurze, verbindliche Regeln für alle Seiten. Ziel: eine Website, die nach **Enkerl in Wien** aussieht – nicht nach Template und nicht nach „KI-Baukasten".

## Tokens (css/enkerl.css, `:root`)

| Token | Wert | Verwendung |
|---|---|---|
| `--paper` | `#F6F1E9` | Seitenhintergrund (warmes Papier, kein Gelb) |
| `--paper-2` | `#ECE4D6` | Nur für den Rückmeldungs-Zettel und Formularfelder |
| `--ink` | `#221E1A` | Fließtext, Überschriften |
| `--ink-2` | `#5B544B` | Nebentext (Kontrast 6,6:1 auf Papier) |
| `--rule` | `#D8CFC0` | Haarlinien |
| `--marille` | `#B5570C` | **Der eine Akzent**: Buttons, Zahlen, Links. Weiß auf Marille 4,85:1 |
| `--moos` | `#2E4A3C` | Dunkle Flächen: Helfer:innen-Band, Footer |

Es gibt genau **einen** Akzent (Marille) und **eine** dunkle Fläche (Moos). Keine weiteren Farben, keine Farbverläufe.

## Schrift

- **Fraunces** (Display-Serif, variabel) für Überschriften und große Zahlen. Gewicht 500, enge Zeilenhöhe (1,02–1,1), leicht negativer Buchstabenabstand.
- **Atkinson Hyperlegible Next** für alles andere. Für Senior:innen entwickelt: Grundgröße 18 px, Zeilenhöhe 1,6, Zeilenlänge unter 70 Zeichen.
- Zwei Familien, klarer Kontrast (Serif vs. Sans, groß vs. normal). Keine Versalien-Labels, keine kursiven Serif-Akzentwörter in Sans-Überschriften.

## Layout

- Links ausgerichtet, asymmetrisch. Nur der Kosten-Block ist zentriert.
- Struktur durch **Haarlinien**, nicht durch Karten mit Schatten. Keine Icon-Kacheln in Dreierreihen.
- Wiedererkennbares Element: **Bogenfenster-Bildmaske** (`.arch`) – Anleihe an Wiener Altbaufenster. Nur für Fotos, maximal ein Bogen pro Abschnitt.
- Zweites Element: der **Rückmeldungs-Zettel** (`.zettel`) – ein konkretes Beispiel statt abstrakter Versprechen.

## Bewegung

Genau ein orchestrierter Moment: Hero-Text und Bild blenden beim Laden ein. Sonst nur Zustandswechsel (Menü, FAQ auf/zu, Hover-Unterstreichung). `prefers-reduced-motion` schaltet alles ab.

## Text

- Konkret statt aspirativ: „Einkauf bei der Billa, Beleg liegt in der Küchenlade" schlägt „Wir entlasten Ihren Alltag".
- Wiener Wörter sind erlaubt und erwünscht: Enkerl, Grätzl, Marille.
- Keine Buzzwords (nahtlos, ganzheitlich, innovativ). Keine Gedankenstrich-Ketten.
- Förder- und Steueraussagen nur im Konjunktiv (siehe businessplan/11-geschaeftsmodell-preise.md, Punkt UWG).

## Bilder

- Warmes, natürliches Licht, Wiener Altbau oder Straße, unperfekte Details, 35-mm-Look. Keine Stock-Bürobilder, keine 3D-Blobs, keine Illustrationen.
- Jedes Bild kommt nur einmal auf der Seite vor.
- Neue Bilder im selben Stil generieren und auf ~1200 px Breite, JPEG-Qualität 80 verkleinern.

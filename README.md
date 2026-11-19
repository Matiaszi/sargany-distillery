# Sargany Distillery

Prywatna karta trunków dla znajomych. Statyczna strona, bez builda.

- Ceny, opisy, kolory butelek: `dane.js`
- Numer do SMS-ów z zamówieniem: `telefon` w `dane.js`
- Wdrożenie: `git push` → Cloudflare Pages buduje sam
- Brak indeksowania: meta robots + `_headers` (X-Robots-Tag) + `robots.txt`

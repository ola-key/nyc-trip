# 🗽 NYC Trip — Нью-Йорк, 14–18 вересня

Інтерактивна карта подорожі до Нью-Йорка з реальними маршрутами по днях.
Побудовано на [Leaflet.js](https://leafletjs.com/) + OpenStreetMap/CARTO — без бекенду, чистий HTML/CSS/JS.

## 🔗 Живий сайт (GitHub Pages)

**https://olhakliuchka-hash.github.io/nyc-trip/**

## Що всередині

- 🗺️ Реальна інтерактивна карта Мангеттена та Брукліна з зумом.
- 📅 5 днів (14–18 вересня), кожен — окремий кольоровий маршрут.
- 🏨 Старт і фініш кожного дня — готель **Hampton Inn Manhattan-Grand Central**. Сніданок не включений (в готелі).
- 📍 Всі точки маршруту підписані номерами; клік на маркер/лінію/день у бічній панелі відкриває детальний опис місця: що це, як туди дістатись (пішки/метро зі станціями), лінк на Google Maps.
- 📏 Орієнтовний кілометраж кожного дня (пішки + метро) — видно одразу в бічній панелі.
- 🎬 Кіно-локації: The Plaza Hotel та Wollman Rink ("Один удома 2"), Washington Square Park, SoHo, Brooklyn Bridge та інші місця в дусі "Секс і Місто".
- 🍽️ Особисті вподобання: Motek, Buvette, Russ & Daughters, Elizabeth Street Garden, Greenacre Park, Tudor City Bridge, The Campbell Bar, Peak/Hudson Yards VU.
- ⛴️ Безкоштовний Staten Island Ferry — вид на Статую Свободи без квитка.

## Маршрути по днях

| День | Дата | Тема |
|------|------|------|
| 1 | 14 вер | Lower Manhattan & DUMBO + безкоштовний паром |
| 2 | 15 вер | Midtown Icons + приховані перлини біля готелю |
| 3 | 16 вер | Central Park & Museums |
| 4 | 17 вер | Village, SoHo, Chelsea & High Line |
| 5 | 18 вер | Гастрономічний день: Union Square, NoMad, West Village |

## Локальний запуск

Просто відкрийте `index.html` у браузері, або підніміть локальний сервер:

```bash
python -m http.server 8000
# відкрити http://localhost:8000
```

## Технології

- [Leaflet.js](https://leafletjs.com/) — рендер карти та маршрутів
- [CARTO Voyager tiles](https://carto.com/basemaps) — тайли карти (безкоштовні, без ключа)
- Чистий HTML/CSS/JavaScript, без збірки та залежностей

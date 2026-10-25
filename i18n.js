// Локалізація. UI — статичні рядки інтерфейсу. TRANSLATIONS — переклад
// контенту маршрутів (прив'язаний до id дня та індексу точки в масиві places,
// той самий порядок, що й у data.js).

const UI = {
  uk: {
    pageTitle: "Нью-Йорк 🗽",
    subtitle: "14–18 вересня · Старт і фініш кожного дня — готель Hampton Inn Manhattan-Grand Central.<br/>Сніданок в готелі (не включений в маршрут). Клікніть на день або на лінію маршруту на карті.",
    toggleAll: "Показати всі дні",
    navWarning: "⚠️ У Нью-Йорку навігація на мапах (GPS/інтернет) часто працює нестабільно через щільну забудову — це нормальне явище для міста, не привід панікувати. Закладайте трохи більше часу на орієнтування та не поспішайте.",
    start: "Старт",
    finish: "Фініш",
    stop: "Зупинка",
    desc: "Опис:",
    cost: "Вартість:",
    howTo: "Як дістатись:",
    gmapsLink: "Відкрити в Google Maps ↗",
    ticketLink: "Квитки на виставу ↗",
    routeDistance: "км маршруту (пішки + метро)",
    langButton: "EN"
  },
  en: {
    pageTitle: "New York 🗽",
    subtitle: "September 14–18 · Each day starts and ends at the Hampton Inn Manhattan-Grand Central hotel.<br/>Breakfast at the hotel is not included in this itinerary. Click a day or the route line on the map.",
    toggleAll: "Show all days",
    navWarning: "⚠️ In New York, map/GPS navigation is often unstable due to dense buildings — this is normal for the city, not a reason to panic. Allow a bit more time to get your bearings and don't rush.",
    start: "Start",
    finish: "Finish",
    stop: "Stop",
    desc: "Description:",
    cost: "Cost:",
    howTo: "How to get there:",
    gmapsLink: "Open in Google Maps ↗",
    ticketLink: "Buy tickets ↗",
    routeDistance: "km route (walking + subway)",
    langButton: "UA"
  }
};

const HOTEL_EN = {
  desc: "Hotel on 39th St between Lexington and Park Ave, a 5-minute walk from Grand Central Terminal."
};

const TRANSLATIONS_EN = {
  day1: {
    title: "Lower Manhattan & DUMBO + Free Ferry",
    date: "September 14 (Mon)",
    budget: "≈ $200/day (3 people: us + 13-y.o. son)",
    places: [
      { name: "Hampton Inn Manhattan-Grand Central (start/end)", desc: HOTEL_EN.desc, howTo: "Start of the route." },
      { desc: "A park at the southern tip of Manhattan with harbor views — the free ferry departs from here.", howTo: "Subway 4/5 from Grand Central-42 St to Bowling Green (~25 min), then a 5-minute walk." },
      { name: "Staten Island Ferry (free!)", desc: "The free ferry departs from Whitehall Terminal and offers great views of the Statue of Liberty and Ellis Island without an official cruise ticket. This isn't a tourist attraction but regular public transit for Staten Island residents — the same ferry doesn't wait to take you back. One-way trip ~25 min. Tip: to get the best view of the Statue of Liberty, head straight to the right outer deck (starboard side) as soon as you board.", cost: "Free", howTo: "A 5-minute walk from Battery Park to Whitehall Terminal; ferries run every 15-30 minutes. Upon arriving at Staten Island, disembark and go to the return ferry in the same terminal — back to Manhattan/Whitehall Terminal (also every 15-30 minutes). Round trip total ~50-60 minutes including the transfer." },
      { desc: "The famous bronze bull statue — symbol of Wall Street's financial district. Tradition has tourists rub the bull's details (horns, nose, testicles) for luck and money 😄. Bowling Green park is right next to it.", howTo: "10-minute walk north from Whitehall Terminal." },
      { desc: "Memorial on the site of the Twin Towers with two reflecting pools and the names of the victims.", howTo: "10-minute walk north from Charging Bull." },
      { desc: "Futuristic transit-hub building and the Westfield World Trade Center mall — architecturally stunning.", howTo: "2-minute walk from the 9/11 Memorial." },
      { name: "Brooklyn Bridge (pedestrian walkway)", desc: "The famous 1883 suspension bridge with views of Manhattan and the East River. Crossing takes ~30-40 minutes on foot.", howTo: "15-minute walk east from Oculus to the entrance near City Hall Park." },
      { name: "Dawn's 'Til Dusk (coffee & snack)", desc: "A cozy café in DUMBO — great coffee and a light bite after crossing the bridge.", cost: "$45 (coffee + snack)", howTo: "10-minute walk after crossing the bridge into Brooklyn, behind the Clock Tower Condominium (entrance from Main St)." },
      { desc: "The classic Manhattan Bridge view from Washington Street — a famous photo spot featured in movies and on Instagram.", howTo: "5-minute walk east from Dawn's 'Til Dusk, to the corner of Washington St and Water St." },
      { desc: "A pebble beach with a classic view of the Manhattan Bridge and skyline — a favorite photo spot.", howTo: "2-minute walk northwest from Manhattan Bridge View, along the Brooklyn Bridge Park waterfront (Main Street section)." },
      { name: "Cecconi's DUMBO (dinner)", desc: "An Italian restaurant right under the Manhattan Bridge, with a terrace overlooking the water and the Manhattan skyline — dinner with a view after Pebble Beach. To get a terrace table, book a few hours ahead.", cost: "$130 (dinner for 3)", howTo: "5-7 minute walk from Pebble Beach along the waterfront (55 Water St, Brooklyn, Empire Stores building)." },
      { name: "York St Station (F train)", desc: "Subway entrance at the corner of Jay St / York St — the route back to the hotel starts here.", howTo: "8-10 minute walk from Cecconi's DUMBO." },
      { name: "Hampton Inn Manhattan-Grand Central (return)", desc: "Return to the hotel.", howTo: "Take the F train toward Manhattan to 2 Ave, transfer to the 6 train (Uptown/Pelham Bay Pk direction) to Grand Central-42 St. Total ~25-30 min." }
    ]
  },
  day2: {
    title: "Midtown Icons + Hidden Gems Near the Hotel",
    date: "September 15 (Tue)",
    budget: "≈ $250/day (3 people)",
    places: [
      { name: "Hampton Inn Manhattan-Grand Central (start/end)", desc: HOTEL_EN.desc, howTo: "Start of the route." },
      { desc: "A picturesque pedestrian bridge over 42nd St with a view of the UN building — a quiet photo spot almost nobody knows about.", howTo: "3-minute walk east of the hotel along 42nd St." },
      { desc: "Historic 1913 train station, the Whispering Gallery, the starry ceiling of the main concourse.", howTo: "15-minute walk west from Tudor City Bridge along 42nd St to Grand Central Terminal (89 E 42nd St)." },
      { desc: "An elegant cocktail bar inside Grand Central, styled as a 1920s financier's office. The bar operates on an open-tab basis.", howTo: "From the main concourse of Grand Central Terminal, with your back to the Apple Store entrance, head to the staircase directly across from you (not the one leading to the Apple Store). Go up the stairs and exit onto the street. Right outside the door, turn left — the bar entrance is in the same building, look for the door with the sign. Then follow the signs (15 Vanderbilt Ave).", cost: "$50" },
      { desc: "The famous building with the Patience and Fortitude lions, the Rose Main Reading Room. Stephen A. Schwarzman Building.", howTo: "10-minute walk west from The Campbell along 42nd St to the library (476 5th Ave)." },
      { desc: "A green park behind the library with cafés and summer events.", howTo: "Right behind the library, a 2-minute walk." },
      { desc: "The largest neo-Gothic Catholic cathedral in the US.", howTo: "15-minute walk northeast from Bryant Park along 5th Ave." },
      { desc: "The Beast & Butterflies rooftop bar with a view of Times Square — worth stopping here to rest: have tea/coffee or a bite, recharge before the evening. No reservation required.", howTo: "15-18 minute walk west from St. Patrick's Cathedral along 52nd St (226 W 52nd St)." },
      { desc: "The brightest crossroads in the world, with billboards and Broadway theaters.", howTo: "10-minute walk south from M Social along 7th Ave/Broadway." },
      { name: "Back to hotel — change for dinner", desc: "Return to the hotel to change into smart casual / elegant attire before dinner at Duomo51.", howTo: "15-minute walk east along 42nd St to the hotel. Or subway: S Shuttle from Times Sq-42 St to Grand Central-42 St (2 min ride) + 5-minute walk." },
      { name: "Duomo51 (dinner — reunion)", desc: "An Italian restaurant on the 7th floor of the Doubletree hotel, with views of Rockefeller Center and Midtown — the spot for your Tuesday dinner reunion. To sit on the terrace, book a table 1-2 days ahead.", howTo: "15-18 minute walk north from the hotel along 5th Ave/Madison Ave (25 W 51st St, 7th floor). Or subway: line 6 from Grand Central-42 St to 51 St (1 stop) + 5-minute walk.", cost: "$150" },
      { name: "Hampton Inn Manhattan-Grand Central (return)", desc: "Return to the hotel after dinner.", howTo: "3-minute walk to 5 Ave/53 St station (line 6), ride to Grand Central-42 St (2 stops). ~15 min total. Or a 20-minute walk along Madison/Park Ave." }
    ]
  },
  day3: {
    title: "Central Park & Museums",
    date: "September 16 (Wed)",
    budget: "≈ $150/day",
    places: [
      { name: "Hampton Inn Manhattan-Grand Central (start/end)", desc: HOTEL_EN.desc, howTo: "Start of the route." },
      { desc: "Quality, delicious coffee with a 'white-collar' atmosphere. A great spot for morning coffee before a walk through Central Park.", howTo: "15-20 minute walk from the hotel, or subway N/R/W to 5 Ave-59 St." },
      { desc: "The legendary 1907 palace hotel on the corner of Central Park — famous from 'Home Alone 2' and 'The Great Gatsby'. The exterior and lobby are worth a quick visit.", howTo: "3-5 minute walk north from Black Fox Coffee." },
      { desc: "A picturesque pond near the southeast entrance to the park — this is where scenes from 'Home Alone 2' were filmed.", howTo: "5-minute walk into the park through the Grand Army Plaza entrance (5th Ave/59th St), across from the Plaza Hotel." },
      { desc: "A stone bridge over the pond — one of the most photographed views in Central Park, with skyscrapers in the background.", howTo: "2-minute walk north from The Pond." },
      { desc: "The park's most famous terrace with the 'Angel of the Waters' fountain.", howTo: "15-18 minute walk north through the park (past the Mall/Literary Walk) from Gapstow Bridge." },
      { desc: "An elegant cast-iron bridge over the lake — one of the most photogenic spots in the park.", howTo: "5-minute walk west from Bethesda Terrace." },
      { desc: "One of the largest art museums in the world. Plan for 2-3 hours. Admission ≈ $30 per person.", howTo: "20-25 minute walk through the park east (past the Ramble and Loeb Boathouse) to 5th Ave/82nd St.", cost: "$30/person" },
      { desc: "An Italian bakery-café on the Upper West Side — croissants, coffee, a light bite. An affordable, good-quality spot for a snack, with free water available too. 1928 Broadway, New York, NY 10023.", howTo: "~4 km on foot through the park (86th St Transverse) and then through the charming residential Upper West Side — a pleasant walk, lots of greenery, varied architecture, plenty to see. ~50-60 minutes of walking." },
      { desc: "A round plaza with the Columbus monument, entrance to the Time Warner Center shops.", howTo: "5-7 minute walk south along Broadway from Rosetta Bakery." },
      { desc: "The vibrant heart of Midtown with screens and lights.", howTo: "15-20 minute walk southeast along Broadway from Columbus Circle, or subway: line A/C/B/D from 59 St-Columbus Circle to 42 St-Port Authority Bus Terminal (2 stops)." },
      { name: "Hampton Inn Manhattan-Grand Central (return)", desc: "Return to the hotel.", howTo: "15-minute walk east along 42nd St to the hotel, or subway: S Shuttle from Times Sq-42 St to Grand Central-42 St (2 min ride) + 5-minute walk." }
    ]
  },
  day4: {
    title: "Little Island, High Line & Hudson Yards",
    date: "September 17 (Thu)",
    budget: "≈ $200/day",
    places: [
      { name: "Hampton Inn Manhattan-Grand Central (start/end)", desc: HOTEL_EN.desc, howTo: "Start of the route." },
      { desc: "An unusual floating park-island on piles in the Hudson (Pier 55) with an amphitheater and river views.", howTo: "Subway: S Shuttle to Times Sq-42 St, transfer to line A/C/E to 14 St (8th Ave), then a 12-15 minute walk west to Pier 55. ~35-40 min total. Or taxi/Uber ~20 min." },
      { desc: "The southern end of the High Line — a park on a former elevated railway with Hudson River views and street art.", howTo: "5-minute walk northeast from Little Island to the entrance on Gansevoort St." },
      { desc: "One of the most beautiful views on the High Line: a narrow street between terracotta-colored brick warehouses, with an old overhead pedestrian walkway bridging the buildings above.", howTo: "8-10 minute walk north along the High Line." },
      { desc: "A viewing platform with benches over 10th Ave — a convenient spot to rest and watch the street traffic below.", howTo: "1-2 minute walk, right next to Northern Spur Preserve." },
      { desc: "A section of the High Line with preserved old rails amid the grasses — one of the most atmospheric stretches of the park.", howTo: "15-18 minute walk north along the High Line." },
      { desc: "A panoramic spot near the end of the High Line with a view of Hudson Yards.", howTo: "2-3 minute walk north from the Interim Walkway." },
      { desc: "The famous honeycomb-structure sculpture at the center of Hudson Yards.", howTo: "8-10 minute walk east from the High Line exit (30th St) to Hudson Yards." },
      { desc: "The main plaza of Hudson Yards around the Vessel — modern gardens, benches, skyscrapers all around.", howTo: "1-2 minute walk, right next to the Vessel." },
      { name: "Broadway Theater: Marquis Theatre", desc: "'Stranger Things: The First Shadow' on Broadway. Ticket ≈ $86 per person. 210 W 46th St, New York, NY 10036.", howTo: "Subway: line 7 from 34 St-Hudson Yards to Times Sq-42 St (a few stops), then a 5-minute walk to the theater on 46th St. ~20 min total.", cost: "$86/person" },
      { name: "Hampton Inn Manhattan-Grand Central (return)", desc: "Return to the hotel after the show.", howTo: "10-12 minute walk east along 42nd St to the hotel." }
    ]
  },
  day5: {
    title: "Flatiron, West Village, Seaport & Hudson VU",
    date: "September 18 (Fri)",
    budget: "≈ $240/day",
    places: [
      { name: "Hampton Inn Manhattan-Grand Central (start/end)", desc: HOTEL_EN.desc, howTo: "Start of the route, a light day before departure." },
      { desc: "The famous triangular building from 1902.", howTo: "15-20 minute walk from the hotel along Madison Ave/Broadway to 5th Ave/23rd St, or subway 6 from Grand Central to 23 St (~10 min) + 3-minute walk." },
      { desc: "A Mediterranean restaurant — hummus, shakshuka, fresh salads. A great lunch spot, with happy hour cocktails/snacks for $5.", howTo: "3-minute walk from the Flatiron Building (125 5th Ave)." },
      { desc: "The famous brownstone from 'Sex and the City' — this is where Carrie Bradshaw lived. 66 Perry St, New York, NY 10014.", howTo: "Subway: line 6 from 23 St to Bleecker St (~10 min), then a 15-18 minute walk west through Greenwich Village to Perry St. Or taxi ~15 min." },
      { desc: "The building from the opening credits of 'Friends', on the corner of Grove St/Bedford St. 90 Bedford St, New York, NY 10014.", howTo: "5-7 minute walk south from Carrie Bradshaw's Apartment." },
      { desc: "The legendary bakery from 'Sex and the City' — famous cupcakes and jarred cheesecakes. Cheesecake — $7, cookie — $2.30; there's often a 'buy 2 cheesecakes, get the 3rd free' deal. We spent $15, very tasty. 401 Bleecker St, New York, NY 10014.", howTo: "3-5 minute walk east along Bleecker St from the Friends Apartment Building.", cost: "$15 (for us)" },
      { desc: "An Irish pub in the Financial District — cozy atmosphere, beer, snacks.", howTo: "Far from West Village (~5 km) — better by subway: line 6 from Bleecker St to Wall St (~20 min) + 5-minute walk, or taxi/Uber ~20 min.", cost: "≈ $75" },
      { desc: "A historic waterfront neighborhood with cobblestone streets, shops, and restaurants overlooking the Brooklyn Bridge.", howTo: "5-7 minute walk east/north from Ulysses' to Fulton St." },
      { desc: "One of the best viewpoints of the Brooklyn Bridge and Downtown Brooklyn from the Manhattan side.", howTo: "3-5 minute walk north from Seaport District." },
      { desc: "A restaurant/bar with a rooftop terrace overlooking the Hudson River — book the outdoor terrace in advance. Budget ≈ $100 for two. 21+ entry. 653 11th Ave, New York, NY 10036.", howTo: "Far (~8 km from Brooklyn Bridge) — better by taxi/Uber (20-25 min).", cost: "≈ $100 (for two)" },
      { name: "Hampton Inn Manhattan-Grand Central (return)", desc: "Return to the hotel, pack before departure.", howTo: "15-20 min by taxi/Uber east to the hotel, or bus M50 + subway S Shuttle to Grand Central." }
    ]
  }
};

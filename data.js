// Маршрути по днях (14-18 вересня). Старт/фініш кожного дня — готель
// Hampton Inn Manhattan-Grand Central. Сніданок в готелі (не в маршруті).
// Базові 4 лінії взяті з референсу "NYC Bucket List Mapped" (Lower Manhattan & DUMBO,
// Midtown Icons, Central Park & Museums, Village/Chelsea/High Line) + власні побажання.

const HOTEL = {
  name: "Hampton Inn Manhattan-Grand Central (старт/фініш)",
  coords: [40.7488, -73.9787],
  desc: "Готель на 39th St між Lexington та Park Ave, за 5 хв ходьби від Grand Central Terminal.",
  howTo: "Точка відліку кожного дня.",
  gmaps: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+Manhattan+Grand+Central"
};

function gm(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

const DAYS = [
  {
    id: "day1",
    date: "14 вересня (пн)",
    title: "Lower Manhattan & DUMBO + безкоштовний паром",
    color: "#f58231",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту.", gmaps: HOTEL.gmaps },
      {
        name: "Battery Park",
        coords: [40.7033, -74.0170],
        desc: "Парк на південному краю Мангеттена з видом на гавань, звідси ходить безкоштовний паром.",
        howTo: "Метро 4/5 від Grand Central-42 St до Bowling Green (~25 хв), далі 5 хв пішки.",
        gmaps: gm("Battery Park New York")
      },
      {
        name: "Staten Island Ferry (безкоштовно!)",
        coords: [40.7011, -74.0136],
        desc: "Безкоштовний паром курсує з Whitehall Terminal і дає чудовий вид на Статую Свободи та Ellis Island без квитка на офіційний круїз. Дорога туди-назад ~50 хв, можна не сходити на березі Staten Island і повернутись тим самим поромом.",
        howTo: "5 хв пішки від Battery Park до Whitehall Terminal, паром ходить кожні 15-30 хв.",
        gmaps: gm("Staten Island Ferry Whitehall Terminal")
      },
      {
        name: "Charging Bull",
        coords: [40.7056, -74.0134],
        desc: "Знаменита бронзова статуя бика — символ фінансового Волл-стріт.",
        howTo: "10 хв пішки на північ від Whitehall Terminal.",
        gmaps: gm("Charging Bull Wall Street")
      },
      {
        name: "9/11 Memorial & Museum",
        coords: [40.7115, -74.0134],
        desc: "Меморіал на місці веж-близнюків з двома басейнами-водоспадами та іменами загиблих.",
        howTo: "10 хв пішки на північ від Charging Bull.",
        gmaps: gm("9/11 Memorial & Museum")
      },
      {
        name: "Oculus",
        coords: [40.7115, -74.0099],
        desc: "Футуристична транспортна хаб-споруда та торговий центр Westfield World Trade Center, вражає архітектурою.",
        howTo: "2 хв пішки від 9/11 Memorial.",
        gmaps: gm("Oculus World Trade Center")
      },
      {
        name: "Brooklyn Bridge (пішохідна доріжка)",
        coords: [40.7128, -74.0060],
        desc: "Знаменитий підвісний міст 1883 року з видом на Мангеттен і Іст-Рівер. Перехід ~30-40 хв пішки.",
        howTo: "15 хв пішки на схід від Oculus до входу біля City Hall Park.",
        gmaps: gm("Brooklyn Bridge Pedestrian Walkway")
      },
      {
        name: "DUMBO / Pebble Beach",
        coords: [40.7023, -73.9962],
        desc: "Кам'яний пляж з класичним видом на Manhattan Bridge та скайлайн — улюблена фотолокація.",
        howTo: "10 хв пішки після переходу мосту в Brooklyn.",
        gmaps: gm("Pebble Beach Brooklyn Bridge Park")
      },
      {
        name: "Cecconi's DUMBO",
        coords: [40.7031, -73.9905],
        desc: "Італійський ресторан прямо під Manhattan Bridge, тераса з видом на воду та скайлайн Мангеттена — гарне місце для вечері з видом після Pebble Beach.",
        howTo: "3-5 хв пішки від Pebble Beach вздовж набережної (55 Water St, Brooklyn).",
        gmaps: gm("Cecconi's Dumbo Brooklyn")
      },
      {
        name: HOTEL.name + " (повернення)",
        coords: HOTEL.coords,
        desc: "Повернення в готель.",
        howTo: "Пішки 8-10 хв до станції York St (лінія F, вхід на Jay St/York St). Їхати F у бік Мангеттена до 2 Ave, перейти на лінію 6 (напрямок Uptown/Pelham Bay Pk) до станції Grand Central-42 St. Загалом ~35-40 хв.",
        gmaps: HOTEL.gmaps
      }
    ]
  },
  {
    id: "day2",
    date: "15 вересня (вт)",
    title: "Midtown Icons + приховані перлини біля готелю",
    color: "#e6194B",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту.", gmaps: HOTEL.gmaps },
      {
        name: "Tudor City Bridge",
        coords: [40.7488, -73.9707],
        desc: "Мальовничий пішохідний міст над 42nd St з видом на будівлю ООН — тихе фото-місце, майже ніхто не знає.",
        howTo: "3 хв пішки від готелю на схід по 42nd St.",
        gmaps: gm("Tudor City Bridge New York")
      },
      {
        name: "Greenacre Park",
        coords: [40.7574, -73.9666],
        desc: "Крихітний кишеньковий парк зі штучним водоспадом — оазис тиші серед хмарочосів.",
        howTo: "10 хв пішки на північ від Tudor City Bridge.",
        gmaps: gm("Greenacre Park New York")
      },
      {
        name: "Grand Central Terminal",
        coords: [40.7527, -73.9772],
        desc: "Історичний вокзал 1913 року, Whispering Gallery, зоряна стеля головного залу.",
        howTo: "15 хв пішки на захід від Greenacre Park.",
        gmaps: gm("Grand Central Terminal, New York")
      },
      {
        name: "The Campbell (Campbell Bar)",
        coords: [40.7524, -73.9774],
        desc: "Елегантний коктейль-бар всередині Grand Central, оформлений як кабінет фінансиста 1920-х.",
        howTo: "Прямо всередині будівлі Grand Central.",
        gmaps: gm("The Campbell Bar Grand Central")
      },
      {
        name: "New York Public Library",
        coords: [40.7532, -73.9822],
        desc: "Знаменита будівля з левами Patience і Fortitude, зал Rose Main Reading Room.",
        howTo: "10 хв пішки на захід по 42nd St.",
        gmaps: gm("New York Public Library Main Branch")
      },
      {
        name: "Bryant Park",
        coords: [40.7536, -73.9832],
        desc: "Зелений парк за бібліотекою з кафе та літніми подіями.",
        howTo: "Одразу за бібліотекою, 2 хв пішки.",
        gmaps: gm("Bryant Park, New York")
      },
      {
        name: "Rockefeller Center",
        coords: [40.7587, -73.9787],
        desc: "Комплекс хмарочосів, Channel Gardens, оглядовий майданчик Top of the Rock.",
        howTo: "10 хв пішки на північний схід від Bryant Park.",
        gmaps: gm("Rockefeller Center New York")
      },
      {
        name: "St. Patrick's Cathedral",
        coords: [40.7585, -73.9759],
        desc: "Найбільший неоготичний католицький собор США.",
        howTo: "5 хв пішки на схід від Rockefeller Center по Fifth Ave.",
        gmaps: gm("St. Patrick's Cathedral New York")
      },
      {
        name: "The Plaza Hotel",
        coords: [40.7644, -73.9744],
        desc: "Легендарний готель на розі Central Park South і Fifth Ave — саме тут зупинявся Кевін у фільмі 'Один удома 2: Загублений у Нью-Йорку'. Розкішний вестибюль вартий короткого візиту.",
        howTo: "15 хв пішки на північ по Fifth Ave від St. Patrick's Cathedral (прогулянка повз шопінг-вітрини).",
        gmaps: gm("The Plaza Hotel New York")
      },
      {
        name: "Times Square",
        coords: [40.7580, -73.9855],
        desc: "Найяскравіший перехрестя світу з рекламними екранами та театрами Бродвею.",
        howTo: "20 хв пішки на південний захід від Plaza Hotel через Central Park South і 7th Ave.",
        gmaps: gm("Times Square, New York")
      },
      {
        name: "M Social Hotel — Beast & Butterflies (rooftop)",
        coords: [40.7645, -73.9847],
        desc: "Дах-бар з видом прямо на Times Square — гарне місце для вечірнього коктейлю.",
        howTo: "10 хв пішки на північ від Times Square по 8th Ave.",
        gmaps: gm("M Social Hotel Times Square Beast and Butterflies rooftop")
      },
      {
        name: HOTEL.name + " (повернення)",
        coords: HOTEL.coords,
        desc: "Повернення в готель.",
        howTo: "Пішки 3 хв до станції 50 St (лінії C/E), їхати одну зупинку до 42 St-Port Authority Bus Terminal, перейти на шатл S до Grand Central-42 St. Загалом ~20 хв. Або просто пішки 25 хв по 42nd St.",
        gmaps: HOTEL.gmaps
      }
    ]
  },
  {
    id: "day3",
    date: "16 вересня (ср)",
    title: "Central Park & Museums",
    color: "#3cb44b",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту.", gmaps: HOTEL.gmaps },
      {
        name: "Wollman Rink",
        coords: [40.7679, -73.9734],
        desc: "Каток біля південно-східного входу в парк — саме тут Кевін катався на ковзанах у фільмі 'Один удома 2'. Поруч, біля ставка (The Pond), знімали і сцену з 'жінкою-голубницею'.",
        howTo: "Метро N/R/W до 5 Ave-59 St або 15-20 хв пішки від готелю через Central Park South.",
        gmaps: gm("Wollman Rink Central Park")
      },
      {
        name: "The Metropolitan Museum of Art (Met)",
        coords: [40.7794, -73.9632],
        desc: "Один з найбільших художніх музеїв світу. Плануйте 2-3 години.",
        howTo: "20-25 хв прогулянки через парк на північний схід (повз ставок і зоопарк) до 5th Ave/82nd St.",
        gmaps: gm("The Metropolitan Museum of Art")
      },
      {
        name: "Bethesda Terrace & Fountain",
        coords: [40.7735, -73.9702],
        desc: "Найвідоміша тераса парку з фонтаном 'Ангел вод'.",
        howTo: "15 хв пішки на захід через парк від Met.",
        gmaps: gm("Bethesda Terrace Central Park")
      },
      {
        name: "Bow Bridge",
        coords: [40.7737, -73.9714],
        desc: "Витончений чавунний міст над озером — одна з найфотогеничніших локацій парку.",
        howTo: "5 хв пішки на захід від Bethesda Terrace.",
        gmaps: gm("Bow Bridge Central Park")
      },
      {
        name: "Strawberry Fields",
        coords: [40.7756, -73.9762],
        desc: "Меморіал Джону Леннону з мозаїкою 'Imagine' навпроти Dakota Building.",
        howTo: "6 хв пішки на північний захід від Bow Bridge.",
        gmaps: gm("Strawberry Fields Central Park")
      },
      {
        name: "American Museum of Natural History",
        coords: [40.7813, -73.9740],
        desc: "Динозаври, планетарій Hayden, зали про космос і природу — улюблений музей для всієї родини.",
        howTo: "7 хв пішки на захід та північ через парк.",
        gmaps: gm("American Museum of Natural History")
      },
      {
        name: "Columbus Circle",
        coords: [40.7681, -73.9819],
        desc: "Кругла площа з монументом Колумбу, вхід до Time Warner Center із крамницями.",
        howTo: "7 хв пішки на південь від музею.",
        gmaps: gm("Columbus Circle New York")
      },
      { name: HOTEL.name + " (повернення)", coords: HOTEL.coords, desc: "Повернення в готель.", howTo: "Пішки 5 хв до станції 59 St-Columbus Circle, сісти на лінію D (напрямок Downtown/Brooklyn) до станції 47-50 Sts-Rockefeller Center, перейти на шатл S до Grand Central-42 St. Загалом ~20-25 хв.", gmaps: HOTEL.gmaps }
    ]
  },
  {
    id: "day4",
    date: "17 вересня (чт)",
    title: "Village, SoHo, Chelsea & High Line",
    color: "#911eb4",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту.", gmaps: HOTEL.gmaps },
      {
        name: "Washington Square Park",
        coords: [40.7308, -73.9973],
        desc: "Серце Greenwich Village зі знаменитою аркою та студентською атмосферою NYU.",
        howTo: "Метро 6 від Grand Central до Astor Place, далі 10 хв пішки, ~25 хв.",
        gmaps: gm("Washington Square Park New York")
      },
      {
        name: "SoHo streets",
        coords: [40.7233, -74.0030],
        desc: "Район з литими чавунними фасадами, дизайнерські бутіки та стрит-арт.",
        howTo: "10-15 хв пішки на південь від Washington Square Park.",
        gmaps: gm("SoHo Manhattan shopping district")
      },
      {
        name: "Elizabeth Street Garden",
        coords: [40.7226, -73.9958],
        desc: "Прихований садок-скульптурний парк у Nolita — тиха зелена оаза серед місцевих скульптур.",
        howTo: "7 хв пішки на схід від SoHo (Elizabeth St між Prince і Spring).",
        gmaps: gm("Elizabeth Street Garden New York")
      },
      {
        name: "Russ & Daughters",
        coords: [40.7188, -73.9893],
        desc: "Легендарна єврейська гастрономічна крамниця (1914 р.) — лосось, багелі з локсом, ікра. Чудове місце на ланч.",
        howTo: "12-15 хв пішки на південний схід через Little Italy/Nolita (Orchard St, Lower East Side).",
        gmaps: gm("Russ & Daughters Orchard Street")
      },
      {
        name: "Chelsea Market",
        coords: [40.7424, -74.0061],
        desc: "Критий фуд-маркет у старій фабричній будівлі з десятками кав'ярень і крамниць.",
        howTo: "Пішки 5 хв до станції Delancey St-Essex St, сісти на лінію F (напрямок Uptown/Queens), вийти на станції 14 St (6th Ave line), далі 5 хв пішки на захід по 15th St. Загалом ~20 хв.",
        gmaps: gm("Chelsea Market New York")
      },
      {
        name: "Fellini Coffee (Chelsea)",
        coords: [40.7440, -74.0006],
        desc: "Італійська кав'ярня з фірмовими лате (Tiramisu Latte, Dolce Vita Latte) — затишна перерва на каву. (Точну назву 'Fillini' не вдалось підтвердити, це Fellini Coffee — найближчий і найімовірніший відповідник, 231 8th Ave.)",
        howTo: "10 хв пішки на схід від Chelsea Market по 16th-18th St до 8th Ave.",
        gmaps: gm("Fellini Coffee 231 8th Ave New York")
      },
      {
        name: "High Line",
        coords: [40.7397, -74.0089],
        desc: "Парк на колишній надземній залізниці з видами на Hudson River та вуличним мистецтвом.",
        howTo: "10 хв пішки на південний захід від Fellini Coffee до входу на 14th St/Gansevoort St.",
        gmaps: gm("High Line Park New York")
      },
      {
        name: "Little Island",
        coords: [40.7412, -74.0138],
        desc: "Незвичний плавучий парк-острів на палях у Гудзоні з амфітеатром і краєвидами на річку.",
        howTo: "5 хв пішки з High Line на захід до Pier 55.",
        gmaps: gm("Little Island Pier 55 New York")
      },
      {
        name: "Hudson Yards / Vessel",
        coords: [40.7538, -74.0022],
        desc: "Сучасний квартал хмарочосів зі знаменитою стільниковою структурою Vessel.",
        howTo: "15 хв пішки на північ по High Line до кінцевої зупинки на 34th St.",
        gmaps: gm("Hudson Yards Vessel New York")
      },
      {
        name: "Peak / Hudson VU (вечеря для двох)",
        coords: [40.7540, -74.0018],
        desc: "Ресторан на 101-му поверсі 30 Hudson Yards з панорамним видом на весь Мангеттен — ідеальне романтичне місце для вечері на двох. Бронюйте столик заздалегідь.",
        howTo: "Прямо в Hudson Yards, ліфт на 101-й поверх.",
        gmaps: gm("Peak restaurant Hudson Yards New York")
      },
      { name: HOTEL.name + " (повернення)", coords: HOTEL.coords, desc: "Повернення в готель.", howTo: "Метро 7 від 34 St-Hudson Yards до Grand Central-42 St, ~15 хв.", gmaps: HOTEL.gmaps }
    ]
  },
  {
    id: "day5",
    date: "18 вересня (пт)",
    title: "Гастрономічний день: Union Square, NoMad, West Village",
    color: "#42d4f4",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту, легкий день перед від'їздом.", gmaps: HOTEL.gmaps },
      {
        name: "Union Square",
        coords: [40.7359, -73.9911],
        desc: "Площа з грінмаркетом (фермерський ринок у визначені дні).",
        howTo: "Метро 4/6 від Grand Central до Union Square, ~10 хв.",
        gmaps: gm("Union Square New York")
      },
      {
        name: "Flatiron Building",
        coords: [40.7411, -73.9897],
        desc: "Знаменита будівля-трикутник 1902 року.",
        howTo: "5-7 хв пішки на північ від Union Square.",
        gmaps: gm("Flatiron Building New York")
      },
      {
        name: "Motek (NoMad)",
        coords: [40.7396, -73.9908],
        desc: "Ізраїльське кафе — хумус, шакшука, свіжі салати. Гарне місце на ланч, є щасливі години з коктейлями/закусками по $5.",
        howTo: "3 хв пішки від Flatiron Building (125 5th Ave).",
        gmaps: gm("Motek NoMad 125 5th Ave New York")
      },
      {
        name: "Buvette (West Village)",
        coords: [40.7326, -74.0027],
        desc: "Затишний французький бістро-бар — круасани, вино, невеликі тарілки. (Якщо малось на увазі 'Buchette' — це, ймовірно, Buvette.)",
        howTo: "Метро 6 до Bleecker St, далі 10 хв пішки, ~20 хв від Motek.",
        gmaps: gm("Buvette 42 Grove Street New York")
      },
      { name: HOTEL.name + " (повернення)", coords: HOTEL.coords, desc: "Повернення в готель, збори перед від'їздом.", howTo: "Метро 6 від Bleecker St до Grand Central-42 St, ~20 хв.", gmaps: HOTEL.gmaps }
    ]
  }
];

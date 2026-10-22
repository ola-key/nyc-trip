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
    budget: "≈ $200 на день (3 особи: ми + син 13р.)",
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
        desc: "Безкоштовний паром курсує з Whitehall Terminal і дає чудовий вид на Статую Свободи та Ellis Island без квитка на офіційний круїз. Це не туристичний атракціон, а звичайний транспорт для жителів Staten Island — тому той самий паром назад не чекає. Дорога в один бік ~25 хв. Рада: щоб краще побачити Статую Свободи, на вході одразу виходьте на праву зовнішню палубу (по правому борту).",
        cost: "Безкоштовно",
        howTo: "5 хв пішки від Battery Park до Whitehall Terminal, паром ходить кожні 15-30 хв. На прибутті на Staten Island вийдіть з порома і перейдіть у тому ж терміналі на паром у зворотному напрямку — до Manhattan/Whitehall Terminal (ходить так само кожні 15-30 хв). Загалом дорога туди-назад ~50-60 хв разом з пересадкою.",
        gmaps: gm("Staten Island Ferry Whitehall Terminal")
      },
      {
        name: "Charging Bull",
        coords: [40.7055, -74.0134],
        desc: "Знаменита бронзова статуя бика — символ фінансового Волл-стріт. За традицією туристи труть деталі бика (роги, ніс, яйця) на удачу й гроші 😄. Поруч парк Bowling Green.",
        howTo: "10 хв пішки на північ від Whitehall Terminal.",
        gmaps: "https://maps.app.goo.gl/LPUSTgAgir1Qn9tKA"
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
        name: "Dawn's 'Til Dusk (кава і перекус)",
        coords: [40.70342, -73.99035],
        desc: "Затишна кав'ярня в DUMBO — смачна кава та легкий перекус після переходу мосту.",
        cost: "$45 (кава + перекус)",
        howTo: "10 хв пішки після переходу мосту в Brooklyn, за Clock Tower Condominium (вхід з боку Main St).",
        gmaps: gm("Dawn's Til Dusk 33 Main Street Brooklyn")
      },
      {
        name: "Dumbo Manhattan Bridge View",
        coords: [40.70333, -73.98970],
        desc: "Класичний вид на Manhattan Bridge з Washington Street — знаменитий кадр, відомий з кіно та Instagram.",
        howTo: "5 хв пішки на схід від Dawn's 'Til Dusk, до рогу Washington St і Water St.",
        gmaps: gm("Manhattan Bridge View Washington Street Dumbo Brooklyn")
      },
      {
        name: "Pebble Beach",
        coords: [40.70442, -73.99042],
        desc: "Кам'яний пляж з класичним видом на Manhattan Bridge та скайлайн — улюблена фотолокація.",
        howTo: "2 хв пішки на північний захід від Manhattan Bridge View, вздовж набережної Brooklyn Bridge Park (ділянка Main Street).",
        gmaps: gm("Pebble Beach 65 Plymouth Street Brooklyn")
      },
      {
        name: "Cecconi's DUMBO (вечеря)",
        coords: [40.7035, -73.9920],
        desc: "Італійський ресторан прямо під Manhattan Bridge, тераса з видом на воду та скайлайн Мангеттена — вечеря з видом після Pebble Beach. Щоб сісти на терасі — бронюйте столик за кілька годин наперед.",
        cost: "$130 (вечеря на 3 особи)",
        howTo: "5-7 хв пішки від Pebble Beach вздовж набережної (55 Water St, Brooklyn, будівля Empire Stores).",
        gmaps: gm("Cecconi's Dumbo 55 Water Street Brooklyn")
      },
      {
        name: "Станція York St (лінія F)",
        coords: [40.701529, -73.986783],
        desc: "Вхід у метро на розі Jay St / York St — звідси починається дорога назад у готель.",
        howTo: "Пішки 8-10 хв від Cecconi's DUMBO.",
        gmaps: gm("York St subway station F train Brooklyn Jay Street")
      },
      {
        name: HOTEL.name + " (повернення)",
        coords: HOTEL.coords,
        desc: "Повернення в готель.",
        howTo: "Їхати F у бік Мангеттена до 2 Ave, перейти на лінію 6 (напрямок Uptown/Pelham Bay Pk) до станції Grand Central-42 St. Загалом ~25-30 хв.",
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
        name: "Grand Central Terminal",
        coords: [40.7527, -73.9772],
        desc: "Історичний вокзал 1913 року, Whispering Gallery, зоряна стеля головного залу.",
        howTo: "15 хв пішки на захід від Tudor City Bridge по 42nd St до Grand Central Terminal (89 E 42nd St).",
        gmaps: "https://maps.app.goo.gl/sJ42GQAJAXqNyurC8"
      },
      {
        name: "The Campbell (Campbell Bar)",
        coords: [40.7524, -73.9774],
        desc: "Елегантний коктейль-бар всередині Grand Central, оформлений як кабінет фінансиста 1920-х. У барі формат відкритого чеку.",
        howTo: "З головного залу Grand Central Terminal повернись спиною до входу в Apple Store і йди до протилежних сходів (не тих, що ведуть до Apple Store). Піднімись по сходах і вийди на вулицю. Одразу за дверима поверни ліворуч — вхід у бар буде в тій самій будівлі, шукай двері з вивіскою. Далі йди за вказівниками (15 Vanderbilt Ave).",
        gmaps: "https://maps.app.goo.gl/M5J8jLpkdBFmfQPdA"
      },
      {
        name: "New York Public Library",
        coords: [40.7532, -73.9822],
        desc: "Знаменита будівля з левами Patience і Fortitude, зал Rose Main Reading Room. Stephen A. Schwarzman Building.",
        howTo: "10 хв пішки на захід від The Campbell по 42nd St до бібліотеки (476 5th Ave).",
        gmaps: gm("New York Public Library Stephen A. Schwarzman Building 476 5th Ave New York")
      },
      {
        name: "Bryant Park",
        coords: [40.7536, -73.9832],
        desc: "Зелений парк за бібліотекою з кафе та літніми подіями.",
        howTo: "Одразу за бібліотекою, 2 хв пішки.",
        gmaps: gm("Bryant Park, New York")
      },
      {
        name: "St. Patrick's Cathedral",
        coords: [40.7585, -73.9759],
        desc: "Найбільший неоготичний католицький собор США.",
        howTo: "15 хв пішки на північний схід від Bryant Park по 5th Ave.",
        gmaps: gm("St. Patrick's Cathedral New York")
      },
      {
        name: "M Social Hotel rooftop (швидкий візит, 20-30 хв)",
        coords: [40.7645, -73.9847],
        desc: "Дах-бар Beast & Butterflies з видом на Таймс-сквер — зайти лише подивитись краєвид, без розсідання (20-30 хв).",
        howTo: "15-18 хв пішки на захід від St. Patrick's Cathedral по 52nd St (226 W 52nd St).",
        gmaps: "https://maps.app.goo.gl/Xxy5VvCLVggnRQUL7"
      },
      {
        name: "Times Square",
        coords: [40.7580, -73.9855],
        desc: "Найяскравіший перехрестя світу з рекламними екранами та театрами Бродвею.",
        howTo: "10 хв пішки на південь від M Social по 7th Ave/Broadway.",
        gmaps: gm("Times Square, New York")
      },
      {
        name: HOTEL.name + " (повернення — перевдягнутись на вечерю)",
        coords: HOTEL.coords,
        desc: "Повернення в готель, щоб перевдягнутися у стиль smart casual / елегант перед вечерею в Duomo51.",
        howTo: "Пішки 15 хв на схід по 42nd St до готелю. Або метро: S Shuttle від Times Sq-42 St до Grand Central-42 St (2 хв їзди) + 5 хв пішки.",
        gmaps: HOTEL.gmaps
      },
      {
        name: "Duomo51 (вечеря — зустріч)",
        coords: [40.7607, -73.9797],
        desc: "Італійський ресторан на 7-му поверсі готелю Doubletree, з видом на Rockefeller Center та Мідтаун — місце вашої вечері-зустрічі у вівторок. Щоб сісти на терасі — бронюйте столик за 1-2 дні наперед.",
        howTo: "Згідно пункту 9: 15-18 хв пішки на північ від готелю по 5th Ave/Madison Ave (25 W 51st St, 7-й поверх). Або метро: лінія 6 від Grand Central-42 St до 51 St (1 зупинка) + 5 хв пішки.",
        gmaps: gm("Duomo51 25 W 51st St New York")
      },
      {
        name: HOTEL.name + " (повернення)",
        coords: HOTEL.coords,
        desc: "Повернення в готель після вечері.",
        howTo: "Пішки 3 хв до станції 5 Ave/53 St (лінія 6), їхати до Grand Central-42 St (2 зупинки). Загалом ~15 хв. Або пішки 20 хв по Madison/Park Ave.",
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

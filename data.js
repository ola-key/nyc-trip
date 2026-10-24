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
    budget: "≈ $250 на день (3 особи)",
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
        gmaps: "https://maps.app.goo.gl/M5J8jLpkdBFmfQPdA",
        cost: "$50"
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
        name: "M Social Hotel rooftop",
        coords: [40.7645, -73.9847],
        desc: "Дах-бар Beast & Butterflies з видом на Таймс-сквер — тут варто зупинитись і відпочити: випити чай/каву або щось з'їсти, набратись сил перед вечором. Бронювання не обов'язкове.",
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
        howTo: "15-18 хв пішки на північ від готелю по 5th Ave/Madison Ave (25 W 51st St, 7-й поверх). Або метро: лінія 6 від Grand Central-42 St до 51 St (1 зупинка) + 5 хв пішки.",
        gmaps: gm("Duomo51 25 W 51st St New York"),
        cost: "$150"
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
        name: "Black Fox Coffee",
        coords: [40.7613, -73.9737],
        desc: "Якісна смачна кава в атмосфері 'білих комірців'. Гарне місце для ранкової кави перед прогулянкою по Central Park.",
        howTo: "15-20 хв пішки від готелю, або метро N/R/W до 5 Ave-59 St.",
        gmaps: "https://maps.app.goo.gl/SHJUPzuK3jnsdNNV8"
      },
      {
        name: "The Plaza Hotel",
        coords: [40.7644, -73.9745],
        desc: "Легендарний готель-палац 1907 року на розі Central Park — відомий за фільмами 'Один удома 2' та 'Великий Гетсбі'. Зовнішній вигляд і холл варті короткого візиту.",
        howTo: "3-5 хв пішки на північ від Black Fox Coffee.",
        gmaps: gm("The Plaza Hotel New York")
      },
      {
        name: "The Pond at Central Park",
        coords: [40.7656, -73.9735],
        desc: "Мальовничий ставок біля південно-східного входу в парк — саме тут знімали сцени з 'Один удома 2'.",
        howTo: "5 хв пішки в парк через вхід Grand Army Plaza (5th Ave/59th St), навпроти Plaza Hotel.",
        gmaps: "https://maps.app.goo.gl/4wbJT6ztARwkPTAP9"
      },
      {
        name: "Gapstow Bridge",
        coords: [40.7665, -73.9737],
        desc: "Кам'яний місток над ставком — один з найфотографованіших видів Central Park з хмарочосами на фоні.",
        howTo: "2 хв пішки на північ від The Pond.",
        gmaps: "https://maps.app.goo.gl/UQMx7MQZ8G7nF7Uw5"
      },
      {
        name: "Bethesda Terrace & Fountain",
        coords: [40.7735, -73.9702],
        desc: "Найвідоміша тераса парку з фонтаном 'Ангел вод'.",
        howTo: "15-18 хв пішки на північ через парк (повз Mall/Literary Walk) від Gapstow Bridge.",
        gmaps: "https://maps.app.goo.gl/9vK5bHY1Q6kg8mu17"
      },
      {
        name: "Bow Bridge",
        coords: [40.7737, -73.9714],
        desc: "Витончений чавунний міст над озером — одна з найфотогеничніших локацій парку.",
        howTo: "5 хв пішки на захід від Bethesda Terrace.",
        gmaps: "https://maps.app.goo.gl/C6nV1zagnV4k2UtS7"
      },
      {
        name: "The Metropolitan Museum of Art (Met)",
        coords: [40.7794, -73.9632],
        desc: "Один з найбільших художніх музеїв світу. Плануйте 2-3 години.",
        howTo: "20-25 хв пішки через парк на схід (повз Ramble та Loeb Boathouse) до 5th Ave/82nd St.",
        gmaps: "https://maps.app.goo.gl/ionKCLUnv1ChMjzQA"
      },
      {
        name: "Rosetta Bakery",
        coords: [40.7746, -73.9823],
        desc: "Італійська пекарня-кафе на Upper West Side — круасани, кава, легкий перекус. Недорога і якісна точка перекусу, де також доступна безкоштовна вода. 1928 Broadway, New York, NY 10023.",
        howTo: "~4 км пішки через парк (поперечна дорога 86th St Transverse) і далі симпатичним житловим районом Upper West Side — дорога приємна, багато зелені, різноманітна забудова, є на що подивитись. ~50-60 хв кроку.",
        gmaps: "https://maps.app.goo.gl/3ftP3EnxVozyq5Bw6"
      },
      {
        name: "Columbus Circle",
        coords: [40.7681, -73.9819],
        desc: "Кругла площа з монументом Колумбу, вхід до Time Warner Center із крамницями.",
        howTo: "5-7 хв пішки на південь по Broadway від Rosetta Bakery.",
        gmaps: gm("Columbus Circle New York")
      },
      {
        name: "Times Square",
        coords: [40.7580, -73.9855],
        desc: "Яскраве серце Мідтауну з екранами та вогнями.",
        howTo: "15-20 хв пішки на південний схід по Broadway від Columbus Circle, або метро: лінія A/C/B/D від 59 St-Columbus Circle до 42 St-Port Authority Bus Terminal (2 зупинки).",
        gmaps: gm("Times Square New York")
      },
      { name: HOTEL.name + " (повернення)", coords: HOTEL.coords, desc: "Повернення в готель.", howTo: "15 хв пішки на схід по 42nd St до готелю, або метро: S Shuttle від Times Sq-42 St до Grand Central-42 St (2 хв їзди) + 5 хв пішки.", gmaps: HOTEL.gmaps }
    ]
  },
  {
    id: "day4",
    date: "17 вересня (чт)",
    title: "Little Island, High Line & Hudson Yards",
    color: "#911eb4",
    places: [
      { name: HOTEL.name, coords: HOTEL.coords, desc: HOTEL.desc, howTo: "Старт маршруту.", gmaps: HOTEL.gmaps },
      {
        name: "Little Island",
        coords: [40.7420024, -74.010299],
        desc: "Незвичний плавучий парк-острів на палях у Гудзоні (Pier 55) з амфітеатром і краєвидами на річку.",
        howTo: "Метро: S Shuttle до Times Sq-42 St, пересадка на лінію A/C/E до 14 St (8th Ave), далі 12-15 хв пішки на захід до Pier 55. Загалом ~35-40 хв. Або таксі/Uber ~20 хв.",
        gmaps: "https://maps.app.goo.gl/DXL88htfj98PgaXB8"
      },
      {
        name: "The High Line / Boardwalk Terminus",
        coords: [40.7398909, -74.0082172],
        desc: "Південний кінець High Line — парку на колишній надземній залізниці з видами на Hudson River та вуличним мистецтвом.",
        howTo: "5 хв пішки на північний схід від Little Island до входу на Gansevoort St.",
        gmaps: "https://maps.app.goo.gl/Ueu1AkrskZAQ2dLH9"
      },
      {
        name: "Northern Spur Preserve - High Line",
        coords: [40.7435079, -74.0070884],
        desc: "Один з найкрасивіших видів High Line: вузька вуличка між цегляними складами кольору теракоти, а над нею — старовинний підвісний пішохідний перехід між будівлями.",
        howTo: "8-10 хв пішки на північ по High Line.",
        gmaps: "https://maps.app.goo.gl/5pAkQnJKveNqMrTi9"
      },
      {
        name: "High Line Observation Deck",
        coords: [40.743931, -74.0068848],
        desc: "Оглядовий майданчик з лавками над 10th Ave — зручне місце перепочити і подивитись на вуличний рух знизу.",
        howTo: "1-2 хв пішки, одразу поруч із Northern Spur Preserve.",
        gmaps: "https://maps.app.goo.gl/enxC9m1VcZpH3jg56"
      },
      {
        name: "High Line Interim Walkway",
        coords: [40.7548149, -74.0059591],
        desc: "Ділянка High Line зі збереженими старими рейками серед трав — один із найатмосферніших відрізків парку.",
        howTo: "15-18 хв пішки на північ по High Line.",
        gmaps: "https://maps.app.goo.gl/NK6yqJxHDmGctaB9A"
      },
      {
        name: "High Line View Point",
        coords: [40.7556312, -74.0055578],
        desc: "Панорамна точка ближче до кінця High Line з видом на Hudson Yards.",
        howTo: "2-3 хв пішки на північ від Interim Walkway.",
        gmaps: "https://maps.app.goo.gl/1QjCYzved7S47CJt9"
      },
      {
        name: "Vessel",
        coords: [40.7538073, -74.0021537],
        desc: "Знаменита стільникова структура-скульптура у центрі Hudson Yards.",
        howTo: "8-10 хв пішки на схід від виходу з High Line (30th St) до Hudson Yards.",
        gmaps: "https://maps.app.goo.gl/SoZWHT96a5VBLtZD7"
      },
      {
        name: "Hudson Yards Public Square and Gardens",
        coords: [40.7539248, -74.0033698],
        desc: "Головна площа Hudson Yards навколо Vessel — сучасні сади, лавки, хмарочоси навколо.",
        howTo: "1-2 хв пішки, одразу поруч із Vessel.",
        gmaps: "https://maps.app.goo.gl/XKaAwAYbKESCud4J9"
      },
      {
        name: "Бродвейський театр: Marquis Theatre",
        coords: [40.7592, -73.9847],
        desc: "Вистава 'Stranger Things: The First Shadow' на Бродвеї. 210 W 46th St, New York, NY 10036.",
        howTo: "Метро: лінія 7 від 34 St-Hudson Yards до Times Sq-42 St (кілька зупинок), далі 5 хв пішки до театру на 46th St. Загалом ~20 хв.",
        gmaps: gm("Marquis Theatre 210 W 46th St New York"),
        ticketLink: "https://www.getyourguide.com/new-york-city-l59/nyc-stranger-things-the-first-shadow-on-broadway-t866006/?visitor-id=MX8OS1D0R8IVZ86EO4QDKL1K4POHHQKT&locale_autoredirect_optout=true"
      },
      { name: HOTEL.name + " (повернення)", coords: HOTEL.coords, desc: "Повернення в готель після вистави.", howTo: "10-12 хв пішки на схід по 42nd St до готелю.", gmaps: HOTEL.gmaps }
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

// Ініціалізація карти. renderer: L.canvas() усуває артефакти-«петлі» на лініях
// маршруту, які трапляються в SVG-рендерері Leaflet при дуже глибокому зумі.
const map = L.map('map', { zoomControl: true, renderer: L.canvas(), maxZoom: 19 }).setView([40.745, -73.985], 13);

// CARTO почав вимагати API-ключ для растрових тайлів (з'явився напис
// "api key required"). Esri World Street Map — безкоштовний, без ключа,
// без обмежень по referrer (працює і з file://, і з https).
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ'
}).addTo(map);

const dayLayers = {}; // id -> { polyline, markers: [], group }
let activeDayId = null;

// Формула гаверсинуса — відстань між двома точками (км)
function haversineKm(a, b) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function dayDistanceKm(day) {
  let total = 0;
  for (let i = 1; i < day.places.length; i++) {
    total += haversineKm(day.places[i - 1].coords, day.places[i].coords);
  }
  return total;
}

function buildPlacePopup(place, index, total) {
  const numLabel = index === 0 ? 'Старт' : (index === total - 1 ? 'Фініш' : `#${index}`);
  return `<div style="min-width:180px">
    <strong>${numLabel}. ${place.name}</strong><br/>
    <a href="${place.gmaps}" target="_blank" rel="noopener">Відкрити в Google Maps ↗</a>
  </div>`;
}

function numberedIcon(n, color) {
  return L.divIcon({
    className: '',
    html: `<div class="marker-num" style="background:${color}">${n}</div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });
}

function renderDetailPanel(day) {
  const panel = document.getElementById('detail-panel');
  const placesHtml = day.places.map((p, i) => {
    const numLabel = i === 0 ? 'Старт' : (i === day.places.length - 1 ? 'Фініш' : `Зупинка ${i}`);
    const arrow = i < day.places.length - 1 ? '<div class="route-arrow">↓</div>' : '';
    return `
      <div class="place-card">
        <h3>${numLabel}: ${p.name}</h3>
        <p><span class="label">Опис:</span> ${p.desc}</p>
        <p><span class="label">Як дістатись:</span> ${p.howTo}</p>
        <a class="gmaps-link" href="${p.gmaps}" target="_blank" rel="noopener">Відкрити в Google Maps ↗</a>
      </div>
      ${arrow}
    `;
  }).join('');

  panel.innerHTML = `
    <button class="close-btn" onclick="closeDetailPanel()">&times;</button>
    <h2>${day.title}</h2>
    <div class="detail-date">${day.date} · ≈ ${(dayDistanceKm(day) * 1.3).toFixed(1)} км маршруту (пішки + метро)</div>
    ${placesHtml}
  `;
  panel.classList.add('open');
}

function closeDetailPanel() {
  document.getElementById('detail-panel').classList.remove('open');
}
window.closeDetailPanel = closeDetailPanel;

function drawDay(day) {
  const latlngs = day.places.map(p => p.coords);
  const polyline = L.polyline(latlngs, {
    color: day.color,
    weight: 4,
    opacity: 0.85,
    dashArray: null
  }).addTo(map);

  polyline.on('click', () => selectDay(day.id));
  polyline.bindTooltip(`${day.date}: ${day.title}`, { sticky: true });

  const markers = day.places.map((p, i) => {
    const marker = L.marker(p.coords, {
      icon: numberedIcon(i === 0 || i === day.places.length - 1 ? (i === 0 ? 'S' : 'F') : i, day.color)
    }).addTo(map);
    // Клік по маркеру показує лише коротку картку (назва + Google Maps),
    // а не весь детальний маршрут — щоб не закривати мапу на мобільному.
    marker.bindPopup(buildPlacePopup(p, i, day.places.length));
    return marker;
  });

  dayLayers[day.id] = { polyline, markers };
}

function setDayVisible(id, visible) {
  const layer = dayLayers[id];
  if (!layer) return;
  const method = visible ? 'addTo' : 'removeFrom';
  if (visible) {
    layer.polyline.addTo(map);
    layer.markers.forEach(m => m.addTo(map));
  } else {
    map.removeLayer(layer.polyline);
    layer.markers.forEach(m => map.removeLayer(m));
  }
}

function selectDay(id) {
  activeDayId = id;
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dayId === id);
  });
  DAYS.forEach(d => setDayVisible(d.id, d.id === id));
  const day = DAYS.find(d => d.id === id);
  renderDetailPanel(day);
  const bounds = L.latLngBounds(day.places.map(p => p.coords));
  map.fitBounds(bounds, { padding: [60, 60] });
  closeSidebarMobile();
}

function showAllDays() {
  activeDayId = null;
  document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
  DAYS.forEach(d => setDayVisible(d.id, true));
  closeDetailPanel();
  const allCoords = DAYS.flatMap(d => d.places.map(p => p.coords));
  map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] });
  closeSidebarMobile();
}

// На мобільному сайдбар — це висувна панель поверх мапи. Після вибору дня
// ховаємо її, щоб мапа й деталі маршруту стали видимими.
function closeSidebarMobile() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-backdrop').classList.remove('open');
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-backdrop').classList.toggle('open');
}
document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
document.getElementById('sidebar-backdrop').addEventListener('click', toggleSidebar);

function buildSidebar() {
  const list = document.getElementById('day-list');
  DAYS.forEach(day => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.dataset.dayId = day.id;
    btn.style.borderLeftColor = day.color;
    const straightKm = dayDistanceKm(day);
    const walkKm = (straightKm * 1.3).toFixed(1); // поправка на реальні вулиці (не по прямій)
    btn.innerHTML = `<span class="day-date">${day.date}</span><span class="day-title">${day.title}</span><span class="day-distance">≈ ${walkKm} км маршруту (пішки + метро)</span>`;
    btn.addEventListener('click', () => selectDay(day.id));
    li.appendChild(btn);
    list.appendChild(li);
  });
  document.getElementById('toggle-all').addEventListener('click', showAllDays);
}

// Готель — окремий маркер, завжди видимий
function drawHotelMarker() {
  const hotelIcon = L.divIcon({
    className: '',
    html: `<div style="background:#fff;color:#000;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;border:2px solid #000;">H</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });
  L.marker(HOTEL.coords, { icon: hotelIcon, zIndexOffset: 1000 })
    .addTo(map)
    .bindPopup(`<strong>${HOTEL.name}</strong><br/><a href="${HOTEL.gmaps}" target="_blank" rel="noopener">Відкрити в Google Maps ↗</a>`);
}

buildSidebar();
DAYS.forEach(drawDay);
drawHotelMarker();
showAllDays();

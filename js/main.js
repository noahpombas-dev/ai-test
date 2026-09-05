const steaks = [
  {
    id: "filet",
    name: "Filetsteak",
    category: "premium",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
    summary: "Das zarteste Stück. Kaum Fett, feine Faser, eleganter Geschmack.",
    text: "Das Filet sitzt unter dem Rücken und arbeitet kaum. Deshalb ist es so butterzart — und braucht präzise Hitze, damit es nicht trocken wird. Ideal für alle, die Zartheit über Intensität stellen.",
    facts: {
      Schnitt: "Rückenfilet",
      Charakter: "Sehr zart, mild",
      Tipp: "Kurz braten, Medium Rare",
    },
  },
  {
    id: "ribeye",
    name: "Ribeye / Entrecôte",
    category: "premium",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    summary: "Stark marmoriert, saftig, mit dem berühmten Fettauge.",
    text: "Das Ribeye kommt aus dem Hochrippenbereich. Die Marmorierung schmilzt in der Pfanne und gibt dem Fleisch nussige Tiefe. In Frankreich heißt der Cut Entrecôte — ein Klassiker der besseren Häuser.",
    facts: {
      Schnitt: "Hochrippe",
      Charakter: "Saftig, aromatisch",
      Tipp: "Hohe Hitze, Fett mitgaren",
    },
  },
  {
    id: "rump",
    name: "Rumpsteak",
    category: "klassiker",
    tag: "Klassiker",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80",
    summary: "Der deutsche Klassiker: kräftig, faserig, mit schönem Fettrand.",
    text: "Rumpsteak stammt aus der Hüfte. Es hat mehr Biss als Filet, dafür mehr Fleischgeschmack. Der Fettrand darf mitbraten — er würzt das Stück und hält es saftig.",
    facts: {
      Schnitt: "Hüfte / Keule",
      Charakter: "Kräftig, klassisch",
      Tipp: "Gegen die Faser schneiden",
    },
  },
  {
    id: "strip",
    name: "New York Strip",
    category: "klassiker",
    tag: "Klassiker",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    summary: "Fest, würzig, mit klarer Rückenstruktur — der Steakhouse-Schnitt.",
    text: "Auch Strip Loin genannt. Weniger Fett als Ribeye, aber ein klarer, würziger Rindergeschmack. In New Yorker Steakhäusern ist es der Alltagsschnitt der Kenner.",
    facts: {
      Schnitt: "Hinteres Rückenstück",
      Charakter: "Fest, würzig",
      Tipp: "Mittelhoch, nicht zerdrücken",
    },
  },
  {
    id: "tbone",
    name: "T-Bone",
    category: "grill",
    tag: "Grill",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    summary: "Filet und Strip an einem T-förmigen Knochen.",
    text: "Das T-Bone vereint zwei Welten: zartes Filet auf der einen, kräftiges Roastbeef auf der anderen Seite. Der Knochen speichert Hitze und gibt Röstaroma. Am Grill ein Schauspiel.",
    facts: {
      Schnitt: "Kurzbraten mit Knochen",
      Charakter: "Zwei Texturen",
      Tipp: "Filetseite weniger heiß halten",
    },
  },
  {
    id: "porterhouse",
    name: "Porterhouse",
    category: "premium",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=1200&q=80",
    summary: "Wie T-Bone, aber mit deutlich größerem Filetanteil.",
    text: "Das Porterhouse ist das opulentere Geschwister des T-Bone. Mehr Filet, mehr Theater, oft für zwei Personen. Ein Cut, der den Tisch still werden lässt.",
    facts: {
      Schnitt: "Lende mit großem Filet",
      Charakter: "Üppig, festlich",
      Tipp: "Im Ofen nachziehen lassen",
    },
  },
  {
    id: "tomahawk",
    name: "Tomahawk",
    category: "premium",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1615937657715-bc7b11e749db?auto=format&fit=crop&w=1200&q=80",
    summary: "Ribeye am langen Rippenknochen — das Showpiece.",
    text: "Ein Tomahawk ist im Kern ein Ribeye, aber mit langem, frenched Knochen. Es wirkt archaisch und modern zugleich. Wegen der Dicke braucht es indirekte Hitze nach der Kruste.",
    facts: {
      Schnitt: "Ribeye am Knochen",
      Charakter: "Marmoriert, dramatisch",
      Tipp: "Reverse Sear oder Finish im Ofen",
    },
  },
  {
    id: "flank",
    name: "Flanksteak",
    category: "grill",
    tag: "Grill",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    summary: "Flache Bauchlage, intensive Faser, großer Geschmack.",
    text: "Flanksteak kommt aus der Flanke. Es ist mager, faserig und ungeheuer aromatisch — perfekt für Marinaden. Immer quer zur Faser aufschneiden, sonst wird es zäh.",
    facts: {
      Schnitt: "Flanke",
      Charakter: "Faserig, würzig",
      Tipp: "Marinieren, Medium Rare",
    },
  },
  {
    id: "skirt",
    name: "Skirt / Kronfleisch",
    category: "grill",
    tag: "Grill",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    summary: "Dünn, wild im Aroma — der Star in Fajitas und am Holzkohlegrill.",
    text: "Skirt Steak, in Deutschland oft als Kronfleisch bekannt, sitzt am Zwerchfell. Es gart in Minuten, verzeiht keine Übergarung und belohnt mit tiefem Rinderaroma.",
    facts: {
      Schnitt: "Zwerchfell",
      Charakter: "Intensiv, dünn",
      Tipp: "Sehr heiß, sehr kurz",
    },
  },
  {
    id: "huefte",
    name: "Hüftsteak",
    category: "klassiker",
    tag: "Klassiker",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
    summary: "Alltagstauglich, mager, klar im Geschmack.",
    text: "Hüftsteak ist in deutschen Küchen zu Hause: nicht zu teuer, nicht zu fett, mit ehrlichem Rindergeschmack. Etwas mehr Aufmerksamkeit beim Garen, dann bleibt es zart.",
    facts: {
      Schnitt: "Hüfte",
      Charakter: "Mager, ehrlich",
      Tipp: "Nicht über Medium braten",
    },
  },
  {
    id: "flatiron",
    name: "Flat Iron",
    category: "klassiker",
    tag: "Klassiker",
    image:
      "https://images.unsplash.com/photo-1615937691194-97db32e5d19c?auto=format&fit=crop&w=1200&q=80",
    summary: "Aus der Schulter, überraschend zart — ein Geheimtipp.",
    text: "Das Flat Iron kommt aus der Schulterklappe. Richtig ausgelöst ist es fast so zart wie Filet, aber deutlich aromatischer. In modernen Steakhäusern ein stiller Favorit.",
    facts: {
      Schnitt: "Schulter",
      Charakter: "Zart und würzig",
      Tipp: "Gleichmäßig flach braten",
    },
  },
  {
    id: "chateau",
    name: "Chateaubriand",
    category: "premium",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    summary: "Das Herzstück des Filets — für zwei, feierlich und weich.",
    text: "Chateaubriand ist das dickste Mittelstück des Filets. Es wird meist im Ganzen gebraten und geteilt. Ein Cut für Abende, an denen das Fleisch der ganze Abend ist.",
    facts: {
      Schnitt: "Filetmitte",
      Charakter: "Samtig, festlich",
      Tipp: "Im Ganzen braten, dann teilen",
    },
  },
];

const doneness = [
  {
    id: "rare",
    name: "Rare · Blutig",
    temp: "48–52 °C",
    color: "Kühlrot, weicher Kern",
    text: "Kaum gegart, sehr saftig, der Kern bleibt kühl. Nur für erstklassige, frische Cuts.",
    swatch: "linear-gradient(90deg, #3a0d0c, #9a1f1c 40%, #d36a4a)",
  },
  {
    id: "medium-rare",
    name: "Medium Rare · Englisch",
    temp: "54–57 °C",
    color: "Warmrot, zart und saftig",
    text: "Die goldene Mitte für Ribeye, Filet und Strip. Röstaroma außen, seidiger Kern innen.",
    swatch: "linear-gradient(90deg, #4a1410, #b43a28 45%, #e08a55)",
  },
  {
    id: "medium",
    name: "Medium",
    temp: "60–63 °C",
    color: "Rosaroter Kern",
    text: "Fester, immer noch saftig. Gut für Rump- und Hüftsteak, wenn jemand weniger Rot möchte.",
    swatch: "linear-gradient(90deg, #5a2214, #c45c26 50%, #e8b07a)",
  },
  {
    id: "medium-well",
    name: "Medium Well",
    temp: "65–69 °C",
    color: "Nur noch Hauch Rosa",
    text: "Deutlich trockener. Das Fett trägt noch, aber der Saft nimmt ab. Für Unentschlossene.",
    swatch: "linear-gradient(90deg, #6a3018, #c47a3a 55%, #efc89a)",
  },
  {
    id: "well",
    name: "Well Done · Durch",
    temp: "71 °C+",
    color: "Grau-braun, fest",
    text: "Voll durchgebraten. Sicher, aber der Charakter des Steaks geht verloren. Lieber einen anderen Cut wählen.",
    swatch: "linear-gradient(90deg, #3d2a1c, #8a6a48 60%, #d9c3a1)",
  },
];

const grid = document.getElementById("steak-grid");
const modal = document.getElementById("steak-modal");
const donenessList = document.getElementById("doneness-list");
const donenessPanel = document.getElementById("doneness-panel");

function renderSteaks(filter = "all") {
  grid.innerHTML = steaks
    .filter((steak) => filter === "all" || steak.category === filter)
    .map(
      (steak) => `
      <button class="card" data-id="${steak.id}">
        <img src="${steak.image}" alt="${steak.name}" />
        <div class="card__body">
          <div class="card__tag">${steak.tag}</div>
          <h3>${steak.name}</h3>
          <p>${steak.summary}</p>
        </div>
      </button>
    `
    )
    .join("");
}

function openSteak(id) {
  const steak = steaks.find((item) => item.id === id);
  if (!steak) return;

  document.getElementById("modal-image").src = steak.image;
  document.getElementById("modal-image").alt = steak.name;
  document.getElementById("modal-category").textContent = steak.tag;
  document.getElementById("modal-title").textContent = steak.name;
  document.getElementById("modal-text").textContent = steak.text;
  document.getElementById("modal-facts").innerHTML = Object.entries(steak.facts)
    .map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`)
    .join("");
  modal.showModal();
}

function renderDoneness(activeId = "medium-rare") {
  const active = doneness.find((item) => item.id === activeId) || doneness[1];
  donenessList.innerHTML = doneness
    .map(
      (item) => `
      <button class="doneness-btn ${item.id === active.id ? "is-active" : ""}" data-id="${item.id}">
        <span>${item.name}</span>
        <span>${item.temp}</span>
      </button>
    `
    )
    .join("");

  donenessPanel.innerHTML = `
    <p class="eyebrow">Aktive Stufe</p>
    <h3>${active.name}</h3>
    <div class="doneness__swatch" style="background:${active.swatch}"></div>
    <p>${active.text}</p>
    <dl class="facts">
      <div><dt>Kerntemperatur</dt><dd>${active.temp}</dd></div>
      <div><dt>Kernfarbe</dt><dd>${active.color}</dd></div>
    </dl>
  `;
}

renderSteaks();
renderDoneness();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderSteaks(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (card) openSteak(card.dataset.id);
});

donenessList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) renderDoneness(button.dataset.id);
});

document.getElementById("modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("is-open"));
});

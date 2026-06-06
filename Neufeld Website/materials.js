const materials = [
  {
    name: "PLA",
    description: "Einfach zu drucken und ideal für Einsteiger."
  },

  {
    name: "PETG",
    description: "Stabiler und temperaturbeständiger als PLA."
  },

  {
    name: "ABS",
    description: "Sehr robust, benötigt aber höhere Temperaturen."
  }
];

const proMaterials = [
  {
    name: "TPU",
    description: "Flexibles Filament für biegbare Druckteile."
  },

  {
    name: "Nylon",
    description: "Sehr robust und widerstandsfähig."
  },

  {
    name: "ASA",
    description: "Wetterfest und ideal für den Außeneinsatz."
  }
];

const container = document.getElementById("materials-container"); // holt <div id="materials-container"></div> aus html und speichert es in Variable

const proContainer = document.getElementById("pro-materials-container");

function renderMaterials(materialArray) { // erzeugt Karten für ein beliebiges Material-Array


  materialArray.forEach(material => { 

  const card = document.createElement("div"); // Java erzeugt im Hintergrund ein neues <div> Element -> DOM Node

  card.classList.add("material-card"); // fügt dem div die CSS-Klasse "material-card" hinzu

  if (materialArray === proMaterials) { // prüft ob gerade Profi-Filamente gerendert werden

        card.classList.add("pro-card"); // markiert Profi-Karten zusätzlich

    }

  const title = document.createElement("h3"); // erzeugt eine neue h3-Überschrift -> DOM Node
  title.textContent = material.name; // setzt den Namen des Filaments als Überschrift

  const text = document.createElement("p"); // erzeugt ein neues p-Element -> DOM Node
  text.textContent = material.description; // setzt die Beschreibung des Filaments

  card.appendChild(title); // fügt die Überschrift in die Karte ein
  card.appendChild(text); // fügt den Beschreibungstext in die Karte ein

  if (materialArray === proMaterials) {
    proContainer.appendChild(card);
    } 
    else {
    container.appendChild(card);
    }

  });
}

renderMaterials(materials); // zeigt beim Laden die normalen Filamente an

let showingProMaterials = false; // merkt sich, welche Filamente gerade angezeigt werden

const button = document.getElementById("load-pro-materials"); // holt den Button aus dem HTML


button.addEventListener("click", () => {

  if (showingProMaterials === false) { // wenn aktuell normale Filamente angezeigt werden

    renderMaterials(proMaterials); // zeigt Profi-Filamente an

    proContainer.classList.add("show"); // macht den Profi-Container sichtbar

    button.textContent = "Profi-Filamente ausblenden"; // ändert den Button-Text

    showingProMaterials = true; // merkt sich den neuen Zustand

  } else { // wenn aktuell Profi-Filamente angezeigt werden

        const proCards = document.querySelectorAll(".pro-card"); // holt alle Profi-Karten
    
        proCards.forEach(card => { // geht durch alle Profi-Karten

        card.remove(); // entfernt die Karte aus dem DOM

        proContainer.classList.remove("show"); // versteckt den Profi-Container

});

    button.textContent = "Profi-Filamente anzeigen"; // setzt den ursprünglichen Button-Text zurück

    showingProMaterials = false; // merkt sich den neuen Zustand

  }

});



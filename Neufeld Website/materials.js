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

const container = document.getElementById("materials-container"); 

const proContainer = document.getElementById("pro-materials-container");

function renderMaterials(materialArray) {


  materialArray.forEach(material => { 

  const card = document.createElement("div"); 

  card.classList.add("material-card"); 

  if (materialArray === proMaterials) { 

        card.classList.add("pro-card"); 

    }

  const title = document.createElement("h3"); 
  title.textContent = material.name; 

  const text = document.createElement("p"); 
  text.textContent = material.description; 

  card.appendChild(title); 
  card.appendChild(text); 

  if (materialArray === proMaterials) {
    proContainer.appendChild(card);
    } 
    else {
    container.appendChild(card);
    }

  });
}

renderMaterials(materials); 

let showingProMaterials = false; 

const button = document.getElementById("load-pro-materials"); 


button.addEventListener("click", () => {

  if (showingProMaterials === false) { 

    renderMaterials(proMaterials); 

    proContainer.classList.add("show"); 

    button.textContent = "Profi-Filamente ausblenden";

    showingProMaterials = true; 

  } else { 
        const proCards = document.querySelectorAll(".pro-card"); 
    
        proCards.forEach(card => {

        card.remove(); 

        proContainer.classList.remove("show"); 

});

    button.textContent = "Profi-Filamente anzeigen"; 

    showingProMaterials = false; 

  }

});

fetch("https://wttr.in/Vienna?format=j1")
  .then(response => response.json())
  .then(data => {

    document.getElementById("weather-box").innerHTML =
      `<h3>🌤️ Wien</h3>
       <p>🌡️ ${data.current_condition[0].temp_C} °C</p>
       <p>💧 ${data.current_condition[0].humidity} %</p>`;

    const humidity = parseInt(data.current_condition[0].humidity);

    let tip = "";

    if (humidity > 70) {
      tip = "Hohe Luftfeuchtigkeit. Nylon oder TPU sollten trocken gelagert werden.";
    }
    else if (humidity > 50) {
      tip = "Mittlere Luftfeuchtigkeit. PLA ist meist unkritisch, empfindliche Filamente profitieren von einer Trockenbox.";
    }
    else {
      tip = "Die Luftfeuchtigkeit ist aktuell niedrig und für die meisten Filamente unproblematisch.";
    }

    document.getElementById("humidity-tip").textContent = tip;

})
  .catch(error => {

    document.getElementById("weather-box").innerHTML =
      `<h3>🌤️ Wien</h3>
       <p>Wetterdaten momentan nicht verfügbar.</p>`;

    console.error(error);

  });





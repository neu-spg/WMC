console.log("script geladen");

const elements = document.querySelectorAll("section");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);


showOnScroll();


fetch("https://wttr.in/Vienna?format=j1")
  .then(response => response.json())
  .then(data => {

    document.getElementById("weather-box").innerHTML =
      `<h3>🌤️ Wien</h3>
       <p>🌡️ ${data.current_condition[0].temp_C} °C</p>
       <p>💧 ${data.current_condition[0].humidity} %</p>`;

  })
  .catch(error => {

    document.getElementById("weather-box").innerHTML =
      `<h3>🌤️ Wien</h3>
       <p>Wetterdaten momentan nicht verfügbar.</p>`;

    console.error(error);

  });



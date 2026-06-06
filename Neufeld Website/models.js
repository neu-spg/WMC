const container = document.getElementById("models-container");
const select = document.getElementById("theme-select");

let allModels = {};

fetch("models.json")
  .then(response => response.json())
  .then(data => {

    allModels = data;

    renderTheme("Mix");

    select.addEventListener("change", () => {
      renderTheme(select.value);
    });

  });

function renderTheme(theme) {

  container.innerHTML = "";

  

  allModels[theme].forEach(model => {

    const card = document.createElement("div");

    card.classList.add("material-card");

    const heading = document.createElement("h3");

    heading.textContent = model.name;

    const image = document.createElement("img");

    image.src = model.image;

    image.classList.add("model-image");

    const link = document.createElement("a");

    link.href = model.url;

    link.target = "_blank";

    link.appendChild(image);

    card.appendChild(heading);

    card.appendChild(link);

    container.appendChild(card);

  });

}
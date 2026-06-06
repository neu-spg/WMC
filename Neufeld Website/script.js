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

// direkt beim Laden einmal ausführen
showOnScroll();





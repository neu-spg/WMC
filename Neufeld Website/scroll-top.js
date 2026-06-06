const scrollTopButton = document.getElementById("scroll-top-btn");

scrollTopButton.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
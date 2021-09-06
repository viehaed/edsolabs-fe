const content = document.querySelector("#content");
const quantity = document.querySelector("#quantity");
const banner = document.querySelector("#banner");

window.addEventListener("DOMContentLoaded", function () {
  content.classList.add("fadeIn-2");
  banner.classList.add("fadeIn-2");
  // quantity.classList.add("fadeIn-2");
});

window.addEventListener("scroll", function () {
  const y = window.scrollY;
  const w = window.innerWidth;


  if (w <= 992) {
    if (y >= 100) {
      quantity.classList.add("fadeIn-2");
      quantity.classList.remove("fadeOut");
    } else {
      quantity.classList.add("fadeOut");
      quantity.classList.remove("fadeIn-2");
    }

    if (y >= 200) {
      banner.classList.add("fadeIn-2");
      banner.classList.remove("fadeOut");
    } else {
      banner.classList.add("fadeOut");
      banner.classList.remove("fadeIn-2");
    }
  } else {
    if (y >= 100) {
      quantity.classList.add("fadeIn-2");
      quantity.classList.remove("fadeOut");
    } else {
      quantity.classList.add("fadeOut");
      quantity.classList.remove("fadeIn-2");
    }
  }
});

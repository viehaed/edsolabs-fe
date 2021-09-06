const heroContent = document.querySelector(".hero__content");
const heroImg = document.querySelector(".hero__image");

window.addEventListener("DOMContentLoaded", () => {
  [heroContent, heroImg].forEach((item) => {
    item.classList.add("animate__animated", "animate__backInUp");
  });
});

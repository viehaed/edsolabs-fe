import data from "../data/data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    start: 0,
    keyboard: true,
    type: "loop",
    rewindSpeed: 400,
    focus: "center",
    perPage: 2,
    trimSpace: true,
    autoplay: true,
    interval: 2000,
  }).mount();
});

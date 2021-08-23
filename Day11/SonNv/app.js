import listStudent from "./data/data.js";
const data = listStudent;

document.getElementById("splide__list").innerHTML = data
  .map((item, index) => {
    return `<li class="splide__slide">
        <h2>STT: ${index + 1}</h2>
        <h3>ID: ${item.id}</h3>
        <h3>Họ Tên: ${item.name}</h3>
        <h3>NHóm: ${item.teamNumber}</h3>
        <h3>Chức Vụ: ${item.position}</h3>
        </li>`;
  })
  .join(" ");
const splideStudent = new Splide(".splide", {
  perPage: 3,
  gap: 20,
  breakpoints: {
    640: {
      perPage: 2,
      gap: "1rem",
    },
    480: {
      perPage: 1,
      gap: "1rem",
    },
  },
}).mount();

document.getElementById("list-fish").innerHTML = data
  .map((item, index) => {
    return `<div id="drag-${index}" class="draggable">
            <p>${item.name}</p>
            <img src="https://cdnb.artstation.com/p/assets/images/images/005/951/963/original/david-stormer-sawk-swim-01.gif?1494947890">
            </div>`;
  })
  .join(" ");
interact(".draggable").draggable({
  inertia: true,

  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true,
    }),
  ],
  autoScroll: true,
  listeners: {
    move: dragMoveListener,
  },
});

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";

  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

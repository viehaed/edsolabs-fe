import data from "./data.js";

const fishList = document.querySelector(".fish-list");

const setUpDrag = () => {
  interact(".item").draggable({
    listeners: {
      move(event) {
        const { target } = event;
        const x = parseFloat(target.getAttribute("data-x")) + event.dx;
        const y = parseFloat(target.getAttribute("data-y")) + event.dy;
        target.style.transform = "translate(" + x + "px, " + y + "px)";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    },
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const list = data
    .map(({ name }) => {
      const lName = name.split(" ").pop();
      return `<article class="item" data-x="0" data-y="0">
          <h2 class="header">${lName}</h2>
          <img src="./fish.png" alt="fish" class="fish" />
        </article>`;
    })
    .join("");
  fishList.innerHTML = list;
  setUpDrag();
});

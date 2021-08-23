import data from "./data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", function () {
  const pickFish = document.querySelector(".pick-fish");

  let fishs = data
    .map((item) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      let name = item.name.split(" ");
      name = name[name.length - 1];
      return ` <div style="color: #${randomColor}" class="draggable">
									<i class="fas fa-fish"></i>${name}
								</div>`;
    })
    .join("");

  if (pickFish) pickFish.innerHTML = fishs;
});

const resizableContainer = interact(".fish-container");
const draggable = interact(".draggable");

draggable.on("tap", function (event) {
  // start a drag action to apply modifiers
  draggable.reflow({ name: "drag", axis: "xy" });
});

// the usual interact actions setup
resizableContainer.resizable({
  edges: { bottom: true, right: true },
  modifiers: [
    interact.modifiers.restrictEdges({
      outer: "html",
    }),
    interact.modifiers.restrictEdges({
      min: { width: 200, height: 200 },
    }),
  ],
  listeners: {
    move: function (event) {
      let { x, y } = event.target.dataset;

      x = (parseFloat(x) || 0) + event.deltaRect.left;
      y = (parseFloat(y) || 0) + event.deltaRect.top;

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `translate(${x}px, ${y}px)`,
      });

      Object.assign(event.target.dataset, { x, y });
    },
  },
});

window.addEventListener("DOMContentLoaded", (event) => {
  draggable.draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: document.querySelector(".fish-container"),
        endOnly: true,
      }),
    ],
    listeners: {
      move(event) {
        let x = (parseFloat(event.target.dataset.x) || 0) + event.dx;
        let y = (parseFloat(event.target.dataset.y) || 0) + event.dy;

        event.target.style.transform = `translate(${x}px, ${y}px)`;
        Object.assign(event.target.dataset, { x, y });
      },
    },
  });
});

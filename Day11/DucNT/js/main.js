//******************Bể Cá ******************/
import data from "./dataList.json" assert { type: "json" };
import interactJs from './interact.js';
document.addEventListener("DOMContentLoaded", function () {
  const manyfishs = document.querySelector(".manyfishs");

  let fishs = data
    .map((item) => {
      // let name = item.name.split(" ");
      // name = name[name.length - 1];
      return ` <div style="color: white" class="draggable">
                                    <i class="fas fa-fish"></i>${item.name}
                                </div>`;
    })
    .join("");

  if (manyfishs) manyfishs.innerHTML = fishs;
});

const draggable = interact(".draggable");

window.addEventListener("DOMContentLoaded", (event) => {
  draggable.draggable({
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

import interact from 
'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

interact('.item').draggable({
  listeners: {
    move (event) {
      console.log(event.pageX,
                  event.pageY)
    }
  }
})
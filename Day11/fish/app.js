import listStudent from "./data.js";
const data = listStudent;

document.getElementById("list-fish").innerHTML = data.map((index, items) => {
    return `<div style="float: left; id="drag-${items}" class="draggable">
            <p >${index.name}</p> 
            <img style="width: 50px;"src="https://i.pinimg.com/originals/ca/06/4e/ca064ec185cac1b9a9800b3e66976481.gif">
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
import data from "./data.json" assert { type: "json" }
function interactJs() {
    var spliceHtml = '';
    data.map((user) => {
        //Thay đổi html
        spliceHtml += `
        <div class="draggable">
        <i class="fas fa-fish"></i>${user.name}
        </div>
        `
    })
    document.querySelector('.interactJs').innerHTML = spliceHtml;
}
const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

export default interactJs;
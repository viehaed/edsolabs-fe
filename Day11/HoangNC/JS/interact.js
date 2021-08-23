import data from "./data2.json" assert { type: "json" }
function interactJs() {
    var spliceHtml = '';
    data.map((user) => {
        //Thay đổi html
        spliceHtml += `
        <div class="draggable">
            <p>Tên:${user.name}</p>
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
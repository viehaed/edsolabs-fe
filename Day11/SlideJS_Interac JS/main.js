import listStudent from "./data.js"
var data = listStudent;
console.log(data)
document.getElementById("splide__list").innerHTML = data.map((el, index) => {
  return (
    `<li class="splide__slide" onclick="a()">
        <h1>STT: ${index + 1}</h1>
        <h3>ID: ${el.id}</h3>
        <h3>Họ Tên: ${el.name}</h3>
        <h3>NHóm: ${el.teamNumber}</h3>
        <h3>Chức Vụ: ${el.position}</h3>
        <h3><a href="https://www.facebook.com">xem ngay</a></h3>
        
        </li>`
  )
}).join(" ")
new Splide('#splide', {
  type: 'loop',
  perPage: 3,
  autoplay: true,
  padding: {
    right: '5rem',
    left: '5rem',
  },
  gap: 30,
  rewind: true,
  breakpoints: {
    '1000': {
      perPage: 3,

    },
    '640': {
      perPage: 2,

    },
    '480': {
      perPage: 1,
      gap: '1rem',
    },
  }
}).mount();

//bể cá
document.getElementById("shark__tank").innerHTML = data.map((el, index) => {
  return (
    `<div class="draggable drag">
    <img src="img/fish-5472134_1920.png" alt="">
    <p>${el.name.split(" ")[el.name.split(" ").length-1]}</p>
  </div>`
  )
}).join(" ")+`<div class="noi__lua"><img src="img/Tranh-to-mau-cai-noi-co-hai-quai.jpg" alt="" srcset="" class="noi"><br><img src="img/chama21.gif" alt="" class="lua"></div>`
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener
      // call this function on every dragend event
    }
  })
function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
import data from "./data.json" assert{ type:"json" };
import { updatePointByDay, sumPoint } from './modules/sumTotal.js' ;
import { getSumPoint, getMaxCoin, bai28, bai29 } from './modules/action.js';

const $ = document.querySelector.bind(document);

const inputValue = $('input');
const pointFake = $('.pointFake');
const pointSearch = $('.pointSearch');
const listData = $('.listData');
const status = $('.status');
const elms = document.getElementsByClassName('splide');
const splideList = $('#splide-list')
const list_fish = $('.list_fish');

const sortTeam = bai29(2, 6, 1)
const render = sumPoint();

list_fish.innerHTML = render.map((item,index) => {
    return `
        <div id="drag-${index}" class="draggable">
            <p>${item.name}</p>
        </div>
    `
}).join('')

$('#splide-list').innerHTML = render.map((item,index) => {
    return `
      <li class="splide__slide id="splide01-list">
      <h3>STT: ${index + 1}</h3>
      <p>ID: ${item.id}</p>
      <p>Họ Tên: ${item.name}</p>
      <p>NHóm: ${item.group.groupId}</p>
      <p>Chức Vụ: ${item.group.position}</p>
     </li>`
 }).join('');

 new Splide( '#splide', {
     type: 'loop',
     perPage: 3,
     gap: 20,
     breakpoints: {

         '640': {
             perPage: 2,
             gap    : '1rem',
         },
         '480': {
             perPage: 1,
             gap    : '1rem',
         },
     }
 } ).mount();

pointSearch.onclick = () => {
    if (inputValue.value.length > 0) {
        let indexClass = '';
    
        let str = render.map((item,index) => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                let number = '';
                console.log(sortTeam);
                sortTeam.forEach(item => {
                    item.forEach((x, i) => {
                        if (x.name.toLowerCase().includes(inputValue.value)) {
                            number = `<p>Vị trí điểm trong nhóm: ${i}</p>`
                        }
                    })
                })
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
                return `<p>STT: ${item.id}</p>
                <p>Tên đầy đủ: ${item.name}</p>
                <p>Vị trí: ${item.group.position}</p>
                <p>Tổng điểm: ${item.sums}</p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span>     `
                })}</p>` + number + indexClass + '<p></p>';
            }
        }).join('');
        status.classList.remove('searching');
        status.classList.add('simulating');
        listData.innerHTML = str;
    }
}


pointFake.onclick = () => {
    let sortTeam = bai29(2, 6, 1)
    let reRender = sumPoint();
    if (inputValue.value.length > 0) {
        let number = '';
        let indexClass = '';
        sortTeam.forEach(item => {
            item.forEach((x, i) => {
                console.log(item);
                if (x.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                    number = `<p>Vị trí điểm trong nhóm: ${i}</p>`
                }
            })
        })

        reRender.sort((a, b) => b.sums - a.sums).forEach((item, index) => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
            }
        });
    
        let str = reRender.map((item,index) => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
                return `<p>STT: ${item.id}</p>
                <p>Tên đầy đủ: ${item.name}</p>
                <p>Vị trí: ${item.group.position}</p>
                <p>Tổng điểm: ${item.sums}</p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span>     `
                })}</p>` + number + indexClass + '<p></p>';
            }
        }).join('');
        status.classList.remove('simulating');
        status.classList.add('searching');
        listData.innerHTML = str;
    }
}



// ----- interact js -----

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
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')
      }
    }
  })

function dragMoveListener (event) {
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
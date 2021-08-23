// import { data } from './modules/data'; 
// import bai31 from './modules/ex31.js';
// import bai32 from './modules/ex32.js';
// import {
//     convertToArray,
//     getNameBy,
//     searchNameByFirst,
//     searchNameByLast,
//     getNameByKey,
//     getNameByKeyAB,
//     searchNameKey,
//     connectString,
//     createGroups,
//     groupsEndWithThanh,
//     groupsStartWithThanh,
//     concatString,
//     switchName
// } from './modules/baitap.js'

import scopeSimulator, { myData, scoreSimulator } from './modules/scopeSimulator.js';
import searchPerson from './modules/searchPerson.js';
import list from './modules/listClass.js';
import listFish from './modules/listFish.js';


//  khai báo biến 
const $ = document.querySelector(".wrapper");
const alr = (string, active) => {
    alert.innerHTML = string;
    if (active == "err") {
        alert.classList.add("err");
        alert.classList.remove("sucess");
    } else if (active == "sucess") {
        alert.classList.remove("err");
        alert.classList.add("sucess");
    } else if (active == "none") {
        alert.classList.remove("err");
        alert.classList.remove("sucess");
    }
}

const scopeComulatorEvent = $.querySelector("#scopeComulator");
const searchPersonEvent = $.querySelector("#searchPerson");
const valueIndex = $.querySelector("#valueInput");
const content = $.querySelector(".content");
const splideList = $.querySelector(".splide__list");
const containerFish = $.querySelector(".container-fish");

// content.innerHTML ="eeehhh"
const alert = $.querySelector(".alert");
let checkscoreSimulator = false;
// bắt sự kiện click buntton  giả lập

scopeComulatorEvent.addEventListener('click', () => {
    scoreSimulator()
    if (checkscoreSimulator) {
        content.innerHTML = ""
        alr("reset điểm", "sucess");
    } else {
        alr("Bạn đã được đã được giả lập", "sucess");
    }
    checkscoreSimulator = true;
})


// console.log(test());
// bắt sự kiện button

searchPersonEvent.addEventListener('click', () => {
    if (checkscoreSimulator) {
        console.log(content);
        searchPerson(scopeSimulator(), valueIndex, content, alr);
        console.log(content);
    }
    else if (Number(valueIndex.value)) {
        alr("Sao bạn lại nhập số", "err");
    } else {
        alr("Bạn hãy bật giả lập lên", "err");
    }
})

splideList.innerHTML = list(scopeSimulator(), valueIndex, content, alr);
containerFish.innerHTML = `  
            <div id="outer-dropzone" class="dropzone">
            <h3 class="heading">Thả vào bể</h3>
            <div id="inner-dropzone" class="dropzone">
            </div>
            </div> 
            ${listFish(scopeSimulator())}`
new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    gap: 10,
    focus: 'center',
    pagination: false,
    padding: {
        right: '20px',
        left: '20px',
    },
    breakpoints: {
        '1024': {
            perPage: 2,
            gap: '1rem',
        },
        '576': {
            perPage: 1,
            gap: '1rem',
        },
    }
}).mount();


// interact('.dropzone').dropzone({
//     // only accept elements matching this CSS selector
//     accept: '.drag-drop',
//     // Require a 75% element overlap for a drop to be possible
//     overlap: 0.75,
//     ondropactivate: function (event) {
//         // add active dropzone feedback
//         event.target.classList.add('drop-active')
//     },
//     ondragenter: function (event) {
//         var draggableElement = event.relatedTarget
//         var dropzoneElement = event.target
//         // feedback the possibility of a drop
//         draggableElement.classList.add('can-drop')
//         // draggableElement.textContent = 'Dragged in'
//     },
//     ondragleave: function (event) {
//         // remove the drop feedback style
//         event.target.classList.remove('drop-target')
//         event.relatedTarget.classList.remove('can-drop')
//         // event.relatedTarget.textContent = 'Dragged out'
//     },
//     ondrop: function (event) {
//         // event.relatedTarget.textContent = 'Dropped'
//     },
//     ondropdeactivate: function (event) {
//         // remove active dropzone feedback
//         event.target.classList.remove('drop-active')
//         event.target.classList.remove('drop-target')
//     }
// })

// interact('.drag-drop')
//     .draggable({
//         inertia: true,
//         modifiers: [
//             interact.modifiers.restrictRect({
//                 restriction: 'parent',
//                 endOnly: true
//             })
//         ],
//         autoScroll: true,
//         // dragMoveListener from the dragging demo above
//         listeners: { move: dragMoveListener }
//     })
// function dragMoveListener(event) {
//     var target = event.target
//     // keep the dragged position in the data-x/data-y attributes
//     var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
//     var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

//     // translate the element
//     target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

//     // update the posiion attributes
//     target.setAttribute('data-x', x)
//     target.setAttribute('data-y', y)
// }


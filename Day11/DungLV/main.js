import data from "./module/listStudent.json" assert { type: "json" };
import { getSumPoint, sortPointInTeam } from "./module/getSumPoint.js";
let valueInput = document.querySelector("#value");
let checkPoint = document.querySelector("#checkPoint");
let fakePoint = document.querySelector("#fakePoint");
let rooot = document.querySelector("#root");
document.getElementById("splide__list").innerHTML = data.map((el, index) => {
    return (
        `<li class="splide__slide">
        <h1>STT: ${index + 1}</h1>
        <h3>ID: ${el.id}</h3>
        <h3>Họ Tên: ${el.name}</h3>
        <h3>Nhóm: ${el.teamNumber}</h3>
        <h3>Chức Vụ: ${el.position}</h3>
        </li>`
    )
}).join(" ")

new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    gap: 20,
    autoplay: true,
    height: '12rem',
    autoWidth: true,
    focus: 'center', pagination: false,
    padding: {
        right: '5rem',
        left: '5rem',
    },
    breakpoints: {
        '800': {
            perPage: 3,
        },
        '400': {
            perPage: 2,
        },
        '480': {
            perPage: 1,
            gap: '1rem',
        },
    }
}).mount();

checkPoint.addEventListener("click", () => {
    let indexClass;
    let sortPoint = sortPointInTeam();
    let reRender = getSumPoint();
    if (valueInput.value.length === 0) {
        alert("Bạn phải nhập đúng tên cần tìm :)")
    } else if (Number(valueInput.value)) {
        alert("Bạn phải nhập đúng tên cần tìm :), Không phải số. ")
    } else {
        reRender.sort((a, b) => b.sums - a.sums).forEach((item, index) => {
            if (item.name.toLowerCase().includes(valueInput.value.toLowerCase())) {
                indexClass = ` <p>Vị trí điểm trong lớp:<span class="name-hihi"> ${index}</span></p>`
                console.log(item.points);
            }
        });
        let number;
        const findName = data.filter(item => item.name.
            toLocaleLowerCase() == valueInput.value.toLocaleLowerCase() || item.name.split(" ").pop().
                toLocaleLowerCase() == valueInput.value.toLocaleLowerCase());
        //////////
        sortPoint.forEach(item => {
            item.forEach((x, i) => {
                if (x.name.toLowerCase().includes(valueInput.value.toLowerCase())) {
                    number = ` <p>Vị trí điểm trong nhóm:<span class="name-hihi"> ${i}</span></p>`
                }
            })
        })
        let str = "";
        reRender.forEach(item => {
            if (item.name.toLowerCase().includes(valueInput.value.toLowerCase())) {
                str +=
                    `<p>STT:<span class="name-hihi"> ${item.id}</span></p>
                <p>Tên đầy đủ: <span class="name-hihi">${item.name}</span></p>
                <p>Vị trí:<span class="name-hihi"> ${item.position}</span></p>
                <p>Tổng điểm:<span class="point-by"> ${item.total}</span></p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                        return ` ${subItem.dayName}:<span class="point-by"> ${subItem.point} điểm</span>     `
                    })}</p>` + number + indexClass + '<p></p>';
            }
        })
        rooot.innerHTML = str;
    }
})
let xxxx = document.querySelector("#box-name");
let renderName = data.map((item, index) => {
    let htmls = `
    <div id="drag-${index + 1}" class="draggable">
    <p>${item.name} </p>
    </div>
    `;
    return htmls
})

xxxx.innerHTML = renderName.join(" ")
interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        listeners: {
            move: dragMoveListener,
            end(event) {

            }
        }
    })
function dragMoveListener(event) {
    let random = Math.floor(Math.random() * 1000)
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}
window.dragMoveListener = dragMoveListener



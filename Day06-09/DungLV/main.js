import data from "./module/listStudent.json" assert { type: "json" };
import { getSumPoint } from "./module/getSumPoint.js";
import { sortPointInTeam } from "./module/sortPointInTeam.js"
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
let check = false;
let render = getSumPoint();
let sortTeam = sortPointInTeam();
checkPoint.addEventListener("click", () => {
    let checkTrim = valueInput.value.trim()
    if (checkTrim.length === 0) {
        alert("Bạn đang không nhập giá trị , Vui lòng thử lại!")
    } else if (Number(valueInput.value)) {
        alert("Tên không được tìm khi giá trị bằng số !")
    } else if (!check) {
        alert("Vui Lòng Giả Lập Điểm Trước!")
    } else {
        let indexClass = '';
        let str = render.map((item, index) => {
            if (item.name.toLowerCase().includes(checkTrim.toLowerCase())) {
                let number = '';
                sortTeam.forEach(a => {
                    a.forEach((x, i) => {
                        if (x.name.toLowerCase() === item.name.toLowerCase()) {
                            number = `<p>Vị trí điểm trong nhóm: ${i}</p>`
                        }
                    })
                })
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
                return `<div class="hihi">
                <p>STT: ${item.id}</p>
                <p>Tên đầy đủ:<span class="bold"> ${item.name}</span></p>
                <p>Vị trí: ${item.position}</p>
                <p>Tổng điểm:<span class="red-point"> ${item.total}</span></p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: <span class="red-point">${subItem.point} điểm </span></span>     `
                })}</p>` + number + indexClass + '<p></p></div>';
            }
        }).join('');
        rooot.innerHTML = str;
    }
})
fakePoint.addEventListener("click", () => {
    let checkTrim = valueInput.value.trim()
    if (checkTrim.length === 0) {
        alert("Bạn phải nhập tên thì mới giả lập điểm được");
    } else {
        check = true;
        alert("Giả lập điểm thành công");
        let reRender = getSumPoint().sort((a, b) => a.sums - b.sums);
        let indexClass = '';
        let str = reRender.map((item, index) => {
            if (item.name.toLowerCase().includes(checkTrim.toLowerCase())) {
                let number = '';
                sortTeam.forEach(a => {
                    a.forEach((x, i) => {
                        if (x.name.toLowerCase() === item.name.toLowerCase()) {
                            number = `<p>Vị trí điểm trong nhóm: ${i}</p>`
                        }
                    })
                })
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
                return `<div class="hihi">
                <p>STT: ${item.id}</p>
                <p>Tên đầy đủ:<span class="bold"> ${item.name}</span></p>
                <p>Vị trí: ${item.position}</p>
                <p>Tổng điểm:<span class="red-point"> ${item.total}</span></p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: <span class="red-point">${subItem.point} điểm </span></span>     `
                })}</p>` + number + indexClass + '<p></p></div>';
            }
        }).join('');
        rooot.innerHTML = str;
        console.log(reRender);
    }

})


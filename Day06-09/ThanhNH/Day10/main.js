import data from "./data.json" assert{ type:"json" };
import { updatePointByDay, sumPoint } from './modules/sumTotal.js' ;
import { getSumPoint, getMaxCoin, bai28, bai29 } from './modules/action.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputValue = $('input');
const pointFake = $('.pointFake');
const pointSearch = $('.pointSearch');
const listData = $('.listData');
const status = $('.status');

const sortTeam = bai29(2, 6, 1);
const render = sumPoint();

pointSearch.onclick = () => {
    if (inputValue.value.length > 0) {
        let str = '';
        let number = '';
        let indexClass = '';
        sortTeam.forEach(item => {
            let x = item.forEach((x, i) => {
                if (x.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                    number = `<p>Vị trí điểm trong nhóm: ${i}</p>`
                }
            })
        })

        render.sort((a, b) => b.sums - a.sums).forEach((item, index) => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                indexClass = `<p>Vị trí điểm trong lớp: ${index}</p>`
            }
        });
    
        render.forEach(item => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                str += 
                `<p>STT: ${item.id}</p>
                <p>Tên đầy đủ: ${item.name}</p>
                <p>Vị trí: ${item.group.position}</p>
                <p>Tổng điểm: ${item.sums}</p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span>     `
                })}</p>` + number + indexClass + '<p></p>';
            }
        })
        status.classList.remove('searching');
        status.classList.add('simulating');
        listData.innerHTML = str;
    }
}


pointFake.onclick = () => {
    let reRender = sumPoint();
    if (inputValue.value.length > 0) {
        let str = '';
        let number = '';
        let indexClass = '';
        sortTeam.forEach(item => {
            let x = item.forEach((x, i) => {
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
    
        reRender.forEach(item => {
            if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                str += 
                `<p>STT: ${item.id}</p>
                <p>Tên đầy đủ: ${item.name}</p>
                <p>Vị trí: ${item.group.position}</p>
                <p>Tổng điểm: ${item.sums}</p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(subItem => {
                    return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span>     `
                })}</p>` + number + indexClass + '<p></p>';
            }
        })
        status.classList.remove('simulating');
        status.classList.add('searching');
        listData.innerHTML = str;
    }
}
// import { data } from './modules/data'; 
import bai31 from './modules/ex31.js';
import bai32 from './modules/ex32.js';
import {
    convertToArray,
    getNameBy,
    searchNameByFirst,
    searchNameByLast,
    getNameByKey,
    getNameByKeyAB,
    searchNameKey,
    connectString,
    createGroups,
    groupsEndWithThanh,
    groupsStartWithThanh,
    concatString,
    switchName
} from './modules/baitap.js'

import scopeSimulator, { myData, scoreSimulator } from './modules/scopeSimulator.js';
import searchPerson from './modules/searchPerson.js';
import list from './modules/listClass.js';


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
        alr("Giả lập đã được bật", "sucess");
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
        alr("Bật giả lập lên", "err");
    }
})

splideList.innerHTML = list(scopeSimulator(), valueIndex, content, alr);

new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    pagination: false,
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





//  bài 31
// console.log(bai31());
// bài 32
// console.log(bai32());
// bài 33
// console.log(convertToArray());
// bài 34
// console.log(getNameBy("Thành"));
// bài 35
// console.log(searchNameByFirst("Thành"));
// bài 36
// console.log(searchNameByLast("Toàn"));
// bài 37
// console.log(getNameByKey("T"));
// bài 38
// console.log(getNameByKeyAB("Á","H"));
// Bài 39
// console.log(searchNameKey("H"));
// bài 40
// console.log(connectString());
// bài 41
// console.log(createGroups());
// bài 42
// console.log(groupsEndWithThanh());
// bài 43
// console.log(groupsStartWithThanh());
// bài 44
// console.log(concatString());
// bài 45
// console.log(switchName());

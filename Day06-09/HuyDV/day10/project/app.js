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


//  khai báo biến 
const $ = document.querySelector(".wrapper");

const scopeComulatorEvent = $.querySelector("#scopeComulator");
const searchPersonEvent = $.querySelector("#searchPerson");
const valueIndex = $.querySelector("#valueInput");
const content = $.querySelector(".content");
const alert = $.querySelector(".alert");
let checkscoreSimulator = false;
// bắt sự kiện click buntton  giả lập

scopeComulatorEvent.addEventListener('click', () => {
    scoreSimulator()
    alert.classList.add("sucess");
    alert.classList.remove("err");
    if (checkscoreSimulator) {
        alert.innerHTML = "reset điểm";
        content.innerHTML = ""
    } else {
        alert.innerHTML = "Giả lập đã được bật";
    }
    checkscoreSimulator = true;
    alert.classList.add("sucess");
    alert.classList.remove("err");
})


// console.log(test());
// bắt sự kiện button

searchPersonEvent.addEventListener('click', () => {
    if (checkscoreSimulator) {
        searchPerson(scopeSimulator(1, 5), valueIndex, content, alert);
    }
    else if (Number(valueIndex.value)) {
        alert.innerHTML = "Sao bạn lại nhập số";
        alert.classList.add("err");
        alert.classList.remove("sucess");
    } else {
        alert.innerHTML = "Bật giả lập lên";
        alert.classList.add("err");
        alert.classList.remove("sucess");
    }
})









































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

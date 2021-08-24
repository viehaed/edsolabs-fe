import autoPoints from './addPoint.js'
import inputName from './findPeople.js'
import data from "./listMember.json" assert { type: "json" };
console.log(data);


const btnSearch = document.querySelector('.btn-search')
const btnAutoPoint = document.querySelector('.btn-score')


btnAutoPoint.addEventListener('click', () => {
    autoPoints();
    alert('Giả lập điểm thành công !')
})
btnSearch.addEventListener('click', () => {
    const fullName = document.getElementById('user-text').value;
    if (fullName == 0) {
        alert("Nhập tên để thực hiện tra cứu...")
    } else {
        inputName()
    }
})
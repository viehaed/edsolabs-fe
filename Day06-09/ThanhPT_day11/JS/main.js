import autoPoints from './addPoint.js'
import inputName from './searchStudent.js'
import data from "./data.json" assert { type: "json" };
console.log(data);

const btnSearch = document.querySelector('.btn2')
const btnAutoPoint = document.querySelector('.btn1')

var done = false;
btnAutoPoint.addEventListener('click', ()=>{
    alert("giả lập điểm thành công")
    autoPoints();
    done = true;
})

btnSearch.addEventListener('click', ()=>{
    const fullName = document.getElementById('nameStudent').value;
    if (!fullName) {
        alert("Tên không được bỏ trống");
        return;
    }
    else if (!done) {
        alert("Điểm chưa được giả lập");
        return;
    }
    else{
        inputName();
    }
   
})
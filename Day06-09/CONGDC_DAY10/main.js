import autoPoints from './add.js'
import inputName from './find.js'
import data from "./data.json" assert { type: "json" };
console.log(data);

const btnSearch = document.querySelector('.btn2')
const btnAutoPoint = document.querySelector('.btn1')


btnAutoPoint.addEventListener('click', autoPoints)
btnSearch.addEventListener('click', inputName) 
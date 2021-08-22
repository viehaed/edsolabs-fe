import autoPoints from './addPoint.js'
import inputName from './findPeople.js'
import data from "./data2.json" assert { type: "json" };
console.log(data);

const btnSearch = document.querySelector('.btn2')
const btnAutoPoint = document.querySelector('.btn1')


btnAutoPoint.addEventListener('click', autoPoints)
btnSearch.addEventListener('click', inputName)
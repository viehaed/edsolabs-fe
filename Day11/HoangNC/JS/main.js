import autoPoints from './addPoint.js'
import inputName from './findPeople.js'
import data from "./data2.json" assert { type: "json" };
import interactJs from './interact.js'
console.log(data);

const btnSearch = document.querySelector('.btn2')
const btnAutoPoint = document.querySelector('.btn1')

btnAutoPoint.addEventListener('click', autoPoints)
btnAutoPoint.addEventListener('click', interactJs)
btnSearch.addEventListener('click', inputName)
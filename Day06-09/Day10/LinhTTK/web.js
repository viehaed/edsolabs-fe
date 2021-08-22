import createPoints from './createPoint.js'
import inputName from './findPeople.js'
import data from "./listMember.json" assert { type: "json" };
console.log(data);

const searchMember = document.querySelector('.btn2')
const createPointMember = document.querySelector('.btn1')


createPointMember.addEventListener('click', createPoints)
searchMember.addEventListener('click', inputName)
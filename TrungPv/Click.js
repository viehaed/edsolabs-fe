import createPoints from './fakepoin.js'
import inputName from './people.js'
import data from "./data.json" assert { type: "json" };
console.log(data);

const searchMember = document.querySelector('.btn2')
const createPointMember = document.querySelector('.btn1')


createPointMember.addEventListener('click', createPoints)
searchMember.addEventListener('click', inputName)

import {listStudent} from './app.js'
import {bai32,bai31} from './bai32.js'
// import {bai31} from './bai31.js'
// bai 31 
// console.log("bai 31")
// const bai31 = listStudent.map((item) => item.name.split(" ").pop());
// console.log(bai31)

// // bai32
// console.log("bai 32")
// const bai32 = bai31.join(" ");
// console.log(bai32)
// //Bai 33
console.log("bai 33")
const bai33 = bai32.split(" ");
console.log(bai33)

//Bai 34
console.log("bai 34")
function cau34(index){
  const names = index.trim().toUpperCase();
  return bai32.split(" ").filter((item) => item.toUpperCase() === names).length;
};

//Bai 35
console.log("bai 35")
function bai35(name){
  const i = bai32.split(" ").findIndex((item) => {
    return item.toUpperCase() === name.trim().toUpperCase();
  });
  return listStudent[i].id;
};
console.log(bai35('Trung'))

//Bai 36
console.log("bai 36")
function bai36(name){
  const x = bai32.toUpperCase().split(" ").lastIndexOf(name.trim().toUpperCase());
  return listStudent[x].id;
};
console.log(bai36('Trung'))
//Bai 37
console.log("bai 37")
function bai37(x){
  return bai32.toUpperCase().split(" ").filter((item) => item.startsWith(x.toUpperCase().trim())).length;
};
console.log(bai37("T"))

//Bai 38
console.log("bai 38")
function bai38(index, items){
  return bai32.toUpperCase().split(" ").filter((item) => 
  item.startsWith(index.toUpperCase().trim()) && item.endsWith(items.toUpperCase().trim())).length;
};
console.log(bai38('T','G'))

//Bai 39
console.log("bai 39")
function bai39(items){
  return bai32.toUpperCase().split(" ").filter((item) => 
  item.toUpperCase().includes(items.toUpperCase().trim())).length;
};
console.log(bai39('T'))

// bai40 
console.log("bai 40")
function bai40(){
  return bai31.map((name, item) => {
      if (item === 0) {
        return `Bạn ${name}`;
      }
      if (item === bai31.length - 1) {
        return `,cuối cùng là bạn ${name} `;
      }
      return `,tiếp theo là bạn ${name}` ;
  }).join("");
};
console.log(bai40());

//bai 41 
const bai41 = bai32.toUpperCase().split('Thành')
console.log(bai41)

//bai42 
const bai42 = bai32.toUpperCase().split("/(?<=THÀNH)\s/");
console.log(bai42)

//bai43
const bai43 = bai32.toUpperCase().split(/\s(?=THÀNH)/);
console.log(bai42)

// bai44
const bai44 = bai32.repeat(2)
console.log(bai44)

// bai45
const bai45 = bai32.replace("Dũng", "Tuấn")
console.log(bai45);   
import {listStudent} from "./list.js";
//Bài tập 31~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const names = listStudent.map((o) => o.name.split(" ")[o.name.split(" ").length - 1]);
console.log(names);

//Bài tập 32
export const bai32 =names.toString();
console.log(bai32)

//Bài tập 33
export const bai33 = bai32.split(',');
console.log(bai33)

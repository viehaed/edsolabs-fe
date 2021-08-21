import arrStudentEdsoLabs from "./modules/data.js";
import firstName from "./modules/firstName.js"
import convertToString from "./modules/convertToString.js";
import convertToArray from "./modules/convertToArray.js";
// bài 31
console.log("------bài 31");
console.log(arrStudentEdsoLabs);
console.log(firstName());

// bài 32
console.log("------bài 32");
console.log(convertToString());

//bài 33
console.log("------bài 33");
console.log(convertToArray());

// bài 34
console.log("------bài 34");

function checkName(e) {
  let count = convertToArray().filter((o) => {
    return o == e;
  });
  return count.length;
}
console.log(checkName("Thành"));

// bài 35
console.log("------bài 35");
function checkNameFirst(e) {
  // return a = convertToString().includes(e)

  let a = convertToArray().indexOf(e);
  return a + 1;
}
console.log(checkNameFirst("Thành"));

// bài 36
console.log("------bài 36");

function checkNameLast(e) {
  // return a = convertToString().includes(e)

  let a = convertToArray().reverse().indexOf(e);
  return (a = convertToArray().length - 1 - a + 1);
}

console.log(checkNameLast("Thành"));

// bài 37
console.log("------bài 37");

function checkText(a) {
  return convertToArray().filter((e) => {
    e = e.toLowerCase();
    return e.startsWith(a.toLowerCase());
  }).length;
}
console.log(`Trong lớp có : ${checkText("T")} bạn`);

// bài 38
console.log("------bài 38");

function bai38(a, b) {
  return convertToArray().filter((e) => {
    e = e.toLowerCase();
    return e.startsWith(a.toLowerCase()) && e.endsWith(b.toLowerCase());
  }).length;
}
console.log(`Trong lớp có :${bai38("m", "h")} bạn`);

// bài 39
console.log("------bài 39");
function bai39(e) {
  return convertToArray().filter((o) => {
    o = o.toLowerCase();
    return o.includes(e.toLowerCase()); // bolean
  });
}
console.log(`Trong lớp có : ${checkText("t")} bạn`);

// bài 40
console.log("------bài 40");
let arr40 = JSON.parse(JSON.stringify(convertToArray()));

function bai40() {
  let x = arr40.map((e) => {
    let a = "tiếp theo là bạn ";
    return a.concat(e);
  });
  x[0] = "Bạn " + arr40[0];
  x[x.length - 1] = ` cuối cùng là bạn ${arr40[arr40.length - 1]}`;
  return x.join(", ");
}

console.log(bai40());
// bài 41

console.log("------bài 41");
let b41 = convertToArray().join(",");
function bai41() {
  return b41.split("Thành") // [[...],[...],[...]] vì có 2 "Thành"
    .map((e, index) => `Đội ${index + 1} gồm :[${e}],`);
}
console.log(bai41());

// bài 42

console.log("------bài 42");
let b42 = convertToArray().join(",");
// console.log(convertToArray());
console.log(b42.split("Thành"));
function bai42() {
    
  return b42.split("Thành").map((e, index) => {
    let team = e.split(" "); // [] length = số người từng  đội
    team.push("Thành");
    console.log(team);

    return `Đội ${index + 1} gồm :[${team.join(", ")}],`
  });
}
console.log(bai42());

// bài43
console.log("------bài43");
function bai43() {
    
    return b42.split("Thành").map((e, index) => {
        let team = e.split(" ");
        team.unshift("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    })
}
console.log(bai43());
// bài 44
console.log("------bài 44");
function bai44() {

    return b42.repeat(2)
}
console.log(bai44());

// bài 45
console.log("------bài 45");
function bai45() {
    return b42.replaceAll("Dũng", "Tuấn")
}
console.log(bai45());
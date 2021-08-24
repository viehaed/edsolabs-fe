
import arrNewStd from "./module/name.js";
 import {newString32} from "./module/name.js";
 import {isArray33} from "./module/name.js";
console.log("--Bài 31--");
console.log("Tên:", arrNewStd);
console.log("--Bài 32--");
// join : chuyển từ mảng về chuỗi
// var newString32 = arrNewStd.join(",");
// var newString = arrNewStd.toString();
console.log(newString32);
// console.log(typeof newString)
console.log("--Bài 33--");
// split : chuyển từ chuỗi về mảng
// let isArray33 = newString32.split(",");
console.log(isArray33);
console.log("--Bài 34--");
function getName(itemName) {
 let dataNew = isArray33.filter((data) => data == itemName);
 return dataNew.length;
}

let itemName = "Đức";

console.log(
 "Số người có tên " + itemName + " " + "trong lớp là:",
 getName(itemName)
);
console.log("--Bài 35--");
function Bai35(itemName) {
 if (isArray33.indexOf(itemName) === -1) {
   console.log("Tên bạn tìm kiếm không có");
 } else {
   return isArray33.indexOf(itemName);
 }
}
itemName = "Toàn";
console.log(
 "Học viên tên" +
   " " +
   itemName +
   " " +
   "đầu tiên ở vị trí :" +
   Bai35(itemName)
);
console.log("--Bài 36--");


function Bai36(itemName) {
 if (isArray33.lastIndexOf(itemName) === -1) {
   console.log("Tên bạn tìm kiếm không có");
 } else {
   return isArray33.lastIndexOf(itemName);
 }
}
itemName = "Dũng";
console.log(
 "Học viên tên" +
   " " +
   itemName +
   " " +
   "cuối cùng ở vị trí :" +
   Bai36(itemName)
);
console.log("--Bài 37--");
//  let isArray37 = newString32.split("");
//    console.log(isArray37)
//  function setArr (itemName){
//   let dataNew = isArray37.filter((data) => (data) === (itemName));
//   return dataNew.length;
//  }
//  itemName = "Đ";
//  let isC = itemName.toLowerCase();
//  console.log("Số học viên có chữ cái bắt đầu là"+" "+isC+" : "+setArr(isC));
function checkText(a) {
 return isArray33.filter((e) => {
   e = e.toLowerCase();
   return e.startsWith(a.toLowerCase());
 }).length;
}
itemName = "đ";
console.log(
 `Trong lớp có : ${checkText(itemName)} bạn` +
   " có tên bắt đầu là  " +
   itemName
);
console.log("--Bài 38--");
function checkStartEnd(itemA, itemB) {
 return isArray33.filter((item) => {
   item = item.toLowerCase();
   return (
     item.startsWith(itemA.toLowerCase()) &&
     item.endsWith(itemB.toLowerCase())
   );
 }).length;
}
let itemA = "â";
let itemB = "u";
console.log(
 `Trong lớp có : ${checkStartEnd(itemA, itemB)} bạn` +
   " có chứa tên bắt đầu là chữ " +
   itemA +
   " và kết thúc bằng chữ " +
   itemB
);
console.log("--Bài 39--");
let isArray37 = newString32.split("");
//  console.log(isArray37)
function setAr(itemName) {
 let dataNew = isArray37.filter(
   (data) => data.toLowerCase() == itemName.toLowerCase()
 );

 return dataNew.length;
}
itemName = "N";
console.log(
 "Số tên học viên có chứa chữ cái " +
   " " +
   itemName +
   " là : " +
   setAr(itemName)
);
//Bài 40
console.log("--Bài 40--");

function makeString() {
 let newArr = newString32
   .split(",")
   .map((item) => " tiếp theo là bạn ".concat(item));
 newArr[0] = newArr[0].replace(" tiếp theo là bạn", "Bạn");
 newArr[newArr.length - 1] = newArr[newArr.length - 1].replace(
   "tiếp theo",
   "cuối cùng"
 );
 return newArr.toString();
}

console.log(makeString());

//Bài 41
console.log("--Bài 41--");
function GroupNotName(name) {
 let arrGroup = [];
 for (let str of newString32.split(name)) {
   if (str[str.length - 1] == ",") {
     str = str.slice(0, str.length - 1);
   }
   if (str[0] == ",") {
     str = str.slice(1, str.length);
   }
   arrGroup.push(str);
 }
 return arrGroup;
}
console.log(GroupNotName("Dũng"));

// Bài 42
console.log("--Bài 42--");
function groupEndName(name) {
 let newStringArrname = newString32.replaceAll(name, name + "@@");
 let arrGroup = [];
 for (let str of newStringArrname.split("@@")) {
   if (str[str.length - 1] == ",") {
     str = str.slice(0, str.length - 1);
   }
   if (str[0] == ",") {
     str = str.slice(1, str.length);
   }
   arrGroup.push(str);
 }
 return arrGroup;
}

console.log(groupEndName("Thành"));

// Bài 43
console.log("--Bài 43--");
function groupEndName2(name) {
 let newStringArrname = newString32.replaceAll(name, "@@" + name);
 let arrGroup = [];
 for (let str of newStringArrname.split("@@")) {
   if (str[str.length - 1] == ",") {
     str = str.slice(0, str.length - 1);
   }
   if (str[0] == ",") {
     str = str.slice(1, str.length);
   }
   arrGroup.push(str);
 }
 return arrGroup;
}

console.log(groupEndName2("Dũng"));
console.log("--Bài 44--");
var isLap = newString32.repeat(2);
console.log(isLap);
console.log(isLap.length);
console.log("--Bài 45--");
var repleDung = newString32.replace(/Dũng/gi, "Tuấn");
console.log(repleDung);
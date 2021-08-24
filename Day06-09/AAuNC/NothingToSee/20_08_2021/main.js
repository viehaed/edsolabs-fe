
import data from "./data.js";

//Bài 31
console.log("Bài 31");

function getListName(){
    return data.map(item => {
        let name = item.name.split(" ");
        return name[name.length-1];
    })
}

const arrName = getListName();
console.log(arrName);

//Bài 32
console.log("Bài 32")

function convertToString() {
    return arrName.toString()
}
const stringArrName = convertToString();
console.log(stringArrName);

//Bài 33
console.log("Bài 33")

function convertToArray() {
    return stringArrName.split(",");
}
let arrayNameFromString = convertToArray();
console.log(arrayNameFromString);

//Bài 34
console.log("Bài 34")

function countName(name) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0);
}
console.log(countName("Thành"));

//Bài 35
console.log("Bài 35")

function getNameFirst(name) {
    let newArr = data.filter(item => {
        let newArrName = item.name.split(" ");
        if(newArrName[newArrName.length-1].trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0) return item;
    });

    return newArr[0].id;
}

console.log(getNameFirst("Thành"))

//Bài 36
console.log("Bài 36")

function getNameLast(name) {
    let newArr = data.filter(item => {
        let newArrName = item.name.split(" ");
        if(newArrName[newArrName.length-1].trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0) return item;
    });

    return newArr[newArr.length-1].id;
}

console.log("Vị trí: "+getNameLast("Thành"))

//Bài 37
console.log("Bài 37")

function countNameWithStart(start) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().startsWith(start.trim().toUpperCase())).length;
}

console.log("Số người: "+countNameWithStart("T"));

//Bài 38
console.log("Bài 38")

function countNameWithStartEnd(start, end) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().startsWith(start.trim().toUpperCase()) 
                && item.trim().toUpperCase().endsWith(end.trim().toUpperCase())).length;
}

console.log("Số người: "+countNameWithStartEnd("t", "h"));

//Bài 39
console.log("Bài 39")

function countNameIncludeKey(key) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().includes(key.trim().toUpperCase())).length;
}
console.log("Số người: "+countNameIncludeKey("n"));

//Bài 40
console.log("Bài 40")

function makeString() {
    let newArr = stringArrName.split(",").map(item => (" tiếp theo là bạn ").concat(item));
    newArr[0] = newArr[0].replace(" tiếp theo là bạn", "Bạn");
    newArr[newArr.length-1] = newArr[newArr.length-1].replace("tiếp theo", "cuối cùng");
    return newArr.toString();
}

console.log(makeString())

//Bài 41
console.log("Bài 41")
function GroupNotName(name) {
  let arrGroup = [];
  for (let str of stringArrName.split(name)) {
      if(str[str.length-1] == ",") {
        str = str.slice(0, str.length-1)
      }
      if(str[0] == ",") {
        str = str.slice(1, str.length)
      }
      arrGroup.push(str);
  }
  return arrGroup;
}
console.log(GroupNotName("Thành"))


// Bài 42
console.log("Bài 42")
function groupEndName(name) {
  let newStringArrname = stringArrName.replaceAll(name, name+"@@")
  let arrGroup = [];
  for (let str of newStringArrname.split("@@")) {
      if(str[str.length-1] == ",") {
        str = str.slice(0, str.length-1)
      }
      if(str[0] == ",") {
        str = str.slice(1, str.length)
      }
      arrGroup.push(str);
  }
  return arrGroup;
}

console.log(groupEndName("Thành"))

// Bài 43
console.log("Bài 43")
function groupName(name) {
    let newStringArrname = stringArrName.replaceAll(name, "@@"+name)
    let arrGroup = [];
    for (let str of newStringArrname.split("@@")) {
        if(str[str.length-1] == ",") {
            str = str.slice(0, str.length-1)
        }
        if(str[0] == ",") {
            str = str.slice(1, str.length)
        }
        arrGroup.push(str);
    }
    return arrGroup;
}

console.log(groupName("Thành"))

// Bài 44
console.log("Bài 44")
function doubleString() {
  return stringArrName.concat(stringArrName)
}
console.log(doubleString())

// Bài 45
console.log("Bài 45")
function replaceName() {
  return stringArrName.replaceAll("Dũng","Tuấn")
}
console.log(replaceName())





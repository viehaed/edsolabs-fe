import { getName } from './bai31.js';
import { bai32 } from './bai32.js';
//BÀI 33
function bai33() {
let dataName = bai32();
return dataName.split(" ");
}
//BÀI 34
function bai34(name) {
let dataName = bai32()
return dataName.split(" ").filter(item => item.includes(name)).length
}
//BÀI 35
function bai35(name) {
let dataName = bai32()
return dataName.split(" ").indexOf(name) + 1
}
//BÀI 36
function bai36(name) {
let dataName = bai32()
return dataName.split(" ").lastIndexOf(name) + 1
}
//BÀI 37
function bai37(key) {
let dataName = bai32()
return dataName.split(" ").filter(item => {
    item = item.toLowerCase();
    return item.startsWith(key.toLowerCase())
}).length
}
//BÀI 38
function bai38(a, b) {
let dataName = bai32()
return dataName.split(" ").filter(item => {
    item = item.toLowerCase();
    return item.startsWith(a.toLowerCase()) && item.endsWith(b.toLowerCase())
}).length

}
//BÀI 39
function bai39(key) {
let dataName = bai32()
return dataName.split(" ").filter(item => {
    item = item.toLowerCase();
    return item.includes(key.toLowerCase())
}).join(", ")}
//BÀI 40

//cách1
function bai40cach1() {
let dataName = getName();
return dataName.map((item, index) => {
    if (index === 0) {
        return `Bạn ${item}`
    } else if (index === dataName.length - 1) {
        return `Cuối cùng là bạn ${item}`
    } else {
        return `tiếp theo là bạn ${item}`
    }
}).join(", ")
}
//cách2
function bai40cach2() {
let newListStudent = getName()
let add = newListStudent.map(el => {
    let a = "bạn tiếp theo là "
    return a.concat(el)
})
add[0] = "Bạn " + newListStudent[0]
add[add.length - 1] = ` cuối cùng là bạn ${newListStudent[newListStudent.length - 1]}`
return add.join(", ")
}

//BÀI 41
function bai41() {
let dataName = bai32();
return dataName.split("Thành").map((item, index) => {
    return `Đội ${index +1} gồm :[${item.trim()}],`
}).join("")
}
//BÀI 42
function bai42() {
let dataName = bai32();
return dataName.split("Thành").map((item, index) => {
    let team = item.trim().split(" ");
    team.push("Thành")
    return `Đội ${index +1} gồm :[${team.join(", ")}],`
}).join(" ")
}
//BÀI 43
function bai43() {
let dataName = bai32();
return dataName.split("Thành").map((item, index) => {
    let team = item.trim().split(" ");
    team.unshift("Thành")
    return `Đội ${index +1} gồm :[${team.join(", ")}],`
}).join(" ")
}
//BÀI 44 
function bai44() {
let dataName = bai32();
return dataName.repeat(2)
}
//BÀI45

function bai45() {
let newListStudent = bai32()
return newListStudent.replaceAll("Dũng", "Tuấn")
}

export { getName, bai32, bai33, bai34, bai35,
        bai36, bai37, bai38, bai39, bai40cach1, bai40cach2, bai41, bai42, bai43, bai44, bai45 };
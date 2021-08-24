import getName from "./bai31.js";
import bai32 from "./bai32.js"
console.log(getName())
document.getElementById("bai31").innerHTML= "bài 31 : <br>"+getName()

console.log("bai 32");
console.log(bai32())
document.getElementById("bai32").innerHTML= "bài 32 : <br>"+bai32()



console.log("BÀI 33");
function convertArray() {
    let dataName = bai32();
    return dataName.split(" ");
}
console.log(convertArray());
document.getElementById("bai33").innerHTML= "bài 33 : <br>"+convertArray("Thành")

console.log("BÀI 34");
function findKey(name) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => item.includes(name)).length
}
console.log(findKey("Thành"));
document.getElementById("bai34").innerHTML= "bài 34 : <br>"+findKey("Thành")


console.log("BÀI 35");
function findFirstKey(name) {
    let dataName = bai32()
    return dataName.split(" ").indexOf(name) + 1
}
console.log(findFirstKey("Ánh"));
document.getElementById("bai35").innerHTML= "bài 35 : <br>"+findFirstKey("Thành")

console.log("BÀI 36");
function findLastKey(name) {
    let dataName = bai32()
    return dataName.split(" ").lastIndexOf(name) + 1
}
console.log(findLastKey("Thành"));
document.getElementById("bai36").innerHTML= "bài 36 : <br>"+findLastKey("Thành")


console.log("BÀI 37");
function FindName(key) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.startsWith(key.toLowerCase())
    }).length
}
console.log(FindName("t"));
document.getElementById("bai37").innerHTML= "bài 37 : <br>"+FindName("c")


console.log("BÀI 38");
function bai38(a, b) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.startsWith(a.toLowerCase()) && item.endsWith(b.toLowerCase())
    }).length
}
console.log(bai38("t", "h"));
document.getElementById("bai38").innerHTML= "bài 38 : <br>"+bai38("t", "h")



console.log("BÀI 39");
function bai39(key) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.includes(key.toLowerCase())
    }).join(", ")
}
console.log(bai39("ng"));
document.getElementById("bai39").innerHTML= "bài 39 : <br>"+bai39("ng")


console.log("BÀI 40 cách 1");
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
console.log(bai40cach1());
document.getElementById("bai40").innerHTML= "bài 40 : cách 1 <br>"+bai40cach1()

//cách2
console.log("bài 40 cách 2");
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
console.log(bai40cach2())
document.getElementById("bai40").innerHTML+= " <br>bài 40 : cách 2 <br>"+bai40cach2()


console.log("BÀI 41");
function bai41() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        return `Đội ${index +1} gồm :[${item.trim()}],`
    }).join("")
}
console.log(bai41());
document.getElementById("bai41").innerHTML= "bài 41 : <br>"+bai41()

console.log("BÀI 42");
function bai42() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        let team = item.trim().split(" ");
        team.push("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    }).join(" ")
}
console.log(bai42());
document.getElementById("bai42").innerHTML= "bài 42 : <br>"+bai42()

console.log("BÀI 43");
function bai43() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        let team = item.trim().split(" ");
        team.unshift("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    }).join(" ")
}
console.log(bai43());
document.getElementById("bai43").innerHTML= "bài 43 : <br>"+bai43()
//BÀI 44 
console.log("BÀI 44");
function bai44() {
    let dataName = bai32();
    return dataName.repeat(2)
}
console.log(bai44());
document.getElementById("bai44").innerHTML= "bài 44 : <br>"+bai44()
//BÀI45
console.log("BÀI 45")
function bai45() {
    let newListStudent = bai32()
    return newListStudent.replaceAll("Dũng", "Tuấn")
}
console.log(bai45())
document.getElementById("bai45").innerHTML= "bài 45 : <br>"+bai45()

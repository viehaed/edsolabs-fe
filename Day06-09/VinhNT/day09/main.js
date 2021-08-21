import getLastName,{nameArr}  from "./module/bai31.js";
import getStringName,{string} from "./module/bai32.js";
import stuList from "./module/data.js";

console.log("Bài tập 31")

console.log(getLastName(stuList));

console.log("Bài tập 32")


console.log(getStringName(nameArr))

console.log("Bài tập 33")

function stringBackToArr(str){
    return str.split(" ")
}
console.log(stringBackToArr(string))

console.log("Bài tập 34")
function countStuA(a){
    return string.split(a).length - 1;
}
console.log(countStuA("Thành"))

console.log("Bài tập 35")
function firstStuAIndex(a){
    return string.split(" ").indexOf(a) + 1
}
console.log(firstStuAIndex("Sơn"))

console.log("Bài tập 36")
function lastStuAIndex(a){
    return string.split(" ").lastIndexOf(a) + 1
}
console.log(lastStuAIndex("Thành"))

console.log("Bài tập 37")
function countNameStartWithA(a){
    return string.split(" ").filter((e)=>e.startsWith(a.toUpperCase())).length
}
console.log(countNameStartWithA("t"))

console.log("Bài tập 38")
function countNameStartWithAEndWithB(a,b){
    return string.split(" ").filter((e)=>
        e.startsWith(a.toUpperCase()) && e.endsWith(b.toLowerCase())
    ).length
}
console.log(countNameStartWithAEndWithB("t","n"))

console.log("Bài tập 39")
function countNameIncludeA(a){
    return string.split(" ")
        .filter((e)=>
            e.includes(a.toUpperCase()) || e.includes(a.toLowerCase())
        ).length
}
console.log(countNameIncludeA("ô"))

console.log("Bài tập 40")
function makeString(){
    let a = "bạn "
    let b = ", tiếp theo là "
    let c = ", cuối cùng là bạn "+nameArr[nameArr.length -1]
    let result = nameArr
        .map((e) => a.concat(e).concat(b))
        .reduce(function(pre,cur){return pre + cur})
    result = result.charAt(0).toUpperCase() + result.slice(1)
    let x = result.lastIndexOf(",")
    result = result.slice(0, x)
    x = result.lastIndexOf(",")
    result = result.slice(0, x)
    return result + c;
}
console.log(makeString())

console.log("Bài tập 41")
function splitTeamNoThanh(){
    return string.split("Thành")
}
console.log(splitTeamNoThanh())

console.log("Bài tập 42")
function splitTeamWithThanhAtEnd(){
    let result = string.split("Thành").map(e => e.trim()+ " Thành")
    let last = result.length-1
    let pos = result[last].lastIndexOf("Thành")
    result[last] = result[last].slice(0,pos).trimEnd()
    return result
}
console.log(splitTeamWithThanhAtEnd())

console.log("Bài tập 43")
function splitTeamWithThanhAtStart(){
    let result = string.split("Thành").map(e =>"Thành "+ e.trim())
    result[0] = result[0].slice(("Thành").length).trim()
    return result
}
console.log(splitTeamWithThanhAtStart())

console.log("Bài tập 44")
function doubleLengthString(){
    return string.repeat(2)
}
console.log(string.length)
let stringx2 = doubleLengthString()
console.log(stringx2.length)

console.log("Bài tập 45")
function replaceName(){
    return string.replaceAll("Dũng", "Tuấn")
}
console.log(replaceName())


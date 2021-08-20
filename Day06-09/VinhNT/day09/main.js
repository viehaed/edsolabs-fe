const stuList = [
    {id: 1,name: "Nguyễn Văn Sơn",group: 1,lead: 0}, 
    {id:2,name: "Nguyễn Hữu Ánh",group: 1,lead: 0},
    {id: 3,name: "Trần Mạnh Quân",group: 4,lead: 1},
    {id:4,name: "Hà Quốc Tuấn",group: 3,lead: 1},
    {id: 5,name: "Hoàng Ngọc Thành",group: 1,lead: 0},
    {id: 6,name: "Vũ Thị Thu Hà",group: 2,lead: 0},
    {id: 7,name: "Phan Văn Trung",group: 2,lead: 0},
    {id: 8,name: "Nguyễn Cao Hoàng",group: 2,lead: 0},
    {id: 9,name: "Phùng Đắc Nhật Minh",group: 5,lead: 1},
    {id: 10,name: "Lê Việt Dũng",group: 1,lead: 1},
    {id: 11,name: "Đỗ Chí Công",group: 2,lead: 0},
    {id: 12,name: "Trần Công Tâm",group: 3,lead: 0},
    {id: 13,name: "Trương Thanh Tùng",group: 3,lead: 0},
    {id: 14,name: "Tạ Đức Chiến",group: 3,lead: 0},
    {id: 15,name: "Nguyễn Trọng Vĩnh",group: 3,lead: 0},
    {id: 16,name: "Ngô Chung Á Âu",group: 4,lead: 0},
    {id: 17,name: "Trần Thị Khánh Linh",group: 2,lead: 1},
    {id: 18,name: "Phan Tiến Thành",group: 4,lead: 0},
    {id: 19,name: "Đỗ Văn Huy",group: 4,lead: 0},
    {id: 20,name: "Nguyễn Trung Đức",group: 5,lead: 0},
    {id: 21,name: "Nguyễn Trung Nam",group: 5,lead: 0},
    {id: 22,name: "Trần Quốc Toàn",group: 5,lead: 0},
]

console.log("Bài tập 31")
function getLastName(list){
    const result =[];
    list.map((e) =>{
        let fullName = e.name.split(" ");
        let lastName = fullName[fullName.length - 1];
        result.push(lastName);
    })
    return result;
}
console.log(getLastName(stuList));

console.log("Bài tập 32")
nameArr = getLastName(stuList)
function getStringName(list){
    let result = ' ';
    list.map((e) => {
        result += e.concat(" ")
    })
    return result.trim();
}
console.log(getStringName(nameArr))

console.log("Bài tập 33")
let string = getStringName(nameArr)
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
    x = result.lastIndexOf(",")
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
    pos = result[last].lastIndexOf("Thành")
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
stringx2 = doubleLengthString()
console.log(stringx2.length)

console.log("Bài tập 45")
function replaceName(){
    return string.replaceAll("Dũng", "Tuấn")
}
console.log(replaceName())
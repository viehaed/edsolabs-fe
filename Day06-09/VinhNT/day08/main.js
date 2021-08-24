import data, {stuList} from "./module/data.js";
import getRandomInt from "./module/getRanDomInt.js"
import getRandomXStu from "./module/getRandomXStu.js"
import getStuFromGrX from "./module/getStuFromGrX.js"
import {dayArr} from "./module/fakePoints.js"
import fakePoints from "./module/fakePoints.js"
import getStuWithPoint from "./module/getStuWithPoint.js";
import topFiveStu from "./module/topFiveStu.js"
import getStuWithPointAndTime from "./module/getStuWithPointAndTime.js";
import getPair from "./module/getPair.js";
import getGroupTotalPoint from "./module/getGroupTotalPoint.js"

console.log("Bài tập 21")
console.log(data);

console.log("Bài tập 22")
getRandomXStu(3,data);

console.log("Bài tập 23")
getStuFromGrX(1,data)

console.log("Bài tập 24")
// addPoints(1,1,6)
// addPoints(1,2,6)
// console.log(stuList[0])

console.log("Bài tập 25")

let pointData = fakePoints(data)
console.log(pointData)


console.log("Bài tập 26")
let newData = getStuWithPoint(2,4,pointData)
console.log(newData)
// console.log(getStuWithPoint(2,4,pointData))

console.log("Bài tập 27")
topFiveStu(2,4,pointData)

console.log("Bài tập 28")

let a = getStuWithPointAndTime(2,4,7,pointData,dayArr);
console.log(a)
const groupArr = Array.from(new Set(stuList.map((e) => e.group.groupId)))

console.log("Bài tập 29")

let b = getPair(1,5,pointData,groupArr)
console.log(b)

console.log("Bài tập 30")


let c = getGroupTotalPoint(2,4,pointData,groupArr)     
console.log(c)   
        
        
        
    
    
    
    







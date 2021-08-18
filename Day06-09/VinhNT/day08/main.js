console.log("Bài tập 21")
const stuList = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group:{
            groupId: 4,
            position: "Leader",
        }
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group:{
            groupId: 3,
            position: "Leader",
        }
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group:{
            groupId: 5,
            position: "Leader",
        }
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group:{
            groupId: 1,
            position: "Leader",
        }
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 14,
        name: "Tạ Đức Chiến",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group:{
            groupId: 2,
            position: "Leader",
        }
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
];
console.log(stuList);

console.log("Bài tập 22")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomXStu (x, list){
    // let setArr = new Set()
    // while(setArr.size <x){
    //     let a = getRandomInt(22);
    //     setArr.add(a)
    // }
    // setArr.forEach(function(value){
    //     console.log(list[value].name)
    // })
    let result = Array.from({length:x},() => {
        a = getRandomInt(stuList.length)-1
        return stuList[a].name
    })
    console.log(result)
}
getRandomXStu(3,stuList);

console.log("Bài tập 23")
function getStuFromGrX(x){
    let result = stuList.filter((e) => e.group.groupId === x)
    console.log(result)
}
getStuFromGrX(1)

console.log("Bài tập 24")

function addPoints(stuId, day, point){
    if(stuList[stuId - 1].hasOwnProperty("points") === false){

        stuList[stuId - 1].points=[];
        stuList[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }else{
        stuList[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }
}
// addPoints(1,1,6)
// addPoints(1,2,6)
// console.log(stuList[0])

console.log("Bài tập 25")

const dayArr = [1,2,3,4,5,6,7]
stuList.map((e) => {
    dayArr.map((o) =>{
        addPoints(
            e.id,
            o,
            getRandomInt(10)
        )
    })
})
console.log(stuList)

pointData = JSON.parse(JSON.stringify(stuList))
console.log("Bài tập 26")
function getStuWithPoint(x,y){
    const range = Array.from({length:y-x+1},(_,i) => x +i)
    const result = pointData.map((e) => ({
        id : e.id,
        groupId : e.group.groupId,
        name : e.name,
        points : e.points,
        total : range.map((o) =>{
            let sum = 0;
            sum += pointData[e.id - 1].points[o-1].point
            return sum
        }).reduce(function(pre,cur){
            return pre + cur
        })
    }))
    console.log(result)
    return result
}
getStuWithPoint(2,4)

console.log("Bài tập 27")
function topFiveStu(x,y){
    const data = getStuWithPoint(x,y);
    const result = (data.sort(function(a,b){
        return b.total - a.total;
    })).slice(0,5)
    console.log(result)
}
topFiveStu(2,4)

console.log("Bài tập 28")
function getStuWithPointAndTime(x,y,z){
    const data = getStuWithPoint(x,y);
    const dayArr = [1,2,3,4,5,6,7]
    const result = (data.filter((e) => {
        for(let i = 0; i<dayArr.length;i++){
            if(e.points[i].point === z){
                return true
                break;  
            } 
        }
        
    })).map((o) => ({
        id : o.id,
        name : o.name,
        totalPoint : o.total
    }))
    console.log(result)
}
getStuWithPointAndTime(2,4,7);

console.log("Bài tập 29")
function getPair(x,y){
    const data = getStuWithPoint(x,y);
    const result = [];
    for (let i = 1; i<=5;i++){
        const subData = data.filter(e => e.groupId === i)
        const sortData = subData.sort(function(a,b){
            return b.total - a.total
        })
        let m = sortData.pop().name
        let n = sortData.shift().name
        result.push({hocvien1 : n, hocvien2:m, groupName: i})
    }
    
    console.log(result)
}
getPair(2,4)

console.log("Bài tập 30")
function getGroupTotalPoint(x,y){
    const data = getStuWithPoint(x,y);
    const result = [];
    for (let i =1; i<=5;i++){
        const subData = data.filter(e => e.groupId === i)
        let groupTotal = 0;
        subData.forEach((e)=>{
            groupTotal  += e.total; 
        })
        result.push({
            groupName: i,
            totalPoint: groupTotal,
            points: subData.map((e) =>({
                hocvien: e.name,
                totalPoint: e.total
            }))
        })        
    }
    console.log(result)
}
getGroupTotalPoint(2,4)




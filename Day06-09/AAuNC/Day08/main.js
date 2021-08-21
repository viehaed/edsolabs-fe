
//Bài 1
console.log("BÀI 21")
const arrStudent = [
    {
      id: 1,
      name: "Nguyễn Văn Sơn",
      group: {groupId: 1, position: 0}
    },
    {
      id: 2,
      name: "Nguyễn Hữu Ánh",
      group: {groupId: 1, position: 0}
    },
    {
      id: 3,
      name: "Trần Mạnh Quân",
      group: {groupId: 4, position: 1}
    },
    {
      id: 4,
      name: "Hà Quốc Tuấn",
      group: {groupId: 3, position: 1}
    },
    {
      id: 5,
      name: "Hoàng Ngọc Thành",
      group: {groupId: 1, position: 0}
    },
    {
      id: 6,
      name: "Vũ Thị Thu Hà",
      group: {groupId: 2, position: 0}
    },
    {
      id: 7,
      name: "Phan Văn Trung",
      group: {groupId: 2, position: 0}
    },
    {
      id: 8,
      name: "Nguyễn Cao Hoàng",
      group: {groupId: 2, position: 0}
    },
    {
      id: 9,
      name: "Phùng Đắc Nhật Minh",
      group: {groupId: 5, position: 1}
    },
    {
      id: 10,
      name: "Lê Việt Dũng",
      group: {groupId: 1, position: 1}
    },
    {
      id: 11,
      name: "Đỗ Chí Công",
      group: {groupId: 2, position: 0}
    },
    {
      id: 12,
      name: "Trần Công Tâm",
      group: {groupId: 3, position: 0}
    },
    {
      id: 13,
      name: "Trương Thanh Tùng",
      group: {groupId: 3, position: 0}
    },
    {
      id: 14,
      name: "Tạ Đức Chiến",
      group: {groupId: 3, position: 0}
    },
    {
      id: 15,
      name: "Nguyễn Trọng Vĩnh",
      group: {groupId: 3, position: 0}
    },
    {
      id: 16,
      name: "Ngô Chung Á Âu",
      group: {groupId: 4, position: 0}
    },
    {
      id: 17,
      name: "Trần Thị Khánh Linh",
      group: {groupId: 2, position: 1}
    },
    {
      id: 18,
      name: "Phan Tiến Thành",
      group: {groupId: 4, position: 0}
    },
    {
      id: 19,
      name: "Đỗ Văn Huy",
      group: {groupId: 4, position: 0}
    },
    {
      id: 20,
      name: "Nguyễn Trung Đức",
      group: {groupId: 5, position: 0}
    },
    {
      id: 21,
      name: "Nguyễn Trung Nam",
      group: {groupId: 5, position: 0}
    },
    {
      id: 22,
      name: "Trần Quốc Toàn",
      group: {groupId: 5, position: 0}
    },
  ];

console.log(arrStudent);

//Bài 22
console.log("BÀI 22")
function getStudentName(x){
  let listStudent = JSON.parse(JSON.stringify(arrStudent));
  if(x > listStudent.length) console.log("Vượt quá số lượng học viên")
  else if(typeof(x) === "string") console.log("Nhập sai định dạng")
  else{
    let arr = listStudent.sort(() => Math.random() - 0.5).slice(0,x).map(arrItem=> {
      names = arrItem.name.split(" ");
      return names[names.length-1]
    });
    console.log(arr)
  }
}

getStudentName(5);

//Bài 23
console.log("BÀI 23")
function getStudentGroup(x){
  let listStudent = JSON.parse(JSON.stringify(arrStudent));
  let listGroup = [...(new Set(listStudent.map(item=>{
    return item.group.groupId;
  })))];

  if(typeof(x) === "string") console.log("Nhập sai định dạng")
  else if(x <= 0 || x > listGroup.length) console.log("Không có nhóm này")
  else if(listGroup.includes(x)){
    let arr =  listStudent.filter(item => item.group.groupId == x).map(item =>{
      names = item.name.split(" ");
      return names[names.length-1]
    });
    console.log(arr)
  }
  else console.log("Không tồn tại nhóm này")
}

getStudentGroup(1);


//Bài 24
console.log("BÀI 24")
let listStudent = JSON.parse(JSON.stringify(arrStudent));

function pointForStudent(id, dayID, point){
  var student = listStudent.find(item => item.id == id);
  var pointInfo = {
    dayID: dayID,
    dayName: "Ngày "+Math.floor(Math.random()*30),
    point: point
  };

  if(!student.points) {
    student.points = [];
    student.points.push(pointInfo);
  }
  else{
    let po = student.points.find(p => p.dayID == dayID);
    let res = student.points.includes(student.points.find(p => p.dayID == dayID));
    if(!res){
      student.points.push(pointInfo);
    }
    else{
      po.dayName = pointInfo.dayName;
      po.point = pointInfo.point
    }
  }
}

//Bài 25
console.log("BÀI 25")
function remakeArrStudents(){
  
  for (var S of listStudent) {
    for(let i = 1; i < 6; i++){
      pointForStudent(S.id, i, Math.floor(Math.random()*10));
    }
  }
  return JSON.stringify(listStudent);
}

console.log(remakeArrStudents())


//Bài 26
console.log("BÀI 26")
function calculateToTalPoint(x, y, student){
  let totalPoint;
    if(!student.totalPoint){
      totalPoint = student.points.reduce((total, value) => {
        if(value.dayID >= x && value.dayID <= y){
          return total + value.point;
        }
        else{
          return total;
        }
      }, 0);
      student.totalPoint = totalPoint;
    }
    else{
      totalPoint = student.totalPoint;
    }
}
function getNameAndSumPoint (x, y){
  let listNameAndPoint = listStudent.map(student => {
    calculateToTalPoint(x, y, student)
    let name = student.name.split(" ");

    return{
      name: name[name.length-1],
      total: student.totalPoint
    }
  });

  return listNameAndPoint;
}

console.log(getNameAndSumPoint(1,5));

//Bài 27
console.log("BÀI 27")
function getTop5MaxTotalPoint(x, y){
  let listTop5 = getNameAndSumPoint(x,y).sort((a, b) => {
    return b.total - a.total;
  }).slice(0, 5);

  console.log(listTop5);
}

getTop5MaxTotalPoint(1,5);

//Bài 28
console.log("BÀI 28")

function findStudentByDateAndToTal(x, y, z){
  let newList = listStudent.map(student => {
    calculateToTalPoint(x, y, student);
    return student;
  });
  console.log(newList);

  let finalList = newList.filter(student => {
    if(student.totalPoint == z){
      let name = student.name.split(" ");
      return{
        id: student.id,
        name: name[name.length-1],
        totalPoint: student.totalPoint
      }
    }
  })

  return finalList;
}

console.log(findStudentByDateAndToTal(1,5,17));

//Bài 29
console.log("BÀI 29")

function besrWorst(x, y){
  let listGroup = [...(new Set(listStudent.map(item=>{
    return item.group.groupId;
  })))].sort();

  let newList = listStudent.map(student => {
    calculateToTalPoint(x, y, student);
    return student;
  });
  let pairStudent = [];

  for (let i of listGroup) {
    let arr =  newList.filter(item => item.group.groupId == i).sort((a,b) => {
      return b.totalPoint - a.totalPoint;
    }).map(item => {
      let name = item.name.split(" ");
      return name[name.length-1];
    });
  
    pairStudent.push(
      {
        student1: arr[0],
        student2: arr[arr.length-1],
        groupName: i
      }
    )
  }

  return pairStudent;
}

console.log(besrWorst(1,5));

//Bài 30
console.log("BÀI 30")

function groupTotalPoint(x, y){
  let listGroup = [...(new Set(listStudent.map(item=>{
    return item.group.groupId;
  })))].sort();

  let newList = listStudent.map(student => {
    calculateToTalPoint(x, y, student);
    return student;
  });

  let groupStudent = [];

  for (let i of listGroup) {
    let arr =  newList.filter(item => item.group.groupId == i);
    
    let points = [];
    for (let a of arr) {
      let name = a.name.split(" ");
      points.push(
        {
          name: name[name.length-1],
          totalPoint: a.totalPoint
        }
      )
    }


    let totalPoint = arr.reduce((total, value) => {
      return total + value.totalPoint
    }, 0);

    groupStudent.push(
      {
        group: i,
        totalPoint: totalPoint,
        points: points
      }
    )
  }

  return groupStudent;
}

console.log(groupTotalPoint(1,5));
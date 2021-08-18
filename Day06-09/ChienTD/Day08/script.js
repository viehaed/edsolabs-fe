"use strict"

// Bài 1
console.log("Bài 1")
var listHocVien = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 3,
        name: "Trần Mạnh Quân",
        group: {
            groupId: 4,
            position: "leader"
        }
      },
      {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: {
            groupId: 3,
            position: "leader"
        }
      },
      {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 7,
        name: "Phan Văn Trung",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 8,
        name: "Nguyên Cao Hoàng",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: {
            groupId: 5,
            position: "leader"
        }
      },
      {
        id: 10,
        name: "Lê Việt Dũng",
        group: {
            groupId: 1,
            position: "leader"
        }
      },
      {
        id: 11,
        name: "Đỗ Chí Công",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 12,
        name: "Trần Công Tâm",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 13,
        name: "Trương Thanh Tùng",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 14,
        name: "Tạ Đưc Chiến",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 16,
        name: "Ngô Chúng Á Âu",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: {
            groupId: 2,
            position: "leader"
        }
      },
      {
        id: 18,
        name: "Phan Tiến Thành",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 19,
        name: "Đỗ Văn Huy",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 20,
        name: "Nguyễn Trung Đức",
        group: {
            groupId: 5,
            position: "member"
        }
      },
      {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: {
            groupId: 5,
            position: "member"
        }
      },
      {
        id: 22,
        name: "Trần Quốc Toàn",
        group: {
            groupId: 5,
            position: "member"
        }
      },
]

// Bài22
console.log("-----------------------------")
console.log("Bài 22")
const x = 3; 

function randomMember(x) {
  const idRandom = [];
  for (let i = 0; i < x; i++) {
      idRandom.push(Math.floor(Math.random() * listHocVien.length))
  }
  return console.log(listHocVien.filter((x) => idRandom.includes(x.id)).map((x) => x.name))
}

randomMember(3)


// Bài23
console.log("-----------------------------")
console.log("Bài 23")
function getGroup(x3){
  var soNhom = 0;
  soNhom = listHocVien.reduce(function(accumulator, currentValue){
      return (currentValue.group.position === "leader") ? accumulator + 1 : accumulator
  }, 0)
  if (x3 < 1 || x3 > soNhom) {
      console.log("Đầu vào không hợp lệ")
  } else {
      console.log(listHocVien.filter((x) => x.group.groupId === x3).map((o) => o.name))
  }
}

getGroup(3);


// Bài24
console.log("-----------------------------")
console.log("Bài 24")
const member = {
      id: 1,
      name: "Nguyễn Văn Sơn",
      group: {
          groupId: 1,
          position: "member"
      }
  }
member.points = [];
function addPoint(member, dayID, dayName, point) {
  var addPoints = {};
  addPoints.dayID = dayID;
  addPoints.nameDay = dayName;
  addPoints.point = point;
  member.points.push(addPoints)
}

addPoint(member,1,"Thứ 2",10);
console.log(member)

// Bài25
console.log("-----------------------------")
console.log("Bài 25")
console.log("Giả lập điểm 1 tuần của tất cả học viên")
const list25 = cloneArr(listHocVien)
const updateList25 = list25.map((x) => {
  x.points = [];
  for (let i = 1; i < 8; i++ ) {
    let thu = i < 7 ? "Thứ " + (i + 1) : "Chủ nhật" 
    let point = Math.floor(Math.random() * 10);
    addPoint(x,i,thu,point)
  }
  return x;
})
console.log(updateList25)

// Bài26
console.log("-----------------------------")
console.log("Bài 26")
console.log("Lấy ra danh sách học viên và điểm trong khoảng")
const list26 = cloneArr(updateList25)
function sumPoints(x,y) {
  const updateList26 = list26.map((o) => {
    return {
      id : o.id,
      name : o.name,
      sumPoint : o.points.reduce((accumulator,currentValue) => {
        return currentValue.dayID >= x && currentValue.dayID <= y ? accumulator + currentValue.point : accumulator
      },0)
    }
  })
  return updateList26;
}

console.log(sumPoints(2,5));


// Bài27
console.log("-----------------------------")
console.log("Bài 27")
console.log(sumPoints(2,5).sort((a,b) => b.sumPoint - a.sumPoint).slice(0,5))

// Bài28
console.log("-----------------------------")
console.log("Bài 28")
function bai28(x,y,z) {
    const List28 = sumPoints(x,y).filter((t) => t.sumPoint === z)
  return List28;
}
console.log(bai28(2,5,15))


// Bài29
console.log("-----------------------------")
console.log("Bài 29")
const list29 = cloneArr(list25);
function support(x,y) {
  const updateList29 = list29.map((o) => {
    return {
      id : o.id,
      group : o.group.groupId,
      name : o.name,
      sumPoint : o.points.reduce((accumulator,currentValue) => {
        return currentValue.dayID >= x && currentValue.dayID <= y ? accumulator + currentValue.point : accumulator
      },0)
    }
  })
  return updateList29;
}
console.log(support(2,5));




// deep copy
function cloneArr(list) {
  return JSON.parse(JSON.stringify(list)); 
}


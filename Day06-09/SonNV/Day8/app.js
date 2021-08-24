let myClass = [{
  id: 1,
  name: "Nguyễn Văn Sơn",
  group: {
      groupId: 1,
      position: "member"
  },

},
{
  id: 2,
  name: "Nguyễn Hữu Ánh",
  group: {
      groupId: 1,
      position: "member"
  },

},
{
  id: 3,
  name: "Trần Mạnh Quân",
  group: {
      groupId: 4,
      position: "leader"
  },

},
{
  id: 4,
  name: "Hà Quốc Tuấn",
  group: {
      groupId: 3,
      position: "leader"
  },

},
{
  id: 5,
  name: "Hoàng Ngọc Thành",
  group: {
      groupId: 1,
      position: "member"
  },

},
{
  id: 6,
  name: "Vũ Thị Thu Hà",
  group: {
      groupId: 2,
      position: "member"
  },

},
{
  id: 7,
  name: "Phan Văn Trung",
  group: {
      groupId: 2,
      position: "member"
  },

},
{
  id: 8,
  name: "Nguyên Cao Hoàng",
  group: {
      groupId: 2,
      position: "member"
  },

},
{
  id: 9,
  name: "Phùng Đắc Nhật Minh",
  group: {
      groupId: 5,
      position: "leader"
  },

},
{
  id: 10,
  name: "Lê Việt Dũng",
  group: {
      groupId: 1,
      position: "leader"
  },

},
{
  id: 11,
  name: "Đỗ Chí Công",
  group: {
      groupId: 2,
      position: "member"
  },

},
{
  id: 12,
  name: "Trần Công Tâm",
  group: {
      groupId: 3,
      position: "member"
  },

},
{
  id: 13,
  name: "Trương Thanh Tùng",
  group: {
      groupId: 3,
      position: "member"
  },

},
{
  id: 14,
  name: "Tạ Đưc Chiến",
  group: {
      groupId: 3,
      position: "member"
  },

},
{
  id: 15,
  name: "Nguyễn Trọng Vĩnh",
  group: {
      groupId: 3,
      position: "member"
  },

},
{
  id: 16,
  name: "Ngô Chúng Á Âu",
  group: {
      groupId: 4,
      position: "member"
  },

},
{
  id: 17,
  name: "Trần Thị Khánh Linh",
  group: {
      groupId: 2,
      position: "leader"
  },

},
{
  id: 18,
  name: "Phan Tiến Thành",
  group: {
      groupId: 4,
      position: "member"
  },

},
{
  id: 19,
  name: "Đỗ Văn Huy",
  group: {
      groupId: 4,
      position: "member"
  },

},
{
  id: 20,
  name: "Nguyễn Trung Đức",
  group: {
      groupId: 5,
      position: "member"
  },

},
{
  id: 21,
  name: "Nguyễn Trung Nam",
  group: {
      groupId: 5,
      position: "member"
  },

},
{
  id: 22,
  name: "Trần Quốc Toàn",
  group: {
      groupId: 5,
      position: "member"
  },

}
];
//----------------------BÀI22
function getNameAuto(x) {
let emtyArr = [];
if (x > myClass.length) {
  return "Nhập quá số lượng sinh viên"
} else {
  for (let i = 0; i < x; i++) {
      let randomClass = myClass[Math.floor(Math.random() * myClass.length)].name;
      while (emtyArr.includes(randomClass)) {
          randomClass = myClass[Math.floor(Math.random() * myClass.length)].name;
      }
      emtyArr.push(randomClass.split(" ").pop())
  }
}
return emtyArr
}
console.log(getNameAuto(10));
// -----------------------BÀI23

function getNameInGroup(number) {
let nameInGroup = []
if (number > 5) {
  return "Chỉ có 5 nhóm trong lớp"
} else {
  let arr = []
  arr = myClass.filter(item => item.group.groupId === number)
  arr.forEach(item => nameInGroup.push(item.name.split(" ").pop()))
}
return nameInGroup
}
console.log(getNameInGroup(1));

//-----------------------BÀI24
function updatePoint(id, date, coin) {
let updateClass = JSON.parse(JSON.stringify(myClass))
updateClass.forEach(item => {
  item.points = [{
          dayID: 2,
          dayName: "thứ 2",
          point: 5
      },
      {
          dayID: 3,
          dayName: "thứ 3",
          point: 7
      },
      {
          dayID: 4,
          dayName: "thứ 4",
          point: 6
      },
      {
          dayID: 5,
          dayName: "thứ 5",
          point: 8
      },
      {
          dayID: 6,
          dayName: "thứ 6",
          point: 8
      },
      {
          dayID: 7,
          dayName: "thứ 7",
          point: 9
      }
  ]
})
updateClass.forEach(item => {
  if (item.points[date - 2].dayID === date && item.id === id) {
      item.points[date - 2].point = coin;
  }
})
return updateClass
}

console.log(updatePoint(1, 5, 9)); //Sẽ chỉnh sửa điểm có id = 22, date = 5

//------------------------BÀI25
function updatePointByDay() {
let newClass = JSON.parse(JSON.stringify(myClass));
newClass.forEach(item => {
  item.points = [{
          dayID: 2,
          dayName: "thứ 2",
          point: Math.floor(Math.random() * 10)
      },
      {
          dayID: 3,
          dayName: "thứ 3",
          point: Math.floor(Math.random() * 10)
      },
      {
          dayID: 4,
          dayName: "thứ 4",
          point: Math.floor(Math.random() * 10)
      },
      {
          dayID: 5,
          dayName: "thứ 5",
          point: Math.floor(Math.random() * 10)
      },
      {
          dayID: 6,
          dayName: "thứ 6",
          point: Math.floor(Math.random() * 10)
      },
      {
          dayID: 7,
          dayName: "thứ 7",
          point: Math.floor(Math.random() * 10)
      }
  ]

})
return newClass;
}
console.log(updatePointByDay());

//----------------------BÀI26

function getSumPoint(x, y) {
let listStudent = updatePointByDay();
listStudent.forEach((item) => {
  let sum = 0;
  item.points.filter(a => a.dayID >= x && a.dayID <= y).forEach(item => {
      sum += item.point
  })
  item.sums = sum;
})
return listStudent
}
console.log(getSumPoint(2, 3));

// ---------------------BÀI27
function getMaxCoin() {
let getStudents = getSumPoint(2, 4);
getStudents.sort((a, b) => {
  return b.sums - a.sums;
});
return getStudents.slice(0, 5)
}
console.log(getMaxCoin())

//---------------------BÀI28
function bai28(x, y, z) {
let newArr = getSumPoint(x, y);
let students = newArr.filter(item => {
  let flag = false;
  for (let i = x; i <= y; i++) {
      if (item.points[i - 2].point === z) {
          flag = true;
      }
  }
  return flag;
})
return students.map(item => {
  return {
      id: item.id,
      name: item.name,
      totalPoint: item.sums,
  }
})
}
console.log(bai28(2, 3, 9));

//------------------BÀI29
// -------------------support function bai 29 30---------------
function support(x, y) {
let local = getSumPoint(x, y);
let newArr = [];
for (let i = 1; i <= 5; i++) {
  let subArr = [];
  local.forEach(item => {
      if (item.group.groupId === i) {
          subArr.push(item);
      }
  })
  newArr.push(subArr);
}
return newArr;
}
//--------------------- BÀI29 ----------------------

function bai29(x, y) {
let newArr = support(x, y);
let valueArr = newArr.map(item => {
  return item.sort((a, b) => b.sums - a.sums)
})
let output = valueArr.map((item) => {
  return {
      hocvien1: item[0].name,
      hocvien2: item[item.length - 1].name,
      groupName: item[0].group.groupId
  }
})
console.log(valueArr);
console.log(output);
}

bai29(2, 6);

//  --------------------- BÀI30 -------------------------
function sumGroup(x, y) {
let newArr = support(x, y);
let outputArr = newArr.map(item => ({
  groupName: item[0].group.groupId,
  totalPoints: item.reduce((accument, student) => {
      return accument + student.sums
  }, 0),
  point: item.map(item => ({
      name: item.name,
      totalPoint: item.sums
  }))
}))
console.log(outputArr);
}
sumGroup(4, 5)
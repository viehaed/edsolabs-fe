console.log("bài 01");
let arrStudentEdsoLabs = [
  {
    id: "01",
    name: "Nguyễn Văn Sơn",
    position: "Thành viên",
    groupNumber: "1",
  },
  {
    id: "02",
    name: "Nguyễn Hữu Ánh",
    position: "Thành viên",
    groupNumber: "1",
  },
  {
    id: "03",
    name: "Trần Mạnh Quân",
    position: "Trưởng nhóm",
    groupNumber: "4",
  },
  {
    id: "04",
    name: "Hà Quốc Tuấn",
    position: "Trưởng nhóm",
    groupNumber: "3",
  },
  {
    id: "05",
    name: "Hoàng Ngọc Thành",
    position: "Thành viên",
    groupNumber: "1",
  },
  {
    id: "06",
    name: "Vũ Thị Thu Hà",
    position: "Thành viên",
    groupNumber: "2",
  },
  {
    id: "07",
    name: "Phan Văn Trung",
    position: "Thành viên",
    groupNumber: "2",
  },
  {
    id: "08",
    name: "Nguyễn Cao Hoàng",
    position: "Thành viên",
    groupNumber: "2",
  },
  {
    id: "09",
    name: "Phùng Đắc Nhật Minh",
    position: "Trưởng nhóm",
    groupNumber: "5",
  },
  {
    id: "10",
    name: "Lê Việt Dũng",
    position: "Trưởng nhóm",
    groupNumber: "1",
  },
  {
    id: "11",
    name: "Đỗ Chí Dũng",
    position: "Thành viên",
    groupNumber: "2",
  },
  {
    id: "12",
    name: "Trần Công Tâm",
    position: "Thành viên",
    groupNumber: "3",
  },
  {
    id: "13",
    name: "Trương Thanh Tùng",
    position: "Thành viên",
    groupNumber: "3",
  },
  {
    id: "14",
    name: "Tạ Đức Chiến",
    position: "Thành viên",
    groupNumber: "3",
  },
  {
    id: "15",
    name: "Nguyễn Trọng Vinh",
    position: "Thành viên",
    groupNumber: "3",
  },
  {
    id: "16",
    name: "Ngô Chung Á Âu",
    position: "Thành viên",
    groupNumber: "4",
  },
  {
    id: "17",
    name: "Trần Thị Khánh Linh",
    position: "Trưởng nhóm",
    groupNumber: "2",
  },
  {
    id: "18",
    name: "Phan Tiến Thành",
    position: "Thành viên",
    groupNumber: "4",
  },
  {
    id: "19",
    name: "Đỗ Văn Huy",
    position: "Thành viên",
    groupNumber: "4",
  },
  {
    id: "20",
    name: "Nguyễn Trung Đức",
    position: "Thành viên",
    groupNumber: "5",
  },
  {
    id: "21",
    name: "Nguyễn Trung Nam",
    position: "Thành viên",
    groupNumber: "5",
  },
  {
    id: "22",
    name: "Trần Quốc Toàn",
    position: "Thành viên",
    groupNumber: "5",
  },
];
console.log(arrStudentEdsoLabs);

//---bt2----//
console.log("bài 02");
const obj = Object.assign({}, arrStudentEdsoLabs);
console.log(obj);

//---bt3 + bt4----//
console.log("bài tập 03");
let totalStudent = arrStudentEdsoLabs.length;
let totalPosition = arrStudentEdsoLabs.filter(
  (student) => student.position == "Trưởng nhóm"
).length;

let arrGroup = arrStudentEdsoLabs.map((data) => data.groupNumber);
let totalGroup = Array.from(new Set(arrGroup)).length;
console.log("số lượng học viên " + totalStudent);
console.log("Số nhóm trưởng" + totalPosition);
console.log("Sô lượng nhóm" + totalGroup);

//--- bt4 ---//
console.log("bài 04");
console.log("số lượng học viên " + Object.keys(obj).length);
console.log("Sĩ số lơp " + Object.keys(obj).length);
totalPosition1 = 0;
for (let key in obj) {
    if (obj[key].position==="Trưởng nhóm") {
        totalPosition1++
    }
}
console.log("Số nhóm trưởng" + totalPosition1);

//--- bt5 ---//
console.log("bài 05");
let arr1 = [...arrStudentEdsoLabs];
arr1.shift();
console.log(arr1.shift());

//--- bt6 ---//
console.log("bài 06");
let arr2 = [...arrStudentEdsoLabs];
console.log(arr2.splice(6, 1));

//--- bt7 ---//
console.log("bài 07");
let StudentNumber9 = arrStudentEdsoLabs.find((data) => data.id == "09");
console.log(StudentNumber9);

//--- bt8 ---//
console.log("bài 08");
let leaderGroup02 = arrStudentEdsoLabs.find(
  (data) => data.position == "Trưởng nhóm" && data.groupNumber == "2"
);
idLeader = leaderGroup02.id;
console.log(idLeader);

//--- bt9 ---//
console.log("bài 09");
let bt9 = [...arrStudentEdsoLabs];
bt9.sort(function (a, b) {
  var nameA = a.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  var nameB = b.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else {
    return 1;
  }
  return 0;
});
console.log(bt9);

//--- bt10 ---//
console.log("bài 10");
let bt10 = arrStudentEdsoLabs.slice();
let dataName;
bt10.map((data) => {
  dataName = data.name.split(" ");
  data.name = dataName[dataName.length - 1];
});
console.log(bt10);

//--- bt11 ---//
console.log("bài 11");
let bt11 = bt10.sort(function (a, b) {
  var nameA = a.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  var nameB = b.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else {
    return 1;
  }
  return 0;
});
console.log(bt11);

//--- bt12 ---//
console.log("bài 12");
let arrName = bt10.map((data) => data.name);
let bt12 = Array.from(new Set(arrName));
console.log(bt12);

//--- bt13 ---//
console.log("bài 13");
let bt13 = arrName.filter((item, index) => arrName.indexOf(item) !== index);
console.log(bt13);

//--- bt14 ---//
console.log("bài 14");
let bt14 = arrStudentEdsoLabs.slice(0, 5);
for (let i = 5; i < 10; i++) {
  bt14.push(arrStudentEdsoLabs[i]);
}
console.log(bt14);

//--- bt14.1 ---//
console.log("bài 14.1");
let bt141 = arrStudentEdsoLabs.slice(0, 5);
for (let i = 5; i < 10; i++) {
  bt141.unshift(arrStudentEdsoLabs[i]);
}
console.log(bt141);

//--- bt15 ---//
console.log("bài 15");
let bt15 = arrStudentEdsoLabs.slice(0, 5);
bt15.sort(function (a, b) {
  var nameA = a.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  var nameB = b.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else {
    return 1;
  }
  return 0;
});
console.log(bt15);

//--- bt16 ---//
console.log("bài 16");
let bt16 = [];
for (const i in obj) {
  if (obj[i].id % 3 === 0) {
    bt16.push(obj[i]);
  }
}
console.log(bt16);

//--- bt17 ---//
console.log("Bài 17");
let bt17 = arrStudentEdsoLabs.slice(0, 5);
let checkLeader = bt17.find((data) => data.position === "Trưởng nhóm")
  ? "có trưởng nhóm"
  : "không có trưởng nhóm";
console.log(checkLeader);

//--- bt18 ---//
console.log("Bài 18");
let bt18 = arrStudentEdsoLabs.slice(0, 5);
let checkPosition = bt18.map((data) => data.position);
checkPosition = checkPosition.find((data) => data === "Thành viên")
  ? "không đủ 5 thành viên"
  : "đủ đủ 5 thành viên";
console.log(checkPosition);

//--- bt19 ---//
console.log("Bài 19");
let bt19 = [...arrStudentEdsoLabs];
bt19.map(
  (data) => (data.studentCode = data.name + "_" + data.id + "_" + data.position)
);
console.log(bt19);

//--- bt20 ---//
console.log("Bài 20");
console.log(arrStudentEdsoLabs.reverse());

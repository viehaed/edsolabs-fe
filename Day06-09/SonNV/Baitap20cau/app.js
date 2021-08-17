//-------Bai 1

var listStudents = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    groupNumber: 1,
    groupPosition: false,
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    groupNumber: 1,
    groupPosition: false,
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    groupNumber: 4,
    groupPosition: true,
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    groupNumber: 3,
    groupPosition: true,
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    groupNumber: 1,
    groupPosition: false,
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    groupNumber: 2,
    groupPosition: false,
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    groupNumber: 2,
    groupPosition: false,
  },
  {
    id: 8,
    name: "Nguyên Cao Hoàng",
    groupNumber: 2,
    groupPosition: false,
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    groupNumber: 5,
    groupPosition: true,
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    groupNumber: 1,
    groupPosition: true,
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    groupNumber: 2,
    groupPosition: false,
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    groupNumber: 3,
    groupPosition: false,
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    groupNumber: 3,
    groupPosition: false,
  },
  {
    id: 14,
    name: "Tạ Đưc Chiến",
    groupNumber: 3,
    groupPosition: false,
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    groupNumber: 3,
    groupPosition: false,
  },
  {
    id: 16,
    name: "Ngô Chúng Á Âu",
    groupNumber: 4,
    groupPosition: false,
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    groupNumber: 2,
    groupPosition: true,
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    groupNumber: 4,
    groupPosition: false,
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    groupNumber: 4,
    groupPosition: false,
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    groupNumber: 5,
    groupPosition: false,
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    groupNumber: 3,
    groupPosition: false,
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    groupNumber: 5,
    groupPosition: false,
  },
];
//------BAI 2

var objStudents = {
  student1: {
    id: 1,
    name: "Nguyễn Văn Sơn",
    groupNumber: 1,
    groupPosition: false,
  },
  student2: {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    groupNumber: 1,
    groupPosition: false,
  },
  student3: {
    id: 3,
    name: "Trần Mạnh Quân",
    groupNumber: 4,
    groupPosition: true,
  },
  student4: {
    id: 4,
    name: "Hà Quốc Tuấn",
    groupNumber: 3,
    groupPosition: true,
  },
  student5: {
    id: 5,
    name: "Hoàng Ngọc Thành",
    groupNumber: 1,
    groupPosition: false,
  },
  student6: {
    id: 6,
    name: "Vũ Thị Thu Hà",
    groupNumber: 2,
    groupPosition: false,
  },
  student7: {
    id: 7,
    name: "Phan Văn Trung",
    groupNumber: 2,
    groupPosition: false,
  },
  student8: {
    id: 8,
    name: "Nguyên Cao Hoàng",
    groupNumber: 2,
    groupPosition: false,
  },
  student9: {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    groupNumber: 5,
    groupPosition: true,
  },
  student10: {
    id: 10,
    name: "Lê Việt Dũng",
    groupNumber: 1,
    groupPosition: true,
  },
  student11: {
    id: 11,
    name: "Đỗ Chí Công",
    groupNumber: 2,
    groupPosition: false,
  },
  student12: {
    id: 12,
    name: "Trần Công Tâm",
    groupNumber: 3,
    groupPosition: false,
  },
  student13: {
    id: 13,
    name: "Trương Thanh Tùng",
    groupNumber: 3,
    groupPosition: false,
  },
  student14: {
    id: 14,
    name: "Tạ Đưc Chiến",
    groupNumber: 3,
    groupPosition: false,
  },
  student15: {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    groupNumber: 3,
    groupPosition: false,
  },
  student16: {
    id: 16,
    name: "Ngô Chúng Á Âu",
    groupNumber: 4,
    groupPosition: false,
  },
  student17: {
    id: 17,
    name: "Trần Thị Khánh Linh",
    groupNumber: 2,
    groupPosition: true,
  },
  student18: {
    id: 18,
    name: "Phan Tiến Thành",
    groupNumber: 4,
    groupPosition: false,
  },
  student19: {
    id: 19,
    name: "Đỗ Văn Huy",
    groupNumber: 4,
    groupPosition: false,
  },
  student20: {
    id: 20,
    name: "Nguyễn Trung Đức",
    groupNumber: 5,
    groupPosition: false,
  },
  student21: {
    id: 21,
    name: "Nguyễn Trung Nam",
    groupNumber: 3,
    groupPosition: false,
  },
  student22: {
    id: 22,
    name: "Trần Quốc Toàn",
    groupNumber: 5,
    groupPosition: false,
  },
};
//-----Bai 3
// var groups = 0
// for(var i = 0 ; i < listStudents.length ; i++){
//     if (listStudents[i].groupPosition) {
//       groups++;
//     }
// }
// console.log("So hoc vien trong lop : " + listStudents.length);
// console.log("So lop truong trong lop : " + groups);
// console.log("So nhom trong lop : " + groups);

//-----Bai 4

// let countStudentObj = Object.keys(objStudents).length;
// console.log(`So thanh vien trong lop la ${countStudentObj}`);

//-----Bai 5

//  listStudents.shift();
//  console.log(listStudents);

//-----Bai 6

//  listStudents.splice(6,1);
//  console.log(listStudents);

//-----Bai 7

// for (let i = 0; i < listStudents.length; i++) {
//   if (listStudents[i].id === 9) {
//     console.log(`Thanh vien stt 9 la ${listStudents[i].name}`);
//   }
// }

// ---- Bai 8

// for(let i = 0 ; i< listStudents.length ; i++) {
//   if (listStudents[i].groupNumber === 2 && listStudents[i].groupgroupPosition) {
//     console.log(`Nhom truong nhom 2 la : ${listStudents[i].id}`);
//   }
// }

// ---- Bai 9

//  console.log(listStudents.sort((a, b) => a.name.localeCompare(b.name)));

// ----- Bai 10

// let listName = [];
// listStudents.map((item) => {
//   items = item.name.split(" ").slice(-1);
//   listName.push(items.join(" "));
// });
// console.log("Danh sách tên học viên trong lớp: ");
// console.log(listName);

/// ------- Bai 11

// console.log(listName.sort());

/// ----- Bai 12

// function unName(arr) {
//   return Array.from(new Set(arr))
// }
//  console.log(unName(listName));

//----- Bai 13

/////////////////////////////
// fiveStudents = listStudents.slice(0, 5);
// console.log(fiveStudents);

// ----Bai 14
// console.log(fiveStudents.concat(listStudents.slice(5, 10)));

// // ----Bai 14
// console.log(listStudents.slice(5, 10).concat(fiveStudents)); 

//----- Bai 15;
// let listNames = [];
// fiveStudents.map((item) => {
//   items = item.name.split(" ").slice(-1);
//   listNames.push(items.join(" "));
// });
// console.log(listNames.sort());

// ----Bai 16

// var newArr = Object.values(objStudents).filter((x) => x.id % 3 == 0);
// console.log(newArr);

// ----Bai 17
// var count = 0;
// for (let i = 0; i < fiveStudents.length; i++) {
//   if (fiveStudents[i].groupPosition) {
//     count++;
//   }
// }
// if (count > 0) {
//   console.log("Trong 5 bạn co ban lam nhom truong");
// }
// else {
//   console.log("Trong 5 bạn khong co ban nao lam nhom truong");
// }

// ----Bai 18
// var countLeader = 0;
// for (let i = 0; i < fiveStudents.length; i++) {
//   if (fiveStudents[i].groupPosition) {
//     countLeader++;
//   }
// }
// if (countLeader == 5) {
//   console.log("Ca 5 ban deu la nhom truong !");
// } else {
//   console.log("Co ban khong lam nhom truong !");
// }

// ------- Bai 19
// console.log(listStudents.map((student)=> {
//   return student.name+"_"+student.id+"_"+student.groupNumber;
// }));
// ------- Bai 20

// console.log(listStudents.reverse());


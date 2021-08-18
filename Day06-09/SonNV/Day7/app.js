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
console.log("So hoc vien trong lop : " + listStudents.length);
console.log(
  "So lop truong trong lop : " +
    listStudents.filter((x) => x.groupPosition == true).length
);
console.log(
  "So nhom trong lop : " +
    listStudents.filter((x) => x.groupPosition == true).length
);

//-----Bai 4
console.log(`So thanh vien trong lop la ${Object.keys(objStudents).length}`);
console.log(
  `So nhom truong la : ${
    Object.values(objStudents).filter((x) => x.groupPosition == true).length
  }`
);
console.log(`Si so thanh vien trong lop la ${Object.keys(objStudents).length}`);

//-----Bai 5
const resetList = [...listStudents];
console.log(resetList.shift());

//-----Bai 6
const resetList1 = [...listStudents];
console.log(resetList1.splice(6, 1));

//-----Bai 7
console.log(listStudents.filter((x) => x.id == 9)[0].name);
console.log(listStudents);


// ---- Bai 8
console.log(
  listStudents.filter((x) => x.groupNumber == 2 && x.groupPosition === true)[0]
    .id
);
// ---- Bai 9
const resetList2 = [...listStudents];
console.log(resetList2.sort((a, b) => a.name.localeCompare(b.name)));

// ----- Bai 10

let listName = [];
listStudents.map((item) => {
  let items = item.name.split(" ").slice(-1);
  listName.push(items.join(" "));
});
console.log("Danh sách tên học viên trong lớp: ");
console.log(listName);


/// ------- Bai 11
const resetListName = [...listName]
console.log(resetListName.sort((a, b) => a.localeCompare(b)));

/// ----- Bai 12

  console.log(...new Set(listName))

//----- Bai 13
const resetListName1 = [...listName]
const countNames = resetListName1
  .map((o) => ({
    name: o,
    count: resetListName1.filter((e) => e == o).length,
  }))
  .sort((a, b) => b.count - a.count);
const maxCount = countNames[0].count;
const nameMaxCount = countNames
  .filter((o) => o.count == maxCount)
  .map((o) => o.name);

const result = new Set(nameMaxCount);
console.log(result);

// List 5 Student
const fiveStudents= listStudents.slice(0, 5);

// ----Bai 14
console.log(fiveStudents.concat(listStudents.slice(5, 10)));

// // ----Bai 14

console.log(listStudents.slice(5, 10).concat(fiveStudents));

//----- Bai 15;
let listNames = [];
fiveStudents.map((item) => {
  items = item.name.split(" ").slice(-1);
  listNames.push(items.join(" "));
});
console.log(listNames.sort());

// ----Bai 16

var newArr = Object.values(objStudents).filter((x) => x.id % 3 == 0);
console.log(newArr);

// ----Bai 17

console.log(listStudents.slice(0, 5).some((student) => student.groupPosition == true));
// ----Bai 18
console.log(listStudents.slice(0, 5).every((student) => student.groupPosition == true ));

// ------- Bai 19
console.log(listStudents.map((student)=> {
  return student.name+"_"+student.id+"_"+student.groupNumber;
}));
// ------- Bai 20

console.log(listStudents.reverse());

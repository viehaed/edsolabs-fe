//---------------------------------- BAI 1--------------------------------
var listStudent = [{
    id: 1,
    name: "Nguyễn Văn Sơn",
    teamNumber: 1,
    position: "member"
},
{
    id: 2,
    name: "Nguyễn Hữu Ánh",
    teamNumber: 1,
    position: "member"
},
{
    id: 3,
    name: "Trần Mạnh Quân",
    teamNumber: 4,
    position: "leader"
},
{
    id: 4,
    name: "Hà Quốc Tuấn",
    teamNumber: 3,
    position: "leader"
},
{
    id: 5,
    name: "Hoàng Ngọc Thành",
    teamNumber: 1,
    position: "member"
},
{
    id: 6,
    name: "Vũ Thị Thu Hà",
    teamNumber: 2,
    position: "member"
},
{
    id: 7,
    name: "Phan Văn Trung",
    teamNumber: 2,
    position: "member"
},
{
    id: 8,
    name: "Nguyên Cao Hoàng",
    teamNumber: 2,
    position: "member"
},
{
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    teamNumber: 5,
    position: "leader"
},
{
    id: 10,
    name: "Lê Việt Dũng",
    teamNumber: 1,
    position: "leader"
},
{
    id: 11,
    name: "Đỗ Chí Công",
    teamNumber: 2,
    position: "member"
},
{
    id: 12,
    name: "Trần Công Tâm",
    teamNumber: 3,
    position: "member"
},
{
    id: 13,
    name: "Trương Thanh Tùng",
    teamNumber: 3,
    position: "member"
},
{
    id: 14,
    name: "Tạ Đưc Chiến",
    teamNumber: 3,
    position: "member"
},
{
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    teamNumber: 3,
    position: "member"
},
{
    id: 16,
    name: "Ngô Chúng Á Âu",
    teamNumber: 4,
    position: "member"
},
{
    id: 17,
    name: "Trần Thị Khánh Linh",
    teamNumber: 2,
    position: "leader"
},
{
    id: 18,
    name: "Phan Tiến Thành",
    teamNumber: 4,
    position: "member"
},
{
    id: 19,
    name: "Đỗ Văn Huy",
    teamNumber: 4,
    position: "member"
},
{
    id: 20,
    name: "Nguyễn Trung Đức",
    teamNumber: 5,
    position: "member"
},
{
    id: 21,
    name: "Nguyễn Trung Nam",
    teamNumber: 3,
    position: "member"
},
{
    id: 22,
    name: "Trần Quốc Toàn",
    teamNumber: 5,
    position: "member"
}
]

var danhsach = Object.assign({}, listStudent);
console.log(danhsach);
//--------------------------------- BAI 2--------------------------------

var objectStudent = {
student1: {
    id: 1,
    name: "Nguyễn Văn Sơn",
    teamNumber: 1,
    position: "member"
},
student2: {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    teamNumber: 1,
    position: "member"
},
student3: {
    id: 3,
    name: "Trần Mạnh Quân",
    teamNumber: 4,
    position: "leader"
},
student4: {
    id: 4,
    name: "Hà Quốc Tuấn",
    teamNumber: 3,
    position: "leader"
},
student5: {
    id: 5,
    name: "Hoàng Ngọc Thành",
    teamNumber: 1,
    position: "member"
},
student6: {
    id: 6,
    name: "Vũ Thị Thu Hà",
    teamNumber: 2,
    position: "member"
},
student7: {
    id: 7,
    name: "Phan Văn Trung",
    teamNumber: 2,
    position: "member"
},
student8: {
    id: 8,
    name: "Nguyên Cao Hoàng",
    teamNumber: 2,
    position: "member"
},
student9: {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    teamNumber: 5,
    position: "leader"
},
student10: {
    id: 10,
    name: "Lê Việt Dũng",
    teamNumber: 1,
    position: "leader"
},
student11: {
    id: 11,
    name: "Đỗ Chí Công",
    teamNumber: 2,
    position: "member"
},
student12: {
    id: 12,
    name: "Trần Công Tâm",
    teamNumber: 3,
    position: "member"
},
student13: {
    id: 13,
    name: "Trương Thanh Tùng",
    teamNumber: 3,
    position: "member"
},
student14: {
    id: 14,
    name: "Tạ Đưc Chiến",
    teamNumber: 3,
    position: "member"
},
student15: {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    teamNumber: 3,
    position: "member"
},
student16: {
    id: 16,
    name: "Ngô Chúng Á Âu",
    teamNumber: 4,
    position: "member"
},
student17: {
    id: 17,
    name: "Trần Thị Khánh Linh",
    teamNumber: 2,
    position: "leader"
},
student18: {
    id: 18,
    name: "Phan Tiến Thành",
    teamNumber: 4,
    position: "member"
},
student19: {
    id: 19,
    name: "Đỗ Văn Huy",
    teamNumber: 4,
    position: "member"
},
student20: {
    id: 20,
    name: "Nguyễn Trung Đức",
    teamNumber: 5,
    position: "member"
},
student21: {
    id: 21,
    name: "Nguyễn Trung Nam",
    teamNumber: 3,
    position: "member"
},
student22: {
    id: 22,
    name: "Trần Quốc Toàn",
    teamNumber: 5,
    position: "member"
}
}

//--------------------------------- BAI 3-----------------------------------
console.log(listStudent.length);
let count = listStudent.filter(x => x.position === "leader").length;
console.log(`Số Lớp trưởng trong lớp là ${count}`);
console.log(`Số nhóm trong lớp là ${count}`);


// ----------------------------------BAI 4--------------------------------
console.log(`Số lượng học viên là ${Object.keys(objectStudent).length}`);
const monitorObjTotal = Object.values(objectStudent).filter((person) => person.position === "leader").length;
console.log(`Số lớp trưởng trong lớp là ${monitorObjTotal}`);
console.log(`Si số lớp là ${Object.keys(objectStudent).length}`);

// ---------------------------------BÀI 5-------------------------------------
let copyList = [...listStudent]
copyList.shift()
console.log(copyList);

//----------------------------------BÀI 6--------------------------------
let copyListB6 = [...listStudent]
console.log(copyListB6.splice(6, 1));;
console.log(copyListB6);

// ---------------------------------BÀI 7-----------------------------------
let getElement = listStudent.filter(el => el.id === 9)
console.log(getElement);
console.log(`Hoc viên có stt 9 là ${getElement[0].name}`);

//--------------------------------- BÀI 8 --------------------------------
let findLeader2 = listStudent.find(item => item.teamNumber === 2 && item.position === "leader");
console.log(`Stt của nhóm trưởng nhóm 2 là ${findLeader2.id}`);


// ---- Bai 9

console.log(listStudent.sort((a, b) => a.name.localeCompare(b.name)));

// ----- Bai 10

let listName = [];
listStudent.map((item) => {
items = item.name.split(" ").slice(-1);
listName.push(items.join(" "));
});
console.log("Danh sách tên học viên trong lớp: ");
console.log(listName);

//------- Bai 11

console.log(listName.sort((a, b) => a.localeCompare(b)));

//  ----- Bai 12

console.log(...new Set(listName));


//----- Bai 13
const countNames = listName
.map(o => ({
    name: o,
    count: listName.filter((e) => e == o).length,
}))
.sort((a, b) => b.count - a.count);
// Lay ra tan so xuat hien lon nhat
const maxCount = countNames[0].count;
// Lay ra danh sach cac ten co tan so xuat hien lon nhat, luu y trong 1 lop co the co nhieu ten co the lon nhat nen day phai la 1 mang.
const nameMaxCount = countNames
.filter((o) => o.count == maxCount)
.map((o) => o.name);
// Loc cac ten trung nhau
const result = new Set(nameMaxCount);

console.log(result);
console.log(countNames);


// ----Bai 14
let fiveStudents = listStudent.slice(0, 5);
console.log(fiveStudents);
console.log(fiveStudents.concat(listStudent.slice(5, 10)));

//----Bai 14
console.log(listStudent.slice(5, 10).concat(fiveStudents));

//----- Bai 15;
let listNames = [];
fiveStudents.map((item) => {
items = item.name.split(" ").slice(-1);
listNames.push(items.join(" "));
});
console.log(listNames.sort());

// ----Bai 16

var newArr = Object.values(objectStudent).filter((x) => x.id % 3 == 0);
console.log(newArr);

// ----Bai 17

console.log(listStudent.slice(0, 5).some((student) => student.position === "leader"));
// ----Bai 18
console.log(listStudent.slice(0, 5).every((student) => student.position === "leader"));

// ------- Bai 19

console.log(listStudent.map((student) => {
return student.name + "__" + student.id + "__" + student.teamNumber;
}));
// ------- Bai 20

console.log(listStudent.reverse());
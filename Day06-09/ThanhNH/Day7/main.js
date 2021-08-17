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
// let countStudent = listStudent.length;
// console.log(`Số học viên trong lớp là ${countStudent}`);
// let countLeader = [];
// for (let i = 0; i < listStudent.length; i++) {
//     if (listStudent[i].position === "leader") {
//         countLeader.push(listStudent[i])
//     }
// }
// console.log(`Số Lớp trưởng trong lớp là ${countLeader.length}`);
// let countTeam = [];
// for (let i = 0; i < listStudent.length; i++) {
//     countTeam.push(listStudent[i].teamNumber);
// }
//  console.log(countTeam);
// let abc = new Set(countTeam);
// let newAbc = Array.from(abc)
// console.log(`Số nhóm trong lớp là ${newAbc.length}`);

// ----------------------------------BAI 4--------------------------------
// let countStudentObj = Object.keys(objectStudent).length;
// console.log(`Sĩ số lớp : ${countStudentObj}`);
// console.log(`Số thành viên trong lớp là ${countStudentObj}`);
// let countLeaderObj = [];
// for (let i in objectStudent) {
//     if (objectStudent[i].position === "leader") {
//         countLeaderObj.push(objectStudent[i])
//     }
// }
// console.log(`Số trưởng nhóm trong lớp là ${countLeaderObj.length}`);

// ---------------------------------BÀI 5-------------------------------------
// listStudent.shift()
// console.log(listStudent);

//----------------------------------BÀI 6--------------------------------
// console.log(listStudent.splice(6, 1));;
// console.log(listStudent);

// ---------------------------------BÀI 7-----------------------------------
// for (let i = 0; i < listStudent.length; i++) {
//     if (listStudent[i].id === 9) {
//         console.log(` Thành Viên stt 9 là ${listStudent[i].name}`);
//     }
// }

//--------------------------------- BÀI 8 --------------------------------
// for (let i = 0; i < listStudent.length; i++) {
//     if(listStudent[i].teamNumber === 2 && listStudent[i].position === "leader") {
//         console.log(`STT của nhóm trưởng nhóm 2 là : ${listStudent[i].id}`);
//     }
// }

//--------------------------------- BÀI 9--------------------------------
// let arrSortNameListStrudent = [];
// arrSortNameListStrudent = listStudent.sort((a, b) => a.name.localeCompare(b.name));
// console.log(arrSortNameListStrudent);



//-------------------------------- BÀI 10-------------------------------
// let stName = [];
// for (let i = 0; i < listStudent.length; i++) {
//     stName.push(listStudent[i].name.split(" "))
// }
// let newName = [];
// for (let i = 0; i < stName.length; i++) {
//     newName.push(stName[i][stName[i].length - 1])
// }






//----------------------------------BÀI 11-----------------------------------------
// let stName = [];
// for (let i = 0; i < listStudent.length; i++) {
//     stName.push(listStudent[i].name.split(" "))
// }
// let newName = [];
// for (let i = 0; i < stName.length; i++) {
//     newName.push(stName[i][stName[i].length - 1])
// }
// console.log(newName.sort((a,b)=> a.localeCompare(b)));

//-------------------------------BÀI 12--------------------------------------------
//cách 1 là chỉ xóa đi tên trùng và vẫn giữ 1 tên 
// let newArr = [];
// for (let i = 0; i < newName.length; i++) {

//     newArr.push(newName[i])
// }
// let arrName = [...new Set(newArr)];
// console.log(arrName);

//cách 2 nếu như không lấy ra tên lặp 
// let output = [];

// for (let i = 0; i < newName.length; i++) {
//     let flag = true;
//     for (let j = 0; j < newName.length; j++) {
//         if (newName[i] === newName[j] && i !== j) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         output = [...output, newName[i]];
//     }
// }
// console.log(output);

//---------------------BÀI 13 ---------------------------

//Trường hợp 1
// const output = [];

// let max = 0;

// for (let i = 0; i < newName.length; i++) {
//     let _max = 0;
//     for (let j = 0; j < newName.length; j++) {
//         if (newName[i] === newName[j]) {
//             _max++;
//         }
//     }
//     if (max < _max) {
//         max = _max;
//     }
// }

// for (let i = 0; i < newName.length; i++) {
//     let _max = 0;
//     for (let j = 0; j < newName.length; j++) {
//         if (newName[i] === newName[j]) {
//             _max++;
//         }
//     }
//     if (max === _max && !output.includes(newName[i])) {
//         output.push(newName[i]);
//     }
// }

// console.log(output);


//Trường hợp 2
// let abc = []
// for (let i = 0; i < newName.length; i++) {
//     for (let j = 0; j < newName.length; j++) {
//         if (newName[i] === newName[j] && i != j) {
//             abc.push(newName[j]);
//             break;
//         }
//     }
// }
// let countName = [];
// let setArr = abc.forEach((value, index) => {
//     console.log(index, value);
// })
// let hihi = abc.map((item) => {
//     console.log(item);
// })
// console.log([...new Set(abc)]);

//-----------------------BÀI 14-------------------------------------

// let list5NameFirst = listStudent.slice(0, 5);
// console.log(list5NameFirst);
// let list5NameLast = listStudent.slice(listStudent.length - 5);
// console.log(list5NameLast);
// let fullList = list5NameFirst.concat(list5NameLast);
// console.log(fullList);


//------------------------BÀI 15------------------------------------
// let list5 = [];
// let listName = [];
// for (let i = 0; i < 5; i++) {
//     list5.push(listStudent[i].name.split(" "));
// }
// for (let i = 0; i < list5.length; i++) {
//     listName.push(list5[i][list5[i].length - 1]);
// }
// console.log(list5);
// console.log(listName.sort((a, b) => a.localeCompare(b)));


//----------------------------------BÀI 16-------------------------------
// for (let i = 0; i < listStudent.length; i++) {
//     if (listStudent[i].id % 3 == 0) {
//         console.log(listStudent[i])
//     }
// }

//---------------------------------  BÀI 17----------------------------------
// let checkLeader = 0;
// for (let i = 0; i < 5; i++) {
//     if (listStudent[i].position == "leader") {
//         checkLeader++;
//     }
// }
// if (checkLeader > 0) {
//     console.log("5 bạn đầu tiên có bạn là trưởng nhóm")
// } else {
//     console.log("5 bạn đầu tiên không bạn nào làm trưởng nhóm")
// }


//-----------------------------  BÀI 18-------------------------------------
// let checkLeader = 0;
// for (let i = 0; i < 5; i++) {
//     if (listStudent[i].position == "member") {
//         checkLeader++;
//     }
// }
// if (checkLeader > 0) {
//     console.log("trong nhóm có " + checkLeader + " là không thể làm leader!")
// }


//---------------------------------BÀI 19--------------------------------------------
// let stName = [];
// for (let i = 0; i < listStudent.length; i++) {
//     stName.push(listStudent[i].name.split(" "))
// }
// let newName = [];
// for (let i = 0; i < stName.length; i++) {
//     newName.push(stName[i][stName[i].length - 1])
// }
// for (let i = 0; i < listStudent.length; i++) {
//     listStudent[i].ma = newName[i] + "_" + listStudent[i].id + "_" + listStudent[i].teamNumber
// }
// console.log(listStudent)


//----------------------------------BÀI 20-------------------------------------
// console.log(listStudent.reverse())
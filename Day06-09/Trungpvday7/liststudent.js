
/// Bài 1 
 var listStudent = [
     {
         stt : 1,
         name:"Nguyễn văn Sơn",
         group: 1,
         level: null
     },
     {
        stt : 2,
        name:  "Nguyễn Hữu Ánh",
        group: 1,
        level: null
     },
     {
        stt : 3,
        name: "Trần mạnh Quân",
        group:4,
        level: "Nhóm Trưởng",
     },
     {
        stt : 4,
        name: "Hà Quốc Tuấn",
        group : 3,
        level: "Nhóm Trưởng",
     },
     {
        stt : 5,
        name:"Hoàng Ngọc Thành",
        group : 1,
        level: null
     },
     {
        stt : 6,
        name:"Vũ Thị Thu Hà",
        group : 2,
        level: null
     },
     {
        stt : 7,
        name:"Phan Văn Trung",
        group : 2,
        level: null
     },
     {
        stt : 8,
        name: "Nguyễn Cao Hoàng",
        group : 2,
        level: null
     },
     {
        stt : 9,
        name: "Phùng Đắc Nhật Minh",
        group : 5,
        level: "Nhóm Trưởng"
     },
     {
        stt : 10,
        name: "Lê Việt Dũng",
        group : 1,
        level: "Nhóm Trưởng"
     },
     {
        stt : 11,
        name: "Đỗ Chí Công",
        group : 2,
        level: null
     },
     {
        stt : 12,
        name:  "Trần Công Tâm",
        group : 3,
        level: null
     },
     {
        stt : 13,
        name: "Trường Thanh Tùng",
        group : 3,
        level: null
     },
     {
        stt : 14,
        name: "Tạ Đức Chiến",
        group : 3,
        level: null
     },
     {
        stt : 15,
        name: "Nguyễn Trọng Vĩnh",
        group : 3,
        level: null
     },
     {
        stt : 16,
        name: "Ngô Chung Á Âu",
        group : 4,
        level: null
     },
     {
        stt : 17,
        name: "Trần Thị Khánh Linh",
        group : 2,
        level: "Nhóm Trưởng"
     },
     {
        stt : 18,
        name: "Phan Tiến Thành",
        group : 4,
        level: null
     },
     {
        stt : 19,
        name: "Đỗ Văn Huy",
        group : 4,
        level: null
     },
     {
        stt : 20,
        name: "Nguyễn Trung Đức",
        group : 5,
        level: null
     },
     {
        stt : 21,
        name: "Nguyễn Trung Nam",
        group : 5,
        level: null
     },
     {
        stt : 22,
        name: "Trần Quốc Toàn",
        group : 5,
        level: null
     },
 ]
// console.log(listStudent)

// bài 2
var list =  Object.assign({},listStudent);
// console.log(list)

// bài 3
listStudent.length; // so hoc vien
let todo = listStudent.filter(function(todo,index) {
    return todo.level === "Nhóm Trưởng"; // so truong nhom
});
const todolist = new Set(listStudent.map((listStudent) => listStudent.group)).size // so nhom

//bai4
let objectlist = Object.values(list).length;// so hoc vien
let todogr = Object.values(list).filter(function(todogr,index) {
    return todogr.level === "Nhóm Trưởng"; // so truong nhom
});

// bài 5 
let reset1 = listStudent.filter(function(reset1, index){
    return reset1.stt != 1
});
console.log(reset1)

// bài 6
listStudent.splice(6,1)
// console.log(listStudent)

// //bai7
let timso9 = listStudent.find(function(timso9,index) {
    return timso9.stt === 9
})

// // bai8
let group2 = listStudent.find(function(group2,index) {
    return group2.level === "Nhóm Trưởng" && group2.group === 2;
})
// //bai 9
var sttUp = listStudent.sort(function(a,b){
    return a.name.localeCompare(b.name);
  });

// // bai 10 
const listName = listStudent.map(function({ name }) {
    const listName = name.split(" ");
    return listName[listName.length - 1];
  });
// // bai 11 
listName.sort(function(a, b) {
    return a.localeCompare(b)
});

// // bai 12 
let loopName = [...new Set(listName)];
// bai13
const nameTodo = listStudent.map((o) => o.name.split(" ")[o.name.split(" ").length - 1]
 );
 const countNames = nameTodo.map((o) => ({name: o,count: nameTodo.filter((e) => e == o).length,
   })).sort((a, b) => b.count - a.count);
 const maxCount = countNames[0].count;
 const nameMaxCount = countNames.filter((o) => o.count == maxCount).map((o) => o.name);
 const abC = new Set(nameMaxCount);
 
// //bai 14 
const memberfive = listStudent.slice(0, 5);
for (let i = 0; i < 5; i++) {
    memberfive.push(listStudent[memberfive.length + i]);
}

// //bai 14
const membersix = listStudent.slice(0, 5);
for (let i = 0; i < 5; i++) {
    membersix.unshift(listStudent[membersix.length + i]);
}

// bai15
let newList = listStudent.slice(0, 5)
newList.sort(function (a, b) {
   let nameOne = a.name.split(" ").pop()
   let nameTow = b.name.split(" ").pop()
   return nameOne.localeCompare(nameTow)
})
// console.log(newList)
// // bai16 
let baGa = Object.values(list).filter(function(baGa, i){
    return baGa.stt % 3 === 0;
})
// bai 17
const studentEd = listStudent.slice(0, 5);
const result = studentEd.some((o) => o.level == "Nhóm Trưởng");

//bai 18 
let fiveUpone = listStudent.findIndex((x) => x.level === false) === -1 ? false : true;
console.log(fiveUpone);
// bai 19 
let upString = listStudent.map(({ stt, name, group }) => {
    return `${name.split(" ").pop()} - ${stt} - ${group}`;
  });

// // bai 20 
listStudent.reverse()

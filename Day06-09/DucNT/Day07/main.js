console.log("--Bài 1--");
var arrStudent = [{
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

arrStudent.forEach(function(arr, index) {
    console.log(arr, index);
});
// console.log(typeof arrStudent)
console.log("-----------------------");
// lặp qua từng phần tử của mảng
// every kiểm tra điều kiện gì đó của 1 phần tử trả ra true or false
// some kiểm tra chỉ 1 điều kiện thỏa mãn sẽ trả ra true or false
// find tìm kiếm 1 phần tử thỏa mãn điều kiện cho trc chỉ trả về 1 đối tượng
// filter tìm kiếm hết và trả về các kết quả thỏa mãn
// map giúp copy 1 mảng cũ => thêm các giá trị bên trong để ra 1 mảng mới hoặc chỉ muốn copy ra 1 mảng khác chứa các phần tử cũ
// var isEvery = arrStudent.some(function(arr1, index) {
//     return arr1.groupNumber >= 0;
// });
// document.write("Every :", isEvery);
// var isEvery = arrStudent.find(function(arr1, index) {
//     return arr1.groupNumber === "3";
// });
// var isFilter = arrStudent.filter(function(arr1) {
//     return arr1.position === "Trưởng nhóm";
// });
// console.log(isFilter);
// console.log("====FIND-========")
// console.log(isEvery);
console.log("--Bài 2--");
const objStudent = Object.assign({}, arrStudent);
console.log(objStudent);
// console.log(typeof objStudent)
console.log("--Bài 3")
console.log("Số học viên trong lớp là :", arrStudent.length);
var isFilter = arrStudent.filter(function(arr1) {
    return arr1.position === "Trưởng nhóm";
});
console.log("Số lớp trưởng trong lớp là :",
    isFilter.length);
var arrGroup = arrStudent.map(function(data) {
    return data.groupNumber;
});
var totalGroup = Array.from(new Set(arrGroup)).length;

console.log("Số lượng nhóm là :", totalGroup);
console.log("--Bài 4--");
console.log("Số lượng học viên :", Object.values(arrStudent).length);
console.log("Sĩ số lớp :", Object.values(arrStudent).length);
var totalPosition1 = 0;
for (let key in arrStudent) {
    if (arrStudent[key].position === "Trưởng nhóm") {
        totalPosition1++
    }
}
console.log("Số nhóm trưởng là :", totalPosition1);
console.log("--Bài 5 --");
var isXoa = arrStudent.shift();
console.log("Xóa bạn đầu tiên ra khỏi lớp :", isXoa);
console.log(arrStudent);

// let arr1 = [...arrStudent];
// arr1.shift();
// console.log(arr1.shift());
console.log("--Bài 6--");
let arr2 = [...arrStudent];
// Xóa bỏ giá trị tại index thứ 6 và thê 1 phần tử
console.log(arr2.splice(6, 1));
console.log("--Bài 7 --");
var isEvery = arrStudent.find(function(arr1, index) {
    return arr1.id === "09";
});
console.log(isEvery);
console.log("--Bài 8 --");
var isEvery1 = arrStudent.find(function(arr1, index) {
    return arr1.position == "Trưởng nhóm" && arr1.groupNumber == 2
});
console.log("Vị trí nhóm trưởng :", isEvery1.id);
console.log("--Bài 9--")
console.log("--Bài 10--");
// copy Mảng
let arrStd = arrStudent.slice();
let dataName;
arrStd.map((data) => {
    dataName = data.name.split(" ");
    data.name = dataName[dataName.length - 1];
});
console.log(arrStd);
console.log("--Bài 11--");
console.log("--Bài 12--");
let arrName = arrStudent.map((data) => data.name);
let arr3 = Array.from(new Set(arrName));
console.log(arr3);
console.log("--Bài 13--");
let arrBt13 = arrName.filter(function(course, index) {
    return arrName.indexOf(course) !== index
});
console.log(arrBt13)
console.log("--Bài 14--");
let arrStd1 = arrStudent.slice(0, 5);
for (let i = 5; i < 10; i++) {
    arrStd1.push(arrStudent[i]);
}
console.log(arrStd1);
console.log("--Bài 15--");
let arrStd2 = arrStudent.slice(0, 5);
for (let i = 10; i < 15; i++) {
    arrStd2.unshift(arrStudent[i]);
}
console.log(arrStd2);
console.log("--Bài 16--");
var isFilter4 = arrStudent.filter(function(arr1) {
    return arr1.id % 3 == 0;
});
console.log(isFilter4)
console.log("--Bài 17--");
let isCheck = arrStd2.filter(function(item) {
    return item.position == "Trưởng nhóm";

});
console.log("Số trưởng nhóm có trong 5 bạn đầu là ",
    isCheck);
console.log("--Bài 18--");
let check = arrStudent.splice(10, 15);
let isCheck2 = check.filter(function(item) {
    return item.position == "Trưởng nhóm";

});
console.log("Số trưởng nhóm là ",
    isCheck2.length, isCheck2);
console.log("--Bài 19--");
let varCheck = [...arrStudent];
varCheck.map(function(item) {
    return item.arrStudent = item.name + "-" + item.id + "-" + item.groupNumber;
});
console.log(varCheck);
console.log("--Bài 20--");
var isBai20 = arrStudent.reverse();
console.log("Đảo ngược vị trí :", isBai20);
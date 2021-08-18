"use strict";

// Bài 1
console.log("Bài 1")
var listHocVien = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        teamNumber: 1,
        position: "member",
      },
      {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        teamNumber: 1,
        position: "member",
      },
      {
        id: 3,
        name: "Trần Mạnh Quân",
        teamNumber: 4,
        position: "leader",
      },
      {
        id: 4,
        name: "Hà Quốc Tuấn",
        teamNumber: 3,
        position: "leader",
      },
      {
        id: 5,
        name: "Hoàng Ngọc Thành",
        teamNumber: 1,
        position: "member",
      },
      {
        id: 6,
        name: "Vũ Thị Thu Hà",
        teamNumber: 2,
        position: "member",
      },
      {
        id: 7,
        name: "Phan Văn Trung",
        teamNumber: 2,
        position: "member",
      },
      {
        id: 8,
        name: "Nguyên Cao Hoàng",
        teamNumber: 2,
        position: "member",
      },
      {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        teamNumber: 5,
        position: "leader",
      },
      {
        id: 10,
        name: "Lê Việt Dũng",
        teamNumber: 1,
        position: "leader",
      },
      {
        id: 11,
        name: "Đỗ Chí Công",
        teamNumber: 2,
        position: "member",
      },
      {
        id: 12,
        name: "Trần Công Tâm",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 13,
        name: "Trương Thanh Tùng",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 14,
        name: "Tạ Đưc Chiến",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 16,
        name: "Ngô Chúng Á Âu",
        teamNumber: 4,
        position: "member",
      },
      {
        id: 17,
        name: "Trần Thị Khánh Linh",
        teamNumber: 2,
        position: "leader",
      },
      {
        id: 18,
        name: "Phan Tiến Thành",
        teamNumber: 4,
        position: "member",
      },
      {
        id: 19,
        name: "Đỗ Văn Huy",
        teamNumber: 4,
        position: "member",
      },
      {
        id: 20,
        name: "Nguyễn Trung Đức",
        teamNumber: 5,
        position: "member",
      },
      {
        id: 21,
        name: "Nguyễn Trung Nam",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 22,
        name: "Trần Quốc Toàn",
        teamNumber: 5,
        position: "member",
      },
]
console.log("Danh sách mảng học sinh: ")
console.log(listHocVien)

// Bài 2
console.log("--------------------------------------------")
console.log("Bài 2")
console.log("Danh sách đối tượng học sinh: ")
var hocVien  = {
    hv1: {"id": 1, "name": "Nguyễn Văn Sơn","teamNumber": 1,"position": "member"},
    hv2: {"id": 2, "name": "Nguyễn Hữu Ánh", "teamNumber":1,"position": "member"},
    hv3: {"id": 3, "name": "Trần Mạnh Quân", "teamNumber":4,"position": "leader"},
    hv4: {"id": 4, "name": "Hà Quốc Tuấn", "teamNumber":3,"position": "leader"},
    hv5: {"id": 5, "name": "Hoàng Ngọc Thành", "teamNumber":1,"position": "member"},
    hv6: {"id": 6, "name": "Vũ Thị Thu Hà", "teamNumber":2,"position":"member"},
    hv7: {"id": 7, "name": "Phan Văn Trung", "teamNumber":2,"position": "member"},
    hv8: {"id": 8, "name": "Nguyễn Cao Hoàng","teamNumber": 2,"position": "member"},
    hv9: {"id": 9, "name": "Phùng Đặng Nhật Minh","teamNumber": 5,"position": "leader"},
    hv10: {"id": 10, "name": "Lê Việt Dũng","teamNumber": 1,"position": "leader"},
    hv11: {"id": 11, "name": "Đỗ Chí Công","teamNumber": 2,"position": "member"},
    hv12: {"id": 12, "name": "Trần Công Tâm","teamNumber": 3,"position": "member"},
    hv13: {"id": 13, "name": "Trương Thanh Tùng","teamNumber": 3,"position": "member"},
    hv14: {"id": 14, "name": "Tạ Đức Chiến","teamNumber": 3,"position": "member"},
    hv15: {"id": 15, "name": "Nguyễn Trọng Vĩnh","teamNumber": 3,"position": "member"},
    hv16: {"id": 16, "name": "Ngô Chung Á Âu","teamNumber": 4,"position": "member"},
    hv17: {"id": 17, "name": "Trần Thị Khánh Linh","teamNumber": 2,"position": "leader"},
    hv18: {"id": 18, "name": "Phan Tiến Thành","teamNumber": 4,"position": "member"},
    hv19: {"id": 19, "name": "Đỗ Văn huy","teamNumber": 4,"position": "member"},
    hv20: {"id": 20, "name": "Nguyễn Trung Đức","teamNumber": 5,"position": "member"},
    hv21: {"id": 21, "name": "Nguyễn Trung Nam","teamNumber": 5,"position": "member"},
    hv22: {"id": 22, "name": "Trần Quốc Toàn","teamNumber": 5,"position": "member"},
}
console.log(hocVien)

// Bài 3
console.log("--------------------------------------------")
console.log("Bài 3")
var soHocVienTrongLop1 = listHocVien.length;
console.log("Số học viên trong lớp là: " + soHocVienTrongLop1)
var soNhom = 0;
soNhom = listHocVien.reduce(function(accumulator, currentValue){
    return (currentValue.position === "leader") ? accumulator + 1 : accumulator
}, 0)
console.log("Số nhóm là: " + soNhom);
console.log("Số nhóm trưởng là: " + soNhom);

// Bài 4
console.log("--------------------------------------------")
console.log("Bài 4")
console.log("Số học viên trong lớp là: " + Object.entries(hocVien).length)
var hvOj = Object.entries(hocVien)
var soNhom2 = 0;
soNhom2 = hvOj.reduce(function(accumulator, currentValue){
    return (currentValue[1].position == "leader") ? accumulator + 1 : accumulator
}, 0)
console.log("Số nhóm là: " + soNhom2);
console.log("Số nhóm trưởng là: " + soNhom2);

// Bài 5
console.log("--------------------------------------------")
console.log("Bài 5")
console.log("Xoá học viên đầu: ")
var listBai5 = cloneArr(listHocVien)
listBai5.shift();
console.log(listBai5)


// Bài 6
console.log("--------------------------------------------")
console.log("Bài 6")
console.log("Xoá học viên số 7:")
var listBai6 = cloneArr(listHocVien)
listBai6.splice(6,1);
console.log(listBai6)

// Bài 7
console.log("--------------------------------------------")
console.log("Bài 7")
console.log("Tên của học viên thứ 9 là: " + listHocVien[8].name)

// Bài 8
console.log("--------------------------------------------")
console.log("Bài 8")
console.log("Số thứ tự của nhóm trưởng nhóm 2: ")
console.log((listHocVien.filter((member) => (member.position === "leader" && member.teamNumber == 2)))[0].id);


// Bài 9
console.log("--------------------------------------------")
console.log("Bài 9")
console.log("Sắp xếp tăng dần của bảng chữ cái: ")
var listBai9 = cloneArr(listHocVien)
listBai9.sort((a,b) => layTuCuoi(a.name).localeCompare(layTuCuoi(b.name)))
console.log(listBai9)

// Bài 10
console.log("--------------------------------------------")
console.log("Bài 10")
console.log("Lấy mỗi tên: ")
var listBai10 = listHocVien.map((member) => layTuCuoi(member.name))
console.log(listBai10)

// Bài 11
console.log("--------------------------------------------")
console.log("Bài 11")
console.log("Sắp xếp thứ tự theo bảng chữ cái: ")
listBai10.sort((a,b) => a.localeCompare(b))
console.log(listBai10)

// Bài 12
console.log("--------------------------------------------")
console.log("Bài 12")
console.log("lấy ra tên không trùng: ")
var filterList = new Set(listBai10);
console.log(filterList)

// Bài 13
console.log("--------------------------------------------")
console.log("Bài 13")
var listBai13 = cloneArr(listBai10);
const countNames = listBai13
.map((o) => ({
    name: o, 
    count: listBai13.filter((e) => e == o).length,
  }))
.sort((a, b) => b.count - a.count);

const maxCount = countNames[0].count;

const nameMax = countNames
  .filter((x) => x.count == maxCount)
  .map((x) => x.name)

const rf = new Set(nameMax)
console.log("Cái tên trong lớp có nhiều người có nhất là: " )
console.log(rf)

// Bài 14
console.log("--------------------------------------------")
console.log("Bài 14")
console.log("Mảng sau khi bổ sung thêm 5 sinh viên nữa vào đuôi mảng là:")
var listBai14 = listHocVien.filter((x) => x.id < 6 )
console.log(listBai14)


var addHocVien5 = [
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        teamNumber: 3,
        position: "member",
      },
      {
        id: 16,
        name: "Ngô Chúng Á Âu",
        teamNumber: 4,
        position: "member",
      },
      {
        id: 17,
        name: "Trần Thị Khánh Linh",
        teamNumber: 2,
        position: "leader",
      },
      {
        id: 18,
        name: "Phan Tiến Thành",
        teamNumber: 4,
        position: "member",
      },
      {
        id: 19,
        name: "Đỗ Văn Huy",
        teamNumber: 4,
        position: "member",
      },
]
console.log(listBai14.concat(addHocVien5))
console.log("Mảng sau khi bổ sung thêm 5 sinh viên nữa vào đầu mảng là:")
console.log(addHocVien5.concat(listBai14))


// Bài 15
console.log("--------------------------------------------")
console.log("Bài 15")
console.log("Mảng sau khi tráo đổi thứ tự theo tên các học viên là: ")
const listBai15 = listHocVien.filter((x) => x.id < 6 )
var list15 = cloneArr(listBai15);
list15.sort((a,b) => layTuCuoi(a.name).localeCompare(layTuCuoi(b.name)))
console.log(list15)


// Bài 16
console.log("--------------------------------------------")
console.log("Bài 16")
console.log("Số sinh viên có STT chia hếT cho 3 là: ")
var listBai16 = hvOj.filter((x) => x[1].id % 3 == 0);
console.log(listBai16)

// Bài 17
console.log("--------------------------------------------")
console.log("Bài 17")
console.log("Kiểm tra xem trong danh sách 5 bạn học viên đã cho có phải là nhóm trưởng hay không? ")
var listBai17 = listHocVien.filter((x) => x.id < 6 )
console.log(listBai17.some((member) => member.position == "leader"))


// Bài 18
console.log("--------------------------------------------")
console.log("Bài 18")
console.log("Kiểm tra xem danh sách 5 bạn học viên đã cho có phải là nhóm trưởng hay không? ")
var listBai18 = listHocVien.filter((x) => x.id < 6 )
console.log(listBai18.every((member) => member.position == "leader"))

// Bài 19
console.log("--------------------------------------------")
console.log("Bài 19")
console.log("Tạo mã học sinh: ")
var arrMa = listHocVien.map((x) => x = noSpace(x.name) + "_" + x.id + "_" + x.teamNumber);
console.log(arrMa);

// Bài 20
console.log("--------------------------------------------")
console.log("Bài 20")
console.log("Đào ngược danh sách lớp:  ")
console.log(listHocVien.reverse())

// Hàm resetSTT
function resetSTT(list) {
    return list.map((member, id) => {member[0] = id + 1; return member}) 
}

// Clone mảng
function cloneArr(list) {
    return JSON.parse(JSON.stringify(list)); 
}

// Tách chuỗi theo kiểU lấy phần tử cuối
function layTuCuoi(str) {
    var i = str.lastIndexOf(" ");
    return str.slice(i, str.length);
}

// Bo khoảng trắng
function noSpace(str) {
    return  str.replace(/ /g,"")
}

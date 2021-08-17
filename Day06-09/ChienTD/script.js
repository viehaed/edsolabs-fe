"use strict";

// Bài 1
console.log("Bài 1")
var listHocVien = [
    // [stt, tên, nhóm, vị trí]. Trong đÓ 0 là không có chức vụ, 1 là nhóm trưởng
    [1, "Nguyễn Văn Sơn", 1, 0],
    [2, "Nguyễn Hữu Ánh", 1, 0],
    [3, "Trần Mạnh Quân", 4, 1],
    [4, "Hà Quốc Tuấn", 3, 1],
    [5, "Hoàng Ngọc Thành", 1, 0],
    [6, "Vũ Thị Thu Hà", 2, 0],
    [7, "Phan Văn Trung", 2, 0],
    [8, "Nguyễn Cao Hoàng", 2, 0],
    [9, "Phùng Đặng Nhật Minh", 5, 1],
    [10, "Lê Việt Dũng", 1, 1],
    [11, "Đỗ Chí Công", 2, 0],
    [12, "Trần Công Tâm", 3, 0],
    [13, "Trương Thanh Tùng", 3, 0],
    [14, "Tạ Đức Chiến", 3, 0],
    [15, "Nguyễn Trọng Vĩnh", 3, 0],
    [16, "Ngô Chung Á Âu", 4, 0],
    [17, "Trần Thị Khánh Linh", 2, 1],
    [18, "Phan Tiến Thành", 4, 0],
    [19, "Đỗ Văn Huy", 4, 0],
    [20, "Nguyễn Trung Đức", 5, 0],
    [21, "Nguyễn Trung Nam", 5, 0],
    [22, "Trần Quốc Toàn", 5, 0],
]
console.log("Danh sách mảng học sinh: ")
console.log(listHocVien)

// Bài 2
console.log("--------------------------------------------")
console.log("Bài 2")
console.log("Danh sách đối tượng học sinh: ")
var hocVien  = {
    hv1: {"stt": 1, "ten": "Nguyễn Văn Sơn","nhom": 1,"vitri": 0},
    hv2: {"stt": 2, "ten": "Nguyễn Hữu Ánh", "nhom":1,"vitri": 0},
    hv3: {"stt": 3, "ten": "Trần Mạnh Quân", "nhom":4,"vitri": 1},
    hv4: {"stt": 4, "ten": "Hà Quốc Tuấn", "nhom":3,"vitri": 1},
    hv5: {"stt": 5, "ten": "Hoàng Ngọc Thành", "nhom":1,"vitri": 0},
    hv6: {"stt": 6, "ten": "Vũ Thị Thu Hà", "nhom":2,"vitri":0},
    hv7: {"stt": 7, "ten": "Phan Văn Trung", "nhom":2,"vitri": 0},
    hv8: {"stt": 8, "ten": "Nguyễn Cao Hoàng","nhom": 2,"vitri": 0},
    hv9: {"stt": 9, "ten": "Phùng Đặng Nhật Minh","nhom": 5,"vitri": 1},
    hv10: {"stt": 10, "ten": "Lê Việt Dũng","nhom": 1,"vitri": 1},
    hv11: {"stt": 11, "ten": "Đỗ Chí Công","nhom": 2,"vitri": 0},
    hv12: {"stt": 12, "ten": "Trần Công Tâm","nhom": 3,"vitri": 0},
    hv13: {"stt": 13, "ten": "Trương Thanh Tùng","nhom": 3,"vitri": 0},
    hv14: {"stt": 14, "ten": "Tạ Đức Chiến","nhom": 3,"vitri": 0},
    hv15: {"stt": 15, "ten": "Nguyễn Trọng Vĩnh","nhom": 3,"vitri": 0},
    hv16: {"stt": 16, "ten": "Ngô Chung Á Âu","nhom": 4,"vitri": 0},
    hv17: {"stt": 17, "ten": "Trần Thị Khánh Linh","nhom": 2,"vitri": 1},
    hv18: {"stt": 18, "ten": "Phan Tiến Thành","nhom": 4,"vitri": 0},
    hv19: {"stt": 19, "ten": "Đỗ Văn huy","nhom": 4,"vitri": 0},
    hv20: {"stt": 20, "ten": "Nguyễn Trung Đức","nhom": 5,"vitri": 0},
    hv21: {"stt": 21, "ten": "Nguyễn Trung Nam","nhom": 5,"vitri": 0},
    hv22: {"stt": 22, "ten": "Trần Quốc Toàn","nhom": 5,"vitri": 0},
}
console.log(hocVien)

// Bài 3
console.log("--------------------------------------------")
console.log("Bài 3")
var soHocVienTrongLop1 = listHocVien.length;
console.log("Số học viên trong lớp là: " + soHocVienTrongLop1)

var soNhom = 0;;
for (var value of listHocVien) {
    if (value[3] === 1) {
        soNhom++;
    }
}
console.log("Số nhóm là: " + soNhom);
console.log("Số nhóm trưởng là: " + soNhom);

// Bài 4
console.log("--------------------------------------------")
console.log("Bài 4")
console.log("Số học viên trong lớp là: " + Object.entries(hocVien).length)
var hvOj = Object.entries(hocVien)
var soNhom2 = 0;
for (var value of hvOj) {
    if (value[1].vitri === 1) {
        soNhom2++;
    }
}
console.log("Số nhóm là: " + soNhom2);
console.log("Số nhóm trưởng là: " + soNhom2);

// Bài 5
console.log("--------------------------------------------")
console.log("Bài 5")
console.log("Xoá học viên đầu: ")
var listBai5 = cloneArr(listHocVien)
listBai5.shift();
resetSTT(listBai5)
console.log(listBai5)


// Bài 6
console.log("--------------------------------------------")
console.log("Bài 6")
console.log("Xoá học viên số 7:")
var listBai6 = cloneArr(listHocVien)
listBai6.splice(6,1);
resetSTT(listBai6)
console.log(listBai6)

// Bài 7
console.log("--------------------------------------------")
console.log("Bài 7")
console.log("Tên của học viên thứ 9 là: " + listHocVien[8][1])

// Bài 8
console.log("--------------------------------------------")
console.log("Bài 8")
for (const value of listHocVien) {
    if (value[2] === 2 && value[3] === 1){
        console.log("Số thứ tự của nhóm trưởng nhóm 2 là: " + value[0])
        break;
    }
}

// Bài 9
console.log("--------------------------------------------")
console.log("Bài 9")
console.log("Sắp xếp tăng dần của bảng chữ cái: ")
var listBai9 = cloneArr(listHocVien)
listBai9.sort((a,b) => layTuCuoi(a[1]).localeCompare(layTuCuoi(b[1])))
resetSTT(listBai9)
console.log(listBai9)

// Bài 10
console.log("--------------------------------------------")
console.log("Bài 10")
console.log("Lấy mỗi tên: ")
var listBai10 = [];
for (const val of listHocVien) {
    listBai10.push(layTuCuoi(val[1]))
}
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
var arrTrung = [];
for(let i = 1; i < listBai10.length-1; i++) {
    for (let j = i+1; j < listBai10.length;j++) {
        if (listBai10[i] === listBai10[j]) {
            arrTrung.push(listBai10[i])
        }
    }
}
var arrFilter= [];
for (const val of arrTrung) {
    arrFilter.push(listBai10.filter((member) => member !== val))
}
console.log(arrFilter)

// Bài 13
console.log("--------------------------------------------")
console.log("Bài 13")
var max = "";
var imax = 0;
for (const key in listBai10) {
    var i = 0;
    for (const key2 in listBai10) {
        if (listBai10[key] == listBai10[key2]) {
            i++;
        }
    }
    if (i > imax) {
        imax = i;
        max = listBai10[key];
    }
}
console.log("Cái tên trong lớp có nhiều người có nhất là: " + max)

// Bài 14
console.log("--------------------------------------------")
console.log("Bài 14")
console.log("Mảng sau khi bổ sung thêm 5 sinh viên nữa là:")
var listBai14 = [];
for (let i = 0; i < 5; i++) {
    listBai14.push(listHocVien[i])
}

var addHocVien5 = [
    [7, "Phan Văn Trung", 2, 0],
    [8, "Nguyễn Cao Hoàng", 2, 0],
    [9, "Phùng Đặng Nhật Minh", 5, 1],
    [10, "Lê Việt Dũng", 1, 1],
    [11, "Đỗ Chí Công", 2, 0]
]

listBai14 = addHocVien5.concat(listBai14);
console.log(listBai14)


// Bài 15
console.log("--------------------------------------------")
console.log("Bài 15")
console.log("Mảng sau khi tráo đổi thứ tự theo tên các học viên là: ")
var listBai15 = [];
for (let i = 0; i < 5; i++) {
    listBai15.push(listHocVien[i])
}

var list15 = cloneArr(listBai15);
list15.sort((a,b) => layTuCuoi(a[1]).localeCompare(layTuCuoi(b[1])))
resetSTT(list15)
console.log(list15)


// Bài 16
console.log("--------------------------------------------")
console.log("Bài 16")
console.log("Số sinh viên có STT chia hếT cho 3 là: ")
var listBai16 = [];
for (const val of hvOj) {
    if (val[1].stt % 3 == 0) {
        listBai16.push(val[1]);
    }
}
console.log(listBai16)

// Bài 17
console.log("--------------------------------------------")
console.log("Bài 17")
console.log("Kiểm tra xem trong danh sách 5 bạn học viên đã cho có phải là nhóm trưởng hay không? ")
var listBai17 = [];
for (const val of listHocVien) {
    listBai17.push(layTuCuoi(val[1]))
}
console.log(listBai17.some((member) => member[3] != 1))


// Bài 18
console.log("--------------------------------------------")
console.log("Bài 18")
console.log("Kiểm tra xem danh sách 5 bạn học viên đã cho có phải là nhóm trưởng hay không? ")
var listBai18 = [];
for (const val of listHocVien) {
    listBai18.push(layTuCuoi(val[1]))
}
console.log(listBai18.every((member) => member[3] == 1))

// Bài 19
console.log("--------------------------------------------")
console.log("Bài 19")
console.log("Tạo mã học sinh: ")
var arrMa = [];
for (const val of listHocVien) {
    var ten = noSpace(val[1]);
    var ma = ten + "_" + val[0] + "_" + val[2];
    arrMa.push(ma);
}
console.log(arrMa);

// Bài 20
console.log("--------------------------------------------")
console.log("Bài 20")
console.log("Đào ngược danh sách lớp:  ")
console.log(listHocVien.reverse())

// Hàm resetSTT
function resetSTT(list) {
    return list.map((member, index) => {member[0] = index + 1; return member}) 
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

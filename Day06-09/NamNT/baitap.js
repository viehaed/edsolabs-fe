// bài 1
var mang_hocvien = [
    [1, "Nguyễn Văn Sơn", 1, 0],
    [2, "Nguyễn Hữu Anh", 1, 0],
    [3, "Trần Mạnh Quân", 4, 1],
    [4, "Hà Quốc Tuấn", 3, 1],
    [5, "Hoàng Ngọc Thành", 1, 0],
    [6, "Vũ Thị Thu Hà", 2, 0],
    [7, "Phan Văn Trung", 2, 0],
    [8, "Nguyễn Cao Hoàng", 2, 1],
    [9, "Phùng Đắc Nhật Minh", 5, 1],
    [10, "Lê Việt Dũng", 1, 0],
    [11, "Đỗ Chí Công", 2, 0],
    [12, "Trần Công Tâm", 3, 0],
    [13, "Trương Thanh Tùng", 3, 0],
    [14, "Tạ Đức Chiễn", 3, 0],
    [15, "Nguyễn Trọng Vĩnh", 3, 0],
    [16, "Ngô Chung Á Au", 4, 0],
    [17, "Trần Thị Khánh Linh", 2, 1],
    [18, "Phan Tiến Thành", 4, 0],
    [19, "Đỗ Vănn Huy", 4, 0],
    [20, "Nguyễn Trung Đức", 5, 0],
    [21, "Nguyễn Trung Nam", 5, 0],
    [22, "Trần Quốc Toàn", 5, 0],
];

// bài 2
var class_hocvien = [{
        stt: 1,
        ten: "Nguyễn Văn Sơn",
        nhom: 1,
        vitri: 0,
    },
    {
        stt: 2,
        ten: "Nguyễn Hữu Anh",
        nhom: 1,
        vitri: 0,
    },
    {
        stt: 3,
        ten: "Trần Mạnh Quân",
        nhom: 4,
        vitri: 1,
    },
    {
        stt: 4,
        ten: "Hà Quốc Tuấn",
        nhom: 3,
        vitri: 1,
    },
    {
        stt: 5,
        ten: "Hoàng Ngọc Thành",
        nhom: 1,
        vitri: 0,
    },
    {
        stt: 6,
        ten: "Vũ Thị Thu Hà",
        nhom: 2,
        vitri: 0,
    },
    {
        stt: 7,
        ten: "Phan Văn Trung",
        nhom: 2,
        vitri: 0,
    },
    {
        stt: 8,
        ten: "Nguyễn Cao Hoàng",
        nhom: 2,
        vitri: 0,
    },
    {
        stt: 9,
        ten: "Phùng Đắc Nhật Minh",
        nhom: 5,
        vitri: 1,
    },
    {
        stt: 10,
        ten: "Lê Việt Dũng",
        nhom: 1,
        vitri: 1,
    },
    {
        stt: 11,
        ten: "Đỗ Chí Công",
        nhom: 2,
        vitri: 0,
    },
    {
        stt: 12,
        ten: "Trần Công Tâm",
        nhom: 3,
        vitri: 0,
    },
    {
        stt: 13,
        ten: "Trương Thanh Tùng",
        nhom: 3,
        vitri: 0,
    },

    {
        stt: 14,
        ten: "Tạ Đức Chiến",
        nhom: 3,
        vitri: 0,
    },
    {
        stt: 15,
        ten: "Nguyễn Trọng Vĩnh",
        nhom: 3,
        vitri: 0,
    },
    {
        stt: 16,
        ten: "Ngô Chung Á Au",
        nhom: 4,
        vitri: 0,
    },
    {
        stt: 17,
        ten: "Trần Thị Khánh Linh",
        nhom: 2,
        vitri: 1,
    },
    {
        stt: 18,
        ten: "Phan Tiến Thành",
        nhom: 4,
        vitri: 0,
    },
    {
        stt: 19,
        ten: "Đỗ Văn Huy",
        nhom: 4,
        vitri: 0,
    },
    {
        stt: 20,
        ten: "Nguyễn Trung Duc",
        nhom: 5,
        vitri: 0,
    },
    {
        stt: 21,
        ten: "Nguyễn Trung Nam",
        nhom: 5,
        vitri: 0,
    },
    {
        stt: 22,
        ten: "Trần Quốc Toàn",
        nhom: 5,
        vitri: 0,
    }
];

var Hocvien = {
    DSHH: class_hocvien
}

// bài 3
//đếm số lượng học viên trong lớp
console.log("Số lượng học viên :" + mang_hocvien.length);
//đếm số nhóm trưởng
let demNT = 0;
for (let i = 0; i < mang_hocvien.length; i++) {
    if (mang_hocvien[i][3] == 1) {
        demNT += 1;
    }
}
console.log("Số nhóm trưởng :" + demNT);
// Đếm số nhóm
let mangSN = [];
for (let i = 0; i < mang_hocvien.length; i++) {
    if (mang_hocvien[i][2] != 0) {
        mangSN.push(mang_hocvien[i][2]);
    }
}

let mySet = new Set(mangSN);
console.log("Số nhóm trong lớp là :" + mySet.size);

//bài 4
console.log("Số lượng học viên là:" + Hocvien.DSHH.length);
//đếm số nhóm trưởng
let demObjNT = 0;
for (let i = 0; i < Hocvien.DSHH.length; i++) {
    if (Hocvien.DSHH[i].vitri != 0) {
        demObjNT += 1;
    }
}

console.log("Số nhóm trưởng là: " + demObjNT);

// bài 5
// console.log("Xoá học viên ở đầu mảng: " + mang_hocvien.shift());
// bài 6
// console.log("Xoá học viên số 7 ở mảng :" + mang_hocvien.splice(6, 1));
// bài 7
console.log("Tên học viên số 9 :" + Hocvien.DSHH[8].ten);
// bài 8
let timkiem;
for (let i = 0; i < Hocvien.DSHH.length; i++) {
    if (Hocvien.DSHH[i].nhom == 2 && Hocvien.DSHH[i].vitri == 1) {
        timkiem = Hocvien.DSHH[i].stt;
        break;
    }
}
console.log("Số thứ tự của nhóm trưởng số 2 là: " + timkiem);

// bài 9
function sapxep(a, b) {
    let nameA = a.ten.toUpperCase().trim().split(" ").pop();
    let nameB = b.ten.toUpperCase().trim().split(" ").pop();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

// Hocvien.DSHH.sort(sapxep);

// bài 10
// var mangTen = [];
// for (let i = 0; i < Hocvien.DSHH.length; i++) {
//     mangTen.push(Hocvien.DSHH[i].ten.split(" ").slice(-1));
// }
// console.log(mangTen);

// bài 11

// mangTen.join(',');
// var sortName = mangTen.toString().split(',');
// console.log(sortName);

// bài 12
// var setName = new Set(sortName);
// console.log(setName);


// bài 13

// bài 14
/*
var arr_New = [{
        stt: 1,
        ten: "Nguyễn Văn Sơn",
        nhom: 1,
        vitri: 0,
    },
    {
        stt: 2,
        ten: "Nguyễn Hữu Anh",
        nhom: 1,
        vitri: 0,
    },
    {
        stt: 3,
        ten: "Trần Mạnh Quân",
        nhom: 4,
        vitri: 1,
    },
    {
        stt: 4,
        ten: "Hà Quốc Tuấn",
        nhom: 3,
        vitri: 1,
    }
];

arr_New.unshift({
    stt: 6,
    ten: "Vũ Thị Thu Hà",
    nhom: 2,
    vitri: 0,
}, {
    stt: 7,
    ten: "Phan Văn Trung",
    nhom: 2,
    vitri: 0,
}, {
    stt: 8,
    ten: "Nguyễn Cao Hoàng",
    nhom: 2,
    vitri: 0,
}, {
    stt: 9,
    ten: "Phùng Đắc Nhật Minh",
    nhom: 5,
    vitri: 1,
}, {
    stt: 10,
    ten: "Lê Việt Dũng",
    nhom: 1,
    vitri: 1,
});
*/

// bài 15
/*
var mang_wrap = [...Hocvien.DSHH.slice(0, 5)];
mang_wrap.sort(sapxep);
for (let j = 0; j < 5; j++) {
    mang_wrap[j].stt = j + 1;
}
console.log(mang_wrap);
*/
// bài 16
/*
for (let i = 0; i < Hocvien.DSHH.length; i++) {
    if (Hocvien.DSHH[i].stt % 3 == 0) {
        console.log("Học viên:" + Hocvien.DSHH[i].stt + " " + Hocvien.DSHH[i].ten + " " + Hocvien.DSHH[i].nhom + " " + Hocvien.DSHH[i].vitri);
    }
}
*/

// bài 17
/*
var result = false;
for (let i = 0; i < 5; i++) {
    if (Hocvien.DSHH[i].vitri == 1) {
        result = true;
    }
}

if (result == true) {
    console.log("Trong 5 bạn đầu có bạn làm nhóm trưởng");
} else {
    console.log("Không thoả mãn");
}
*/

// bài 18
/*
var countNT = 0;
for (let i = 0; i < 5; i++) {
    if (Hocvien.DSHH[i].vitri == 1) {
        countNT += 1;
    }
}
if (countNT == 5) {
    console.log("Cả 5 bạn đều là nhóm trưởng");
} else {
    console.log("Không thoả mãn");
}
*/

// bài 19
/*
for (let i = 0; i < Hocvien.DSHH.length; i++) {
    console.log(Hocvien.DSHH[i].ten + "_" + Hocvien.DSHH[i].stt + "_" + Hocvien.DSHH[i].nhom);
}
*/

//bài 20
/*
var arr_reverse = [];
for (let i = mang_hocvien.length - 1; i >= 0; i--) {
    arr_reverse.push(mang_hocvien[i]);
}
console.log(arr_reverse);
*/
// bài 1
var mang_hocvien = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: 1,
        leader: 0,
    },
    {
        id: 2,
        name: "Nguyễn Hữu Anh",
        group: 1,
        leader: 0,
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: 4,
        leader: 1,
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: 3,
        leader: 1,
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: 1,
        leader: 0,
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: 2,
        leader: 0,
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: 2,
        leader: 0,
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group: 2,
        leader: 0,
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: 5,
        leader: 1,
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: 1,
        leader: 1,
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: 2,
        leader: 0,
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: 3,
        leader: 0,
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: 3,
        leader: 0,
    },

    {
        id: 14,
        name: "Tạ Đức Chiến",
        group: 3,
        leader: 0,
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: 3,
        leader: 0,
    },
    {
        id: 16,
        name: "Ngô Chung Á Au",
        group: 4,
        leader: 0,
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: 2,
        leader: 1,
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: 4,
        leader: 0,
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: 4,
        leader: 0,
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        group: 5,
        leader: 0,
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: 5,
        leader: 0,
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: 5,
        leader: 0,
    }
];

// bài 2
var class_hocvien = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: 1,
        leader: 0,
    },
    {
        id: 2,
        name: "Nguyễn Hữu Anh",
        group: 1,
        leader: 0,
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: 4,
        leader: 1,
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: 3,
        leader: 1,
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: 1,
        leader: 0,
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: 2,
        leader: 0,
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: 2,
        leader: 0,
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group: 2,
        leader: 0,
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: 5,
        leader: 1,
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: 1,
        leader: 1,
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: 2,
        leader: 0,
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: 3,
        leader: 0,
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: 3,
        leader: 0,
    },

    {
        id: 14,
        name: "Tạ Đức Chiến",
        group: 3,
        leader: 0,
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: 3,
        leader: 0,
    },
    {
        id: 16,
        name: "Ngô Chung Á Au",
        group: 4,
        leader: 0,
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: 2,
        leader: 1,
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: 4,
        leader: 0,
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: 4,
        leader: 0,
    },
    {
        id: 20,
        name: "Nguyễn Trung Duc",
        group: 5,
        leader: 0,
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: 5,
        leader: 0,
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: 5,
        leader: 0,
    }
];

var Hocvien = {
    DSHH: class_hocvien
}

console.log(mang_hocvien);

// bài 3
//đếm số lượng học viên trong lớp
console.log("Số lượng học viên :" + mang_hocvien.length);
//đếm số nhóm trưởng
var list_mangNT = mang_hocvien.filter((value) => {
    return value.leader == 1;
})
console.log("Số nhóm trưởng là: " + list_mangNT.length);

// Đếm số nhóm
var listGroup = [];
mang_hocvien.map((value) => {
    listGroup.push(value.group);
});
var size_group = new Set(listGroup);
console.log("Số nhóm là:" + size_group.size);

//bài 4
console.log("Số lượng học viên là:" + Hocvien.DSHH.length);
//đếm số nhóm trưởng
var obj_NT = Hocvien.DSHH.filter((value) => {
    return value.leader == 1;
})

console.log("Obj số nhóm trưởng là :" + obj_NT.length);

// bài 5
// console.log("Xoá học viên ở đầu mảng: " + mang_hocvien.shift());
// bài 6
// console.log("Xoá học viên số 7 ở mảng :" + mang_hocvien.splice(6, 1));
// bài 7
console.log("Tên học viên số 9 :" + Hocvien.DSHH[8].name);
// bài 8
var search = mang_hocvien.find((value) => {
    return value.group == 2 && value.leader == 1
})

console.log("Số thứ tự của nhóm trưởng số 2 là: " + search.id);

// bài 9
function sapxep(a, b) {
    let nameA = a.name.toUpperCase().trim().split(" ").pop();
    let nameB = b.name.toUpperCase().trim().split(" ").pop();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

// mang_hocvien.sort(sapxep);

// bài 10
var arr_Name = []
mang_hocvien.filter((value) => {
    arr_Name.push(value.name.split(" ").slice(-1));
})
console.log("Arr Name:" + arr_Name);
// bài 11

// arr_Name.sort((a, b) => {
//     return a.localeCompare(b, "vn", { sensitivity: "base" });
// });

// console.log("Sắp xếp: ");
// console.log(arr_Name);

// bài 12
// var setName = new Set(sortName);
// console.log(setName);


// bài 13
/*
var arr_Name = []
mang_hocvien.filter((value) => {
    arr_Name.push(value.name.split(" ").slice(-1));
})
var list = arr_Name.toString().split(",");
var list_set = new Set(list);
console.log(list_set);
*/
// bài 14
/*
var arr_New = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: 1,
        leader: 0,
    },
    {
        id: 2,
        name: "Nguyễn Hữu Anh",
        group: 1,
        leader: 0,
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: 4,
        leader: 1,
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: 3,
        leader: 1,
    }
];

arr_New.unshift({
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: 2,
    leader: 0,
}, {
    id: 7,
    name: "Phan Văn Trung",
    group: 2,
    leader: 0,
}, {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: 2,
    leader: 0,
}, {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: 5,
    leader: 1,
}, {
    id: 10,
    name: "Lê Việt Dũng",
    group: 1,
    leader: 1,
});
*/

// bài 15
/*
var mang_wrap = [...Hocvien.DSHH.slice(0, 5)];
console.log(mang_wrap.sort(sapxep));
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
let arr_List = mang_hocvien.slice(0, 5);
arr_List = arr_List.filter((value) => value.leader === 1);
console.log("Các bạn nhóm trưởng trong 5 bạn đầu tiên: ");
console.log(arr_List);
*/
// bài 18
/*
let arr_List = mang_hocvien.slice(0, 5);
arr_List = arr_List.filter((value) => value.leader === 1);
if (arr_List.length == 5) {
    console.log("Cả 5 bạn đều là nhóm trưởng");
} else {
    console.log("Không thoả mãn");
}
*/

// bài 19
/*
let list_hocvien = [...mang_hocvien];
let list_HV = list_hocvien.map((item) => {
    return item["name"] + "_" + item["id"] + "_" + item["group"];
});

console.log(list_HV);
*/

//bài 20
// console.log(mang_hocvien.reverse());
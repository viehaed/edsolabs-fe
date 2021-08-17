// ============Bài 1==============
const listStudent1 = [
    [1, 'Nguyễn Văn Sơn', 1, 0],
    [2, 'Nguyễn Hữu Ánh', 1, 0],
    [3, 'Trần Mạnh Quân', 4, 1],
    [4, 'Hà Quốc Tuấn', 3, 1],
    [5, 'Hoàng Ngọc Thành', 1, 0],
    [6, 'Vũ Thị Thu Hà', 2, 0],
    [7, 'Phan Văn Trung', 2, 0],
    [8, 'Nguyễn Cao Hoàng', 2, 0],
    [9, 'Phùng Đắc Nhật Minh', 5, 1],
    [10, 'Lê Việt Dũng', 1, 1],
    [11, 'Đỗ Chí Công', 2, 0],
    [12, 'Trần Công Tâm', 3, 0],
    [13, 'Trương Thanh Tùng', 3, 0],
    [14, 'Tạ Đức Chiến', 3, 0],
    [15, 'Nguyễn Trọng Vĩnh', 3, 0],
    [16, 'Ngô Chung Á Âu', 4, 0],
    [17, 'Trần Thị Khánh Linh', 2, 1],
    [18, 'Phan Tiến Thành', 4, 0],
    [19, 'Đỗ Văn Huy', 4, 0],
    [20, 'Nguyễn Trung Đức', 5, 0],
    [21, 'Nguyễn Trung Nam', 5, 0],
    [22, 'Trần Quốc Toàn', 1, 0]
];

const listStudent2 = [
    {
        id: 1,
        name: 'Nguyễn Văn Sơn',
        group: 1,
        teamLeader: 0
    },
    {
        id: 2,
        name: 'Nguyễn Hữu Ánh',
        group: 1,
        teamLeader: 0
    },
    {
        id: 3,
        name: 'Trần Mạnh Quân',
        group: 4,
        teamLeader: 1
    },
    {
        id: 4,
        name: 'Hà Quốc Tuấn',
        group: 3,
        teamLeader: 1
    },
    {
        id: 5,
        name: 'Hoàng Ngọc Thành',
        group: 1,
        teamLeader: 0
    },
    {
        id: 6,
        name: 'Vũ Thị Thu Hà',
        group: 2,
        teamLeader: 0
    },
    {
        id: 7,
        name: 'Phan Văn Trung',
        group: 2,
        teamLeader: 0
    },
    {
        id: 8,
        name: 'Nguyễn Cao Hoàng',
        group: 2,
        teamLeader: 0
    },
    {
        id: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: 5,
        teamLeader: 1
    },
    {
        id: 10,
        name: 'Lê Việt Dũng',
        group: 1,
        teamLeader: 1
    },
    {
        id: 11,
        name: 'Đỗ Chí Công',
        group: 2,
        teamLeader: 0
    },
    {
        id: 12,
        name: 'Trần Công Tâm',
        group: 3,
        teamLeader: 0
    },
    {
        id: 13,
        name: 'Trương Thanh Tùng',
        group: 3,
        teamLeader: 0
    },
    {
        id: 14,
        name: 'Tạ Đức Chiến',
        group: 3,
        teamLeader: 0
    },
    {
        id: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: 3,
        teamLeader: 0
    },
    {
        id: 16,
        name: 'Ngô Chung Á Âu',
        group: 4,
        teamLeader: 0
    },
    {
        id: 17,
        name: 'Trần Thị Khánh Linh',
        group: 2,
        teamLeader: 1
    },
    {
        id: 18,
        name: 'Phan Tiến Thành',
        group: 4,
        teamLeader: 0
    },
    {
        id: 19,
        name: 'Đỗ Văn Huy',
        group: 4,
        teamLeader: 0
    },
    {
        id: 20,
        name: 'Nguyễn Trung Đức',
        group: 5,
        teamLeader: 0
    },
    {
        id: 21,
        name: 'Nguyễn Trung Nam',
        group: 5,
        teamLeader: 0
    },
    {
        id: 22,
        name: 'Trần Quốc Toàn',
        group: 1,
        teamLeader: 0
    }
];
console.log('list 2: ',typeof listStudent2);
// ===================Bài 3====================
var countLeader1 = 0;
for(i = 0; i < listStudent1.length; i++){
    if(listStudent1[i][3] === 1){
        countLeader1 += 1;
    }
}
console.log('Bài 3:');
console.log('Số lượng học viên: ',listStudent1.length);
console.log('Số lượng nhóm trưởng: ',countLeader1);
console.log('Số lượng nhóm : ',countLeader1);

// ===============Bài 4======================
var countLeader2 = 0;
listStudent2.forEach(function(st){
    if(st.teamLeader === 1){
        countLeader2+=1;
    }
});
console.log('Bài 4:');
console.log('Số lượng học viên: ',listStudent2.length);
console.log('Số lượng nhóm trưởng: ',countLeader2);
console.log('Số lượng nhóm : ',countLeader2);

// ===============Bài 5======================
console.log('Bài 5:');
console.log('Trước khi xóa:',listStudent1);
var copyList1 = listStudent1.concat();
const item = copyList1.shift();
console.log('Sau khi xóa: ', copyList1);
console.log('Phần tử xóa: ', item);

// ===============Bài 6======================
console.log('Bài 6:');
console.log('Trước khi xóa:',listStudent1)
var copyList2 = listStudent1.concat();
const item2 = copyList2.splice(6,1);
console.log('Sau khi xóa: ', copyList2);
console.log('Phần tử xóa: ', item2);
// ===============Bài 7======================
console.log('Bài 7:');

var found = listStudent2.find(function(st1){
    return st1.id === 9;
});
console.log('Học viên có stt 9: ',found);
// ===============Bài 8======================
console.log('Bài 8:');

var found2 = listStudent2.find(function(st2){
    return st2.group === 2 && st2.teamLeader === 1;
});
console.log('Số thứ tự nhóm trưởng nhóm 2:',found2.id);
// ===============Bài 9======================
console.log('Bài 9:');

const copyList3 = listStudent1.map((x) => x)
copyList3.sort(function(a,b){
    var aFullName = a[1].split(" ");
    var bFullName = b[1].split(" ");
    aFirstName = aFullName[aFullName.length - 1];
    bFirstName = bFullName[bFullName.length - 1];
    return aFirstName.localeCompare(bFirstName);
});
console.log('Sắp xếp tăng dần theo tên',copyList3);
// ===============Bài 10======================
console.log('Bài 10:');

const copyList4 = listStudent1.map(function(a){
    var fullName = a[1].split(" ");
    return firstName = fullName[fullName.length - 1];
});
console.log(copyList4);
// ===============Bài 11======================
console.log('Bài 11:');

var sortName = copyList4.sort(function(a,b){
    return a.localeCompare(b);
});
console.log('Sort tên :',sortName);

// ===============Bài 12======================
console.log('Bài 12:');

var copyList5 = copyList4.map((x) => x);
var duplicateArr = [...new Set(copyList5)];
console.log('Mảng ko có phần tử trùng',duplicateArr);

// ===============Bài 13======================
console.log('Bài 13:');

const maxEl = copyList5.reduce((pre,cur,i,arr) => {
    if(arr.filter(item => item === pre).length > arr.filter(item => item === cur).length) {
        return pre;
    } else {
        return cur;
    }
});
console.log('Tên được dùng nhiều nhất:',maxEl);
// ===============Bài 14======================
console.log('Bài 14:');

var arrEnd = copyList5.slice(0,5),
    arrStart = copyList5.slice(10,15);
console.log('Ghép mảng vào đầu ',arrStart.concat(arrEnd));
// ===============Bài 15======================
console.log('Bài 15:');

console.log('Sort tên :',arrEnd.sort(function(a,b) {
    return a.localeCompare(b);
}));

// ===============Bài 16======================
console.log('Bài 16:');

var copyList6 = listStudent2.filter(function(st){
    return (st.id % 3) == 0;
});
console.log('Danh sách học viên có STT chia hết cho 3',copyList6);

// ===============Bài 17======================
console.log('Bài 17:');

const fifthStu = listStudent2.slice(0,5);
for(const ele of fifthStu){
    if(ele.teamLeader === 1){
        console.log('5 bạn đầu tiên có bạn ',ele.name,' làm nhóm trưởng');
        break;
    }
};

// ===============Bài 18======================
console.log('Bài 18:');

console.log(fifthStu)
for(const ele of fifthStu){
    if(ele.teamLeader === 1){
        console.log('Bạn số', ele.id, 'làm nhóm trưởng')
    } else {
        console.log('Bạn số', ele.id, 'không làm nhóm trưởng')

    }
};
// ===============Bài 19======================
console.log('Bài 19:');

const idStudent = listStudent2.map(function(st){
    return st.id + "_" + st.group;
});
console.log('Mã học viên',idStudent);

// ===============Bài 20======================
console.log('Bài 20:');

console.log('Đảo ngược mảng',listStudent1.reverse());


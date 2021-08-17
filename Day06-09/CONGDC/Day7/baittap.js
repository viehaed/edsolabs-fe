 //cau 1 
 var listStudent = [
    {
        stt: 1,
        hvt: 'Nguyễn Văn Sơn',
        nhom: 1,
        vtt: ''
    },
    {
        stt: 2,
        hvt: 'Nguyễn Hữu Ánh',
        nhom: 1,
        vtt: ''
    },
    {
        stt: 3,
        hvt: 'Trần Mạnh Quân',
        nhom: 4,
        vtt: 'Nhóm trưởng'
    },
    {
        stt: 4,
        hvt: 'Hà Quốc Tuấn',
        nhom: 3,
        vtt: 'Nhóm trưởng'
    },
    {
        stt: 5,
        hvt: 'Hoàng Ngọc Thành',
        nhom: 1,
        vtt: ''
    },
    {
        stt: 6,
        hvt: 'Vũ Thị Thu Hà',
        nhom: 2,
        vtt: ''
    },
    {
        stt: 7,
        hvt: 'Phan Văn Trung',
        nhom: 2,
        vtt: ''
    },
    {
        stt: 8,
        hvt: 'Nguyễn Cao Hoàng',
        nhom: 2,
        vtt: ''
    },
    {
        stt: 9,
        hvt: 'Phùng Đắc Nhật Minh',
        nhom: 5,
        vtt: 'Nhóm trưởng'
    },
    {
        stt: 10,
        hvt: 'Lê Việt Dũng',
        nhom: 1,
        vtt: 'Nhóm trưởng'
    },
    {
        stt: 11,
        hvt: 'Đỗ Chí Công',
        nhom: 2,
        vtt: ''
    },
    {
        stt: 12,
        hvt: 'Trần Công Tâm',
        nhom: 3,
        vtt: ''
    },
    {
        stt: 13,
        hvt: 'Trương Thanh Tùng',
        nhom: 3,
        vtt: ''
    },
    {
        stt: 14,
        hvt: 'Tạ Đức Chiến',
        nhom: 3,
        vtt: ''
    },
    {
        stt: 15,
        hvt: 'Nguyễn Trọng Vĩnh',
        nhom: 3,
        vtt: ''
    },
    {
        stt: 16,
        hvt: 'Ngô Chung Á Âu',
        nhom: 4,
        vtt: ''
    },
    {
        stt: 17,
        hvt: 'Trần Thị Khánh Linh',
        nhom: 2,
        vtt: 'Nhóm trưởng'
    },
    {
        stt: 18,
        hvt: 'Phan Tiến Thành',
        nhom: 4,
        vtt: ''
    },
    {
        stt: 19,
        hvt: 'Đỗ Văn Huy',
        nhom: 4,
        vtt: ''
    },
    {
        stt: 20,
        hvt: 'Nguyễn Trung Đức',
        nhom: 5,
        vtt: ''
    },
    {
        stt: 21,
        hvt: 'Nguyễn Trung Nam',
        nhom: 5,
        vtt: ''
    },
    {
        stt: 22,
        hvt: 'Trần Quốc Toàn',
        nhom: 5,
        vtt: ''
    }
];
// cau 2
var Student = Object.assign({},listStudent);

// bai 3
console.log('Số thành viên trong lớp học là : '+listStudent.length);
var loc = listStudent.filter(function(loc,index){
    return loc.vtt === 'Nhóm trưởng';
});

console.log('Số nhóm trưởng trong lớp là: '+loc.length);

var ln = new  Set(listStudent.map(listStudent => listStudent.nhom)).size;
console.log("Số nhóm trong lớp là: "+ln); 


// cau 4
var dem = Object.values(listStudent).length;


var locOb = Object.values(listStudent).filter(function(locOb,index){
    return locOb.vtt === 'Nhóm trưởng';
});

// Câu 5
var loai = listStudent.filter(function(loai,index){
        return loai.stt != 1;
});
console.log(loai);


// Câu 6 

var loai2 = listStudent.filter(function(loai,index){
    return loai.stt != 7;
});
console.log(loai);

// Câu 7
var tenso9 = listStudent.find(function(tenso9,index){
    return tenso9.stt === 9; 
});

console.log(tenso9.hvt);

// Câu 8
var nt2 = listStudent.find(function(nt2,index){
    return nt2.nhom === 2 && nt2.vtt === 'Nhóm trưởng'
});
console.log(nt2.stt);

// Câu 9 
var sortList = listStudent.sort(function(a,b){
    return a.hvt.localeCompare(b.hvt);
});

//Câu 10

var hvt1 = listStudent.map(({hvt}) => {
    var hvt12 = hvt.lastIndexOf(" ");
    return hvt = hvt.slice(hvt12);
});
console.log(hvt1);
 // Câu 11
 hvt1.sort(function(a,b){
    return a.localeCompare(b);
});

// Câu 12
 var hvt2 =  [...new Set(hvt1)];
console.log(hvt2);
// Câu 13
var count = hvt1.filter((item,index) => hvt1.indexOf(item) != item).length;


console.log("Số tên trùng nhau là : " +count);


// Câu 14

var student5 = listStudent.splice(0,5);
for (let index = 0; index < 5; index++) {
    student5.push(listStudent[student5.length + index]);
}
console.log(student5);

// Câu 14
var student6 = listStudent.splice(0,5);
for (let index = 0; index < 5; index++) {
    student6.unshift(listStudent[student6.length + index]);
}
console.log(student6);

//Câu 15

var studen11 = listStudent.splice(0,5);
var sortList1 = studen11.sort(function(a,b){
    return a.hvt.localeCompare(b.hvt);
});

// Câu 16

var chia3 = Object.values(Student).filter(function(chia3,index){
    return chia3.stt % 3 === 0;
});
console.log(chia3);

// Câu 17 

var student8 = listStudent.splice(0,5);
var test = student8.findIndex(function(test,index){
        test.vtt === 'Nhóm trưởng';
});
var test2 = (test === -1 ? 'Không có' : 'Có');
console.log(student8);
console.log(test2);

// Câu 18 


var test3 = (test === -1 ? 'Có' : 'Không');
console.log(test3);

// Câu 19 

var studen10 = listStudent.map(({stt,hvt,nhom}) => {
    var hvt5 = hvt.split(" ").pop();
    return '${hvt5}_${stt}_${nhom}';

});

// Câu 20 

listStudent.reverse();
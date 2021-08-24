 //cau 1 
 const listStudent = [
    {
        id: 1,
        name: 'Nguyễn Văn Sơn',
        group: 1,
        position: 'Member'
    },
    {
        id: 2,
        name: 'Nguyễn Hữu Ánh',
        group: 1,
        position: 'Member'
    },
    {
        id: 3,
        name: 'Trần Mạnh Quân',
        group: 4,
        position: 'Leader'
    },
    {
        id: 4,
        name: 'Hà Quốc Tuấn',
        group: 3,
        position: 'Leader'
    },
    {
        id: 5,
        name: 'Hoàng Ngọc Thành',
        group: 1,
        position: 'Member'
    },
    {
        id: 6,
        name: 'Vũ Thị Thu Hà',
        group: 2,
        position: 'Member'
    },
    {
        id: 7,
        name: 'Phan Văn Trung',
        group: 2,
        position: 'Member'
    },
    {
        id: 8,
        name: 'Nguyễn Cao Hoàng',
        group: 2,
        position: 'Member'
    },
    {
        id: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: 5,
        position: 'Leader'
    },
    {
        id: 10,
        name: 'Lê Việt Dũng',
        group: 1,
        position: 'Leader'
    },
    {
        id: 11,
        name: 'Đỗ Chí Công',
        group: 2,
        position: 'Member'
    },
    {
        id: 12,
        name: 'Trần Công Tâm',
        group: 3,
        position: 'Member'
    },
    {
        id: 13,
        name: 'Trương Thanh Tùng',
        group: 3,
        position: 'Member'
    },
    {
        id: 14,
        name: 'Tạ Đức Chiến',
        group: 3,
        position: 'Member'
    },
    {
        id: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: 3,
        position: 'Member'
    },
    {
        id: 16,
        name: 'Ngô Chung Á Âu',
        group: 4,
        position: 'Member'
    },
    {
        id: 17,
        name: 'Trần Thị Khánh Linh',
        group: 2,
        position: 'Leader'
    },
    {
        id: 18,
        name: 'Phan Tiến Thành',
        group: 4,
        position: 'Member'
    },
    {
        id: 19,
        name: 'Đỗ Văn Huy',
        group: 4,
        position: 'Member'
    },
    {
        id: 20,
        name: 'Nguyễn Trung Đức',
        group: 5,
        position: 'Member'
    },
    {
        id: 21,
        name: 'Nguyễn Trung Nam',
        group: 5,
        position: 'Member'
    },
    {
        id: 22,
        name: 'Trần Quốc Toàn',
        group: 5,
        position: 'Member'
    }
];
// cau 2

const Student = Object.assign({},listStudent);

// bai 3
console.log('Số thành viên trong lớp học là : '+listStudent.length);
const loc = listStudent.filter(function(loc,index){
    return loc.position === 'Member';
});

const ln = new  Set(listStudent.map(listStudent => listStudent.group)).size;


// cau 4
const dem = Object.values(listStudent).length;

const locOb = Object.values(listStudent).filter(function(locOb,index){
    return locOb.position === 'Member';
});

// Câu 5
const loai = listStudent.filter(function(loai,index){
        return loai.id != 1;
});

// Câu 6 

const loai2 = listStudent.filter(function(loai,index){
    return loai.id != 7;
});

// Câu 7
const tenso9 = listStudent.find(function(tenso9,index){
    return tenso9.id === 9; 
});

console.log(tenso9.name);

// Câu 8
const nt2 = listStudent.find(function(nt2,index){
    return nt2.group === 2 && nt2.position === 'Member'
});
console.log(nt2.id);

// Câu 9 
const sortList = listStudent.sort(function(a,b){
    return a.name.localeCompare(b.name);
});

//Câu 10

const name1 = listStudent.map(({name}) => {
    const name12 = name.lastIndexOf(" ");
    return name = name.slice(name12);
});
console.log(name1);
 // Câu 11
 name1.sort(function(a,b){
    return a.localeCompare(b);
});

// Câu 12
 const name2 =  [...new Set(name1)];
console.log(name2);
// Câu 13
const countNames = name1
  .map((o) => ({
    name: o,
    count: name1.filter((e) => e == o).length,
  }))
  .sort((a, b) => b.count - a.count);

  const maxCount = countNames[0].count;

  const nameMaxCount = countNames
  .filter((o) => o.count == maxCount)
  .map((o) => o.name);
const result = new Set(nameMaxCount);

console.log(result);

// Câu 14

const student5 = listStudent.splice(0,5);
for (let index = 0; index < 5; index++) {
    student5.push(listStudent[student5.length + index]);
}
console.log(student5);

// Câu 14
const student6 = listStudent.splice(0,5);
console.log(student6);
for (let index = 0; index < 5; index++) {
    student6.unshift(listStudent[student6.length + index]);
}


//Câu 15

const studen11 = listStudent.splice(0,5);
const sortList1 = studen11.sort(function(a,b){
    return a.name.localeCompare(b.name);
});

// Câu 16

const div3 = Object.values(Student).filter(function(div3,index){
    return div3.id % 3 === 0;
});
console.log(div3);
// Câu 17 

const student8 = listStudent.splice(0,5);

const result1 = student8.some((o) => o.position == "Leader");

console.log(result1);

// Câu 18 

const student9 = listStudent.splice(0,5);
const result2 = student8.some((o) => o.position == "Member");

console.log(result2);


// Câu 19 

const studen10 = listStudent.map(({id,name,group}) => {
    
const name5 = listStudent.map(({name}) => {
    const name12 = name.lastIndexOf(" ");
    return name = name.slice(name12);
});
    return name+'_'+id+'_'+group;

});
console.log(studen10);

// Câu 20 

listStudent.reverse();
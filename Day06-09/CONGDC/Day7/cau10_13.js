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
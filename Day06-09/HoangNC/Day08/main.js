// Bai 21
console.log('----Bai 1----')
var listStudent = [
    {   
    id: 1, 
    name: 'Nguyen Van Son',
    
        groupid: 1, 
        position: ""
    
}, 
    {   
    id: 2, 
    name: 'Nguyen Huu Anh',
    
        groupid: 1, 
        position: ""
    
}, 
    {   
    id: 3, 
    name: 'Tran Manh Quan',
    
        groupid: 4, 
        position: 'Nhom truong'
    
}, 
    {   
    id: 4, 
    name: 'Ha Quoc Tuan',
    
        groupid: 3, 
        position: 'Nhom truong'
    
}, 
    {   
    id: 5, 
    name: 'Hoang Ngoc Thanh',
    
        groupid: 1, 
        position: ""
    
}, 
    {   
    id: 6, 
    name: 'Vu Thi Thu Ha',
    
        groupid: 2, 
        position: ""
    
}, 
    {   
    id: 7, 
    name: 'Phan Van Trung',
    
        groupid: 2, 
        position: ""
    
}, 
    {   
    id: 8, 
    name: 'Nguyen Cao Hoang',
    
        groupid: 2, 
        position: ""
    
}, 
    {   
    id: 9, 
    name: 'Phung Dac Nhat Minh',
    
        groupid: 5, 
        position: 'Nhom truong'
    
}, 
    {   
    id: 10,
    name:  'Le Viet Dung',
    
        groupid: 1, 
        position: 'Nhom truong'
    
}, 
    {   
    id: 11,
    name:  'Do Chi Cong',
    
        groupid: 2, 
        position: ""
    
}, 
    {   
    id: 12,
    name:  'Tran Cong Tam',
    
        groupid: 3, 
        position: ""
    
}, 
    {   
    id: 13,
    name:  'Truong Thanh Tung',
    
        groupid: 3, 
        position: ""
    
}, 
    {   
    id: 14,
    name:  'Ta Duc Chien',
    
        groupid: 3, 
        position: ""
    
}, 
    {   
    id: 15,
    name:  'Nguyen Trong Vinh',
    
        groupid: 3, 
        position: ""
    
}, 
    {   
    id: 16,
    name:  'Ngo Chung A Au',
    
        groupid: 4, 
        position: ""
    
}, 
    {   
    id: 17,
    name:  'Tran Thi Khanh Linh',
    
        groupid: 2, 
        position: 'Nhom truong'
    
}, 
    {   
    id: 18,
    name:  'Phan Tien Thanh',
    
        groupid: 4, 
        position: ""
    
}, 
    {   
    id: 19,
    name:  'Do Van Huy',
    
        groupid: 4, 
        position: ""
    
}, 
    {   
    id: 20,
    name:  'Nguyen Trung Duc',
    
        groupid: 5, 
        position: ""
    
}, 
    {   
    id: 21,
    name:  'Nguyen Trung Nam',
    
        groupid: 5, 
        position: ""
    
}, 
    {   
    id: 22,
    name:  'Tran Quoc Toan',
    
        groupid: 5, 
        position: ""
    
}
];

//Bai 22
function cau22(x) {
    // Xao tron mang
    const shuffled = listStudent.sort(function() {
    return 0.5 - Math.random()})
    // Lay ra phan tu
    const select = shuffled.slice(0, x)
    console.log(select.map(listStudent => listStudent.name))
}
cau22(6)
//Bai 23
function cau23(x) {
    var find23 = listStudent.filter(function(find23, index) {
        return find23.groupid === x
    })
    console.log(find23.map(listStudent => listStudent.name))
}
cau23(2)

//Bai 24
var addPoints = (id, dayName, point) => {
    var member = listStudent.find((person) => person.id === id)
    if(!member.points) {
        member.points = []
    }
    member.points.push({
            dayID: d,
            dayName,
            point,
    })
}
//Bai 25
function bai25(x) {
    for (d = 1; d <= x; d++){
        for (var i = 1; i <= listStudent.length; i++) {
            addPoints(i, 'Ngay' + d, Math.floor(Math.random() *10))
        }
    }
    console.log(listStudent)
}
bai25(15)

//Bai 26

function bai26(x,y) {
    var copyList = listStudent.slice();
    const tempArr = copyList.map((person) => {
        const totalPoints = person.points.reduce((total, item) => {
            const {dayID, point} = item
            if (dayID >= x && dayID <= y) {
                return total + point
            }
            return total
        }, 0);
        // Add totalPoints vào danh sach
        person.totalPoints = Math.ceil(totalPoints * 100) / 100
        return person;
    })
    return tempArr
}
bai26(2,4)
//Bai 27
function bai27(x,y) {
    var topPoint = bai26(x,y)
    topPoint.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    console.log(topPoint.slice(0, 5))
}
// bai27(2,4)

//Bai 28

function bai28(x, y, z) {
    var namePoint = bai26(x, y)
    var List28 = namePoint.map(({id, name, totalPoints}) => {
        return `ID: ${id}_Name: ${name}_Tong diem: ${totalPoints}`
    })
    console.log(List28)
}
bai28(2, 4)

//Bai 29
const getUniqueGroups = (arr) => {
    const arrGroup = arr.map((person) => person.groupid);
    return [...new Set(arrGroup)];
  };
const pairGroup = (x, y) => {
    const totalPointArr = bai26(x, y);
    const groups = getUniqueGroups(totalPointArr);
    console.log(getUniqueGroups.length)
    return groups.map((group) => {
      const groupMember = totalPointArr
        .filter((item) => item.groupid === group)
        .sort((a, b) => a.totalPoints - b.totalPoints);
      return {
        firstMember: groupMember[0],
        secondMember: groupMember[groupMember.length - 1],
        group,
      };
    });
  };

  //Bai 30
  const totalGroupPoint = (x, y) => {
    const totalPointArr = bai26(x, y);
    const groups = getUniqueGroups(totalPointArr);
    return groups.map((group) => {
      const groupMember = totalPointArr.filter((item) => item.groupid === group);
      const totalGroupPoint = groupMember.reduce(
        (total, item) => total + item.totalPoints,
        0
      );
      return {
        group,
        totalGroupPoint: Math.floor(totalGroupPoint * 100) / 100,
        points: groupMember.map(({ name, totalPoints }) => ({
          Ten: name,
          Diem: totalPoints
        })),
      };
    });
  };
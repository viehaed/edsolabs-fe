const listStudent = [
    {
        id: 1,
        name: 'Nguyễn Văn Sơn',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 2,
        name: 'Nguyễn Hữu Ánh',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 3,
        name: 'Trần Mạnh Quân',
        group: {
            groupId:4,
            position: 'leader'
        }
    },
    {
        id: 4,
        name: 'Hà Quốc Tuấn',
        group: {
            groupId:3,
            position: 'leader'
        }
    },
    {
        id: 5,
        name: 'Hoàng Ngọc Thành',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 6,
        name: 'Vũ Thị Thu Hà',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 7,
        name: 'Phan Văn Trung',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 8,
        name: 'Nguyễn Cao Hoàng',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: {
            groupId:5,
            position: 'leader'
        }
    },
    {
        id: 10,
        name: 'Lê Việt Dũng',
        group: {
            groupId:1,
            position: 'leader'
        }
    },
    {
        id: 11,
        name: 'Đỗ Chí Công',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 12,
        name: 'Trần Công Tâm',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 13,
        name: 'Trương Thanh Tùng',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 14,
        name: 'Tạ Đức Chiến',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 16,
        name: 'Ngô Chung Á Âu',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 17,
        name: 'Trần Thị Khánh Linh',
        group: {
            groupId:2,
            position: 'leader'
        }
    },
    {
        id: 18,
        name: 'Phan Tiến Thành',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 19,
        name: 'Đỗ Văn Huy',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 20,
        name: 'Nguyễn Trung Đức',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 21,
        name: 'Nguyễn Trung Nam',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 22,
        name: 'Trần Quốc Toàn',
        group: {
            groupId:5,
            position: ''
        }
    }
];
//Bài 22
// ramdom list function
var list22 = listStudent.map((x) => x);
function getRandom(n) {
    return list22.sort(() => 0.5 - Math.random()).slice(0,n);
}
var randomList21 = getRandom(3).map(function(st){
    return st.name;
});
console.log('Bài 22',randomList21);

// Bài 23
var list23 = listStudent.map((x) => x);
function getNameofGroup(s) {
    return list23.filter(st => st.group.groupId === s);
}
console.log('Bài 23', getNameofGroup(3));
// Bài 24
var list24 = listStudent.map((x) => x);
function addPoint(stId, day, point){
    if(list24[stId-1].hasOwnProperty("points") === false){
        list24[stId-1].points = [];
        list24[stId-1].points.push({
            dayId : day,
            dayName : "Thứ " + day,
            point : point,
        })
    } else {
        list24[stId-1].points.push({
            dayId : day,
            dayName : "Thứ " + day,
            point : point,
        })
    }
}

//Bài 25
dayArr = [2,3,4,5,6,7]
list24.map((e)=>{
    dayArr.map((i) =>{
        addPoint(e.id,i,Math.floor(Math.random() * 10));
    })
})
console.log('Bài 24, 25',list24)

//Bài 26
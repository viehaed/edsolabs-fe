// bài tập 1

var listStudent = [
    {
        stt: 1,
        name: "Nguyễn Văn Sơn",
        group: 1,
        leader: false
    },
    {
        stt: 2,
        name: "Nguyễn Hữu Ánh",
        group: 1,
        leader: false
    },
    {
        stt: 3,
        name: "Trần Mạnh Quân",
        group: 4,
        leader: true
    },
    {
        stt: 4,
        name: "Hà Quốc Tuấn",
        group: 3,
        leader: true
    },
    {
        stt: 5,
        name: "Hoàng Ngọc Thành",
        group: 1,
        leader: false
    },
    {
        stt: 6,
        name: "Vũ Thị Thu hà",
        group: 2,
        leader: false
    },
    {
        stt: 7,
        name: "Phan Văn Trung",
        group: 2,
        leader: false
    },
    {
        stt: 8,
        name: "Nguyên Cao Hoàng",
        group: 2,
        leader: false
    },

    {
        stt: 9,
        name: "Phùng Đắc Nhật Minh",
        group: 5,
        leader: true
    },
    {
        stt: 10,
        name: "Lê Việt Dũng",
        group: 1,
        leader: true
    },
    {
        stt: 11,
        name: "Đỗ Chí Công",
        group: 2,
        leader: false
    },
    {
        stt: 12,
        name: "Trần Công Tâm",
        group: 3,
        leader: false
    },
    {
        stt: 13,
        name: "Trương Thanh Tùng",
        group: 3,
        leader: false
    },
    {
        stt: 14,
        name: "Tạ Đưc Chiến",
        group: 4,
        leader: false
    },
    {
        stt: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: 3,
        leader: false
    },
    {
        stt: 16,
        name: "Ngô Chúng Á Âu",
        group: 4,
        leader: false
    },
    {
        stt: 17,
        name: "Trần Thị Khánh Linh",
        group: 2,
        leader: true
    },
    {
        stt: 18,
        name: "Phan Tiến Thành",
        group: 4,
        leader: false
    },
    {
        stt: 19,
        name: "Đỗ Văn Huy",
        group: 4,
        leader: false
    },
    {
        stt: 20,
        name: "Nguyễn Trung Đức",
        group: 5,
        leader: false
    },
    {
        stt: 21,
        name: "Nguyễn Trung Nam",
        group: 5,
        leader: false
    },
    {
        stt: 22,
        name: "Trần Quốc Toàn",
        group: 5,
        leader: false
    },
]

// bài 2

let listStudentOb = {
    member: listStudent
}

//  bài 3

const countmember = listStudent.length;
const countLeader = listStudent.filter((person) => person.leader === true).length;
const countGroup = new Set(listStudent.map((person) => person.group)).size;

//bài 4
const countmemberOb = listStudentOb.member.length;
const countLeaderOb = listStudentOb.member.filter((person) => person.leader === true).length;

// bài 5

// xóa ở mảng chính

// listStudent.shift()

// xóa ở mạng tạo
const deleteFirst = listStudent.filter((person) => person.stt != 1);
// console.log(deleteFirst);

// bài 6

// xóa ở mảng chính

// listStudent.splice(6,1)

// xóa ở mạng tạo
const deleteSeventh = listStudent.filter((person) => person.stt != 7);
// console.log(deleteFirst);

// bài 7

const nameNinth = listStudent.find((item) => (item.stt == 9)).name;
// console.log(nameNinth);

// bài 8

const sttLeadergroup2 = listStudent.find((item) => (item.group == 2 && item.leader == true)).stt
// console.log(sttLeadergroup2);

// bài 9

listStudent.sort((a, b) => a.name.localeCompare(b.name))
// console.log(listStudent);

// bài 10

const listName = listStudent.map((item) => {
    const namearr = item.name.split(" ");
    return namearr[namearr.length - 1];
})
// console.log(listName);

// bài 11
listName.sort((a, b) => a.localeCompare(b))
// console.log(listStudent);
// console.log(listName);

// bài 12

const nameNoLoop = [...new Set(listName)]
console.log(nameNoLoop);


// bài 13

// const countLoops = nameNoLoop.map((name) => {
//     return {
//         name,
//         countLoop: listName.filter((item) => item === name).length
//     }
// })

// const maxValue = Math.max(...countLoops.map((item) => item.countLoop))
// const memberMaxLoop = countLoops.filter((item) => item.countLoop === maxValue);
// console.log(memberMaxLoop);


let output = [];
let valueArr = [];
let newArrName = [];
let maxName = [];
let checkNum = [];
for (let i = 0; i < listName.length; i++) {
    if (output.includes(listName[i]) === false) {
        output.push(listName[i])
    }
}

for (let i = 0; i < output.length; i++) {
    let dem = 0;
    for (let j = 0; j < listName.length; j++) {
        if (output[i] === listName[j]) {
            dem++;
        }
    }
    if (dem > 1) {
        newArrName.push(output[i])
    }
    valueArr.push({
        name: output[i],
        so: dem
    });
    checkNum.push(dem)
}

// bài 14
let listFiveStudentFisrt = listStudent.slice(0, 5);
listFiveStudentFisrt = listFiveStudentFisrt.concat(listStudent.slice(listStudent.length - 5))
// console.log(listFiveStudentFisrt);


// bài 15
let list5 = [];
let listName15 = [];
for (let i = 0; i < 5; i++) {
    list5.push(listStudent[i].name.split(" "));
}
for (let i = 0; i < list5.length; i++) {
    listName15.push(list5[i][list5[i].length - 1]);
}
const listEX15 = listName15.sort((a, b) => a.localeCompare(b));



// bài 16
// console.log(listStudent);
let divisibleBy3 = [];
listStudentOb.member.forEach(element => {
    if(element.stt % 3==0){
        divisibleBy3.push(element)
    }
});

// console.log(divisibleBy3);
  
// bài 17

let checkLead = 0;
for (let i = 0; i < 5; i++) {
    if (listStudent[i].leader == true) {
        checkLead++;
    }
}
if (checkLead > 0) {
    console.log("5 bạn đầu tiên có bạn là trưởng nhóm")
} else {
    console.log("5 bạn đầu tiên không bạn nào làm trưởng nhóm")
}

// bài 18

let checkLeader = 0;
for (let i = 0; i < 5; i++) {
    if (listStudent[i].leader == false) {
        checkLeader++;
    }
}
if (checkLeader > 0) {
    console.log("trong nhóm có " + checkLeader + " là không thể làm leader!")
}

// bài 19

let stName = [];
for (let i = 0; i < listStudent.length; i++) {
    stName.push(listStudent[i].name.split(" "))
}
let newName = [];
for (let i = 0; i < stName.length; i++) {
    newName.push(stName[i][stName[i].length - 1])
}
for (let i = 0; i < listStudent.length; i++) {
    listStudent[i].ma = newName[i] + "_" + listStudent[i].id + "_" + listStudent[i].teamNumber
}


// bài 20
listStudent.reverse()
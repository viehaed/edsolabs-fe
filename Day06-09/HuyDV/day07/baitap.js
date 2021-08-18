// bài tập 1

var listStudent = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: 1,
        leader: "member"
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: 1,
        leader: "member"
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: 4,
        leader: "leader"
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: 3,
        leader: "leader"
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: 1,
        leader: "member"
    },
    {
        id: 6,
        name: "Vũ Thị Thu hà",
        group: 2,
        leader: "member"
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: 2,
        leader: "member"
    },
    {
        id: 8,
        name: "Nguyên Cao Hoàng",
        group: 2,
        leader: "member"
    },

    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: 5,
        leader: "leader"
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: 1,
        leader: "leader"
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: 2,
        leader: "member"
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: 3,
        leader: "member"
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: 3,
        leader: "member"
    },
    {
        id: 14,
        name: "Tạ Đưc Chiến",
        group: 4,
        leader: "member"
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: 3,
        leader: "member"
    },
    {
        id: 16,
        name: "Ngô Chúng Á Âu",
        group: 4,
        leader: "member"
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: 2,
        leader: "leader"
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: 4,
        leader: "member"
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: 4,
        leader: "member"
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        group: 5,
        leader: "member"
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: 5,
        leader: "member"
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: 5,
        leader: "member"
    },
]

// bài 2

let listStudentOb = {
    member: listStudent
}

//  bài 3

const countmember = listStudent.length;
const countLeader = listStudent.filter((person) => person.leader === "leader").length;
const countGroup = new Set(listStudent.map((person) => person.group)).size;
//bài 4
const countmemberOb = listStudentOb.member.length;
const countLeaderOb = listStudentOb.member.filter((person) => person.leader === "leader").length;

// bài 5

// xóa ở mảng chính

// listStudent.shift()

// xóa ở mạng tạo
const deleteFirst = listStudent.filter((person) => person.id != 1);
// console.log(deleteFirst);

// bài 6

// xóa ở mảng chính

// listStudent.splice(6,1)

// xóa ở mạng tạo
const deleteSeventh = listStudent.filter((person) => person.id != 7);
// console.log(deleteFirst);

// bài 7

const nameNinth = listStudent.find((item) => (item.id == 9)).name;
// console.log(nameNinth);

// bài 8

const idLeadergroup2 = listStudent.find((item) => (item.group == 2 && item.leader === "leader")).id
// console.log(idLeadergroup2);

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
// console.log(listName);

// bài 12

const nameNoLoop = [...new Set(listName)]


// bài 13

const countLoops = listName.map((name) => {
    return {
        name,
        countLoop: listName.filter((item) => item === name).length
    }
}).sort((a,b) => b.countLoop - a.countLoop);
// console.log(countLoops);

const maxValue = countLoops[0].countLoop
const memberMaxLoop = countLoops.filter((item) => item.countLoop === maxValue).map((item)=> item.name);
const Result = new Set(memberMaxLoop)
// console.log(Result);


// bài 14 - a
let listFiveStudentFisrt = listStudent.slice(0, 5);
let listFivePushStart = listFiveStudentFisrt;
listFivePushStart = listFivePushStart.concat(listStudent.slice(listStudent.length - 5))
// console.log(listFiveStudentFisrt);
// bài 14 - b
let listFivePushEnd = listFiveStudentFisrt;

listFivePushEnd = listStudent.slice(5-10).concat(listFivePushEnd)
// console.log(listFivePushEnd);

// bài 15
let listFiveStudentFisrtEX1 =  listStudent.slice(0, 5);
listFiveStudentFisrtEX1.sort((a, b) => {
    const nameOfA = a.name.split(" ").pop();
    const nameOfB = b.name.split(" ").pop();
    return nameOfA.localeCompare(nameOfB);
});

// console.log(listFiveStudentFisrtEX1);


// bài 16
const divisibleBy3 = listStudentOb.member.filter(item => item.id % 3 == 0);
// console.log(divisibleBy3);

// bài 17
let listFiveMemberFirst = listStudent.slice(0, 5)
let checkerleaderSome = listFiveMemberFirst.some((item) =>
    item.leader === "leader"
)
// console.log(checkerleaderSome);
// bài 18

let checkerleaderEvery = listFiveMemberFirst.every((item) =>
    item.leader === "leader"
)
// console.log(checkerleaderEvery);
// bài 19
let listEditName = listStudent.map((item) => {
    let LastName = item.name.split(" ").pop();
    return {
        newName: `${LastName}_${item.id}_${item.group}`
    }
});
// console.log(listEditName);

// bài 20
listStudent.reverse()
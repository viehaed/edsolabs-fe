import Data from "./liststudent.json"
var listStudent = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        teamNumber: 1,
        position: "member"
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        teamNumber: 1,
        position: "member"
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        teamNumber: 4,
        position: "leader"
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        teamNumber: 3,
        position: "leader"
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        teamNumber: 1,
        position: "member"
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        teamNumber: 2,
        position: "member"
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        teamNumber: 2,
        position: "member"
    },
    {
        id: 8,
        name: "Nguyên Cao Hoàng",
        teamNumber: 2,
        position: "member"
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        teamNumber: 5,
        position: "leader"
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        teamNumber: 1,
        position: "leader"
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        teamNumber: 2,
        position: "member"
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        teamNumber: 3,
        position: "member"
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        teamNumber: 3,
        position: "member"
    },
    {
        id: 14,
        name: "Tạ Đưc Chiến",
        teamNumber: 3,
        position: "member"
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        teamNumber: 3,
        position: "member"
    },
    {
        id: 16,
        name: "Ngô Chúng Á Âu",
        teamNumber: 4,
        position: "member"
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        teamNumber: 2,
        position: "leader"
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        teamNumber: 4,
        position: "member"
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        teamNumber: 4,
        position: "member"
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        teamNumber: 5,
        position: "member"
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        teamNumber: 5,
        position: "member"
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        teamNumber: 5,
        position: "member"
    }
]

//BÀI 31:
console.log("BÀI 31");
function getName() {
    return listStudent.map(item => {

        let newItem = item.name.split(" ")
        return newItem[newItem.length - 1];
    })
}
console.log(getName());
//BÀI 32
console.log("BÀI 32");
function bai32() {
    let dataName = getName();
    return dataName.join(" ")
}
console.log(bai32());
//BÀI 33
console.log("BÀI 33");
function convertArray() {
    let dataName = bai32();
    return dataName.split(" ");
}
console.log(convertArray());
//BÀI 34
console.log("BÀI 34");
function findKey(name) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => item.includes(name)).length
}
console.log(`Lop co ${findKey("Thành")} bạn tên là Thành`);
//BÀI 35
console.log("BÀI 35");
function findFirstKey(name) {
    let dataName = bai32()
    return dataName.split(" ").indexOf(name) + 1
}
console.log(`Đứng thứ : ${findFirstKey("Ánh")} từ đầu mảng`);
//BÀI 36
console.log("BÀI 36");
function findLastKey(name) {
    let dataName = bai32()
    return dataName.split(" ").lastIndexOf(name) + 1
}
console.log(`Đứng thứ : ${findLastKey("Sơn")} từ cuối mảng`);
//BÀI 37
console.log("BÀI 37");
function FindName(key) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.startsWith(key.toLowerCase())
    }).length
}
console.log(`Trong lớp có : ${FindName("t")} bạn`);
//BÀI 38
console.log("BÀI 38");
function bai38(a, b) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.startsWith(a.toLowerCase()) && item.endsWith(b.toLowerCase())
    }).length
}
console.log(`Lớp có ${bai38("t", "h")} bạn`);
//BÀI 39
console.log("BÀI 39");
function bai39(key) {
    let dataName = bai32()
    return dataName.split(" ").filter(item => {
        item = item.toLowerCase();
        return item.includes(key.toLowerCase())
    }).join(", ")

}
console.log(bai39("ng"));
//BÀI 40
console.log("BÀI 40");
//cách1
function bai40cach1() {
    let dataName = getName();
    return dataName.map((item, index) => {
        if (index === 0) {
            return `Bạn ${item}`
        } else if (index === dataName.length - 1) {
            return `Cuối cùng là bạn ${item}`
        } else {
            return `tiếp theo là bạn ${item}`
        }
    }).join(", ")
}
console.log(bai40cach1());
//cách2
console.log("CÁCH 2");
function bai40cach2() {
    let newListStudent = getName()
    let add = newListStudent.map(el => {
        let a = "bạn tiếp theo là "
        return a.concat(el)
    })
    add[0] = "Bạn " + newListStudent[0]
    add[add.length - 1] = ` cuối cùng là bạn ${newListStudent[newListStudent.length - 1]}`
    return add.join(", ")
}

console.log(bai40cach2())
//BÀI 41
console.log("BÀI 41");
function bai41() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        return `Đội ${index +1} gồm :[${item.trim()}],`
    }).join("")
}
console.log(bai41());
//BÀI 42
console.log("BÀI 42");
function bai42() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        let team = item.trim().split(" ");
        team.push("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    }).join(" ")
}
console.log(bai42());
//BÀI 43
console.log("BÀI 43");
function bai43() {
    let dataName = bai32();
    return dataName.split("Thành").map((item, index) => {
        let team = item.trim().split(" ");
        team.unshift("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    }).join(" ")
}
console.log(bai43());
//BÀI 44 
console.log("BÀI 44");
function bai44() {
    let dataName = bai32();
    return dataName.repeat(2)
}
console.log(bai44());
//BÀI45
console.log("BÀI 45")

function bai45() {
    let newListStudent = bai32()
    return newListStudent.replaceAll("Dũng", "Tuấn")
}
console.log(bai45())

console.log(Data)
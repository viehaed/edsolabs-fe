var arrStudentEdsoLabs = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: {
            groupId: 1,
            positon: 0
        },
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: {
            groupId: 1,
            positon: 0
        }
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: {
            groupId: 4,
            positon: 1
        }
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: {
            groupId: 3,
            positon: 1
        }
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: {
            groupId: 1,
            positon: 0
        }
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: {
            groupId: 5,
            positon: 1
        }
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: {
            groupId: 1,
            positon: 1
        }
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: {
            groupId: 3,
            positon: 0
        }
    },

    {
        id: 14,
        name: "Tạ Đức Chiến",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: {
            groupId: 2,
            positon: 1
        }
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 20,
        name: "Nguyễn Trung Duc",
        group: {
            groupId: 5,
            positon: 0
        }
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: {
            groupId: 5,
            positon: 0
        }
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: {
            groupId: 5,
            positon: 0
        }
    }
];

// bài 31
function arrLastName() {
    return arrStudentEdsoLabs.map(ele => ele.name.split(" ").slice(-1).toString())
}

// bài 32
function convertToString() {
    return arrLastName().join("_")
}

// bài 33
function reverseString() {
    return convertToString().split("_")
}

// bài 34
function countName(name) {
    let count = 0;
    let arrName = convertToString().split("_");
    for (let i = 0; i < arrName.length; i++) {
        if (name == arrName[i]) {
            count++;
        }
    }
    return count
}

// bài 35
function searchName(name) {
    for (let i = 0; i < reverseString().length; i++) {
        if (name == reverseString()[i]) {
            return i + 1
        }
    }
}

// bài 36
function findLastName(name) {
    let checkName = reverseString().lastIndexOf(name);
    return checkName
}

// bài 37
function findCountName(charA) {
    return reverseString().filter((ele) => {
        ele = ele.trim().toUpperCase().startsWith(charA.toUpperCase());
        return ele
    }).length

}

// bài 38
function countFirstLastName(firstChar, lastChar) {
    return reverseString().filter((ele) => {
        ele = ele.toUpperCase();
        return ele.startsWith(firstChar.toUpperCase()) && ele.endsWith(lastChar.toUpperCase())
    }).length
}

// bài 39 
function findSearchCharNam(charA) {
    return reverseString().filter(ele => {
        ele = ele.toUpperCase();
        return ele.includes(charA.toUpperCase())
    }).length
}

// bài 40
function concatString() {
    let x = arrLastName().map((e) => {
        let a = "tiếp theo là bạn ";
        return a.concat(e);
    });
    x[0] = "Bạn " + arrLastName()[0];
    x[x.length - 1] = ` cuối cùng là bạn ${arrLastName()[arrLastName().length - 1]}`;
    return x.join(", ");
}

// bài 41
let divideGroup = reverseString().join(",");

function divide_Group() {
    return divideGroup.split("Thành")
        .map((e, index) => `Đội ${index + 1} gồm :[${e}],`);
}

// bài 42
let groupName = reverseString().join(",");

function groupDivideName() {
    return groupName.split("Thành").map((e, index) => {
        let team = e.trim().split(" ");
        team.push("Thành");
        console.log(team);
        return `Đội ${index + 1} gồm :[${team.join(", ")}],`
    });
}

// bài 43
function groupDivideFirst() {

    return groupName.split("Thành").map((e, index) => {
        let team = e.trim().split(" ");
        team.unshift("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    })
}

// bài 44
function doubleString() {
    return groupName.repeat(2)
}

// bài 45
function replateName() {
    return groupName.replaceAll("Dũng", "Tuấn")
}
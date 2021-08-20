// data
const data = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        groupId: 1,
        position: "member",
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        groupId: 1,
        position: "member",
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        groupId: 4,
        position: "monitor",
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        groupId: 3,
        position: "monitor",
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        groupId: 1,
        position: "member",
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        groupId: 2,
        position: "member",
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        groupId: 2,
        position: "member",
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        groupId: 2,
        position: "member",
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        groupId: 5,
        position: "monitor",
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        groupId: 1,
        position: "monitor",
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        groupId: 2,
        position: "member",
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        groupId: 3,
        position: "member",
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        groupId: 3,
        position: "member",
    },
    {
        id: 14,
        name: "Tạ Đức Chiến",
        groupId: 3,
        position: "member",
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        groupId: 3,
        position: "member",
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        groupId: 4,
        position: "member",
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        groupId: 2,
        position: "monitor",
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        groupId: 4,
        position: "member",
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        groupId: 4,
        position: "member",
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        groupId: 5,
        position: "member",
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        groupId: 5,
        position: "member",
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        groupId: 5,
        position: "member",
    },
];

// bài 31
const getListName = () => {
    const listName = data.map(item => item.name.split(" ").pop());
    return listName;
}
// console.log(getListName);


// bài 32
const convertToString = () => {
    const newString = getListName().toString();
    return newString;
}

//  
// console.log(newString);

// bài 33
const convertToArray = () => {
    const backArr = convertToString().split(",");
    return backArr;
}

// console.log(convertToArray());

// bài 34

const getNameBy = (a) => {
    const arr = convertToString().split(",");
    const count = arr.filter(item => item == a).length;
    return count;
}
// console.log(getNameBy("Thành"));

// bài 35 
const searchNameByFirst = (name) => {
    const arr = convertToString().split(",");
    const index = arr.indexOf(name);
    return index + 1;
}
// console.log(searchNameByFirst("Thành"));

// bài 36
const searchNameByLast = (name) => {
    let arr = convertToString().split(",");
    arr = arr.reverse()
    const index = arr.indexOf(name);
    return arr.length - (index);
}
// console.log(searchNameByLast("Thành"));

// bài 37
const getNameByKey = (key) => {
    const searchKey = key.toLowerCase();
    const arr = convertToString().split(",");
    const count = arr.filter(item => item.charAt(0).toLowerCase() == searchKey).length;
    return count;
}
// console.log(getNameByKey("A"));


// bài 38
const getNameByKeyAB = (keyA, KeyB) => {
    const searchKeyA = keyA.toLowerCase();
    const searchKeyB = KeyB.toLowerCase();
    const arr = convertToString().split(",");
    const count = arr.filter(item => item.charAt(0).toLowerCase() == searchKeyA).filter(item => item.charAt(item.length - 1).toLowerCase() == searchKeyB).length;
    return count;
}
// console.log(getNameByKeyAB("Á","H"));

// bài 39
const searchNameKey = (key) => {
    const searchKey = key.toLowerCase();
    const arr = convertToString().split(",");
    const count = arr.filter(item => item.toLowerCase().includes(searchKey)).length;
    return count;
}
// console.log(searchNameKey("H"));

// Bài 40

const connectString = () => {
    const newArr = getListName().map(item => {
        return "Bạn ".concat(item)
    });
    const newStr = newArr.toString()
    return newStr;
}

// console.log(connectString());

// bài 41
const createGroups = () => {
    return convertToString().split(`Thành`);
};
// console.log(createGroups());

//Bai 42
const groupsEndWithThanh = () => {

    return convertToString().split(/(?<=Thành),?/)
       
};
// console.log(groupsEndWithThanh());
//Bai 43
const groupsStartWithThanh = () => {
    return convertToString().split(/,?(?=Thành)/)
};
// console.log(groupsStartWithThanh());

// bài 42
const concatString = () => {
    return convertToString().concat(",", convertToString());
}
// console.log(concatString());


// bài 45
const switchName = () => {
    return convertToString().replaceAll("Dũng", "Tuấn");
}
// console.log(switchName());




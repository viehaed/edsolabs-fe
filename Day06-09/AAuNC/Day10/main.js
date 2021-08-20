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
    }
];

//Bài 31
console.log("Bài 31");

function getListName(){
    return data.map(item => {
        let name = item.name.split(" ");
        return name[name.length-1];
    })
}

const arrName = getListName();
console.log(arrName);

//Bài 32
console.log("Bài 32")

function convertToString() {
    return arrName.toString()
}
const stringArrName = convertToString();
console.log(stringArrName);

//Bài 33
console.log("Bài 33")

function convertToArray() {
    return stringArrName.split(",");
}
let arrayNameFromString = convertToArray();
console.log(arrayNameFromString);

//Bài 34
console.log("Bài 34")

function countName(name) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0);
}
console.log(countName("Thành"));

//Bài 35
console.log("Bài 35")

function getNameFirst(name) {
    let newArr = data.filter(item => {
        let newArrName = item.name.split(" ");
        if(newArrName[newArrName.length-1].trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0) return item;
    });

    return newArr[0].id;
}

console.log(getNameFirst("Thành"))

//Bài 36
console.log("Bài 36")

function getNameLast(name) {
    let newArr = data.filter(item => {
        let newArrName = item.name.split(" ");
        if(newArrName[newArrName.length-1].trim().toUpperCase().localeCompare(name.trim().toUpperCase()) == 0) return item;
    });

    return newArr[newArr.length-1].id;
}

console.log("Vị trí: "+getNameLast("Thành"))

//Bài 37
console.log("Bài 37")

function countNameWithStart(start) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().startsWith(start.trim().toUpperCase())).length;
}

console.log("Số người: "+countNameWithStart("T"));

//Bài 38
console.log("Bài 38")

function countNameWithStartEnd(start, end) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().startsWith(start.trim().toUpperCase()) 
                && item.trim().toUpperCase().endsWith(end.trim().toUpperCase())).length;
}

console.log("Số người: "+countNameWithStartEnd("t", "h"));

//Bài 39
console.log("Bài 39")

function countNameIncludeKey(key) {
    return stringArrName.split(",")
        .filter(item => item.trim().toUpperCase().includes(key.trim().toUpperCase())).length;
}
console.log("Số người: "+countNameIncludeKey("n"));

//Bài 40
console.log("Bài 40")

function makeString() {
    let newArr = stringArrName.split(",").map(item => (" tiếp theo là bạn ").concat(item));
    newArr[0] = newArr[0].replace(" tiếp theo là bạn", "Bạn");
    newArr[newArr.length-1] = newArr[newArr.length-1].replace("tiếp theo", "cuối cùng");
    return newArr.toString();
}

console.log(makeString())

//Bài 41
console.log("Bài 41")
function GroupNotName(name) {
  let arrGroup = [];
  for (let str of stringArrName.split(name)) {
      if(str[str.length-1] == ",") {
        str = str.slice(0, str.length-1)
      }
      if(str[0] == ",") {
        str = str.slice(1, str.length)
      }
      arrGroup.push(str);
  }
  return arrGroup;
}
console.log(GroupNotName("Thành"))


// Bài 42
console.log("Bài 42")
function groupEndName(name) {
  let newStringArrname = stringArrName.replaceAll(name, name+"@@")
  let arrGroup = [];
  for (let str of newStringArrname.split("@@")) {
      if(str[str.length-1] == ",") {
        str = str.slice(0, str.length-1)
      }
      if(str[0] == ",") {
        str = str.slice(1, str.length)
      }
      arrGroup.push(str);
  }
  return arrGroup;
}

console.log(groupEndName("Thành"))

// Bài 43
console.log("Bài 43")
function groupEndName(name) {
    let newStringArrname = stringArrName.replaceAll(name, "@@"+name)
    let arrGroup = [];
    for (let str of newStringArrname.split("@@")) {
        if(str[str.length-1] == ",") {
            str = str.slice(0, str.length-1)
        }
        if(str[0] == ",") {
            str = str.slice(1, str.length)
        }
        arrGroup.push(str);
    }
    return arrGroup;
}

console.log(groupEndName("Thành"))

// Bài 44
console.log("Bài 44")
function doubleString() {
  return stringArrName.concat(stringArrName)
}
console.log(doubleString())

// Bài 45
console.log("Bài 45")
function replaceName() {
  return stringArrName.replaceAll("Dũng","Tuấn")
}
console.log(replaceName())





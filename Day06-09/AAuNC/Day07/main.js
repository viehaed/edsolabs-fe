
//Bài 1
console.log("BÀI 1")
const arr = [
    {
      id: 1,
      name: "Nguyễn Văn Sơn",
      group: 1,
      role: 0,
    },
    {
      id: 2,
      name: "Nguyễn Hữu Ánh",
      group: 1,
      role: 0,
    },
    {
      id: 3,
      name: "Trần Mạnh Quân",
      group: 4,
      role: 1,
    },
    {
      id: 4,
      name: "Hà Quốc Tuấn",
      group: 3,
      role: 1,
    },
    {
      id: 5,
      name: "Hoàng Ngọc Thành",
      group: 1,
      role: 0,
    },
    {
      id: 6,
      name: "Vũ Thị Thu Hà",
      group: 2,
      role: 0,
    },
    {
      id: 7,
      name: "Phan Văn Trung",
      group: 2,
      role: 0,
    },
    {
      id: 8,
      name: "Nguyễn Cao Hoàng",
      group: 2,
      role: 0,
    },
    {
      id: 9,
      name: "Phùng Đắc Nhật Minh",
      group: 5,
      role: 1,
    },
    {
      id: 10,
      name: "Lê Việt Dũng",
      group: 1,
      role: 1,
    },
    {
      id: 11,
      name: "Đỗ Chí Công",
      group: 2,
      role: 0,
    },
    {
      id: 12,
      name: "Trần Công Tâm",
      group: 3,
      role: 0,
    },
    {
      id: 13,
      name: "Trương Thanh Tùng",
      group: 3,
      role: 0,
    },
    {
      id: 14,
      name: "Tạ Đức Chiến",
      group: 3,
      role: 0,
    },
    {
      id: 15,
      name: "Nguyễn Trọng Vĩnh",
      group: 3,
      role: 0,
    },
    {
      id: 16,
      name: "Ngô Chung Á Âu",
      group: 4,
      role: 0,
    },
    {
      id: 17,
      name: "Trần Thị Khánh Linh",
      group: 2,
      role: 1,
    },
    {
      id: 18,
      name: "Phan Tiến Thành",
      group: 4,
      role: 0,
    },
    {
      id: 19,
      name: "Đỗ Văn Huy",
      group: 4,
      role: 0,
    },
    {
      id: 20,
      name: "Nguyễn Trung Đức",
      group: 5,
      role: 0,
    },
    {
      id: 21,
      name: "Nguyễn Trung Nam",
      group: 5,
      role: 0,
    },
    {
      id: 22,
      name: "Trần Quốc Toàn",
      group: 5,
      role: 0,
    },
  ];

console.log(arr);

//Bài 2
console.log("BÀI 2")
const obj = Object.assign({},arr);
console.log(obj);

//Bài 3
console.log("BÀI 3")
console.log("Số học viên: "+arr.length);
var arrLeader = arr.filter((arrItem) => arrItem.role == 1);
console.log("Số nhóm trưởng: "+arrLeader.length);
var arrGroup = new Set(arr.map((arrItem) => arrItem.group));
console.log("Số nhóm: "+arrGroup.size)

//Bài 4
console.log("BÀI 4")
console.log("Số học viên: "+ Object.keys(obj).length);
var arrLeader = Object.values(obj).filter((arrItem) => arrItem.role == 1);
console.log("Số nhóm trưởng: "+arrLeader.length);


//Bài 5
console.log("BÀI 5")
var newArr = arr.slice();
newArr.shift();
console.log(newArr)

//Bài 6
console.log("BÀI 6")
var newArr = arr.slice();
newArr.splice(6,1)
console.log(newArr);

//Bài 7
console.log("BÀI 7")
console.log("Tên học sinh thứ 9: "+ arr[8].name);

//Bài 8
console.log("BÀI 8")
var leadOfGroup2 = arr.find((arrItem) => (arrItem.group == 2 && arrItem.role == 1)).id;
console.log("STT của nhóm trưởng nhóm 2: "+leadOfGroup2)

//Bài 9
console.log("BÀI 9")
var newArr = arr.slice();
newArr.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    else if (a.name > b.name)
        return 1;
    else return 0;
})
console.log(newArr)

//Bài 10
console.log("BÀI 10")
const arrName = arr.map((arrItem) => {
    let item = arrItem.name.split(" ");
    return item[item.length-1]
})
console.log(arrName)

//Bài 11
console.log("BÀI 11")
var newArr = arrName.slice();
newArr.sort((a, b) => {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else return 0;
});
console.log(newArr)

//Bài 12
console.log("BÀI 12")
console.log([...new Set(arrName)]);

//Bài 13
console.log("BÀI 13")
var newArr = arrName.slice();

newArr = newArr.map((arrItem) =>({
    Name: arrItem,
    Count: newArr.filter((item) => item == arrItem).length,
})).sort((a, b) => {
    if (a.Count > b.Count)
        return -1;
    else if (a.Count < b.Count)
        return 1;
    else return 0;
});

let max = newArr[0].Count;
newArr = newArr.filter((item) => item.Count == max).map((item) => item.Name);

console.log(new Set(newArr))

//Bài 14
console.log("BÀI 14")
var newArr = arr.slice(0, 5), arrAdd = arr.slice(5, 9);
console.log(arrAdd.concat(newArr))

//Bài 15
console.log("BÀI 15")
var newArr = arr.slice(0, 5);
newArr.sort((a, b) => Math.random() - 0.5);
console.log(newArr)

//Bài 16
console.log("BÀI 16")
var newObj = Object.values(obj).filter((objItem) => objItem.id%3 == 0);
console.log(newObj);

//Bài 17
console.log("BÀI 17")
var newArr = arr.slice(0, 5);
newArr = newArr.find((arrItem) => arrItem.role == 1);

newArr.length != 0 ? console.log("Có nhóm trưởng") : console.log("Không có nhóm trưởng")

//Bài 18
console.log("BÀI 18")
var newArr = arr.slice(0, 5);
newArr = newArr.find((arrItem) => arrItem.role == 0);

newArr.length != 0 ? console.log("Có ít hơn 5 người là nhóm trưởng") : console.log("5 học viên đầu đều là nhóm trưởng")

//Bài 19
console.log("BÀI 19")
var newArr = arr.slice();
newArr = newArr.map((arrItem) => {
    return arrItem.id+"_"+arrItem.name+"_"+arrItem.group
})
console.log(newArr)

//Bài 20
console.log("BÀI 20")
console.log(arr.reverse());
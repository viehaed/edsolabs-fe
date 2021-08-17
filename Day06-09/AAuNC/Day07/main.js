
//Bài 1
console.log("BÀI 1")
const arr = [
    [1, "Nguyễn Văn Sơn", 1, 0],
    [2, "Nguyễn Hữu Ánh", 1, 0],
    [3, "Trần Mạnh Quân", 4, 1],
    [4, "Hà Quốc Tuấn", 3, 1],
    [5, "Hoàng Ngọc Thành", 1, 0],
    [6, "Vũ Thị Thu Hà", 2, 0],
    [7, "Phan Văn Trung", 2, 0],
    [8, "Nguyễn Cao Hoàng", 2, 0],
    [9, "Phùng Đắc Nhật Minh", 5, 1],
    [10, "Lê Việt Dũng", 1, 1],
    [11, "Đỗ Chí Công", 2, 0],
    [12, "Trần Công Tâm", 3, 0],
    [13, "Trương Thanh Tùng", 3, 0],
    [14, "Tạ Đức Chiến", 3, 0],
    [15, "Nguyễn Trọng Vĩnh", 3, 0],
    [16, "Ngô Chung Á Âu", 4, 0],
    [17, "Trần Thị Khánh Linh", 2, 1],
    [18, "Phan Tiến Thành", 4, 0],
    [19, "Đỗ Văn Huy", 4, 0],
    [20, "Nguyễn Trung Đức", 5, 0],
    [21, "Nguyễn Trung Nam", 5, 0],
    [22, "Trần Quốc Toàn", 5, 0]
];

console.log(arr);

//Bài 2
console.log("BÀI 2")
const obj = Object.assign({},arr);
console.log(obj);

//Bài 3
console.log("BÀI 3")
console.log("Số học viên: "+arr.length);
var numGroup = 0, numMonitor = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i][3] == 1) ++numMonitor;
}
console.log("Số nhóm trưởng: "+numMonitor);

var numGroup = 1, newArr = [];
for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i][2]); 
}

for(var i = 0; i < newArr.sort().length-1; i++){
    if(newArr[i] != newArr[i+1]) ++numGroup; 
}
console.log("Số nhóm: "+numGroup);

//Bài 4
console.log("BÀI 4")
console.log("Số học viên: "+ Object.keys(obj).length);
var numMonitor = 0, numGroup = 1;
for (var i in obj) {
    if(obj[i][3] == 1) ++numMonitor;
}
console.log("Số nhóm trưởng: "+numMonitor);


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
console.log("Tên học sinh thứ 9: "+ arr[8][1]);

//Bài 8
console.log("BÀI 8")
for(var i = 0; i < arr.length; i++){
    if(arr[i][2] == 2 &&  arr[i][3] == 1) console.log("STT nhóm trưởng nhóm 2: "+(i+1));
}

//Bài 9
console.log("BÀI 9")
var newArr = arr.slice();
newArr.sort(function (a, b){
    if (a[1] < b[1])
        return -1;
    else if (a[1] > b[1])
        return 1;
    else    return 0;
})
console.log(newArr)

//Bài 10
console.log("BÀI 10")
var nameArr = arr.slice();
for(var i = 0; i < nameArr.length; i++){
     var a = nameArr[i][1].split(" ");
    nameArr[i] = a[a.length-1];
}
console.log(nameArr);

//Bài 11
console.log("BÀI 11")
var newArr = nameArr.slice();
newArr.sort();
console.log(newArr)

//Bài 12
console.log("BÀI 12")
var newArr = nameArr.slice(), arrDifference = [];
newArr.sort();
arrDifference.push(newArr[0])
for(var i = 1; i < newArr.length; i++){
    if(newArr[i] != newArr[i-1]) arrDifference.push(newArr[i]);
}
console.log(arrDifference);

//Bài 13
console.log("BÀI 13")
var newArr = nameArr.slice(), arr13 = arrDifference.slice(), ArrayName = [];
for(var i = 0; i < arr13.length; i++){
    var count = 0
    for (let j = 0; j < newArr.length; j++) {
        if(arr13[i] == newArr[j]) ++count;
    }
    ArrayName.push({Name: arr13[i], numb: count})
}

var max = 0;
for (let i = 1; i < ArrayName.length; i++) {
    if(ArrayName[max].numb < ArrayName[i].numb) max = i;
}

var finalArr = []
for(let j = 0; j < ArrayName.length; j++) {
    if(ArrayName[max].numb == ArrayName[j].numb) finalArr.push(ArrayName[j])
}
console.log(finalArr);


//Bài 14
console.log("BÀI 14.a")
var newArr = arr.slice(0, 5);
for(let i = 0; i < 5; i++){
    newArr.push(arr[newArr.length+1]);
}
console.log(newArr)

//Bài 14
console.log("BÀI 14.b")
var newArr = arr.slice(0, 5);
for(let i = 0; i < 5; i++){
    newArr.unshift(arr[newArr.length+1]);
}
console.log(newArr)

//Bài 15
console.log("BÀI 15")
var newArr = arr.slice(0, 5);
newArr.sort((a, b) => {
    const nameA = a[1].split(" ").pop();
    const nameB = b[1].split(" ").pop();
    return nameA.localeCompare(nameB);
});
console.log(newArr)

//Bài 16
console.log("BÀI 16")
var newObj = {}, j = -1;
for (var i in obj) {
    if (obj[i][0]%3 === 0) {
        ++j;
        newObj[j] = obj[i];
    }
}

console.log(newObj);

//Bài 17
console.log("BÀI 17")
var newArr = arr.slice(0, 5), res;
for(let i = 0; i < 5; i++){
    if(newArr[i][3] == 1) {
        res = true
        break;
    }
}

if(res) console.log("Có nhóm trưởng")
else console.log("Không có nhóm trưởng")

//Bài 18
console.log("BÀI 18")
var newArr = arr.slice(0, 5), res;
for(let i = 0; i < 5; i++){
    if(newArr[i][3] == 0) {
        res = false
        break;
    }
}

if(res) console.log("5 học viên đầu đều là nhóm trưởng")
else console.log("có ít hơn 5 người là nhóm trưởng")

//Bài 19
console.log("BÀI 19")
var newArr = arr.slice(), codeArr = [];
for (let j = 0; j < newArr.length; j++) {
   codeArr[j] = newArr[j][0]+"_"+newArr[j][1]+"_"+newArr[j][2];
}
console.log(codeArr)

//Bài 20
console.log("BÀI 20")
console.log(arr.reverse());
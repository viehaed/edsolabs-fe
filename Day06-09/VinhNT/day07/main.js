console.log("Bài tập 1")
const array = [
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
    [22, "Trần Quốc Toàn", 5, 0],
]
console.log(array);

console.log("Bài tập 2");
const data = {
    "no01" : {stt: 1,ten: "Nguyễn Văn Sơn",nhom: 1,nhomtruong: 0},
    "no02" : {stt: 2,ten: "Nguyễn Hữu Ánh",nhom: 1,nhomtruong: 0},
    "no03" : {stt: 3,ten: "Trần Mạnh Quân",nhom: 4,nhomtruong: 1},
    "no04" : {stt: 4,ten: "Hà Quốc Tuấn",nhom: 3,nhomtruong: 1},
    "no05" : {stt: 5,ten: "Hoàng Ngọc Thành",nhom: 1,nhomtruong: 0},
    "no06" : {stt: 6,ten: "Vũ Thị Thu Hà",nhom: 2,nhomtruong: 0},
    "no07" : {stt: 7,ten: "Phan Văn Trung",nhom: 2,nhomtruong: 0},
    "no08" : {stt: 8,ten: "Nguyễn Cao Hoàng",nhom: 2,nhomtruong: 0},
    "no09" : {stt: 9,ten: "Phùng Đắc Nhật Minh",nhom: 5,nhomtruong: 1},
    "no10" : {stt: 10,ten: "Lê Việt Dũng",nhom: 1,nhomtruong: 1},
    "no11" : {stt: 11,ten: "Đỗ Chí Công",nhom: 2,nhomtruong: 0},
    "no12" : {stt: 12,ten: "Trần Công Tâm",nhom: 3,nhomtruong: 0},
    "no13" : {stt: 13,ten: "Trương Thanh Tùng",nhom: 3,nhomtruong: 0},
    "no14" : {stt: 14,ten: "Tạ Đức Chiến",nhom: 3,nhomtruong: 0},
    "no15" : {stt: 15,ten: "Nguyễn Trọng Vĩnh",nhom: 3,nhomtruong: 0},
    "no16" : {stt: 16,ten: "Ngô Chung Á Âu",nhom: 4,nhomtruong: 0},
    "no17" : {stt: 17,ten: "Trần Thị Khánh Linh",nhom: 2,nhomtruong: 1},
    "no18" : {stt: 18,ten: "Phan Tiến Thành",nhom: 4,nhomtruong: 0},
    "no19" : {stt: 19,ten: "Đỗ Văn Huy",nhom: 4,nhomtruong: 0},
    "no20" : {stt: 20,ten: "Nguyễn Trung Đức",nhom: 5,nhomtruong: 0},
    "no21" : {stt: 21,ten: "Nguyễn Trung Nam",nhom: 5,nhomtruong: 0},
    "no22" : {stt: 22,ten: "Trần Quốc Toàn",nhom: 5,nhomtruong: 0},
}
console.log(data);

console.log("Bài tập 3")
let stuNum = array.length;
console.log("Số lượng học sinh trong lớp là "+stuNum);
let leadNum = 0;
for (let i = 0; i<stuNum; i++){
    if(array[i][3] == 1) leadNum++
}
console.log("Số lượng nhóm trưởng là " + leadNum);
console.log("Số lượng nhóm là " + leadNum);

console.log("Bài tập 4");
console.log("số thành viên trong lớp là "+ data[Object.keys(data)[Object.keys(data).length - 1]].stt)
let leadNumber = 0;
for (const property in data){
    if(data[property].nhomtruong == 1) leadNumber++
}
console.log("số lượng nhóm trưởng là " +leadNum);

console.log("Bài tập 5");
const array5 = array.map((x) => x);
array5.shift();
console.log(array5)

console.log("Bài tập 6");
const array6 = array.map((x) => x);
array6.splice(6,1);
console.log(array6);

console.log("Bài tập 7");
console.log("Tên của học viên có số thứ tự thứ 9 là "+array[8][1])

console.log("Bài tập 8")
for (let i = 0; i<stuNum; i++){
    if((array[i][2] == 2) && (array[i][3] == 1)) 
        console.log("Số thứ tự nhóm trưởng nhóm 2 là "+array[i][0])
}

console.log("Bài tập 9")
const array9 = array.map((x) => x);
array9.sort(function(a,b){
    var aFullName = a[1].split(" ");
    var bFullName = b[1].split(" ");
    aFirstName = aFullName[aFullName.length - 1];
    bFirstName = bFullName[bFullName.length - 1];
    return aFirstName.localeCompare(bFirstName)
});
console.log(array9)

console.log("Bài tập 10")
const nameArr =[];
for (let i = 0; i<array.length; i++){
    var fullName = array[i][1].split(" ");
    var lastName = fullName[fullName.length -1];
    nameArr.push(lastName);
}
console.log("Mảng chứa tên các thành viên trong lớp là "+nameArr +" ");

console.log("Bài tập 11")
const nameArr1 = nameArr.map((x) => x);
nameArr1.sort(function(a,b){
    return a.localeCompare(b);
})
console.log(nameArr1)

console.log("Bài tập 12")
const nameArr2 = nameArr.map((x) => x);
const uniqueNames = nameArr2.filter((x, i, a) => a.indexOf(x) == i)
console.log(uniqueNames)

console.log("Bài tập 13")
const nameArr3 = nameArr.map((x) => x);
const duplicateName = nameArr3.filter((x,i,a) => a.indexOf(x) !== i)
console.log(duplicateName);

console.log("Bài tập 14 a")
const array14a = array.slice(0,5)
console.log("Danh sách 5 bạn đầu tiên")
console.log(array14a)
array14a.push(
    [10, "Lê Việt Dũng", 1, 1],
    [11, "Đỗ Chí Công", 2, 0],
    [12, "Trần Công Tâm", 3, 0],
    [13, "Trương Thanh Tùng", 3, 0],
    [14, "Tạ Đức Chiến", 3, 0],
)
console.log("Danh sách sau khi thêm 5 bạn vào cuối")
console.log(array14a)

console.log("Bài tập 14 b")
const array14b = array.slice(0,5)
console.log("Danh sách 5 bạn đầu tiên")
console.log(array14b)
array14b.unshift(
    [10, "Lê Việt Dũng", 1, 1],
    [11, "Đỗ Chí Công", 2, 0],
    [12, "Trần Công Tâm", 3, 0],
    [13, "Trương Thanh Tùng", 3, 0],
    [14, "Tạ Đức Chiến", 3, 0],
)
console.log("Danh sách sau khi thêm 5 bạn vào đầu")
console.log(array14b)

console.log("Bài tập 15")
const array15 = array.slice(0,5)
array15.sort(function(a,b){
    var aFullName = a[1].split(" ");
    var bFullName = b[1].split(" ");
    aFirstName = aFullName[aFullName.length - 1];
    bFirstName = bFullName[bFullName.length - 1];
    return aFirstName.localeCompare(bFirstName)
});
console.log(array15)

console.log("Bài tập 16")
for(const property in data){
    if(data[property].stt % 3 == 0) console.log(data[property])
}

console.log("Bài tập 17")
const array17 = array.slice(0,5)
for (let i = 0; i<array17.length; i++){
    if(array[i][3] == 1){
        console.log("Có bạn làm nhóm trưởng trong ̀5 bạn đầu tiên");
        break;
    }
}

console.log("Bài tập 18")
const array18 = array.slice(0,5)
for (const ele of array18){
    if(ele[3] == 1){
        console.log("Bạn số "+ele[0]+" là nhóm trưởng")
    }else{
        console.log("Bạn số "+ele[0]+" không là nhóm trưởng")
    }
}

console.log("Bài tập 19")
for (const ele of array){
    // var id = (ele[1].concat(ele[0])).concat(ele[2])
    var id = ele[1].concat("_").concat(ele[0]).concat("_").concat(ele[2])
    console.log("Mã học viên của học viên số "+ele[0]+ " là "+id)
}

console.log("Bài tập 20")
console.log(array.reverse())

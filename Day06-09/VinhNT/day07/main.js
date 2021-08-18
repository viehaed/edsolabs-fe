console.log("Bài tập 1")
const array = [
    {id: 1,name: "Nguyễn Văn Sơn",group: 1,lead: 0}, 
    {id:2,name: "Nguyễn Hữu Ánh",group: 1,lead: 0},
    {id: 3,name: "Trần Mạnh Quân",group: 4,lead: 1},
    {id:4,name: "Hà Quốc Tuấn",group: 3,lead: 1},
    {id: 5,name: "Hoàng Ngọc Thành",group: 1,lead: 0},
    {id: 6,name: "Vũ Thị Thu Hà",group: 2,lead: 0},
    {id: 7,name: "Phan Văn Trung",group: 2,lead: 0},
    {id: 8,name: "Nguyễn Cao Hoàng",group: 2,lead: 0},
    {id: 9,name: "Phùng Đắc Nhật Minh",group: 5,lead: 1},
    {id: 10,name: "Lê Việt Dũng",group: 1,lead: 1},
    {id: 11,name: "Đỗ Chí Công",group: 2,lead: 0},
    {id: 12,name: "Trần Công Tâm",group: 3,lead: 0},
    {id: 13,name: "Trương Thanh Tùng",group: 3,lead: 0},
    {id: 14,name: "Tạ Đức Chiến",group: 3,lead: 0},
    {id: 15,name: "Nguyễn Trọng Vĩnh",group: 3,lead: 0},
    {id: 16,name: "Ngô Chung Á Âu",group: 4,lead: 0},
    {id: 17,name: "Trần Thị Khánh Linh",group: 2,lead: 1},
    {id: 18,name: "Phan Tiến Thành",group: 4,lead: 0},
    {id: 19,name: "Đỗ Văn Huy",group: 4,lead: 0},
    {id: 20,name: "Nguyễn Trung Đức",group: 5,lead: 0},
    {id: 21,name: "Nguyễn Trung Nam",group: 5,lead: 0},
    {id: 22,name: "Trần Quốc Toàn",group: 5,lead: 0},
]
console.log(array);

console.log("Bài tập 2");
const data = {
    "no01" : {id: 1,name: "Nguyễn Văn Sơn",group: 1,lead: 0},
    "no02" : {id: 2,name: "Nguyễn Hữu Ánh",group: 1,lead: 0},
    "no03" : {id: 3,name: "Trần Mạnh Quân",group: 4,lead: 1},
    "no04" : {id: 4,name: "Hà Quốc Tuấn",group: 3,lead: 1},
    "no05" : {id: 5,name: "Hoàng Ngọc Thành",group: 1,lead: 0},
    "no06" : {id: 6,name: "Vũ Thị Thu Hà",group: 2,lead: 0},
    "no07" : {id: 7,name: "Phan Văn Trung",group: 2,lead: 0},
    "no08" : {id: 8,name: "Nguyễn Cao Hoàng",group: 2,lead: 0},
    "no09" : {id: 9,name: "Phùng Đắc Nhật Minh",group: 5,lead: 1},
    "no10" : {id: 10,name: "Lê Việt Dũng",group: 1,lead: 1},
    "no11" : {id: 11,name: "Đỗ Chí Công",group: 2,lead: 0},
    "no12" : {id: 12,name: "Trần Công Tâm",group: 3,lead: 0},
    "no13" : {id: 13,name: "Trương Thanh Tùng",group: 3,lead: 0},
    "no14" : {id: 14,name: "Tạ Đức Chiến",group: 3,lead: 0},
    "no15" : {id: 15,name: "Nguyễn Trọng Vĩnh",group: 3,lead: 0},
    "no16" : {id: 16,name: "Ngô Chung Á Âu",group: 4,lead: 0},
    "no17" : {id: 17,name: "Trần Thị Khánh Linh",group: 2,lead: 1},
    "no18" : {id: 18,name: "Phan Tiến Thành",group: 4,lead: 0},
    "no19" : {id: 19,name: "Đỗ Văn Huy",group: 4,lead: 0},
    "no20" : {id: 20,name: "Nguyễn Trung Đức",group: 5,lead: 0},
    "no21" : {id: 21,name: "Nguyễn Trung Nam",group: 5,lead: 0},
    "no22" : {id: 22,name: "Trần Quốc Toàn",group: 5,lead: 0},
}
console.log(data);

console.log("Bài tập 3")
let stuNum = array.length;
console.log("Số lượng học sinh trong lớp là "+stuNum);
let leadNum = 0;
leadNum = array.filter((e) => e.lead === 1).length
console.log("Số lượng nhóm trưởng là " + leadNum);
console.log("Số lượng nhóm là " + leadNum);

console.log("Bài tập 4");
console.log("số thành viên trong lớp là "+ data[Object.keys(data)[Object.keys(data).length - 1]].id)
console.log("số lượng nhóm trưởng là "+(Object.values(data).filter((e) => e.lead === 1)).length)

console.log("Bài tập 5");
const array5 = array.map((x) => x);
array5.shift();
console.log(array5)

console.log("Bài tập 6");
const array6 = array.map((x) => x);
array6.splice(6,1);
console.log(array6);

console.log("Bài tập 7");
console.log("Tên của học viên có số thứ tự thứ 9 là "+array[8].name)

console.log("Bài tập 8")
var lead2 = array.filter((e) => e.group===2 && e.lead===1)
console.log("STT của nhóm trưởng nhóm 2 là "+lead2[0].id)

console.log("Bài tập 9")
const array9 = array.map((x) => x);
array9.sort(function(a,b){
    var aFullName = a.name.split(" ");
    var bFullName = b.name.split(" ");
    aFirstName = aFullName[aFullName.length - 1];
    bFirstName = bFullName[bFullName.length - 1];
    return aFirstName.localeCompare(bFirstName)
});
console.log(array9)

console.log("Bài tập 10")
const nameArr =[];
array.map((e) => {
    e = e.name.split(" ");
    var lastName = e[e.length -1];
    nameArr.push(lastName)
})
console.log("Mảng chứa tên các thành viên trong lớp là "+nameArr +" ");

console.log("Bài tập 11")
const nameArr1 = nameArr.map((x) => x);
nameArr1.sort(function(a,b){
    return a.localeCompare(b);
})
console.log(nameArr1)

console.log("Bài tập 12")
const nameArr2 = nameArr.map((x) => x);
const uniqueNames = new Set(nameArr2)
console.log(uniqueNames)

console.log("Bài tập 13")
const nameArr3 = nameArr.map((x) => x);
const countNames = nameArr3
  .map((o) => ({
    name: o,
    count: nameArr3.filter((e) => e == o).length,
  }))
  .sort((a, b) => b.count - a.count);
const maxCount = countNames[0].count;
const nameMaxCount = countNames
  .filter((o) => o.count == maxCount)
  .map((o) => o.name);
const duplicateName = new Set(nameMaxCount);
console.log(duplicateName);

console.log("Bài tập 14 a")
const array14a = array.slice(0,5)
console.log("Danh sách 5 bạn đầu tiên")
console.log(array14a)
array14a.push(
    {id: 10,name: "Lê Việt Dũng",group: 1,lead: 1},
    {id: 11,name: "Đỗ Chí Công",group: 2,lead: 0},
    {id: 12,name: "Trần Công Tâm",group: 3,lead: 0},
    {id: 13,name: "Trương Thanh Tùng",group: 3,lead: 0},
    {id: 14,name: "Tạ Đức Chiến",group: 3,lead: 0},
)
console.log("Danh sách sau khi thêm 5 bạn vào cuối")
console.log(array14a)

console.log("Bài tập 14 b")
const array14b = array.slice(0,5)
console.log("Danh sách 5 bạn đầu tiên")
console.log(array14b)
array14b.unshift(
    {id: 10,name: "Lê Việt Dũng",group: 1,lead: 1},
    {id: 11,name: "Đỗ Chí Công",group: 2,lead: 0},
    {id: 12,name: "Trần Công Tâm",group: 3,lead: 0},
    {id: 13,name: "Trương Thanh Tùng",group: 3,lead: 0},
    {id: 14,name: "Tạ Đức Chiến",group: 3,lead: 0},
)
console.log("Danh sách sau khi thêm 5 bạn vào đầu")
console.log(array14b)

console.log("Bài tập 15")
const array15 = array.slice(0,5)
array15.sort(function(a,b){
    var aFullName = a.name.split(" ");
    var bFullName = b.name.split(" ");
    aFirstName = aFullName[aFullName.length - 1];
    bFirstName = bFullName[bFullName.length - 1];
    return aFirstName.localeCompare(bFirstName)
});
console.log(array15)

console.log("Bài tập 16")
console.log(Object.values(data).filter((e) => e.id %3 === 0))


console.log("Bài tập 17")
const array17 = array.slice(0,5)
console.log("Trong 5 bạn có người làm nhóm trưởng là " + array17.some((e) => e.lead=== 1))

console.log("Bài tập 18")
const array18 = array.slice(0,5)
console.log("Cả 5 bạn đều làm nhóm trưởng là "+array18.every((e) => e.lead === 1))

console.log("Bài tập 19")
console.log(array.map((e) => e.name.concat("_").concat(e.id).concat("_").concat(e.group)))

console.log("Bài tập 20")
console.log(array.reverse())

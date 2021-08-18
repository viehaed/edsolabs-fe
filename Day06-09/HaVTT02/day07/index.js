
//Bài 1
var List =[
    {"id": 1, "name": "Nguyễn Văn Sơn", "group" : 1, "position":""}, 
    {"id": 2, "name": "Nguyễn Hữu Ánh", "group" : 1, "position":""},
    {"id": 3, "name": "Trần Mạnh Quân", "group" : 4, "position":"Nhóm trưởng"},
    {"id": 4, "name": " Hà Quốc Tuấn", "group" : 3, "position":"Nhóm trưởng"},
    {"id": 5, "name": "Hoàng Ngọc Thành", "group" : 1, "position":""},
    {"id": 6, "name": "Vũ Thị Thu Hà", "group" : 2, "position":""},
    {"id": 7, "name": "Phan Văn Trung", "group" : 2, "position":""},
    {"id": 8, "name": "Nguyễn Cao Hoàng", "group" : 2, "position":""},
    {"id": 9, "name": "Phùng Đắc Nhật Minh", "group" : 5, "position":"Nhóm trưởng"},
    {"id": 10, "name": "Lê Việt Dũng", "group" : 1, "position":"Nhóm trưởng"},
    {"id": 11, "name": "Đỗ Chí Công", "group" : 2, "position":""},
    {"id": 12, "name": "Trần Công Tâm", "group" : 3, "position":""},
    {"id": 13, "name": "Trương Thanh Tùng", "group" : 3, "position":""},
    {"id": 14, "name": "Tạ Đức Chiến", "group" : 3, "position":""},
    {"id": 15, "name": "Nguyễn Trọng Vĩnh", "group" : 3, "position":""},
    {"id": 16, "name": "Ngô Chung Á Âu", "group" : 4, "position":""},
    {"id": 17, "name": "Trần Thị Khánh Linh", "group" : 2, "position":"Nhóm trưởng"},
    {"id": 18, "name": "Phan Tiến Thành", "group" : 4, "position":""},
    {"id": 19, "name": "Đỗ Văn Huy", "group" : 4, "position":""},
    {"id": 20, "name": "Nguyễn Trung Đức", "group" : 5, "position":""},
    {"id": 21, "name": "Nguyễn Trung Nam", "group" : 5, "position":""},
    {"id": 22, "name": "Trần Quốc Toàn", "group" : 5, "position":""}
]
function showList(){
    for (i = 0; i < List.length; i++){
        document.write(
        `<tr>
            <td class="id">${List[i].id}</th>
            <td>${List[i].name}</th>
            <td class="group">${List[i].group}</th>
            <td>${List[i].position}</th>
        </tr>`
        );
    }
}
console.log(List)

//Bài 2
var danhsach = Object.assign({}, List);
console.log(danhsach);

//Bài 3
console.log('Số học viên là', List.length);

var vtlt = List.filter(function(vtlt) {
    return vtlt.position === "Lớp trưởng";
})
console.log('Số lớp trưởng là', vtlt.length)

var vtnt = List.filter(function(vtnt) {
    return vtnt.position === 'Nhóm trưởng';
})
console.log('Số nhóm trưởng là', vtnt.length)

//Bài 4
// Dựa theo bài 2
var demHV = Object.values(danhsach).length;
console.log('Số học viên là', demHV)
var demNT = Object.values(danhsach).filter(
  (list) => list.position
).length;
console.log('Số nhóm trưởng là', demNT)


//Bài 5
console.log('Xóa học viên đầu tiên', List.shift()); 

//Bài 6
//console.log('Xóa học viên số 7', List.splice(6,1));
var del7 = List.filter(l => l.id != 7);
console.log('Xóa học viên số 7', del7);

//Bài 7
//Lấy tên hv có STT 9
var stt9 = List.find(l => l.id == 9).name;
console.log('Tên hv có STT 9 là', stt9);

//Bài 8
//STT nhóm trưởng nhóm 2
var sttTN2 = List.find(l => l.group === 2 && l.position).id
console.log('STT nhóm trưởng nhóm 2 là', sttTN2);

//Bài 9
// Sắp xếp tăng dần a -> z
var sorted = List.sort((a, b) => (a.name).localeCompare(b.name));
console.log(sorted);


//Bài 10
//Chỉ lấy tên
var listName = List.map(({ name }) => {
    var lastName = name.split(" ");
    return lastName[lastName.length - 1];
  });
console.log('Tên học viên', listName);

//Bài 11
// Sắp xếp tên tăng dần a -> z
var sx = listName.sort((a, b) => a.localeCompare(b));
console.log(sx);

//Bài 12
// Lấy list tên k trùng
var list = [...new Set(listName)];
console.log('DS tên k trùng', list)

//Bài 13
// Lấy tên max


//Bài 14
// Lấy ds 5 hv đầu
var list = List.slice(0, 5);
for (let i = 0; i < 5; i++) {
  list.unshift(List[list.length + i]);
}
console.log('Danh sách 5 hv đầu', list);


//Bài 15
//Tráo đổi 5 hv đầu thứ tự theo tên
var list = List.slice(0, 5);
list.sort((a, b) => {
    var nameA = a.name.split(" ").pop();
    var nameB = b.name.split(" ").pop();
    return nameA.localeCompare(nameB);
});
console.log(list);

//Bài 16
// Dựa theo bài 2, lấy ds có stt : hết 3
var chia = List.filter(l => l.id % 3 === 0);
console.log('Các hv có STT chia hết 3', chia);

//Bài 17
// tìm trong 5 hv đầu có nhóm trưởng k
var list = List.slice(0, 5);
var nt = list.findIndex(l => l.position) === -1 ? false : true;
if(nt) console.log("Trong 5 hv đầu có nhóm trưởng")
else console.log("Trong 5 hv đầu không có nhóm trưởng")

//Bài 18
// trong 5 hv đầu có đk lm nhóm trưởng k
var list = List.slice(0, 5);
var nt = list.findIndex(l => l.position === false) === -1 ? true : false;
if(nt) console.log("Trong 5 hv đầu có làm được nhóm trưởng")
else console.log("Trong 5 hv đầu không làm được nhóm trưởng")

//Bài 19
// mã hv : Ten_stt_so nhom
var ma = List.map(({ id, name, group }) => {
    return `${name.split(" ").pop()}_${id}_${group}`;
});
console.log(ma);

//Bài 20
// đảo ngược danh sách
console.log(List.reverse());
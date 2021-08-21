
//Bài 1
var List =[
    {"STT": 1, "ten": "Nguyễn Văn Sơn", "sonhom" : 1, "vitri":""}, 
    {"STT": 2, "ten": "Nguyễn Hữu Ánh", "sonhom" : 1, "vitri":""},
    {"STT": 3, "ten": "Trần Mạnh Quân", "sonhom" : 4, "vitri":"Nhóm trưởng"},
    {"STT": 4, "ten": " Hà Quốc Tuấn", "sonhom" : 3, "vitri":"Nhóm trưởng"},
    {"STT": 5, "ten": "Hoàng Ngọc Thành", "sonhom" : 1, "vitri":""},
    {"STT": 6, "ten": "Vũ Thị Thu Hà", "sonhom" : 2, "vitri":""},
    {"STT": 7, "ten": "Phan Văn Trung", "sonhom" : 2, "vitri":""},
    {"STT": 8, "ten": "Nguyễn Cao Hoàng", "sonhom" : 2, "vitri":""},
    {"STT": 9, "ten": "Phùng Đắc Nhật Minh", "sonhom" : 5, "vitri":"Nhóm trưởng"},
    {"STT": 10, "ten": "Lê Việt Dũng", "sonhom" : 1, "vitri":"Nhóm trưởng"},
    {"STT": 11, "ten": "Đỗ Chí Công", "sonhom" : 2, "vitri":""},
    {"STT": 12, "ten": "Trần Công Tâm", "sonhom" : 3, "vitri":""},
    {"STT": 13, "ten": "Trương Thanh Tùng", "sonhom" : 3, "vitri":""},
    {"STT": 14, "ten": "Tạ Đức Chiến", "sonhom" : 3, "vitri":""},
    {"STT": 15, "ten": "Nguyễn Trọng Vĩnh", "sonhom" : 3, "vitri":""},
    {"STT": 16, "ten": "Ngô Chung Á Âu", "sonhom" : 4, "vitri":""},
    {"STT": 17, "ten": "Trần Thị Khánh Linh", "sonhom" : 2, "vitri":"Nhóm trưởng"},
    {"STT": 18, "ten": "Phan Tiến Thành", "sonhom" : 4, "vitri":""},
    {"STT": 19, "ten": "Đỗ Văn Huy", "sonhom" : 4, "vitri":""},
    {"STT": 20, "ten": "Nguyễn Trung Đức", "sonhom" : 5, "vitri":""},
    {"STT": 21, "ten": "Nguyễn Trung Nam", "sonhom" : 5, "vitri":""},
    {"STT": 22, "ten": "Trần Quốc Toàn", "sonhom" : 5, "vitri":""}
]
function showList(){
    for (i = 0; i < List.length; i++){
        document.write(
        `<tr>
            <td class="STT">${List[i].STT}</th>
            <td>${List[i].ten}</th>
            <td class="sonhom">${List[i].sonhom}</th>
            <td>${List[i].vitri}</th>
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
    return vtlt.vitri === "Lớp trưởng";
})
console.log('Số lớp trưởng là', vtlt.length)

var vtnt = List.filter(function(vtnt) {
    return vtnt.vitri === 'Nhóm trưởng';
})
console.log('Số nhóm trưởng là', vtnt.length)

//Bài 4
// Dựa theo bài 2
var demHV = Object.values(danhsach).length;
console.log('Số học viên là', demHV)
var demNT = Object.values(danhsach).filter(
  (ds) => ds.vitri
).length;
console.log('Số nhóm trưởng là', demNT)


//Bài 5
console.log('Xóa học viên đầu tiên', List.shift()); 

//Bài 6
//console.log('Xóa học viên số 7', List.splice(6,1));
var del7 = List.filter(l => l.STT != 7);
console.log('Xóa học viên số 7', del7);

//Bài 7
//Lấy tên hv có STT 9
var stt9 = List.find(l => l.STT == 9).ten;
console.log('Tên hv có STT 9 là', stt9);

//Bài 8
//STT nhóm trưởng nhóm 2
var sttTN2 = List.find(l => l.sonhom === 2 && l.vitri).STT
console.log('STT nhóm trưởng nhóm 2 là', sttTN2);

//Bài 9
// Sắp xếp tăng dần a -> z
var sorted = List.sort((a, b) => (a.ten).localeCompare(b.ten));
console.log(sorted);


//Bài 10
//Chỉ lấy tên
var dsTen = List.map(({ ten }) => {
    const name = ten.split(" ");
    return name[name.length - 1];
  });
console.log('Tên học viên', dsTen);

//Bài 11
// Sắp xếp tên tăng dần a -> z
var sx = dsTen.sort((a, b) => a.localeCompare(b));
console.log(sx);

//Bài 12
// Lấy ds tên k trùng
var ds = [...new Set(dsTen)];
console.log('DS tên k trùng', ds)

//Bài 13
// Lấy tên max


//Bài 14
// Lấy ds 5 hv đầu
var ds = List.slice(0, 5);
for (let i = 0; i < 5; i++) {
  ds.unshift(List[ds.length + i]);
}
console.log('Danh sách 5 hv đầu', ds);


//Bài 15
//Tráo đổi 5 hv đầu thứ tự theo tên
var ds = List.slice(0, 5);
ds.sort((a, b) => {
    var tenA = a.ten.split(" ").pop();
    var tenB = b.ten.split(" ").pop();
    return tenA.localeCompare(tenB);
});
console.log(ds);

//Bài 16
// Dựa theo bài 2, lấy ds có stt : hết 3
var chia = List.filter(l => l.STT % 3 === 0);
console.log('Các hv có STT chia hết 3', chia);

//Bài 17
// tìm trong 5 hv đầu có nhóm trưởng k
var ds = List.slice(0, 5);
var nt = ds.findIndex(l => l.vitri) === -1 ? false : true;
if(nt) console.log("Trong 5 hv đầu có nhóm trưởng")
else console.log("Trong 5 hv đầu không có nhóm trưởng")

//Bài 18
// trong 5 hv đầu có đk lm nhóm trưởng k
var ds = List.slice(0, 5);
var nt = ds.findIndex(l => l.vitri === false) === -1 ? true : false;
if(nt) console.log("Trong 5 hv đầu có làm được nhóm trưởng")
else console.log("Trong 5 hv đầu không làm được nhóm trưởng")

//Bài 19
// mã hv : Ten_stt_so nhom
var ma = List.map(({ STT, ten, sonhom }) => {
    return `${ten.split(" ").pop()}_${STT}_${sonhom}`;
});
console.log(ma);

//Bài 20
// đảo ngược danh sách
console.log(List.reverse());
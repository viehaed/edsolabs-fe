"use strict"

// lấy 1 số ví dụ
var listHocVien = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 3,
        name: "Trần Mạnh Quân",
        group: {
            groupId: 4,
            position: "leader"
        }
      },
      {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: {
            groupId: 3,
            position: "leader"
        }
      },
      {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: {
            groupId: 1,
            position: "member"
        }
      },
      {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 7,
        name: "Phan Văn Trung",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 8,
        name: "Nguyên Cao Hoàng",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: {
            groupId: 5,
            position: "leader"
        }
      },
      {
        id: 10,
        name: "Lê Việt Dũng",
        group: {
            groupId: 1,
            position: "leader"
        }
      },
      {
        id: 11,
        name: "Đỗ Chí Công",
        group: {
            groupId: 2,
            position: "member"
        }
      },
      {
        id: 12,
        name: "Trần Công Tâm",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 13,
        name: "Trương Thanh Tùng",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 14,
        name: "Tạ Đưc Chiến",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: {
            groupId: 3,
            position: "member"
        }
      },
      {
        id: 16,
        name: "Ngô Chúng Á Âu",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: {
            groupId: 2,
            position: "leader"
        }
      },
      {
        id: 18,
        name: "Phan Tiến Thành",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 19,
        name: "Đỗ Văn Huy",
        group: {
            groupId: 4,
            position: "member"
        }
      },
      {
        id: 20,
        name: "Nguyễn Trung Đức",
        group: {
            groupId: 5,
            position: "member"
        }
      },
      {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: {
            groupId: 5,
            position: "member"
        }
      },
      {
        id: 22,
        name: "Trần Quốc Toàn",
        group: {
            groupId: 5,
            position: "member"
        }
      },
]

// Bài 31
console.log("---------------------------------------")
console.log("Bài 31")
let list31 = cloneArr(listHocVien);
list31 = list31.map((o) => layTuCuoi(o.name))
console.log(list31)


// Bài 32
console.log("---------------------------------------")
console.log("Bài 32")
let strNameHocVien = list31.join("")
console.log(strNameHocVien)

// Bài 33
console.log("---------------------------------------")
console.log("Bài 33")
let list311 = strNameHocVien.split(",")
console.log(list311)


// Bài 34
console.log("---------------------------------------")
console.log("Bài 34")
function countName(x){
  return strNameHocVien.split(x).length-1
}
console.log(countName("Chiến"))

// Bài 35
console.log("---------------------------------------")
console.log("Bài 35")
function findNameFirst(x) {
  return strNameHocVien.split(", ").indexOf(x) + 1;
}
console.log(findNameFirst("Thành"))

// Bài 36
console.log("---------------------------------------")
console.log("Bài 36")
function findNameLast(x) {
  // let vitri = strNameHocVien.lastIndexOf(x)
  // let dem = 1;
  // if (vitri != -1) {
  //   for (let i = 1; i < vitri; i++) {
  //     if (strNameHocVien[i]===",") {
  //       dem++;
  //     }
  //   }
  // } else dem = "Không có trong lớp"
  // return dem;
  return strNameHocVien.split(", ").lastIndexOf(x) + 1;
}
console.log(findNameLast("Thành"))


// Bài 37
console.log("---------------------------------------")
console.log("Bài 37")
function findStartName(x) {
  let d = 0;
  for (const key in list31) {
    let t = list31[key].trim().toUpperCase();
    let x1 = x.toUpperCase()
    if (t.startsWith(x1)) d++
  }
  if (d) {
    return d;
  } else return "Không có giá trị phù hợp"
}
console.log(findStartName("T"))

// Bài 38
console.log("---------------------------------------")
console.log("Bài 38")
function findStartLastName(x,y) {
  let d = 0;
  for (const key in list31) {
    let t = list31[key].trim().toUpperCase();
    let x1 = x.toUpperCase()
    let y1 = y.toUpperCase()
    if (t.startsWith(x1) && t.endsWith(y1)) d++
  }
  if (d) {
    return d;
  } else return "Không có giá trị phù hợp"
}
console.log(findStartLastName("C","n"))

// Bài 39
console.log("---------------------------------------")
console.log("Bài 39")
function countAllName(x) {
  let d = 0;
  for (const key in list31) {
    let t = list31[key].trim().toUpperCase();
    let x1 = x.toUpperCase()
    if (t.indexOf(x1) != -1) {
      d++
    }
  }
  if (d) {
    return d;
  } else return "Không có giá trị phù hợp"
}
console.log(countAllName("c"))

// Bài 40
console.log("---------------------------------------")
console.log("Bài 40")
function ghepChuoi() {
  let str = "";
  for (const key in list31) {
    if (key == 0) {
      str += `Bạn ${list31[key]}, `
    } else if (key == list31.length - 1) {
      str += `cuối cùng là bạn ${list31[key]}`
    } else str += `tiếp theo là bạn ${list31[key]}, `
  }
  return str;
}
console.log(ghepChuoi())

// Bài 41
console.log("---------------------------------------")
console.log("Bài 41")
function chiaTeam() {
  let team = strNameHocVien.split("Thành")
  return team
}
console.log(chiaTeam())


// Bài 42
console.log("---------------------------------------")
console.log("Bài 42")
function chiaTeanKieu2() {
  let str = strNameHocVien.replaceAll("Thành","Thành vtCat")
  let team = str.split("vtCat")
  return team
}

console.log(chiaTeanKieu2())

// Bài 43
console.log("---------------------------------------")
console.log("Bài 43")
function chiaTeanKieu3() {
  let str = strNameHocVien.replaceAll("Thành","vtCat Thành")
  let team = str.split("vtCat")
  return team
}
console.log(chiaTeanKieu3())

// Bài 44
console.log("---------------------------------------")
console.log("Bài 44")
function x2List() {
  return strNameHocVien + strNameHocVien
}
console.log(x2List())

// Bài 45
console.log("---------------------------------------")
console.log("Bài 45")
function thayDung() {
  return strNameHocVien.replaceAll("Dũng","Tuấn")
}
console.log(thayDung())

// Tách chuỗi theo kiểU lấy phần tử cuối
function layTuCuoi(str) {
  var i = str.lastIndexOf(" ");
  return str.slice(i, str.length);
}

// Clone Array
function cloneArr(list) {
  return JSON.parse(JSON.stringify(list)); 
}

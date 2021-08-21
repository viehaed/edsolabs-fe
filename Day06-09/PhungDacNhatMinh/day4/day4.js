// bài 31
console.log("------bài 31");
let arrStudentEdsoLabs = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    group: {
      position: "Thành viên",
      groupId: "1",
    },
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    group: {
      position: "Thành viên",
      groupId: "1",
    },
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    group: {
      position: "Trưởng nhóm",
      groupId: "4",
    },
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    group: {
      position: "Trưởng nhóm",
      groupId: "3",
    },
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    group: {
      position: "Thành viên",
      groupId: "1",
    },
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: {
      position: "Thành viên",
      groupId: "2",
    },
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    group: {
      position: "Thành viên",
      groupId: "2",
    },
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: {
      position: "Thành viên",
      groupId: "2",
    },
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: {
      position: "Trưởng nhóm",
      groupId: "5",
    },
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    group: {
      position: "Trưởng nhóm",
      groupId: "1",
    },
  },
  {
    id: 11,
    name: "Đỗ Chí Dũng",
    group: {
      position: "Thành viên",
      groupId: "2",
    },
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    group: {
      position: "Thành viên",
      groupId: "3",
    },
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    group: {
      position: "Thành viên",
      groupId: "3",
    },
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    group: {
      position: "Thành viên",
      groupId: "3",
    },
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vinh",
    group: {
      position: "Thành viên",
      groupId: "3",
    },
  },
  {
    id: 16,
    name: "Ngô Chung Á Âu",
    group: {
      position: "Thành viên",
      groupId: "4",
    },
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    group: {
      position: "Trưởng nhóm",
      groupId: "2",
    },
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    group: {
      position: "Thành viên",
      groupId: "4",
    },
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    group: {
      position: "Thành viên",
      groupId: "4",
    },
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    group: {
      position: "Thành viên",
      groupId: "5",
    },
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    group: {
      position: "Thành viên",
      groupId: "5",
    },
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    group: {
      position: "Thành viên",
      groupId: "5",
    },
  },
];
console.log(arrStudentEdsoLabs);
const newArrStudent = JSON.parse(JSON.stringify(arrStudentEdsoLabs));

function firstName() {
  return (a = newArrStudent.map(
    (e) => e.name.split(" ")[e.name.split(" ").length - 1]
  ));
}
console.log(firstName());

// bài 32
console.log("------bài 32");

function convertToString() {
  return (convert = firstName().join());
}
console.log(convertToString());

//bài 33
console.log("------bài 33");

function conVertToArray() {
  return (convert = convertToString().split(","));
}
console.log(conVertToArray());

// bài 34
console.log("------bài 34");

function checkName(e) {
  let count = conVertToArray().filter((o) => {
    return o == e;
  });
  return count.length;
}
console.log(checkName("Thành"));

// bài 35
console.log("------bài 35");
function checkNameFirst(e) {
  // return a = convertToString().includes(e)

  let a = conVertToArray().indexOf(e);
  return a + 1;
}
console.log(checkNameFirst("Thành"));

// bài 36
console.log("------bài 36");

function checkNameLast(e) {
  // return a = convertToString().includes(e)

  let a = conVertToArray().reverse().indexOf(e);
  return (a = conVertToArray().length - 1 - a + 1);
}

console.log(checkNameLast("Thành"));

// bài 37
console.log("------bài 37");

function checkText(a) {
  return conVertToArray().filter((e) => {
    e = e.toLowerCase();
    return e.startsWith(a.toLowerCase());
  }).length;
}
console.log(`Trong lớp có : ${checkText("T")} bạn`);

// bài 38
console.log("------bài 38");

function bai38(a, b) {
  return conVertToArray().filter((e) => {
    e = e.toLowerCase();
    return e.startsWith(a.toLowerCase()) && e.endsWith(b.toLowerCase());
  }).length;
}
console.log(`Trong lớp có :${bai38("m", "h")} bạn`);

// bài 39
console.log("------bài 39");
function bai39(e) {
  return conVertToArray().filter((o) => {
    o = o.toLowerCase();
    return o.includes(e.toLowerCase()); // bolean
  });
}
console.log(`Trong lớp có : ${checkText("t")} bạn`);

// bài 40
console.log("------bài 40");
let arr40 = JSON.parse(JSON.stringify(conVertToArray()));

function bai40() {
  let x = arr40.map((e) => {
    let a = "tiếp theo là bạn ";
    return a.concat(e);
  });
  x[0] = "Bạn " + arr40[0];
  x[x.length - 1] = ` cuối cùng là bạn ${arr40[arr40.length - 1]}`;
  return x.join(", ");
}

console.log(bai40());
// bài 41

console.log("------bài 41");
let b41 = conVertToArray().join(",");
function bai41() {
  return b41.split("Thành") // [[...],[...],[...]] vì có 2 "Thành"
    .map((e, index) => `Đội ${index + 1} gồm :[${e}],`);
}
console.log(bai41());

// bài 42

console.log("------bài 42");
let b42 = conVertToArray().join(",");
// console.log(conVertToArray());
console.log(b42.split("Thành"));
function bai42() {
    
  return b42.split("Thành").map((e, index) => {
    let team = e.split(" "); // [] length = số người từng  đội
    team.push("Thành");
    console.log(team);

    return `Đội ${index + 1} gồm :[${team.join(", ")}],`
  });
}
console.log(bai42());

// bài43
console.log("------bài43");
function bai43() {
    
    return b42.split("Thành").map((e, index) => {
        let team = e.split(" ");
        team.unshift("Thành")
        return `Đội ${index +1} gồm :[${team.join(", ")}],`
    })
}
console.log(bai43());
// bài 44
console.log("------bài 44");
function bai44() {

    return b42.repeat(2)
}
console.log(bai44());

// bài 45
console.log("------bài 45");
function bai45() {
    return b42.replaceAll("Dũng", "Tuấn")
}
console.log(bai45());
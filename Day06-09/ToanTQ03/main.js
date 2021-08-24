/////-----Bài 31---/////
console.log("bài 31");
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

const arrLastName = arrStudentEdsoLabs.map(
  (o) => o.name.split(" ")[o.name.split(" ").length - 1]
);
console.log(arrLastName);

////---Bài 32---////
console.log("bài 32");
function convertToString(arr) {
  return arr.join(" ");
}
console.log(convertToString(arrLastName));
const strLastName = convertToString(arrLastName);

///--bài 33--///
console.log("bài 33");
function convertToArray(str) {
  return str.split(" ");
}
console.log(convertToArray(strLastName));

///--bài 34--///

console.log("bài 34");
function searchName(key) {
  return (
    "có " +
    strLastName.split(" ").filter((o) => o.includes(key)).length +
    " tên " +
    key
  );
}
console.log(searchName("Ánh"));

///--bài 35--///
console.log("bài 35");
function indexFistNameSearch(key) {
  return (
    "bạn tên " +
    key +
    " đứng  thứ " +
    (strLastName.split(" ").indexOf(key) + 1) +
    " trong nhóm."
  );
}
console.log(indexFistNameSearch("Dũng"));

///--bài 36--///
console.log("bài 36");
function indexLastNameSearch(key) {
  return (
    "bạn tên " +
    key +
    " đứng  thứ " +
    (strLastName.split(" ").lastIndexOf(key) + 1) +
    " trong nhóm."
  );
}
console.log(indexLastNameSearch("Dũng"));

///--bài 37--///
console.log("bài 37");
function totalNameSearch(key) {
  const result = strLastName.split(" ").filter(
    (o) =>
      o
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .indexOf(`${key}`) == 0
  ).length;
  return `có ${result} có tên bắt đầu bàng chữ ${key}`;
}
console.log(totalNameSearch("T"));

///--bài 38--///
console.log("bài 38");
function totalNameSearchByKey(key, key1) {
  const result = strLastName.split(" ").filter(
    (o) =>
      o
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .startsWith(`${key}`) &&
      o
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .endsWith(`${key1}`)
  ).length;
  return `có ${result} có tên bắt đầu bàng chữ ${key}`;
}
console.log(totalNameSearchByKey("T", "g"));

///--bài 39--///
console.log("bài 39");
function totalNameSearchInclude(key) {
  const result = strLastName.split(" ").filter(
    (o) =>
      o
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .includes(`${key}`) == 0
  ).length;
  return `${result} tên có chữ ${key}`;
}
console.log(totalNameSearchInclude("a"));

///--bài 40--///
console.log("bài 40");
function conCatStrInArr() {
  const arrB = arrLastName.slice();
  const arrA = arrB.pop();
  return `Bạn ${arrB.join(" tiếp theo là bạn ")} cuối cùng là bạn ${arrA}`;
}

console.log(conCatStrInArr());

///--bài 41--///
console.log("bài 41");

function splitGroup() {
  const groupArr = strLastName.split(" Thành").map((o, i) => {
    return o + ` là các thành viên nhóm ${i + 1}`;
  });
  return groupArr;
}
console.log(splitGroup());

///--bài 42--///
console.log("bài 42");

function splitGroupAdd() {
  return strLastName.split(" Thành").map((o, i) => {
    return o + ` Thành là các thành viên nhóm ${i + 1}`;
  });
}
console.log(splitGroupAdd());

///--bài 43--///
console.log("bài 43");

function splitGroupAdd() {
  return strLastName.split(" Thành").map((o, i) => {
    return `Thành ` + o + ` là các thành viên nhóm ${i + 1}`;
  });
}
console.log(splitGroupAdd());

///--bài 44--///
console.log("bài 44");
function repeatArr() {
  return strLastName.repeat(2);
}
console.log(repeatArr());

///--bài 45--///
console.log("bài 45");
function replacePerson() {
  return strLastName.replaceAll("Dũng", "Tuấn");
}
console.log(replacePerson());
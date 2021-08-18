// Bài 1

console.log("--- Bài 1 ---");
const arrlist = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    teamNumber: 1,
    position: "member",
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    teamNumber: 1,
    position: "member",
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    teamNumber: 4,
    position: "leader",
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    teamNumber: 3,
    position: "leader",
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    teamNumber: 1,
    position: "member",
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    teamNumber: 2,
    position: "member",
  },
  {
    id: 7,
    name: "Phan Van Trung",
    teamNumber: 2,
    position: "member",
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    teamNumber: 2,
    position: "member",
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    teamNumber: 5,
    position: "leader",
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    teamNumber: 1,
    position: "leader",
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    teamNumber: 2,
    position: "member",
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    teamNumber: 3,
    position: "member",
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    teamNumber: 3,
    position: "member",
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    teamNumber: 3,
    position: "member",
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    teamNumber: 3,
    position: "member",
  },
  {
    id: 16,
    name: "Ngô Chung Á Âu",
    teamNumber: 4,
    position: "member",
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    teamNumber: 2,
    position: "leader",
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    teamNumber: 4,
    position: "member",
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    teamNumber: 4,
    position: "member",
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    teamNumber: 5,
    position: "member",
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    teamNumber: 5,
    position: "member",
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    teamNumber: 5,
    position: "member",
  },
];

console.table(arrlist);

// Bài 2

console.log("--- Bài 2 ---");
const objList = Object.assign({}, arrlist);
console.table(objList);

// Bài 3

console.log("--- Bài 3 ---");
const peopleTotal = arrlist.length;
const leader = arrlist.filter((person) => person.position == "leader").length;
const groupTotal = new Set(arrlist.map((person) => person.teamNumber)).size;
console.log("số học viện :" + peopleTotal);
console.log("số nhóm trưởng : " + leader);
console.log("số nhóm : " + groupTotal);

// //bài 4

console.log("--- Bài 4 ---");
const peopleObjTotal = Object.values(objList).length;
const monitorObjTotal = Object.values(objList).filter(
  (person) => person.position == "leader"
).length;
console.log("số học viện :" + peopleObjTotal);
console.log("số nhóm trưởng: " + monitorObjTotal);

// //bài 5

console.log("--- Bài 5 ---");
const del1 = arrlist.filter((e) => e.id != 1);
console.log("Xóa học viên số 1", del1);

//bài 6

console.log("--- Bài 6 ---");
const del7 = arrlist.filter((e) => e.id != 7);
console.log("Xóa học viên số 7", del7);

//bài 7

console.log("--- Bài 7 ---");
const memberNinth = arrlist.find((person) => person.id == 9).name;
console.log("Tên của học viên thứ 9 là : " + memberNinth);

//bài 8

console.log("--- Bài 8 ---");
const leader2 = arrlist.find(
  (person) => person.teamNumber == 2 && person.position == "leader"
).id;

console.log("Thứ tự của nhóm trưởng nhóm 2 là : " + leader2);

// bài 9

console.log("--- Bài 9 ---");
const sortPp = arrlist
  .map((e) => e)
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
console.log(sortPp);

// bài 10

console.log("--- Bài 10 ---");
const firstNames = arrlist.map(
  (e) => e.name.split(" ")[e.name.split(" ").length - 1]
);
console.log("Tên học viên", firstNames);

// bài 11

console.log("--- Bài 11 ---");
firstNames.sort((a, b) => a.localeCompare(b));
console.log("Tên học viên", firstNames);

// bài 12

console.log("--- Bài 12 ---");
const noDuplicateNames = [...new Set(firstNames)];
console.log(
  "danh sách lớp sau khi đã lọc các tên trùng nhau là :" + noDuplicateNames
);

// bài 13

console.log("--- Bài 13 ---");
const countNames = firstNames
  .map((o) => ({
    name: o,
    count: firstNames.filter((e) => e == o).length,
  }))
  .sort((a, b) => b.count - a.count);
const maxCount = countNames[0].count;
const nameMaxCount = countNames
  .filter((o) => o.count == maxCount)
  .map((o) => o.name);
console.log("cái tên trong lớp có nhiều người có nhất là :" + nameMaxCount);

//bài 14

console.log("--- Bài 14 ---");
const first5member = arrlist.slice(0, 5);
for (let i = 0; i < 5; i++) {
  first5member.unshift(arrlist[first5member.length]);
}
for (let i = 0; i < 5; i++) {
  first5member.push(arrlist[first5member.length]);
}
console.log(first5member);

//bài 15
console.log("--- Bài 15 ---");
const first5membernew = arrlist.slice(0, 5);
first5membernew.sort((a, b) => {
  const nameOfA = a.name.split(" ").pop();
  const nameOfB = b.name.split(" ").pop();
  return nameOfA.localeCompare(nameOfB);
});
console.log(first5membernew);

//bài 16
console.log("--- Bài 16 ---");
const arr16 = arrlist.filter((e) => e.id % 3 == 0);
console.log(arr16);

//bài 17
console.log("--- Bài 17 ---");
const student0to5 = arrlist.slice(0, 5);

const result1 = student0to5.some((o) => o.position == "leader");

console.log("1 trong 5 bạn là nhóm trưởng ?" + result1);

//bài 18
console.log("--- Bài 18 ---");
const student0to5new = arrlist.slice(0, 5);

const result2 = student0to5new.every((o) => o.position == "leader");

console.log("cả 5 bạn là nhóm trưởng ?" + result2);
//bài 19
console.log("--- Bài 19 ---");
const memberCode = arrlist.map(({ id, name, teamNumber }) => {
  const lName = name.split(" ").pop();
  return `${lName}_${id}_${teamNumber}`;
});
console.log(memberCode);

//bài 20
console.log("--- Bài 20 ---");
arrlist.reverse();
console.table(arrlist);

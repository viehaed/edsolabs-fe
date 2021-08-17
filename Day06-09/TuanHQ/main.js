// === Bài 1 ===
const listStudents = [
  {
    id: 1,
    fullName: "Nguyến Văn Sơn",
    groupNumber: 1,
    isLeader: false,
  },
  {
    id: 2,
    fullName: "Nguyễn Hữu Ánh",
    groupNumber: 1,
    isLeader: false,
  },
  {
    id: 3,
    fullName: "Trần Mạnh Quân",
    groupNumber: 4,
    isLeader: true,
  },
  {
    id: 4,
    fullName: "Hà Quốc Tuấn",
    groupNumber: 3,
    isLeader: true,
  },
  {
    id: 5,
    fullName: "Hoàng Ngọc Thành",
    groupNumber: 1,
    isLeader: false,
  },
  {
    id: 6,
    fullName: "Vũ Thị Thu Hà",
    groupNumber: 2,
    isLeader: false,
  },
  {
    id: 7,
    fullName: "Phan Van Trung",
    groupNumber: 2,
    isLeader: false,
  },
  {
    id: 8,
    fullName: "Nguyễn Cao Hoàng",
    groupNumber: 2,
    isLeader: false,
  },
  {
    id: 9,
    fullName: "Phùng Đắc Nhật Minh",
    groupNumber: 5,
    isLeader: true,
  },
  {
    id: 10,
    fullName: "Lê Việt Dũng",
    groupNumber: 1,
    isLeader: true,
  },
  {
    id: 11,
    fullName: "Đỗ Chí Công",
    groupNumber: 2,
    isLeader: false,
  },
  {
    id: 12,
    fullName: "Trần Công Tâm",
    groupNumber: 3,
    isLeader: false,
  },
  {
    id: 13,
    fullName: "Trương Thanh Tùng",
    groupNumber: 3,
    isLeader: false,
  },
  {
    id: 14,
    fullName: "Tạ Đức Chiến",
    groupNumber: 3,
    isLeader: false,
  },
  {
    id: 15,
    fullName: "Nguyễn Trọng Vĩnh",
    groupNumber: 3,
    isLeader: false,
  },
  {
    id: 16,
    fullName: "Ngô Chung Á Âu",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 17,
    fullName: "Trần Thị Khánh Linh",
    groupNumber: 2,
    isLeader: true,
  },
  {
    id: 18,
    fullName: "Phan Tiến Thành",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 19,
    fullName: "Đỗ Văn Huy",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 20,
    fullName: "Nguyễn Trung Đức",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 21,
    fullName: "Nguyễn Trung Nam",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 22,
    fullName: "Trần Quốc Toàn",
    groupNumber: 5,
    isLeader: false,
  },
];

console.log("========== Bài 1==========");

console.log(listStudents);

// === Bài 2 ===
const objStudents = {
  stt01: {
    id: 1,
    fullName: "Nguyến Văn Sơn",
    groupNumber: 1,
    isLeader: false,
  },

  stt02: {
    id: 2,
    fullName: "Nguyễn Hữu Ánh",
    groupNumber: 1,
    isLeader: false,
  },

  stt03: {
    id: 3,
    fullName: "Trần Mạnh Quân",
    groupNumber: 4,
    isLeader: true,
  },

  stt04: {
    id: 4,
    fullName: "Hà Quốc Tuấn",
    groupNumber: 3,
    isLeader: true,
  },

  stt05: {
    id: 5,
    fullName: "Hoàng Ngọc Thành",
    groupNumber: 1,
    isLeader: false,
  },

  stt06: {
    id: 6,
    fullName: "Vũ Thị Thu Hà",
    groupNumber: 2,
    isLeader: false,
  },

  stt07: {
    id: 7,
    fullName: "Phan Van Trung ",
    groupNumber: 2,
    isLeader: false,
  },

  stt08: {
    id: 8,
    fullName: "Nguyễn Cao Hoàng",
    groupNumber: 2,
    isLeader: false,
  },

  stt09: {
    id: 9,
    fullName: "Phùng Đắc Nhật Minh ",
    groupNumber: 5,
    isLeader: true,
  },

  stt10: {
    id: 10,
    fullName: "Lê Việt Dũng",
    groupNumber: 1,
    isLeader: true,
  },

  stt11: {
    id: 11,
    fullName: "Đỗ Chí Công",
    groupNumber: 2,
    isLeader: false,
  },

  stt12: {
    id: 12,
    fullName: "Trần Công Tâm",
    groupNumber: 3,
    isLeader: false,
  },

  stt13: {
    id: 13,
    fullName: "Trương Thanh Tùng",
    groupNumber: 3,
    isLeader: false,
  },

  stt14: {
    id: 14,
    fullName: "Tạ Đức Chiến",
    groupNumber: 3,
    isLeader: false,
  },

  stt15: {
    id: 15,
    fullName: "Nguyễn Trọng Vĩnh",
    groupNumber: 3,
    isLeader: false,
  },

  stt16: {
    id: 16,
    fullName: "Ngô Chung Á Âu",
    groupNumber: 4,
    isLeader: false,
  },

  stt17: {
    id: 17,
    fullName: "Trần Thị Khánh Linh",
    groupNumber: 2,
    isLeader: true,
  },

  stt18: {
    id: 18,
    fullName: "Phan Tiến Thành",
    groupNumber: 4,
    isLeader: false,
  },

  stt19: {
    id: 19,
    fullName: "Đỗ Văn Huy",
    groupNumber: 4,
    isLeader: false,
  },

  stt20: {
    id: 20,
    fullName: "Nguyễn Trung Đức",
    groupNumber: 5,
    isLeader: false,
  },

  stt21: {
    id: 21,
    fullName: "Nguyễn Trung Nam",
    groupNumber: 5,
    isLeader: false,
  },

  stt22: {
    id: 22,
    fullName: "Trần Quốc Toàn",
    groupNumber: 5,
    isLeader: false,
  },
};
console.log("========== Bài 2==========");

console.log(objStudents);

// === Bài 3 === Dựa vào mảng đã tạo ở bài tập 1, thực hiện đếm số học viên trong lớp, số lớp trưởng trong lớp,số nhóm trong lớp.

console.log("========== Bài 3==========");

console.log("Số học sinh trong lớp: " + listStudents.length);

console.log(
  "Số lớp trưởng trong lớp: " +
    listStudents.filter((s) => s.isLeader === true).length
);
// console.log(
//   "Số nhóm trong lớp: " +
//     listStudents.filter((s) => s.isLeader === true).length
// );

let listGroup = [];
listStudents.map((s) => {
  if (s.groupNumber > 0) {
    if (!listGroup.includes(s.groupNumber)) {
      listGroup.push(s.groupNumber);
    }
  }
});

console.log("Số nhóm trong lớp: " + listGroup.length);

// === Bài 4 === Dựa vào object đã tạo ở bài 2, thực hiện đếm số lượng học viên, số nhóm trưởng, sĩ số lớp
console.log("========== Bài 4==========");
console.log("Số học sinh trong lớp: " + Object.keys(objStudents).length);

function countLeaderObj() {
  let leader = [];

  /** Trả về key và value từng key */
  for (const [key, value] of Object.entries(objStudents)) {
    if (`${value.isLeader}` === "true") {
      leader.push(value);
    }
  }

  return leader.length;
}
console.log("Số lớp trưởng trong lớp: " + countLeaderObj());

// === Bài 5 === Dựa vào danh sách mảng ở bài tập 1, thực hiện xóa các bạn học viên đứng thứ nhất ra khỏi danh sách lớp.

console.log("========== Bài 5==========");

let objStudents_b5 = [...listStudents];
objStudents_b5.shift();
console.log("Sau khi xóa sinh viên đầu tiên: ");
console.log(objStudents_b5);

// === Bài 6 === Dựa vào danh sách mảng ở bài tập 1, thực hiện xóa học viên số 7 ra khỏi danh sách.
console.log("========== Bài 6==========");

let objStudents_b6 = [...listStudents];
objStudents_b6.splice(6, 1);
console.log("Sau khi xóa sinh viên số 7: ");
console.log(objStudents_b6);

// === Bài 7 === Dựa vào danh sách lớp, lấy ra tên của học viên có số thứ tự thứ 9.
console.log("========== Bài 7==========");
console.log(
  "Tên học viên có số thứ thự 9:" +
    listStudents.filter((s) => s.id === 9)[0].fullName
);

// === Bài 8 === Dựa vào danh sách lớp, tìm số thứ tự của nhóm trưởng nhóm 2
console.log("========== Bài 8==========");

let idleaderGroup2 = "";

listStudents.filter((item) => {
  if (item.groupNumber === 2) {
    if (item.isLeader === true) {
      idleaderGroup2 = item.id;
    }
  }
});

console.log("Số thứ tự nhóm trưởng nhóm 2: " + idleaderGroup2);

// === Bài 9 === Sắp xếp danh sách lớp theo thứ tự tăng dần của bảng chữ cái ( làm việc với string )
console.log("========== Bài 9==========");

let listStudents_b9 = [...listStudents];

/**
 * Sắp xếp mảng học viên theo tên
 * @param {*} arr Mẩng các object
 */
function sortByName(arr) {
  arr.sort((a, b) => {
    fullNameA = a.fullName.split(" ");
    fullNameB = b.fullName.split(" ");

    lastNameA = fullNameA[fullNameA.length - 1];
    lastNameB = fullNameB[fullNameB.length - 1];

    // return lastNameA > lastNameB ? 1 : lastNameA < lastNameB ? -1 : 0;
    return lastNameA.localeCompare(lastNameB, "vn", { sensitivity: "base" });
  });
}
sortByName(listStudents_b9);
console.log("Danh sách sau khi sắp xếp theo tên a - z: ");
console.log(listStudents_b9);

// === Bài 10 === Dựa vào danh sách lớp, xuất ra danh sách chỉ chứa tên của các học viên. ( Nguyễn Văn Thanh -> chỉ lấy Thanh). Bài tập thực hiện cắt chuỗi, xử lý chuỗi.
console.log("========== Bài 10==========");

let listName_b10 = [];

listStudents.map((item) => {
  items = item.fullName.split(" ");
  let names = items[items.length - 1];

  listName_b10.push(names);
});

console.log("Danh sách tên học viên trong lớp: ");
console.log(listName_b10);

// === Bài 11 === Dựa vào danh sách tên trong bài tập 10, thực hiện sắp xếp tên theo thứ tự bảng chữ
// cái.
console.log("========== Bài 11==========");

listName_b10.sort((a, b) => {
  // return a > b ? 1 : a < b ? -1 : 0;
  return a.localeCompare(b, "vn", { sensitivity: "base" });
});

console.log("Sắp xếp Danh sách tên học viên trong lớp: ");
console.log(listName_b10);

// Bài tập 12: Dựa vào danh sách từ bài tập 10, lấy ra danh sách các tên ko trùng của cả lớp trong lớp
console.log("========== Bài 12==========");

let listName_b12 = [];

for (const item of listName_b10) {
  let temp = listName_b10.filter((s) => s === item);
  if (temp.length === 1) {
    listName_b12.push(item);
  }
}

console.log("danh sách các tên ko trùng của cả lớp ");
console.log("cách hiểu 1 tên xuất hiện trên 1 lần sẽ bị loại: ");
console.log(listName_b12);

console.log("cách hiểu 2 mỗi tên lấy 1 lần và không trùng: ");
listName_b12 = new Set(listName_b10);
console.log(listName_b12);

// Bài tập 13: Dựa vào danh sách từ bài tập 10, lấy ra cái tên trong lớp có nhiều người có nhất.
console.log("========== Bài 13==========");

let name_b13 = "";
let count = 0;

for (const item of listName_b10) {
  let temp = listName_b10.filter((s) => s === item);
  if (temp.length > count) {
    count = temp.length;
    name_b13 = item;
  }
}

console.log("Tên xuất hiện nhiều lần nhất: " + name_b13);
console.log("Số lần: " + count);

// Bài tập 14: Cho danh sách 5 bạn học viên đầu tiên, hãy bổ sung thêm 5 bạn học viên nữa vào đuôi mảng.
console.log("========== Bài 14==========");

let listStudents_b13 = listStudents.slice(0, 5);
listStudents_b13.push(
  {
    id: 18,
    fullName: "Phan Tiến Thành",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 19,
    fullName: "Đỗ Văn Huy",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 20,
    fullName: "Nguyễn Trung Đức",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 21,
    fullName: "Nguyễn Trung Nam",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 22,
    fullName: "Trần Quốc Toàn",
    groupNumber: 5,
    isLeader: false,
  }
);

console.log("Danh sách 5 học viên ban đầu sau khi thêm 5 học viên nữa: ");
console.log(listStudents_b13);

// Bài tập 14: Cho danh sách 5 bạn học viên đầu tiên, hãy bổ sung thêm 5 bạn học viên nữa vào đầu mảng.
console.log("========== Bài 14==========");
let listStudents_b14 = listStudents.slice(0, 5);

listStudents_b14.unshift(
  {
    id: 18,
    fullName: "Phan Tiến Thành",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 19,
    fullName: "Đỗ Văn Huy",
    groupNumber: 4,
    isLeader: false,
  },
  {
    id: 20,
    fullName: "Nguyễn Trung Đức",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 21,
    fullName: "Nguyễn Trung Nam",
    groupNumber: 5,
    isLeader: false,
  },
  {
    id: 22,
    fullName: "Trần Quốc Toàn",
    groupNumber: 5,
    isLeader: false,
  }
);

console.log(
  "Danh sách 5 học viên ban đầu sau khi thêm 5 học viên nữa vào đầu: "
);
console.log(listStudents_b14);

// Bài tập 15: Cho danh sách 5 học viên đầu tiên, thực hiện tráo đổi thứ tự theo tên các học viên.
console.log("========== Bài 15==========");
let listStudents_b15 = listStudents.slice(0, 5);

sortByName(listStudents_b15);

console.log("Danh sách 5 học viên đầu sắp xếp theo tên");
console.log(listStudents_b15);

// Bài tập 16: Dựa vào danh sách ở bài tập 2, lấy ra danh sách các học viên có số thứ tự chia hết cho 3.
console.log("========== Bài 16==========");

let objStudents_b16 = [];

for (const item in objStudents) {
  if (objStudents[item].id % 3 === 0) {
    objStudents_b16.push(objStudents[item]);
  }
}

console.log(objStudents_b16);

// Bài tập 17: Cho danh sách mảng 5 học viên đầu tiên, thử kiểm tra xem trong 5 bạn đó có bạn nào làm nhóm trưởng hay ko?
console.log("========== Bài 17==========");

let listStudents_b17 = listStudents.slice(0, 5);

listStudents_b17 = listStudents_b17.filter((item) => item.isLeader === true);

console.log("Các bạn nhóm trưởng trong 5 bạn đầu tiên: ");
console.log(listStudents_b17);

// Bài tập 18: Cho danh sách mảng 5 học viên đầu tiên, thử kiểm tra tất cả các bạn 5 bạn đó có đc làm nhóm trưởng hay ko?
console.log("========== Bài 18==========");

let listStudents_b18 = listStudents.slice(0, 5);

listStudents_b18 = listStudents_b18.filter((item) => item.isLeader === true);

if (listStudents_b18.length === 5) {
  console.log("Tất cả là nhóm trưởng");
} else {
  console.log("Tất cả không phải là nhóm trưởng");
}

// Bài tập 19: Tạo mã học viên theo quy tắc Tên_số thứ tự _ số nhóm. ( thực hiện ghép chuỗi).
console.log("========== Bài 19==========");

let listStudents_b19 = [...listStudents];

let names_b19 = listStudents_b19.map((item) => {
  return item["fullName"] + "_" + item["id"] + "_" + item["groupNumber"];
});

console.log(names_b19);

// Bài tập 20: Dựa vào danh sách học viên ở bài tập 1, hãy đảo ngược thứ tự danh sách lớp
console.log("========== Bài 20==========");
console.log("Danh sách đảo ngược: ");
console.log(listStudents.reverse());

// data ban dau
console.log("===data ban dau===");

console.log(listStudents);
console.log(objStudents);

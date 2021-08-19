console.log("--Bài 21--");
let arrStudent = [
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
console.table(arrStudent);
console.log("--Bài 22--")
//----Bài tập 22----//
totalStudent = arrStudent.length;
function putOutName(x) {
  if (x <= totalStudent && x >= 0) {
    let arrayName = [];
    for (let i = 0; i < x; i++) {
      arrayName.push(
        arrStudent[Math.floor(Math.random() * totalStudent)].name
      );
    }
    return arrayName;
  } else {
    console.log(
      "Hãy nhập lại x ,:" , totalStudent
    );
  }
}
console.log(putOutName(5));

//----Bài tập 23----//
console.log("--Bài 23--");
let dataStudent1 = JSON.parse(JSON.stringify(arrStudent));


function getNameofGroup(group) {
    return dataStudent1.filter(st => st.group.groupId === group);
}
console.log('Số thành viên với x :', getNameofGroup(3));

//----Bài tập 24----//
console.log("--Bài 24--");

let dataStudent = JSON.parse(JSON.stringify(arrStudent));

function createPoint(data) {
  data.map((data) => (data.points = []));
}

function importPoint(id, dayName, point) {
  const dataNew = dataStudent.filter((data) => data.id == id);
  if (dataNew.find((data) => data?.points === undefined)) {
    createPoint(dataNew);
  }
  let idDay = dataNew.map((data) => data.points.length + 1);
  let points = {
    idDay: idDay[0],
    dayName: dayName,
    point: point,
  };
  dataNew.map((data) => data.points.push(points));
}
importPoint(21, "Mon", 10);
importPoint(21, "Tue", 9);
importPoint(22, "Mon", 10);
console.log(dataStudent);

//----Bài tập 25----//
console.log("--Bài 25--");
arrDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function createPointOnWeek(id) {
  for (let i = 0; i < 7; i++) {
    let pointRandom = Math.floor(Math.random() * 11);
    importPoint(id, arrDay[i], pointRandom);
  }
}
function importPointAllStudent() {
  dataStudent.forEach((data) => {
    createPointOnWeek(data.id);
  });
}
importPointAllStudent();
console.log(dataStudent);


console.log("--Bài 26--");

const copyDataStudent = JSON.parse(JSON.stringify(dataStudent));
function sumPoint(arrPoint) {
  let sum = 0;
  for (let i = 0; i < arrPoint.length; i++) {
    sum += arrPoint[i].point;
  }
  return sum;
}
function getTotalPointIn(x, y) {
  const arrTotalPoint = copyDataStudent.map(
    (data) =>
      (data = {
        id: data.id,
        name: data.name,
        totalPoint: data.points.slice(x - 1, y + 1),
        group: data.group.groupId,
      })
  );
  arrTotalPoint.map((data) => (data.totalPoint = sumPoint(data.totalPoint)));
  return arrTotalPoint;
}
console.log(getTotalPointIn(2, 5));


console.log("bài 27");
function topTotalPoint(x, y) {
  const arrTopTotalPoint = getTotalPointIn(x, y);
  arrTopTotalPoint.sort((a, b) => b.totalPoint - a.totalPoint);
  return arrTopTotalPoint.slice(0, 5);
}

console.log(topTotalPoint(2, 5));


console.log("--Bài 28--");
function getListStudentByPontInDay(x, y, z) {
  const ListStudentPont = topTotalPoint(x, y);
  const result = ListStudentPont.filter((data) => data.totalPoint === z);
  console.log(result);
}
getListStudentByPontInDay(2, 5, 34);


console.log("--Bài 29--");

function getGroup(arr) {
  let arrGroup = arr.map((data) => data.group);
  return Array.from(new Set(arrGroup));
}

function gatherStudent(x, y) {
  const arrTotalPointSort = getTotalPointIn(x, y);
  const group = getGroup(arrTotalPointSort);

  return group.map((data) => {
    let memberInGroup = arrTotalPointSort
      .filter((item) => item.group === data)
      .sort((a, b) => a.totalPoint - b.totalPoint);
    return {
      hocVien1: memberInGroup[0],
      hocVien2: memberInGroup[memberInGroup.length - 1],
      groupName: data,
    };
  });
}

console.log(gatherStudent(2, 5));

// ----Bài tập 30----//
console.log("--Bài 30--");

function getTotalGroupPoint(x, y) {
  const arrTotalPoint = gatherStudent(x, y);
  const totalGroupPoint = arrTotalPoint.map(
    (data) =>
      (data = {
        groupName: data.groupName,
        totalPoint: data.hocVien1.totalPoint + data.hocVien2.totalPoint,
        point: {
          hocVien1: data.hocVien1.totalPoint,
          hocVien2: data.hocVien2.totalPoint,
        },
      })
  );
  return totalGroupPoint;
}
console.log(getTotalGroupPoint(2, 5));
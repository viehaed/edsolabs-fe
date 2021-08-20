/** forEach() : thục hiện một function với mỗi phân tử của mảng
 *
 *
 *
 */

const data = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    group: {
      groupId: 1,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    group: {
      groupId: 1,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    group: {
      groupId: 4,
      position: "leader",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    group: {
      groupId: 3,
      position: "leader",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    group: {
      groupId: 1,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: {
      groupId: 2,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    group: {
      groupId: 2,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: {
      groupId: 2,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: {
      groupId: 5,
      position: "leader",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    group: {
      groupId: 1,
      position: "leader",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    group: {
      groupId: 2,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    group: {
      groupId: 3,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    group: {
      groupId: 3,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    group: {
      groupId: 3,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    group: {
      groupId: 3,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 16,
    name: "Ngô Chung A Âu",
    group: {
      groupId: 4,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    group: {
      groupId: 2,
      position: "leader",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    group: {
      groupId: 4,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    group: {
      groupId: 4,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    group: {
      groupId: 5,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    group: {
      groupId: 5,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    group: {
      groupId: 5,
      position: "member",
    },
    points: [
      {
        dayId: 01,
        dayName: "Ngay 01",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 02,
        dayName: "Ngay 02",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 03,
        dayName: "Ngay 03",
        point: Math.floor(Math.random() * 11),
      },
      {
        dayId: 04,
        dayName: "Ngay 04",
        point: Math.floor(Math.random() * 11),
      },
    ],
  },
];

console.log(data);

const x = Math.floor(Math.random() * 11);

/**
 * Lấy ra danh sách tên của các học viên đạt điểm X
 * và ngày mà họ đạt được điểm đó
 *
 */
console.log("======= Ví dụ 1 =======");

const getStudentByGroupId = (arr, x) => {
  let result = [];
  arr.forEach((element) => {
    const points = element.points.filter((point) => point.point === x);
    if (points.length > 0) {
      result.push({ name: element.name, days: points });
    }
  });
  return result;
};

console.log(
  `danh sách tên của các học viên đ đạt điểm ${x} và các ngày đạt được điểm đó`
);
console.log(getStudentByGroupId(data, x));

/**
 * Lấy ra danh sách học viên có điểm trung bình > = X
 */
console.log("======= Ví dụ 2 =======");

const getNameAverage = (arr, x) => {
  let result = [];
  arr.forEach((element) => {
    // Các ngày có đểm của học viên
    const amountDay = element.points.length;
    const totalPoints = element.points.reduce(
      (prevPoint, currentpPoint) => prevPoint + currentpPoint.point,
      0
    );

    if (totalPoints / amountDay >= x) {
      result.push({ name: element.name, everage: totalPoints / amountDay });
    }
  });
  return result;
};
console.log(`danh sách học viên có điểm trung bình >= ${x}`);
console.log(getNameAverage(data, x));

/**
 * Lấy ra tên nhóm trưởng của nhóm y
 */
console.log("======= Ví dụ 3 =======");

const getNameLeader = (arr, y) => {
  let name = -1;
  arr.forEach((element) => {
    if (element.group.groupId === y && element.group.position === "leader") {
      name = element.name;
    }
  });
  return name;
};

const y = Math.floor(Math.random() * 8) + 1;
console.log(`Nhóm trưởng nhóm ${y}`);
console.log(
  getNameLeader(data, y) !== -1
    ? getNameLeader(data, y)
    : "Không tìm thấy nhóm trưởng"
);

/**
 * Sửa điểm học viên x ở ngày y bằng điểm z
 * hiển thị lại danh sách
 */
console.log("======= Ví dụ 4 =======");

const updatePoint = (arr, id, dayId, pointUpdate) => {
  let result = true;
  try {
    arr
      .filter((e) => e.id === id)[0]
      .points.filter((p) => p.dayId === dayId)[0].point = pointUpdate;
  } catch (error) {
    result = false;
  }
  return result;
};

console.log("Cập nhật học viên id = 4 ngày dayId = 1 điểm = 10");
console.log(
  updatePoint(data, 4, 1, 10) ? "Cập nhật thành công" : "Cập nhật thất bại"
);

console.log("Cập nhật học viên id = -4 ngày dayId = 1 điểm = 5");
console.log(
  updatePoint(data, -4, 1, 5) ? "Cập nhật thành công" : "Cập nhật thất bại"
);
console.log(data);

/**
 * Tính điểm trung bình của nhóm và sap xep tính từ thấp đến cao
 */
console.log("======= Ví dụ 5 =======");

const sortGroupByAvg = (arr) => {
  //Danh sach nhom co trong data
  let groups = [];
  arr.forEach((element) => {
    //Nếu mảng groups chưa có phần tủ group nào có id trùng với id của group có trong data
    // thi thêm phần tử đó vào mảng group, lưu id của group đó
    if (!groups.some((group) => group.groupId === element.group.groupId)) {
      groups.push({ groupId: element.group.groupId });
    }
  });

  // Khởi tạo biến kết quả, chứa tên nhóm và điểm trung bình của nhóm
  let result = [];
  //duyệt từng id của danh sách nhóm
  groups.forEach((element) => {
    // danh ssách thành viên của nhóm được duyệt
    let memberOfGroup = arr.filter(
      (item) => item.group.groupId === element.groupId
    );

    // điểm trung bình của các thành viên trong nhóm
    let averagePointMember = memberOfGroup //
      .map((student) => {
        // tổng diểm của các học viên
        const totalPoint = student.points.reduce((prev, curr) => {
          return prev + curr.point;
        }, 0);

        // Các ngày có đểm của học viên
        const amountDay = student.points.length;

        return totalPoint / amountDay;
      });

    // tính trung bình điểm của nhóm
    const avgGroup =
      averagePointMember.reduce((prev, curr) => prev + curr) /
      memberOfGroup.length;

    result.push({ name: "Nhóm" + element.groupId, avgGroup });
  });

  return result.sort((a, b) => a.avgGroup - b.avgGroup);
};

console.log("Tính điểm trung bình của nhóm và sap xep tính từ thấp đến cao");
console.log(sortGroupByAvg(data));

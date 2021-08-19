// Bai 21
const people = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    groupId: 1,
    position: "member",
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    groupId: 1,
    position: "member",
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    groupId: 4,
    position: "monitor",
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    groupId: 3,
    position: "monitor",
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    groupId: 1,
    position: "member",
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    groupId: 2,
    position: "member",
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    groupId: 2,
    position: "member",
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    groupId: 2,
    position: "member",
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    groupId: 5,
    position: "monitor",
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    groupId: 1,
    position: "monitor",
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    groupId: 2,
    position: "member",
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    groupId: 3,
    position: "member",
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    groupId: 3,
    position: "member",
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    groupId: 3,
    position: "member",
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    groupId: 3,
    position: "member",
  },
  {
    id: 16,
    name: "Ngô Chung Á Âu",
    groupId: 4,
    position: "member",
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    groupId: 2,
    position: "monitor",
  },
  {
    id: 18,
    name: "Phan Tiến Thánh",
    groupId: 4,
    position: "member",
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    groupId: 4,
    position: "member",
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    groupId: 5,
    position: "member",
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    groupId: 5,
    position: "member",
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    groupId: 5,
    position: "member",
  },
];

// Bai 22
const shuffleArray = (arr) => {
  let curIndex = arr.length - 1;
  let randomIndex;

  while (curIndex !== 0) {
    randomIndex = Math.ceil(Math.random() * curIndex);
    [arr[curIndex], arr[randomIndex]] = [arr[randomIndex], arr[curIndex]];
    curIndex--;
  }
};
const getRandomMember = (number) => {
  const copyPeople = [...people];
  shuffleArray(copyPeople);
  return copyPeople.slice(0, number);
};

//Bai 23
const getGroupMemberName = (group) => {
  const groupMemberName = people
    .filter((person) => person.groupId === group)
    .map((item) => item.name.split(" ").pop());
  return groupMemberName;
};

//Bai 24
const addStudentScore = (id, dayName, point) => {
  const curStudent = people.find((person) => person.id === id);
  if (!curStudent.points) {
    curStudent.points = [];
  }
  curStudent.points.push({
    dayID: new Date().getTime(),
    dayName,
    point,
  });
  return people;
};

//Bai 25
const createOneWeekScore = (studentId) => {
  for (let i = 0; i < 5; i++) {
    const randomPoint = Math.ceil(Math.random() * 10 * 10) / 10;
    addStudentScore(studentId, `Ngày ${i + 1}`, randomPoint);
  }
};
const scoreSimulator = () => {
  people.forEach((person) => {
    createOneWeekScore(person.id);
  });
  return people;
};
scoreSimulator();

//Bai 26
const getTotalPointInRange = (startDate, endDate) => {
  const copyPeople = JSON.parse(JSON.stringify(people));

  const tempArr = copyPeople.map((person) => {
    //calculate the total point in provided range
    const totalPoint = person.points.reduce((total, item) => {
      const { dayName, point } = item;
      const dayInNum = parseInt(dayName.split(" ").pop());
      if (dayInNum >= startDate && dayInNum <= endDate) {
        return total + point;
      }
      return total;
    }, 0);
    // add new property and return the item
    person.totalPoint = Math.ceil(totalPoint * 100) / 100;
    return person;
  });

  return tempArr;
};

// Bai 27
const getTopFiveStudent = (startDate, endDate) => {
  const totalPointArr = getTotalPointInRange(startDate, endDate);
  totalPointArr.sort((a, b) => {
    return b.totalPoint - a.totalPoint;
  });
  return totalPointArr.slice(0, 5);
};

//Bai 28
const getMatchTotalPoint = (startDate, endDate, totalPoint) => {
  const totalPointArr = getTotalPointInRange(startDate, endDate);
  const matchTotalPoint = totalPointArr
    .filter((person) => person.totalPoint === totalPoint)
    .map(({ id, name, totalPoint }) => ({
      id,
      name,
      totalPoint,
    }));
  return matchTotalPoint;
};

//Bai 29
const getUniqueGroups = (arr) => {
  const groups = arr.map((person) => person.groupId);
  return [...new Set(groups)];
};
const pairGroup = (startDate, endDate) => {
  const totalPointArr = getTotalPointInRange(startDate, endDate);
  const groups = getUniqueGroups(totalPointArr);
  return groups.map((group) => {
    const groupMember = totalPointArr
      .filter((item) => item.groupId === group)
      .sort((a, b) => a.totalPoint - b.totalPoint);
    return {
      firstMember: groupMember[0],
      secondMember: groupMember[groupMember.length - 1],
      group,
    };
  });
};

//Bai 30
const totalGroupPoint = (startDate, endDate) => {
  const totalPointArr = getTotalPointInRange(startDate, endDate);
  const groups = getUniqueGroups(totalPointArr);
  return groups.map((group) => {
    const groupMember = totalPointArr.filter((item) => item.groupId === group);
    const totalGroupPoint = groupMember.reduce(
      (total, item) => total + item.totalPoint,
      0
    );
    return {
      group,
      totalGroupPoint: Math.floor(totalGroupPoint * 100) / 100,
      points: groupMember.map(({ name, totalPoint }) => ({
        name,
        totalPoint,
      })),
    };
  });
};

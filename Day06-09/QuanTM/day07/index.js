// Bai 1
const people = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    group: 1,
    isMonitor: false,
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    group: 1,
    isMonitor: false,
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    group: 4,
    isMonitor: true,
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    group: 3,
    isMonitor: true,
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    group: 1,
    isMonitor: false,
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: 2,
    isMonitor: false,
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    group: 2,
    isMonitor: false,
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: 2,
    isMonitor: false,
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: 5,
    isMonitor: true,
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    group: 1,
    isMonitor: true,
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    group: 2,
    isMonitor: false,
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    group: 3,
    isMonitor: false,
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    group: 3,
    isMonitor: false,
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    group: 3,
    isMonitor: false,
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    group: 3,
    isMonitor: false,
  },
  {
    id: 16,
    name: "Ngô Chung Á Âu",
    group: 4,
    isMonitor: false,
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    group: 2,
    isMonitor: true,
  },
  {
    id: 18,
    name: "Phan Tiến Thánh",
    group: 4,
    isMonitor: false,
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    group: 4,
    isMonitor: false,
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    group: 5,
    isMonitor: false,
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    group: 5,
    isMonitor: false,
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    group: 5,
    isMonitor: false,
  },
];

// Bai 2
const peopleObj = Object.assign({}, people);

// Bai 3
const peopleTotal = people.length;
const monitorTotal = people.filter((person) => person.isMonitor).length;
const groupTotal = new Set(people.map((person) => person.group)).size;

//Bai 4
const peopleObjTotal = Object.values(people).length;
const monitorObjTotal = Object.values(people).filter(
  (person) => person.isMonitor
).length;

// Bai 5
//Khong thay doi Array goc, neu thay doi Array goc thi su dung Array.shift
const deleteFirst = people.filter((person) => person.id !== 1);

//Bai 6
//Khong thay doi Array goc, neu thay doi Array goc thi su dung indexOf va Splice
const deleteSeventh = people.filter((person) => person.id !== 7);

//Bai 7
const memberNinth = people.find((person) => person.id === 9).name;

//Bai 8
const group2ndMonitor = people.find(
  (person) => person.group === 2 && person.isMonitor
).id;

//Bai 9
people.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

//Bai 10
const names = people.map(({ name }) => {
  const nameArr = name.split(" ");
  return nameArr[nameArr.length - 1];
});

//Bai 11
names.sort((a, b) => a.localeCompare(b));

//Bai 12
const noDuplicateNames = [...new Set(names)];

//Bai 13
const count = noDuplicateNames.map((name) => {
  return {
    name,
    occurence: names.filter((item) => item === name).length,
  };
});
const maxValue = Math.max(...count.map((item) => item.occurence));
const maxOccurenceNames = count.filter((item) => item.occurence === maxValue);

//Bai 14
const first5member = people.slice(0, 5);
people.slice(first5member.length, first5member.length + 5).concat(first5member);

//Bai 15
first5member.sort((a, b) => {
  const nameOfA = a.name.split(" ").pop();
  const nameOfB = b.name.split(" ").pop();
  return nameOfA.localeCompare(nameOfB);
});

//Bai 16
const divisibleBy3 = Object.values(peopleObj).filter(
  (person) => person.id % 3 === 0
);

//Bai 17
const anyMonitor = first5member.some((person) => person.isMonitor === true);
//Bai 18
const areAllMonitor = first5member.every((person) => person.isMonitor === true);

//Bai 19
const memberCode = people.map(({ id, name, group }) => {
  const lName = name.split(" ").pop();
  return `${lName}_${id}_${group}`;
});

//Bai 20
people.reverse();

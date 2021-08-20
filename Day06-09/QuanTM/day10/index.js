const data = [
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
    name: "Phan Tiến Thành",
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

//Bai 31
const peopleNames = data.map((person) => person.name.split(" ").pop());

//Bai 32
const stringNames = peopleNames.join(" ");

//Bai 33
const arrNames = stringNames.split(" ");

//Bai 34
const getNameOccurences = (name) => {
  const actualName = name.trim().toUpperCase();
  return stringNames
    .split(" ")
    .filter((item) => item.toUpperCase() === actualName).length;
};

//Bai 35
const getIdOfFirst = (name) => {
  const i = stringNames.split(" ").findIndex((item) => {
    return item.toUpperCase() === name.trim().toUpperCase();
  });
  return data[i].id;
};

//Bai 36
const getIdOfLast = (name) => {
  const i = stringNames
    .toUpperCase()
    .split(" ")
    .lastIndexOf(name.trim().toUpperCase());
  return data[i].id;
};

//Bai 37
const getNameOccByFChar = (character) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter((item) => item.startsWith(character.toUpperCase().trim())).length;
};

//Bai 38
const getNameOccByFAndLChar = (firstChar, lastChar) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter(
      (item) =>
        item.startsWith(firstChar.toUpperCase().trim()) &&
        item.endsWith(lastChar.toUpperCase().trim())
    ).length;
};

//Bai 39
const getNameOccByChar = (char) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter((item) => item.toUpperCase().includes(char.toUpperCase().trim()))
    .length;
};

//Bai 40
const printfString = () => {
  return peopleNames
    .map((name, index) => {
      if (index === 0) {
        return `Bạn ${name}`;
      }
      if (index === peopleNames.length - 1) {
        return `, cuối cùng là bạn ${name}`;
      }
      return `, tiếp theo là bạn ${name}`;
    })
    .join("");
};

//Bai 41
const createGroups = () => {
  return stringNames.toUpperCase().split(`THÀNH`);
};

//Bai 42
const groupsEndWithThanh = () => {
  return stringNames.toUpperCase().split(/(?<=THÀNH)\s/);
};

//Bai 43
const groupsStartWithThanh = () => {
  return stringNames.toUpperCase().split(/\s(?=THÀNH)/);
};

//Bai 44
const doubleData = () => {
  return stringNames.repeat(2);
};

//Bai 45
const replaceDung = () => {
  return stringNames.replace("Dũng", "Tuấn");
};

var listStudent = [
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
    name: "Phan Văn Trung",
    teamNumber: 2,
    position: "member",
  },
  {
    id: 8,
    name: "Nguyên Cao Hoàng",
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
    name: "Tạ Đưc Chiến",
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
    name: "Ngô Chúng Á Âu",
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
    teamNumber: 3,
    position: "member",
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    teamNumber: 5,
    position: "member",
  },
];

//Lay ra danh sach ten nhu bai 10
const names = listStudent.map(
  (o) => o.name.split(" ")[o.name.split(" ").length - 1]
);

// Dem su xuat hien cua ten bang field count va sap xep chung tu lon den nho
const countNames = names
  .map((o) => ({
    name: o,
    count: names.filter((e) => e == o).length,
  }))
  .sort((a, b) => b.count - a.count);

// Lay ra tan so xuat hien lon nhat
const maxCount = countNames[0].count;

// Lay ra danh sach cac ten co tan so xuat hien lon nhat, luu y trong 1 lop co the co nhieu ten co the lon nhat nen day phai la 1 mang.
const nameMaxCount = countNames
  .filter((o) => o.count == maxCount)
  .map((o) => o.name);

// Loc cac ten trung nhau
const result = new Set(nameMaxCount);

console.log(result);

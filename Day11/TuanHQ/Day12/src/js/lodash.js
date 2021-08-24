// import { data } from "./data.js";

const data = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
  },
  {
    id: 7,
    name: "Phan Văn Trung",
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
  },
  {
    id: 12,
    name: "Trần Công Tâm",
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
  },
  {
    id: 16,
    name: "Ngô Chung A Âu",
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
  },
  {
    id: 21,
    name: "Nguyễn Trung am",
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
  },
];

console.log(data);
// import _ from "lodash";

const dataNonLodash = [...data];

console.log("============= _.join ============");
/**
 * chuyển tất cả phần tử trong array thành một chuỗi va được phân tách băng phần từ phân tách
 */

const dataString = data.map((item) => item.name);
console.log(_.join(dataString, " + "));

console.log("=== Data non Lodash");
const dataNonLodashString = data.map((item) => item.name);
console.log(dataNonLodashString.join(" + "));

console.log("============= _.last ============");
/**
 * tra ve phan tu cuoi cung cua mang
 */

console.log(_.last(data));
console.log(dataNonLodash[dataNonLodash.length - 1]);

console.log("============= _.lastIndexOf ============");
/**
 * vi tri xuat hien cuoi cung cua phan tu duoc truyen vao
 */

const dataName = data.map((item) => {
  const names = item.name.split(" ");
  return names[names.length - 1];
});

console.log(dataName);
console.log(_.lastIndexOf(dataName, "Thành"));

console.log(dataName.lastIndexOf("Thành"));

console.log("============= _.nth ============");
/**
 * trả về phần tử ở chỉ số n của mảng. Nếu n âm, phần tử thứ n từ cuối được trả về.
 */

console.log(_.nth(dataName, 4) + " n = 4");
console.log(_.nth(dataName, -4) + " n = -4");

console.log(dataName[4]);

console.log("============= _.pull ============");
/**
 * xóa phần tử được truyền vào tham số
 */

const dataNamePull = _.pull(dataName, "Thành");
console.log(dataNamePull);

const dataNonLodashPull = dataNonLodash.filter((item) => item.id !== 10);
console.log(dataNonLodashPull);

console.log("============= _.pullAllBy ============");
/**
 *
 */

console.log("============= _.pullAllWith ============");
/**
 *
 */

console.log("============= _.pullAt ============");
/**
 *  Xóa các phần tử ttheo chỉ số, 2 chỉ số start và end được cung cấp dưới dạng mảng, tra vê mảng các phần tử bị xóa
 */

const dataPullAt = _.pullAt(data, [2, 4]);

console.log(dataPullAt);
console.log(data);

console.log("============= _.remove ============");
/**
 *  Xóa các phần tử thỏa mãn điều kiện, trả về các phần tử bị xóa
 */

console.log(
  _.remove(data, (item) => {
    return item.id % 2 === 0;
  })
);

console.log(dataNonLodash.filter((item) => item.id % 2 === 0));
console.log("============= _.reverse ============");
/**
 *  Đảo ngược mảng
 */

console.log(_.reverse(data));
console.log(dataNonLodash);

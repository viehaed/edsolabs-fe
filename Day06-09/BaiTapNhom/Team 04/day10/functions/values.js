import data from "../data.js";
/*
- Object.value() là một method dùng để tạo một new Array 
với tất cả những giá trị của thuộc tính trong một object.
- Sắp xếp theo cùng thứ tự được cung cấp bởi một vòng lặp for...in
- Cú pháp:
+ Object.values(obj), obj là đối tượng cần lấy danh sách value
+ Return value: Mảng chứa danh sách value của đối tượng đích
 */

console.log("");
console.log("====> HÀM OBJECT.VALUES() <=====");
console.log("");

console.log("\n\nVí dụ 1: Liệt kê các giá trị trong một mảng");
console.log(Object.values(data));

console.log(
  "\n\nVí dụ 2: Liệt kê các giá trị của thuộc tính trong một đối tượng"
);
console.log(Object.values(data[0]));

console.log("\n\nVí dụ 3: Cắt chuỗi thành từng từ ");
console.log(Object.values(data[0].name));

console.log("\n\nVí dụ 4: Thuộc tính không thể liệt kê ");
const obj = {
  ...data[0],
};
Object.defineProperty(obj, "nonEnumProp", {
  value: 100,
  enumerable: false,
});
console.log(obj);
console.log(Object.values(obj));

console.log(
  "Ví dụ 5: Trả về các thuộc tính có thể liệt kê của một đối tượng. Các thuộc tính được sắp xếp tăng dần"
);
const newdata = {
  75: {
    id: 1,
    name: "Nguyễn Văn Sơn",
    groupId: 1,
    position: "member",
  },
  26: {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    groupId: 1,
    position: "member",
  },
  54: {
    id: 3,
    name: "Trần Mạnh Quân",
    groupId: 4,
    position: "monitor",
  },
};

console.log(Object.values(newdata));

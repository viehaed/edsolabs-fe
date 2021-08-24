import data from "../data.js";
/*
- Phương thức Object.keys() trả về một mảng các key có thể
liệt kê của một đối tượng nhất định, được lặp lại theo thứ tự giống
như một vòng lặp thông thường.
- Cú pháp: 
+ Object.keys(obj), obj: đối tượng cần lấy danh sách keys
+ Return value: Mảng chứa danh sách key của đối tượng đích
 */
console.log("");
console.log("====> HÀM OBJECT.KEYS() <=====");
console.log("");

/**
 * Ví dụ 1 - Trả về các thuộc tính có thể liệt kê của mảng. Các thuộc tính
 * giống như thứ tự của mảng
 */
console.log(
  "\n\nVí dụ 1: Trả về các thuộc tính có thể liệt kê của mảng. Các thuộc tính giống như thứ tự của mảng"
);
console.log(Object.keys(data));

/**
 * Ví dụ 2 - Trả về các thuộc tính có thể liệt kê của một đối tượng
 */
console.log(
  "\n\nVí dụ 2:  Trả về các thuộc tính có thể liệt kê của một đối tượng"
);
console.log(Object.keys(data[0]));

/**
 * Ví dụ 3 - Trả về các thuộc tính có thể liệt kê của một đối tượng.
 * Các thuộc tính được sắp xếp tăng dần
 */
console.log(
  "\n\nVí dụ 3: Trả về các thuộc tính có thể liệt kê của một đối tượng. Các thuộc tính được sắp xếp tăng dần"
);
const newObj = {
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

console.log(Object.keys(newObj));

/**
 * Ví dụ 4 - Thuộc tính không thể liệt kê.
 */
console.log("\n\nVí dụ 4: Thuộc tính không thể liệt kê");
const obj = {
  ...data[0],
};
//thêm thuộc tính không đếm được cho obj
Object.defineProperty(obj, "nonEnumProp", {
  value: 100,
  enumerable: false,
});
console.log(obj);
console.log(Object.keys(obj));

/**
 * Ví dụ 5 - Trả về các thuộc tính có thể liệt kê của một chuỗi.
 * Các thuộc tính giống như thứ tự của chuỗi
 */
console.log(
  "\n\nVí dụ 4: Trả về các thuộc tính có thể liệt kê của một chuỗi. Các thuộc tính giống như thứ tự của chuỗi"
);
console.log(Object.keys(newObj[75].name));

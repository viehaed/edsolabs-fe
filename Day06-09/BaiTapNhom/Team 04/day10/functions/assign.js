import data from "../data.js";
/*
- Object.assign () sao chép các giá trị (của tất cả các thuộc tính riêng có thể liệt kê)
từ một hoặc nhiều đối tượng nguồn sang một đối tượng đích.
- Cú pháp :
+ Object.assign(target, ...sources)  , targer: Đối tượng đích ,sources: Các đối tượng nguồn
+ Các thuộc tính trong đối tượng đích sẽ bị ghi lại bởi các thuộc tính trong đối tượng nguồn nếu chúng có cùng key.
Tương tự, các thuộc tính nguồn sau sẽ ghi đè lên những thuộc tính nguồn trước.
+ Object.assign () không chấp nhận giá trị nguồn là null hoặc undefined
+ Return value: Đối tượng đích
*/
console.log("");
console.log("====> HÀM OBJECT.ASSIGN() <=====");
console.log("");

console.log("\n\nVí dụ 1: Merge an object (Hợp nhất một đối tượng)");
const first = {
  id: 1,
  name: "Nguyễn Văn Sơn",
};
const last = {
  groupId: 1,
  position: "member",
};
const person = Object.assign({}, first, last);
console.log(person);

console.log(
  "\n\nVí dụ 2: Merge and overwrite equal keys (Hợp nhất và ghi đè các khóa trùng nhau)"
);
console.log(
  Object.assign(
    { name: "Nguyễn Văn Sơn" },
    { name: "Nguyễn Hữu Ánh" },
    { name: "Trần Mạnh Quân" }
  )
);

console.log("\n\nVí dụ 3: Clone an object (Sao chép một đối tượng)");
const clone = Object.assign({}, data[0]);
console.log(clone);

console.log("\n\nVí dụ 4: Thuộc tính không đếm được");
const obj = { ...data[0] };
Object.defineProperty(obj, "nonEnumProp", {
  value: 100,
  enumerable: false,
});
console.log(obj);
console.log(Object.assign({}, obj));

console.log("\n\nVí dụ 5: Trường hợp lỗi xảy ra");
Object.defineProperty(obj, "unwritableProp", {
  value: 100,
  writable: false,
});
console.log(obj);
console.log(Object.assign(obj, { unwritableProp: 1 }));

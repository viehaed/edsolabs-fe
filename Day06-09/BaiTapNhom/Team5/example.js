const arrStudent = [
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

const arrStudentEdsoLabs = JSON.parse(JSON.stringify(arrStudent))

// assign() function

console.log("assign() function : ");
console.log("---Ví Dụ 1 : ");

const group = [, 1, 2];
const group2 = [3, 4, 5];
const newGroup1 = Object.assign(arrStudentEdsoLabs, group); // Arr[{...},1,2,{...},...]
// const newGroup2 = Object.assign(arrStudentEdsoLabs, group,group2); // Arr[3,4,5,{...},...]
// const newGroup3 = Object.assign(arrStudentEdsoLabs, group2,group); // Arr[3,1,2,{...},...]

console.log(newGroup1);
// console.log(newGroup2);
// console.log(newGroup3);
// console.log(arrStudentEdsoLabs); // .assign function returns the modified target object.

// Properties are overwritten if they are same KEY or INDEX .
// Both String and Symbol properties are copied.
// NOTE : Object.assign() does not throw on null or undefined sources. ( chạy thử thì vẫn overwritten :v)

console.log("---Ví Dụ 2 : ");

const target = { b: 2, c: 5 };
const source = { a: 1, b: null };

const returnedTarget = Object.assign(target, source);

console.log(target); //  Obj{ b: nul, c: 5, a: 1 }

console.log(returnedTarget); // Obj{  b: null, c: 5, a: 1, }

// Thứ tự của newTarget không đổi , sau đó copy lần lượt từ sourse

console.log("---Ví Dụ 3 : ");

function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1); // clone Obj2

  // Json.stringify : khi trao đổi data với máy chủ , data phải ở dạng String .
  // Convert a JavaScript Obj  into a String by JSON.stringify

  console.log(JSON.stringify(obj2)); // string { "a": 0, "b": { "c": 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // string { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // string { "a": 0, "b": { "c": 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // string { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // string { "a": 2, "b": { "c": 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // string  "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // string { "a": 2, "b": { "c": 3}}

  // Deep Clone
  // Convert a String  into a JavaScript Obj by JSON.parse
  // Theo cách hiểu cá nhân thì việc làm này sẽ khiến newObj sẽ khác vùng nhớ với target Obj

  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj3.a = 3;
  obj3.b.c = 4;
  console.log(JSON.stringify(obj1)); // string { "a": 0, "b": { "c": 0}}
  console.log(JSON.stringify(obj3)); // string { "a": 3, "b": { "c": 4}}
}

test();

console.log("---Ví Dụ 4 : ");

//Merging objects

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
const obj2 = Object.assign([], o1, o2, o3);
console.log(obj); // Obj { a: 1, b: 2, c: 3 }
console.log(obj2); // Arr [ a: 1, b: 2, c: 3 ]

// Properties được overwritten thứ tự Obj ngoài cùng vào và overwritten theo keys or index

console.log("---Ví Dụ 5 : ");

// Copying symbol-typed properties

const e1 = { a: 1 };
const e2 = { [Symbol("foo")]: 2 };

const eNew = Object.assign({}, e1, e2);
console.log(eNew); // { a : 1, [Symbol('foo')]: 2 }
Object.getOwnPropertySymbols(eNew); // [Symbol(foo)]
console.log(Object.getOwnPropertySymbols(eNew));
console.log(eNew.a);
// console.log(eNew.Symbol('foo'));

//getOwnPropertySymbols() : return Arr chứa Symbol property

console.log("---Ví Dụ 6 : ");

const p = Object.create(
  { foo: 1 },
  {
    // foo is on obj's prototype chain.
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  }
);

const copy = Object.assign({}, p);
console.log(p);
console.log(copy); // { baz: 3 }

// function conTrucTor(b) {
//   this.name = b;
// }
// conTrucTor.prototype.className = "Edsolabs"
// let y = new conTrucTor("minh");
// y.age = 18;
// console.log(y);

//some() and every() function

console.log("-----------------------------");
console.log("some() function : ");

console.log("---Ví Dụ 1 : ");

const result = arrStudentEdsoLabs.some((e, index, arr) => {
  return e.id % 2 == 0; //true
  // return index==3 ;  //true
  // return arr[0].group.groupId  ==1;  //true
});

const result2 = arrStudentEdsoLabs.every((e, index, arr) => {
  // return e.id % 2 == 0; // false
  // return index==3 ; // false
  return arr[0].group.groupId == 1; // true
});
console.log("some :" + result);
console.log("every :" + result2);

console.log("---Ví Dụ 2 : ");

function checkName(arr, name) {
  return (arr = arrStudentEdsoLabs.some((e) => name == e.name)); // true
  // return arr = arrStudentEdsoLabs.every((e) => name == e.name); // false
}
let check = checkName(arrStudentEdsoLabs, "Phùng Đắc Nhật Minh");
console.log(check);

console.log("---Ví Dụ 3 : ");

// Modifying items

let arr1 = [1, 2, 3, 4];
let a = arr1.every((elem, index, arr) => {
  arr[index + 1] -= 1;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});
console.log(a); //false

// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// Appending items

arr2 = [1, 2, 3, 4];
let b = arr2.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 3;
});
console.log(b); //false

// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// Deleting items

arr3 = [1, 2, 5, 6];
let c = arr3.every((elem, index, arr) => {  
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});
console.log(c); //true

// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2




// ví dụ 1 Kết hợp filter(), reverse() và map()

arrStudent.filter((hv) => (hv.group.groupId == 1))
.reverse()
.map(hv => console.log("học viên :" + hv.id + "," + hv.name));


// ví dụ thứ 2 

function filterByID(item) {
if (Number.isFinite(item.id) && item.id !== 0) {
  return true
}
return false
}


console.log(arrStudent.filter(filterByID));


// // ví dụ thứ 3

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

function filterItems(arr, query) {
return arr.filter(function(el) {
  return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
})
}

console.log(filterItems(fruits, 'ap')) // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')) // ['banana', 'mango', 'orange']


/**
* Tổng quan:
* arrayObject.filter(callback, contextObject);
* Phương thức filter() tạo một mảng mới bao gồm tất cả các phần 
* tử thoả mãn điều kiện được thực hiện bởi hàm callback().
* Bên trong, phương thức filter() lặp qua từng phần tử của mảng 
* và truyền từng phần tử vào hàm callback để kiểm tra.

*   Nếu hàm callback trả về true, nó bao gồm phần tử trong mảng trả về.
  Phương thức filter() chấp nhận hai đối số được đặt tên:

+   Một hàm callback
  Và một đối tượng tùy chọn.
  Giống như các phương thức lặp khác của đối tượng Array 
  như every(), some(), map() và forEach(), hàm callback có dạng sau:
  function callback(value,index,arr){...}

+   Đối số contexObject của phương thức filter() cũng là tùy chọn.
  Nếu bạn truyền giá trị này, bạn có thể tham chiếu nó bằng 
  cách sử dụng từ khóa this bên trong hàm callback.
  Điều quan trọng cần lưu ý là phương thức filter() 
  không thay đổi mảng ban đầu.
*/

// Tạo hàm kiểm tra giá trị phù hợp
// nằm trong khoảng nhất định
function giaTriPhuHop(giaTri) {
if (typeof giaTri !== 'number') {
  return false;
}
return giaTri >= this.canDuoi && giaTri <= this.canTren;
}

// Dữ liệu cần phải lọc
let duLieu = [10, 20, "30", 1, 5, "Filter JS", undefined, "ABC"];

// Tạo khoảng giá trị
let khoang = {
canDuoi: 1,
canTren: 10
};


// // Lọc giá trị bằng hàm filter()
let giaTriNamTrongKhoang = duLieu.filter(giaTriPhuHop, khoang);

console.log(giaTriNamTrongKhoang); // [10, 1, 5]
import arrStudentLabs from "./data.js";
let arrStudent = JSON.parse(JSON.stringify(arrStudentLabs));
let arrNewStd = arrStudent.map(function (item) {
 return item.name.split(" ")[item.name.split(" ").length - 1];
});
// console.log(arrNewStd);
export default arrNewStd;

 var newString32 = arrNewStd.join(",");
export {newString32};
var isArray33 = newString32.split(",");
export {isArray33};




import listStudent from "./liststudent.js";

console.log("BÀI 31");
function getName() {
    return listStudent.map(item => {
        let newItem = item.name.split(" ")
        return newItem[newItem.length - 1];
    })
}
export default getName;
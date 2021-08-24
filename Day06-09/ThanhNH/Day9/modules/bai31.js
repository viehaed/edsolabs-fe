import listStudent from "./listStudent.js";
function getName() {
    return listStudent.map(item => {
        let newItem = item.name.split(" ")
        return newItem[newItem.length - 1];
})}

export { getName };
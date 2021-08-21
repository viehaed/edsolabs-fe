import stuList from "./data.js";
export {nameArr} 
function getLastName(list){
    const result =[];
    list.map((e) =>{
        let fullName = e.name.split(" ");
        let lastName = fullName[fullName.length - 1];
        result.push(lastName);
    })
    return result;
}
let nameArr = getLastName(stuList)
export default getLastName;
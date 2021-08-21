import {string} from "./getSringName.js"
function countNameIncludeA(a){
    return string.split(" ")
        .filter((e)=>
            e.includes(a.toUpperCase()) || e.includes(a.toLowerCase())
        ).length
}
export default countNameIncludeA;
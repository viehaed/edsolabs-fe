import {string} from "./getSringName.js"
function countNameStartWithA(a){
    return string.split(" ").filter((e)=>e.startsWith(a.toUpperCase())).length
}
export default countNameStartWithA;
import {string} from "./getSringName.js"
function countNameStartWithAEndWithB(a,b){
    return string.split(" ").filter((e)=>
        e.startsWith(a.toUpperCase()) && e.endsWith(b.toLowerCase())
    ).length
}
export default countNameStartWithAEndWithB;

import {listStudent} from './app.js'

console.log("bai 31")
   export const bai31 = listStudent.map((item) => item.name.split(" ").pop());
    console.log(bai31)
    
    // bai32
    console.log("bai 32")
    export const bai32 = bai31.join(" ");
    console.log(bai32)


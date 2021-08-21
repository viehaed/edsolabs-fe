import addPoints from "./addPoints.js";
import getRandomInt from "./getRanDomInt.js";
export {dayArr}
const dayArr = [1,2,3,4,5,6,7]

function fakePoints(list){
    list.map((e) => {
        dayArr.map((o) =>{
            addPoints(
                e.id,
                o,
                getRandomInt(10),
                list
            )
        })
    })
    let newList = JSON.parse(JSON.stringify(list));
    return newList
}
export default fakePoints;
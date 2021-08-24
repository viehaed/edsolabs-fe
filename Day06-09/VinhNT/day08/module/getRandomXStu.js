import getRandomInt from "./getRanDomInt.js"
function getRandomXStu (x, list){
    let result = Array.from({length:x},() => {
        let a = getRandomInt(list.length)-1
        return list[a].name
    })
    console.log(result)
}
export default getRandomXStu;
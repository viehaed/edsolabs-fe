import getStuWithPoint from "./getStuWithPoint.js";
function getPair(x,y,list,arr){
    const data = getStuWithPoint(x,y,list);
    let result = [];
    arr.map((o) => {
        
        const subData = data.filter(e => e.groupId === o)
        const sortData = subData.sort(function(a,b){
            return b.total - a.total
        })
        let m = sortData.pop().name
        let n = sortData.shift().name
        result.push({hocvien1 : n, hocvien2:m, groupName: o})
    })    
    return result
}
export default getPair;
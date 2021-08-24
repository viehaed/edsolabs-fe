import getStuWithPoint from "./getStuWithPoint.js";
function topFiveStu(x,y,list){
    let newData = getStuWithPoint(x,y,list);
    const result = (newData.sort(function(a,b){
        return b.total - a.total;
    })).slice(0,5)
    console.log(result)
}
export default topFiveStu;
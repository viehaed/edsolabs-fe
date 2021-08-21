import getStuWithPoint from "./getStuWithPoint.js";
function getStuWithPointAndTime(x,y,z,list,dayArr){
    const result = [];
    const data = getStuWithPoint(x,y,list);
    const dayArr_28 = dayArr.slice(x-1,y)
    data.map((e)=>{
        dayArr_28.map((o)=>{
            if(e.points[o-1].point===z){
                result.push(e)
            }
        })
    })
    return result
}
export default getStuWithPointAndTime;
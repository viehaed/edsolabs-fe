import getStuWithPoint from "./getStuWithPoint.js";

function getGroupTotalPoint(x,y,list,arr){
    const data = getStuWithPoint(x,y,list);
    const result = [];
    arr.map((o)=>{

        const subData = data.filter(e => e.groupId === o)
        let groupTotal = 0;
        subData.forEach((e)=>{
            groupTotal  += e.total; 
        })
        result.push({
            groupName: o,
            totalPoint: groupTotal,
            points: subData.map((e) =>({
                hocvien: e.name,
                totalPoint: e.total
            }))
        })        
    })
    return result
    }
    export default getGroupTotalPoint;
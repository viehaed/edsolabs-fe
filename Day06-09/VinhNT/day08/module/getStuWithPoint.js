function getStuWithPoint(x,y,list){
    const range = Array.from({length:y-x+1},(_,i) => x +i)
    const result = list.map((e) => ({
        id : e.id,
        groupId : e.group.groupId,
        name : e.name,
        points : e.points,
        total : range.map((o) =>{
            let sum = 0;
            sum += list[e.id - 1].points[o-1].point
            return sum
        }).reduce(function(pre,cur){
            return pre + cur
        })
    }))
    // console.log(result)
    return result
}
export default getStuWithPoint;
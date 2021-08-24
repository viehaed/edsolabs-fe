function getStuFromGrX(x, list){
    let result = list.filter((e) => e.group.groupId === x)
    console.log(result)
}
export default getStuFromGrX;
function addPoints(stuId, day, point,list){
    if(list[stuId - 1].hasOwnProperty("points") === false){

        list[stuId - 1].points=[];
        list[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }else{
        list[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }
}
export default addPoints;
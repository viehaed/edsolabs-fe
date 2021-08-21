function pointForStudent(student, dayID, point){
    var pointInfo = {
      dayID: dayID,
      dayName: "Day "+(dayID),
      point: point
    };
  
    if(!student.points) {
      student.points = [];
      student.points.push(pointInfo);
    }
    else{
      let po = student.points.find(p => p.dayID == dayID);
      let res = student.points.includes(student.points.find(p => p.dayID == dayID));
      if(!res){
        student.points.push(pointInfo);
      }
      else{
        po.dayName = pointInfo.dayName;
        po.point = pointInfo.point
      }
    }
}

function groupPosition(student, source){
  let newArr = source.filter(item => item.groupId == student.groupId).sort((a,b) =>{
    return b.total - a.total;
  });

  return newArr.indexOf(student);
}

function classPosition(student, source){
  let newArr = source.sort((a,b) =>{
    return b.total - a.total;
  });

  return newArr.indexOf(student);
}


function doStudentPoints(student){
    let sumNumb = 0
    for(let i = 1; i < 8; i++){
        let numb = Math.floor(Math.random()*10);
        pointForStudent(student, i, numb);
        sumNumb += numb;

    }
    student.total = sumNumb;
    student.groupPosition = -1;
    student.classPosition = -1;
}


function doAllStudentPoints(source){
  
    for (let student of source) {
      doStudentPoints(student);
    }

    for (let student of source) {
      student.groupPosition = groupPosition(student, source) + 1;   
      student.classPosition = classPosition(student, source) + 1;
    }

    return source;
}

export default doAllStudentPoints
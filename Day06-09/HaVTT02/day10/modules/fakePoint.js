//Tạo điểm
function fakePoint(student, dayID, point){
    const pointInfo = {
      dayID: dayID,
      dayName: "Day " + dayID,
      point: point
    };
    if(!student.points) {
      student.points = [];
      student.points.push(pointInfo);
    }
    else{
        const p = student.points.find(p => p.dayID == dayID);
        const res = student.points.includes(student.points.find(p => p.dayID == dayID));
      if(!res){
        student.points.push(pointInfo);
      }
      else{
        p.dayName = pointInfo.dayName;
        p.point = pointInfo.point
      }
    }
}

//tạo điểm cho 7 ngày
function createPoints(student){
    let sum = 0
    for(let i = 0; i < 7; i++){
        const n = Math.floor(Math.random()*10);
        fakePoint(student, i, n);
        sum += n;

    }
    student.totalPoint  = sum;
    student.groups = -1;
    student.classPosition = -1;
}

// xếp hạng nhóm
function groups(student,listStudent ){
    const arr = listStudent.filter(item => item.group.groupId == student.group.groupId).sort((a,b) =>{
    return b.totalPoint  - a.totalPoint ;
  });
  return arr.indexOf(student);
}

// xếp hạng lớp
function classPosition(student){
  const arr = listStudent.sort((a,b) =>{
  return b.totalPoint  - a.totalPoint ;
});

return arr.indexOf(student);
}

function allsumPoint(listStudent){
  
  for (let student of listStudent) {
      createPoints(student);
  }

  for (let student of listStudent) {
    student.groups = groups(student) + 1;   
    student.classPosition = classPosition(student, listStudent) + 1;
  }

  return listStudent;
}

export default allsumPoint;
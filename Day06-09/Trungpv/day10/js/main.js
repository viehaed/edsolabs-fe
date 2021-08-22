import {listStudent} from '../js/listStudent.js'
import renderList  from '../js/renderList.js';


function Studentpoint(student, dayID, point){
    const pointDay = {
      dayID: dayID,
      dayName: "Day " + dayID,
      point: point
    };
    if(!student.points) {
      student.points = [];
      student.points.push(pointDay);
    }
    else{
        const p = student.points.find(p => p.dayID == dayID);
        const res = student.points.includes(student.points.find(p => p.dayID == dayID));
      if(!res){
        student.points.push(pointDay);
      }
      else{
        p.dayName = pointDay.dayName;
        p.point = pointDay.point
      }
    }
}
function PossitionId(student, source){
    const arr = source.filter(item => item.group.groupId == student.group.groupId).sort((a,b) =>{
    return b.total - a.total;
  });

  return arr.indexOf(student);
}

function classPosition(student, source){
    const arr = source.sort((a,b) =>{
    return b.total - a.total;
  });

  return arr.indexOf(student);
}


function fakePoin(student){
    let sum = 0
    for(let i = 1; i < 8; i++){
        const n = Math.floor(Math.random()*10);
        Studentpoint(student, i, n);
        sum += n;

    }
    student.total = sum;
    student.PossitionId = -1;
    student.classPosition = -1;
}


function crefakePoin(source){

    for (let student of source) {
      fakePoin(student);
    }

    for (let student of source) {
      student.PossitionId = PossitionId(student, source) + 1;   
      student.classPosition = classPosition(student, source) + 1;
    }

    return source;
} 


let btnCreatePoints = document.getElementById("btnCreatePoints"),
    btnCheck = document.getElementById("btnCheck"),
    content = document.getElementById("model");
var done = false;

console.log(listStudent);
btnCreatePoints.addEventListener("click", () => {
    crefakePoin(listStudent);
    done = true;
    alert("Giả lập điểm thành công");
    console.log(listStudent);
});

btnCheck.addEventListener("click", () => {
    const keyValue = document.getElementById("search").value;
    if (!keyValue) {
        alert("Tên không được bỏ trống");
        return;
    }
    else if (!done) {
        alert("Điểm chưa được giả lập");
        return;
    }
    else{
        const result = search(keyValue, listStudent);
        if (result.length == 0) {
            alert("Không tìm thấy bản ghi phù hợp");
        }
        else
        {
            content.innerHTML = renderList(result);
        }
    }
}); 
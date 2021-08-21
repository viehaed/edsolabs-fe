const listStudent = [
    {id: 1, name: "Nguyễn Văn Sơn", group : {groupId: 1, "position":"member"}}, 
    {id: 2, name: "Nguyễn Hữu Ánh", group : {groupId: 1, "position":"member"}},
    {id: 3, name: "Trần Mạnh Quân", group : {groupId: 4, "position":"leader"}},
    {id: 4, name: " Hà Quốc Tuấn", group : {groupId: 3, "position":"leader"}},
    {id: 5, name: "Hoàng Ngọc Thành", group : {groupId: 1, "position":"member"}},
    {id: 6, name: "Vũ Thị Thu Hà", group : {groupId: 2, "position":"member"}},
    {id: 7, name: "Phan Văn Trung", group : {groupId: 2, "position":"member"}},
    {id: 8, name: "Nguyễn Cao Hoàng", group : {groupId: 2, "position":"member"}},
    {id: 9, name: "Phùng Đắc Nhật Minh", group : {groupId: 5, "position":"leader"}},
    {id: 10, name: "Lê Việt Dũng", group : {groupId: 1, "position":"leader"}},
    {id: 11, name: "Đỗ Chí Công", group : {groupId: 2, "position":"member"}},
    {id: 12, name: "Trần Công Tâm", group : {groupId: 3, "position":"member"}},
    {id: 13, name: "Trương Thanh Tùng", group : {groupId: 3, "position":"member"}},
    {id: 14, name: "Tạ Đức Chiến", group : {groupId: 3, "position":"member"}},
    {id: 15, name: "Nguyễn Trọng Vĩnh", group : {groupId: 3, "position":"member"}},
    {id: 16, name: "Ngô Chung Á Âu", group : {groupId: 4, "position":"member"}},
    {id: 17, name: "Trần Thị Khánh Linh", group : {groupId: 2, "position":"leader"}},
    {id: 18, name: "Phan Tiến Thành", group : {groupId: 4, "position":"member"}},
    {id: 19, name: "Đỗ Văn Huy", group : {groupId: 4, "position":"member"}},
    {id: 20, name: "Nguyễn Trung Đức", group : {groupId: 5, "position":"member"}},
    {id: 21, name: "Nguyễn Trung Nam", group : {groupId: 5, "position":"member"}},
    {id: 22, name: "Trần Quốc Toàn", group : {groupId: 5, "position":"member"}}
]

function pointStudent(student, dayID, point){
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
function groupPosition(student, source){
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


function pointsStudent(student){
    let sum = 0
    for(let i = 1; i < 8; i++){
        const n = Math.floor(Math.random()*10);
        pointStudent(student, i, n);
        sum += n;

    }
    student.total = sum;
    student.groupPosition = -1;
    student.classPosition = -1;
}


function allPointsStudent(source){
  
    for (let student of source) {
      pointsStudent(student);
    }

    for (let student of source) {
      student.groupPosition = groupPosition(student, source) + 1;   
      student.classPosition = classPosition(student, source) + 1;
    }

    return source;
}


function search(key, source){
    return source.filter(item => {
        return item.name.trim().toUpperCase().includes(key.trim().toUpperCase());
    });
};


function renderList(source){
    let strHTML = '';
    for (let student of source) {

        strHTML +=
        `<div class="list">
            <div class="row">
                <div class="label">STT : </div>&nbsp
                <div id="id">${student.id}</div>
            </div>
            <div class="row">
                <div class="label">Họ và tên : </div>&nbsp
                <div id="name">${student.name}</div>
            </div>
            <div class="row">
                <div class="label">Nhóm : </div>&nbsp
                <div id="groupId">${student.group.groupId}</div>
            </div>
            <div class="row">
                <div class="label">Vị trí : </div>&nbsp
                <div id="position">${student.group.position}</div>
            </div>
            <div class="table">
                <table>
                    <tr>
                        <td rowspan="2">Điểm</td>
                        <td>Day 01</td>
                        <td>Day 02</td>
                        <td>Day 03</td>
                        <td>Day 04</td>
                        <td>Day 05</td>
                        <td>Day 06</td>
                        <td>Day 07</td>
                    </tr>
                    <tr>
                        <td>${student.points[0].point}</td>
                        <td>${student.points[1].point}</td>
                        <td>${student.points[2].point}</td>
                        <td>${student.points[3].point}</td>
                        <td>${student.points[4].point}</td>
                        <td>${student.points[5].point}</td>
                        <td>${student.points[6].point}</td>
                    </tr>
                </table>
            </div>
            <div class="row">
                <div class="label">Tổng điểm : </div>&nbsp
                <div id="total">${student.total}</div>
            </div>
            <div class="row">
                <div class="label">Xếp hạng nhóm : </div>&nbsp
                <div id="groupPosition">${student.groupPosition}</div>
            </div>
            <div class="row">
                <div class="label">Xếp hạng lớp : </div>&nbsp
                <div id="classPosition">${student.classPosition}</div>
            </div>
        </div>`;
    }

    return strHTML;
}


let btnCreatePoints = document.getElementById("btnCreatePoints"),
    btnCheck = document.getElementById("btnCheck"),
    content = document.getElementsByTagName("footer")[0];
var done = false;

console.log(listStudent);
btnCreatePoints.addEventListener("click", () => {
    allPointsStudent(listStudent);
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
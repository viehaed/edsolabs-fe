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
function groups(student){
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


function search(key){
    return listStudent.filter(item => {
        return item.name.trim().toUpperCase().includes(key.trim().toUpperCase());
    });
};


function render(listStudent){
    let str = '';
    for (let student of listStudent) {

        str +=
        `<div class="list">
            <div class="row">
                <p class="label">STT : </p>&nbsp
                <p id="id">${student.id}</p>
            </div>
            <div class="row">
                <p class="label">Họ và tên : </p>&nbsp
                <p id="name">${student.name}</p>
            </div>
            <div class="row">
                <p class="label">Nhóm : </p>&nbsp
                <p id="groupId">${student.group.groupId}</p>
            </div>
            <div class="row">
                <p class="label">Vị trí : </p>&nbsp
                <p id="position">${student.group.position}</p>
            </div>
            <div class="table">
                <p class="label">Điểm : </p>
                <table>
                    <tr>
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
                <p class="label">Tổng điểm : </p>&nbsp
                <p id="totalPoint ">${student.totalPoint }</p>
            </div>
            <div class="row">
                <p class="label">Xếp hạng nhóm : </p>&nbsp
                <p id="groups">${student.groups}</p>
            </div>
            <div class="row">
                <p class="label">Xếp hạng lớp : </p>&nbsp
                <p id="classPosition">${student.classPosition}</p>
            </div>
        </div>`;
    }

    return str;
}


let btnCreatePoints = document.getElementById("btnCreatePoints"),
    btnCheck = document.getElementById("btnCheck"),
    content = document.getElementsByTagName("footer")[0];
var done = false;

// button giả lập điểm
console.log(listStudent);
btnCreatePoints.addEventListener("click", () => {
    allsumPoint(listStudent);
    done = true;
    alert("Giả lập điểm thành công");
});

//button tra cứu điểm
btnCheck.addEventListener("click", () => {
    const keyValue = document.getElementById("search").value;
    if (!keyValue) {
        alert("Tên không được bỏ trống");
        return;
    }
    else if (!done) {
        alert("Chưa giả lập điểm");
        return;
    }
    else{
        const result = search(keyValue, listStudent);
        if (result.length == 0) {
            alert("Không tìm thấy bản ghi phù hợp. Vui lòng nhập ký tự chữ cái.");
        }
        else
        {
            content.innerHTML = render(result);
        }
    }
});
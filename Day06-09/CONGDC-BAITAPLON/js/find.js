import data from "./data.json" assert { type: "json" };
console.log(data);
function inputName() {
   
    const fullName = document.getElementById('user-text').value;
    console.log(fullName)
    const findStudent = data.filter((item) => {
        return item.name.trim().toUpperCase().includes(fullName.trim().toUpperCase());
    })
    
    if(findStudent == undefined) {
        alert("Vui Lòng nhập tên")
    }
    

    var listUserHtml = '';
    findStudent.forEach((user) => {
        
        
      
        var find23 = data.filter(function (find23, index) {
            return find23.groupid == user.groupid;
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        console.log(find23)
        var groupRank = find23.indexOf(data.find((o) => {
            return o.name == user.name
        })) + 1;
        console.log(groupRank)
       
        listUserHtml += 
        `<div class="showInfor">
            <div class="infor-row">
                <div class="label">STT</div>
                <div id="id">${user.id}</div>
            </div>
            <div class="infor-row">
                <div class="label">Họ tên</div>
                <div id="name">${user.name}</div>
            </div>
            <div class="infor-row">
                <div class="label">Nhóm</div>
                <div id="groupId">${user.group.groupid}</div>
            </div>
            <div class="infor-row">
                <div class="label">Chức vụ</div>
                <div id="position">${user.group.position}</div>
            </div>
            <div class="infor-row">
                <div class="label">Tổng điểm</div>
                <div id="total">${user.totalPoints}</div>
            </div>
            <div class="infor-table">
                <table>
                    <tr>
                        <td rowspan="2">Bảng điểm</td>
                        <td>Day 01</td>
                        <td>Day 02</td>
                        <td>Day 03</td>
                        <td>Day 04</td>
                        <td>Day 05</td>
                        <td>Day 06</td>
                        <td>Day 07</td>
                    </tr>
                    <tr>
                        <td>${user.points[0].point}</td>
                        <td>${user.points[1].point}</td>
                        <td>${user.points[2].point}</td>
                        <td>${user.points[3].point}</td>
                        <td>${user.points[4].point}</td>
                        <td>${user.points[5].point}</td>
                        <td>${user.points[6].point}</td>
                    </tr>
                </table> 
            </div>`

    });
    document.getElementById('showInfor').innerHTML = listUserHtml;

}

export default inputName; 
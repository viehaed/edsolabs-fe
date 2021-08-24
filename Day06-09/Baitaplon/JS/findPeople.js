import data from "./listMember.json" assert { type: "json" };
console.log(data);
function inputName() {
    const fullName = document.getElementById('user-text').value;
    
    const findStudent = data.filter((item) => {
        return item.name.trim().toUpperCase().includes(fullName.trim().toUpperCase());
    })
    console.log(findStudent)
    if (findStudent.length == 0) {
        alert('Không tìm thấy kết quả')
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
        //Thay đổi html
        listUserHtml += `<div class="infor">
        <p class="text"><i class="fab fa-angellist"></i>STT: ${user.id}</p>
        <p class="text"><i class="fab fa-angellist"></i>Tên: ${user.name}</p>
        <p class="text"><i class="fab fa-angellist"></i>Nhóm: ${user.groupid}</p>
        <p class="text"><i class="fab fa-angellist"></i>Vị trí: ${user.position}</p>
        <p class="text"><i class="fab fa-angellist"></i>Tổng điểm: ${user.totalPoints}</p>
        <p class="text"><i class="fab fa-angellist"></i>Day 1: <span>${user.points[0].point} điểm</span></p>
        <p class="text"><i class="fab fa-angellist"></i>Day 2: <span>${user.points[1].point} điểm</span></p>
        <p class="text"><i class="fab fa-angellist"></i>Day 3: <span>${user.points[2].point} điểm</span></p>
        <p class="text"><i class="fab fa-angellist"></i>Day 4: <span>${user.points[3].point} điểm</span></p>
        <p class="text"><i class="fab fa-angellist"></i>Day 5: <span>${user.points[4].point} điểm</span></p>
        <p class="text"><i class="fab fa-angellist"></i>Xếp hạng nhóm:${groupRank} </p>
        <p class="text"><i class="fab fa-angellist"></i>Xếp hạng lớp: ${user.rank}</p></div>
        `
    });
    document.getElementById('showInfor').innerHTML = listUserHtml;

}

export default inputName;
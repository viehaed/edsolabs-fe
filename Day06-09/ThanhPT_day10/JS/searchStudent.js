import data from "./data.json" assert { type: "json" };
console.log(data);

const inputName = ()=> {
    const fullName = document.getElementById('nameStudent').value;
    console.log(fullName)
    const findStudent = data.filter((item) => {
        return item.name.trim().toUpperCase().includes(fullName.trim().toUpperCase());
    })
    console.log(findStudent)
    if (findStudent.length == 0) {
        alert('Không tìm thấy kết quả')
    }
    //Thông báo
    var listUserHtml = '';
    findStudent.forEach((user) => {
        // Tạo rank group
        const findRank = data.filter(function (item, index) {
            return item.groupId == user.groupId;
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        console.log(findRank)
        var groupRank = findRank.indexOf(data.find((o) => {
            return o.name == user.name
        })) + 1;
        console.log(groupRank)
        //Thay đổi html
        listUserHtml += `<div class="infor">
        <p class="text">STT: ${user.id}</p>
        <p class="text">Tên: ${user.name}</p>
        <p class="text">Nhóm: ${user.groupId}</p>
        <p class="text">Vị trí: ${user.position}</p>
        <p class="text">Tổng điểm: ${user.totalPoints}</p>
        <p class="text">Điểm ngày 1: <span>${user.points[0].point} điểm</span></p>
        <p class="text">Điểm ngày 2: <span>${user.points[1].point} điểm</span></p>
        <p class="text">Điểm ngày 3: <span>${user.points[2].point} điểm</span></p>
        <p class="text">Điểm ngày 4: <span>${user.points[3].point} điểm</span></p>
        <p class="text">Điểm ngày 5: <span>${user.points[4].point} điểm</span></p>
        <p class="text">Xếp hạng nhóm:${groupRank} </p>
        <p class="text">Xếp hạng lớp: ${user.rank}</p></div>
        <br>
        <br>
        `
    });
    document.getElementById('showInfor').innerHTML = listUserHtml;
}

export default inputName;
import data from "./data.json" assert { type: "json" };
console.log(data);
function inputName() {
   
    const fullName = document.getElementById('user-text').value;
    console.log(fullName)
    
    const findStudent = data.find((find9) => {
        return find9.name === fullName;
    })
    
    if(findStudent == undefined) {
        alert("Vui Lòng nhập đầy đủ họ tên")
    }
    const users = []
    users.push(findStudent)
    console.log(users)

    var listUserHtml = '';
    users.forEach((user) => {
        
        const pointPer = user.points.map((point) => {
            return `Ngay ${point.dayID} : ${point.point} điểm `;
        })
      
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
       
        listUserHtml += `<p class="text">
        STT: ${user.id}</p>
        <p class="text">Tên: ${user.name}</p>
        <p class="text">Nhóm: ${user.group.groupid}</p>
        <p class="text">Vị trí: ${user.group.position}</p>
        <p class="text">Tổng điểm: ${user.totalPoints}</p>
        <p class="text">${pointPer}</p>
        <p class="text">Xếp hạng nhóm:${groupRank} </p>
        <p class="text">Xếp hạng lớp: ${user.rank}</p>
        `
    });
    document.getElementById('showInfor').innerHTML = listUserHtml;

}

export default inputName; 
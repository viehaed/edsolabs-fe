import data from "./listMember.json" assert { type: "json" };
console.log(data);
function inputName() {
    
    const checkName = document.getElementById('user-text').value;//Lấy dữ liệu
    console.log(checkName)
    
    const findMember = data.find((find1) => {
        return find1.name === checkName;// Kiểm tra tên để tra cứu điểm
    })

    if(findMember == undefined) {//Nếu nhập sai hiện thông báo
        alert("Vui lòng kiểm tra lại họ tên học viên để tra cứu điểm")
    }
    const users = []
    users.push(findMember)
    console.log(users)

    var listUserHtml = '';
    users.forEach((user) => {
        //Trả về điểm theo ngày
        const pointOFDay = user.points.map((point) => {
            return `Day ${point.dayID} : ${point.point} điểm `;
        })
        
        var find2 = data.filter(function (find2, index) {
            return find2.groupid == user.groupid;
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        console.log(find2)
        var groupRank = find2.indexOf(data.find((o) => {
            return o.name == user.name
        })) + 1;
        console.log(groupRank)

        //Xây dựng thêm trong html
        listUserHtml += `<p class="text">
        STT: ${user.id}</p>
        <p class="text">Tên: ${user.name}</p>
        <p class="text">Nhóm: ${user.groupid}</p>
        <p class="text">Vị trí: ${user.position}</p>
        <p class="text">Tổng điểm: ${user.totalPoints}</p>
        <p class="text">${pointOFDay}</p>
        <p class="text">Xếp hạng nhóm:${groupRank} </p>
        <p class="text">Xếp hạng lớp: ${user.rank}</p>
        `
    });
    document.getElementById('inforMember').innerHTML = listUserHtml;

}

export default inputName;
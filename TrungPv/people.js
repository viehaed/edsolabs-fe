import data from "./data.json" assert { type: "json" };
console.log(data);

function inputName() {
    const checkName = document.getElementById('user-text').value;//Lấy dữ liệu
    console.log(checkName)

    const findMember = data.find((seachName) => {
        return seachName.name === checkName;// Kiểm tra tên để tra cứu điểm
    })

    if(findMember == undefined) {//Nếu nhập sai hiện thông báo
        alert("Vui lòng nhập đầy đủ họ tên")
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

        var seachPeopel = data.filter(function (seachPeopel, index) {
            return seachPeopel.groupid == user.groupid;
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        console.log(seachPeopel)
        var groupRank = seachPeopel.indexOf(data.find((o) => {
            return o.name == user.name
        })) + 1;
        console.log(groupRank)

        //Xây dựng thêm trong html
        listUserHtml += `<li class="text">
        STT: ${user.id}</li>
        <li class="text">Tên: ${user.name}</li>
        <li class="text">Nhóm: ${user.group.groupid}</li>
        <li class="text">Vị trí: ${user.group.position}</li>
        <li class="text">Tổng điểm: ${user.totalPoints}</li>
        <li class="text">${pointOFDay}</li>
        <li class="text">Xếp hạng nhóm:${groupRank} </li>
        <li class="text">Xếp hạng lớp: ${user.rank}</li>
        `

      
    });
    document.getElementById('member').innerHTML = listUserHtml;

}

export default inputName;
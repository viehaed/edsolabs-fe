import data from "./data.json" assert { type: "json" };
console.log(data);

const inputName = ()=> {
    const fullName = document.getElementById('nameStudent').value;
    console.log(fullName)
    const findStudent = data.find((item) => {
        return item.name.trim().toUpperCase().includes(fullName.trim().toUpperCase());
    })
    const users = []
    users.push(findStudent)
    console.log(users)

    var listUserHtml = '';
    users.forEach((user) => {
        // Điểm theo  ngày
        const pointPer = user.points.map((point) => {
            return `Ngày  ${point.dayID} : <span>  ${point.point}  điểm  </span> <br> <br>`;
        })
        // Tạo rank group
        const findRank = data.filter(function (item, index) {
            return item.groupId == user.groupId;
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        })
        console.log(findRank)
        const groupRank = findRank.indexOf(data.find((o) => {
            return o.name == user.name
        })) + 1;
        console.log(groupRank)
        //Thay đổi html
        listUserHtml += `<p class="text">
        STT: ${user.id}</p>
        <p class="text">Tên: ${user.name}</p>
        <p class="text">Nhóm: ${user.groupId}</p>
        <p class="text">Vị trí: ${user.position}</p>
        <p class="text">Tổng điểm: ${user.totalPoints}</p>
        <p class="text">${pointPer}</p>
        <p class="text">Xếp hạng nhóm:${groupRank} </p>
        <p class="text">Xếp hạng lớp: ${user.rank}</p>
        `
    });
    document.getElementById('showInfor').innerHTML = listUserHtml;

}

export default inputName;
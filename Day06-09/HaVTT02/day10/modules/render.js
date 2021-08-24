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
            <div class="row">
                <p class="label">Điểm : 
                    Day 01 : ${student.points[0].point} | 
                    Day 02 : ${student.points[1].point} | 
                    Day 03 : ${student.points[2].point} | 
                    Day 04 : ${student.points[3].point} | 
                    Day 05 : ${student.points[4].point} | 
                    Day 06 : ${student.points[5].point} |
                    Day 07 : ${student.points[6].point}
                </p>
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

export default render;
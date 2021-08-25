function renderList(source){
    let strHTML = ``;
    for (let student of source) {

        strHTML +=
        `<div class="info-student">
            <div class="infor-row">
                <div class="label">STT</div>
                <div id="id">${student.id}</div>
            </div>
            <div class="infor-row">
                <div class="label">Họ tên</div>
                <div id="name">${student.name}</div>
            </div>
            <div class="infor-row">
                <div class="label">Nhóm</div>
                <div id="groupId">${student.groupId}</div>
            </div>
            <div class="infor-row">
                <div class="label">Chức vụ</div>
                <div id="position">${student.position}</div>
            </div>
            <div class="infor-row">
                <div class="label">Tổng điểm</div>
                <div id="total">${student.total}</div>
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

            <div class="infor-row">
                <div class="label">Vị trí trong nhóm</div>
                <div id="groupPosition">${student.groupPosition}</div>
            </div>
            <div class="infor-row">
                <div class="label">Vị trí trong lớp</div>
                <div id="classPosition">${student.classPosition}</div>
            </div>
        </div>`;
    }

    return strHTML;
}

export default renderList
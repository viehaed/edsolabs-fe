
const searchPerson = (call, value, content, alert) => {
    let indexGroup;
    let indexClass;
    // let check;

    const findName = call.
        filter(item => item.name.
            toLocaleLowerCase() == value.value.toLocaleLowerCase() || item.name.split(" ").pop().
                toLocaleLowerCase() == value.value.toLocaleLowerCase())


    const htmls = findName.map(item => {
        const listDayPoint = item.points.map((item) => (`${item.dayName}: điểm ${item.point}`)).join(", ");
        call.filter((point) => point.groupId == item.groupId).
            sort((a, b) => (b.totalPoint - a.totalPoint)).map((x, y) => {
                const namePerson = x.name.toLocaleLowerCase();
                if (namePerson.includes(item.name.toLocaleLowerCase())) {
                    indexGroup = y + 1
                }
            })
        call.sort((a, b) => (b.totalPoint - a.totalPoint)).map((x, y) => {
            const namePerson = x.name.toLocaleLowerCase();
            if (namePerson.includes(item.name.toLocaleLowerCase())) {
                indexClass = y + 1
            }
        })
        return `
                    <div class="info">
                    <p><span class="title">STT:</span><span class="info--conetnt">${item.id}</span></p> 
                    <p><span class="title">Tên đầy đủ:</span><span class="info--conetnt">${item.name}</span></p>
                    <p><span class="title">Nhóm:</span><span class="info--conetnt">${item.groupId}</span></p>
                    <p><span class="title">Vị Trí:</span><span class="info--conetnt">${item.position}</span></p>
                    <p><span class="title">Tổng điểm:</span><span class="info--conetnt">${item.totalPoint}</span></p>
                    <p><span class="title">Điển:</span><span class="info--conetnt">${listDayPoint}</span> </p>
                    <p><span class="title">Xếp hạng nhóm:</span><span class="info--conetnt">${indexGroup}</span></p>
                    <p><span class="title">Xếp hạng lớp:</span><span class="info--conetnt">${indexClass}</span></p>
                    </div>
                `
    })
    if (findName.length == 0) {
        content.innerHTML = ""
        alert("Không có kết quả", "err");
    }
    else {
        alert.innerHTML = "";
        alert("", "none");
        content.innerHTML = htmls.join(" ");
    }
}

export default searchPerson;
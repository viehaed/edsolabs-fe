
const searchPerson = (call, value, content, alert) => {
    let indexGroup;
    let indexClass;
    // let check;
    // "call là data gọi vào"

    const findName = call.
        filter(item => item.name.
            toLocaleLowerCase() == value.value.toLocaleLowerCase() || item.name.split(" ").pop().
                toLocaleLowerCase() == value.value.toLocaleLowerCase())
// findname là so sánh với input nhập vào trả ra mảng 

    const htmls = findName.map(item => {
        const listDayPoint = item.points.map((item) => (`${item.dayName}: điểm ${item.point}`)).join(", ");
        
        
        call.filter((point) => point.groupId == item.groupId).
            sort((a, b) => (b.totalPoint - a.totalPoint)).map((x, y) => {
                // sắp xếp vị từ lớn đến bé
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
                    <p><span class="title">STT:</span><span class="info--content">${item.id}</span></p> 
                    <p><span class="title">Tên đầy đủ:</span><span class="info--content">${item.name}</span></p>
                    <p><span class="title">Nhóm:</span><span class="info--content">${item.groupId}</span></p>
                    <p><span class="title">Vị Trí:</span><span class="info--content">${item.position}</span></p>
                    <p><span class="title">Tổng điểm:</span><span class="info--content">${item.totalPoint}</span></p>
                    <p><span class="title">Điển:</span><span class="info--content">${listDayPoint}</span> </p>
                    <p><span class="title">Xếp hạng nhóm:</span><span class="info--content">${indexGroup}</span></p>
                    <p><span class="title">Xếp hạng lớp:</span><span class="info--content">${indexClass}</span></p>
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
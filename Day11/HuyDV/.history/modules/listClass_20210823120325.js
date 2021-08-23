const list = (call, value, content, alert) => {
    console.log(call.sort((a,b)=>a.id - b.id));
    let indexGroup;
    let indexClass;
    // let check;
    const htmls = call.map(item => {
        // console.log(item);
        // const listDayPoint = item.points.map((item) => (`${item.dayName}: điểm ${item.point}`)).join(", ");
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
                    <li class="splide__slide">
                    <p><span>STT:</span>${item.id}</p> 
                    <p><span>Tên đầy đủ:</span>${item.name}</p>
                    <p><span>Nhóm:</span>${item.groupId}</p>
                    <p><span>Vị Trí:</span>${item.position}</p>
                    <p><span>Tổng điểm:</span>${item.totalPoint}</p>
                    <p><span>Xếp hạng nhóm:</span>${indexGroup}</p>
                    <p><span>Xếp hạng lớp:</span>${indexClass}</p>
                    </li>
                `
    })
    return htmls.join(" ")
}


export default list;
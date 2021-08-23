const list = (call, value, content, alert) => {
    console.log(call);
    let indexGroup;
    let indexClass;
    // let check;
    const htmls = call.sort((a,b)=>(b.totalPoint - a.totalPoint)).map(item => {
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
                    <p><span class="title">STT:</span><span class="info--content">${item.id}</span></p> 
                    <p><span class="title">Tên đầy đủ:</span><span class="info--content">${item.name}</span></p>
                    <p><span class="title">Nhóm:</span><span class="info--content">${item.groupId}</span></p>
                    <p><span class="title">Vị Trí:</span><span class="info--content">${item.position}</span></p>
                    <p><span class="title">Tổng điểm:</span><span class="info--content">${item.totalPoint}</span></p>
                    <p><span class="title">Xếp hạng nhóm:</span><span class="info--content">${indexGroup}</span></p>
                    <p><span class="title">Xếp hạng lớp:</span><span class="info--content">${indexClass}</span></p>
                    </li>
                `
    })
    return htmls.join(" ")
}


export default list;
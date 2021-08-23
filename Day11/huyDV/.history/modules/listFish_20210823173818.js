const list = (call, value, content, alert) => {
    console.log(call);
    let indexGroup;
    let indexClass;
    // let check;
    const htmls = call.sort((a, b) => (b.totalPoint - a.totalPoint)).map(item => {
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
        <div class="drag-drop">
        <img src="./img/hai-3702737_960_720.png" alt="">
        <p>
        ${item.id}
        </p>
        </div> `
    })
    return htmls.join(" ")
}


export default list;
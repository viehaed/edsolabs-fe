const list = (call) => {
    console.log(call);
    const htmls = call.sort((a, b) => (b.totalPoint - a.totalPoint)).map(item => {
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
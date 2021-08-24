
function doDrag() {
    const position = { x: Math.random(), y: Math.random()}

       
    interact('.draggable').draggable({

        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        listeners: {
            start (event) {
            console.log(event.type, event.target)
            },
            move (event) {
                position.x += event.dx
                position.y += event.dy

                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
            },
        }
    })
}


function createDrag(source) {
    let str = ``;
    for (let student of source) {
        str += `
            <div class="draggable drag-${student.id}">
                <p>STT: ${student.id}</p>
                <p>Họ tên: ${student.name}</p>
                <p>Nhóm: ${student.groupId}</p>
                <p>Vai trò: ${student.position}</p>
            </div>
        `;
    }

    let dragContent = document.getElementsByClassName("drag")[0];
    dragContent.innerHTML = str;

    doDrag();
}

export default createDrag;
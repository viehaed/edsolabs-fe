import data from "../day4/modules/data.js";
let $List = document.querySelector(".container");
// $List.innerHTML = "minh"
const html = data
    .map((item) => {
        return `<div id="drag-${item.id}" class="draggable">
        <p class="student-name
        ">
         ${item.name}
        </p>

    </div>`;
    })
    .join(" ");
$List.innerHTML = html;

// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            // call this function on every dragend event
            // end(event) {
            //     var textEl = event.target.querySelector('p')

            //     textEl && (textEl.textContent =
            //         'moved a distance of ' +
            //         (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            //             Math.pow(event.pageY - event.y0, 2) | 0))
            //         .toFixed(2) + 'px')
            // }
        }
    })

function dragMoveListener(event) {
    var target = event.target
        // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


const resizableContainer = interact('#container')
const draggable = interact('.draggable')

draggable.on('tap', function(event) {
    // start a drag action to apply modifiers
    draggable.reflow({ name: 'drag', axis: 'xy' })
})

// the usual interact actions setup
resizableContainer.resizable({
    edges: { bottom: true, right: true },
    modifiers: [
        interact.modifiers.restrictEdges({
            outer: 'html',
        }),
        interact.modifiers.restrictEdges({
            min: { width: 200, height: 200 }
        })
    ],
    listeners: {
        move: function(event) {
            let { x, y } = event.target.dataset

            x = (parseFloat(x) || 0) + event.deltaRect.left
            y = (parseFloat(y) || 0) + event.deltaRect.top

            Object.assign(event.target.style, {
                width: `${event.rect.width}px`,
                height: `${event.rect.height}px`,
                transform: `translate(${x}px, ${y}px)`
            })

            Object.assign(event.target.dataset, { x, y })
        }
    }
})

draggable.draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: document.querySelector('#container'),
            endOnly: true,
        })
    ],
    listeners: {
        move(event) {
            const x = (parseFloat(event.target.dataset.x) || 0) + event.dx
            const y = (parseFloat(event.target.dataset.y) || 0) + event.dy

            event.target.style.transform =
                `translate(${x}px, ${y}px)`
            Object.assign(event.target.dataset, { x, y })
        },
    }
})
const data = [
    {
        id: 1,
        name: 'Nguyễn Sơn',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 2,
        name: 'Nguyễn Ánh',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 3,
        name: 'Trần Quân',
        group: {
            groupId:4,
            position: 'leader'
        }
    },
    {
        id: 4,
        name: 'Hà Tuấn',
        group: {
            groupId:3,
            position: 'leader'
        }
    },
    {
        id: 5,
        name: 'Hoàng Thành',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 6,
        name: 'Vũ Hà',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 7,
        name: 'Phan Trung',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 8,
        name: 'Nguyễn Hoàng',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 9,
        name: 'Nhật Minh',
        group: {
            groupId:5,
            position: 'leader'
        }
    },
    {
        id: 10,
        name: 'Lê Dũng',
        group: {
            groupId:1,
            position: 'leader'
        }
    },
    {
        id: 11,
        name: 'Đỗ Công',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 12,
        name: 'Trần Tâm',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 13,
        name: 'Thanh Tùng',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 14,
        name: 'Tạ Chiến',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 15,
        name: 'Trọng Vĩnh',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 16,
        name: 'Á Âu',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 17,
        name: 'Khánh Linh',
        group: {
            groupId:2,
            position: 'leader'
        }
    },
    {
        id: 18,
        name: 'Tiến Thành',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 19,
        name: 'ĐỗHuy',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 20,
        name: 'Trung Đức',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 21,
        name: 'Trung Nam',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 22,
        name: 'Quốc Toàn',
        group: {
            groupId:5,
            position: ''
        }
    }
];
const pos = {x : 0,y :0}
interact('.fish').draggable({
    listeners: {
        start(e) {
            console.log(e.type,e.target)
        },
        move (e) {
            pos.x += e.dx;
            pos.y += e.dy;

            e.target.style.transform = `translate(${pos.x}px,${pos.y}px)`
        }
    }
})
function getRandom() {
    return data.sort(() => 0.5 - Math.random()).slice(0,5);
}
const btn = document.querySelector('.btn-drag-fish')
const results = document.querySelector('.water')
const handleDropFish = () => {
    btn.addEventListener('click', () => {
        const numOfFish = getRandom();
        const html = numOfFish.map((st) => {
            return `<div class="fish">
            <img width="120px" src="./fish-png.png" alt="con cá">
            <div class="name-tag">
                <span class="name">${st.name}</span>
            </div>
        </div>`
        }).join('')
        if(html) {
            results.innerHTML = html
        }
    })
}
handleDropFish();

function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

interact('.fish')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    listeners: { 
        move: dragMoveListener
    }
})
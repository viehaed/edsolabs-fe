import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };
import 'https://cdn.interactjs.io/v1.9.20/auto-start/index.js'
import 'https://cdn.interactjs.io/v1.9.20/actions/drag/index.js'
import 'https://cdn.interactjs.io/v1.9.20/actions/resize/index.js'
import 'https://cdn.interactjs.io/v1.9.20/modifiers/index.js'
import 'https://cdn.interactjs.io/v1.9.20/dev-tools/index.js'
import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'
let listPointStudent = moduleFn.randomPoints(data);
const findStudentByName = moduleFn.findStudentByName
const app = (() => {
    const search = document.querySelector('.search-input')
    const btnSearch = document.querySelector('.btn-search')
    const results = document.querySelector('.results')
    const btnRandom = document.querySelector('.btn-random')

    return {
        render(valueName) {
            if (valueName) {
                let infoStudentElement = findStudentByName(valueName, listPointStudent).map(item => {
                    let dayPoint = item.points.map(s => s[0] + ": " + s[1] + " | ").join('')
                    return `<ul class="info-students">
                            <li>STT: ${item.stt}</li>
                            <li>Tên đầy đủ: ${item.name}</li>
                            <li>Nhóm: ${item.group}</li>
                            <li>Vị trí: ${item.position}</li>
                            <li>Tổng điểm: ${item.totalPoint}</li>
                            <li>${dayPoint}</li>
                            <li>Xếp hạng nhóm: ${item.groupRank}</li>
                            <li>Xếp hạng lớp: ${item.classRank}</li>
                        </ul>`
                }).join('')
                if (infoStudentElement)
                    results.innerHTML = infoStudentElement
                else {
                    alert("Tên học viên bạn vừa nhập không có!")
                    results.innerHTML = ""
                }
            }
            else {
                alert("Bạn vui lòng nhập tên học viên muốn tìm!")
                results.innerHTML = ""
            }
        },
        handleSearch(e) {
            e.preventDefault()
            let valueName = search.value.trim()
            this.render(valueName)
            search.value = null
            search.focus()

        },
        handleRandom(e) {
            e.preventDefault()
            listPointStudent = moduleFn.randomPoints(data);
            alert("Giả lập điểm thành công")
            search.focus()
            this.slides()
        },
        slides() {
            document.addEventListener('DOMContentLoaded', function () {
                new Splide('.splide', {
                    type: 'loop',
                    perPage: 4,
                    autoplay: true,
                    breakpoints: {
                        '1024': {
                            perPage: 2,
                            autoplay: true,
                        },
                        '576': {
                            perPage: 1,
                            autoplay: true,
                        }
                    }
                }).mount();
            });
            const slides = document.querySelector('.splide__list')
            let slideElement = listPointStudent.map(item => {
                return `<li class="splide__slide">
                         <div class="student-slide">
                            <p>STT: ${item.id}</p>
                            <p>Tên đầy đủ: ${item.name}</p>
                            <p>Nhóm: ${item.group.groupID}</p>
                            <p>Vị trí: ${item.group.position}</p>
                         </div>
                        </li>`
            }).join('')
            if (slideElement)
                slides.innerHTML = slideElement
        },

        namesDragElement(event) {
            const dragList = document.querySelector('.drag-list')
            let itemsDrag = listPointStudent.map(item => {
                return `<li class="drag-item">
                            <p>${item.name.split(" ").pop()}<i class="fas fa-fish"></i></p>
                        </li>`
            }).join('')
            if (itemsDrag)
                dragList.innerHTML = itemsDrag

        },
        dragMoveListener(event) {
            this.animationFish()
            interact('.drag-item')
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
                        move: this.dragMoveListener.bind(this),
                    }
                })

            let target = event.target
            let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)

        },
        animationFish() {
            window.addEventListener('load', () => {
                setInterval(() => {
                    let dragItem = document.querySelectorAll('.drag-item')
                    Array.from(dragItem).forEach((item, i) => {

                        item.style.transition = ' 1s'

                        if (i < 18 && i > 4)
                            item.style.transform = 'translate(' + (Math.random() * i) + 'px,' + (Math.random() * i + 100) + 'px)'

                        else if (18 <= i && i <= 21)
                            item.style.transform = 'translateY(' + (Math.random() * 6 * -i) + 'px)'
                        else
                            item.style.transform = 'translateY(' + (Math.random() * 20 * (i + 1)) + 'px)'

                    })
                }, 1000)
            })
        },
        init() {
            this.slides()
            this.namesDragElement()
            this.dragMoveListener()
            btnSearch.addEventListener("click", this.handleSearch.bind(this))
            btnRandom.addEventListener("click", this.handleRandom.bind(this))
            // search.addEventListener('input', (e) =>  this.render(e.target.value)
        }
    }

})()
app.init()
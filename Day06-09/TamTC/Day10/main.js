// import { findStudentByName } from './modules/findStudentByName.js'
import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

let listPointStudent = moduleFn.randomPoints(data);
const findStudentByName = moduleFn.findStudentByName
const showSlidesType = moduleFn.showSlidesType

const app = (() => {
    const search = document.querySelector('.search-input')
    const btnSearch = document.querySelector('.btn-search')
    const results = document.querySelector('.results')
    const btnRandom = document.querySelector('.btn-random')

    return {
        render(valueName) {
            if (valueName) {
                let html = findStudentByName(valueName, listPointStudent).map(item => {
                    let dayPoint = item.points.map(s => `
                    <tr>
                        <td>${s[0]}</td>
                        <td class="points">${s[1]}</td>
                    </tr>`).join('')
                    return `<ul class="info-students">
                            <li>STT: ${item.stt}</li>
                            <li>Tên đầy đủ: ${item.name}</li>
                            <li>Nhóm: ${item.group}</li>
                            <li>Vị trí: ${item.position}</li>
                            <li>Tổng điểm: ${item.totalPoint}</li>
                            <li class="points-days">
                                <table cellspacing="0" border="1">
                                    <tbody>${dayPoint}</tbody>
                                </table>
                            </li>
                            <li>Xếp hạng nhóm: ${item.groupRank}</li>
                            <li>Xếp hạng lớp: ${item.classRank}</li>
                        </ul>`
                }).join('')
                if (html)
                    results.innerHTML = html
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
        },
        slides() {
            showSlidesType()
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
        init() {
            this.slides()
            btnSearch.addEventListener("click", this.handleSearch.bind(this))
            btnRandom.addEventListener("click", this.handleRandom.bind(this))
            // search.addEventListener('input', (e) =>  this.render(e.target.value)
        }
    }

})()
app.init()
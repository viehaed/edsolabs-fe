// import { findStudentByName } from './modules/findStudentByName.js'
import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

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
                let html = findStudentByName(valueName, listPointStudent).map(item => {
                    let dayPoint = item.points.map(s => s[0] + ": " + s[1] + " | ").join('')
                    return `<ul>
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
        init() {
            btnSearch.addEventListener("click", this.handleSearch.bind(this))
            btnRandom.addEventListener("click", this.handleRandom.bind(this))
            // search.addEventListener('input', (e) =>  this.render(e.target.value)
        }
    }

})()
app.init()
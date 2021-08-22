import { moduleFn } from "./index.js";
import data from "./data.json" assert { type: "json" };

let listPointStudent = moduleFn.generatorPointClass(data);
const findStudentByName = moduleFn.findStudentByName
const search = document.querySelector('.search')//class input
const btnSearch = document.querySelector('.btn-search')//btn tra cuu diem
const results = document.querySelector('.result')
const handleSearch = () => {
    btnSearch.addEventListener('click', () => {
        const valueName = search.value
        if (valueName) {
            const html = findStudentByName(valueName, listPointStudent).map(item => {
                console.log(item)
                let dayPoint = item.points.map(s => s[0].bold() + ": " + s[1] + " | ").join('')
                return `<h2>Kết quả tìm kiếm</h2>
                        <ul>
                            <li><b>STT: </b>${item.stt}</li>
                            <li><b>Tên đầy đủ: </b>${item.name}</li>
                            <li><b>Nhóm: </b>${item.group}</li>
                            <li><b>Vị trí: </b>${item.position}</li>
                            <li><b>Tổng điểm: </b>${item.totalPoint}</li>
                            <li>${dayPoint}</li>
                            <li><b>Xếp hạng nhóm: </b>${item.groupRank}</li>
                            <li><b>Xếp hạng lớp: </b>${item.classRank}</li>
                        </ul>`
            }
            ).join('')
            if (html) {
                results.innerHTML = html
            } else {
                alert("Không có kết quả phù hợp")
                results.innerHTML = 'null'
            }
        }
        else {
            alert("Vui lòng nhập tên tìm kiếm")
            results.innerHTML = 'null'
        }
    })
}
const randomPoints = () => {
    const btnRandom = document.querySelector('.btn-random')
    btnRandom.addEventListener('click', () => {
        listPointStudent = []
        listPointStudent = moduleFn.generatorPointClass(data)
        moduleFn.totalPointInClass(listPointStudent)
        console.log(listPointStudent)
        alert("Giả lập thành công")
    })
}
handleSearch()
randomPoints()
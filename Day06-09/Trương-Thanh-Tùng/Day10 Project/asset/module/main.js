import { moduleFn } from "./index.js";
import data from "./data.json" assert { type: "json" };

let listPointStudent = []
const findStudentByName = moduleFn.findStudentByName
const search = document.querySelector('.search')//class input
const btnSearch = document.querySelector('.btn-search')//btn tra cuu diem
const results = document.querySelector('.result')
const handleSearch = () => {
    btnSearch.addEventListener('click', () => {
        const valueName = search.value.trim()
        console.log(valueName)
        if (valueName) {
            const html = findStudentByName(valueName, listPointStudent).map(item => {
                console.log(item)
                let dayPoint = item.points.map(s => s[0].bold() + ": " + s[1] + " | ").join('')
                return `<h2>Kết quả tìm kiếm</h2>
                        <ul>
                            <li class="list"><b>STT: </b>${item.stt}</li>
                            <li class="list"><b>Tên đầy đủ: </b>${item.name}</li>
                            <li class="list"><b>Nhóm: </b>${item.group}</li>
                            <li class="list"><b>Vị trí: </b>${item.position}</li>
                            <li class="list"><b>Tổng điểm: </b>${item.totalPoint}</li>
                            <li class="list">${dayPoint}</li>
                            <li class="list"><b>Xếp hạng nhóm: </b>${item.groupRank}</li>
                            <li class="list"><b>Xếp hạng lớp: </b>${item.classRank}</li>
                        </ul>`
            }
            ).join('')
            if (html) {
                results.innerHTML = html
            } else {
                alert("Không có kết quả phù hợp")
                results.innerHTML = '<h2> Chưa giả lập điểm hoặc không có kết quả phù hợp</h2>'
            }
        }
        else {
            alert("Vui lòng nhập tên tìm kiếm")
            results.innerHTML = '<h2>Không có kết quả phù hợp</h2>'
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


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        perPage:1,
        // type:'loop',
        start:11,
        rewind:true
    }).mount();
} );

const getList = document.querySelector('.splide__list')
function displayList() {
    const html = data.map((st) => {
        return `<li class="splide__slide">
                    <ul class="list-student-slide">
                        <li class="list"><b>STT:</b> ${st.id}</li>
                        <li class="list"><b>Họ và tên:</b> ${st.name}</li>
                        <li class="list"><b>Nhóm:</b> ${st.group.groupID}</li>
                        <li class="list"><b>Vị trí:</b> ${st.group.position}</li>
                    </ul>
                </li>`
    }).join('');
    if(html) {
        getList.innerHTML = html
    }
}
displayList();
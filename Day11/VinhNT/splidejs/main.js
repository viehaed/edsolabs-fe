import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };
// console.log(data)
let listPointStudent = moduleFn.generatorPointClass(data);
moduleFn.totalPointInClass(listPointStudent)
// console.log(listPointStudent)
const findStudentByName = moduleFn.findStudentByName
const handleSearch = () => {
    const search = document.querySelector('.searchbar')//class input
    const btnSearch = document.querySelector('.btn-search')//btn tra cuu diem
    const results = document.querySelector('.results')
    btnSearch.addEventListener('click', () => {
        const valueName = search.value
        if (valueName) {
            const html = findStudentByName(valueName, listPointStudent).map(item => {
                console.log(item)
                let dayPoint = item.points.map(s => s[0] + ": " + s[1] + " | ").join('')
                return `<ul>
                            <li>STT:${item.stt}</li>
                            <li>Tên đầy đủ:${item.name}</li>
                            <li>Nhóm:${item.group}</li>
                            <li>Vị trí:${item.position}</li>
                            <li>Tổng điểm:${item.totalPoint}</li>
                            <li>${dayPoint}</li>
                            <li>Xếp hạng nhóm:${item.groupRank}</li>
                            <li>Xếp hạng lớp:${item.classRank}</li>
                        </ul>`
            }
            ).join('')
            if (results)
                results.innerHTML = html
        }
        else
            results.innerHTML = ""
    })
}
let randomPoints = () => {
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
        type : 'loop',
        // rewind: true,
        perPage : 3,
        perMove : 1,
        focus : 'center',
        // height: '110px',
        start : 1,
        // gap:'100em'
        arrows: 'slider',
        pagination: 'slider'

    } ).mount();
} );
const list = document.querySelector('.splide__list')
const displayList = () =>{
    const info = listPointStudent.map((e) => {
        return `<li class="splide__slide">
                    <div class="info">
                        <ul>
                            <li><i class="fas fa-chevron-right"></i><b>Id</b>: ${e.id}</li>
                            <li><i class="fas fa-chevron-right"></i><b>Fullname</b>: ${e.name}</li>
                            <li><i class="fas fa-chevron-right"></i><b>Group</b>: ${e.group.groupID}</li>
                            <li><i class="fas fa-chevron-right"></i><b>Position</b>: ${e.group.position}</li>
                        </ul>
                    </div>
                </li>`
    }).join('')
    if(info){
        list.innerHTML = info
    }
}
displayList();

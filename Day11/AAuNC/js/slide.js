

function createSlide(source){
    let strHTML = ``;
    for (let student of source) {

        strHTML +=
        `<li class="splide__slide">
            <div>
                <p>STT: ${student.id}</p>
                <p>Họ tên: ${student.name}</p>
                <p>Nhóm: ${student.groupId}</p>
                <p>Vai trò: ${student.position}</p>
            </div>
        </li>`;
    }

    let slideContent = document.getElementsByClassName("splide__list")[0];
    slideContent.innerHTML = strHTML;
}  

export default createSlide;
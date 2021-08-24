import data from "./data2.json" assert { type: "json" }
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type: 'loop',
        perPage: 2,
        padding: {
            right: '4rem',
            left: '4rem',
        },
        width: '800px',
    }).mount();

    const slide = document.querySelector(".splide__list");
    
    const html = data.map((item) => {
        return `<li class="content splide__slide">
        <p>STT:${item.id}</p>
        <p>Tên:${item.name}</p>
        <p>Nhóm:${item.groupid}</p>
        <p>Vị trí:${item.position}</p>
    </li>`
    })
    if(html) {
        slide.innerHTML = html;
    }
});
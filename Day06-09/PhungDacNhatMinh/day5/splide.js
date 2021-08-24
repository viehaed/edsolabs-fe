import data from "../day4/modules/data.js";


let $List = document.querySelector(".splide__list");

const html = data
    .map((item) => {
        return `<ul class="splide__slide ">
        <li class="student-id">
          STT: ${item.id}
        </li>
        <br>
        <li class="student-name">
          Tên đầy đủ: ${item.name}
        </li>
        <br>
        <li class="student-group">
          Nhóm: ${item.group.groupId}
        </li>
        <br>
        <li class="student-role">
          Vị trí: ${
            item.group.position === "member" ? "Thành viên" : "Lớp trưởng"
          }
        </li>
        <br>
    </ul>`;
    })
    .join(" ");
$List.innerHTML = html;
new Splide(".splide", {
    type: "loop",
    perPage: 1,
    pagination: true,
    autoplay: true,
    interval: 1000,
    // pauseOnHover: true,
    pauseOnFocus: false,
}).mount();
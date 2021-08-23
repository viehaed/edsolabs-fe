import { people } from "./scoreSimulator.js";

const infoContainer = document.querySelector(".splide__list");

const generateItems = () => {
  const list = people.map(({ id, name, groupId, position }) => {
    return `<article class="item splide__slide">
      <ul>
        <li class="student-id">
          STT:
          <p class="info">${id}</p>
        </li>
        <li class="student-name">
          Tên đầy đủ:
          <p class="info">${name}</p>
        </li>
        <li class="student-group">
          Nhóm:
          <p class="info">${groupId}</p>
        </li>
        <li class="student-role">
          Vị trí:
          <p class="info">${
            position === "member" ? "Thành viên" : "Lớp trưởng"
          }</p>
        </li>
      </ul>
    </article>`;
  });
  infoContainer.innerHTML = list;
  new Splide(".splide", {
    type: "loop",
    autoplay: true,
    classes: {
      pagination: "splide__pagination pagination",
      page: "splide__pagination__page page",
      arrows: "splide__arrows arrows",
    },
  }).mount();
};

window.addEventListener("DOMContentLoaded", () => {
  generateItems();
});

import {
  createPointOneWeek,
  createPoint,
  getTotalPointIn,
  topTotalPoint,
  softRankMemberGroup,
} from "./modules/controller.js";
import data from "./data.json" assert { type: "json" };

const dataDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const inputSearchElement = document.querySelector("#search");
const eleListSearch = document.querySelector("#listSearch");

document
  .querySelector("#importPoint")
  .addEventListener("click", handleImportPoint);
document
  .querySelector("#btnSearch")
  .addEventListener("click", getValueInputSearch);
inputSearchElement.addEventListener("change", getValueInputSearch);

/// xử lý data
function handleImportPoint() {
  data.forEach((o) => {
    createPointOneWeek(o.id, data, dataDay, createPoint);
  });
  getTotalPointIn(1, 7, data);
  topTotalPoint(data);
  softRankMemberGroup(data);

  const newData = softRankMemberGroup(data);
  newData.map((person) => {
    return data
      .filter((data) => data.id === person.id)
      .map((data) => data.group.rank === person.group.rank);
  });
}

function getValueInputSearch() {
  const searchValue = inputSearchElement.value;
  const mess = `<p>không có học viên Nào</p>`;
  const dataSearch =
    searchValue === ""
      ? ""
      : data
          .filter(
            (o) =>
              o.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(
                  searchValue
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                ) && o?.points !== undefined
          )
          .map((o, i) => {
            return `
            <li class='splide__slide'>
                <ul class="list__search">
                    <li>STT: <Span>${o.id}</Span></li>
                    <li>Tên đầy đủ: <span>${o.name}</span></li>
                    <li>Nhóm: <span>${o.group.groupId}</span></li>
                    <li>Vị trí: <span>${o.group.position}</span></li>
                    <li>Tổng điểm: <span>${o.totalPoint}</span></li>
                    <li>${o.points.map((e) => {
                      return ` <span> Day${e.idDay}: ${e.point}</span>`;
                    })}</li>
                    <li>Xếp hạng nhóm: <span>${o.group.rank}</span></li>
                    <li>Xếp hạng lớp: <span>${i + 1}</span></li>
                </ul>
            </li>
      `;
          });

  //// create swiper slide data student
  eleListSearch.innerHTML = dataSearch.length === 0 ? mess : dataSearch;

  new Splide("#splide", {
    type: "loop",
    perPage: 3,
    autoplay: true,
  }).mount();
}

const dropNameInTable = () => {
  const dataName = data.map((o) => {
    return `
    <div class="drop-student" id="#yes-drop"><img src="https://2img.net/h/bestanimations.com/Animals/Fish/clownfishanimation-28.gif" alt="">${o.name}</div>
    `;
  });
  document.querySelector("#namePerson").innerHTML = dataName;

  ////// Drop student in table
  interact(".drop-student").draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "self",
        endOnly: true,
      }),
    ],
    // enable autoScroll
    autoScroll: true,
    listeners: { move: dragMoveListener }
  });

  function dragMoveListener(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.transform = "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }

  // this function is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

  interact("#tableDropZone").dropzone({
    // only accept elements matching this CSS selector
    accept: "#yes-drop",
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
    // listen for drop related events:
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
      draggableElement.classList.add("can-drop");
      draggableElement.textContent = "Dragged in";
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove("can-drop");
      event.relatedTarget.textContent = "Dragged out";
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = "Dropped";
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
    },
  });
};
window.addEventListener("DOMContentLoaded", dropNameInTable);

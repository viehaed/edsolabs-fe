import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

let listPointStudent = [];

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    start: 0,
    keyboard: true,
    type: "loop",
    rewindSpeed: 400,
    focus: "center",
    perPage: 2,
    trimSpace: true,
    autoplay: true,
    interval: 2000,
    height: "260",
  }).mount();

  const slide = document.querySelector(".splide__list");

  let html = data
    .map((item) => {
      return `<li class="splide__slide splide--item">

                  <p>Tên đầy đủ: ${item.name}</p>
                  <p>Nhóm: ${item.group.groupID}</p>
                  <p class="positionGroup">Vị trí: ${item.group.position}</p>

            </li>`;
    })
    .join("");

  if (slide) slide.innerHTML = html;
});

document
  .getElementById("generatorPoint")
  .addEventListener("click", function () {
    listPointStudent = [];
    listPointStudent = moduleFn.generatorPointClass(data);
    listPointStudent = moduleFn.totalPointInClass(listPointStudent);

    // xep hang trong nhom va trong lop
    listPointStudent.map((student) => {
      student.rankGroup = moduleFn.getTopInGroup(
        student.group.groupID,
        student.id,
        listPointStudent
      );

      student.rankClass = moduleFn.getTopInClass(listPointStudent, student.id);
    });

    notification("Giả lập dữ liệu thành công!");
  });

document
  .getElementById("findStudentByName")
  .addEventListener("click", function () {
    //get input
    let nameInput = document.getElementById("nameStudent").value;
    // tim kiem danh sach hoc vien trung ten
    let listStudentSearch = moduleFn.findStudentByName(
      listPointStudent,
      nameInput
    );

    handleSearch(nameInput, listStudentSearch);
  });

const handleSearch = (value, listStudentSearch) => {
  let valueName = value.trim();
  if (valueName === "") {
    notification("Vui lòng nhập tên học viên");
  } else {
    let text = `Tìm thấy ${listStudentSearch.length} kết quả`;
    notification(text);
  }

  const result = document.querySelector("#result");
  const resultList = document.querySelector("#result-list");
  if (valueName) {
    let count = 1;
    let htmlTable = listStudentSearch
      .map((item) => {
        let dayPoint = item.points
          .map((point) => `Day ${point.dayId}: ${point.point} | `)
          .join("")
          .trim();
        return `<tr>
              <td>${count++}</td>
              <td>${item.name}</td>
              <td>${item.group.groupID}</td>
              <td class="positionGroup">${item.group.position}</td>
              <td>${item.totalPoint}</td>
              <td>${item.rankGroup}</td>
              <td>${item.rankClass}</td>
            </tr>
            <tr>
              <td colspan="7">${dayPoint}</td>
            </tr>`;
      })
      .join("");

    // list result
    let htmlList = listStudentSearch
      .map((item) => {
        let dayPoint = item.points
          .map((point) => `Day ${point.dayId}: ${point.point} | `)
          .join("")
          .trim();
        return `<ul>

                            <li>STT: ${count++}</li>
                            <li>Tên đầy đủ: ${item.name}</li>
                            <li>Nhóm: ${item.group.groupID}</li>
                            <li>Vị trí: ${item.group.position}</li>
                            <li>Tổng điểm: ${item.totalPoint}</li>
                            <li>${dayPoint}</li>
                            <li>Xếp hạng nhóm: ${item.rankGroup}</li>
                            <li>Xếp hạng lớp: ${item.rankClass}</li>
                        </ul>`;
      })
      .join("");

    if (result) {
      document.getElementById("table-result").classList.add("block");
      result.innerHTML = htmlTable;
    }

    if (resultList) resultList.innerHTML = htmlList;
  } else result.innerHTML = "";
};

const notification = (text) => {
  const noti = document.getElementById("notification");
  noti.innerText = text;

  // setTimeout(function () {
  //   noti.classList.add("d-none");
  // }, 2000);
};

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
      <ul class="list__search">
                    <li>STT: <Span>${o.id}</Span></li>
                    <li>Tên đầy đủ: <span>${o.name}</span></li>
                    <li>Nhóm: <span>${o.group.groupId}</span></li>
                    <li>Vị trí: <span>${o.group.position}</span></li>
                    <li>Tổng điểm: <span>${o.totalPoint}</span></li>
                    <li>${o.points.map((e) => {
                      return `<span> Day${e.idDay}: ${e.point}</span>`;
                    })}</li>
                    <li>Xếp hạng nhóm: <span>${o.group.rank}</span></li>
                    <li>Xếp hạng lớp: <span>${i + 1}</span></li>
                </ul>
      `;
          });
  eleListSearch.innerHTML = dataSearch.length === 0 ? mess : dataSearch;
}

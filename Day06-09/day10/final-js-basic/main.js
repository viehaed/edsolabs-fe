import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

let dataClone = JSON.parse(JSON.stringify(data));
const dataDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const inputSearchElement = document.querySelector("#search");
const elementListSearch = document.querySelector("#listSearch");

document
  .querySelector("#importPoint")
  .addEventListener("click", handleImportPoint);
document
  .querySelector("#btnSearch")
  .addEventListener("click", getValueInputSearch);
inputSearchElement.addEventListener("change", getValueInputSearch);

/// xử lý data
function handleImportPoint() {
  dataClone = JSON.parse(JSON.stringify(data));
  dataClone.forEach((o) => {
    moduleFn.createPointOneWeek(o.id, dataClone, dataDay, moduleFn.createPoint);
  });

  moduleFn.getTotalPointIn(1, 7, dataClone);
  moduleFn.softTotalPoint(dataClone);

  const newData = moduleFn.softRankMemberGroup(dataClone);
  newData.map((person) => {
    return dataClone
      .filter((data) => data.id === person.id)
      .map((data) => data.group.rank === person.group.rank);
  });
  alert("Giả lập thành công!");
}

function getValueInputSearch() {
  const searchValue = inputSearchElement.value;
  const mess = `<p>không tìm thấy học viên nào</p>`;
  const dataSearch =
    searchValue === ""
      ? `<p>Chưa nhập tên học viên, vui lòng nhập tên học viên!</p>`
      : moduleFn.findStudentByName(dataClone, searchValue).map((o, i) => {
          if (o?.points === undefined) {
            return `<p>Bạn chưa giả lập điểm, hãy gải lập điểm để sử dụng tìm kiếm</p>`;
          }

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
  elementListSearch.innerHTML = dataSearch.length === 0 ? mess : dataSearch;
}

import scoreSimulator, { didSimulate } from "./scoreSimulator.js";
import renderList from "./renderList.js";
import searchPerson from "./searchPerson.js";
import { raiseAlert } from "./utils.js";

const simulateBtn = document.querySelector(".simulate-simulator");
const searchBtn = document.querySelector(".search-student");
const input = document.querySelector(".student-name-input");

simulateBtn.addEventListener("click", () => {
  scoreSimulator();
  raiseAlert("success", "Giả lập điểm thành công");
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const term = input.value.trim().toUpperCase();

  if (!term) {
    raiseAlert("error", "Tên không được bỏ trống");
    return;
  }
  if (!didSimulate) {
    raiseAlert("error", "Điểm chưa được giả lập");
    return;
  }

  const result = searchPerson(term);
  if (result.length === 0) {
    raiseAlert("error", "Không tìm thấy bản ghi phù hợp");
  }

  renderList(result);
});

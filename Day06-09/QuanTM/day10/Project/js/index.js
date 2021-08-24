import scoreSimulator from "./scoreSimulator.js";
import renderList from "./renderList.js";
import searchPerson from "./searchPerson.js";
import { raiseAlert } from "./utils.js";
import "./slide.js";

const simulateBtn = document.querySelector(".simulate-simulator");
const searchBtn = document.querySelector(".search-student");
const input = document.querySelector(".student-name-input");
const infoContainer = document.querySelector(".info-center");

window.addEventListener("DOMContentLoaded", () => {
  scoreSimulator();
});

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

  const result = searchPerson(term);
  if (result.length === 0) {
    raiseAlert("error", "Không tìm thấy bản ghi phù hợp");
  }

  renderList(infoContainer, result);
});

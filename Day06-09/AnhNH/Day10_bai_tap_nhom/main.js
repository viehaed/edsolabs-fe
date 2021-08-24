import data from "./data.json" assert { type: "json" };
import sumPoint from "./modules/sumTotal.js";
import { sortSum } from "./modules/action.js";

const $ = document.querySelector.bind(document);
const inputValue = $("input");
const pointFake = $(".pointFake");
const pointSearch = $(".pointSearch");
const listData = $(".listData");
const status = $(".status");
const elms = document.getElementsByClassName("splide");
const splideList = $("#splide-list");
const list_fish = $(".list_fish");
const sortTeam = sortSum(2, 6, 1);
const render = sumPoint().sort((a, b) => a.sums - b.sums);
let trangthai = false;
document.getElementById("pointFake").addEventListener("click", () => {
  trangthai = true;
  alert("Bạn vừa Giả Lập điểm xog hãy Tra cứu điểm");
});
document.getElementById("pointSearch").addEventListener("click", () => {
  if (trangthai == false) {
    return alert("Bạn phải giả lập điểm trước  !");
  } else {
    if (inputValue.value.trim().length > 0) {
      let indexClass = "";
      let str = render
        .map((item, index) => {
          if (
            item.name.toLowerCase().includes(inputValue.value.toLowerCase())
          ) {
            let number = "";
            sortTeam.forEach((a) => {
              a.forEach((x, i) => {
                if (x.name.toLowerCase() === item.name.toLowerCase()) {
                  number = `<p>Vị trí điểm trong nhóm: ${i+1}</p>`;
                }
              });
            });
            indexClass = `<p>Vị trí điểm trong lớp: ${index+1}</p>`;
            const fakePoints = item.points.map((subItem) => {
              return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span> `;
            });
            return (
              `<p>STT: ${item.id}</p>
                    <p>Tên đầy đủ: ${item.name}</p>
                    <p>Vị trí: ${item.group.position}</p>
                    <p>Tổng điểm: ${item.sums}</p>
                    <p class="listPoint">${fakePoints}</p>` +
              number +
              indexClass
            );
          }
        })
        .join(" ");
      status.classList.remove("searching");
      status.classList.add("simulating");
      listData.innerHTML = str;
    }
  }
});
// Giả Lập điểm
pointFake.onclick = () => {
  let sortTeam = sortSum(2, 6, 1);
  let reRender = sumPoint().sort((a, b) => a.sums - b.sums);
  if (inputValue.value.trim().length > 0) {
    let indexClass = "";
    let str = reRender
      .map((item, index) => {
        if (item.name.toLowerCase().includes(inputValue.value.toLowerCase())) {
          let number = "";
          sortTeam.forEach((a) => {
            a.forEach((x, i) => {
              if (x.name.toLowerCase() === item.name.toLowerCase()) {
                number = `<p>Vị trí điểm trong nhóm: ${i+1}</p>`;
              }
            });
          });
          indexClass = `<p>Vị trí điểm trong lớp: ${index+1}</p>`;
          return (
            `<p>STT: ${item.id}</p>
                <p>Tên đầy đủ: ${item.name}</p>
                <p>Vị trí: ${item.group.position}</p>
                <p>Tổng điểm: ${item.sums}</p>
                <p class="listPoint">Điểm từng ngày: ${item.points.map(
              (subItem) => {
                return `<span> ${subItem.dayName}: ${subItem.point} điểm |</span>     `;
              }
            )}</p>` +
            number +
            indexClass +
            "<p></p>"
          );
        }
      })
      .join("");
    status.classList.remove("simulating");
    status.classList.add("searching");
    listData.innerHTML = str;
  }
};

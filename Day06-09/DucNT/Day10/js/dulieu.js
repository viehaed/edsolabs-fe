// import {arrStudent} from "../Day08/data.js";
import data from "./data.json" assert { type: "json" };
import sumPoint from "./sumPoint.js";

function sortClass() {
  let newArr = sumPoint();
  return newArr.sort((a, b) => b.sums - a.sums);
}
console.log(sortClass());
let nameValue = document.getElementById("value");

function exportData() {
  let newArr = sortClass();
  return newArr.filter((el) => el.name.includes(nameValue.value));
}

function rankTeam() {
  let local = sumPoint();
  let newArr = [];
  for (let i = 1; i <= 5; i++) {
    let subArr = [];
    local.forEach((item) => {
      if (item.teamNumber === i) {
        subArr.push(item);
      }
    });
    newArr.push(subArr);
  }
  let valueArr = newArr.map((item) => item.sort((a, b) => b.sums - a.sums));
  return valueArr;
}
let trangthai = false;
document.getElementById("fakePoint").addEventListener("click", () => {
  trangthai = true;
  alert("Bạn vừa giả lập điểm hãy tra cứu điểm !");
});
document.getElementById("checkPoint").addEventListener("click", () => {
  if (trangthai == false) {
    alert("Vui lòng giả lập điểm trước !");
  } else {
    if (nameValue.value === "" && Number(nameValue.value)) {
      alert("Xin hãy thử lại !");
    } else {
      let a = exportData();
      let b = sortClass();
      let c = rankTeam();
      b.forEach((item, index) => {
        if (item.name.includes(nameValue.value)) {
          a.map((el) => {
            if (el.id === item.id) {
              el.rankClass = index + 1;
            }
          });
        }
      });
      c.forEach((item) => {
        item.forEach((e, index) => {
          if (e.name.includes(nameValue.value)) {
            a.map((el) => {
              if (el.id === e.id) {
                el.rankTeam = index + 1;
              }
            });
          }
        });
      });
      console.log(c);
      console.log(a);
      document.getElementById("root").innerHTML = a
        .map((el, index) => {
          return ` <ul class="footer-screen">
         <li>STT: ${el.id}</li>
         <li>Tên đầy đủ: <span class="bold-name">${el.name}</span></li>
         <li>Nhóm: ${el.groupNumber}</li>
         <li>Vị trí: ${el.position}</li>
         <li>Tổng điểm: <span class="point-color">${el.sums} Điểm</span></li>
         <li>${el.points
           .map(
             (e) =>
               `Ngày ${e.dayName}: <span class="point-color">${e.point} Điểm</span>`
           )
           .join(", ")}
        </li>
         <li>Vị trí nhóm : ${el.rankTeam} </li>
         <li>Vị trí lớp: ${el.rankClass}</li>
     </ul>`;
        })
        .join(" ");
    }
  }
});

// let newArrStd = (JSON.stringify(arrStudent));
// console.log(newArrStd);
// console.log(data);

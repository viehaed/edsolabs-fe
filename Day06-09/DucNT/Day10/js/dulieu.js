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
  // return newArr.filter(el => el.name.includes(nameValue.value))
  return newArr.filter((e) => {
    if (e.name.toLowerCase().includes(nameValue.value.toLowerCase().trim())) {
      return e;
    }
  });
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
  // let x = document.getElementById("value").value;

  trangthai = true;
  alert("Bạn vừa giả lập điểm,hãy tra cứu điểm !");
});
document.getElementById("checkPoint").addEventListener("click", () => {
  let x = document.getElementById("value").value;

  if (trangthai == false) {
    alert("Vui lòng giả lập điểm trước ! ");
  } else {
    if (nameValue.value == "" || Number(nameValue.value)) {
      alert("Hãy vui lòng nhập dữ liệu hoặc xem lại dữ liệu bạn nhập !");
      return;
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
      var generateHTML = (document.getElementById("root").innerHTML = a
        .map((el, index) => {
          return `  <table class="ui-table-footer" border="1" width="100%" style="border-collapse: collapse">
                                        <tr>
                                           <th>STT</th>
                                           <td>${el.id}</td>
                                        </tr>
                                        <tr>
                                          <th>Tên đầy đủ</th>
                                          <td><span class="bold-name">${
                                            el.name
                                          }</span></td>
                                        </tr>
                                         <tr>
                                          <th>Nhóm</th>
                                          <td>${el.groupNumber}</td>
                                         </tr>
                                         <tr>
                                          <th>Vị trí</th>
                                          <td>${el.position}</td>
                                         </tr>
                                         <tr>
                                          <th>Tổng điểm</th>
                                          <td><span class="red-point">${
                                            el.sums
                                          } Điểm</span></td>
                                         </tr>
                                         <tr>
                                          <th>Ngày</th>
                                          <td>${el.points
                                            .map(
                                              (e) =>
                                                `Ngày ${e.dayName}: <span class="red-point">${e.point} Điểm</span>`
                                            )
                                            .join(", ")} </td>
                                          
                                          
                                         </tr>                                       
                                         <tr>
                                          <th>Vị trí lớp</th>
                                          <td>${el.rankClass}</td>
                                         </tr>
                                        
                                        </table>`;
        })
        .join(" "));
      if (generateHTML == "") {
        alert("Không có kết quả tìm kiếm phù hợp !");
      }
    }
  }
});

import sumPoint from "./modules/sumTotal.js";
import sortTeam from "./modules/locusPopint_class.js";
let valueInput = document.getElementById("value");
let root = document.querySelector(".root");

let trangthai = false;
document.getElementById("fakePoint").addEventListener("click", () => {
  trangthai = true;
  alert("Bạn vừa Giả Lập điểm xog hãy Tra cứu điểm");
});
document.getElementById("checkPoint").addEventListener("click", () => {
  if (trangthai == false) {
    return alert("Bạn phải giả lập điểm trước  !");
  } else {
    if (valueInput.value !== "") {
      sumPoint().map((item) => {
        if (item.name.toLowerCase().includes(valueInput.value.toLowerCase())) {
          let number = 0;
          sortTeam().map((item) => {
            item.map((x, i) => {
              if (
                x.name.toLowerCase().includes(valueInput.value.toLowerCase())
              ) {
                number = i;
                return i;
              }
            });
          });
          const findIndex = sumPoint().findIndex((item) =>
            item.name.toLowerCase().includes(valueInput.value.toLowerCase())
          );
          const points = item.points
            .map((item) => {
              return `<b>${item.dayName}</b> : ${item.point}`;
            })
            .join(" |  ");
          let htmls = ` <ul>
            <li><b>STT</b>: ${item.id}</li>
            <li><b>Tên đầy đủ</b>: ${item.name}</li>
            <li><b>Nhóm</b>: ${item.group.groupId}</li>
            <li><b>Vị trí</b>: ${item.group.position}</li>
            <li><b>Tổng điểm</b>: ${item.sums}</li>
            <li>${points}</li>
            <li><b>Vị trí nhóm</b> : ${number} </li>
            <li><b>Vị trí lớp</b>: ${findIndex}</li>
        </ul>`;
          return (root.innerHTML = htmls);
        }
      });
    } else {
      alert("Nhập tên không hợp lệ !");
    }
  }
});

import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };

let listPointStudent = [];

document
  .getElementById("generatorPoint")
  .addEventListener("click", function () {
    listPointStudent = [];
    listPointStudent = moduleFn.generatorPointClass(data);
    listPointStudent = moduleFn.totalPointInClass(listPointStudent);
    alert("Giả lậP điểm thành công")

    // xep hang trong nhom va trong lop
    listPointStudent.map((student) => {
      student.rankGroup = moduleFn.getTopInGroup(
        student.group.groupID,
        student.id,
        listPointStudent
      );

      student.rankClass = moduleFn.getTopInClass(listPointStudent, student.id);
    });

    console.log(listPointStudent);
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

const handleSearch = (valueName, listStudentSearch) => {
  const result = document.querySelector("#result");
  console.log(listStudentSearch);
  if (valueName) {
    let html = listStudentSearch
      .map((item) => {
        let dayPoint = item.points
          .map((point) => `Day ${point.dayId}: ${point.point} | `)
          .join("")
          .trim();
        return `<ul>

                            <li>STT: ${item.id}</li>
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

    if (html) {
      result.innerHTML = html;
    } else {
      result.innerHTML = "";
      alert("Không tìm thấy kết quả")
    }
  } else result.innerHTML = "";
};

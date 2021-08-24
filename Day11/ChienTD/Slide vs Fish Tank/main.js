import { moduleFn } from "./modules/index.js";
import data from "./data/data.json" assert { type: "json" };
// Splide

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    rewind: true,
    perPage: 3,
    perMove: 1,
    autoplay: true,
    focus    : 'center',
    perPage  : 2,
    trimSpace: false,
    pagination: false,
    interval: 2000,
    keyboard: true,

  }  ).mount();
} );

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

// Tạo dữ liệU splide
function createValueSplide() {
  let valueSplice = document.getElementById("splide__list")
  let html = data
    .map((o) => {
      return `
        <li class="splide__slide">
          <p><b>ID: </b>${o.id}</p>
          <p><b>Tên: </b>${o.name}</p>
          <p><b>Nhóm: </b>${o.group.groupID}</p>
          <p><b>Ví trí: </b>${o.group.position}</p>
        </li>
      `
    })
    .join("");
    valueSplice.innerHTML = html;

    // ăn slide vào tất cả phần tử
    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0, len = elms.length; i < len; i++ ) {
      new Splide( elms[ i ] ).mount();
}
}

createValueSplide();

document
  .getElementById("findStudentByName")
  .addEventListener("click", function () {
    console.log(data)
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


// get Name for fish tank
function getName() {
  let fish = document.querySelector(".fishTank")
  let html = data
    .map((o) => {
      return `
      <div id="drag" class="draggable fish">
        <p>${o.name}</p>
      </div>
      `
    })
    .join("")
    fish.innerHTML = html
}
getName()


// Bể cá
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
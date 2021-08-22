import updatePointByDay from "./pointDay.js";

function sumPoint() {
  let listStudent = updatePointByDay();
  listStudent.map((item) => {
    let sum = 0;
    item.points.map((item) => {
      sum += item.point;
    });
    item.sums = sum;
  });

  return listStudent;
}

export default sumPoint;

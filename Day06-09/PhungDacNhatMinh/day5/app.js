import data from "../day4/modules/data.json" assert { type: "json" };
console.log(data);
import importPointAllStudent from "../day4/modules/pointInDay.js";
import fullName from "../day4/modules/fullName.js";
const arrFullName = fullName();
console.log(arrFullName);
let $fm = document.getElementById("fm");
let $id = document.getElementById("STT");
let $name = document.getElementById("name");
let $group = document.getElementById("group");
let $position = document.getElementById("position");
let $sumPoint = document.getElementById("sumPoint");
let $pointByDay = document.getElementById("pointByDay");
let $rankInGroup = document.getElementById("rankInGroup");
let $rankInClass = document.getElementById("rankInClass");
let $findPoint = document.getElementById("findPoint");
let $emulatorPoint = document.getElementById("emulatorPoint");

$fm.addEventListener("submit", function (e) {
  e.preventDefault();
  if ($fm.dl.value.trim() === "") {
    return;
  }
});

let newSum =[]
$emulatorPoint.addEventListener("click", function () {
  const getTotalPointInRange = () => {
    const tempArr = importPointAllStudent.map((person) => {
      //calculate the total point in provided range
      const totalPoint = person.points.reduce((total, item) => {
        const { dayName, point } = item;
        const dayInNum = parseInt(dayName.split(" ").pop());
        if (dayInNum >= 1 && dayInNum <= 7) {
          return total + point;
        }
        return total;
      }, 0);
      // add new property and return the item
      person.totalPoint = Math.ceil(totalPoint * 100) / 100;
      return person;
    });
  
    return tempArr;
  };
  newSum=getTotalPointInRange()
  console.log(newSum);
  return getTotalPointInRange;
});

$findPoint.addEventListener("click", function (e) {
  let arr = newSum.filter((e) => {
    let fullName = e.name.toLowerCase() == $fm.dl.value.toLowerCase();
    return fullName;
  });
  console.log(arr);
  $id.innerHTML = `STT: ${arr[0].id}`;
  $name.innerHTML = `Tên Đầy đủ: ${arr[0].name}`;
  $group.innerText = `Nhóm: ${arr[0].group.groupId}`;
  $position.innerText = `Nhóm: ${arr[0].group.position}`;
  let sum = "";
  for (let i = 0; i < 7; i++) {
    let x = ` Day ${i + 1} : ${arr[0].points[i].point} |`;
    sum += x;
    // console.log(x);
  }
  $sumPoint.innerText = `Tổng điểm :${arr[0].totalPoint}`
  $pointByDay.innerText = sum ;
  $fm.dl.value = "";
});


// console.log(getTotalPointInRange());




import data from "./data.json" assert { type: "json" };

let didSimulate = false;
const people = data.studentList;

const addStudentScore = (curStudent, dayName, point) => {
  if (!curStudent.points) {
    curStudent.points = [];
  }
  curStudent.points.push({
    dayID: new Date().getTime(),
    dayName,
    point,
  });
  return people;
};

const createOneWeekScore = (curStudent) => {
  for (let i = 0; i < 7; i++) {
    const randomPoint = Math.ceil(Math.random() * 10 * 10) / 10;
    addStudentScore(curStudent, `Ngày ${i + 1}`, randomPoint);
  }
  const totalPoint = curStudent.points.reduce((total, item) => {
    return total + item.point;
  }, 0);
  curStudent.totalPoint = Math.ceil(totalPoint * 100) / 100;
};

const scoreSimulator = () => {
  people.forEach((person) => {
    createOneWeekScore(person);
  });
  didSimulate = true;
  return people;
};

export { people, didSimulate };

export default scoreSimulator;

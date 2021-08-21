import data from "./data.json" assert { type: "json" };
// import arrStudentEdsoLabs from "./data.js";
export const arrDay = ["1", "2", "3", "4", "5", "6", "7"];
let dataCopy = [...data];
function createPoint(data) {
  data.map((e) => (e.points = []));
}
function importPoint(id, dayName, point) {
  const dataNew = data.filter((data) => data.id == id);
  if (dataNew.find((data) => data?.points === undefined)) {
    createPoint(dataNew);
  }
  let points = {
    dayName: dayName,
    point: point,
  };
  dataNew.map((data) => data.points.push(points));
}
function createPointOneWeek(id) {
  for (let i = 0; i < 7; i++) {
    let pointRandom = Math.floor(Math.random() * 11);
    importPoint(id, arrDay[i], pointRandom);
  }
}
function importPointAllStudent() {
  return dataCopy.forEach((e) => {
    createPointOneWeek(e.id);
  });
}
importPointAllStudent();
export default dataCopy;

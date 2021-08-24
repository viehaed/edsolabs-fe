export const createPoint = (id, dayName, point, arrData) => {
  const dataNew = arrData.filter((o) => o.id == id);
  if (dataNew.find((o) => o?.points === undefined)) {
    dataNew.map((o) => (o.points = []));
  }
  let idDay = dataNew.map((o) => o.points.length + 1);
  let points = {
    idDay: idDay[0],
    dayName: dayName,
    point: point,
  };
  dataNew.map((o) => o.points.push(points));
};

export const createPointOneWeek = (id, arrData, arrDay, callBack) => {
  for (let i = 0; i < arrDay.length; i++) {
    let pointRandom = Math.floor(Math.random() * 11);
    callBack(id, arrDay[i], pointRandom, arrData);
  }
};

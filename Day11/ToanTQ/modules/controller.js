export function createPoint(id, dayName, point, arrData) {
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
}

export function createPointOneWeek(id, arrData, arrDay, callBack) {
  for (let i = 0; i < arrDay.length; i++) {
    let pointRandom = Math.floor(Math.random() * 11);
    callBack(id, arrDay[i], pointRandom, arrData);
  }
}

export function softRankMemberGroup(arrData) {
  const arrGroup = arrData.map((data) => data.group.groupId);
  const group = Array.from(new Set(arrGroup));
  return group.map((data) => {
    const memberInGroup = arrData
      .filter((item) => item.group.groupId === data)
      .sort((a, b) => b.totalPoint - a.totalPoint)
      .map((o, i) => {
        o.group.rank = i + 1;
        return o;
      });
    return memberInGroup;
  });
}

export function getTotalPointIn(x, y, arrData) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.point;
  const arrTotalPoint = arrData.map((o) => {
    o.totalPoint = o.points.slice(x - 1, y).reduce(reducer, 0);
    return o;
  });
  return arrTotalPoint;
}

export function topTotalPoint(arrData) {
  const arrTopTotalPoint = arrData;
  arrTopTotalPoint.sort((a, b) => b.totalPoint - a.totalPoint);
  return arrTopTotalPoint;
}

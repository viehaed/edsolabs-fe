export const getTotalPointIn = (x, y, arrData) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.point;
  const arrTotalPoint = arrData.map((o) => {
    o.totalPoint = o.points.slice(x - 1, y).reduce(reducer, 0);
    return o;
  });
  return arrTotalPoint;
};

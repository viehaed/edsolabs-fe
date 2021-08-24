export const softTotalPoint = (arrData) => {
  const arrTopTotalPoint = arrData.sort((a, b) => b.totalPoint - a.totalPoint);
  return arrTopTotalPoint;
};

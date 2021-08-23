/**
 * Lấy số nguyên
 * @param {*} xstudentId
 * @returns trả về xếp hạng của học viên đó trong lớp
 */
export const getTopInClass = (arr, studentId) => {
  let top;
  const listPointClass = arr.map((o) => {
    let sumPoint = o.points.reduce((accumulator, currenValue) => {
      return accumulator + currenValue.point;
    }, 0);
    return {
      id: o.id,
      totalPoint: sumPoint,
    };
  });
  listPointClass.sort((a, b) => b.totalPoint - a.totalPoint);
  for (const key in listPointClass) {
    if (listPointClass[key].id == studentId) {
      top = parseInt(key) + 1;
      break;
    }
  }
  return top;
};

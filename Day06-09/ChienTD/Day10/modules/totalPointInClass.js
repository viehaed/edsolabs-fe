/**
 * Tính tổng điểm của học viên trong 7 ngày
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | danh sách học viên và tổng điểm trong 7 ngày
 */
export const totalPointInClass = (arr) => {
  const newArr = [...arr];
  newArr.map((student) => {
    let total = student.points.reduce((prev, point) => prev + point.point, 0);
    if (!("totalPoint" in student)) {
      student.totalPoint = total;
    }
  });
  return newArr;
};

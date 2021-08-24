const days = [
    {
      dayId: 1,
      dayName: "Day01",
    },
    {
      dayId: 2,
      dayName: "Day02",
    },
    {
      dayId: 3,
      dayName: "Day03",
    },
    {
      dayId: 4,
      dayName: "Day04",
    },
    {
      dayId: 5,
      dayName: "Day05",
    },
    {
      dayId: 6,
      dayName: "Day06",
    },
    {
      dayId: 7,
      dayName: "Day07",
    },
  ];

export {days}
import data from "./data.json" assert { type: "json" };
import { getRandomInt } from "./getRandomInt.js";
  /**
   * Giả lập điểm cho toàn bộ học viên, hiện tại đang fix cứng 7 ngày
   * @param {*} arr | danh sách học viên
   * @returns | danh sách học viên và điểm trong 7 ngày
   */
export const generatorPointClass = (arr) => {
  let rs = JSON.parse(JSON.stringify(arr));
  days.map((d) => {
    rs.map((s) => {
      // tạo điểm random
      let point = getRandomInt(11) - 1;
      // const points = { id: d.dayId, name: d.dayName, point };
      const points = { ...d, point };
      // nếu chưa cố key points thì tạo mói
      if (!("points" in s)) {
        s.points = [];
      }
      // thêm diểm vào mảng points trong obj học viên
      s.points.push(points);
    });
  });
  return rs;
};

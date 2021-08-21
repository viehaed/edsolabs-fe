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
import data from "./data.json" assert { type: "json" };
import { moduleFn } from "./index.js";
import { getRandomInt } from "./commonFn.js";
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
  

/**
 * Tính tổng điểm của học viên trong 7 ngày
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | danh sách học viên và tổng điểm trong 7 ngày
 */
export const totalPointInClass = (list) => {
   
    return list.map((e)=>{
        let totalPoint = {}
        e.totalPoint = days.map((o)=>{
            let sum = 0;
            sum += e.points[o.dayId-1].point;
            return sum
        }).reduce((pre,cur)=>pre + cur)
    })
}

/**
 * Tìm kiếm học viên trong nhóm
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | Thông tin sinh viên và xếp hạng của học viên đó trong nhóm
 */
  
export function getTopInGroup(groupId, studentId, list) {
    let rs = list
        .filter((e) => e.group.groupID === groupId)
        .sort((a, b) => b.totalPoint - a.totalPoint)
    let kq;
    for (let i = 0; i < rs.length; i++) {
        if (rs[i].id === studentId) kq = i + 1
    }
    return kq
} 
// /**
//  * Lấy số nguyên
//  * @param {*} xstudentId
//  * @returns trả về xếp hạng của học viên đó trong lớp
//  */
var list_Top = generatorPointClass(data);
//var list = totalPointInClass(list_Top)
export const getTopInClass = (studentId) => {
    
    let rs = list_Top.sort((a,b)=>b.totalPoint - a.totalPoint)
    let kq;
    for (let i = 0; i < rs.length; i++) {
        if (rs[i].id === studentId) kq = i + 1
    }
    return kq
};
/**
 * Hàm tìm kiếm sinh viên theo Tên
 * @param {*} nameStudent | tên học viên @param {*} list | danh sách học viên
 * @returns trả về thông tin sinh viên đó
 */

export const findStudentByName = ((nameStudent, list) => list.map((student, index) => (
    {
        stt: student.id,
        name: student.name,
        group: student.group.groupID,
        position: student.group.position,
        totalPoint: student.totalPoint,
        points: student.points.map(s => [s.dayName, s.point]),
        groupRank: moduleFn.getTopInGroup(student.group.groupID, student.id, list),
        classRank: moduleFn.getTopInClass(student.id)
    })).filter(o => o.name.toLowerCase().trim().indexOf(nameStudent.toLowerCase()) !== -1))

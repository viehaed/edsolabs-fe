import { moduleFn } from "./index.js"
/**
 * Hàm tìm kiếm sinh viên theo Tên
 * @param {*} nameStudent | tên học viên @param {*} list | danh sách học viên
 * @returns trả về thông tin sinh viên đó
 */
export const findStudentByName = ((nameStudent, list) => list.map((student) => (
    {
        stt: student.id,
        name: student.name,
        group: student.group.groupID,
        position: student.group.position,
        totalPoint: student.totalPoint,
        points: student.points.map(s => [s.dayName, s.point]),
        groupRank: moduleFn.getTopInGroup(student.group.groupID, student.id, list),
        classRank: moduleFn.getTopInClass(student.id,list)
    })).filter(o => o.name.toLowerCase().trim().indexOf(nameStudent.toLowerCase()) !== -1))
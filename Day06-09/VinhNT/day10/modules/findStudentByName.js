import { moduleFn } from './index.js'

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
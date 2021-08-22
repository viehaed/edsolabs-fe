
import { moduleFn } from './index.js'
export const findStudentByName = ((nameStudent, list) => {
    return list.filter(o => o.name.toLowerCase().includes(nameStudent.trim().toLowerCase()))
        .map(o => (
            {
                stt: o.id,
                name: o.name,
                group: o.group.groupID,
                position: o.group.position,
                totalPoint: o.points.reduce((sum, value) => sum + value.point, 0),
                points: o.points.map(s => [s.dayName, s.point]),
                groupRank: moduleFn.groupRank(list, o.group.groupID, o.id),
                classRank: moduleFn.classRank(list, o.id)
            }
        ))
})

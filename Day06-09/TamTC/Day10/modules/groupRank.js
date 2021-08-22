
export const groupRank = (list, groupID, id) => {
    let posInGroup = -1
    let groupStudent = list.filter(item => item.group.groupID === groupID)
    groupStudent.map(s => (
        {
            id: s.id,
            totalPoint: s.points.reduce((pe, cr) => pe + cr.point, 0)
        }
    )).sort((a, b) => a.totalPoint - b.totalPoint).forEach((o, i) => o.id === id ? posInGroup = i + 1 : -1)
    return posInGroup
}

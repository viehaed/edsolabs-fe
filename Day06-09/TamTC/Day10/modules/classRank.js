export const classRank = (list, id) => {
    let posInClass = -1
    list.map(s => {
        return {
            id: s.id,
            totalPoint: s.points.reduce((pe, cr) => pe + cr.point, 0)
        }
    }).sort((a, b) => b.totalPoint - a.totalPoint).forEach((o, i) => o.id === id ? posInClass = i + 1 : -1)
    return posInClass
}

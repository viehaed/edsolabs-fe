export const randomPoints = data => data.map(item => ({
    id: item.id,
    name: item.name,
    group: {
        groupID: item.group.groupID,
        position: item.group.position
    },
    points: [1, 2, 3, 4, 5, 6, 7].map(o => (
        {
            dayID: o,
            dayName: "Day0" + o,
            point: Math.floor(Math.random() * 10)
        }))
}))


import { getSumPoint } from "./getSumPoint.js"
function sortPointInTeam() {
    let dataSort = getSumPoint()
    let teamInClass = [];
    for (let i = 1; i <= 5; i++) {
        let subTeam = [];
        dataSort.forEach(item => {
            if (item.teamNumber === i) {
                subTeam.push(item)
            }
        })
        teamInClass.push(subTeam)
    }
    teamInClass.map(item => {
        return item.sort((a, b) => b.total - a.total)
    })
    return teamInClass
}
export { sortPointInTeam }
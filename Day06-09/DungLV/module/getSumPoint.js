import data from "./listStudent.json" assert { type: "json" };
function getSumPoint() {
    data.map(item => {
        item.points = [
            {
                dayID: 2,
                dayName: "Thứ 2",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 3,
                dayName: "Thứ 3",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 4,
                dayName: "Thứ 4",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 5,
                dayName: "Thứ 5",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 6,
                dayName: "Thứ 6",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 7,
                dayName: "Thứ 7",
                point: Math.floor(Math.random() * 10)
            }
        ]
        let totalPoint = item.points.reduce((a, b) => {
            return a + b.point
        }, 0)
        item.total = totalPoint;
    })
    return data
}
function sortPointInClass() {
    let dataSort = getSumPoint();
    console.log(dataSort.sort((a, b) => b.total - a.total));
}
sortPointInClass()
export { getSumPoint }
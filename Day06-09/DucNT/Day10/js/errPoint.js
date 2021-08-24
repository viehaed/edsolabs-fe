import data from "./data.json" assert { type: "json" };
function errPoint() {
    let newClass = data
    newClass.forEach(item => {
        item.points = [{
                dayID: 2,
                dayName: "thứ 2",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 3,
                dayName: "thứ 3",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 4,
                dayName: "thứ 4",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 5,
                dayName: "thứ 5",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 6,
                dayName: "thứ 6",
                point: Math.floor(Math.random() * 10)
            },
            {
                dayID: 7,
                dayName: "thứ 7",
                point: Math.floor(Math.random() * 10)
            }
        ]
    })
    return newClass;
}
export default errPoint
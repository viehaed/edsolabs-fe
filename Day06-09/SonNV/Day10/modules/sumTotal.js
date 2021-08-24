import data from "../data.json" assert{ type:"json" };
export const updatePointByDay = () => {
    let newClass = JSON.parse(JSON.stringify(data));
    newClass.forEach(item => {
        item.points = [{
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
    
    })
    return newClass;
}

 const sumPoint = () => {
    let listStudent = updatePointByDay();
    listStudent.map((item) => {
      let sum = 0;
      item.points
        .map((item) => {
          sum += item.point;
        });
      item.sums = sum;
    });
    return listStudent;
}

export default sumPoint;

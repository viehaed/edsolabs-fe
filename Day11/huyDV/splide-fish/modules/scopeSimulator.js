import data from '../data.json' assert { type: "json" }

const myData = data.data;
const addStudentScore = (id, dayName, point) => {
    const curStudent = myData.find((person) => person.id === id);
    if (!curStudent.points) {
        curStudent.points = []
    }
    if (curStudent.points.length < 5) {
        curStudent.points.push({
            dayId: new Date().getTime(),
            dayName,
            point
        })
    }else{
        for(let i =0;i<5;i++){
            curStudent.points.pop();
        }
        curStudent.points.push({
            dayId: new Date().getTime(),
            dayName,
            point
        })
    }
    return myData;
}

const createOneWeekScore = (studentId) => {
    for (let i = 0; i < 5; i++) {
        const randomPoint = Math.ceil(Math.random() * 10 * 10) / 10;
        addStudentScore(studentId, `Ngày ${i + 1}`, randomPoint);
    }
};
const scoreSimulator = () => {
    myData.forEach((person) => {
        createOneWeekScore(person.id);
    });
    return myData;
};
scoreSimulator();
const getTotalPointInRange = () => {
    // const copyMyClass = JSON.parse(JSON.stringify(myData));
    // if (startDate > endDate || startDate <= 0 || endDate <= 0 || endDate > 5) {
    //     return "Ngày bắt đầu và kết thúc không hợp lệ"
    // }
    // copyMyClass.forEach((person) => {
    //     // tính tổng điểm trong phạm vi đã cho
    //     person.points = person.points.filter(item =>
    //         parseInt(item.dayName.split(" ").pop()) >= startDate && parseInt(item.dayName.split(" ").pop()) <= endDate
    //     )
    //     return copyMyClass;
    // })
    const tempArr = myData.map((person) => {
        //calculate the total point in provided range
        const totalPoint = person.points.reduce((total, item) => {
            const { point } = item;
            return total + point;
        }, 0);
        // add new property and return the item
        person.totalPoint = Math.ceil(totalPoint * 100) / 100;
        return person;
    });
    return tempArr;
}

export default getTotalPointInRange;
export { myData, scoreSimulator };


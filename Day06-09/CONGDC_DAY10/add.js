import data from "./data.json" assert { type: "json" };
console.log(data);
function autoPoints() {
    //Tạo điểm và add vào data
    var addPoints = (id, dayName, point) => {
        var member = data.find((person) => person.id === id)
        if (!member.points) {
            member.points = []
        }
        member.points.push({
            dayID: d,
            dayName,
            point,
        })
    }
    for (var d = 1; d <= 5; d++) {
        for (var i = 1; i <= data.length; i++) {
            addPoints(i, 'Ngay' + d, Math.floor(Math.random() * 10))
        }
    }
    console.log(data)
    //Thêm tổng điểm vào data
    function addTotalPoints() {
        var copyList = data.slice();
        const tempArr = copyList.map((person) => {
            const totalPoints = person.points.reduce((total, item) => {
                return total + item.point
                return total
            }, 0);
            // Add totalPoints vào danh sach
            person.totalPoints = Math.ceil(totalPoints * 100) / 100
            return person;
        })
        return tempArr
    }

    // Sắp xếp data
    const shuffled = data.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    // Thêm rank vào data
    function rank() {
        var copyList = data.slice();
        const tempArr = copyList.map((person) => {
            person.rank = copyList.indexOf(person) + 1;
            return person;
        })
        return tempArr
    }
    addTotalPoints()
    rank()
}
export default autoPoints; 
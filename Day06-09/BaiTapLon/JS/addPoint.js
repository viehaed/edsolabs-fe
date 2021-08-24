import data from "./data2.json" assert { type: "json" };
console.log(data);
function autoPoints() {
    //Tạo điểm và add vào data
    var addPoints = (id, d, point) => {
        var member = data.find((person) => person.id === id)
        var pointsInfo = {
            dayID: d,
            dayName: 'day' + d,
            point: point,
        };
        if (!member.points) {
            member.points = []
            member.points.push(pointsInfo)
        }
        else {
            let po = member.points.find(p => p.dayID === d)
            let res = member.points.includes(member.points.find(p => p.dayID === d))
            if (!res) {
                member.points.push(pointsInfo)
            } else {
                po.dayName = pointsInfo.dayName;
                po.point = pointsInfo.point;
            }
        }
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
import data from "./listMember.json" assert { type: "json" };
console.log(data);
function createPoints() {
    
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
            addPoints(i, 'Day' + d, Math.floor(Math.random() * 10))
        }
    }
    console.log(data)
    
    //Tính tổng điểm trong các ngày 
    function createTotalPoints() {
        var copyList = data.slice();
        const tempArr = copyList.map((person) => {
            const totalPoints = person.points.reduce((total, item) => {
                return total + item.point
                return total
            }, 0);
           
            person.totalPoints = Math.ceil(totalPoints * 100) / 100
            return person;
        })
        return tempArr
    }

    
    const shuffled = data.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })
    
    function rank() { //Xếp hạng điểm
        var copyList = data.slice();
        const tempArr = copyList.map((person) => {
            person.rank = copyList.indexOf(person) + 1;
            return person;
        })
        return tempArr
    }
    createTotalPoints()
    rank()
}
export default createPoints;
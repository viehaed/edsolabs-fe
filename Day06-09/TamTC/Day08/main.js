const students = [
    {
        id: 1,
        name: 'Nguyễn Văn Sơn',
        group: {
            groupID: 1,
            position: "member"
        }

    },
    {
        id: 2,
        name: 'Nguyễn Hữu Ánh',
        group: {
            groupID: 1,
            position: "member"
        }

    },
    {
        id: 3,
        name: 'Trần Mạnh Quân',
        group: {
            groupID: 4,
            position: "leader"
        }

    },
    {
        id: 4,
        name: 'Hà Quốc Tuấn',
        group: {
            groupID: 3,
            position: "leader"
        }

    },
    {
        id: 5,
        name: 'Hoàng Ngọc Thành',
        group: {
            groupID: 1,
            position: "member"
        }

    },
    {
        id: 6,
        name: 'Vũ Thị Thu Hà',
        group: {
            groupID: 2,
            position: "member"
        }

    },
    {
        id: 7,
        name: 'Phan Văn Trung',
        group: {
            groupID: 2,
            position: "member"
        }

    },
    {
        id: 8,
        name: 'Nguyễn Cao Hoàng',
        group: {
            groupID: 2,
            position: "member"
        }

    },
    {
        id: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: {
            groupID: 5,
            position: "leader"
        }

    },
    {
        id: 10,
        name: 'Lê Việt Dũng',
        group: {
            groupID: 1,
            position: "leader"
        }

    },
    {
        id: 11,
        name: 'Đỗ Chí Công',
        group: {
            groupID: 2,
            position: "member"
        }

    },
    {
        id: 12,
        name: 'Trần Công Tâm',
        group: {
            groupID: 3,
            position: "member"
        }

    },
    {
        id: 13,
        name: 'Trương Thanh Tùng',
        group: {
            groupID: 3,
            position: "member"
        }

    },
    {
        id: 14,
        name: 'Tạ Đức Chiến',
        group: {
            groupID: 3,
            position: "member"
        }

    },
    {
        id: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: {
            groupID: 3,
            position: "member"
        }

    },
    {
        id: 16,
        name: 'Ngô Chung A Âu',
        group: {
            groupID: 4,
            position: "member"
        }

    },
    {
        id: 17,
        name: 'Trần Thị Khánh Linh',
        group: {
            groupID: 2,
            position: "leader"
        }

    },
    {
        id: 18,
        name: 'Phan Tiến Thành',
        group: {
            groupID: 4,
            position: "member"
        }

    },
    {
        id: 19,
        name: 'Đỗ Văn Huy',
        group: {
            groupID: 4,
            position: "member"
        }

    },
    {
        id: 20,
        name: 'Nguyễn Trung Đức',
        group: {
            groupID: 5,
            position: "member"
        }

    },
    {
        id: 21,
        name: 'Nguyễn Trung Nam',
        group: {
            groupID: 5,
            position: "member"
        }

    },
    {
        id: 22,
        name: 'Trần Quốc Toàn',
        group: {
            groupID: 5,
            position: "member"
        }

    },
];
// console.log(data)
///////////////////////////////////////////
// BÀI 22
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let randomName = (x) => {
    return getRandomStudents = Array.from({ length: x }, (x) => students[getRandomInt(students.length) - 1].name)
}
console.log("BÀI 22:", randomName(4));
////////////////////////////////////////////////////////////////
// BÀI 23
const resultName = (x) => {
    let newArr = students.filter(item => {
        return item.group.groupID === x
    })
    return newArr.map(fullName => fullName.name.split(' ').pop())
}
console.log("BÀI 23: ", resultName(3))
// BÀI 24
const enterPoint = (id, dayID, point) => {
    let studentID = students.filter(student => student.id === id)
    if (!studentID.points)
        studentID.points = []
    studentID.points.push({
        dayID,
        dayName: "Ngày " + dayID,
        point
    })
    return studentID
}
console.log("BÀI 24: ", enterPoint(12, 2, 9))
// BÀI 25
const randomPoint = () => {
    return students.map(item => {
        return {
            id: item.id,
            name: item.name,
            group: {
                groupID: item.group.groupID,
                position: item.group.position
            },
            points: [1, 2, 3, 4, 5, 6, 7].map(o => {
                return {
                    dayID: o,
                    dayName: "Ngày " + o,
                    point: Math.floor(Math.random() * 10)
                }
            })

        }
    })
}
console.log("BÀI 25: ", randomPoint())
// ///////////////////////////////////
const list = randomPoint()
const data = JSON.parse(JSON.stringify(list))
// ////////////////////////////////////
// // BÀI 26
const getStudentsByDay = (x, y) => {
    return data.map(item => {
        let filterDay = item.points.filter(point => point.dayID >= x && point.dayID <= y)
        totalPoint = filterDay.reduce((sum, value) => sum + value.point, 0)
        return {
            id: item.id,
            name: item.name,
            groupName: item.group.groupID,
            totalPoint: totalPoint,
            filterDay: filterDay
        }
    })
}


const getTotalPoints = (x, y) => {
    //lọc lấy ds từ x đến y
    let filterArr = getStudentsByDay(x, y)
    return filterArr.map(s => {
        return {
            name: s.name,
            totalPoint: s.filterDay.reduce((sum, value) => sum + value.point, 0)
        }
    })
}
console.log("BÀI 26", getTotalPoints(2, 3))
////////////////////////////////////////////
// BÀI 27
const getFiveStudentsByMaxPoints = (x, y) => {
    let fiveStudents = getTotalPoints(x, y, getStudentsByDay)
    return fiveStudents.sort((a, b) => b.totalPoint - a.totalPoint).slice(0, 5)
}
console.log("BÀI 27: ", getFiveStudentsByMaxPoints(2, 4))
////////////////////////////////////////////////////////////////
// BÀI 28
const getStudentsByPoint = (x, y, z) => {
    let filterArr = getStudentsByDay(x, y)
    let filterArrByPoint = filterArr.filter(student => student.filterDay.some(s => s.point === z))
    return filterArrByPoint.map(item => (
        {
            id: item.id,
            name: item.name,
            totalPoint: item.filterDay.reduce((sum, value) => sum + value.point, 0)
        })
    )
}
console.log("BÀI 28: ", getStudentsByPoint(2, 4, 8))
//////////////////////////////////////////////////
// BÀI 29
const pairGroup = (x, y) => {
    let filterArr = getStudentsByDay(x, y)
    let groups = filterArr.map(student => student.groupName)
    let groupArr = [...new Set(groups)]
    return groupArr.map(group => {
        let groupStudent = filterArr.filter(item => item.groupName === group)
        let sortStudent = groupStudent.sort((a, b) => a.totalPoint - b.totalPoint)
        return {
            firstStudent: sortStudent[0].name,
            lastStudent: sortStudent[sortStudent.length - 1].name,
            groupName: group
        }
    })
}
console.log("BÀI 29: ", pairGroup(2, 4))
///////////////////////////////////////////////////
//BÀI 30
const getTotalPointByGroup = (x, y) => {
    let filterArr = getStudentsByDay(x, y)
    let groups = filterArr.map(student => student.groupName)
    let groupArr = [...new Set(groups)]
    return groupArr.map(group => {
        let groupStudent = filterArr.filter(item => item.groupName === group)
        return groupStudent.map(g => {
            let totalPointStudent = g.filterDay.reduce((sum, value) => sum + value.point, 0)
            let totalGroup = groupStudent.reduce((sum, value) => sum + value.totalPoint, 0)
            return {
                groupName: g.groupName,
                totalPoint: totalGroup,
                points: [g.name, totalPointStudent]
            }
        })
    })
}

console.log("BÀI 30: ", getTotalPointByGroup(2, 4))

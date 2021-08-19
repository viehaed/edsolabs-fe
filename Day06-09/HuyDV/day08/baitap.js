// bài 21

const myClass = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: {
            groupId: 1,
            position: "member"
        }
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: {
            groupId: 1,
            position: "member"
        }
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: {
            groupId: 4,
            position: "leader"
        }
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: {
            groupId: 3,
            position: "leader"
        }
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: {
            groupId: 1,
            position: "member"
        }
    },
    {
        id: 6,
        name: "Vũ Thị Thu hà",
        group: {
            groupId: 2,
            position: "member"
        }
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: {
            groupId: 2,
            position: "member"
        }
    },
    {
        id: 8,
        name: "Nguyên Cao Hoàng",
        group: {
            groupId: 2,
            position: "member"
        }
    },

    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: {
            groupId: 5,
            position: "leader"
        }
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: {
            groupId: 1,
            position: "leader"
        }
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: {
            groupId: 2,
            position: "member"
        }
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: {
            groupId: 3,
            position: "member"
        }
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: {
            groupId: 3,
            position: "member"
        }
    },
    {
        id: 14,
        name: "Tạ Đưc Chiến",
        group: {
            groupId: 3,
            position: "member"
        }
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: {
            groupId: 3,
            position: "member"
        }
    },
    {
        id: 16,
        name: "Ngô Chúng Á Âu",
        group: {
            groupId: 4,
            position: "member"
        }
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: {
            groupId: 2,
            position: "leader"
        }
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: {
            groupId: 4,
            position: "member"
        }
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: {
            groupId: 4,
            position: "member"
        }
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        group: {
            groupId: 5,
            position: "member"
        }
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: {
            groupId: 5,
            position: "member"
        }
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: {
            groupId: 5,
            position: "member"
        }
    },
]

// bài 22

function getRadomMember(x) {
    if (x > myClass.length && x < 0) {
        return "nhập quá số lượng member !";
    }
    let radomArr = [];
    for (let i = 0; i < x; i++) {
        let numberRadom = myClass[Math.floor(Math.random() * myClass.length)].name
        while (radomArr.includes(numberRadom)) {
            numberRadom = myClass[Math.floor(Math.random() * myClass.length)].name
        }
        radomArr.push(numberRadom.split(" ").pop())
    }
    return radomArr;
}
getRadomMember(11);
// console.log(getRadomMember(11));

// -----bài 23

// function getListMemberGroup(idGroup) {
//     let arr = []
//     let memberGroupArr = []

//     if (idGroup > 5) {
//         return "số nhóm nhỏ hơn 5"
//     }
//     arr = myClass.filter((item) => item.group.groupId === idGroup)
//     arr.forEach(item => {
//         memberGroupArr.push(item.name.split(" ").pop())
//     })
//     return memberGroupArr;
// }

// console.log(getListMemberGroup(3));


const getGroupMemberName = (group) => {
    const groupMemberName = myClass
        .filter(person => person.group.groupId === group)
        .map(item => item.name.split(" ").pop())

    return groupMemberName;
}

// console.log(getGroupMemberName(2));

// ------bài 24
// const addStudentScore = (id, dayName, point) => {
//     const curStudent = myClass.find((person) => person.id === id);
//     if (!curStudent.points) {
//         curStudent.points = [];
//     }
//     curStudent.points.push({
//         dayID: new Date().getTime(),
//         dayName,
//         point,
//     });
//     return myClass;
// };

const addStudentScore = (id, dayName, point) => {
    const curStudent = myClass.find((person) => person.id === id);
    if (!curStudent.points) {
        curStudent.points = []
    }

    curStudent.points.push({
        dayId: new Date().getTime(),
        dayName,
        point
    })
    return myClass;
}
// console.log(addStudentScore(2,6,8));

//Bai 25
const createOneWeekScore = (studentId) => {
    for (let i = 0; i < 5; i++) {
        const randomPoint = Math.ceil(Math.random() * 10 * 10) / 10;
        addStudentScore(studentId, `Ngày ${i + 1}`, randomPoint);
    }
};
const scoreSimulator = () => {
    myClass.forEach((person) => {
        createOneWeekScore(person.id);
    });
    return myClass;

};
scoreSimulator();

//Bai 26

const getTotalPointInRange = (startDate, endDate) => {
    const copyMyClass =  JSON.parse(JSON.stringify(myClass));
    if (startDate > endDate || startDate <= 0 || endDate <= 0 ||endDate > 5) {
        return "Ngày bắt đầu và kết thúc không hợp lệ"
    }
    copyMyClass.forEach((person) => {
        // tính tổng điểm trong phạm vi đã cho
        person.points = person.points.filter(item =>
            parseInt(item.dayName.split(" ").pop()) >= startDate && parseInt(item.dayName.split(" ").pop()) <= endDate
        )
        return copyMyClass;
    })
    const tempArr = copyMyClass.map((person) => {
        //calculate the total point in provided range
        const totalPoint = person.points.reduce((total, item) => {
            const { dayName, point } = item;
            const dayInNum = parseInt(dayName.split(" ").pop());
            return total + point;
        }, 0);
        // add new property and return the item
        person.totalPoint = Math.ceil(totalPoint * 100) / 100;
        return person;
    });
    return tempArr;
}
console.log(getTotalPointInRange(2, 4));


// Bai 27
const getTopFiveStudent = (startDate, endDate) => {
    const totalPointArr = getTotalPointInRange(startDate, endDate);
    if((typeof totalPointArr)=="string"){
        return totalPointArr
    }
    totalPointArr.sort((a, b) => {
        return b.totalPoint - a.totalPoint;
    });
    return totalPointArr.slice(0, 5);
};
// console.log(getTopFiveStudent(0,4));

//Bai 28
const getListMemberBy = (dayin, dayout, point) => {
    let array = getTotalPointInRange(dayin, dayout);
    if((typeof array)=="string"){
        return array
    }
    let arrByPoint = array.filter(preson => {
        const getPresonByPoint = preson.points.some(item =>
            item.point == Math.ceil(point * 100) / 100
        )
        return getPresonByPoint;
    }).map(({ id, name, totalPoint }) => ({
        id,
        name,
        totalPoint
    }))
    return arrByPoint;
}
// console.log(getListMemberBy(3, 5, 8.4));




// Bài tập 29: 
const conectGroup = (startDate, endDate) => {
    let local = getTotalPointInRange(startDate, endDate);
    if((typeof local)=="string"){
        return local
    }
    let newArr = [];
    for (let i = 1; i <= 5; i++) {
        let subArr = [];
        local.forEach(item => {
            if (item.group.groupId === i) {
                subArr.push(item)
            }
        })
        newArr.push(subArr);
    }
    console.log(newArr);
    let valueArr = newArr.map(item => {
        return item.sort((a, b) => b.sums - a.sums)
    })
    let output = valueArr.map(item => {
        return {
            hocvien1: item[0].name,
            hocvien2: item[item.length - 1].name,
            groupName: item[0].group.groupId
        }
    })
    return output;
}

// console.log(conectGroup(1, 3));



// bài 30
const totalGroupPoint = (startDate, endDate) => {
    let local = getTotalPointInRange(startDate, endDate);
    if((typeof local)=="string"){
        return local
    }
    let newArr = [];
    for (let i = 1; i <= 5; i++) {
        let subArr = [];
        local.forEach(item => {
            if (item.group.groupId === i) {
                subArr.push(item)
            }
        })
        newArr.push(subArr);
    }
    let outputArr = newArr.map(item => {
        let coppy = {
            groupName: item[0].group.groupId,
            totalPoint: item.reduce((accument, student) => {
                return accument + Math.floor(student.totalPoint)
            }, 0),
            point: item.map((item, index) => {

                return {
                    hocvien: item.name,
                    tottalPoint: totalPoint = `${item.totalPoint}`
                }
            })
        }
        return coppy
    })
    return outputArr;
};
console.log(totalGroupPoint(3,7));

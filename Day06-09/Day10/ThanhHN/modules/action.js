import { updatePointByDay } from './sumTotal.js'
import data from "../data.json" assert{ type:"json" };

// -------------------- Bài 24 -------------------

function updatePoint(id, date, coin) {
    let updateClass = data
    updateClass.forEach(item => {
        item.points = [{
                dayID: 2,
                dayName: "thứ 2",
                point: 5
            },
            {
                dayID: 3,
                dayName: "thứ 3",
                point: 7
            },
            {
                dayID: 4,
                dayName: "thứ 4",
                point: 6
            },
            {
                dayID: 5,
                dayName: "thứ 5",
                point: 8
            },
            {
                dayID: 6,
                dayName: "thứ 6",
                point: 8
            },
            {
                dayID: 7,
                dayName: "thứ 7",
                point: 9
            }
        ]
    })

    updateClass.forEach(item => {
        if (item.points[date - 2].dayID === date && item.id === id) {
            item.points[date - 2].point = coin;
        }
    })

    return updateClass;
}
//  ------------------------- bài 26 ---------------------------
export const getSumPoint = (x, y) => {
    let listStudent = updatePointByDay();

    listStudent.forEach((item) => {
        let sum = 0;
        item.points.filter(a => a.dayID >= x && a.dayID <= y).forEach(item => {
            sum += item.point;
        }) 
        item.sums = sum;
    })

    return listStudent;
}

//  -------------------------- bài 27 ------------------------

export const getMaxCoin = () => {
    let getStudents = getSumPoint(2, 4);
    getStudents.sort((a, b) => {
        return b.sums - a.sums;
    });

    return getStudents.slice(0, 5);
}

//  -------------------- bài 28 ------------------------

export const bai28 = (x, y, z) => {
    let newArr = getSumPoint(x, y);
    let students = newArr.filter(item => {
        let flag = false;
        for (let i = x; i <= y; i++) {
            if (item.points[i - 2].point === z) {
                flag = true;
            }
        }
        return flag;
    })
    return students.map(item => {
        return {
            id: item.id,
            name: item.name,
            totalPoint: item.sums,
        }
    })
}

// --------------- support ---------------


export const support = (x, y) => {
    let local = getSumPoint(x, y);
    let newArr = [];
    for (let i = 1; i <= 5; i++) {
        let subArr = [];
        local.forEach(item => {
            if (item.group.groupId === i) {
                subArr.push(item);
            }
        })
        newArr.push(subArr);
    }
    return newArr;
}

// -------------------------- bài 29 -----------------------------

export const bai29 = (x, y) => {
    let newArr = support(x, y);
    let valueArr = newArr.map(item => {
        return item.sort((a, b) => b.sums - a.sums);
    })

    return valueArr;
}

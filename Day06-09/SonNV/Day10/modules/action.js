import { updatePointByDay } from './sumTotal.js'
import data from "../data.json" assert{ type:"json" };



//  ------------------------- bài 26 ---------------------------
export const getSumPoint = (x, y) => {
    let listStudent = updatePointByDay();
    listStudent.forEach((item) => {
        let sum = 0;
        item.points.filter(a => a.dayID >= x && a.dayID <= y).forEach(item => {
            sum += item.point
        }) 
        item.sums = sum;
    })
    return listStudent
}


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

export const sortSum = (x, y) => {
    let newArr = support(x, y);
    let valueArr = newArr.map(item => {
        return item.sort((a, b) => b.sums - a.sums)
    })
    return valueArr;
}

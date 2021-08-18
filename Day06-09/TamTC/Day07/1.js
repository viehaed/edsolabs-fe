// BÀI 1
const data = [
    {
        stt: 1,
        name: 'Nguyễn Văn Sơn',
        group: 1,
        position: ''
    },
    {
        stt: 2,
        name: 'Nguyễn Hữu Ánh',
        group: 1,
        position: ''
    },
    {
        stt: 3,
        name: 'Trần Mạnh Quân',
        group: 4,
        position: 'Nhóm trưởng'
    },
    {
        stt: 4,
        name: 'Hà Quốc Tuấn',
        group: 3,
        position: 'Nhóm trưởng'
    },
    {
        stt: 5,
        name: 'Hoàng Ngọc Thành',
        group: 1,
        position: ''
    },
    {
        stt: 6,
        name: 'Vũ Thị Thu Hà',
        group: 2,
        position: ''
    },
    {
        stt: 7,
        name: 'Phan Văn Trung',
        group: 2,
        position: ''
    },
    {
        stt: 8,
        name: 'Nguyễn Cao Hoàng',
        group: 2,
        position: ''
    },
    {
        stt: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: 5,
        position: 'Nhóm trưởng'
    },
    {
        stt: 10,
        name: 'Lê Việt Dũng',
        group: 1,
        position: 'Nhóm trưởng'
    },
    {
        stt: 11,
        name: 'Đỗ Chí Công',
        group: 2,
        position: ''
    },
    {
        stt: 12,
        name: 'Trần Công Tâm',
        group: 3,
        position: ''
    },
    {
        stt: 13,
        name: 'Trương Thanh Tùng',
        group: 3,
        position: ''
    },
    {
        stt: 14,
        name: 'Tạ Đức Chiến',
        group: 3,
        position: ''
    },
    {
        stt: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: 3,
        position: ''
    },
    {
        stt: 16,
        name: 'Ngô Chung A Âu',
        group: 4,
        position: ''
    },
    {
        stt: 17,
        name: 'Trần Thị Khánh Linh',
        group: 2,
        position: 'Nhóm trưởng'
    },
    {
        stt: 18,
        name: 'Phan Tiến Thành',
        group: 4,
        position: ''
    },
    {
        stt: 19,
        name: 'Đỗ Văn Huy',
        group: 4,
        position: ''
    },
    {
        stt: 20,
        name: 'Nguyễn Trung Đức',
        group: 5,
        position: ''
    },
    {
        stt: 21,
        name: 'Nguyễn Trung Nam',
        group: 5,
        position: ''
    },
    {
        stt: 22,
        name: 'Trần Quốc Toàn',
        group: 5,
        position: ''
    },

];
// console.log(data);
///////////////////////////////////////////
// BÀI 2
const dataObj = {
    1: {
        stt: 1,
        name: 'Nguyễn Văn Sơn',
        group: 1,
        position: ''
    },
    2: {
        stt: 2,
        name: 'Nguyễn Hữu Ánh',
        group: 1,
        position: ''
    },
    3: {
        stt: 3,
        name: 'Trần Mạnh Quân',
        group: 4,
        position: 'Nhóm trưởng'
    },
    4: {
        stt: 4,
        name: 'Hà Quốc Tuấn',
        group: 3,
        position: 'Nhóm trưởng'
    },
    5: {
        stt: 5,
        name: 'Hoàng Ngọc Thành',
        group: 1,
        position: ''
    },
    6: {
        stt: 6,
        name: 'Vũ Thị Thu Hà',
        group: 2,
        position: ''
    },
    7: {
        stt: 7,
        name: 'Phan Văn Trung',
        group: 2,
        position: ''
    },
    8: {
        stt: 8,
        name: 'Nguyễn Cao Hoàng',
        group: 2,
        position: ''
    },
    9: {
        stt: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: 5,
        position: 'Nhóm trưởng'
    },
    10: {
        stt: 10,
        name: 'Lê Việt Dũng',
        group: 1,
        position: 'Nhóm trưởng'
    },
    11: {
        stt: 11,
        name: 'Đỗ Chí Công',
        group: 2,
        position: ''
    },
    12: {
        stt: 12,
        name: 'Trần Công Tâm',
        group: 3,
        position: ''
    },
    13: {
        stt: 13,
        name: 'Trương Thanh Tùng',
        group: 3,
        position: ''
    },
    14: {
        stt: 14,
        name: 'Tạ Đức Chiến',
        group: 3,
        position: ''
    },
    15: {
        stt: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: 3,
        position: ''
    },
    16: {
        stt: 16,
        name: 'Ngô Chung A Âu',
        group: 4,
        position: ''
    },
    17: {
        stt: 17,
        name: 'Trần Thị Khánh Linh',
        group: 2,
        position: 'Nhóm trưởng'
    },
    18: {
        stt: 18,
        name: 'Phan Tiến Thành',
        group: 4,
        position: ''
    },
    19: {
        stt: 19,
        name: 'Đỗ Văn Huy',
        group: 4,
        position: ''
    },
    20: {
        stt: 20,
        name: 'Nguyễn Trung Đức',
        group: 5,
        position: ''
    },
    21: {
        stt: 21,
        name: 'Nguyễn Trung Nam',
        group: 5,
        position: ''
    },
    22: {
        stt: 22,
        name: 'Trần Quốc Toàn',
        group: 5,
        position: ''
    }
}
// console.log(dataObj);
///////////////////////////////////////////
// // BÀI 3
// const total = data.length
// console.log("Number person: ", total)
// const numberLeader = data.filter(item => item.position == "Nhóm trưởng").length
// console.log("Number leader: ", numberLeader)
// const numberGroup = numberLeader
// console.log("Number group: ", numberGroup)
///////////////////////////////////////////
// // BÀI 4
// const total = Object.keys(dataObj).length;
// console.log("Number person: ", total)
// const numberLeader = Object.values(dataObj).filter(item => item.position === "Nhóm trưởng").length
// console.log("Number leader: ", numberLeader)
///////////////////////////////////////////
// BÀI 5
// const newArr = data.splice(0, 1)
// console.log(data);
///////////////////////////////////////////
// BÀI 6
// const newArr = data.splice(6, 1)
// console.log(data);
///////////////////////////////////////////
// BÀI 7    
// const nineStudent = data.splice(8, 1)
// console.log(nineStudent);
// console.log("Tên học viên số thứ tự 9 là: ", nineStudent[0].name)
///////////////////////////////////////////
// BÀI 8
// const twoLeader = data.filter(item => item.position === "Nhóm trưởng" && item.group === 2)
// console.log("STT nhóm trưởng nhóm 2: ", twoLeader[0].stt)
///////////////////////////////////////////
// BÀI 9
// data.sort(function (a, b) {
//     let nameA = a.name.split(" ").pop()
//     let nameB = b.name.split(" ").pop()
//     return nameA.localeCompare(nameB)
// })
// console.log("Danh sách lớp theo thứ tự tăng dần bảng chữ cái: ", data)
///////////////////////////////////////////
// BÀI 10
// let lastNameArr = data.map(item => item.name.split(" ").pop())
// console.log("Danh sách tên: ", lastNameArr)
///////////////////////////////////////////
// BÀI 11
// let result = data.map(item => item.name.split(" ").pop())
    // .sort((a, b) => a.localeCompare(b))
// console.log(result);
///////////////////////////////////////////
// BÀI 12
// let lastNameArr = data.map(item => item.name.split(" ").pop())
// let result = new Set(lastNameArr)
// console.log(result)
///////////////////////////////////////////
// BÀI 13
// let names = data.map(item => item.name.split(" ").pop())
// let lastNameArr = names.map(item => {
//     return {
//         name: item,
//         count: names.filter(value => item === value).length
//     }
// }).sort((a, b) => a.count - b.count)
// let maxCount = lastNameArr.pop().count;
// let nameMaxCount = lastNameArr.filter(item => item.count === maxCount)
//                                 .map(value => value.name)
// let result = new Set(nameMaxCount)
// console.log(result)
///////////////////////////////////////////
// BÀI 14-1
// let newArr = data.slice(0, 5)
// let addArr = data.slice(-6, -1)
// let totalArr = newArr.concat(addArr)
// console.log(totalArr)
///////////////////////////////////////////
// BÀI 14 - 2
// let newArr = data.slice(0, 5)
//let addArr = data.slice(-6, -1)
// let totalArr = addArr.concat(newArr)
// console.log(totalArr)
///////////////////////////////////////////
// BÀI 15
// let newArr = data.slice(0, 5)
// newArr.sort(function (a, b) {
//     let nameA = a.name.split(" ").pop()
//     let nameB = b.name.split(" ").pop()
//     return nameA.localeCompare(nameB)
// })
// console.log("Danh sách 5 thành viên theo thứ tự tăng dần bảng chữ cái: ", newArr)
///////////////////////////////////////////
// BÀI 16
// const result = Object.values(dataObj).filter(item => item.stt % 3 === 0)
// console.log(result)
///////////////////////////////////////////
// BÀI 17
// let newArr = data.slice(0, 5)
// let result = newArr.some(item =>  item.position === "Nhóm trưởng")
// console.log(result)
///////////////////////////////////////////
// BÀI 18
// let newArr = data.slice(0, 5)
// let result = newArr.every(item => item.position === "Nhóm trưởng")
// console.log(result)
///////////////////////////////////////////
// BÀI 19
// let result = data.map(item =>  item.name + "_" + item.stt + "_" + item.group)
// console.log(result)
////////////////////////////////////////////
// BÀI 20
// let reverseArr = data.reverse();
// console.log(reverseArr);
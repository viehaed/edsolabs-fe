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

////bai31
const getNames = () => data.map(student => student.name.split(" ").pop())
console.log("BAI 31:", getNames())
let namesArray = getNames()
////////////////////////////////
///BAI 32
const convertNamesToString = (namesArray) => namesArray.join(",")
console.log("BAI 32:", convertNamesToString(namesArray))
let namesString = convertNamesToString(namesArray)
////BAI 33
const convertNamesToArr = (names) => names.split(",")
console.log("BAI 33: ", convertNamesToArr(namesString))
/////////////////////////
// BAI 34
const countName = (a, names) => {
    let count = 0
    names.split(",").forEach(name => name.localeCompare(a) === 0 ? count++ : 0)
    return count
}
console.log("BAI 34", countName("Thành", namesString))
/////////////////////////
// BAI 35
const numberFirstName = (a) => namesString.split(",").indexOf(a) + 1
console.log("BAI 35", numberFirstName("Thành"))
//////////////////////
// BAI 36
const numberLastName = (a) => namesString.split(",").lastIndexOf(a) + 1
console.log("BAI 36", numberLastName("Thành"))
//////////////////////
// BAI 37
const numberFirstChar = (a) => namesString.split(",")
    .filter(name => name.toLowerCase().startsWith(a.toLowerCase())).length
console.log("BAI 37", numberFirstChar("T"))

////////////////////////////////////////
// BAI 38
const numberFirstLastChar = (a, b) => namesString.split(",")
    .filter(name => name.toLowerCase().startsWith(a.toLowerCase()) && name.endsWith(b)).length
console.log("BAI 38", numberFirstLastChar("t", "h"))
///////
// BAI 39
const numberHaveChar = (a) => namesString.split(",")
    .filter(name => name.toLowerCase().indexOf(a.toLowerCase()) !== -1)
console.log("BAI 39", numberHaveChar("n"))
//////////////////////
// BAI 40
const introNames = () => {
    let names = [...namesArray]
    let first = "Bạn " + names.shift() + ", "
    let last = ", cuối cùng là bạn " + names.pop()
    return first + names.map((name, i) => `tiếp theo là bạn ${name}`).join(", ") + last
}
console.log("BAI 40: ", introNames())
///////////////////////////////////////////////////
// BAI 41
const pairGroup = () => namesString.split(",Thành,")
    .map((s, i) => `Group ${i}: ${s}`).join(", ")
console.log("BAI 41: ", pairGroup())
//BAI 42
const pairGroupLastThanh = () => namesString.split(",Thành,")
    .map((s, i) => `Group ${i}: ${s.concat(",Thành")}`).join(", ")
console.log("BAI 42: ", pairGroupLastThanh())
//BAI 43
const pairGroupFirstThanh = () => namesString.split(",Thành,")
    .map((s, i) => `Group ${i}: ${"Thành,".concat(s)}`).join(", ")
console.log("BAI 43: ", pairGroupFirstThanh())
//BAI 44
const doubleNames = () => namesString.repeat(2)
console.log("BAI 44: ", doubleNames())
//BAI 45
const replaceName = () => namesString.replaceAll("Dũng", "Tuấn")
console.log("BAI 45: ", replaceName())
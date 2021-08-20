var listStudent = [
    {
        id: 1,
        name: 'Nguyen Van Son',

        groupid: 1,
        position: ""

    },
    {
        id: 2,
        name: 'Nguyen Huu Anh',

        groupid: 1,
        position: ""

    },
    {
        id: 3,
        name: 'Tran Manh Quan',

        groupid: 4,
        position: 'Nhom truong'

    },
    {
        id: 4,
        name: 'Ha Quoc Tuan',

        groupid: 3,
        position: 'Nhom truong'

    },
    {
        id: 5,
        name: 'Hoang Ngoc Thanh',

        groupid: 1,
        position: ""

    },
    {
        id: 6,
        name: 'Vu Thi Thu Ha',

        groupid: 2,
        position: ""

    },
    {
        id: 7,
        name: 'Phan Van Trung',

        groupid: 2,
        position: ""

    },
    {
        id: 8,
        name: 'Nguyen Cao Hoang',

        groupid: 2,
        position: ""

    },
    {
        id: 9,
        name: 'Phung Dac Nhat Minh',

        groupid: 5,
        position: 'Nhom truong'

    },
    {
        id: 10,
        name: 'Le Viet Dung',

        groupid: 1,
        position: 'Nhom truong'

    },
    {
        id: 11,
        name: 'Do Chi Cong',

        groupid: 2,
        position: ""

    },
    {
        id: 12,
        name: 'Tran Cong Tam',

        groupid: 3,
        position: ""

    },
    {
        id: 13,
        name: 'Truong Thanh Tung',

        groupid: 3,
        position: ""

    },
    {
        id: 14,
        name: 'Ta Duc Chien',

        groupid: 3,
        position: ""

    },
    {
        id: 15,
        name: 'Nguyen Trong Vinh',

        groupid: 3,
        position: ""

    },
    {
        id: 16,
        name: 'Ngo Chung A Au',

        groupid: 4,
        position: ""

    },
    {
        id: 17,
        name: 'Tran Thi Khanh Linh',

        groupid: 2,
        position: 'Nhom truong'

    },
    {
        id: 18,
        name: 'Phan Tien Thanh',

        groupid: 4,
        position: ""

    },
    {
        id: 19,
        name: 'Do Van Huy',
        groupid: 4,
        position: ""

    },
    {
        id: 20,
        name: 'Nguyen Trung Duc',
        groupid: 5,
        position: ""

    },
    {
        id: 21,
        name: 'Nguyen Trung Nam',

        groupid: 5,
        position: ""

    },
    {
        id: 22,
        name: 'Tran Quoc Toan',

        groupid: 5,
        position: ""

    }
];
///Concat: Nối các giá trị vào mảng và trả ra mảng mới
console.log(listStudent)
var no1 = listStudent.concat(1,2,"number1",2)
console.log(no1)
//Array.of Tạo ra mảng mới chứa các phần tử
console.log(
    Array.of("Ten", "Tuoi", 2, 4, ["dog", "Cat", "pig"])
    )
// fill Thay đổi giá trị của mảng
    console.log(
        listStudent.slice(0, 5).fill(["Num1", "Num2", "Num3", "Num4"], 2,4)
    )
// push Thêm phần tử vào cuối mảng và trả ra độ dài của mảng

console.log(listStudent.push("array.push"))
console.log(listStudent)
// pop Xóa phần tử cuối cùng của mảng, trả ra phần tử đó

console.log(listStudent.pop())
console.log(listStudent)

//shift Xóa phần tử đầu mảng, trả ra phần tử đó

console.log(listStudent.shift())
console.log(listStudent)

//unshift thêm phần tử vào đầu mảng, trả ra độ dài của mảng

console.log(listStudent.unshift({
    id: 1,
    name: 'Nguyen Van Son',

    groupid: 1,
    position: ""

},))
console.log(listStudent)

//include Kiểm tra trong mảng có phần tử đó không

console.log(no1.includes(1))
console.log(no1.includes(1,30))

// indexOf Tìm vị trí của phần tử trong mảng từ vị trí bắt đầu đến kết thúc mảng

console.log(no1.indexOf("number1"))
console.log(no1.indexOf("number1", 25))

// LastIndexOf Tìm vị trí phần tử trong mảng từ vị trí bắt đầu đến đầu bảng

console.log(no1.lastIndexOf(2))
console.log(no1.lastIndexOf(2, 24))
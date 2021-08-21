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
// Bai tap 31
export const firstName = listStudent.map((o) => o.name.split(" ")[o.name.split(" ").length - 1]
);
console.log(firstName);

// Bai tap 32
export const bai32 = firstName.join(" ");
console.log(bai32)
// Bai tap 33
export const bai33 = bai32.split(' ')
console.log(bai33)

export default listStudent;

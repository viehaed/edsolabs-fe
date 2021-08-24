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

// Bai 31
    var firstName = listStudent.map((o) => o.name.split(" ")[o.name.split(" ").length - 1]
    );
    console.log(firstName);

// Bai 32
var bai32 = firstName.join(" ");
console.log(bai32)
// Bai 33
var bai33 = bai32.split(' ')
console.log(bai33)
//Bai 34
function bai34(x) {
    var findName = firstName.filter(function(findName, index) {
        return findName == x;
    })
    console.log(findName.length)
}
bai34('Hoang')
// Bai 35
function bai35(x) {
    var findSTT = firstName.indexOf(x)
    console.log(findSTT + 1)
}

//Bai 36
function bai36(x) {
    var findSTT = firstName.lastIndexOf(x)
    console.log(findSTT + 1)
}

// Bai 37
function bai37(x) {
    return bai33.filter((o) => o.startsWith(x)).length;
};
console.log(bai37("H"))

// Bai 38
function bai38(x, y) {
    return bai33.filter((o) => o.startsWith(x) && o.endsWith(y)).length;
};
console.log(bai38("H", "g"))
// Bai 39
    function bai39(x) {
        var patt = new RegExp(x)
        var count = 0;
        for (var i = 1; i < firstName.length; i++) {
            var res = patt.test(firstName[i])
            if (res == true) {
                count++;
            }

        }
        console.log(count)
    }
    bai39('a')
// Bai 40
function bai40() {
    var arrB = bai33.slice();
    var arrA = arrB.pop();
    return `Bạn ${arrB.join(" tiếp theo là bạn ")} cuối cùng là bạn ${arrA}`;
  }
  
  console.log(bai40());
// Bai 41
    var bai41 = bai32.split('Thanh')
    console.log(bai41)
// Bai 42
const bai42 = bai32.split(/(?<=Thanh)\s/);
console.log(bai42)
// Bai 43
const bai43 = bai32.split(/\s(?=Thanh)/);
console.log(bai43)
// Bai 44
var bai44 = bai32.concat(' ' +bai32)
console.log(bai44)
// Bai 45
var bai45 = bai32.replaceAll("Dung", "Tuan")
console.log(bai45)


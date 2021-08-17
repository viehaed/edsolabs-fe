// Bai 1
console.log('----Bai 1----')
var dss = [
    {   
    stt: 1, 
    name: 'Nguyen Van Son',
    gr: 1, 
    vtn: ""
    }, 
    {   
    stt: 2, 
    name: 'Nguyen Huu Anh',
    gr: 1, 
    vtn: ""
    }, 
    {   
    stt: 3, 
    name: 'Tran Manh Quan',
    gr: 4, 
    vtn: 'Nhom truong'
    }, 
    {   
    stt: 4, 
    name: 'Ha Quoc Tuan',
    gr: 3, 
    vtn: 'Nhom truong'
    }, 
    {   
    stt: 5, 
    name: 'Hoang Ngoc Thanh',
    gr: 1, 
    vtn: ""
    }, 
    {   
    stt: 6, 
    name: 'Vu Thi Thu Ha',
    gr: 2, 
    vtn: ""
    }, 
    {   
    stt: 7, 
    name: 'Phan Van Trung',
    gr: 2, 
    vtn: ""
    }, 
    {   
    stt: 8, 
    name: 'Nguyen Cao Hoang',
    gr: 2, 
    vtn: ""
    }, 
    {   
    stt: 9, 
    name: 'Phung Dac Nhat Minh',
    gr: 5, 
    vtn: 'Nhom truong'
    }, 
    {   
    stt: 10,
    name:  'Le Viet Dung',
    gr: 1, 
    vtn: 'Nhom truong'
    }, 
    {   
    stt: 11,
    name:  'Do Chi Cong',
    gr: 2, 
    vtn: ""
    }, 
    {   
    stt: 12,
    name:  'Tran Cong Tam',
    gr: 3, 
    vtn: ""
    }, 
    {   
    stt: 13,
    name:  'Truong Thanh Tung',
    gr: 3, 
    vtn: ""
    }, 
    {   
    stt: 14,
    name:  'Ta Duc Chien',
    gr: 3, 
    vtn: ""
    }, 
    {   
    stt: 15,
    name:  'Nguyen Trong Vinh',
    gr: 3, 
    vtn: ""
    }, 
    {   
    stt: 16,
    name:  'Ngo Chung A Au',
    gr: 4, 
    vtn: ""
    }, 
    {   
    stt: 17,
    name:  'Tran Thi Khanh Linh',
    gr: 2, 
    vtn: 'Nhom truong'
    }, 
    {   
    stt: 18,
    name:  'Phan Tien Thanh',
    gr: 4, 
    vtn: ""
    }, 
    {   
    stt: 19,
    name:  'Do Van Huy',
    gr: 4, 
    vtn: ""
    }, 
    {   
    stt: 20,
    name:  'Nguyen Trung Duc',
    gr: 5, 
    vtn: ""
    }, 
    {   
    stt: 21,
    name:  'Nguyen Trung Nam',
    gr: 5, 
    vtn: ""
    }, 
    {   
    stt: 22,
    name:  'Tran Quoc Toan',
    gr: 5, 
    vtn: ""
    }
];
console.table(dss)
// Bai 2
console.log('----Bai 2----')
var Student = Object.assign({},dss);
//Bai 3
console.log('----Bai 3----')
console.log('So thanh vien la: ' +dss.length)

var listLT = dss.filter(function(listLT, index) {
    return listLT.vtn === 'Nhom truong';
})
console.log('So nhom truong trong lop la:' +listLT.length)

var Ln = new Set(dss.map(dss => dss.gr)).size
console.log('So nhom trong lop la: '+Ln)
//Bai 4
console.log('----Bai 4----')
var dem = Object.values(dss).length

var nhomTruong = Object.values(dss).filter(function(nhomTruong,index){
    return nhomTruong.vtn === 'Nhom truong';
})

// //Bai 5
console.log('----Bai 5----')
var cau5 = dss.filter(function(cau5, index) {
    return cau5.stt != 1;
})
console.table(cau5);

//Bai 6
console.log('----Bai 6----')
var cau6 = dss.filter(function(cau6, index) {
    return cau6.stt != 7;
})
console.table(cau6);
// Bai 7
console.log('----Bai 7----')
var find9 = dss.find(function(find9, index) {
    return find9.stt === 9;
})
console.table(find9)

// Bai 8
console.log('----Bai 8----')
var findLead2 = dss.find(function(findLead2, index) {
    return findLead2.gr === 2 && findLead2.vtn === 'Nhom truong'
})
console.table(findLead2)

//Bai 9
console.log('----Bai 9----')
dss.sort(function(a, b) {
    var nameA = a.name
    var nameB = b.name
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
})
console.table(dss)

// Bai 10
console.log('----Bai 10----')
var bai10 = dss.map(({name}) => {
    var hoten = name.lastIndexOf(" ");
    return name =name.slice(hoten);
})
console.table(bai10);
// Bai 11
console.log('----Bai 11----')
bai10.sort(function(a, b) {
    return a.localeCompare(b)
})
console.table(bai10)
// Bai 12
console.log('----Bai 12----')
var bai12 = new Set(bai10)

console.log(bai12)
// Bai 13
console.log('----Bai 13----')

// Bai 14
console.log('----Bai 14----')
var stuList = dss.slice(0,5)
var stuList5last = dss.slice(6,11)
console.log(stuList.concat(stuList5last))
// Bai 15
console.log('----Bai 15----')
stuList.sort(function(a, b) {
    var nameA = a.name
    var nameB = b.name
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
})
console.table(stuList)


// Bai 16
console.log('----Bai 16----')
var cau16 = dss.filter(function(cau16, index) {
    return cau16.stt %3 === 0 ;
})
console.table(cau16);

// Bai 17
console.log('----Bai 17----')
var bai17 = dss.some(function(bai17, index) {
    return bai17.vtn === 'Nhom truong';
})
console.log(bai17)


// Bai 18
console.log('----Bai 18----')
var bai18 = dss.every(function(bai18, index) {
    return bai18.vtn === 'Nhom truong';
})
console.log(bai18)


// Bai 19
console.log('----Bai 19----')
var bai19 = dss.map(({stt, name, gr }) => {
    return `${name.split(" ").pop()}_${stt}_${gr}`;
})
console.table(bai19)

// // Bai 20
console.log('----Bai 20----')
// dss.reverse();
// console.table(dss);

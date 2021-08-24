const listStudent = [
    {
        id: 1,
        name: 'Nguyễn Văn Sơn',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 2,
        name: 'Nguyễn Hữu Ánh',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 3,
        name: 'Trần Mạnh Quân',
        group: {
            groupId:4,
            position: 'leader'
        }
    },
    {
        id: 4,
        name: 'Hà Quốc Tuấn',
        group: {
            groupId:3,
            position: 'leader'
        }
    },
    {
        id: 5,
        name: 'Hoàng Ngọc Thành',
        group: {
            groupId:1,
            position: ''
        }
    },
    {
        id: 6,
        name: 'Vũ Thị Thu Hà',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 7,
        name: 'Phan Văn Trung',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 8,
        name: 'Nguyễn Cao Hoàng',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 9,
        name: 'Phùng Đắc Nhật Minh',
        group: {
            groupId:5,
            position: 'leader'
        }
    },
    {
        id: 10,
        name: 'Lê Việt Dũng',
        group: {
            groupId:1,
            position: 'leader'
        }
    },
    {
        id: 11,
        name: 'Đỗ Chí Công',
        group: {
            groupId:2,
            position: ''
        }
    },
    {
        id: 12,
        name: 'Trần Công Tâm',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 13,
        name: 'Trương Thanh Tùng',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 14,
        name: 'Tạ Đức Chiến',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 15,
        name: 'Nguyễn Trọng Vĩnh',
        group: {
            groupId:3,
            position: ''
        }
    },
    {
        id: 16,
        name: 'Ngô Chung Á Âu',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 17,
        name: 'Trần Thị Khánh Linh',
        group: {
            groupId:2,
            position: 'leader'
        }
    },
    {
        id: 18,
        name: 'Phan Tiến Thành',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 19,
        name: 'Đỗ Văn Huy',
        group: {
            groupId:4,
            position: ''
        }
    },
    {
        id: 20,
        name: 'Nguyễn Trung Đức',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 21,
        name: 'Nguyễn Trung Nam',
        group: {
            groupId:5,
            position: ''
        }
    },
    {
        id: 22,
        name: 'Trần Quốc Toàn',
        group: {
            groupId:5,
            position: ''
        }
    }
];

var list31 = JSON.parse(JSON.stringify(listStudent));
var getFullName = list31.map((st) => st.name)
var getName = getFullName.map((st) => st.split(" "))
var rs31 = getName.map((st) => st.slice(st.length - 1));
console.log('Bài 31',rs31)

// Bài 32
var list32 = JSON.parse(JSON.stringify(rs31));
var rs32 = list32.toString();
console.log('Bài 32',rs32);

//Bài 33
var list33 = JSON.parse(JSON.stringify(rs32));
var rs33 = list33.split(",");
console.log('Bài 33',rs33);

//Bài 34
var list34 = JSON.parse(JSON.stringify(rs32));
function countName(a) {
    var rs34 = list34.split(a);
    return rs34.length - 1; 
};
console.log('Bài 34',countName("Tùng"))

//Bài 35
var list35 = JSON.parse(JSON.stringify(rs32));
function posName1(a) {
    var rs35 = list35.split(",");
    return rs35.indexOf(a) + 1;
};
console.log('Bài 35',posName1("Tùng"))
//Bài 36
var list36 = JSON.parse(JSON.stringify(rs32));
function posName2(a) {
    var rs36 = list36.split(",");
    return rs36.lastIndexOf(a) + 1;
};
console.log('Bài 36',posName2("Nam"))

//Bài 37
var list37 = JSON.parse(JSON.stringify(rs32));
function getName2(a){
    let b = a.toUpperCase();
    var rs37 = list37.split(b);
    return rs37.length - 1;
}
console.log('Bài 37',getName2("t"));

// Bài 38
var list38 = JSON.parse(JSON.stringify(rs32));
function getName3(a,b) {
    let A = a.toUpperCase();
    let B = b.toLowerCase();
    var arr = list38.split(",");
    var rs38 = arr.filter((st) => st.startsWith(A) && st.endsWith(B))
    console.log(rs38)
    return rs38.length;

}
var list39 = JSON.parse(JSON.stringify(rs32)).split(",");
//var arrUpper = list39.map((st) => st.toUpperCase())
function getName4(a) {
    var rs39 = list39.filter((st) => 
        st.toUpperCase().includes(a.toUpperCase()) == true)
    return rs39
}
console.log('Bài 39', getName4("t"))

//Bài 40
var list40 = JSON.parse(JSON.stringify(rs31));

function makeStr() {
    let startStr = 'Bạn ',
    midStr = ', tiếp theo là bạn ',
    endStr = ', cuối cùng là bạn ';
    startStr = startStr + list40[0];
    endStr = endStr + list40[list40.length - 1];
    var mid = list40.reduce((pre,cur) => pre + midStr + cur);
    var arrayMid = mid.split(",");
    arrayMid.splice(0,1,startStr)
    arrayMid.splice(arrayMid.length - 1,1,endStr);
    console.log('Bài 40',arrayMid)
}
makeStr();

//Bài 41

var list41 = JSON.parse(JSON.stringify(rs32)).split(",Thành,");
console.log('Bài 41',list41)

//Bài 42

var arrNotHasThanh = list41.map((st) => st.concat(',Thành'))
console.log('Bài 42',arrNotHasThanh)

// Bài 43

var thanhInTheFirst = list41.map((st) => 'Thành,' + st.trim())
console.log('Bài 43',thanhInTheFirst)

// Bài 44

var list44 = JSON.parse(JSON.stringify(rs32));
var repeatString = list44.repeat(2);
console.log(repeatString)

//Bài 45
const replaceName = (str, pre, cur) => {
    return str.replaceAll(pre, cur);
  };
  console.log('Bài 45: chuỗi cũ:',list44);
  console.log('Chuỗi mới:',replaceName(list44, "Dũng", "Tuấn"));

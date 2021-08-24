// Bài 21
var class_hocvien = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        group: {
            groupId: 1,
            positon: 0
        }
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group: {
            groupId: 1,
            positon: 0
        }
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group: {
            groupId: 4,
            positon: 1
        }
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group: {
            groupId: 3,
            positon: 1
        }
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group: {
            groupId: 1,
            positon: 0
        }
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group: {
            groupId: 5,
            positon: 1
        }
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group: {
            groupId: 1,
            positon: 1
        }
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group: {
            groupId: 2,
            positon: 0
        }
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group: {
            groupId: 3,
            positon: 0
        }
    },

    {
        id: 14,
        name: "Tạ Đức Chiến",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group: {
            groupId: 3,
            positon: 0
        }
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group: {
            groupId: 2,
            positon: 1
        }
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group: {
            groupId: 4,
            positon: 0
        }
    },
    {
        id: 20,
        name: "Nguyễn Trung Duc",
        group: {
            groupId: 5,
            positon: 0
        }
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group: {
            groupId: 5,
            positon: 0
        }
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group: {
            groupId: 5,
            positon: 0
        }
    }
];

// Bài 22
function search(x) {
    let size = class_hocvien.length;
    for (let i = 0; i < x; i++) {
        let index = Math.floor(Math.random() * size);
        console.log(class_hocvien[index].name);
    }
}
// Bài 23
function searchGroup(x) {
    return class_hocvien.filter((value, index) => {
        return x == value.group.groupId
    }).map((e) => e.name)

}

console.log(searchGroup(4));

// Bài 24
let DSHVDaCoDiem = new Map();

function LayThu(current_day) {
    var day_name = '';

    switch (current_day) {
        case 0:
            day_name = "Chủ nhật";
            break;
        case 1:
            day_name = "Thứ hai";
            break;
        case 2:
            day_name = "Thứ ba";
            break;
        case 3:
            day_name = "Thứ tư";
            break;
        case 4:
            day_name = "Thứ năm";
            break;
        case 5:
            day_name = "Thứ sau";
            break;
        case 6:
            day_name = "Thứ bảy";
    }
    return day_name;
}

function HamNhapDiem(maHV, date, diem) {
    let soHV = class_hocvien.length;

    if (DSHVDaCoDiem.has(maHV)) {
        let hocVien = DSHVDaCoDiem.get(maHV);
        hocVien.points.push({
            dayID: date.getDate(),
            dayName: LayThu(date.getDay()),
            point: diem
        });
        return hocVien;
    }

    for (let i = 0; i < soHV; i++) {
        if (class_hocvien[i].id == maHV) {
            let diemHV = {
                id: maHV,
                name: class_hocvien[i].name,
                group: {
                    id: class_hocvien[i].group.groupId,
                    position: class_hocvien[i].group.positon
                },
                points: [{
                    dayID: date.getDate(),
                    dayName: LayThu(date.getDay()),
                    point: diem
                }]
            };
            DSHVDaCoDiem.set(maHV, diemHV)
        }
    }
    return DSHVDaCoDiem.get(maHV) ? DSHVDaCoDiem.get(maHV) : 'Lỗi';

}
console.log(HamNhapDiem(22, new Date(), 2));
console.log(HamNhapDiem(23, new Date(), 3))

// bài 25
function giaLapDiem(ngayHienTai) {
    class_hocvien.forEach((hocVien, index) => {
        console.log(HamNhapDiem(hocVien.id, ngayHienTai, Math.floor(Math.random() * 11)));
    })
}

function callGLD() {
    var ngayBatDau = new Date();
    giaLapDiem(ngayBatDau);
    var lapLaiMotNgay = setInterval(() => {
        let ngayHienTai = new Date();
        // Lấy số giây
        var soGiay = ngayHienTai.getTime() - ngayBatDau.getTime();

        // Lấy số ngày
        var soNgay = soGiay / (1000 * 3600 * 24);

        if (soNgay == 7) {
            clearInterval(lapLaiMotNgay);
        } else {
            giaLapDiem(ngayHienTai);
        }

    }, 86400000);
}
callGLD();

// bài 26
const copyData = JSON.parse(JSON.stringify(class_hocvien));

function sumPoint(arrPoint) {
    let sum = 0;
    for (let i = 0; i < arrPoint.length; i++) {
        sum += arrPoint[i].point;
    }
    return sum;
}

function totalPoint(x, y) {
    const arrTotal = copyData.map(
        (data) =>
        (data = {
            id: data.id,
            name: data.name,
            totalPoint: data.points.slice(x - 1, y),
            group: data.group.groupId,
        })
    );
    arrTotal.map((data) => (data.totalPoint = sumPoint(data.totalPoint)));
    return arrTotal;
}

// Bài 27

function selectTop(x, y) {
    const arrSelectTop = totalPoint(x, y);
    arrSelectTop.sort((a, b) => b.totalPoint - a.totalPoint);
    return arrSelectTop.slice(0, 5);
}


// Bài 28

function listHVPoint(x, y, z) {
    const ListStudentPont = selectTop(x, y);
    const result = ListStudentPont.filter((data) => data.totalPoint === z);
    console.log(result);
}
listHVPoint(2, 5, 34);

// Bài 29

function getGroup(arr) {
    let arrGroup = arr.map((data) => data.group);
    return Array.from(new Set(arrGroup));
}

function gatherStudent(x, y) {
    const arrTotalPointSort = totalPoin(x, y);
    const group = getGroup(arrTotalPointSort);

    return group.map((data) => {
        let memberInGroup = arrTotalPointSort
            .filter((item) => item.group === data)
            .sort((a, b) => a.totalPoint - b.totalPoint);
        return {
            hocVien1: memberInGroup[0],
            hocVien2: memberInGroup[memberInGroup.length - 1],
            groupName: data,
        };
    });
}


// Bài 30

function getTotalGroupPoint(x, y) {
    const arrTotalPoint = gatherStudent(x, y);
    const totalGroupPoint = arrTotalPoint.map(
        (data) =>
        (data = {
            groupName: data.groupName,
            totalPoint: data.hocVien1.totalPoint + data.hocVien2.totalPoint,
            point: {
                hocVien1: data.hocVien1.totalPoint,
                hocVien2: data.hocVien2.totalPoint,
            },
        })
    );
    return totalGroupPoint;
}
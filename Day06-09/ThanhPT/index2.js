const listStudent = [{
        id: 1,
        name: "Nguyễn Văn Sơn",
        groupId: 1,
        position: "member",
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        groupId: 1,
        position: "member",
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        groupId: 4,
        position: "monitor",
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        groupId: 3,
        position: "monitor",
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        groupId: 1,
        position: "member",
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        groupId: 2,
        position: "member",
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        groupId: 2,
        position: "member",
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        groupId: 2,
        position: "member",
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        groupId: 5,
        position: "monitor",
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        groupId: 1,
        position: "monitor",
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        groupId: 2,
        position: "member",
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        groupId: 3,
        position: "member",
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        groupId: 3,
        position: "member",
    },
    {
        id: 14,
        name: "Tạ Đức Chiến",
        groupId: 3,
        position: "member",
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        groupId: 3,
        position: "member",
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        groupId: 4,
        position: "member",
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        groupId: 2,
        position: "monitor",
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        groupId: 4,
        position: "member",
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        groupId: 4,
        position: "member",
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        groupId: 5,
        position: "member",
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        groupId: 5,
        position: "member",
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        groupId: 5,
        position: "member",
    },
];


/**bai 22
 * Từ danh sách lớp, viết hàm thực hiện lấy tên ngẫu nhiên x 
 * học viên trong lớp, với x là tham số truyền vào
 */
console.log('----bai 22----');

function RandomStudent(number) {
    if (number > listStudent.length) {
        return " vui long nhap lai "
    }
    let ArrRandom = []
    for (let i = 0; i < number; i++) {
        let numberRandom = listStudent[Math.floor(Math.random() * listStudent.length)].name;
        //   while(ArrRandom.includes(numberRandom))
        //   {
        //     numberRandom = listStudent[Math.floor(Math.random()*listStudent.length)].name
        //   }
        ArrRandom.push(numberRandom.split(" ").pop());
    }
    return ArrRandom;
}

console.log(RandomStudent(5));

/**bai 23 
 * Từ danh sách lớp, viết hàm thực hiện lấy ra tên của các thành viên trong nhóm x,
  với x là tham số truyền vào.
 */
console.log('----bai 23----');
const getNameGroup = (x) => {
    if (x > 5) {
        return "qua so luong nhom"
    }
    const filterName = listStudent.filter((item) => item.groupId === x)
    const ArrName = filterName.map((student) => student.name.split(" ").pop())
    return ArrName;
}
console.log(getNameGroup(5));

/**bai 24
 * Từ danh sách lớp, viết hàm nhập điểm cho học viên hàng ngày, các tham số truyền
vào (mã số học viên, ngày, điểm), kết quả trả ra [{id,name,group: {id,position}}, points: [{ dayID,
dayName, point}].
 */
console.log('----bai 24----');

const addPoints = (id,dayName,point) => {
    const newStudent = listStudent.find((item)=> item.id === id);
    if(!newStudent.points)
    {
        newStudent.points=[]
    }
    newStudent.points.push(
        {
            dayID : new Date().getDate(),
            dayName : dayName,
            point : point
        }
    );
    return listStudent;
}

console.log(addPoints(2,'day 03',5));

/**
 * bai 25
 * Viết hàm giả lập điểm cho 1 tuần với tất cả các học viên
 */
 console.log('----bai 25----');
 const createOneWeekScore = (studentId) => {
    for (let i = 0; i < 5; i++) {
      const randomPoint = Math.ceil(Math.random() * 10 * 10) / 10;
      addPoints(studentId, `Ngày ${i + 1}`, randomPoint);
    }
  };
  const scoreSimulator = () => {
    listStudent.forEach((student) => {
      createOneWeekScore(student.id);
    });
    return listStudent;
  };
  scoreSimulator();

/**bai 26 
 * Viết hàm lấy ra danh sách học viên và tổng điểm từng học viên trong khoảng ngày,
tham số truyền vào (x,y) với x là ngày bắt đầu, y là ngày kết thúc
 */
console.log('----bai 26----');
 const getTotalPointInRange = (startDate, endDate) => {
    const copyStudent = JSON.parse(JSON.stringify(listStudent));
  // không thay đổi mảng cũ 
  // dung map tao ra mang mới với kết quả trả về 
  // dùng reduce vòng lặp , với giá trị return (total) khởi đầu là  0
  //item : giá trị phần tử trong mảng 

    const tempArr = copyStudent.map((student) => {
      //calculate the total point in provided range
      const totalPoint = student.points.reduce((total, item) => {
        const { dayName, point } = item;
        const dayInNum = parseInt(dayName.split(" ").pop());
        if (dayInNum >= startDate && dayInNum <= endDate) {
          return total + point;
        }
        return total;
      }, 0);
      // add new property and return the item
      //ceils trả về số đến số nguyên gần nhất
      student.totalPoint = Math.ceil(totalPoint * 100) / 100;
      return student;
    });
  
    return tempArr;
  };

console.log(getTotalPointInRange(1,4));

  /**bai 27 
   * Viết hàm lấy ra top 5 học viên có điểm cao nhất trong khoảng ngày (x,y) truyền vào
   */
   console.log('----bai 27----');
   const getTopFiveStudent = (startDate, endDate) => {
    const totalPointArr = getTotalPointInRange(startDate, endDate);
    totalPointArr.sort((a, b) => {
      return b.totalPoint - a.totalPoint;
    });
    return totalPointArr.slice(0, 5);
  };
console.log(getTopFiveStudent(1,4));

  /**bai 28
   * Viết hàm lấy ra tất cả danh sách học viên có điểm từ tham số truyền vào trong
khoảng thời gian. Các tham số truyền vào ( x, y, z) với x là ngày bắt đầu, y là ngày kết thúc, z là
điểm. Đầu ra [{id, name, totalPoint}]
   */
console.log('----bai 28----');
const getMatchTotalPoint = (startDate, endDate, totalPoint) => {
    const totalPointArr = getTotalPointInRange(startDate, endDate);
    const matchTotalPoint = totalPointArr
      .filter((person) => person.totalPoint === totalPoint)
      // .map(({ id, name, totalPoint }) => ({
      //   id,
      //   name,
      //   totalPoint,
      // }));
    return matchTotalPoint;
  };

  console.log(getMatchTotalPoint(1,4,16.91));
  
  /**bai 29 
   * Viết hàm trả ra cặp học viên trong đó 1 bạn học tốt nhất sẽ bắt cặp với 1 bạn kém
nhất trong cùng 1 nhóm, tham số đầu vào (x,y) với x là ngày bắt đầu, y là ngày kết thúc. kết quả
đầu ra [{hocvien1, học vien2, groupName}]
   */
// console.log('----bai 29----');
// const getUniqueGroups = (arr) => {
//     const groups = arr.map((person) => person.groupId);
//     return [...new Set(groups)];
//   };
  
//   const pairGroup = (startDate, endDate) => {
//     const totalPointArr = getTotalPointInRange(startDate, endDate);
//     const groups = getUniqueGroups(totalPointArr);
//     return groups.map((group) => {
//       const groupMember = totalPointArr
//         .filter((item) => item.groupId === group)
//         .sort((a, b) => a.totalPoint - b.totalPoint);
//       return {
//         firstMember: groupMember[0],
//         secondMember: groupMember[groupMember.length - 1],
//         group,
//       };
//     });
//   };


  /**bai 30
   * Viết hàm tính tổng số điểm của cả nhóm trong khoảng ngày. với tham số truyền vào
(x,y) là ngày bắt đầu, kết thúc, kết quả trả ra [{groupName, totalPoint, points: [{hocvien1:
totalPoint}]]
   */
// console.log('----bai 30----');
// const totalGroupPoint = (startDate, endDate) => {
//     const totalPointArr = getTotalPointInRange(startDate, endDate);
//     const groups = getUniqueGroups(totalPointArr);
//     return groups.map((group) => {
//       const groupMember = totalPointArr.filter((item) => item.groupId === group);
//       const totalGroupPoint = groupMember.reduce(
//         (total, item) => total + item.totalPoint,
//         0
//       );
//       return {
//         group,
//         totalGroupPoint: Math.floor(totalGroupPoint * 100) / 100,
//         points: groupMember.map(({ name, totalPoint }) => ({
//           [name]: totalPoint,
//         })),
//       };
//     });
//   };
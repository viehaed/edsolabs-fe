var listStudent = [
    {
      id: 1,
      name: "Nguyễn Văn Sơn",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 2,
      name: "Nguyễn Hữu Ánh",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 3,
      name: "Trần Mạnh Quân",
      group : {
        groupid: 4,
        position: "leader",
      }
    },
    {
      id: 4,
      name: "Hà Quốc Tuấn",
      group : {
        groupid: 3,
        position: "leader",
      }
    },
    {
      id: 5,
      name: "Hoàng Ngọc Thành",
      group : {
          groupid: 1,
          position: "member",
      }
    },
    {
      id: 6,
      name: "Vũ Thị Thu Hà",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 7,
      name: "Phan Văn Trung",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 8,
      name: "Nguyên Cao Hoàng",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 9,
      name: "Phùng Đắc Nhật Minh",
      group : {
        groupid: 5,
        position: "leader",
      }
    },
    {
      id: 10,
      name: "Lê Việt Dũng",
      group : {
        groupid: 1,
        position: "leader"
      }
    },
    {
      id: 11,
      name: "Đỗ Chí Công",
      group: {
          groupid: 2,
          position: "member", 
      }
    },
    {
      id: 12,
      name: "Trần Công Tâm",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 13,
      name: "Trương Thanh Tùng",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 14,
      name: "Tạ Đưc Chiến",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 15,
      name: "Nguyễn Trọng Vĩnh",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 16,
      name: "Ngô Chúng Á Âu",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 17,
      name: "Trần Thị Khánh Linh",
      group : {
        groupid: 2,
        position: "leader",
      }
    },
    {
      id: 18,
      name: "Phan Tiến Thành",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 19,
      name: "Đỗ Văn Huy",
      group : {
          groupid: 4,
          position: "member",
      }
    },
    {
      id: 20,
      name: "Nguyễn Trung Đức",
      group : {
          groupid: 5,
          position: "member",
      }
    },
    {
      id: 21,
      name: "Nguyễn Trung Nam",
      group : {
          groupid: 3,
          position: "member",
      }
    },
    {
      id: 22,
      name: "Trần Quốc Toàn",
      group : {
          groupid: 5,
          position: "member",
      }
    },
  ];

  //Câu 21 
  // Câu 22
  function inputNames(){
    const x = Math.floor(Math.random() * 22);
    return listStudent[x];
  }
  console.log(inputNames());
 
 // Câu 23 
 const x1 = Math.floor(Math.random() * 5);

  function inputNameGroup(x){
    var names =  listStudent.filter(
        (listStudent) => (listStudent.group.groupid === x)
    );
    console.log(names);
  }
inputNameGroup(x1);

  
 
 // Câu 24  

 function inputPoint(id,dayID,point){
     const memberInfo = listStudent.find(o => o.id === id)
     if(!memberInfo.points){memberInfo.points=[ ]}
     memberInfo.points.push(  
         {
            dayID,
            dayName:  'thứ' + Math.floor((Math.random()*7)),
            point
         }) ; 
         console.log(memberInfo);
 }

// Câu 25

    const addPoints = (id, dayName, point) =>{
        const memberInfo = listStudent.find( o => o.id === id); 
        if (!memberInfo.points){
            memberInfo.points = []
        }
        memberInfo.points.push({
            dayID : d,
            dayName,
            point,
        })
    }
    function point(x){
        for(d = 2; d <= x; d++){
            for(let i = 2; i <= listStudent.length; i++){
                addPoints(i, 'Thứ ' + d, Math.floor(Math.random()*4)+6)
            }
        }
        console.log(listStudent);
    }
    point(6)

// Câu 26
function sumTotalPoint(x,y) {
    var copyList = listStudent.slice();
    const tempArray = copyList.map((o) => {
        const totalPoints = o.points.reduce((total, item) =>{
            const {dayID, point} = item
            if (dayID >= x && dayID <= y) {
                return total + point
            }
            return total
        }, 0);
        o.totalPoints = Math.ceil(totalPoints * 100) / 100
        return o;
    })
    return tempArray
}
sumTotalPoint(2,4)

// Câu 27 
function topMax(x,y){
    var topPoint = sumTotalPoint(x,y)
    topPoint.sort((a, b) =>{
        return b.totalPoints - a.totalPoints;
    })
    console.log(topPoint.slice(0, 5))
}

// Câu 28 
function listName(x,y,z){
    var namePoint = sumTotalPoint(x,y)
    var checkTotalPoint = namePoint.filter((listStudent) => listStudent.totalPoints === z)
    if(!checkTotalPoint){
        return namePoint
    }
    var listNameMember = namePoint.map(({id, name, totalPoints}) => {
        return `ID: ${id}_Name: ${name}_Tổng điểm: ${totalPoints}`
    })
    console.log(listNameMember)
}
listName(2,4)
// Câu 29
const getUniqueGroups = (arr) => {
  const arrGroup = arr.map((person) => person.groupid);
  return [...new Set(arrGroup)];
};
const pairGroup = (x, y) => {
const totalPointArr = getSumTotalPoint(x,y);
const groups = getUniqueGroups(totalPointArr);
console.log(getUniqueGroups.length)
return groups.map((group) => {
  const groupMember = totalPointArr
      .filter((item) => item.groupid === group)
      .sort((a, b) => a.totalPoints - b.totalPoints);
  return {
      firstMember: groupMember[0],
      secondMember: groupMember[groupMember.length - 1],
      group,
  };
  });
};
console.log(pairGroup(2,4));
// Câu 30
const totalGroupPoint = (x, y) => {
  const totalPointArr = getSumTotalPoint(x,y);
  const groups = getUniqueGroups(totalPointArr);
  return groups.map((group) => {
      const groupMember = totalPointArr.filter((item) => item.groupid === group);
      const totalGroupPoint = groupMember.reduce(
          (total, item) => total + item.totalPoints,
          0
      );
      return {
          group,
          totalGroupPoint: Math.floor(totalGroupPoint * 100) / 100,
          points: groupMember.map(({ name, totalPoints }) => ({
          Ten: name,
          Diem: totalPoints
          })),
      };
  });
};
console.log(totalGroupPoint(2,4));
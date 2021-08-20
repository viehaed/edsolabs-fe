var listStudent = [
    {
        id : 1,
        name:"Nguyễn văn Sơn",
        group :{
         groupid : 1,
         position: "member"
      } 
    },
    {
       id : 2,
       name:  "Nguyễn Hữu Ánh",
       group :{
         groupid : 1,
         position: "member"
      } 
    },
    {
       id : 3,
       name: "Trần mạnh Quân",
       group :{
         groupid : 4,
         position: "member"
      } 
    },
    {
       id : 4,
       name: "Hà Quốc Tuấn",
       group :{
         groupid : 3,
         position: "member"
      } 
    },
    {
       id : 5,
       name:"Hoàng Ngọc Thành",
       group :{
         groupid : 1,
         position: "member"
      } 
    },
    {
       id : 6,
       name:"Vũ Thị Thu Hà",
       group :{
         groupid : 2,
         position: "member"
      } 
    },
    {
       id : 7,
       name:"Phan Văn Trung",
       group :{
         groupid : 2,
         position: "member"
      } 
    },
    {
       id : 8,
       name: "Nguyễn Cao Hoàng",
       group :{
         groupid : 2,
         position: "member"
      } 
    },
    {
       id : 9,
       name: "Phùng Đắc Nhật Minh",
       group :{
         groupid : 5,
         position: "leader"
      } 
    },
    {
       id : 10,
       name: "Lê Việt Dũng",
       group :{
         groupid : 1,
         position: "leader"
      } 
    },
    {
       id : 11,
       name: "Đỗ Chí Công",
       group :{
         groupid : 2,
         position: "member"
      } 
    },
    {
       id : 12,
       name:  "Trần Công Tâm",
       group :{
         groupid : 3,
         position: "member"
      } 
    },
    {
       id : 13,
       name: "Trường Thanh Tùng",
       group :{
         groupid : 3,
         position: "member"
      } 
    },
    {
       id : 14,
       name: "Tạ Đức Chiến",
       group :{
         groupid : 3,
         position: "member"
      } 
    },
    {
       id : 15,
       name: "Nguyễn Trọng Vĩnh",
       group :{
         groupid : 3,
         position: "member"
      } 
    },
    {
       id : 16,
       name: "Ngô Chung Á Âu",
       group :{
         groupid : 4,
         position: "member"
      } 
    },
    {
       id : 17,
       name: "Trần Thị Khánh Linh",
       group :{
         groupid : 2,
         position: "leader"
      } 
    },
    {
       id : 18,
       name: "Phan Tiến Thành",
       group :{
         groupid : 5,
         position: "member"
      } 
    },
    {
       id : 19,
       name: "Đỗ Văn Huy",
       group :{
         groupid : 4,
         position: "member"
      } 
    },
    {
       id : 20,
       name: "Nguyễn Trung Đức",
       group :{
         groupid : 5,
         position: "member"
      } 
    },
    {
       id : 21,
       name: "Nguyễn Trung Nam",
       group :{
         groupid : 5,
         position: "member"
      } 
    },
    {
       id : 22,
       name: "Trần Quốc Toàn",
       group :{
          groupid : 5,
          position: "member"
       } 
    },
]
// console.log(listStudent)
// bai 22
function randomName(x){
   var ranDom = listStudent.sort(() => {0,5 - Math.random()});
   let param = ranDom.slice(0, x);
   console.log(param)
}
randomName(Math.floor(Math.random()* 22) +1)
// bai 23
function nameGroup(x){
   var member = listStudent.filter(function(member,index){
      return member.group.groupid == x;
   })
   console.log(member.map(listStudent => listStudent.name))
}
nameGroup(Math.floor((Math.random()* 5) +1))

  // bai 24 

let listData = JSON.parse(JSON.stringify(listStudent));
function createPoint(data) {
  data.map((data) => (data.points = []));
}
function dataPoint(id, dayName, point) {
  var newData = listStudent.filter((data) => data.id == id);
  if (newData.find((data) => data?.points === undefined)) {
    createPoint(newData);
  }
  let sttDay = newData.map((data) => data.points.length + 1);
  let points = {
    idDay: sttDay[0],
    dayName: dayName,
    point: point,
  };
  newData.map((data) => data.points.push(points));
}
console.log(listStudent);

// bai 25
arrDay = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
function createPointinsat(id) {
  for (let i = 0; i < 6; i++) {
    let pointRandom = Math.floor(Math.random() * 11);
    dataPoint(id, arrDay[i], pointRandom);
  }
}
function studentPoinsat() {
   listStudent.map((list) => {
   createPointinsat(list.id);
  });
}
studentPoinsat();
console.log(listStudent);

//bai 26
var copylistData = JSON.parse(JSON.stringify(listStudent));
function tongPoint(poinOneday) {
  let sum = 0;
  for (let i = 0; i < poinOneday.length; i++) {
    sum += poinOneday[i].point;
  }
  return sum;
}
function getSumTotalPoint(x, y) {
  var allTotalPoint = copylistData.map(
    (data) =>
      (data = {
        id: data.id,
        name: data.name,
        totalPoint: data.points,
        group: data.group.groupid,
      })
  );
  allTotalPoint.map((data) => (
     data.totalPoint = tongPoint(data.totalPoint)
   ));
  return allTotalPoint;
}
console.log(getSumTotalPoint(2, 5));

// bai27
function topTotalPoint(x, y) {
  var pointTotal = getSumTotalPoint(x, y);
  pointTotal.sort((a, b) => b.totalPoint - a.totalPoint);
  return pointTotal.slice(0, 5);
}

console.log(topTotalPoint(2, 5));

// bai28
function fivehighestpoint(x, y, z) {
  var ListStudentPont = topTotalPoint(x, y);
  var checkTotalPoint  = ListStudentPont.filter((data) => data.totalPoint === z);
  if(!checkTotalPoint ){
     return ListStudentPont
  }
  var List28 = ListStudentPont.map(({id, name, totalPoint})=> {
     return `ID : ${id}_name: ${name}_tong diem: ${totalPoint}`
  })
  console.log(List28);
}
fivehighestpoint(2, 5, 34);

// bai29

// bai30

// bai 31 
console.log("bai 31")
const bai31 = listStudent.map((item) => item.name.split(" ").pop());
console.log(bai31)

// bai32
console.log("bai 32")
const bai32 = bai31.join(" ");
console.log(bai32)
//Bai 33
console.log("bai 33")
const bai33 = bai32.split(" ");
console.log(bai33)

//Bai 34
console.log("bai 34")
function cau34(index){
  const names = index.trim().toUpperCase();
  return bai32.split(" ").filter((item) => item.toUpperCase() === names).length;
};

//Bai 35
console.log("bai 35")
function bai35(name){
  const i = bai32.split(" ").findIndex((item) => {
    return item.toUpperCase() === name.trim().toUpperCase();
  });
  return listStudent[i].id;
};
console.log(bai35('Trung'))

//Bai 36
console.log("bai 36")
function bai36(name){
  const x = bai32.toUpperCase().split(" ").lastIndexOf(name.trim().toUpperCase());
  return listStudent[x].id;
};
console.log(bai36('Trung'))
//Bai 37
console.log("bai 37")
function bai37(x){
  return bai32.toUpperCase().split(" ").filter((item) => item.startsWith(x.toUpperCase().trim())).length;
};
console.log(bai37("T"))

//Bai 38
console.log("bai 38")
function bai38(index, items){
  return bai32.toUpperCase().split(" ").filter((item) => 
  item.startsWith(index.toUpperCase().trim()) && item.endsWith(items.toUpperCase().trim())).length;
};
console.log(bai38('T','G'))

//Bai 39
console.log("bai 39")
function bai39(items){
  return bai32.toUpperCase().split(" ").filter((item) => 
  item.toUpperCase().includes(items.toUpperCase().trim())).length;
};
console.log(bai39('T'))

// bai40 
console.log("bai 40")
function bai40(){
  return bai31.map((name, item) => {
      if (item === 0) {
        return `Bạn ${name}`;
      }
      if (item === bai31.length - 1) {
        return `,cuối cùng là bạn ${name} `;
      }
      return `,tiếp theo là bạn ${name}` ;
  }).join("");
};
console.log(bai40());

//bai 41 
const bai41 = bai32.toUpperCase().split('Thành')
console.log(bai41)

//bai42 
const bai42 = bai32.toUpperCase().split("/(?<=THÀNH)\s/");
console.log(bai42)

//bai43
const bai43 = bai32.toUpperCase().split(/\s(?=THÀNH)/);
console.log(bai42)

// bai44
const bai44 = bai32.repeat(2)
console.log(bai44)

// bai45
const bai45 = bai32.replace("Dũng", "Tuấn")
console.log(bai45);  
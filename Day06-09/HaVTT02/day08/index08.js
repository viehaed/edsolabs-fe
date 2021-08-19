//Bài tập 21
var list = [
    {id: 1, name: "Nguyễn Văn Sơn", group : {groupId: 1, position:"member"}}, 
    {id: 2, name: "Nguyễn Hữu Ánh", group : {groupId: 1, position:"member"}},
    {id: 3, name: "Trần Mạnh Quân", group : {groupId: 4, position:"leader"}},
    {id: 4, name: " Hà Quốc Tuấn", group : {groupId: 3, position:"leader"}},
    {id: 5, name: "Hoàng Ngọc Thành", group : {groupId: 1, position:"member"}},
    {id: 6, name: "Vũ Thị Thu Hà", group : {groupId: 2, position:"member"}},
    {id: 7, name: "Phan Văn Trung", group : {groupId: 2, position:"member"}},
    {id: 8, name: "Nguyễn Cao Hoàng", group : {groupId: 2, position:"member"}},
    {id: 9, name: "Phùng Đắc Nhật Minh", group : {groupId: 5, position:"leader"}},
    {id: 10, name: "Lê Việt Dũng", group : {groupId: 1, position:"leader"}},
    {id: 11, name: "Đỗ Chí Công", group : {groupId: 2, position:"member"}},
    {id: 12, name: "Trần Công Tâm", group : {groupId: 3, position:"member"}},
    {id: 13, name: "Trương Thanh Tùng", group : {groupId: 3, position:"member"}},
    {id: 14, name: "Tạ Đức Chiến", group : {groupId: 3, position:"member"}},
    {id: 15, name: "Nguyễn Trọng Vĩnh", group : {groupId: 3, position:"member"}},
    {id: 16, name: "Ngô Chung Á Âu", group : {groupId: 4, position:"member"}},
    {id: 17, name: "Trần Thị Khánh Linh", group : {groupId: 2, position:"leader"}},
    {id: 18, name: "Phan Tiến Thành", group : {groupId: 4, position:"member"}},
    {id: 19, name: "Đỗ Văn Huy", group : {groupId: 4, position:"member"}},
    {id: 20, name: "Nguyễn Trung Đức", group : {groupId: 5, position:"member"}},
    {id: 21, name: "Nguyễn Trung Nam", group : {groupId: 5, position:"member"}},
    {id: 22, name: "Trần Quốc Toàn", group : {groupId: 5, position:"member"}}
]
    console.log('Bài 21');
    console.log(list);

    //Bài 22 
    console.log('Bài 22');
    function inputNames(x) {
        const shuffled = list.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, x);
        console.log(selected);
    }
    //inputNames(Math.floor(Math.random() *22)+ 1);
    inputNames(3)

    //Bài 23
    console.log('Bài 23');
    function inputNameGroup(x){
        var member = list.filter(function(member, index){
            return member.group.groupid == x;
        })
        console.log(member.map(list=>list.name));
    }
    inputNameGroup(Math.floor((Math.random() * 5) + 1));
    

    //Bài 24
    console.log('Bài 24');
    let dataStudent = JSON.parse(JSON.stringify(list));

    function createPoint(data) {
        data.map((data) => (data.points = []));
        }
        function importPoint(id, dayName, point) {
        const dataNew = dataStudent.filter((data) => data.id == id);//check id
        if (dataNew.find((data) => data?.points === undefined)) {
            createPoint(dataNew);
    }
    let idDay = dataNew.map((data) => data.points.length + 1);
    let points = {
        idDay: idDay[0],
        dayName: dayName,
        point: point,
    };
    dataNew.map((data) => data.points.push(points));
    }
    importPoint(17, "Day 02", 7);
    console.log(dataStudent);

    //Bài 25
    console.log('Bài 25');
    listDay = ["Day 01", "Day 02", "Day 03", "Day 04", "Day 05"];
    function createPointOneWeek(id) {
        for (let i = 0; i < 7; i++) {
            let pointRandom = Math.floor(Math.random() * 11);
            importPoint(id, listDay[i], pointRandom);
        }
    }
    function pointStudent() {
        dataStudent.forEach((data) => {
            createPointOneWeek(data.id);
        });
    }
    pointStudent();
    console.log(dataStudent);
    

    // Bài 26
    console.log('Bài 26');
    const copyDataStudent = JSON.parse(JSON.stringify(dataStudent));
    function sumTotalPoint(arrayPoint) {
        let sum = 0;
        for (let i = 0; i < arrayPoint.length; i++) {
            sum += arrayPoint[i].point;
        }
        return sum;
    }
    function getSumTotalPoint(x, y) {
    const arrTotalPoint = copyDataStudent.map(
        (data) =>
        (data = {
            id: data.id,
            name: data.name,
            totalPoint: data.points.slice(x - 1, y + 1),
            group: data.group.groupId,
        })
    );
    arrTotalPoint.map((data) => (data.totalPoint =  sumTotalPoint(data.totalPoint)));
    return arrTotalPoint;
    }
    console.log(getSumTotalPoint(2, 5));

    //Bài 27
    console.log('Bài 27');
    function topMax(x,y){
        var topPoint = getSumTotalPoint(x,y)
        topPoint.sort((a, b) =>{
            return b.totalPoint - a.totalPoint;
        })
        console.log(topPoint.slice(0, 5))
    }
    topMax(2,4)

    //Bài 28
    console.log('Bài 28');
    function listName(x,y,z){
        var namePoint = getSumTotalPoint(x,y)
        var checkTotalPoint = namePoint.filter((member) => member.totalPoints === z)
        if(!checkTotalPoint){
            return namePoint
        }
         var listNameMember = namePoint.map(({id, name, totalPoint}) => {
            return `ID: ${id}_Name: ${name}_Tổng điểm: ${totalPoint}`
        })
        console.log(listNameMember)
    }
    listName(2,4)

    //Bài 29
    console.log('Bài 29');
    function besrWorst(x, y){
        let listGroup = [...(new Set(list.map(item=>{
          return item.group.groupId;
        })))].sort();
      
        let newList = list.map(student => {
            sumTotalPoint(x, y, student);
          return student;
        });
        let pairStudent = [];
      
        for (let i of listGroup) {
          let arr =  newList.filter(item => item.group.groupId == i).sort((a,b) => {
            return b.totalPoint - a.totalPoint;
          }).map(item => {
            let name = item.name.split(" ");
            return name[name.length-1];
          });
        
          pairStudent.push(
            {
              student1: arr[0],
              student2: arr[arr.length-1],
              groupName: i
            }
          )
        }
      
        return pairStudent;
      }
      console.log(besrWorst(1,5));

      //Bài 30
      console.log('Bài 30');
      function groupTotalPoint(x, y){
        let listGroup = [...(new Set(list.map(item=>{
          return item.group.groupId;
        })))].sort();
      
        let newList = list.map(student => {
          sumTotalPoint(x, y, student);
          return student;
        });
      
        let groupStudent = [];
      
        for (let i of listGroup) {
          let arr =  newList.filter(item => item.group.groupId == i);
          
          let points = [];
          for (let a of arr) {
            let name = a.name.split(" ");
            points.push(
              {
                name: name[name.length-1],
                totalPoint: a.totalPoint
              }
            )
          }
      
      
          let totalPoint = arr.reduce((total, value) => {
            return total + value.totalPoint
          }, 0);
      
          groupStudent.push(
            {
              group: i,
              totalPoint: totalPoint,
              points: points
            }
          )
        }
      
        return groupStudent;
      }
      
      console.log(groupTotalPoint(1,5));
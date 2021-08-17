const students = [
    {
        id : 1,
        fullName: 'Nguyễn Văn Sơn',
        nameGroup : 1,
        leader: false
    },

    {
        id : 2,
        fullName: 'Nguyễn Hữu Ánh',
        nameGroup : 1,
        leader: false
    },

   {
        id : 3,
        fullName: 'Trần Mạnh Quân',
        nameGroup : 4,
        leader: true
    },

    {
        id : 4,
        fullName: 'Hà Quốc Tuấn',
        nameGroup : 3,
        leader: true
    },

   {
        id : 5,
        fullName: 'Hoàng Ngọc Thành',
        nameGroup : 1,
        leader: false
    },

    {
        id : 6,
        fullName: 'Vũ Thị Thu Hà',
        nameGroup : 2,
        leader: false
    },

    {
        id : 7,
        fullName: 'Phan Van Trung',
        nameGroup : 2,
        leader: false
    },

    {
        id : 8,
        fullName: 'Nguyễn Cao Hoàng',
        nameGroup : 2,
        leader: false
    },

    {
        id : 9,
        fullName: 'Phùng Đắc Nhật Minh',
        nameGroup : 5,
        leader: true
    },

    {
        id : 10,
        fullName: 'Lê Việt Dũng',
        nameGroup : 1,
        leader: true
    },

    {
        id : 11,
        fullName: 'Đỗ Chí Công',
        nameGroup : 2,
        leader: false
    },

    {
        id : 12,
        fullName: 'Trần Công Tâm',
        nameGroup : 3,
        leader: false
    },

   {
        id : 13,
        fullName: 'Trương Thanh Tùng',
        nameGroup : 3,
        leader: false
    },

   {
        id : 14,
        fullName: 'Tạ Đức Chiến',
        nameGroup : 3,
        leader: false
    },

   {
        id : 15,
        fullName: 'Nguyễn Trọng Vĩnh',
        nameGroup : 3,
        leader: false
    },

    {
        id : 16,
        fullName: 'Ngô Chung Á Âu',
        nameGroup : 4,
        leader: false
    },

    {
        id : 17,
        fullName: 'Trần Thị Khánh Linh',
        nameGroup : 2,
        leader: true
    },

    {
        id : 18,
        fullName: 'Phan Tiến Thành',
        nameGroup : 4,
        leader: false
    },

    {
        id : 19,
        fullName: 'Đỗ Văn Huy',
        nameGroup : 4,
        leader: false
    },

    {
        id : 20,
        fullName: 'Nguyễn Trung Đức',
        nameGroup : 5,
        leader: false
    },

   {
        id : 21,
        fullName: 'Nguyễn Trung Nam',
        nameGroup : 5,
        leader: false
    },

    {
        id : 22,
        fullName: 'Trần Quốc Toản',
        nameGroup : 5,
        leader: false
    }
];

console.log(students);

// bai 2

const studentsObj = Object.assign({}, students);
console.log(studentsObj);

//cau 3
console.log('--------cau3------');
// số lượng học viên
console.log(students.length);

// đếm leader
function check (item)
{
    return item.leader
}
const totaLeader = students.filter(check).length;
console.log(totaLeader);


// đếm group 
function checkG (item)
{
    return item.nameGroup
} 
let tutol = students.map(checkG)
console.log(tutol);
let tutolGroup = new Set (tutol).size;
console.log(tutolGroup);

console.log('--------cau4------');
/* bai 4 */ 
// so luong hoc vien

function count(studentsObj) {
    return Object.keys(studentsObj).length;
}
console.log(count(studentsObj));

// so luong leader 

function checkOL (itemObj)
{
    return itemObj.leader
}
let tutolLeader =Object.values(studentsObj).filter(checkOL).length;
console.log(tutolLeader);


// đếm group 
function checkOG (itemOG)
{
    return itemOG.nameGroup
} 
let tutolOG = Object.values(studentsObj).map(checkOG)
console.log(tutolOG);
let tutolObjGroup = new Set(tutolOG).size;
console.log(tutolObjGroup);


console.log('--------cau5------');
/** Bai 5
 *  : xoa doi tuong dau tien ra khoi mang 
 * const deleteStudent = students.shift();
 *  console.log(deleteStudent);
 * */ 

 console.log('--------cau6------');
/** Bai 6
 * xoa hoc vien thu 7 ra khoi danh sach
 */

// const remove = students.splice(7,1)
// console.log(remove);

// cau 07
console.log('--------cau7------');
// tên học viên stt9

function checkNo9 (itemNo9)
{
    return itemNo9.id==9
}
const studentNo9 = students.find(checkNo9).fullName;
console.log(studentNo9);

// cau 08 
console.log('--------cau8-------');
// tìm số thứ tự nhóm trưởng nhóm 2

function checkG2 (itemG2)
{
    return itemG2.nameGroup === 2 && itemG2.leader
}

const studentG2 = students.find(checkG2).id
console.log(studentG2);

/**cau 09 
 * sắp xếp họ tên theo thứ tự bảng chữ cái 
*/
console.log('-------cau9-----');
// students.sort((a,b)=> a.fullName.localeCompare(b.fullName));
// console.log(students);

/** cau 10
 * xuất ra danh sách chỉ chứa tên 
 *  */  

console.log('-------cau10-----');

const ArrName = students.map(getFullName)
function getFullName (iteams)
{
    var arr = iteams.fullName.split(' ')
    return arr[arr.length-1]
}
console.log(ArrName);

/**  cau 11
 * từ câu 10 sắp xếp tên theo thứ tự bảng chữ cái 
 *  */  

console.log('-------cau11-----');
ArrName.sort((a,b)=> a.localeCompare(b))
console.log(ArrName);

/** cau 12
 * danh sách các tên không trùng 
 */

 console.log('-------cau12-----');

 const NameNoMatch =ArrName.filter((item,index)=> ArrName.indexOf(item)=== index);
 console.log(NameNoMatch);


 /** cau 14
  * cho 5 ban dau tien , bo sung 5 ban moi vao dau mang
  */
  console.log('-------cau14-----');
 const fiveStudentfirst = students.slice(0,5)
 for (let i = 0; i < 5; i++)
 {
     fiveStudentfirst.unshift(students[fiveStudentfirst.length+i])
 }

 /** cau 15
  * Cho danh sách 5 học viên đầu tiên, thực hiện tráo đổi thứ tự theo tên các học viên.
  */
  console.log('-------cau15-----');
  let list5 = [];
  let listName= [];
  for (let i = 0; i < 5; i++) {
      list5.push(students[i].fullName.split(" "));
  }
  for (let i = 0; i < list5.length; i++) {
      listName.push(list5[i][list5[i].length - 1]);
  }
  const listName15 = listName.sort((a, b) => a.localeCompare(b));

/** cau 16
 * Dựa vào danh sách ở bài tập 2, lấy ra danh sách các học viên có số thứ tự chia hết
cho 3.
 */
 console.log('-------cau16-----');
for (let i = 0; i < students.length; i++) {
    if (students[i].id % 3 == 0) {
        console.log(students[i])
    }
}


/** cau 17
 * Cho danh sách mảng 5 học viên đầu tiên, thử kiểm tra xem trong 5 bạn đó có bạn
nào làm nhóm trưởng hay ko?
 */
console.log('-------cau17-----');

let checkLead = 0;
for (let i = 0; i < 5; i++) {
    if (students[i].leader) {
        checkLead++;
    }
}
if (checkLead > 0) {
    console.log("5 bạn đầu tiên có bạn là trưởng nhóm")
} else {
    console.log("5 bạn đầu tiên không bạn nào làm trưởng nhóm")
}

/** cau 18
 * Cho danh sách mảng 5 học viên đầu tiên, thử kiểm tra tất cả các bạn 5 bạn đó có đc
làm nhóm trưởng hay ko?
 */
console.log('-------cau18-----');
let dem = 0;
for (let i = 0; i < 5; i++) {
    if (students[i].leader == false) {
        dem++;
    }
}
if (dem > 0) {
    console.log("trong nhóm có  tất cả " + dem + "bạn là không thể làm leader!")
}


/** cau 19
 * Tạo mã học viên theo quy tắc Tên_số thứ tự _ số nhóm. ( thực hiện ghép chuỗi)
 */
console.log('-------cau19-----');
let stName = [];
for (let i = 0; i < students.length; i++) {
    stName.push(students[i].fullName.split(" "))
}
let newName = [];
for (let i = 0; i < stName.length; i++) {
    newName.push(stName[i][stName[i].length - 1])
}
for (let i = 0; i < listStudent.length; i++) {
    listStudent[i].ma = newName[i] + "_" + students[i].id + "_" + students[i].nameGroup
}
console.log(listStudent)


/** cau 20 
 * Dựa vào danh sách học viên ở bài tập 1, hãy đảo ngược thứ tự danh sách lớp.
 */
 console.log('-------cau20-----');

 students.reverse()
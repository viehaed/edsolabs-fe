import sumPoint from "./sumTotal.js";

const support = (x, y) => {
  let local = sumPoint(x, y);
  let newArr = [];
  for (let i = 1; i <= 5; i++) {
    let subArr = [];
    local.forEach((item) => {
      if (item.group.groupId === i) {
        subArr.push(item);
      }
    });
    newArr.push(subArr);
  }
  return newArr;
};

//--------------------- BÀI29 ----------------------

const bai29 = (x, y, group) => {
  let newArr = support(x, y);
  let valueArr = newArr.map((item) => item.sort((a, b) => b.sums - a.sums));

  let output = valueArr.filter((item) => item[0].group.groupId === group);
  // console.log(output);
  // console.log( output.filter(o => o.id === 1));
  // console.log(valueArr);
};

bai29(2, 6, 1);

//  --------------------- BÀI30 -------------------------
const locusPoint_group = (x, y) => {
  let newArr = support(x, y);
  let outputArr = newArr.map((item) => ({
    groupName: item[0].group.groupId,
    totalPoints: item.reduce((accument, student) => {
      return accument + student.sums;
    }, 0),
    point: item.map((item) => ({
      name: item.name,
      totalPoint: item.sums,
    })),
  }));
};

export default locusPoint_group;

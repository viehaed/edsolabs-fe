import sumPoint from "./sumTotal.js";

const support = (x, y) => {
  let local = sumPoint(x, y);
  let newArr = [];
  for (let i = 1; i <= 5; i++) {
    let subArr = [];
    local.map((item) => {
      if (item.group.groupId === i) {
        subArr.push(item);
      }
    });
    newArr.push(subArr);
  }
  return newArr;
};

//--------------------- BÀI29 ----------------------

const sortTeam = () => {
  return support(2, 6).map((item) => item.sort((a, b) => b.sums - a.sums));
};

export default sortTeam;

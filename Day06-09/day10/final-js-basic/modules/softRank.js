export const softRankMemberGroup = (arrData) => {
  const arrGroup = arrData.map((data) => data.group.groupId);
  const group = Array.from(new Set(arrGroup));
  
  return group.map((data) => {
    const memberInGroup = arrData
      .filter((item) => item.group.groupId === data)
      .sort((a, b) => b.totalPoint - a.totalPoint)
      .map((o, i) => {
        o.group.rank = i + 1;
        return o;
      });
    return memberInGroup;
  });
};

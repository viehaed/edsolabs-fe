export const getTopInGroup = (groupId, studentId, list) => {
  let kq;
  let rs = list
    .filter((e) => e.group.groupID === groupId)
    .sort((a, b) => b.totalPoint - a.totalPoint);

  rs.map((item) => {
    if (item.id === studentId) {
      kq = rs.indexOf(item) + 1;
    }
  });
  return kq;
};

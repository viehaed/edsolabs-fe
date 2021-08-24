/**
 * Tìm kiếm học viên trong nhóm
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | Thông tin sinh viên và xếp hạng của học viên đó trong nhóm
 */
  
export function getTopInGroup(groupId, studentId, list) {
    let rs = list
        .filter((e) => e.group.groupID === groupId)
        .sort((a, b) => b.totalPoint - a.totalPoint)
    let kq;
    for (let i = 0; i < rs.length; i++) {
        if (rs[i].id === studentId) kq = i + 1
    }
    return kq
} 


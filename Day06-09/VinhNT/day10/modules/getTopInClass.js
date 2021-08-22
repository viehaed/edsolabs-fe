
export const getTopInClass = (studentId,list) => {
    
    let rs = list.sort((a,b)=>b.totalPoint - a.totalPoint)
    let kq;
    for (let i = 0; i < rs.length; i++) {
        if (rs[i].id === studentId) kq = i + 1
    }
    return kq+"/"+list.length
};
const renderList = (infoContainer, student) => {
  const list = student
    .map((item) => {
      const points = item.points
        .map((point) => {
          return `<p class="info-item">${point.dayName}: ${point.point}</p>`;
        })
        .join("");
      return ` <article class="item">
            <ul>
              <li class="student-id">
                STT:
                <p class="info">${item.id}</p>
              </li>
              <li class="student-name">
                Tên đầy đủ:
                <p class="info">${item.name}</p>
              </li>
              <li class="student-group">
                Nhóm:
                <p class="info">${item.groupId}</p>
              </li>
              <li class="student-role">
                Vị trí:
                <p class="info">${
                  item.position === "member" ? "Thành viên" : "Lớp trưởng"
                }</p>
              </li>
              <li class="student-total-point">
                Tổng điểm:
                <p class="info">${item.totalPoint}</p>
              </li>
              <li class="student-points">
                Điểm:
                ${points}
              </li>
              <li class="student-group-rank">
                Xếp hạng nhóm:
                <p class="info">${item.groupRank}</p>
              </li>
              <li class="student-class-rank">
                Xếp hạng lớp:
                <p class="info">${item.classRank}</p>
              </li>
            </ul>
          </article>`;
    })
    .join("");
  infoContainer.innerHTML = list;
};

export default renderList;

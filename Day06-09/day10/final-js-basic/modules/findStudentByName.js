export const findStudentByName = (arr, str) => {
  return arr.filter((o) => replaceStr(o.name).includes(replaceStr(str)));
};

const replaceStr = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

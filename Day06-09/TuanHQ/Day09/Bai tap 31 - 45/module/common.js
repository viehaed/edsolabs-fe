export const mergeName = (arr) => {
  return arr.join(" ");
};

export const countName = (strName, name) => {
  return strName.split(name).length - 1;
};

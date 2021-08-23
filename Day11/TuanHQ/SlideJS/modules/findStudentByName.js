export const findStudentByName = (arr, char) => {
  return arr.filter((e) => {
    if (e.name.toLowerCase().includes(char.toLowerCase())) {
      return e;
    }
  });
};

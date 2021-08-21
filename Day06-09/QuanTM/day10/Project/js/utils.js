const alert = document.querySelector(".alert");

export const getUnique = (arr, prop) => {
  const reduceArr = arr.map((item) => item[prop]);
  return [...new Set(reduceArr)];
};

export const raiseAlert = (type, msg) => {
  alert.classList.add(type);
  alert.textContent = msg;
  setTimeout(() => {
    alert.classList.remove(type);
  }, 1500);
};

import data from "./data.js";
//Bai 31
export const peopleNames = data.map((person) => person.name.split(" ").pop());

//Bai 32
export const stringNames = peopleNames.join(" ");

//Bai 33
export const arrNames = stringNames.split(" ");

//Bai 34
export const getNameOccurences = (name) => {
  const actualName = name.trim().toUpperCase();
  return stringNames
    .split(" ")
    .filter((item) => item.toUpperCase() === actualName).length;
};

//Bai 35
export const getIdOfFirst = (name) => {
  const i = stringNames.split(" ").findIndex((item) => {
    return item.toUpperCase() === name.trim().toUpperCase();
  });
  return data[i].id;
};

//Bai 36
export const getIdOfLast = (name) => {
  const i = stringNames
    .toUpperCase()
    .split(" ")
    .lastIndexOf(name.trim().toUpperCase());
  return data[i].id;
};

//Bai 37
export const getNameOccByFChar = (character) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter((item) => item.startsWith(character.toUpperCase().trim())).length;
};

//Bai 38
export const getNameOccByFAndLChar = (firstChar, lastChar) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter(
      (item) =>
        item.startsWith(firstChar.toUpperCase().trim()) &&
        item.endsWith(lastChar.toUpperCase().trim())
    ).length;
};

//Bai 39
export const getNameOccByChar = (char) => {
  return stringNames
    .toUpperCase()
    .split(" ")
    .filter((item) => item.toUpperCase().includes(char.toUpperCase().trim()))
    .length;
};

//Bai 40
export const printfString = () => {
  return peopleNames
    .map((name, index) => {
      if (index === 0) {
        return `Bạn ${name}`;
      }
      if (index === peopleNames.length - 1) {
        return `, cuối cùng là bạn ${name}`;
      }
      return `, tiếp theo là bạn ${name}`;
    })
    .join("");
};

//Bai 41
export const createGroups = () => {
  return stringNames.toUpperCase().split(`THÀNH`);
};

//Bai 42
export const groupsEndWithThanh = () => {
  return stringNames.toUpperCase().split(/(?<=THÀNH)\s/);
};

//Bai 43
export const groupsStartWithThanh = () => {
  return stringNames.toUpperCase().split(/\s(?=THÀNH)/);
};

//Bai 44
export const doubleData = () => {
  return stringNames.repeat(2);
};

//Bai 45
export const replaceDung = () => {
  return stringNames.replace("Dũng", "Tuấn");
};

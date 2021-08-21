import { people } from "./scoreSimulator.js";
import { getUnique } from "./utils.js";

const groupRank = (person) => {
  const group = people.filter((item) => item.groupId === person.groupId);
  const groupPoints = getUnique(group, "totalPoint").sort((a, b) => b - a);
  return groupPoints.findIndex((point) => person.totalPoint === point) + 1;
};

const classRank = (person) => {
  const classPoints = getUnique(people, "totalPoint").sort((a, b) => b - a);
  return classPoints.findIndex((point) => person.totalPoint === point) + 1;
};

const searchPerson = (name) => {
  const curStudent = people.filter((person) => {
    const lName = person.name.split(" ").pop().toUpperCase();
    return lName === name;
  });
  return curStudent.map((student) => {
    return {
      ...student,
      groupRank: groupRank(student),
      classRank: classRank(student),
    };
  });
};

export default searchPerson;

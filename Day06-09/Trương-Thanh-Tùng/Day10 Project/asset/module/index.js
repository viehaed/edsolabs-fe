import { getRandomInt } from "./getRandomInt.js";
import { findStudentByName } from "./findStudentByName.js";
import { getTopInClass } from "./getTopInClass.js";
import { getTopInGroup } from "./getTopInGroup.js";
import { generatorPointClass} from "./generatorPointClass.js";
import { totalPointInClass } from "./totalPointInClass.js";
import { days } from "./generatorPointClass.js";
export const moduleFn = {
  generatorPointClass,
  getRandomInt,
  getTopInGroup,
  getTopInClass,
  totalPointInClass,
  findStudentByName,
  days
}
/**
 * Lấy số nguyên
 * @param {*} x
 * @returns Số nguyên trong khoảng từ 1 -> x
 */
export const getRandomInt = (x) => {
  // Math.random() - trả về số thập phân trong trong khoảng 0 - 1
  // Math.floor() - trả về số nguyên nhỏ hơn hoặc bằng số truyền vào
  // VD; x * 22 = số thập phân luôn nhỏ hơn 22
  return Math.floor(Math.random() * x) + 1; //cộng 1 để lấy từ 1 -> 22
};

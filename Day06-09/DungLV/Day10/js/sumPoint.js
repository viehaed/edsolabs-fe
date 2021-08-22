import fakePoint from "./fakePoint.js";
function sumPoint() {
    let listStudent = fakePoint();
    listStudent.map((item) => {
        let sum = 0;
        item.points.map((item) => {
            sum += item.point;
        });
        item.sums = sum;
    });
    return listStudent;
}
export default sumPoint
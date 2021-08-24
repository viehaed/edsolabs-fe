import arrStudentEdsoLabs from "./data.js";

 const newArrStudent = JSON.parse(JSON.stringify(arrStudentEdsoLabs));

 function firstName() {
    return (newArrStudent.map(
      (e) => e.name.toLowerCase()
    ));
  }

  export default firstName;
import arrStudentEdsoLabs from "./data.js";

 const newArrStudent = JSON.parse(JSON.stringify(arrStudentEdsoLabs));

 function firstName() {
    return (newArrStudent.map(
      (e) => e.name.split(" ")[e.name.split(" ").length - 1]
    ));
  }

  export default firstName;
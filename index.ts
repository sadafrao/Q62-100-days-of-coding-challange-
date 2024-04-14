// Q62
// make a student template create ablue print for student
interface student {
  name: string;
  age: number;
  gender: string;
  course: string[];
}
// filling in a blueprint with an student
let student1: student = {
  name: "Ahmed",
  age: 20,
  gender: "male",
  course : ["java","SQL","typescripit"]
}
// showing student information
console.log(student1);

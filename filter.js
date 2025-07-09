const students = [
    {id:1, name:"Sem", age:20, marks:56},
    {id:2, name:"Ashi", age:34, marks:45},
    {id:3, name:"Har", age:12, marks:78},
];
const names = students.map(student => student.name);
console.log("Name of the Students : ", names);
const identity_number = students.map(student => student.id);
console.log("Identity of the Students : ", identity_number);
const age = students.map(student => student.age);
console.log("Age of the Students : ", age);
const marks = students.map(student => student.marks);
console.log("Marks of the Students : ", marks);

const toppers = students.filter(student => student.marks>=70);
console.log("Topper of the class : ",toppers);
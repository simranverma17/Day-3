const students = [
    {id:1, name:"Sem", age:20, marks:56},
    {id:2, name:"Ashi", age:34, marks:45},
    {id:3, name:"Har", age:12, marks:78},
    {id:4, name:"Jimmy", age:12, marks:94},
    {id:5, name:"Alia", age:12, marks:64},
    {id:6, name:"Sheily", age:12, marks:23},
    {id:7, name:"Jazz", age:12, marks:41},
];
const totalHighScores = students
.filter(student => student.marks > 60)
.map(student => student.marks)
.reduce((sum, marks) => sum + marks, 0);

console.log(totalHighScores);
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

const verifyGrades = () => {
  const condition = (student) => {
    (student.grade > 60) ?  student.approved = 'pass' : student.approved = 'fail'
  }
  students.forEach(condition);
}

verifyGrades();

console.log(students);
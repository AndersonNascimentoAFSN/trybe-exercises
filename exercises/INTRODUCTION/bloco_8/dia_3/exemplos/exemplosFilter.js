const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
// console.log(isEven);

const objPeople = [
  {name: 'José', age: 21}, 
  {name: 'Lucas', age: 19}, 
  {name: 'Maria', age: 16}, 
  {name: 'Gilberto', age: 18}, 
  {name: 'Vitor', age: 15}, 
];

const verifyAgeDrive = (arrayOfPeople) =>
  arrayOfPeople.filter((people) => people.age < 18);

// console.log(verifyAgeDrive(objPeople));

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => 
  listStudents.filter((student) => student !== name);
const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);

// console.log(newListStudents);

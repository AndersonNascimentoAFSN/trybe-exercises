users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  },
  {
    name: 'Gates',
    age: 40
  },
  {
    name: 'John',
    age: 16
  },
  {
    name: 'Katarine',
    age: 15
  },
];

// Filtrar apenas as idades: 
const getAge = (user) => user.age;
const agesList = users.map(getAge);
// Filtrar as idades iguais ou acima de 18 anos:
const isOlder = (ages) => ages >= 18;
const ageOlder = agesList.filter(isOlder); // agesList.filter((age) => isOlder(age));

// console.log(ageOlder);

// Filtrar apenas nomes: 
const getName = (user) => user.name;
const userNames = users.map(getName);

// console.log(userNames);

// Filtrar idades maiores ou iguais a 30: 
const getThan30Ages = (user) => user.age >= 30; 
const than30Ages = users.map(getThan30Ages);
// console.log(than30Ages);

// Filtrar nomes que começam com B

// const startsWithB = (string) => string.name.toLowerCase().startsWith('b');
// const namesStartingWithB = users.filter(startsWithB);
const startsWithB = (string) => string.toLowerCase().startsWith('b');
const namesStartingWithB = users.filter((user) => startsWithB(user.name));

// console.log(namesStartingWithB);

// Somatório das idades 

const totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(totalAge)
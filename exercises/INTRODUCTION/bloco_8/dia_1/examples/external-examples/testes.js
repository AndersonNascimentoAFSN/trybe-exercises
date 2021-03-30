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

// const isOlder = (user) => user.age >= 18;
// const getAge = (user) => user.age;

const agesList = users.map((user) => user.age);
console.log(agesList);

// const older = users.filter((user) => user.age >= 18);
// console.log(older);

// console.log(users);

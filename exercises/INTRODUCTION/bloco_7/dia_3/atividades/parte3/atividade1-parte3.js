/* 
1) Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
*/

// const greetPeople = (people) => {
//   let greeting = 'Hello';

//   for (const person in people) {
//     greeting += people[person];
//   }
//   return greeting;
// };

// Insira o código abaixo: 
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    const helloPeople = `Hello ${people[person]}`
    greeting.push(helloPeople);
  }
  return greeting;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(Object.prototype.toString.call(greetPeople(parameter)), '[object Array]');
assert.deepStrictEqual(greetPeople(parameter), result);

/* 2) Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. */

// const removeVowels = (word) => {
//   const characters = word.split('');
//   const results = [];

//   for (let index = 0; index < characters.length; index += 1) {
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) {
//       results.push(characters[index]);
//     } else {
//       results.push('_');
//     }
//   }
//   return results;
// };


// const parameter = 'Dayane';
// const result = 'D1y2n3';

// Insira o código abaixo: 

const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if ( 
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(count);
      count += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(typeof(removeVowels(parameter)), 'string');
assert.deepStrictEqual(removeVowels(parameter), result);



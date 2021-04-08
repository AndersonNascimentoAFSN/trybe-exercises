/* 5. Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
Dica: use array destructuring . */

const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = (array) => ([...newArray] = [array[2], array[1], array[0]]);

// const swap = (array) => {
//   const [...newArray] = array;
//   [newArray[0], newArray[2]] = [newArray[2], newArray[0]];
//   return newArray;
// }

// const swap = ([a, b, c]) => ([c, b, a]);

const swappedList = swap(myList);

console.log(swappedList, myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

/* 2. Crie uma função sum que dado um número variável de elementos retorna 
a soma desses elementos. Ou seja: use parâmetros rest.
Dica: use parâmetro rest. */


const assert = require('assert');

// escreva sum abaixo

// const sum = (...array) => {
//   let sum = 0;
//   for (const iterator of array) {
//     sum += iterator;
//   } 
//   return sum;
// }


const sum = (...array) => (array.reduce((acc, curr) => acc + curr, 0));

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
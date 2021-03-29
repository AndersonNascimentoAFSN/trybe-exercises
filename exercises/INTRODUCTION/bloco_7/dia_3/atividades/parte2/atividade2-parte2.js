// 2) Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// Escreva a função wordLengths aqui

const wordLengths = (array) => {
  return array.map((name) => name.length);
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.
// summationOf(1) - retorna 1: de 1 até 1 = 1;
// summationOf(3) - retorna 6: de 1 até 3 = 1 + 2 + 3 = 6;

const assert = require('assert');

const summationOf = (number) => {

  // if(typeof(number) !== ''){

  // }

  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;
}

assert.strictEqual(Object.prototype.toString.call(summationOf), '[object Function]', 'O resultado esperado é uma função com o nome summationOf');
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(0), 0);

assert.throws(() => {
  summationOf('0');
})

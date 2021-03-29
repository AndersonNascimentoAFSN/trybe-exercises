const assert = require('assert');

// assert.strictEqual(50, 50);
// assert.strictEqual(50, 70);

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

const expected = division(9, 0);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');
// assert.strictEqual(expected, 2, 'Nove dividido por três é igual a três');


const assert = require('assert');


// com array 
const sumAll = (values) => {
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });
  return sum;
}

assert.strictEqual(sumAll([1, 2]), 3);
assert.strictEqual(sumAll([1, 2, 3]), 6);
assert.strictEqual(sumAll([1, 2, 3, 4, 5]), 15);

const sumAllOperands = (...operands) => {
  return operands.reduce((acc, curr) => acc + curr);
}

assert.strictEqual(sumAllOperands(1, 2), 3);
assert.strictEqual(sumAllOperands(1, 2, 3), 6);
assert.strictEqual(sumAllOperands(1, 2, 3, 4, 5), 15);

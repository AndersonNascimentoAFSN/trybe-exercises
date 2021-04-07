const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => {
    curr.forEach((item) => acc.push(item));
    return acc;
    // return acc.concat(curr);
  },[]);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
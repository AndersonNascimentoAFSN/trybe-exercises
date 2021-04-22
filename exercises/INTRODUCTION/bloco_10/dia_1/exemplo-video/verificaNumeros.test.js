const numbers = require('./verificaNumeros');

describe('Requisito 1', () => {
  test('A função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
  });
});

describe('Requisito 2', () => {
  test(`A função recebe [1, 2, '3', 4, 5] e retorna false`, () => {
    expect(false).toEqual(numbers([1, 2, '3', 4, 5]));
  });
});

describe('Requisito 3', () => {
  test(`A função recebe [' '] e retorna false`, () => {
    expect(false).toEqual(numbers([' ']));
  });
});

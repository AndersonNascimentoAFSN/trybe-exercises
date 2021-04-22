const uppercase = require('./exercise_1');

describe('Testa função uppercase', () => {
  it ('Testa se o retorno da callback transformas as letras da string em maiúsculas', (done) => {
    uppercase('anderson', (callback) => {
      expect(callback).toBe('ANDERSON');
      done();
    });
  });
});

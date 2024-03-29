const { expect } = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Quanto a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);
    // expect(resposta).equals('reprovado');
    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quanto a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  });
});

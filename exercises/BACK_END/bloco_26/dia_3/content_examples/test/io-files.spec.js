const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('../io-files/leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('lê o arquivo leArquivo.js', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {

      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = leArquivo('arquivo.txt');

        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      it('é igual a "null"', () => {
        
        expect(resposta).to.be.equal(null);
      });
    });
  });
});


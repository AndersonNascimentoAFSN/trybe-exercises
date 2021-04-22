const { getAnimal, getAnimalByAge } = require('./animals');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade', () => {
    it('Verifique o primeiro nome do animal do array retornado', () => {
      expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat'}];
      return expect(getAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});

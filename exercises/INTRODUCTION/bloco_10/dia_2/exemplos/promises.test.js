const { findAnimalsByType, getListAnimals } = require('./promises');

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

// async / await

describe('Testando com o async/await', () => {
  test('Testando com async/await, testando o resolve', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
  
  test('Testando com async/await, testando o reject', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    }
  });
})

// resolves / rejects

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
       { name: 'Dorminhoco', age: 1, type: 'Dog' },
       { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
    });
  });
});

describe('Quando o tipo de animal não existe', () => {
  test('Retorna um erro', () => {
    expect.assertions(1);
    return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' });
  });
});

// com Async / Await

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});



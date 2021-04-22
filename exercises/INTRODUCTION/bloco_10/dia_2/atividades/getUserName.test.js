// Exercícios 2 e 3

const { findUserById, getUserName } = require('./getUserName');

describe('Quando o id do usuário existe', () => {
  it('Retorna nome do usuário pesquisado', () => {
    expect.assertions(1);
    return getUserName(4).then((userName) => {
      expect(userName).toEqual('Mark');
    });
  });

  it('Retorna nome do usuário pesquisado, usando async/await', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
  });

  it('Retorna nome do usuário pesquisado, usando resolves', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it('Retorna nome do usuário pesquisado, usando resolves com async/await', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark');
  })
});

describe('Quando o id do usuário não existe', () => {
  it('Retorna um erro', () => {
    expect.assertions(1);
    return getUserName(2).catch((error) => {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    });
  });

  it('Retorna um erro, usando async/await', async () => {
    expect.assertions(1);
    try {
      await getUserName(2);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  });

  it('Retorna um erro, usando rejects', () => {
    expect.assertions(1);
    return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  });

  it('Retorna um erro, usando rejects com async/await', async () => {
    expect.assertions(1);
    await expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  });
});

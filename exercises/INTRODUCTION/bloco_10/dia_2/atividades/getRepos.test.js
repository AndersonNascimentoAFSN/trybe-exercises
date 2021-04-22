const getRepos = require('./getRepos');

describe('Testa função getRepos', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const repos = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];

  it('Verifica se os repositórios se encontram na lista', () => {
    expect.assertions(1);
    return getRepos(url).then((repoList) => {
      expect(repoList).toContain(...repos);
    });
  });

  it('Verifica se os respositórios se encontram na lista, usando async/await', async () => {
    expect.assertions(1);
    const repoList = await getRepos(url);
    expect(repoList).toContain(...repos);
  });

  it('Verifica se os respositórios se encontram na lista, usando resolves', () => {
    expect.assertions(1);
    return expect(getRepos(url)).resolves.toContain(...repos);
  });

  it('Verifica se os respositórios se encontram na lista, usando resolves com async/await', async () => {
    await expect(getRepos(url)).resolves.toContain(...repos);
  });
});

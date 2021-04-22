const searchEmployee = require('./bonus');

describe('Testa função searchEmployee', () => {
  it('Testa se função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined(); 
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  });

  it('Testa se função searchEmployee retorna o primeiro nome do profissional que possui o ID informado', () => {
    expect(searchEmployee('5569-4', 'firstName')).toEqual('George');
  });

  it('Testa se a função searchEmployee retorna o último nome do profissional que possui o ID informado', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toEqual('Cook');
  });

  it('Testa se a função searchEmployee retorna o array de especialidades do profissional que possui o ID informado', () => {
    expect(searchEmployee('5569-4', 'specialities')).toContain('Frontend', 'Redux', 'React', 'CSS');
  });

  it('Testa se função searchEmployee retorna um erro quando a ID não é encontrada', () => {
    expect(() => searchEmployee('5434', 'firstName')).toThrow();
  });

  it(`Testa se a mensagem de erro da função searchEmployee quando não encontra o ID é 'ID não identificada'`, () => {
    expect(() => { searchEmployee('5434', 'firstName') }).toThrowError(new Error('ID não identificada'));
  })

  it('Testa se função searchEmployee retorna um erro quando a informação acessada não existe', () => {
    expect(() => { searchEmployee('4678-2', 'firsName') }).toThrow();
  })

  it(`Testa se a mensagem de erro da informação não encontrada é: 'Informação indisponível'`, () => {
    expect(() => { searchEmployee('4678-2', 'firsName') }).toThrowError(new Error('Informação indisponível'));
  })
});
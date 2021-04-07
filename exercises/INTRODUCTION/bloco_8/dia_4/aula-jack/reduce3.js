const assert = require('assert');

const players = [
  {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
  {fullName: 'Ronaldinh Gaúcho', email: 'bruxo@futebol.br'},
  {fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br'},
  {fullName: 'Marta Vieira da Silva', email: 'rainhamarta@gutebol.br'},
];

const newPlayers = players.reduce((prev, curr) => {
  prev[curr.fullName] = curr.email;
  return prev;
}, {});
console.log(newPlayers);
// Testes
const expectedValues = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinh Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@gutebol.br',
};

assert.deepStrictEqual(newPlayers, expectedValues);

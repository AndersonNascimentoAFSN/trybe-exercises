const assert = require('assert');

const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthPlane: 'Orleans, Santa Caratina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de caça'],
};

const expectedValue = 'Rodrigo Hilbert de Orleans, Santa Caratina';

const { name, birthPlane } = bestGuyInTheWorld;
// assert.strictEqual(`${bestGuyInTheWorld.name} de ${bestGuyInTheWorld.birthPlane}`, expectedValue);
assert.strictEqual(`${name} de ${birthPlane}`, expectedValue);

const removeDrink = require('./removeSabor');
  
let drinks = [];

beforeEach(() => {
  drinks = ['coca-cola', 'sukita', 'agua',
    'garapa', 'suco de laranja', 'groselha'];
});

describe('Remove sabor de bebida', () => {

  test('Remover agua', () => {
    expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha'])
      .toEqual(removeDrink(drinks, 'agua'));
  });

  test('Remover garapa', () => {
    expect(removeDrink(drinks, 'garapa')).toEqual(['coca-cola', 'sukita', 'agua', 'suco de laranja', 'groselha']);
  });

  test('Remover groselha caso exista', () => {
    expect(removeDrink(drinks, 'groselha')).not.toContain('groselha');
  });
});

const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokémon para começar.');
  }, 2000);
};

// Falso positivo aqui, cuidado!

test('pokeTips retorna a mensagem sobre Bulbasaur', (done) => {
  const callback = (data) => {
    expect(data).toBe('Bulbasaur é o melhor pokémon para começar.');
    done()
  };
  pokeTips(callback);
});
const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
};

const fetchPokemon = () => {
  requestPokemon((pokemon) => {
    appendPokemon(pokemon);
  });
};

const requestPokemon = (callback) => {
  setTimeout(() => {
    callback('Squirtle');
  }, 3000)
}

window.onload = fetchPokemon();

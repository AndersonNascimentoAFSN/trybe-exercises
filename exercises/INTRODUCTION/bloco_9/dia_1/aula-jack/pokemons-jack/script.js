const appendPokemon = (pokemon) => {
  const { name } = pokemon;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${name} </br> ${img.outerHTML}`;
  ul.appendChild(li);
};

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then((response) => {
    response.json().then((data) => {
      appendPokemon(data);
    });
  })
};

window.onload = fetchPokemon();

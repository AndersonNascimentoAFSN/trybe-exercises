const appendPokemon = (pokemon) => {
  const { name } = pokemon;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${name} </br> ${img.outerHTML}`;
  ul.appendChild(li);
};

// const fetchPokemon = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
//   .then((response) => {
//     response.json().then((data) => {
//       appendPokemon(data);
//     });
//   })
// };

// 2 forma
// const getPokemon = (pokemonName, callback) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       response.json().then((data) => {
//         appendPokemon(data);
//         callback ? callback : undefined;
//       })
//     });
// };

// const fetchPokemon = () => {
//   getPokemon('pikachu', 
//     getPokemon('squirtle', 
//     getPokemon('rattata'), 
//     getPokemon('mewtwo'))
//     );
// };

// 3 Forma

// const getPokemonPromise = (pokemonName) => {
//   return new Promise((resolve, reject) => {
//     if (pokemonName === 'rattata') {
//       reject('Esse pokemon é muito top para essa lista!')
//     } else {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then((response) => {
//         response.json().then((data) => {
//           appendPokemon(data);
//           resolve();
//       });
//     });
//     }
   
//   });

// };

// const fetchPokemon = () => {
//   getPokemonPromise('pikachu')
//   .then(() => getPokemonPromise('bulbasaur'))
//   .then(() => getPokemonPromise('charizard'))
//   .then(() => getPokemonPromise('rattata'))
//   .catch((error) => console.log(error))
// };


// 4 forma 

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
    if (pokemonName === 'rattata') {
      reject('Esse pokemon é muito top para essa lista!')
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        response.json().then((data) => {
          appendPokemon(data);
          resolve();
      });
    });
    }
   
  });

};

const fetchPokemon = async () => {
 try {
  await getPokemonPromise('bulbasaur');
  await getPokemonPromise('charizard');
  await getPokemonPromise('pikachu');
 }
 catch (error) {
   console.log(error)
 }
};

window.onload = fetchPokemon();

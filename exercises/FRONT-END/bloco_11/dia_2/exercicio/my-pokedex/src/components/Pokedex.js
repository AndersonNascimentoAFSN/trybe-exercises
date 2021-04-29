import React from 'react';
import Pokemon from './Pokemon';
import pokemons from  '../data';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokemon, index) =>
        <Pokemon
          pokemon={pokemon} key={pokemon.id}
        />)
    );
  }
}

export default Pokedex;

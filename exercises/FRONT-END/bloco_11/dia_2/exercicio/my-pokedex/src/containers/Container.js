import React from 'react';
import Pokedex from '../components/Pokedex';
import '../container.css';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Pokedex />
      </div>
    )
  }
}

export default Container;

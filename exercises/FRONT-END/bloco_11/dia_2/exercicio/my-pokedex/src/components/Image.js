import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img 
        src={this.props.pokemon.image} 
        alt={`pokemon ${this.props.pokemon.name}`}
      />
      )
  }
}

export default Image;

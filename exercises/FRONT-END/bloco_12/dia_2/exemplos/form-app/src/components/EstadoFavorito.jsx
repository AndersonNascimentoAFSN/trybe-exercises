import React, { Component } from 'react';

class EstadoFavorito extends Component {

  render() {
    const { value, handleValue } = this.props;

    let error = undefined
    if (value.length > 120) error = "Texto muito grande!"

    return (
      <li>
        <label for="estadoFavorito">
          Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
        </label>
        <textarea id="estadoFavorito" name="estadoFavorito" value={value} onChange={handleValue}/>

        <span>{error ? error : ''}</span>
      </li>
    )
  }
}

export default EstadoFavorito;

import React from 'react';
import PropTypes from 'prop-types';
import '../card.css';

class Pokemon extends React.Component {
  
  // handleClick() {
  //   console.log('this is: ', this);
  // }
  render(){

    const {name, type, image, 
      averageWeight: {value, measurementUnit} 
    } = this.props.pokemon;
    
    return (
      // <div className="c-card" onClick={ () => this.handleClick() }>
      <div className="c-card">
        <span>{name}</span>
        <span>{type}</span>
        <img src={image} alt={`pokemon ${this.name}`}/>
        <span>{value} {measurementUnit}</span>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
}

export default Pokemon;

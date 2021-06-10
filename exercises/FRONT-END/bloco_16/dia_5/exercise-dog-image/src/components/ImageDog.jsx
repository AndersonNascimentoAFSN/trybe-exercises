import React from 'react';
import PropTypes from 'prop-types';

function ImageDog(props) {
  const { srcImg, changeDog, bread } = props;
  return (
    <div className="Dog">
      <img src={ srcImg } alt="Dog" />
      <span>
        { `Raça: ${bread}` }
      </span>
      <div>
        <button type="button" onClick={ changeDog }>New Dog</button>
      </div>
    </div>
  );
}

export default ImageDog;

ImageDog.propTypes = {
  srcImg: PropTypes.string,
  changeDog: PropTypes.func.isRequired,
  bread: PropTypes.string,
};

ImageDog.defaultProps = {
  srcImg: '',
  bread: '',
};

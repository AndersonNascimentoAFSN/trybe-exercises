import React from 'react'
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import addClick from '../actions';

function ButtonClicks(props) {
  const { add } = props;
  return (
    <div>
      <button
        type="button"
        onClick={add}
      >
        Clique aqui
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick())
});

export default connect(null, mapDispatchToProps)(ButtonClicks);

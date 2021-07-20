import React from 'react';
import { connect } from 'react-redux';

function NumberClicks(props) {
  const { counter } = props
  return (
    <div>
      {counter}
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.clickReducer.counter,
});

export default connect(mapStateToProps)(NumberClicks);

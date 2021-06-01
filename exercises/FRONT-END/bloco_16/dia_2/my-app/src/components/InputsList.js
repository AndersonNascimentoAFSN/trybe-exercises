import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import AddAssigment from '../actions';

function InputsList(props) {
  const INITIAL_STATE = { textValue: '' };
  const [value, setValue] = useState(INITIAL_STATE);

  const { add } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Digite a tarefa"
        onChange={({target: { value }}) => setValue({textValue: value })}
        value={value.textValue}
      />
      <button type="button" onClick={ () => add(value) }>
        Adicionar tarefa
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(AddAssigment(value)),
});

export default connect(null, mapDispatchToProps)(InputsList);

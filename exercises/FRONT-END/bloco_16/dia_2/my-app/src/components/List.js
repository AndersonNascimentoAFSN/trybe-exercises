import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

function List(props) {
  const { list } = props;
  return (
    <div>
      <div>
        {list.map((element, index) => <p key={ index }>{element.textValue}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});

export default connect(mapStateToProps, null)(List);

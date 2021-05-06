import React, { Component } from 'react';

class Email extends Component {

  render() {
    const { value, handleValue } = this.props;

    return (
      <li>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" value={value} onChange={handleValue}/>
      </li>
    )
  }
}

export default Email;

import React, { Component } from "react";

class Nome extends Component {
  render() {
    const { value, handleValue } = this.props;

    return(
      <li>
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" value={value} onChange={handleValue}/>
    </li>
    )
  }
}

export default Nome;

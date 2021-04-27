import React from 'react';


class CreateCard extends React.Component {
  state = {
    input: ""
  }
  
  handleInput = (event) => {
    event.persist()
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <form OnSubmit={this.handleNewCard} className="new-card-form">
        <h4>Create Card</h4>
        <input onChange={this.handleInput} className="new-card-input" type="text" value={this.state.input} />
        <input className="new-card-input" type="submit" value="Create" />
      </form>
    )
  }
}
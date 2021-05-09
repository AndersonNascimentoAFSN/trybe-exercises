import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <h1>{ id }</h1>
      </div>
    )
  }
}

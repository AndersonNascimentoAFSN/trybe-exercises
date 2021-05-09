import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profiles extends Component {
  render() {

    const { solutions } = this.props;
    // console.log(solutions);

    return (
    <section>
      <ul>
        { solutions.map((solution) => 
         (
          <li key={solution.id}>
            <Link to={`/profiles/${solution.id}`}>{solution.name}</Link>
          </li>
          )
        )}
      </ul>
    </section> 
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Header extends Component {
  render() {
    // const users = [
    //   'anderson', 'felipe', 'bruno', 'thyago', 'yanni'
    // ];
    return (
      <header>
        <h1>Header Page</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/howto">HowTo</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

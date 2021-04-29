// import { Component } from "react";
import React from 'react';
import Container from '../containers/Container';
import '../header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Pokedex</h1>
        <Container/>
      </header>
    )
  }
}

export default Header;

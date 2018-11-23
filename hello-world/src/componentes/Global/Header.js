import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World Reactjs
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lee sobre React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;

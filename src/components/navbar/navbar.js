import React, { Component } from 'react';
import './navbar2.css';
import localization from '../../localization';

export default class Navbar extends Component {
constructor(props) {
  super(props);
  this.state = ({
    toggle: true
  })
}
  toggle = () => {
    this.setState(prevState => ({
    toggle: !prevState.toggle
  }));
  console.log(this.state.toggle);
  }
    render() {
      var navbarToggle = this.state.toggle ? 'navbar-toggle-hide' : 'navbar-toggle-show navbar-link-toggle'
      return (
        <div className="navbar">
          <nav onClick={this.toggle}>
            <i className="fas fa-bars"></i>
          </nav>
          <nav className="navbar-items navbar-items-right">
            <div className="navbar-link startpage">
              <a href="#first">Startsida</a>
            </div>
            <div className="navbar-link offerspage">
              <a href="#offers">Prislista</a>
            </div>
            <div className="navbar-link about-us">
              <a href="#info">Boka tid/Kontakta oss</a>
            </div>
          </nav>
        </div>
      );

  }
}

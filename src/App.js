import React, { Component } from 'react';
import './App.css';
import Firstpage from './components/firstpage/Firstpage';
import Offerspage from './components/offerspage/Offerspage';
import Infopage from './components/infopage/Infopage';
import Header from './components/Header/header';
import Navbar from './components/navbar/navbar';
import NavbarScrolled from './components/navbar/navbarScrolled';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <NavbarScrolled/>
        <Firstpage/>
        <Offerspage/>
        <Infopage/>
      </div>
    );
  }
}

export default App;

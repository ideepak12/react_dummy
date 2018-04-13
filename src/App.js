import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap/lib';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

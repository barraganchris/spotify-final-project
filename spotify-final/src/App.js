import React, { Component } from 'react';

import { hashHistory } from 'react-router';
// ABOVE is all imported from React

import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './components/Landing';
// ABOVE are imported Components

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Nav /> */}
          <div className="main-content">
            { this.props.children || <Landing /> }
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navigation/Navbar/Navbar.js';
import Mainbody from './Body/Mainbody/Mainbody.js';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Mainbody />
      </div>
    );
  }
}

export default App;

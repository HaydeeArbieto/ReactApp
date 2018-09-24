import React, { Component } from 'react';
import logo from './logo.svg';
import logohairdressing from './logotyp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logohairdressing} className="App-logo" alt="logohairdressing" />
          <h1 className="App-title">Welcome to Nina's Salong!</h1>
        </header>
        <p className="App-intro">
          Here is a app...
        </p>
        
        <div>
        </div>  
      </div>  
    );
  }
}

export default App;

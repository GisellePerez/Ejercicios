import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let greeting = 'Hello!';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello world!</h1>
        </header>
        <p className="App-intro">{greeting} I'm using React.js</p>
      </div>
    );
  }
}

export default App;

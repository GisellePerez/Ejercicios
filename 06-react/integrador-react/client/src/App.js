import React, { Component } from 'react';
import Header from './componets/header';
import Profile from './componets/profile';
import Repository from './componets/repository';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <div><Header/><Profile/><Repository/></div> 
      </div>
    )
  }
}

export default App;

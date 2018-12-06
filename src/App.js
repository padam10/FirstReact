import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            First React App
          </p>          
        </header>
        <p className = "AppIntro"></p>
        <Welcome></Welcome>        
      </div>
    );
  }
}

class Welcome extends Component {
  render(){

    return (
      <p>Hello World</p>
    );
  }
}
export default App;

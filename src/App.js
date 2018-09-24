import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="Style-Head">
          <img src={logo} className="Style-Logo" alt="DevMountain Logo"></img>
          <h1 className="Style-H1">Welcome to React</h1>
        </header>
        <div className="Style-Body">
        <h1 className="Style-H1">Learning React by doing</h1>
        <p className="Style-P">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 className="Style-H1">Edit the code in VS Code</h2>
        <p className="Style-P">Change the text in the .js file as well as the .css file</p>
        </div>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      </div>
    );
  }
}

export default App;

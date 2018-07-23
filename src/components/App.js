import React, { Component } from 'react';
import './App.css';
import DisplayCounter from '../containers/DisplayCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayCounter />
      </div>
    );
  }
}

export default App;

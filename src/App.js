import React, { Component } from 'react';
import './App.css';
import JumboWidget from './components/widget';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="background">
          <JumboWidget />
        </div>

      </div>
    );
  }
}

export default App;

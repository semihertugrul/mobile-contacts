import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts';

class App extends Component {
  state = {
    Contacts: [
      {
        name: 'semih',
        phone: '1234',
      },
      {
        name: 'ali',
        phone: '2345',
      },
      {
        name: 'veli',
        phone: '4567',
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.Contacts} />
      </div>
    );
  }
}

export default App;

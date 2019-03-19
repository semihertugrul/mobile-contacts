import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class Contacts extends Component {
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
      <div>
        <List contacts={this.state.Contacts} />
        <Form />
      </div>
    );
  }
}

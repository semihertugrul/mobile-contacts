import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="text area" />
        <ul>
          {this.props.contacts.map(contact => {
            return <li key={contact.phone}>{contact.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
